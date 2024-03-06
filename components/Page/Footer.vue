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

let _bool = ref(false)

const centerDialogVisible = ref(false)
const handlecopywechatcode = () =>{
  if (navigator.clipboard) {  
      navigator.clipboard.writeText('ckjhongkong').then(function() {  
        _bool.value = true
      }, function(err) {
          ElMessage({
            showClose: true,
            message: '操作異常，請刷新頁面試試',
            type: 'warning',
          })
      });  
  } else {  
      alert('Clipboard API is not supported by your browser.');  
  }  
}

const handleopenwechat = () =>{
  window.location.href = "weixin://"
}

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
        <div class="footer-content-icon-in">
          <div class="weChat">
            <img src="@/assets/images/navIcon_3.png" alt="weChat" />
            <div class="navbarBox">
              <div class="navbarBox-in">
                <div class="weChat"><img src="https://static.cmereye.com/imgs/2023/09/a43a869a1fc07eea.jpg" alt="二维码"></div>
              </div>
            </div>
          </div>
          <div class="weChat-mb" @click="handlecopywechatcode()">
            <img src="@/assets/images/navIcon_3.png" alt="weChat" />
          </div>
        </div>
      </div>
      <div class="footer-content-Disclaimer">
        <nuxt-link to="/privacyPolicy">{{$t('components.footer.privacy_policy')}}</nuxt-link>
        &
        <nuxt-link to="/disclaimer">{{$t('components.footer.disclaimer')}}</nuxt-link>
      </div>
      <div class="footer-content-copyright">©2024 {{$t('components.footer.all_rights_reserved')}}</div>
    </div>
    <div :class="['dialogBox',{show:_bool}]" @click="_bool=false">
      <div :class="['dialogBox-in',{'show-in':_bool}]" @click.stop="">
        <div class="title">
          WeChat ID已複製
        </div>
        <div class="content">
          點擊「打開微信」進入微信，點右上⊕，粘貼ID，添加客服開始免費咨詢！
        </div>
        <div class="btn">
          <el-button @click="_bool = false">取消</el-button>
          <el-button type="primary" @click="handleopenwechat">
            打開微信
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes contentIn {
  to{
    opacity: 1;
  }
}
@keyframes topIn {
  50%{
    top: 52%;
  }
  75%{
    top: 49%;
  }
  100%{
    top: 50%;
    opacity: 1;
  }
}
.dialogBox{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0,0,0,.3);
  opacity: 0;
  display: none;
  &.show{
    display: block;
    animation: contentIn 1s forwards;
  }
  &-in{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-50%);
    width: calc(100% - 60px);
    height: auto;
    max-width: 768px;
    z-index: 1000;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    padding: 10px 30px 15px;
    border-radius: 10px;
    &.show-in{
      animation: topIn .7s ease-out forwards;
    }
    .title{
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    .content{
      font-size: 16px;
      margin: 10px 0 20px;
    }
    .btn{
      display: flex;
      justify-content: center;
    }
  }
}
@keyframes animBottomIn {
  from{
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
}
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
      .weChat{
        width: 35px;
        position: relative;
        img{
          width: 100%;
        }
        &:hover .navbarBox{
          display: flex;
          animation: animBottomIn 1s forwards;
        }
        .navbarBox{
          position: absolute;
          bottom: 100%;
          padding-right: 10px;
          display: none;
          opacity: 0;
          transform: translateY(20px);
          &-in{
            transition: all .5s;
            background: var(--indexColor1);
            height: 100%;
            padding: 20px;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            color: #fff;
            .weChat{
              width: 200px;
              background: var(--indexColor3);
              img{
                width: 100%;
              }
            }
          }
        }
      }
      .weChat-mb{
        display: none;
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
      &-in{
        .weChat{
          display: none;
        }
        .weChat-mb{
          width: 35px;
          display: block;
          img{
            width: 100%;
          }
        }
      }
    }
    &-Disclaimer{
      margin-top: 0;
    }
  }
}
</style>
