<script lang="ts" setup>
import { zh_tran,zh_getLang,getCookie } from '~/assets/js/uselang'
import { Autoplay } from 'swiper';
import { useAppState } from '~/stores/appState'
import { toWhatsApp,smallPhoneNum } from '~/assets/js/common'
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
    name: 'components.header.menuLists.federation-of-trade-unions-zone.name',
    link: `/federation-of-trade-unions-zone`,
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
      // {
      //   name: 'components.header.menuLists.menu_news.tooth-wiki',
      //   link: '/news/tooth-wiki',
      // },
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
  menuBoxPhone: smallPhoneNum,
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
  window.addEventListener('scroll', getScrollHeight)
})
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
let bannerlink = ref('')
let bannerCurrent = ref(1)
let bannerSwiperRef ={
  slideToLoop: (a)=>{}
}
const changebanner = ( swiper )=>{
  bannerCurrent.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
  if(swiper.realIndex){
    if(Number(swiper.realIndex)===1){
      bannerlink.value = 'https://bit.ly/愛康健裕亨新店開業優惠'
    }else if(Number(swiper.realIndex)===2){
      bannerlink.value = '/medical-team'
    }else{
      bannerlink.value = ''
    }
  }else if(swiper.realIndex === 0){
    bannerlink.value = '/health-care-voucher'
  }
}
const setBannerSwiperRef = (swiper:any) => {
  bannerSwiperRef = swiper;
}
const handleBannerLineCur = (_value:number) =>{
  bannerSwiperRef.slideToLoop(_value-1)
}

const glangs = (_type) =>{
  zh_tran(_type)
  if(getCookie('zh_choose')) {
		var zh_choose:any = getCookie('zh_choose');
    appState.setLangs(zh_choose);
	}
}

