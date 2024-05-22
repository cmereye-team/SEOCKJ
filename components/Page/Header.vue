<script lang="ts" setup>
import { zh_tran,zh_getLang,getCookie } from '~/assets/js/uselang'
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
      ...serviceLists
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
      {
        name: 'components.header.menuLists.menu_news.tooth-wiki',
        link: '/news/tooth-wiki',
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
  getWindowWidth()
  window.addEventListener('scroll', getScrollHeight)
  window.addEventListener('resize', getWindowWidth)
  setTimeout(() => {
    if(route.path.includes('/cn')){
      changlangsfun('s')
    }else{
      changlangsfun('t')
    }
  }, 500)
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
const router = useRouter()
const glangs = (_type) =>{
  let _a = [
    {
      lable: 'hk',
      value: 't'
    },
    {
      lable: 'cn',
      value: 's'
    }
  ]
  let _b = _a.find(item=>item.value === _type)
  let _str = route.path.slice(0,3)
  let _arr = ['404','test','/news-tooth-wiki','/news-information','/article']
  if(_arr.some(str => route.path?.indexOf(str) !== -1)) {
    changlangsfun(_type)
  }else{
    if(_str === '/cn' || _str === '/hk'){
      let _url = route.path
      let _url_new = _url.replace(_url.slice(0,3),_b ? '/'+_b.lable : '')
      router.push(_url_new)
    }else{
      router.push(`${_b ? '/'+_b.lable : ''}${route.path}`)
    }
  }
}
const changlangsfun = (_type) =>{
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


//温馨提示：代码改了改，恶心程度★★★★★
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
      <div
        ref="imgBgHeight"
        class="header-content-bgImgBB pcBox"
        :class="headerConfig.pageName"
      >
        <img :data-cfsrc="headerConfig.img" :srcset="`${headerConfig.mbImg} 768w, ${headerConfig.img}`" :src="headerConfig.img"  alt="banner" />
      </div>
      <div
        v-if="
          ['implant', 'rootCanal-test', 'scaling-and-polishing-test','invisalign-test','veneers-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-btn-implant"
      >
        <PageAnimBtnTypeTwo :str="btnText || '免費網上預約'" />
      </div>
      <div
        v-if="
          ['periodontal-test','orthodontics-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-btn-implant"
      >
        <PageAnimBtnTypeTwo :str="'獲取免費諮詢'" />
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
        v-if="['implant','rootCanal-test','scaling-and-polishing-test','health-care-voucher'].includes(headerConfig.pageName)"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>29年專科•專業•專注</div>
        <div><span>港人首選</span>一站式連鎖牙科品牌</div>
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
        v-if="['veneers-test','action-message','course-new','invisalign-test','orthodontics-test','index-test'].includes(headerConfig.pageName)"
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
                <span>{{ $t(menuItem.name) }}</span>
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
                  <nuxt-link :to="menuChildItem.link" :class="{hot: menuChildItem.isHot}">
                    {{ menuChildItem.link === '/dental-service/wisdom-teeth-extraction' ? '拔牙\n' : '' }}
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
            <nuxt-link :to="!item.child.length ? item.link : 'javaScript:void(0)'" :title="$t(item.name)">
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
    // top: 0;
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
    z-index: -2;
    width: 100%;
    img {
      width: 100%;
    }
  }
  &-btn-implant {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 200px;
    left: 0;
    z-index: 40;
    width: 100%;
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
      // min-height: calc(726 / 1920 * 100vw);
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
        & > .router-link-exact-active {
          color: var(--indexColor1);
          &.triangleIcon:after {
            border-color: var(--indexColor1) transparent transparent transparent;
          }
          span{
            &::before{
              width: 100%;
              bottom: 2px;
              background: var(--indexColor1);
            }
          }
          &.health-care-voucher{
            span{
              &::before{
                background: #00A752;
              }
            }
          }
          &.federation-of-trade-unions-zone{
            span{
              &::before{
                background: #E60013;
              }
            }
          }
        }
        &:hover {
          color: var(--indexColor1);
          .triangleIcon:after {
            border-color: var(--indexColor1) transparent transparent transparent;
          }
          span{
            &::before{
              width: 100%;
              bottom: 2px;
              background: var(--indexColor1);
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
                color: var(--indexColor1);
                &::after{
                  content: '·';
                  position: absolute;
                  left: 50%;
                  top: 0;
                  font-size: 30px;
                  color: var(--indexColor1);
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
      .logo{
        &>a{
          img{
            height: 30px;
          }
        }
      }
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
@keyframes menuIconAnim {
  30%{
    background-position-y: 3px;
  }
  55%{
    background-position-y: 15px;
  }
  75%{
    background-position-y: 8px;
  }
  90%{
    background-position-y: 11px;
  }
  100%{
    background-position-y: 10px;
  }
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
      div{
        width: calc(80%);
        margin: 0 auto;
      }
    }
    &-btn-implant{
      bottom: 18vw;
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
      bottom: 12vw;
      // span{
      //   font-size: 2vw;
      //   padding: 5px 4vw;
      // }
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
      bottom: calc(100px + 5vw);
      // span{
      //   font-size: 1.9vw;
      //   padding: .3vw 3.5vw;
      // }
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
      top: 60px;
      &.rootCanal-test{
        padding-bottom: 40px;
      }
      &.rootCanal{
        padding-bottom: 40px;
      }
      &.scaling-and-polishing{
        padding-bottom: 60px;
      }
      &.scaling-and-polishing-test{
        padding-bottom: 60px;
      }
      &.periodontal-test,&.orthodontics-test,&.invisalign-test,&.veneers-test{
        padding-bottom: 60px;
      }
      &.implant{
        padding-bottom: 60px;
      }
      &.course-new{
        padding-bottom: 50px;
      }
      &.health-care-voucher{
        padding-bottom: 140px;
      }
      &.coverage{
        padding-bottom: 120px;
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
        &.health-care-voucher{
          color: #00A752;
        }
        &.federation-of-trade-unions-zone{
          color: #E60013;
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
