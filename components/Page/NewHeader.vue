<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp } from '~/assets/js/common'
const route = useRoute()
const appState = useAppState()
defineProps({
  headerConfig: {
    type: Object,
    default() {
      return {
        pageName: 'index',
        bgType: '1',
        pcImg: 'https://static.cmereye.com/imgs/2023/12/453ccc8bc0e49778.png',
        mbImg: 'https://static.cmereye.com/imgs/2023/11/50a66a8efbcfcc12.jpg',
        bgImg: '',
        pcText: [],
        mbText: []
      }
    },
  },
})

const menuLists = [
  {
    name: 'components.header.menuLists.menu_index.name',
    link: '/',
    child: [],
  },
  {
    name: 'components.header.menuLists.menu_brand.name',
    link: `/brand/${appState.brand}`,
    child: [
      {
        name: 'components.header.menuLists.menu_brand.course',
        link: '/brand/course',
      },
      {
        name: 'components.header.menuLists.menu_brand.honor',
        link: '/brand/honor',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_dental_service.name',
    link: `/dental-service`,
    child: [
      {
        name: 'service.implant',
        link: '/dental-service/implant',
      },
      {
        name: 'service.orthodontics',
        link: '/dental-service/orthodontics',
      },
      {
        name: 'service.rootCanal',
        link: '/dental-service/rootCanal',
      },
      {
        name: 'service.invisalign',
        // link: '/dental-service/invisalign',
        link: '/dental-service/invisiblebraces'
      },
      {
        name: 'service.veneers',
        link: '/dental-service/veneers',
      },
      {
        name: 'service.all_ceramic_crowns',
        link: '/dental-service/all-ceramic-crowns',
      },
      {
        name: 'service.wisdom_teeth_extraction',
        link: '/dental-service/wisdom-teeth-extraction',
      },
      {
        name: 'service.periodontal',
        link: '/dental-service/periodontal',
      },
      {
        name: 'service.toothtray',
        link: '/dental-service/toothtray',
      },
      {
        name: 'service.teeth_whitening',
        link: '/dental-service/teeth-whitening',
      },
      {
        name: 'service.scaling_and_polishing',
        link: '/dental-service/scaling-and-polishing',
      },
      {
        name: 'service.fillings',
        link: '/dental-service/fillings',
      },
      {
        name: 'service.general_oral_examination',
        link: '/dental-service/general-oral-examination',
      },
      {
        name: 'service.children_dentistry',
        link: '/dental-service/children-dentistry',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_medical_team.name',
    link: `/medical-team`,
    child: [
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
  },
  {
    name: 'components.header.menuLists.menu_contactUs.name',
    link: '/contactUs',
    child: [],
  },
]

const headerData = {
  bannerTitleSpanOne: '重拾自信笑容',
  bannerTitleSpanTwo: '愛牙愛己，由你做起',
  bannerText: '全程式預約一體化診療服務，讓每一位顧客享受',
  bannerTextSpan: '健康微笑之旅。',
  menuBoxBtn: '立即預約',
  menuBoxPhone: '3892 5049',
}

const menuBoxBool = ref(false)

const menuActNum = ref(0)
const handleMenu = (_idx: number) => {
  if (menuActNum.value === _idx) menuActNum.value = 0
  else menuActNum.value = _idx
}

const handleMenuChild = (_menu: any, _idx: number) => {
  if (_menu.link.includes('medical-team')) {
    appState.setCurNum(_idx)
    menuBoxBool.value = false
  }
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

const imgBgHeight = ref({
  offsetHeight: 0,
})

const isFiexdHeader = ref(false)
onMounted(() => {
  getScrollHeight()
  getWindowWidth()
  window.addEventListener('scroll', getScrollHeight)
  window.addEventListener('resize', getWindowWidth)
})
const windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
const isShowLanguageBool = ref(false)
const getScrollHeight = () => {
  if(imgBgHeight.value && imgBgHeight.value.offsetHeight){
    if (imgBgHeight.value.offsetHeight < window.scrollY) {
      isFiexdHeader.value = true
    } else {
      isFiexdHeader.value = false
    }
    if (window.scrollY === 0) {
      isShowLanguageBool.value = true
    } else {
      isShowLanguageBool.value = false
    }
  }
}


const handleMbMenu = () => {
  if (!window.navigator.onLine) {
    ElMessage({
      showClose: true,
      message: '網路異常，請檢查網路後重試',
      type: 'warning',
    })
  }
}
</script>

<template>
  <div class="ckj-header">
    <div class="ckj-header-banner">
      <div class="ckj-header-banner-in">
        <img ref="imgBgHeight" :src="headerConfig.pcImg" alt="">
        <!-- <img ref="imgBgHeight" :data-cfsrc="headerConfig.pcImg" :srcset="`${headerConfig.mbImg} 768w, ${headerConfig.pcImg}`" :src="headerConfig.pcImg" alt="ckj_banner" > -->
      </div>
    </div>
    <div class="ckj-header-wave">

    </div>
    <div class="ckj-header-context">

    </div>
    <div class="ckj-header-menu">
      <!-- pc菜单 -->
      <div
        :class="[
          isFiexdHeader ? 'headerBox02' : 'headerBox01',
          'pcMenuBox'
        ]"
      >
        <div ref="headerMenu" class="ckj-header-menu-in">
          <div class="logo">
            <nuxt-link :to="'/'"
              ><img src="@/assets/images/logo_11.png" alt=""
            /></nuxt-link>
          </div>
          <div class="menu">
            <div
              v-for="(menuItem, menuIndex) in menuLists"
              :key="menuIndex"
              class="menuItem"
            >
              <nuxt-link
                :class="menuItem.child.length ? 'triangleIcon' : ''"
                :to="menuItem.link"
              >
                {{ $t(menuItem.name) }}
              </nuxt-link>
              <div
                v-if="
                  menuItem.child.length &&
                  !menuItem.link.includes('/dental-service')
                "
                class="menuChild"
              >
                <div
                  v-for="(menuChildItem, menuChildIndex) in menuItem.child"
                  :key="menuChildIndex"
                  :class="[
                    'menuChild-item',
                    classNamefilter(menuChildItem, menuChildIndex),
                  ]"
                  @click="handleMenuChild(menuItem, menuChildIndex)"
                >
                  <nuxt-link :to="menuChildItem.link">
                    {{ $t(menuChildItem.name) }}
                  </nuxt-link>
                </div>
              </div>
              <div
                v-if="menuItem.link.includes('/dental-service')"
                class="menuChild serviceCard"
              >
                <serviceCard :is-menu="true" />
              </div>
            </div>
          </div>
          <div class="icon" @click="menuBoxBool = !menuBoxBool">
            <img v-if="!menuBoxBool" src="@/assets/images/icon_61.png" />
            <img v-else src="@/assets/images/icon_7.png" />
          </div>
        </div>
      </div>
      <!-- mb菜单 -->
      <div class="menuBox" :style="{ top: menuBoxBool ? '0' : '-100vh' }">
        <div class="menuLists">
          <div
            v-for="(item, index) in menuLists"
            :key="index"
            :class="['menuLists-item', item.child.length ? 'childIcon' : '']"
          >
            <nuxt-link :to="!item.child.length ? item.link : ''">
              <div @click="handleMenu(index)">
                {{ $t(item.name) }}
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
                <nuxt-link :to="itemChild.link" @click.native="handleMbMenu">
                  {{ $t(itemChild.name) }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <!-- 立即預約 -->
        <nuxt-link to="tel: +852 3892 5049">
          <div class="menuBox-btn">
            {{ headerData.menuBoxBtn }}
          </div>
        </nuxt-link>
        <div class="menuBox-phone">
          <img src="@/assets/images/icon_11.png" />{{ headerData.menuBoxPhone }}
        </div>
        <div class="menuBox-icon">
          <div class="menuBox-icon-in">
            <nuxt-link
              to="https://www.facebook.com/ckjdental.hk/"
              target="_blank"
            >
              <img src="@/assets/images/icon_01.png" />
            </nuxt-link>
          </div>
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
              <img src="@/assets/images/icon_02.png" />
            </nuxt-link>
          </div>
          <div class="menuBox-icon-in">
            <nuxt-link
              to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA"
              target="_blank"
            >
              <img src="@/assets/images/icon_03.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@keyframes wave1 {
  0% {
    background-position: 0px top;
  }
  100% {
    background-position: 1080px top;
  }
}
@-webkit-keyframes wave1 {
  0% {
    background-position: 0px top;
  }
  100% {
    background-position: 1080px top;
  }
}
@keyframes wave2 {
  0% {
    background-position: 0px top;
  }
  100% {
    background-position: 1080px top;
  }
}
@-webkit-keyframes wave2 {
  0% {
    background-position: 0 top;
  }
  100% {
    background-position: 1080px top;
  }
}
.ckj-header{
  background: #fff;
  &-banner{
    width: 100%;
    background: url(https://static.cmereye.com/imgs/2023/12/2032d0462c8192f9.png);
    &-in{
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
  }
  &-wave{
    position: relative;
    &::after {
      content: '';
      background-image: url(@/assets/images/wave.png);
      background-repeat: repeat-x;
      background-position: center top;
      height: 46px;
      width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: 0px;
      animation-name: wave1;
      animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave1;
      -webkit-animation-duration: 20s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
    }
    &::before {
      content: '';
      background-image: url(@/assets/images/wave2.png);
      background-repeat: repeat-x;
      background-position: center top;
      height: 46px;
      width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: 0px;
      animation-name: wave2;
      animation-duration: 15s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave2;
      -webkit-animation-duration: 15s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
    }
  }
  &-menu{
    margin-top: -4px;
    &-in {
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
        margin-bottom: 20px;
      }
      .menu {
        flex: 1;
        color: #666666;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        .menuItem {
          padding: 0 0 20px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 600;
          position: relative;
          & > a {
            padding: 0 20px 20px;
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
              border-color: var(--indexColor1) transparent transparent transparent;
            }
          }
          & > .router-link-exact-active {
            color: var(--indexColor1);
            text-decoration-line: underline;
            &.triangleIcon:after {
              border-color: var(--indexColor1) transparent transparent transparent;
            }
          }
          &:hover {
            color: var(--indexColor1);
            text-decoration-line: underline;
            .triangleIcon:after {
              border-color: var(--indexColor1) transparent transparent transparent;
            }
          }
          &:hover .menuChild {
            display: flex;
          }
          .menuChild {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
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
              &:not(:last-child) {
                border-bottom: 1px solid var(--indexColor2);
              }
              &:hover {
                color: var(--indexColor1);
              }
              &.menuChildCurrent {
                color: var(--indexColor1);
              }
            }
            &::before {
              content: '';
              width: 0px;
              height: 0px;
              border: 10px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -20px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            width: 428px;
            padding: 12px 6px;
          }
        }
      }
      .icon {
        display: none;
      }
    }
    .pcMenuBox {
      // &.implant,
      // &.rootCanal-test,
      // &.periodontal-test,
      // &.orthodontics-test,
      // &.invisalign-test,
      // &.veneers-test,
      // &.scaling-and-polishing-test {
      //   margin-top: 100px;
      //   transition: all 0.3s;
      // }
    }
    .headerBox01 {
      position: relative;
      background: #fff;
      width: 100%;
      padding-top: 50px;
    }
    .headerBox02 {
      position: fixed;
      background: #fff;
      top: 0;
      width: 100vw;
      z-index: 100;
      box-shadow: 0px 4px 8px var(--indexColor3);
      margin-top: 0 !important;
      .ckj-header-menu-in {
        align-items: center;
      }
    }
    
    
    .menuBox {
      display: none;
    }
  }
  
}
@media (min-width: 768px) and (max-width: 1452px) {

}
@media screen and (max-width: 768px) {}
</style>
