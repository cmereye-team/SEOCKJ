<script lang="ts" setup>

import { useAppState } from '~/stores/appState'
const appState = useAppState()
const navLists = [
  {
    name: 'components.footer.nav_index',
    link: '/',
  },
  {
    name: 'components.footer.nav_brand',
    link: `/brand/${appState.brand}`,
  },
  {
    name: 'components.footer.nav_dental_service',
    link: `/dental-service`,
  },
  {
    name: 'components.footer.nav_medical_team',
    link: `/medical-team`,
  },
  // {
  //   name: '個案分享',
  //   link: '/aboutUs',
  // },
  {
    name: 'components.footer.nav_contactUs',
    link: '/contactUs',
  },
]


</script>

<template>
  <footer class="bgColor">
    <div class="footer-content bigPageCon">
      <div class="footer-content-nav">
        <div v-for="(navItem, navIndex) in navLists" :key="navIndex">
          <nuxt-link :to="navItem.link">
            {{ $t(navItem.name) }}
          </nuxt-link>
        </div>
      </div>
      <div class="footer-content-logo_one">
        <nuxt-link :to="'/'">
          <img src="@/assets/images/logo_2.png" alt="" />
        </nuxt-link>
      </div>
      <div class="footer-content-text">
        {{$t('components.footer.text1')}} {{'\n'}}{{$t('components.footer.text2')}}
      </div>
      <div class="footer-content-icon">
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.facebook.com/ckjdental.hk/" target="_blank">
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
      <div class="footer-content-copyright">©2023 CKJ愛康健齒科版權所有</div>
      <div class="footer-content-Disclaimer">
        <nuxt-link to="/privacyPolicy">私隱政策</nuxt-link>
        &
        <nuxt-link to="/disclaimer">免責條款</nuxt-link>
      </div>
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
  &-copyright{
    color: #fff;
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
  }
  &-Disclaimer{
    color: #fff;
    font-size: 16px;
    text-align: center;
    a{
      transition: all .3s;
      display: inline-block;
      &:hover{
        border-bottom: 1px solid #fff;
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
    &-copyright{
      margin-top: 0;
    }
  }
}
</style>