let _bool = ref(false)
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
  <header>
    <div class="header-content">
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
      </div>
      <div
        class="header-content-bgImg-implant"
        :class="headerConfig.pageName"
      >
        <swiper :modules="[Autoplay]"
            :loop="true"
            :autoplay="{ delay: 3000 }"
            :speed="3000"
            @swiper="setBannerSwiperRef"
            @slideChange="changebanner">
          <SwiperSlide>
            <nuxt-link to="/health-care-voucher">
              <img :srcset="`https://static.cmereye.com/imgs/2024/02/afdfd3c22104497f.webp 768w, https://static.cmereye.com/imgs/2024/02/3443d2e2314e6e50.webp`"  src="https://static.cmereye.com/imgs/2024/02/3443d2e2314e6e50.webp" alt="">
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link to="https://bit.ly/愛康健裕亨新店開業優惠">
              <img :srcset="`https://static.cmereye.com/imgs/2024/02/216458f63817b47e.jpg 768w, https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg`"  src="https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg" alt="">
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link to="/medical-team">
              <img :srcset="`https://static.cmereye.com/imgs/2024/03/f3f241b74364a6b7.jpg 768w, https://static.cmereye.com/imgs/2024/03/a2877cc6bbeefbfa.webp`"  src="https://static.cmereye.com/imgs/2024/03/a2877cc6bbeefbfa.webp" alt="">
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
              <img :srcset="`https://static.cmereye.com/imgs/2024/03/4abbdd7326af4cc3.webp 768w, https://static.cmereye.com/imgs/2024/03/9615682d1948c5f5.png`"  src="https://static.cmereye.com/imgs/2024/03/9615682d1948c5f5.png" alt="">
          </SwiperSlide>
        </swiper>
      </div>
      <div
        ref="imgBgHeight"
        class="header-content-bgImgBB pcBox"
        :class="headerConfig.pageName"
      >
        <nuxt-link :to="bannerlink">
          <img data-cfsrc="https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg" :srcset="`https://static.cmereye.com/imgs/2024/02/216458f63817b47e.jpg 768w, https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg`"  src="https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg" alt="">
        </nuxt-link>
      </div>
      <div class="header-content-btn-implant bannerLine">
        <div class="bannerLine-in">
          <PageSwiperPointLine :latestNewsNum="4" :latestNewsCurrent="bannerCurrent" @changeLineCur="handleBannerLineCur"></PageSwiperPointLine>
        </div>
      </div>
      <div class="waterBg-implant"></div>
      <div
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
                :class="[menuItem.child.length ? 'triangleIcon' : '',{ 'health-care-voucher': menuItem.link === '/health-care-voucher'},{ 'federation-of-trade-unions-zone': menuItem.link === '/federation-of-trade-unions-zone'}]"
                :to="['/news','/dental-service'].includes(menuItem.link) ? 'javaScript:void(0)': menuItem.link"
                :title="$t(menuItem.name)"
              >
                {{ $t(menuItem.name) }}
              </nuxt-link>
              <div v-if="menuItem.child.length" class="menuChild" >
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
          <span class="zh_click" :style="{
            color: (appState.langs === 's'?'#FC1682':'#FF85AF'),
            'font-family': '微软雅黑'
          }" @click="glangs('s')">简体中文</span>
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
      <!-- 水波纹盒子 -->
      <div class="waterBg" :class="headerConfig.pageName"></div>
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
  </header>
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
    &.course-new{
      display: none;
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
    & > img {
      width: 100%;
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
  &-btn-implant {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 240px;
    left: 0;
    z-index: 40;
    width: 100%;
    &.bannerLine{
      bottom: 130px;
      z-index: 41;
      .bannerLine-in{
        width: 250px;
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
    &.course-new{
      display: none;
    }
  }
  &-bgImgBB {
    opacity: 0;
    &.course-new {
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
        &:hover .menuChild {
          display: flex;
          animation: animBottomIn .5s forwards;
        }
        .health-care-voucher{
          color: #00A752;
          .router-link-exact-active{
            color: #00A752;
          }
        }
        .federation-of-trade-unions-zone{
          color: #E60013;
          .router-link-exact-active{
            color: #E60013;
          }
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
    &.course-new{
      bottom: 60px;
    }
  }
  .pcMenuBox {
    &.course-new{
      margin-top: 60px;
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
    &-text-implant {
      div{
        width: calc(80%);
        margin: 0 auto;
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
    &-text-implant {
      bottom: 80px;
      div{
        width: calc(80%);
        margin: 0 auto;
      }
    }
    &-bgImgBB{
      width: 100%;
    }
    &-btn-implant{
      bottom: 18vw;
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
            padding: 0 1vw;
            box-sizing: border-box;
          }
          &.langItem{
            padding: 0 1vw 10px;
            &>img{
              width: 20px;
            }
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

@media (min-width: 1450px) and (max-width: 1800px) {
  .header-content {
    &-in {
      width: calc(80% + 60px);
      padding: 10px 15px 0 30px;
      .logo {
        width: 20%;
        margin-bottom: 10px;
      }
      .menu {
        .menuItem {
          font-size: 1.1vw;
          padding: 0 0 10px;
          & > a {
            padding: 0 1vw;
            box-sizing: border-box;
          }
          &.langItem{
            padding: 0 1vw 1vw;
            &>img{
              width: 1vw;
            }
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #666666 transparent transparent transparent;
          }
          .menuChild {
            padding: 0 10px;
            &-item {
              font-size: 1.1vw;
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
    .waterBg {
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: 4vw;
      }
      &.course-new{
        bottom: 30px;
      }
    }
    &-btn-implant {
      bottom: calc(100px + 6vw);
      span{
        font-size: 1.9vw;
        padding: .3vw 3.5vw;
      }
    }
    &-text-implant {
      width: calc(80% + 60px);
      padding: 0 30px;
      bottom: 5vw;
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
      &.course-new{
        margin-top: 70px;
      }
    }
    &-bgImg-implant {
      position: relative;
      top: 60px;
      z-index: 1;
      &.course-new{
        padding-bottom: 5px;
      }
    }
    &-btn-implant {
      &.bannerLine{
        position: relative;
        bottom: -80px;
        z-index: 2;
        .bannerLine-in{
          width: 150px;
        }
      }
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
      &.course-new{
        display: block;
        margin-top: 150px;
      }
    }
    .waterBg-implant {
      display: block;
      margin-top: -30px;
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
        bottom: 20px;
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
        bottom: 20px;
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
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 20px 0 0 20px;
      .logo {
        width: 125px;
        margin-bottom: 0;
      }
      .menu {
        display: none;
      }
      .icon {
        display: flex;
        align-items: center;
        &-menuopen{
          display: block;
          width: 20px;
          margin-right: 25px;
        }
        &-lists{
          display: flex;
          align-items: center;
          &-in{
            display: block;
            margin-right: 15px;
            img{
              width: 20px;
            }
          }
        }
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
      &.course-new{
        bottom: auto;
      }
    }
    .headerBox02 {
      position: relative;
      z-index: 40;
    }
  }
  .waterBg::after {
    transform: rotate(180deg);
    top: -50px;
  }
  .waterBg::before {
    transform: rotate(180deg);
    top: -60px;
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
