<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { smallPhoneNum, phoneNum } from '~/assets/js/common'
import serviceLists from '~/assets/js/service'
const appState = useAppState()
const navLists = ref([
  {
    name: 'components.footer.nav_index',
    link: '/',
    children: [],
    show: false
  },
  {
    name: '關於我們',
    link: '/aboutsUs',
    children: [],
    show: false
  },
  // {
  //   name: 'components.footer.nav_brand',
  //   link: `/brand/course`,
  //   children: [
  //     {
  //       name: 'components.header.menuLists.menu_brand.course',
  //       link: '/brand/course',
  //     },
  //     {
  //       name: 'components.header.menuLists.menu_brand.honor',
  //       link: '/brand/honor',
  //     },
  //   ],
  //   show: false
  // },
  {
    name: 'components.footer.nav_dental_service',
    link: `/dental-service`,
    children: [
      ...serviceLists
    ],
    show: false
  },
  {
    name: 'components.header.menuLists.health-care-voucher.name',
    link: `/health-care-voucher`,
    children: [],
    show: false
  },
  {
    name: 'components.header.menuLists.federation-of-trade-unions-zone.name',
    link: `/federation-of-trade-unions-zone`,
    children: [],
    show: false
  },
  {
    name: 'components.header.menuLists.menu_news.name',
    link: `/news/coverage`,
    children: [
      {
        name: 'components.header.menuLists.menu_news.coverage',
        link: '/news/coverage',
      },
      {
        name: 'components.header.menuLists.menu_news.information',
        link: '/news/information',
      },
      {
        name: 'components.header.menuLists.menu_news.tooth-wiki',
        link: '/news/tooth-wiki',
      },
    ],
    show: false
  },
  {
    name: 'components.footer.nav_medical_team',
    link: `/medical-team`,
    children: [
      {
        name: 'components.areaTabs.luohu',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.futian',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.nanshan',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.baoan',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.longhua',
        link: '/medical-team',
      },
    ],
    show: false
  },
  {
    name: 'components.footer.nav_contactUs',
    link: '/contactUs',
    children: [],
    show: false
  },
])

let _bool = ref(false)

const centerDialogVisible = ref(false)
const handlecopywechatcode = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText('ckjhongkong').then(
      function () {
        _bool.value = true
      },
      function (err) {
        ElMessage({
          showClose: true,
          message: '操作異常，請刷新頁面試試',
          type: 'warning',
        })
      }
    )
  } else {
    alert('Clipboard API is not supported by your browser.')
  }
}

const handleopenwechat = () => {
  window.location.href = 'weixin://'
}

const handlembMenu = (navIndex) => {
  // console.log(navIndex)
  navLists.value[navIndex].show = !navLists.value[navIndex].show
}
</script>

