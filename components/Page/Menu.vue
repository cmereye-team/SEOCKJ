<script lang="ts" setup>
import { zh_tran,zh_getLang,getCookie } from '~/assets/js/uselang'
import { useAppState } from "~/stores/appState";
import { toWhatsApp, smallPhoneNum } from "~/assets/js/common";
import serviceLists from "~/assets/js/service";
const route = useRoute();
const appState = useAppState();
defineProps({
  headerConfig: {
    type: Object,
    default() {
      return {
        img: "https://static.cmereye.com/imgs/2023/05/71929ca4c90a8d1e.png",
        bg: "https://static.cmereye.com/imgs/2023/05/d8084e8da90409aa.jpg",
        mbImg: "https://static.cmereye.com/imgs/2023/04/b0d950232420bf46.jpg",
        pageName: "index",
        pcText: ["重拾自信笑容", "愛牙愛己，由你做起"],
        mbText: ["重拾自信笑容", "愛牙愛己，由你做起"],
      };
    },
  },
  btnText: {
    type: String,
    default: "",
  },
});

const menuLists: any = [
  {
    name: "主頁",
    link: "/",
    child: [],
  },
  {
    name: "品牌理念",
    link: `/brand/${appState.brand}`,
    child: [
      {
        name: "品牌介紹",
        link: "/brand/course",
      },
      {
        name: "品牌榮譽",
        link: "/brand/honor",
      },
    ],
  },
  {
    name: "牙科服務",
    link: `/dental-service`,
    child: [...serviceLists],
  },
  {
    name: "長者醫療券",
    link: `/health-care-voucher`,
    child: [],
  },
  {
    name: "工聯會專區",
    link: `/federation-of-trade-unions-zone`,
    child: [],
  },
  {
    name: "睇牙新資訊",
    link: `/news`,
    child: [
      {
        name: "媒體報導",
        link: "/news/coverage",
      },
      {
        name: "最新資訊",
        link: "/news/information",
      },
      {
        name: "牙齒百科",
        link: "/news/tooth-wiki",
      },
    ],
  },
  {
    name: "醫生團隊",
    link: `/medical-team`,
    child: [
      {
        name: "羅湖區",
        link: "/medical-team",
      },
      {
        name: "福田區",
        link: "/medical-team",
      },
      {
        name: "南山區",
        link: "/medical-team",
      },
      {
        name: "寶安區",
        link: "/medical-team",
      },
      {
        name: "c龍華區",
        link: "/medical-team",
      },
    ],
  },
  {
    name: "聯絡我們",
    link: "/contactUs",
    child: [],
  },
];

const headerData = {
  bannerTitleSpanOne: "重拾自信笑容",
  bannerTitleSpanTwo: "愛牙愛己，由你做起",
  bannerText: "全程式預約一體化診療服務，讓每一位顧客享受",
  bannerTextSpan: "健康微笑之旅。",
  menuBoxBtn: "諮詢熱線",
  menuBoxPhone: smallPhoneNum,
};
const classNamefilter = (_menu: any, _idx: number) => {
  let className = "";
  if (route.path === "/medical-team") {
    if (_menu.link.includes("medical-team")) {
      if (appState.areaTabCurNum === _idx) {
        className = "menuChildCurrent";
      }
    }
  } else if (route.path.includes("/brand")) {
    if (_menu.link.includes(appState.brand)) {
      className = "menuChildCurrent";
    }
  } else if (route.path.includes("/dental-service")) {
    if (_menu.link.includes(appState.dentistryService)) {
      className = "menuChildCurrent";
    }
  }

  return className;
};
const windowWidth = ref(1920);
const handleMbMenu = () => {
  if (!window.navigator.onLine) {
    ElMessage({
      showClose: true,
      message: "網路異常，請檢查網路後重試",
      type: "warning",
    });
  }
};
const menuActNum = ref(0);
const handleMenu = (_idx: number) => {
  if (menuActNum.value === _idx) menuActNum.value = 0;
  else menuActNum.value = _idx;
};
const menuBoxBool = ref(false);
const handleMenuChild = (_menu: any, _idx: number) => {
  if (_menu.link.includes("medical-team")) {
    appState.setCurNum(_idx);
    menuBoxBool.value = false;
  }
};
const isFiexdHeader = ref(false);

