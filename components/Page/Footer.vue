<script lang="ts" setup>

import { useAppState } from '~/stores/appState'
const appState = useAppState()
// const navLists = [
//   '主頁',
//   '最新消息',
//   '品牌理念',
//   '牙科服務',
//   '醫生團隊',
//   '個案分享',
//   '聯絡我們',
// ]
const navLists = [
  {
    name: '主頁',
    link: '/',
    child: [],
  },
  // {
  //   name: '最新消息',
  //   link: '/newsPage',
  //   child: [],
  // },
  {
    name: '品牌理念',
    link: `/brand/${appState.brand}`,
    child: [],
  },
  {
    name: '牙科服務',
    link: `/dental-service`,
    // child: [
    //   {
    //     name: '全科牙科',
    //     link: '',
    //   },
    //   {
    //     name: '種植牙科',
    //     link: '',
    //   },
    //   {
    //     name: '矯齒牙科',
    //     link: '',
    //   },
    //   {
    //     name: '美容牙科',
    //     link: '',
    //   },
    //   {
    //     name: '兒童牙科',
    //     link: '',
    //   }
    // ],
  },
  {
    name: '醫生團隊',
    link: `/medical-team`,
    child: [
      {
        name: '羅湖區',
        link: '/medical-team',
      },
      {
        name: '福田區',
        link: '/medical-team',
      },
      {
        name: '南山區',
        link: '/medical-team',
      },
      {
        name: '寶安區',
        link: '/medical-team',
      },
      {
        name: '龍華區',
        link: '/medical-team',
      },
    ],
  },
  // {
  //   name: '個案分享',
  //   link: '/aboutUs',
  //   child: [],
  // },
  {
    name: '聯絡我們',
    link: '/contactUs',
    child: [],
  },
]


</script>

<template>
  <footer class="bgColor">
    <div class="footer-content bigPageCon">
      <div class="footer-content-nav">
        <div v-for="(navItem, navIndex) in navLists" :key="navIndex">
          <nuxt-link :to="navItem.link">
            {{ navItem.name }}
          </nuxt-link>
        </div>
      </div>
      <div class="footer-content-logo_one">
        <nuxt-link :to="'/'">
          <img src="@/assets/images/logo_2.png" alt="" />
        </nuxt-link>
      </div>
      <div class="footer-content-text">
        全程式預約一體化診療服務 {{'\n'}}讓每一位顧客享受健康微笑之旅
      </div>
      <div class="footer-content-icon">
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">
            <img src="@/assets/images/icon_1.png" />
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
            <img src="@/assets/images/icon_2.png" />
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.youtube.com/channel/UCKYINBITo-8P37-SQDRSr_g" target="_blank">
            <img src="@/assets/images/icon_3.png" />
          </nuxt-link>
        </div>
      </div>
      <!-- <div class="w-30 md:absolute md:right-20 md:bottom-10">
        <nuxt-link :to="'/'">
          <img class="w-full" src="https://static.cmereye.com/imgs/2023/05/5e148b7d20c0be51.png" alt="" />
        </nuxt-link>
      </div> -->
    </div>
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
      cursor: pointer;
    }
  }
  &-logo_one {
    padding: 25px 0;
    & > img {
      width: 150px;
    }
  }
  &-text {
    // max-width: 360px;
    color: #fff;
    font-size: 22px;
    text-align: center;
    line-height: 160%;
    text-shadow: 0px 0px 4px rgba(255, 120, 117, 0.45);
    white-space: pre-wrap;
  }
  &-icon {
    margin-top: 30px;
    display: flex;
    &-in {
      padding: 0 12.5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer-content {
    padding: 50px 30px 170px;
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
