<script lang="ts" setup>
// import { zh_tran,zh_getLang,getCookie } from '~/assets/js/uselang'
import { useAppState } from '~/stores/appState'
import { toWhatsApp,smallPhoneNum } from '~/assets/js/common'
import serviceLists from '~/assets/js/service'
const route = useRoute()
const appState = useAppState()
defineProps({
  headerConfig: {
    type: Object,
    default() {
      return {
        img: 'https://static.cmereye.com/imgs/2023/05/71929ca4c90a8d1e.png',
        bg: 'https://static.cmereye.com/imgs/2023/05/d8084e8da90409aa.jpg',
        mbImg: 'https://static.cmereye.com/imgs/2023/04/b0d950232420bf46.jpg',
        pageName: 'index',
        pcText: ['重拾自信笑容', '愛牙愛己，由你做起'],
        mbText: ['重拾自信笑容', '愛牙愛己，由你做起'],
      }
    },
  },
  btnText: {
    type: String,
    default: ''
  }
})

const menuLists:any = [
  {
    name: '主頁',
    link: '/',
    child: [],
  },
  {
    name: '品牌理念',
    link: `/brand/${appState.brand}`,
    child: [
      {
        name: '品牌介紹',
        link: '/brand/course',
      },
      {
        name: '品牌榮譽',
        link: '/brand/honor',
      },
    ],
  },
  {
    name: '牙科服務',
    link: `/dental-service`,
    child: [
      ...serviceLists
    ],
  },
  {
    name: '長者醫療券',
    link: `/health-care-voucher`,
    child: []
  },
  {
    name: '工聯會專區',
    link: `/federation-of-trade-unions-zone`,
    child: []
  },
  {
    name: '睇牙新資訊',
    link: `/news`,
    child: [
      {
        name: '媒體報導',
        link: '/news/coverage',
      },
      {
        name: '最新資訊',
        link: '/news/information',
      },
      {
        name: '牙齒百科',
        link: '/news/tooth-wiki',
      },
    ]
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
        name: 'c龍華區',
        link: '/medical-team',
      },
    ],
  },
  {
    name: '聯絡我們',
    link: '/contactUs',
    child: [],
  },
]

const headerData = {
  bannerTitleSpanOne: '重拾自信笑容',
  bannerTitleSpanTwo: '愛牙愛己，由你做起',
  bannerText: '全程式預約一體化診療服務，讓每一位顧客享受',
  bannerTextSpan: '健康微笑之旅。',
  menuBoxBtn: '諮詢熱線',
  menuBoxPhone: smallPhoneNum,
}
const classNamefilter = (_menu: any, _idx: number) => {
  let className = ''
  if (route.path === '/medical-team') {
    if (_menu.link.includes('medical-team')) {
      if (appState.areaTabCurNum === _idx) {
        className = 'menuChildCurrent'
      }
    }
  } else if (route.path.includes('/brand')) {
    if (_menu.link.includes(appState.brand)) {
      className = 'menuChildCurrent'
    }
  } else if (route.path.includes('/dental-service')) {
    if (_menu.link.includes(appState.dentistryService)) {
      className = 'menuChildCurrent'
    }
  }

  return className
}
const windowWidth = ref(1920)
const handleMbMenu = () => {
  if (!window.navigator.onLine) {
    ElMessage({
      showClose: true,
      message: '網路異常，請檢查網路後重試',
      type: 'warning',
    })
  }
}
const menuActNum = ref(0)
const handleMenu = (_idx: number) => {
  if (menuActNum.value === _idx) menuActNum.value = 0
  else menuActNum.value = _idx
}
const menuBoxBool = ref(false)
const handleMenuChild = (_menu: any, _idx: number) => {
  if (_menu.link.includes('medical-team')) {
    appState.setCurNum(_idx)
    menuBoxBool.value = false
  }
}
const isFiexdHeader = ref(false)
</script>

