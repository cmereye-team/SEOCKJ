<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import p from './../../package.json'
const app = useAppConfig() as AppConfigInput
const navLists = [
  '主頁',
  '最新消息',
  '品牌理念',
  '牙科服務',
  '醫生團隊',
  '個案分享',
  '聯絡我們',
]
</script>

<template>
  <footer class="bgColor">
    <!-- <section> -->
    <div class="footer-content">
      <div class="footer-content-nav">
        <div v-for="(navItem, navIndex) in navLists" :key="navIndex">
          {{ navItem }}
        </div>
      </div>
      <div class="footer-content-logo_one">
        <img src="@/assets/images/logo_2.png" alt="" />
      </div>
      <div class="footer-content-text">
        全程式預約一體化診療服務，讓每一位顧客享受健康微笑之旅。
      </div>
      <div class="footer-content-icon">
        <div class="footer-content-icon-in">
          <img src="@/assets/images/icon_1.png" />
        </div>
        <div class="footer-content-icon-in">
          <img src="@/assets/images/icon_2.png" />
        </div>
        <div class="footer-content-icon-in">
          <img src="@/assets/images/icon_3.png" />
        </div>
      </div>
      <div class="w-30 md:absolute md:right-20 md:bottom-10">
        <img class="w-full" src="@/assets/images/logo.png" alt="" />
      </div>
    </div>
    <!-- </section> -->
  </footer>
</template>

<style lang="scss" scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 700;
  width: 100%;
  padding: 60px;
  box-sizing: border-box;
  &-nav {
    display: flex;
    justify-content: center;
    & > div {
      color: #fff;
      padding: 10px 20px;
      font-size: 22px;
      text-shadow: 0px 0px 4px rgba(255, 120, 117, 0.45);
    }
  }
  &-logo_one {
    padding: 25px 0;
    & > img {
      width: 150px;
    }
  }
  &-text {
    width: 360px;
    color: #fff;
    font-size: 22px;
    text-align: center;
    line-height: 160%;
    text-shadow: 0px 0px 4px rgba(255, 120, 117, 0.45);
  }
  &-icon {
    margin-top: 30px;
    display: flex;
    &-in {
      padding: 0 12.5px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer-content {
    padding: 50px 30px;
    &-nav {
      flex-direction: column;
      text-align: center;
      font-size: 18px;
    }
    &-text {
      margin-top: 20px;
    }
    &-icon {
      margin: 30px 0;
    }
  }
}
</style>
