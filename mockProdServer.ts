import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 导入所有 mock 文件
const modules = import.meta.glob('./mock/**/*.ts', { eager: true })

const mockModules = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...(modules[key] as any).default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
} 