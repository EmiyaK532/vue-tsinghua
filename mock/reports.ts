import { MockMethod } from 'vite-plugin-mock'
import type { ApiResponse } from '../src/types/api'
import fs from 'fs'
import path from 'path'

// 模拟报告列表数据
const reportsList = [
  {
    id: 1,
    title: '2021年度简报',
    fileName: '2021年度简报.pdf',
    fileUrl: '/api/reports/download/1',
    uploadTime: '2016-12-31T00:00:00.000Z',
    fileSize: 2621440 // 实际文件大小会在读取文件时更新
  },
  {
    id: 2,
    title: '2023年度简报',
    fileName: '2023年度简报.pdf',
    fileUrl: '/api/reports/download/2',
    uploadTime: '2015-12-31T00:00:00.000Z',
    fileSize: 1887436
  },
  {
    id: 3,
    title: '2012年度简报',
    fileName: '2012年度简报.pdf',
    fileUrl: '/api/reports/download/3',
    uploadTime: '2014-12-31T00:00:00.000Z',
    fileSize: 2202009
  }
]

// 更新文件大小
const updateFileSizes = () => {
  const pdfDir = path.join(process.cwd(), 'public/mock/pdfs')
  reportsList.forEach(report => {
    try {
      const filePath = path.join(pdfDir, report.fileName)
      const stats = fs.statSync(filePath)
      report.fileSize = stats.size
    } catch (error) {
      console.warn(`无法读取文件 ${report.fileName} 的大小:`, error)
    }
  })
}

// 初始化时更新文件大小
updateFileSizes()

export default [
  // 获取报告列表
  {
    url: '/api/reports',
    method: 'get',
    response: (): ApiResponse => {
      return {
        code: 200,
        message: 'success',
        data: reportsList
      }
    }
  },

  // 下载报告
  {
    url: '/api/reports/download/:id',
    method: 'get',
    rawResponse: async (req, res) => {
      try {
        const id = req.url.split('/').pop()
        console.log('Requested file ID:', id)
        const report = reportsList.find(r => r.id === Number(id))
        
        if (!report) {
          console.log('Report not found for ID:', id)
          res.statusCode = 404
          res.end(JSON.stringify({ error: 'Report not found' }))
          return
        }

        const pdfPath = path.join(process.cwd(), 'public/mock/pdfs', report.fileName)
        console.log('Attempting to read PDF from:', pdfPath)

        if (!fs.existsSync(pdfPath)) {
          console.log('PDF file not found at path:', pdfPath)
          res.statusCode = 404
          res.end(JSON.stringify({ error: 'PDF file not found' }))
          return
        }

        const pdfBuffer = fs.readFileSync(pdfPath)
        console.log('Successfully read PDF file, size:', pdfBuffer.length)

        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(report.fileName)}`)
        res.setHeader('Content-Length', pdfBuffer.length)
        
        res.statusCode = 200
        res.end(pdfBuffer)
      } catch (error) {
        console.error('Error in download handler:', error)
        res.statusCode = 500
        res.end(JSON.stringify({ 
          error: error.message || 'Internal server error',
          stack: error.stack
        }))
      }
    }
  }
] as MockMethod[] 