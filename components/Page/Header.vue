<script lang="ts" setup>
import { zh_tran,zh_getLang,getCookie } from '~/assets/js/uselang'
// import gsap from 'gsap'
import { useAppState } from '~/stores/appState'
import { toWhatsApp } from '~/assets/js/common'
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
})

const menuLists = [
  {
    name: 'components.header.menuLists.menu_index.name',
    link: '/',
    child: [],
  },
  // {
  //   name: '最新消息',
  //   link: '/newsPage',
  //   child: [],
  // },
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
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
        link: '/dental-service/implant'
      },
      {
        name: 'service.orthodontics',
        // imgUrl: 'https://static.cmereye.com/imgs/2023/05/4344be2a0c460ef5.png',
        imgUrl: 'https://static.cmereye.com/imgs/2023/12/7da6bba89026b274.png',
        link: '/dental-service/orthodontics'
      },
      {
        name: 'service.rootCanal',
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/32034ad5bb8db07a.png',
        link: '/dental-service/rootCanal'
      },
      {
        name: 'service.invisalign',
        imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/z0x4bI.tif.48men0yif480.png',
        // link: '/dental-service/invisalign'
        link: '/dental-service/invisiblebraces'
      },
      {
        name: 'service.veneers',
        imgUrl: 'https://static.cmereye.com/imgs/2024/02/00806cdcd04b63e9.png',
        link: '/dental-service/veneers'
      },
      {
        name: 'service.all_ceramic_crowns',
        imgUrl: 'https://static.cmereye.com/imgs/2024/02/80eb6295bc71eeb3.png',
        link: '/dental-service/all-ceramic-crowns'
      },
      {
        name: 'service.wisdom_teeth_extraction',
        imgUrl: 'https://static.cmereye.com/imgs/2024/02/5a5c41f570b977d8.png',
        link: '/dental-service/wisdom-teeth-extraction'
      },
      {
        name: 'service.periodontal',
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/db71b7e766da670e.png',
        link: '/dental-service/periodontal'
      },
      {
        name: 'service.toothtray',
        // imgUrl: 'https://static.cmereye.com/imgs/2023/12/f9139f98feecb5d0.png',
        imgUrl: 'https://static.cmereye.com/imgs/2023/12/649dce292f6182b6.png',
        link: '/dental-service/toothtray'
      },
      {
        name: 'service.teeth_whitening',
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/201d5535b39b4b5f.png',
        link: '/dental-service/teeth-whitening'
      },
      {
        name: 'service.scaling_and_polishing',
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/e4d3795bb2f0397c.png',
        link: '/dental-service/scaling-and-polishing'
      },
      {
        name: 'service.fillings',
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/b94a717160c05e3a.png',
        link: '/dental-service/fillings'
      },
      {
        name: 'service.general_oral_examination',
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/248483fd3f0ca0e2.png',
        link: '/dental-service/general-oral-examination'
      },
      {
        name: 'service.children_dentistry',
        // imgUrl: 'https://static.cmereye.com/imgs/2023/05/0c2dfc7b0c54bc01.png',
        imgUrl: 'https://static.cmereye.com/imgs/2023/12/1c8586701fba6af8.png',
        link: '/dental-service/children-dentistry'
      }
    ],
  },
  {
    name: 'components.header.menuLists.health-care-voucher.name',
    link: `/health-care-voucher`,
    child: []
  },
  {
    name: 'components.header.menuLists.menu_news.name',
    link: `/news`,
    child: [
      {
        name: 'components.header.menuLists.menu_news.coverage',
        link: '/news/coverage',
      },
      {
        name: 'components.header.menuLists.menu_news.information',
        link: '/news/information',
      },
    ]
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
  // {
  //   name: 'components.header.menuLists.menu_caseSharing.name',
  //   link: '/aboutUs',
  //   child: [],
  // },
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
  menuBoxBtn: '諮詢熱線',
  menuBoxPhone: '3892 5049',
}

const menuBoxBool = ref(false)