<template>
  <div class="bgColor footerBox">
    <div class="footer-l">
      <div class="footer-content bigPageCon">
        <!-- <div class="footer-content-nav">
        <div v-for="(navItem, navIndex) in navLists" :key="navIndex">
          <nuxt-link :to="'#'" :title="navItem.name">
            {{ navItem.name }}
          </nuxt-link>
        </div>
      </div> -->
        <div class="footer-content-logo_one">
          <nuxt-link
            :to="'/'"
            title="深圳愛康健口腔醫院"
            alt="深圳愛康健口腔醫院"
          >
            <img srcset="@/assets/images/logo_2.svg 768w, @/assets/images/footerLogo.svg" src="@/assets/images/footerLogo.svg" alt="logo" />
          </nuxt-link>
        </div>
        <div class="footer-content-text">
          {{ '29年專科 • 專業 • 專注\n港人首選一站式連鎖牙科品牌' }}
          <nuxt-link :to="`tel: ${phoneNum}`" class="footer-content-text-tel">
            <img src="@/assets/images/navIcon_1.png" alt="" />
            <span>香港熱線：(852) {{ smallPhoneNum }}</span>
          </nuxt-link>
        </div>
        <div class="footer-content-icon">
          <div class="footer-content-icon-in">
            <nuxt-link
              to="https://www.facebook.com/ckjdental.hk/"
              target="_blank"
            >
              <img
                src="@/assets/images/icon_facebook.svg"
                alt="facebook"
                title="facebook"
              />
            </nuxt-link>
          </div>
          <div class="footer-content-icon-in">
            <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
              <img
                src="@/assets/images/icon_instagram.svg"
                alt="instagram"
                title="instagram"
              />
            </nuxt-link>
          </div>
          <div class="footer-content-icon-in">
            <nuxt-link
              to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA"
              target="_blank"
            >
              <img
                src="@/assets/images/icon_youtube.svg"
                alt="youtube"
                title="youtube"
              />
            </nuxt-link>
          </div>
          <div class="footer-content-icon-in">
            <div class="weChat">
              <img src="@/assets/images/navIcon_3.png" alt="weChat" />
              <div class="navbarBox">
                <div class="navbarBox-in">
                  <div class="weChat">
                    <img
                      src="https://static.cmereye.com/imgs/2023/09/a43a869a1fc07eea.jpg"
                      alt="二维码"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="weChat-mb" @click="handlecopywechatcode()">
              <img src="@/assets/images/navIcon_3.png" alt="weChat" />
            </div>
          </div>
        </div>
        <div class="footer-content-Disclaimer">
          <nuxt-link to="/disclaimer">私隱政策</nuxt-link>
          &
          <nuxt-link to="privacyPolicy">免責條款</nuxt-link>
        </div>
        <div class="footer-content-copyright">
          ©2024 CKJ愛康健齒科版權所有
        </div>
        <div class="footer-content-copyright">
          本網站資訊僅供參考，不能作診療及醫療為依據
        </div>
      </div>
    </div>
    <div class="footer-c">
      <div class="footer-c-nav">
        <div :class="{serviceNavItem: navItem.link === '/dental-service'}" v-for="(navItem, navIndex) in navLists" :key="navIndex">
          <nuxt-link class="pcpl" :to="navItem.link" :title="$t(navItem.name)">
            {{ $t(navItem.name) }}
          </nuxt-link>
          <nuxt-link :class="{haschild: navItem.children.length,show: navItem.show,mbpl:true}" :to="!navItem.children.length ? navItem.link : 'javaScript:void(0)'" :title="$t(navItem.name)" @click="handlembMenu(navIndex)">
            {{ $t(navItem.name) }}
          </nuxt-link>
          <section v-if="navItem.children.length">
            <div class="pc_children" v-if="navItem.show">
              <div class="pc_children-in" v-for="(navItemChild,navItemChildIndex) in navItem.children" :key="navItemChildIndex">
                <nuxt-link :to="navItemChild.link">
                  {{ $t(navItemChild.name)}}
                </nuxt-link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="footer-r">
      <nuxt-link :to="`tel: ${phoneNum}`" class="footer-content-text-tel">
        <img src="@/assets/images/navIcon_1.png" alt="" />
        <span>香港熱線：(852) {{ smallPhoneNum }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="566" height="6" viewBox="0 0 566 6" fill="none">
<path d="M3 3H563" stroke="#FFC700" stroke-width="5" stroke-linecap="round"/>
</svg>
      </nuxt-link>
      <div class="serviceCar">
        <div class="serviceCar-content">
          <div class="serviceCar-content-item" :style="{order: item.footerOrder}" v-for="(item,index) in serviceLists" :key="index">
            <nuxt-link :class="`order-${item.footerOrder}`" :to="item.link"><span>{{$t(item.name)}}</span></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div :class="['dialogBox', { show: _bool }]" @click="_bool = false">
      <div :class="['dialogBox-in', { 'show-in': _bool }]" @click.stop="">
        <div class="title">WeChat ID已複製</div>
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
  to {
    opacity: 1;
  }
}
@keyframes topIn {
  50% {
    top: 52%;
  }
  75% {
    top: 49%;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}
.dialogBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  display: none;
  &.show {
    display: block;
    animation: contentIn 1s forwards;
  }
  &-in {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
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
    &.show-in {
      animation: topIn 0.7s ease-out forwards;
    }
    .title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    .content {
      font-size: 16px;
      margin: 10px 0 20px;
    }
    .btn {
      display: flex;
      justify-content: center;
    }
  }
}
@keyframes animBottomIn {
  from {
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.footerBox{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 94px 300px;
  .footer-c{
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 97px;
    &-nav{
      display: flex;
      flex-direction: column;
      font-size: 22px;
      line-height: 160%; 
      color: #fff;
      &>div{
        margin: 10px 0;
        a{
          color: #fff;
        }
        &.serviceNavItem{
          display: none;
        }
      }
      .mbpl{
        display: none;
      }
      .pc_children{
        display: none;
      }
    }
  }
  .footer-r{
    flex: 1;
    .footer-content-text-tel{
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 38px;
        font-weight: 900;
        position: relative;
        & > img {
          width: 40px;
          height: auto;
          margin-right: 13px;
        }
        &>svg{
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 566px;
        }
    }
    .serviceCar{
      &-content{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        &-item{
          margin-top: 23px;
          &>a{
            position: relative;
            span{
              color: #fff;
              font-size: 22px;
            }
            &.order-12{
              display: none;
            }
            &:after{
              content: '';
              height: 10px;
              width: 100%;
              background: #fff;
              position: absolute;
              bottom: -8px;
              left: 0;
              border-radius: 5px;
              transform: scaleY(.2);
            }
          }
        }
      }
    }
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
  padding: 40px 0;
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
    img {
      width: 127px;
    }
  }
  &-text {
    color: #fff;
    font-size: 22px;
    text-align: center;
    line-height: 160%;
    text-shadow: 0px 0px 4px rgba(255, 120, 117, 0.45);
    white-space: pre-wrap;
    &-tel {
      margin-top: 25px;
      display: flex;
      align-items: center;
      & > img {
        width: 26px;
        height: 24px;
        margin-right: 13px;
      }
    }
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
      .weChat {
        width: 35px;
        position: relative;
        img {
          width: 100%;
        }
        &:hover .navbarBox {
          display: flex;
          animation: animBottomIn 1s forwards;
        }
        .navbarBox {
          position: absolute;
          bottom: 100%;
          padding-right: 10px;
          display: none;
          opacity: 0;
          transform: translateY(20px);
          &-in {
            transition: all 0.5s;
            background: var(--indexColor1);
            height: 100%;
            padding: 20px;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            color: #fff;
            .weChat {
              width: 200px;
              background: var(--indexColor3);
              img {
                width: 100%;
              }
            }
          }
        }
      }
      .weChat-mb {
        display: none;
      }
    }
  }
  &-copyright {
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
  }
  &-Disclaimer {
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
    a {
      transition: all 0.3s;
      display: inline-block;
      border-bottom: 1px solid var(--indexColor);
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .footer-content {
    padding: 3.125vw;
    &-nav {
      & > div {
        padding: 0.5208vw 1.0417vw;
        font-size: 1.1458vw;
        text-shadow: 0px 0px 0.2083vw rgba(255, 120, 117, 0.45);
      }
    }
    &-logo_one {
      padding: 1.3021vw 0;
      img {
        width: 6.6146vw;
      }
    }
    &-text {
      font-size: 1.1458vw;
      &-tel {
        margin-top: 1.3021vw;
        & > img {
          width: 1.3542vw;
          height: 1.25vw;
          margin-right: 0.6771vw;
        }
      }
    }
    &-icon {
      margin-top: 1.5625vw;
      &-in {
        padding: 0 0.651vw;
        .weChat {
          .navbarBox {
            padding-right: 0.5208vw;
            transform: translateY(1.0417vw);
            &-in {
              padding: 1.0417vw;
              border-radius: 0.5208vw;
              .weChat {
                width: 10.4167vw;
              }
            }
          }
        }
      }
    }
    &-copyright {
      font-size: 0.8333vw;
      margin-top: 0.2604vw;
    }
    &-Disclaimer {
      font-size: 0.8333vw;
      margin-top: 1.0417vw;
    }
  }
   .footerBox{
    padding: 4.8958vw 15.625vw;
    .footer-c{
      margin: 0 5.0521vw;
      &-nav{
        font-size: 1.1458vw;
        &>div{
          margin: .5208vw 0;
        }
      }
    }
    .footer-r{
      .footer-content-text-tel{
          margin-bottom: 1.5625vw;
          font-size: 1.9792vw;
          & > img {
            width: 2.0833vw;
            margin-right: .6771vw;
          }
          &>svg{
            bottom: -1.3021vw;
            width: 29.4792vw;
          }
      }
      .serviceCar{
        &-content{
          &-item{
            margin-top: 1.1979vw;
            &>a{
              span{
                font-size: 1.1458vw;
              }
              &:after{
                height: .5208vw;
                bottom: -0.4167vw;
                border-radius: .2604vw;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer-content {
    padding: 10px 0 170px;
    &-nav {
      flex-direction: column;
      text-align: center;
      font-size: 18px;
    }
    &-text {
      margin-top: 20px;
      font-size: 20px;
    }
    &-icon {
      margin: 30px 0;
      &-in {
        padding: 0 7px;
        .weChat {
          display: none;
        }
        .weChat-mb {
          width: 35px;
          display: block;
          img {
            width: 100%;
          }
        }
        &:last-child{
          display: none;
        }
      }
    }
    &-Disclaimer {
      margin-top: 0;
    }
    &-copyright{
      font-size: 15px;
      &:last-child{
        display: none;
      }
    }
  }
  .footerBox{
    flex-direction: column;
    padding: 45px 0 0;
    .footer-l{
      order: 2;
    }
    .footer-c{
      order: 1;
      &-nav{
        &>div{
          text-align: center;
          &.serviceNavItem{
            display: block;
          }
          &>a{
            position: relative;
            &.haschild{
              &::after{
                content: '';
                position: absolute;
                right: -30px;
                top: 13px;
                width: 20px;
                height: 12px;
                display: inline-block;
                box-sizing: border-box;
                border-left: 10px solid #fff;
                border-right: 10px solid rgba(0, 0, 0, 0);
                border-top: 6px solid rgba(0, 0, 0, 0);
                border-bottom: 6px solid rgba(0, 0, 0, 0);
              }
            }
            &.show{
              &::after{
                transform-origin: 25% center;
                transform: rotate(90deg);
              }
            }
          }
        }
        .pcpl{
          display: none;
        }
        .mbpl{
          display: inline-block;
        }
        .pc_children{
          display: flex;
          flex-direction: column;
          &-in{
            padding: 5px 0;
            font-size: 16px;
          }
        }
      }
    }
    .footer-r{
      display: none;
    }
  }
}
</style>
