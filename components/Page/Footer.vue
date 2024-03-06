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
    link: `/dental-service/implant`,
  },
  {
    name: 'components.header.menuLists.health-care-voucher.name',
    link: `/health-care-voucher`,
  },
  {
    name: 'components.header.menuLists.menu_news.name',
    link: `/news/coverage`,
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
  <div class="bgColor">
    <div class="footer-content bigPageCon">
      <div class="footer-content-nav">
        <div v-for="(navItem, navIndex) in navLists" :key="navIndex">
          <nuxt-link :to="navItem.link" :title="$t(navItem.name)">
            {{ $t(navItem.name) }}
          </nuxt-link>
        </div>
      </div>
      <div class="footer-content-logo_one">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
          <img src="@/assets/images/logo_2.svg" alt="logo" />
        </nuxt-link>
      </div>
      <div class="footer-content-text">
        {{$t('components.footer.text1')}} {{'\n'}}{{$t('components.footer.text2')}}
      </div>
      <div class="footer-content-icon">
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.facebook.com/ckjdental.hk/" target="_blank">
            <img src="@/assets/images/icon_1.png" alt="facebook" />
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
            <img src="@/assets/images/icon_2.png" alt="instagram" />
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA" target="_blank">
            <img src="@/assets/images/icon_3.png" alt="youtube" />
          </nuxt-link>
        </div>
      </div>
      <div class="footer-content-Disclaimer">
        <nuxt-link to="/privacyPolicy">{{$t('components.footer.privacy_policy')}}</nuxt-link>
        &
        <nuxt-link to="/disclaimer">{{$t('components.footer.disclaimer')}}</nuxt-link>
      </div>
      <div class="footer-content-copyright">©2024 {{$t('components.footer.all_rights_reserved')}}</div>
    </div>
  </div>
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
      text-align: center;
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
    text-align: center;
    margin-top: 5px;
  }
  &-Disclaimer{
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    a{
      transition: all .3s;
      display: inline-block;
      border-bottom: 1px solid var(--indexColor);
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
    &-Disclaimer{
      margin-top: 0;
    }
  }
}
</style>
