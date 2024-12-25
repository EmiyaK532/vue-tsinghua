<script setup lang="ts">
const contactInfo = {
  phone: "0516-83885606",
  fax: "0516-83885606",
  website: "http://skl.cumt.edu.cn",
  address: "江苏省徐州市大学路1号中国矿业大学南湖校区",
  postcode: "221116"
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <img src="/images/logo.png" alt="实验室 Logo" class="footer-logo" />
        <div class="lab-name">
          煤炭灾害防控全国重点实验室
          <div class="lab-name-en">
            National Key Laboratory of 
            Coal Disaster Prevention and Control
          </div>
        </div>
      </div>
      <div class="footer-right">
        <div class="contact-info">
          <div class="info-group">
            <p>电话：{{ contactInfo.phone }}</p>
            <p>传真：{{ contactInfo.fax }}</p>
            <p>网址：{{ contactInfo.website }}</p>
          </div>
          <div class="info-group">
            <p>地址：{{ contactInfo.address }}</p>
            <p>邮编：{{ contactInfo.postcode }}</p>
          </div>
        </div>
        <div class="qr-codes">
          <a href="https://www.cumt.edu.cn/" target="_blank">
            <div class="qr-code">
            <img src="/images/中国矿业大学.png" alt="中国矿业大学" />
            <span>中国矿业大学</span>
          </div>
          </a>
          <a href="https://safe.cumt.edu.cn/" target="_blank">
            <div class="qr-code">
            <img src="/images/安全管理.png" alt="安全工程学院" />
            <span>安全工程学院</span>
          </div>
          </a>
          <a href="https://www.ccteg.cn/zh/" target="_blank">
            <div class="qr-code">
            <img src="/images/中国煤炭科工.png" alt="中国煤炭科工集团" />
            <span>中国煤炭科工集团</span>
          </div>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright 2024 煤炭灾害防控全国重点实验室
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #1e4b94;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-logo {
  height: 100px;
  /* margin-bottom: auto; */
  width: auto;
}

.lab-name {
  font-size: 1.2rem;
  font-weight: bold;
  /* margin-bottom: auto; */
}

.lab-name-en {
  font-size: 0.8rem;
  font-weight: normal;
  opacity: 0.8;
  margin-top: 0.5rem;
}

.footer-right {
  display: flex;
  gap: 3rem;
}

.contact-info {
  display: flex;
  gap: 3rem;
}

.info-group p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.qr-codes {
  display: flex;
  gap: 1.5rem;
}

.qr-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.qr-code a {
  text-decoration: none;
  /* color: inherit; */
}

.qr-code img {
  width: 95px;
  height: 90px;
  background-color: white;
  padding: 4px;
  border-radius: 4px;
}

.qr-code span {
  font-size: 0.8rem;
  opacity: 0.9;
  color: white;
}

.copyright {
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.8;
  padding-top: 1.5rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
}

@media (max-width: 1200px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-right {
    flex-direction: column;
    align-items: center;
  }

  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }

  .qr-codes {
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .footer-left {
    flex-direction: column;
    text-align: center;
  }

  .qr-codes {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-logo {
    height: 50px;
  }

  .lab-name {
    font-size: 1rem;
  }

  .lab-name-en {
    font-size: 0.7rem;
  }
}
</style> 