const menuActNum = ref(0)
const handleMenu = (_idx: number) => {
  if (menuActNum.value === _idx) menuActNum.value = 0
  else menuActNum.value = _idx
  // console.log(menuActNum)
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
  // gsap.from('.header-content-bgImg-in', {
  //   opacity: 0,
  //   y: 100,
  //   duration: 2,
  // })
  // gsap.from('.header-content-bgImg-imgInfo', {
  //   opacity: 0,
  //   y: 100,
  //   duration: 2,
  // })
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

const glangs = (_type) =>{
  zh_tran(_type)
  if(getCookie('zh_choose')) {
		var zh_choose:any = getCookie('zh_choose');
    appState.setLangs(zh_choose);
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
  <header>
    <div class="header-content">
      <!-- <div class="LanguageSwitcher" :style="{opacity:isShowLanguageBool?'1':'0'}">
        <div class="LanguageSwitcher-in pageCon">
          <LanguageSwitcher />
        </div>
      </div> -->
      <div class="header-content-bgImg" :class="headerConfig.pageName">
        <img class="imgBgBox pcBox" :src="headerConfig.bg" alt="" />
        <div class="header-content-bgImg-imgInfo bigPageCon">
          <img
            :class="['pcBox', headerConfig.pageName]"
            :src="headerConfig.img"
            alt="banner"
          />
        </div>
        <img
          :class="[
            'mbBox',
            'header-content-bgImg-mbImg',
            headerConfig.pageName,
          ]"
          :src="headerConfig.mbImg"
          alt="banner"
        />
        <div class="header-content-bgImg-textInfo pageCon">
          <div :class="['header-content-bgImg-in', headerConfig.pageName]">
            <div :class="['bannerTitle', headerConfig.pageName]">
              <span>{{
                windowWidth > 768
                  ? headerConfig.pcText[0]
                  : headerConfig.mbText[0]
              }}</span>
              <span>{{
                windowWidth > 768
                  ? headerConfig.pcText[1]
                  : headerConfig.mbText[1]
              }}</span>
            </div>
            <div class="text">
              {{ headerData.bannerText }}
              <span>{{ headerData.bannerTextSpan }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="
          ['implant', 'rootCanal-test', 'scaling-and-polishing-test','periodontal-test','orthodontics-test','invisalign-test','veneers-test','action-message','course-new','health-care-voucher','coverage'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-bgImg-implant"
        :class="headerConfig.pageName"
      >
        <img :data-cfsrc="headerConfig.img" :srcset="`${headerConfig.mbImg} 768w, ${headerConfig.img}`" :src="headerConfig.img" alt="banner"   />
      </div>
      <!-- <div
        v-if="
          ['implant', 'rootCanal-test', 'scaling-and-polishing-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-bgImg-implant-mb"
      >
        <img :src="headerConfig.mbImg" alt="banner" />
      </div> -->
      <div
        ref="imgBgHeight"
        class="header-content-bgImgBB pageCon pcBox"
        :class="headerConfig.pageName"
      >
        <img :data-cfsrc="headerConfig.img" :srcset="`${headerConfig.mbImg} 768w, ${headerConfig.img}`" :src="headerConfig.img"  alt="banner" />
      </div>
      <div
        v-if="
          ['implant', 'rootCanal-test', 'scaling-and-polishing-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-btn-implant"
      >
        <span @click="toWhatsApp">免費網上預約</span>
        <span @click="toWhatsApp">免費網上預約</span>
      </div>
      <div
        v-if="
          ['periodontal-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-btn-implant"
      >
        <span @click="toWhatsApp">獲取免費諮詢</span>
        <span @click="toWhatsApp">獲取免費諮詢</span>
      </div>
      <div
        v-if="
          ['orthodontics-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-btn-implant"
      >
        <span @click="toWhatsApp">獲取免費諮詢</span>
        <span @click="toWhatsApp">獲取免費諮詢</span>
      </div>
      <div
        v-if="
          ['invisalign-test','veneers-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-btn-implant"
      >
        <span @click="toWhatsApp">免費網上預約</span>
        <span @click="toWhatsApp">免費網上預約</span>
      </div>
      <div
        v-if="
          ['implant', 'rootCanal-test', 'scaling-and-polishing-test','index-test','periodontal-test','orthodontics-test','invisalign-test','veneers-test','action-message','course-new','health-care-voucher','coverage'].includes(
            headerConfig.pageName
          )
        "
        class="waterBg-implant"
      ></div>
      <div
        v-if="headerConfig.pageName === 'implant'"
        class="header-content-text-implant"
      >
        <div>28年專科•專業•專注</div>
        <div><span>港人首選</span>一站式連鎖牙科品牌</div>
      </div>
      <div
        v-if="headerConfig.pageName === 'rootCanal-test'"
        class="header-content-text-implant"
      >
        <!-- <div>保留原生牙齒</div>
        <div>徹底<span>解放美食自由</span></div> -->
        <div>28年專科•專業•專注</div>
        <div><span>港人首選</span>一站式連鎖牙科品牌</div>
      </div>
      <div
        v-if="headerConfig.pageName === 'scaling-and-polishing-test'"
        class="header-content-text-implant"
      >
        <!-- <div>口腔健康，從洗牙開始！</div> -->
        <div>28年專科•專業•專注</div>
        <div><span>港人首選</span>一站式連鎖牙科品牌</div>
      </div>
      <div
        v-if="headerConfig.pageName === 'health-care-voucher'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>{{$t('health-care-voucher.header_text1')}}</div>
        <div><span>{{$t('health-care-voucher.header_text2')}}</span>{{$t('health-care-voucher.header_text3')}}</div>
      </div>
      <div
        v-if="headerConfig.pageName === 'index-test'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <!-- <div>口腔健康，從洗牙開始！</div> -->
        <div>全程式預約一體化診療服務</div>
        <div>讓每一位顧客享受<span>健康微笑之旅。</span></div>
      </div>
      <div
        v-if="headerConfig.pageName === 'periodontal-test'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>健康牙齒，從<span>牙周病治療</span>開始</div>
        <div>保持口氣清新、牙周健康</div>
      </div>
      <div
        v-if="headerConfig.pageName === 'orthodontics-test'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>全程式預約一體化診療服務，</div>
        <div>讓每一位顧客享受 <span>健康微笑之旅。</span></div>
      </div>
      <div
        v-if="headerConfig.pageName === 'invisalign-test'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>全程式預約一體化診療服務，</div>
        <div>讓每一位顧客享受 <span>健康微笑之旅。</span></div>
      </div>
      <div
        v-if="headerConfig.pageName === 'veneers-test'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>全程式預約一體化診療服務，</div>
        <div>讓每一位顧客享受 <span>健康微笑之旅。</span></div>
      </div>
      <div
        v-if="headerConfig.pageName === 'action-message'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>全程式預約一體化診療服務，</div>
        <div>讓每一位顧客享受 <span>健康微笑之旅。</span></div>
      </div>
      <div
        v-if="headerConfig.pageName === 'course-new'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>全程式預約一體化診療服務，</div>
        <div>讓每一位顧客享受 <span>健康微笑之旅。</span></div>
      </div>
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
          <div class="menu">
            <div
              v-for="(menuItem, menuIndex) in menuLists"
              :key="menuIndex"
              class="menuItem"
            >
              <nuxt-link
                :class="[menuItem.child.length ? 'triangleIcon' : '',{ 'health-care-voucher': menuItem.link === '/health-care-voucher'}]"
                :to="['/news','/dental-service'].includes(menuItem.link) ? 'javaScript:void(0)': menuItem.link"
                :title="$t(menuItem.name)"
              >
                {{ $t(menuItem.name) }}
              </nuxt-link>
              <div
                v-if="menuItem.child.length"
                class="menuChild"
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
                  <nuxt-link :to="menuChildItem.link">
                    {{ $t(menuChildItem.name) }}
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
          <div class="icon" @click="menuBoxBool = !menuBoxBool">
            <img v-if="!menuBoxBool" src="@/assets/images/icon_61.png" />
            <img v-else src="@/assets/images/icon_7.svg" />
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
            <nuxt-link :to="!item.child.length ? item.link : ''" :title="$t(item.name)">
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
        <div class="langItem">
          <img src="@/assets/images/icon_27.svg" alt="语言">
          <span class="zh_click" :style="{color: (appState.langs === 't'?'#FC1682':'#FF85AF')}" @click="glangs('t')">繁體中文</span>
          <span class="zh_click" :style="{color: (appState.langs === 's'?'#FC1682':'#FF85AF')}" @click="glangs('s')">简体中文</span>
        </div>
        <!-- 立即預約 -->
        <nuxt-link to="tel: +852 3892 5049">
          <div class="menuBox-btn">
            {{ headerData.menuBoxBtn }}
          </div>
        </nuxt-link>
        <div class="menuBox-phone">
          <img src="@/assets/images/icon_11.svg" />{{ headerData.menuBoxPhone }}
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
      <!-- 水波纹盒子 -->
      <div class="waterBg" :class="headerConfig.pageName"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@keyframes btnAnim {
  0% {
    clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
  }
  50% {
    clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
  }
  100% {
    clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
  }
}
@keyframes animBottomIn {
  from{
  }
  to{
    opacity: 1;
    transform: translate(-50%,0);
  }
}
.LanguageSwitcher {
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  height: 30px;
  position: fixed;
  z-index: 38;
  transition: all 1s;
  &-in {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.header-content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  &-bgImg {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    &.implant,
    &.rootCanal-test,
    &.periodontal-test,
    &.orthodontics-test,
    &.invisalign-test,
    &.veneers-test,
    &.action-message,
    &.coverage,
    &.course-new,
    &.health-care-voucher,
    &.scaling-and-polishing-test {
      display: none;
    }
    &-imgInfo {
      & > img {
        &.brand {
          float: right;
        }
        &.implant {
          float: right;
          margin-right: calc((100% - 1452px) / 2);
        }
        &.rootCanal,
        &.orthodontics {
          float: right;
          margin-right: calc((100% - 1600px) / 2);
        }
        &.toothtray,
        &.general-oral-examination {
          float: right;
          margin-right: calc((100% - 1700px) / 2);
        }
        &.invisalign,
        &.veneers,
        &.wisdom-teeth-extraction,
        &.periodontal,
        &.teeth-whitening,
        &.scaling-and-polishing,
        &.children-dentistry,
        &.all-ceramic-crowns {
          float: right;
          margin-right: calc((100% - 1920px) / 2);
        }
        &.fillings {
          float: right;
          margin-right: calc((100% - 1200px) / 2);
        }
      }
    }
    &-mbImg {
      &.veneers,
      &.periodontal {
        -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
        -o-transform: matrix(-1, 0, 0, 1, 0, 0);
        -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }
    }
    &-textInfo {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
    .imgBgBox {
      width: 100%;
      min-height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -2;
    }
    .imgBgBox-1 {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -3;
      filter: blur(10px);
    }
    & > img {
      width: 100%;
    }
    &-in {
      position: absolute;
      left: 55%;
      top: 30%;
      .bannerTitle {
        font-weight: 700;
        font-size: 42px;
        line-height: 160%;
        color: #666666;
        span {
          display: block;
          &:last-child {
            margin-left: 200px;
          }
        }
        &.rootCanal,
        &.wisdom-teeth-extraction {
          span {
            &:last-child {
              margin-left: 120px;
            }
          }
        }
        &.toothtray,
        &.scaling-and-polishing,
        &.invisalign {
          span {
            &:last-child {
              margin-left: 130px;
            }
          }
        }
      }
      .text {
        margin-top: 32px;
        max-width: 550px;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 160%;
        color: #666666;
        width: 73%;
        span {
          font-size: 25px;
          color: var(--indexColor);
        }
      }
      &.brand {
        left: 0;
      }
      &.implant,
      &.orthodontics,
      &.rootCanal,
      &.invisalign,
      &.veneers,
      &.all-ceramic-crowns {
        left: 0;
        top: 25%;
      }
      &.wisdom-teeth-extraction,
      &.periodontal,
      &.toothtray,
      &.teeth-whitening,
      &.scaling-and-polishing {
        left: 0;
        top: 25%;
      }
      &.fillings,
      &.general-oral-examination,
      &.children-dentistry {
        left: 0;
        top: 25%;
      }
      &.index-test,&.action-message,&.course-new,&.health-care-voucher,&.coverage{
        display: none;
      }
    }
  }
  &-bgImg-implant {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    img {
      width: 100%;
    }
  }
  // &-bgImg-implant-mb {
  //   display: none;
  // }
  &-btn-implant {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 240px;
    left: 0;
    z-index: 40;
    width: 100%;
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      background: var(--indexColor1);
      font-size: 35px;
      font-weight: 900;
      border-radius: 40px;
      padding: 5px 80px;
      box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
      cursor: pointer;
      z-index: 1;
      transition: all .3s;
      &:nth-of-type(2) {
        color: var(--indexColor1);
        background: #fff;
        z-index: 2;
        animation: btnAnim 1s linear;
        animation-fill-mode: forwards;
      }
    }
    &:hover{
      span{
        &:nth-of-type(1){
          background: #FF85AF;
        }
      }
    }
  }
  .waterBg-implant {
    display: none;
  }
  &-text-implant {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    width: 100%;
    max-width: 1450px;
    text-align: right;
    & > div {
      font-size: 28px;
      font-weight: 700;
      color: #666666;
      span {
        color: var(--indexColor1);
      }
    }
    &.index-test,&.action-message,&.course-new,&.coverage{
      display: none;
    }
    &.periodontal-test{
      display: none;
    }
    &.orthodontics-test{
      display: none;
    }
    &.invisalign-test,&.veneers-test{
      display: none;
    }
  }
  &-bgImgBB {
    opacity: 0;
    &.index-test{
      max-width: 1920px;
      min-height: calc(650 / 1920 * 100%);
    }
    &.action-message,&.course-new,&.health-care-voucher,&.coverage,
    &.implant,
    &.health-care-voucher,
    &.rootCanal-test,
    &.periodontal-test,
    &.orthodontics-test,
    &.invisalign-test,
    &.veneers-test,
    &.scaling-and-polishing-test {
      max-width: 100%;
      min-height: calc(726 / 1920 * 100vw);
      img {
        width: 100%;
      }
    }
  }
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
        font-size: 22px;
        font-weight: 600;
        position: relative;
        & > a {
          padding: 0 20px;
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
          padding: 0 20px 25px;
          .menuChild{
            .menuChild-item{
              &>span{
                color: var(--textColor);
              }
              &.langItem-act{
                &>span{
                  color: var(--indexColor1);
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
        .health-care-voucher{
          color: #00A752;
          .router-link-exact-active{
            color: #00A752;
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
            top: -18px;
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
  .waterBg {
    position: relative;
    z-index: 35;
    &.implant,
    &.rootCanal-test,
    &.periodontal-test,
    &.orthodontics-test,
    &.invisalign-test,
    &.veneers-test,
    &.health-care-voucher,
    &.scaling-and-polishing-test {
      bottom: 100px;
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
    box-shadow: 0px 4px 8px var(--indexColor3);
    margin-top: 0 !important;
    .header-content-in {
      align-items: center;
    }
  }
}
.waterBg::after {
  content: '';
  background-image: url(@/assets/images/back_wave01.png);
  background-repeat: repeat-x;
  background-position: center 20px;
  height: 162px;
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
@keyframes wave1 {
  0% {
    background-position: 0px 20px;
  }
  100% {
    background-position: 1080px 20px;
  }
}
@-webkit-keyframes wave1 {
  0% {
    background-position: 0px 20px;
  }
  100% {
    background-position: 1080px 20px;
  }
}
.waterBg::before {
  content: '';
  background-image: url(@/assets/images/back_wave03.png);
  background-repeat: repeat-x;
  background-position: center bottom;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 35;
  left: 0px;
  bottom: 0px;
  animation-name: wave2;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-name: wave2;
  -webkit-animation-duration: 10s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}
@keyframes wave2 {
  0% {
    background-position: 0px bottom;
  }
  100% {
    background-position: 1080px bottom;
  }
}
@-webkit-keyframes wave2 {
  0% {
    background-position: 0 bottom;
  }
  100% {
    background-position: 1080px bottom;
  }
}
.menuBox {
  display: none;
}

@media (min-width: 768px) and (max-width: 1000px) {
  .header-content {
    &-bgImg {
      &-in {
        left: 50%;
        .bannerTitle {
          font-size: 2rem;
          line-height: 130%;
          span {
            display: block;
            &:last-child {
              margin-left: 10%;
            }
          }
        }
        .text {
          margin-top: 1%;
          font-size: 1.2rem;
          line-height: 130%;
          span {
            font-size: 1.2rem;
            color: var(--indexColor);
          }
        }
      }
    }
    &-text-implant {
      // bottom: 60px;
      div{
        width: calc(80%);
        margin: 0 auto;
        // font-size: 2vw;
      }
    }
    &-btn-implant{
      bottom: auto;
      span{
        font-size: 2vw;
        padding: 5px 4vw;
      }
    }
    &-in{
      width: calc(80% + 60px);
    }
    &-bgImgBB{
      width: 100%;
    }
    .waterBg {
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: 60px;
      }
    }
    .pcMenuBox {
      &.health-care-voucher{
        margin-top: 60px;
      }
    }
  }
  .waterBg::after,
  .waterBg::before {
    height: 160px;
  }
}
@media (min-width: 1001px) and (max-width: 1452px) {
  .header-content {
    &-in{
      width: calc(80% + 60px);
      padding: 10px 10px 0 30px;
      .logo{
        width: 200px;
        margin-bottom: 15px;
      }
    }
    .waterBg {
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: 65px;
      }
      // &.health-care-voucher{
      //   bottom: 70px;
      // }
    }
    &-text-implant {
      bottom: 80px;
      &.health-care-voucher{
        bottom: 100px;
      }
      div{
        width: calc(80%);
        margin: 0 auto;
      }
    }
    &-bgImg {
      &-in {
        top: 30%;
        .bannerTitle {
          font-size: 2.5rem;
          line-height: 130%;
          span {
            display: block;
            &:last-child {
              margin-left: 15%;
            }
          }
        }
        .text {
          margin-top: 2%;
          font-size: 1.4rem;
          line-height: 130%;
          span {
            font-size: 1.4rem;
            color: var(--indexColor);
          }
        }
      }
    }
    &-bgImgBB{
      width: 100%;
    }
    &-btn-implant{
      bottom: 18vw;
      span{
        font-size: 2vw;
        padding: 5px 4vw;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1450px) {
  .header-content {
    &-in {
      padding: 10px 15px 0 30px;
      .logo {
        width: 20%;
        margin-bottom: 15px;
      }
      .menu {
        .menuItem {
          font-size: 100%;
          padding: 0 0 10px;
          & > a {
            padding: 0 1.3vw;
            box-sizing: border-box;
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #666666 transparent transparent transparent;
          }
          .menuChild {
            padding: 0 10px;
            &-item {
              font-size: 1rem;
            }
            &::before {
              border: 5px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            padding: 12px 6px;
          }
        }
      }
    }
    &-text-implant {
      div{
        font-size: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .header-content {
    &-bgImg {
      position: relative;
      &-textInfo {
        position: static;
        width: 100%;
        background: #fff;
        transform: none;
      }
      &-in {
        position: static;
        .bannerTitle {
          position: absolute;
          line-height: 140%;
          color: #000;
          font-weight: 400;
          font-size: 1.25rem;
          left: auto;
          top: auto;
          right: 30px;
          bottom: 0;
          span {
            padding: 10px 2px;
            background: #fff;
            text-align: center;
            writing-mode: tb-rl;
            text-align: center;
            letter-spacing: 7px;
            vertical-align: middle;
            &:first-child {
              margin-left: 50px;
            }
            &:last-child {
              margin-left: 0;
              margin-top: -120px;
            }
          }
        }
        .text {
          left: 55%;
          font-weight: 500;
          font-size: 1.25rem;
          width: 60vw;
          padding-left: 30px;
          margin-top: 0;
          span {
            font-size: 1.25rem;
          }
        }
      }
      &.index-test,&.action-message,&.course-new,&.health-care-voucher,&.coverage{
        margin-top: 70px;
      }
    }
    &-bgImg-implant {
      // display: none;
      position: relative;
      top: 80px;
      &.rootCanal-test{
        padding-bottom: 60px;
      }
      &.rootCanal{
        padding-bottom: 60px;
      }
      &.scaling-and-polishing{
        padding-bottom: 80px;
      }
      &.scaling-and-polishing-test{
        padding-bottom: 80px;
      }
      &.periodontal-test,&.orthodontics-test,&.invisalign-test,&.veneers-test{
        padding-bottom: 80px;
      }
      &.implant{
        padding-bottom: 80px;
      }
      &.course-new{
        padding-bottom: 70px;
      }
      &.health-care-voucher{
        padding-bottom: 160px;
      }
      &.coverage{
        padding-bottom: 140px;
      }
    }
    &-btn-implant {
      display: none;
    }
    &-text-implant {
      position: relative;
      margin-top: 25px;
      width: calc(100% - 60px);
      bottom: auto;
      text-align: left;
      z-index: 1;
      & > div {
        font-size: 20px;
      }
      &.index-test,&.action-message,&.course-new{
        display: block;
      }
      &.periodontal-test,&.orthodontics-test,&.invisalign-test,&.veneers-test{
        display: block;
      }
      &.health-care-voucher{
        display: none;
      }
    }
    .waterBg-implant {
      display: block;
      &::before {
        content: '';
        background-image: url(@/assets/images/back_wave03.png);
        background-repeat: repeat-x;
        background-position: center bottom;
        height: 162px;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: -30px;
        animation-name: wave2;
        animation-duration: 10s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-name: wave2;
        -webkit-animation-duration: 10s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
      }
      &::after {
        content: '';
        background-image: url(@/assets/images/back_wave01.png);
        background-repeat: repeat-x;
        background-position: center 20px;
        height: 162px;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: -30px;
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
    }
    // &-bgImg-implant-mb {
    //   display: block;
    //   padding-top: 80px;
    //   img {
    //     width: 100%;
    //   }
    // }
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      margin: 0;
      padding: 20px 0 0 30px;
      .logo {
        width: 150px;
        margin-bottom: 0;
      }
      .menu {
        display: none;
      }
      .icon {
        display: block;
        width: 24px;
        margin-right: 30px;
      }
    }
    &-span {
      width: 70px;
      font-weight: 400;
      font-size: 20px;
      right: 30px;
      bottom: 60px;
    }
    .waterBg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: auto;
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
        margin-top: 0px;
        transition: all 0.3s;
      }
    }
    .headerBox02 {
      position: relative;
      z-index: 40;
    }
  }
  .waterBg::after {
    transform: rotate(180deg);
    top: -30px;
  }
  .waterBg::before {
    transform: rotate(180deg);
    top: -40px;
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
          content: '';
          width: calc(100% - 60px);
          height: 2px;
          background: var(--indexColor2);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
        &.childIcon:after {
          content: '';
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
    .langItem{
      width: calc(100% - 60px);
      padding: 20px 0;
      margin: 0 30px;
      display: flex;
      border-top: 2px solid var(--indexColor2);
      justify-content: center;
      align-items: center;
      &>span{
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