<template>
    <div class="menu">
        <div class="menu-in">
            <!-- pc菜单 -->
      <div
        :class="[
          isFiexdHeader ? 'headerBox02' : 'headerBox01',
          'pcMenuBox',
          headerConfig.pageName,
        ]"
      >
        <div ref="headerMenu" class="pageCon header-content-in">
          <div class="logo">
            <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院"
              ><img src="@/assets/images/logo_11.svg" alt=""
            /></nuxt-link>
          </div>
          <div class="menuLists">
            <div
              v-for="(menuItem, menuIndex) in menuLists"
              :key="menuIndex"
              class="menuItem"
            >
              <nuxt-link
                :class="[menuItem.child.length ? 'triangleIcon' : '',{ 'health-care-voucher': menuItem.link === '/health-care-voucher'},{ 'federation-of-trade-unions-zone': menuItem.link === '/federation-of-trade-unions-zone'}]"
                :to="['/news','/dental-service'].includes(menuItem.link) ? 'javaScript:void(0)': '#'"
                :title="menuItem.name"
              >
                <span>{{menuItem.name}}</span>
              </nuxt-link>
              <div
                v-if="menuItem.child.length"
                class="menuChild"
                :class="{'serviceCard': menuItem.link.includes('/dental-service')}"
              >
                <div
                  v-for="(menuChildItem, menuChildIndex) in menuItem.child"
                  :key="menuChildIndex"
                  :class="[
                    'menuChild-item',
                    classNamefilter(menuChildItem, menuChildIndex)]"
                  @click.stop="handleMenuChild(menuItem, menuChildIndex)"
                >
                  <nuxt-link :to="'#'" :class="{hot: menuChildItem.isHot}">
                    {{ menuChildItem.link === '/dental-service/wisdom-teeth-extraction' ? '拔牙\n' : '' }}
                    {{ menuChildItem.name }}
                  </nuxt-link>
                </div>
              </div>
              <!-- <div
                v-if="menuItem.link.includes('/dental-service')"
                class="menuChild serviceCard"
              >
                <serviceCard :is-menu="true" />
              </div> -->
            </div>
            <div class="menuItem langItem">
              <img src="@/assets/images/icon_26.svg" alt="">
              <div class="menuChild">
                <div :class="['menuChild-item',{'langItem-act': appState.langs === 't'}]">
                  <span class="zh_click" @click="glangs('t')">繁體</span>
                </div>
                <div :class="['menuChild-item',{'langItem-act': appState.langs === 's'}]">
                  <span class="zh_click" @click="glangs('s')">简体</span>
                </div>
              </div>
            </div>
          </div>
          <div class="icon">
            <div class="icon-lists">
              <nuxt-link class="icon-lists-in" to="https://www.facebook.com/ckjdental.hk/">
                <img src="@/assets/images/icon_33.svg" alt="facebook">
              </nuxt-link>
              <nuxt-link class="icon-lists-in" to="https://www.instagram.com/ckj_hk/">
                <img src="@/assets/images/icon_31.svg" alt="instagram">
              </nuxt-link>
              <div class="icon-lists-in" to="" @click="handlecopywechatcode">
                <img src="@/assets/images/icon_34.svg" alt="weChat">
              </div>
              <nuxt-link class="icon-lists-in" to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA">
                <img src="@/assets/images/icon_32.svg" alt="youtobe">
              </nuxt-link>
            </div>
            <div class="icon-menuopen" @click="menuBoxBool = !menuBoxBool">
              <img v-if="!menuBoxBool" src="@/assets/images/icon_61.png" />
              <img v-else src="@/assets/images/icon_7.svg" />
            </div>
          </div>
        </div>
      </div>
      <!-- mb菜单 -->
      <div class="menuBox" :style="{ top: menuBoxBool ? '0' : '-100vh' }">
        <div class="menuLists">
          <div
            v-for="(item, index) in menuLists"
            :key="index"
            :class="['menuLists-item', item.child.length ? 'childIcon' : '',{ 'health-care-voucher': item.link === '/health-care-voucher'},{ 'federation-of-trade-unions-zone': item.link === '/federation-of-trade-unions-zone'}]"
          >
            <nuxt-link :to="!item.child.length ? '#' : 'javaScript:void(0)'" :title="item.name">
              <div @click="handleMenu(index)">
                {{ item.name }}
              </div>
            </nuxt-link>
            <div
              v-if="item.child.length"
              v-show="menuActNum === index"
              class="menuLists-childLists"
            >
              <div
                v-for="(itemChild, itemChildIndex) in item.child"
                :key="itemChildIndex"
                class="menuLists-childLists-item"
                @click="handleMenuChild(item, itemChildIndex)"
              >
                <nuxt-link :to="'#'" @click.native="handleMbMenu">
                  {{ itemChild.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="langItem">
          <img src="@/assets/images/icon_27.svg" alt="语言">
          <span class="zh_click" :style="{color: (appState.langs === 't'?'#FC1682':'#FF85AF')}" @click="glangs('t')">繁體中文</span>
          <span class="zh_click" :style="{color: (appState.langs === 's'?'#FC1682':'#FF85AF'),'font-family': '微软雅黑'}" @click="glangs('s')">简体中文</span>
        </div>
        <!-- 立即預約 -->
        <nuxt-link :to="`tel: +852 ${smallPhoneNum}`">
          <div class="menuBox-btn">
            {{ headerData.menuBoxBtn }}
          </div>
        </nuxt-link>
        <div class="menuBox-phone">
          <img src="@/assets/images/icon_11.svg" />（852）{{ headerData.menuBoxPhone }}
        </div>
        <div class="menuBox-icon">
          <!-- <div class="menuBox-icon-in">
            <nuxt-link
              to="https://www.facebook.com/ckjdental.hk/"
              target="_blank"
            >
              <img src="@/assets/images/icon_01.png" />
            </nuxt-link>
          </div> -->
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
              <img src="@/assets/images/icon_02.svg" />
            </nuxt-link>
          </div>
          <div class="menuBox-icon-in">
            <nuxt-link
              to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA"
              target="_blank"
            >
              <img src="@/assets/images/icon_03.svg" />
            </nuxt-link>
          </div>
        </div>
      </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.menu{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    background: #fff;
    position: relative;
    z-index: 2;
    &-in{
        width: 100%;
        max-width: 1450px;
        margin: 0 auto;
        .header-content-in{
    width: 100%;
    max-width: 1512px;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px 0 30px;
    align-items: flex-end;
    z-index: 40;
    position: relative;
    transition: all 0.5s;
    .logo {
      width: 290px;
    //   margin-bottom: 20px;
    }
    .menuLists {
      flex: 1;
      color: #666666;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .menuItem {
        padding: 0 0 20px;
        cursor: pointer;
        font-size: 22px;
        font-weight: 600;
        position: relative;
        & > a {
          padding: 0 15px;
          display: inline-block;
          text-align: center;
        }
        &.langItem{
          padding: 0 1vw 10px;
          &>img{
            width: 20px;
          }
        }
        &.langItem{
          padding: 0 20px 20px;
          .menuChild{
            .menuChild-item{
              &>span{
                color: var(--textColor);
              }
              &.langItem-act{
                &>span{
                  color: var(--indexColor);
                }
              }
            }
          }
        }
        .triangleIcon:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #666666 transparent transparent transparent;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .triangleIcon:hover {
          &:after {
            border-color: var(--indexColor) transparent transparent transparent;
          }
        }
        span{
          position: relative;
          display: inline-block;
          &::before{
            content: '';
            width: 0;
            position: absolute;
            left: 50%;
            bottom: -2px;
            transform: translateX(-50%);
            height: 2px;
            background: var(--textColor);
            transition: all .3s;
            border-radius: 2px;
          }
        }
        // & > .router-link-exact-active {
        //   color: var(--indexColor);
        //   &.triangleIcon:after {
        //     border-color: var(--indexColor) transparent transparent transparent;
        //   }
        //   span{
        //     &::before{
        //       width: 100%;
        //       bottom: 2px;
        //       background: var(--indexColor);
        //     }
        //   }
        //   &.health-care-voucher{
        //     span{
        //       &::before{
        //         background: #00A752;
        //       }
        //     }
        //   }
        //   &.federation-of-trade-unions-zone{
        //     span{
        //       &::before{
        //         background: #E60013;
        //       }
        //     }
        //   }
        // }
        &:hover {
          color: var(--indexColor);
          .triangleIcon:after {
            border-color: var(--indexColor) transparent transparent transparent;
          }
          span{
            &::before{
              width: 100%;
              bottom: 2px;
              background: var(--indexColor);
            }
          }
          .health-care-voucher{
            span{
              &::before{
                background: #00A752;
              }
            }
          }
          .federation-of-trade-unions-zone{
            span{
              &::before{
                background: #E60013;
              }
            }
          }

        }
        .health-care-voucher{
          color: #00A752;
          span{
                color: #00A752;
            }
          .router-link-exact-active{
            span{
                color: #00A752;
            }
            color: #00A752;
          }
        }
        .federation-of-trade-unions-zone{
          color: #E60013;
          span{
                color: #E60013;
            }
              .router-link-exact-active{
                color: #E60013;
                span{
                    color: #E60013;
                }
              }
            }
            &:hover .menuChild {
              display: flex;
              animation: animBottomIn .5s forwards;
            }
            .menuChild {
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translate(-50%, 20px);
              opacity: 0;
              min-width: 130%;
              z-index: 2;
              display: none;
              flex-direction: column;
              transition: all 0.3s;
              padding: 0 20px 5px;
              box-sizing: border-box;
              background: #ffffff;
              filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
                  border-radius: 6px;
              &-item {
                width: 100%;
                text-align: center;
                padding: 10px 0 5px;
                font-weight: 500;
                font-size: 18px;
                color: #666666;
                transition: all 0.3s;
                &>a{
                  display: block;
                }
                &:not(:last-child) {
                  border-bottom: 1px solid var(--indexColor_2);
                }
                &:hover {
                  color: var(--indexColor);
                }
                &.menuChildCurrent {
                  color: var(--indexColor);
                }
              }
              &::before {
                content: '';
                width: 0px;
                height: 0px;
                border: 10px solid;
                border-color: transparent transparent #fff transparent;
                position: absolute;
                top: -18px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
            .serviceCard {
              width: 500px;
              flex-direction: row;
              flex-wrap: wrap;
              padding: 20px 10px;
              border-radius: 16px;
              .menuChild-item{
                width: calc(100% / 3);
                border: none;
                padding: 0;
                position: relative;
                white-space: pre-wrap;
                line-height: 1.2;
                &>a{
                  height: 56px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  &.hot{
                    position: relative;
                    color: var(--indexColor);
                    &::after{
                      content: '·';
                      position: absolute;
                      left: 50%;
                      top: 0;
                      font-size: 30px;
                      color: var(--indexColor);
                      margin-top: -8px;
                    }
                  }
                }
                &:not(:nth-of-type(3n)) {
                  &::before{
                    content: '';
                    width: 0;
                    height: 60%;
                    border-right: 1px solid #F7C3C3;
                    top: 20%;
                    right: 0;
                    position: absolute;
                  }
                    }
                    &:not(:nth-of-type(n+13)){
                      &::after{
                        content: '';
                        width: 80%;
                        height: 0;
                        border-bottom: 1px solid #F7C3C3;
                        left: 10%;
                        bottom: 0;
                        position: absolute;
                      }
                    }
                  }
                  &::after{
                    content: '';
                    width: 100px;
                    height: calc(90 / 130 * 100px);
                    background: url(https://static.cmereye.com/imgs/2024/04/4f39b444ca1b0a1d.png) no-repeat;
                    background-size: 100% auto;
                    display: block;
                    position: absolute;
                    bottom: 0px;
                    right: 30px;
                    overflow: hidden;
                    background-position-y: calc(90 / 130 * 100px);
                    animation: menuIconAnim 1.5s .5s forwards;
                  }
                }
              }
            }
            .icon {
              display: none;
            }
        }
    }
}
.pcMenuBox {
    &.implant,
    &.rootCanal-test,
    &.periodontal-test,
    &.orthodontics-test,
    &.invisalign-test,
    &.veneers-test,
    &.health-care-voucher,
    &.scaling-and-polishing-test {
      margin-top: 100px;
      transition: all 0.3s;
    }
  }
  .headerBox01 {
    position: relative;
    background: #fff;
    width: 100%;
  }
  .headerBox02 {
    position: fixed;
    background: #fff;
    top: 0;
    width: 100vw;
    z-index: 100;
    box-shadow: 0px 4px 8px var(--indexColor_2);
    margin-top: 0 !important;
    .header-content-in {
      align-items: center;
      .logo{
        &>a{
          img{
            height: 30px;
          }
        }
      }
    }
  }
.menuBox {
  display: none;
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>