const glangs = (_type) =>{
  zh_tran(_type)
  if(getCookie('zh_choose')) {
		var zh_choose:any = getCookie('zh_choose');
    appState.setLangs(zh_choose);
	}
}
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
            <nuxt-link
              :to="'/'"
              title="深圳愛康健口腔醫院"
              alt="深圳愛康健口腔醫院"
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
                :class="[
                  menuItem.child.length ? 'triangleIcon' : '',
                  {
                    'health-care-voucher':
                      menuItem.link === '/health-care-voucher',
                  },
                  {
                    'federation-of-trade-unions-zone':
                      menuItem.link === '/federation-of-trade-unions-zone',
                  },
                ]"
                :to="
                  ['/news', '/dental-service'].includes(menuItem.link)
                    ? 'javaScript:void(0)'
                    : '#'
                "
                :title="menuItem.name"
              >
                <span>{{ menuItem.name }}</span>
              </nuxt-link>
              <div
                v-if="menuItem.child.length"
                class="menuChild"
                :class="{
                  serviceCard: menuItem.link.includes('/dental-service'),
                }"
              >
                <div
                  v-for="(menuChildItem, menuChildIndex) in menuItem.child"
                  :key="menuChildIndex"
                  :class="[
                    'menuChild-item',
                    classNamefilter(menuChildItem, menuChildIndex),
                  ]"
                  @click.stop="handleMenuChild(menuItem, menuChildIndex)"
                >
                  <nuxt-link :to="'#'" :class="{ hot: menuChildItem.isHot }">
                    {{
                      menuChildItem.link ===
                      "/dental-service/wisdom-teeth-extraction"
                        ? "拔牙\n"
                        : ""
                    }}
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
              <img src="@/assets/images/icon_26.svg" alt="" />
              <div class="menuChild">
                <div
                  :class="[
                    'menuChild-item',
                    { 'langItem-act': appState.langs === 't' },
                  ]"
                >
                  <span class="zh_click" @click="glangs('t')">繁體</span>
                </div>
                <div
                  :class="[
                    'menuChild-item',
                    { 'langItem-act': appState.langs === 's' },
                  ]"
                >
                  <span class="zh_click" @click="glangs('s')">简体</span>
                </div>
              </div>
            </div>
          </div>
          <div class="icon">
            <div class="icon-lists">
              <nuxt-link
                class="icon-lists-in"
                to="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                <path d="M13.9922 15.6445C13.2503 16.136 12.5154 16.5066 11.721 16.7549C9.50314 17.4479 7.32315 17.3613 5.19566 16.4208C3.41845 15.6353 2.05693 14.4033 1.10765 12.7557C0.253034 11.2721 -0.099826 9.67442 0.0241054 7.97594C0.132545 6.48405 0.619665 5.11711 1.46567 3.87345C2.31339 2.62812 3.42534 1.65935 4.79288 0.96796C6.16129 0.276574 7.61749 -0.0407965 9.15889 0.00418517C11.0342 0.0583298 12.7211 0.634762 14.2177 1.72515C15.8839 2.93966 16.995 4.52818 17.5019 6.48488C18.0854 8.73563 17.7644 10.8814 16.5836 12.9039C16.396 13.2246 16.3762 13.1238 16.6533 13.3929C18.2317 14.924 19.8118 16.4533 21.3928 17.9819C21.8903 18.4625 22.1166 19.0289 21.941 19.702C21.6011 21.0023 19.934 21.4655 18.8944 20.44C18.1017 19.6579 17.2953 18.8898 16.4949 18.1152C15.71 17.3555 14.9243 16.5958 14.1411 15.8344C14.086 15.7811 14.0456 15.7145 13.9914 15.6445H13.9922ZM2.87969 8.59236C2.86764 11.7861 5.54938 14.3925 8.86885 14.4142C12.1728 14.4358 14.8942 11.8369 14.8942 8.61152C14.8942 5.36034 12.2004 2.79388 8.88865 2.79138C5.57864 2.78889 2.8926 5.38783 2.88055 8.59319L2.87969 8.59236Z" fill="#E15697"/>
                </svg>
              </nuxt-link>
              <div
                class="icon-lists-in"
                @click="glangs('s')"
              >
                <span>
                  {{appState.langs === 't' ? '繁': '简'}}
                </span>
              </div>
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
            :class="[
              'menuLists-item',
              item.child.length ? 'childIcon' : '',
              { 'health-care-voucher': item.link === '/health-care-voucher' },
              {
                'federation-of-trade-unions-zone':
                  item.link === '/federation-of-trade-unions-zone',
              },
            ]"
          >
            <nuxt-link
              :to="!item.child.length ? '#' : 'javaScript:void(0)'"
              :title="item.name"
            >
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
          <img src="@/assets/images/icon_27.svg" alt="语言" />
          <span
            class="zh_click"
            :style="{ color: appState.langs === 't' ? '#FC1682' : '#FF85AF' }"
            @click="glangs('t')"
            >繁體中文</span
          >
          <span
            class="zh_click"
            :style="{
              color: appState.langs === 's' ? '#FC1682' : '#FF85AF',
              'font-family': '微软雅黑',
            }"
            @click="glangs('s')"
            >简体中文</span
          >
        </div>
        <!-- 立即預約 -->
        <nuxt-link :to="`tel: +852 ${smallPhoneNum}`">
          <div class="menuBox-btn">
            {{ headerData.menuBoxBtn }}
          </div>
        </nuxt-link>
        <div class="menuBox-phone">
          <img src="@/assets/images/icon_11.svg" />（852）{{
            headerData.menuBoxPhone
          }}
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
.menu {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 2;
  &-in {
    width: 100%;
    max-width: 1450px;
    margin: 0 auto;
    .header-content-in {
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
          &.langItem {
            padding: 0 1vw 10px;
            & > img {
              width: 20px;
            }
          }
          &.langItem {
            padding: 0 20px 20px;
            .menuChild {
              .menuChild-item {
                & > span {
                  color: var(--textColor);
                }
                &.langItem-act {
                  & > span {
                    color: var(--indexColor);
                  }
                }
              }
            }
          }
          .triangleIcon:after {
            content: "";
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
              border-color: var(--indexColor) transparent transparent
                transparent;
            }
          }
          span {
            position: relative;
            display: inline-block;
            &::before {
              content: "";
              width: 0;
              position: absolute;
              left: 50%;
              bottom: -2px;
              transform: translateX(-50%);
              height: 2px;
              background: var(--textColor);
              transition: all 0.3s;
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
              border-color: var(--indexColor) transparent transparent
                transparent;
            }
            span {
              &::before {
                width: 100%;
                bottom: 2px;
                background: var(--indexColor);
              }
            }
            .health-care-voucher {
              span {
                &::before {
                  background: #00a752;
                }
              }
            }
            .federation-of-trade-unions-zone {
              span {
                &::before {
                  background: #e60013;
                }
              }
            }
          }
          .health-care-voucher {
            color: #00a752;
            span {
              color: #00a752;
            }
            .router-link-exact-active {
              span {
                color: #00a752;
              }
              color: #00a752;
            }
          }
          .federation-of-trade-unions-zone {
            color: #e60013;
            span {
              color: #e60013;
            }
            .router-link-exact-active {
              color: #e60013;
              span {
                color: #e60013;
              }
            }
          }
          &:hover .menuChild {
            display: flex;
            animation: animBottomIn 0.5s forwards;
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
              & > a {
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
              content: "";
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
            .menuChild-item {
              width: calc(100% / 3);
              border: none;
              padding: 0;
              position: relative;
              white-space: pre-wrap;
              line-height: 1.2;
              & > a {
                height: 56px;
                display: flex;
                justify-content: center;
                align-items: center;
                &.hot {
                  position: relative;
                  color: var(--indexColor);
                  &::after {
                    content: "·";
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
                &::before {
                  content: "";
                  width: 0;
                  height: 60%;
                  border-right: 1px solid #f7c3c3;
                  top: 20%;
                  right: 0;
                  position: absolute;
                }
              }
              &:not(:nth-of-type(n + 13)) {
                &::after {
                  content: "";
                  width: 80%;
                  height: 0;
                  border-bottom: 1px solid #f7c3c3;
                  left: 10%;
                  bottom: 0;
                  position: absolute;
                }
              }
            }
            &::after {
              content: "";
              width: 100px;
              height: calc(90 / 130 * 100px);
              background: url(https://static.cmereye.com/imgs/2024/04/4f39b444ca1b0a1d.png)
                no-repeat;
              background-size: 100% auto;
              display: block;
              position: absolute;
              bottom: 0px;
              right: 30px;
              overflow: hidden;
              background-position-y: calc(90 / 130 * 100px);
              animation: menuIconAnim 1.5s 0.5s forwards;
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
    .logo {
      & > a {
        img {
          height: 30px;
        }
      }
    }
  }
}
.menuBox {
  display: none;
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (max-width: 768px) {
  .menu {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 99;
    &-in {
      .header-content-in {
        justify-content: space-between;
        // align-items: center;
        margin: 0;
        padding: 15px;
        box-sizing: border-box;
        .logo {
          width: 133px;
          margin-bottom: 0;
        }
        .menuLists {
          display: none;
        }
        .icon {
          display: flex;
          // align-items: center;
          &-menuopen {
            display: flex;
            align-items: center;
            width: 24px;
            margin-left: 9px;
            // margin-right: 25px;
          }
          &-lists {
            display: flex;
            align-items: center;
            &-in {
              display: flex;
              height: 80%;
              align-items: center;
              width: 40px;
              padding: 0 9px;
              border-right: 1px solid #AAA;
              span{
                color: #E15697;
                text-align: center;
                font-size: 21.135px;
                font-style: normal;
                font-weight: 700;
                line-height: 160%; /* 33.816px */
                letter-spacing: 4.227px;
                margin-top: -3px;
              }
            }
          }
        }
      }
    }
  }
  .menuBox {
    position: fixed;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 30;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    color: var(--indexColor1);
    transition: all 0.3s;
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .menuLists {
      margin-top: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-item {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 18px;
        position: relative;
        &:not(:last-child)::before {
          content: "";
          width: calc(100% - 60px);
          height: 2px;
          background: var(--indexColor2);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
        &.childIcon:after {
          content: "";
          width: 0;
          height: 0;
          display: inline-block;
          position: absolute;
          right: 34%;
          top: 29px;
          border-top: 10px solid;
          border-left: 6px solid;
          border-right: 6px solid;
          border-bottom: 10px solid;
          border-color: var(--indexColor1) transparent transparent transparent;
          vertical-align: middle;
        }
        &.health-care-voucher {
          color: #00a752;
        }
        &.federation-of-trade-unions-zone {
          color: #e60013;
        }
      }
      &-childLists {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 20px;
        color: var(--indexColor);
        &-item {
          width: 100%;
          height: 100%;
          a {
            width: 100%;
            height: 100%;
            padding: 10px 0;
            display: block;
            &.router-link-exact-active {
              background: var(--indexColor2);
            }
          }
        }
      }
    }
    .langItem {
      width: calc(100% - 60px);
      padding: 20px 0;
      margin: 0 30px;
      display: flex;
      border-top: 2px solid var(--indexColor2);
      justify-content: center;
      align-items: center;
      & > span {
        margin-left: 10px;
      }
    }
    &-btn {
      margin-top: 51px;
      font-size: 1.25rem;
    }
    &-phone {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 23px;
      margin-top: 20px;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-top: -3px;
        margin-right: 5px;
      }
    }
    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px auto 180px;
      &-in:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
}
</style>