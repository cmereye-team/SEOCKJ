<script lang="ts" setup>
import { defineProps } from "vue"
import { useAppState } from '~/stores/appState'
import gsap from 'gsap';
const route = useRoute()
const appState = useAppState()
// const lsImgUrl = 'https://static.cmereye.com/imgs/2023/05/71929ca4c90a8d1e.png'
// const lsBgImgUrl = 'https://static.cmereye.com/imgs/2023/05/d8084e8da90409aa.jpg'
defineProps({
  headerImg: {
    type: String,
    default: 'https://static.cmereye.com/imgs/2023/05/71929ca4c90a8d1e.png',
  },
  headerBgImg: {
    type: String,
    default: 'https://static.cmereye.com/imgs/2023/05/d8084e8da90409aa.jpg',
  },
  // headerBg: {
  //   type: String,
  //   default: 'https://static.cmereye.com/imgs/2023/04/c9531b6beee976eb.jpg',
  // },
  mbBg:{
    type: String,
    default: 'https://static.cmereye.com/imgs/2023/04/b0d950232420bf46.jpg',
  },
  titlePosition:{
    type: String,
    default: 'right'   //right & left
  }
})

const menuLists = [
  {
    name: '主頁',
    link: '/',
    child: [],
  },
  // {
  //   name: '最新消息',
  //   link: '/newsPage',
  //   child: [],
  // },
  {
    name: '品牌理念',
    link: '/brandMind',
    child: [
      {
        name: '品牌歷程',
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
    link: `/service`,
    child: [
      {
        name: '種植牙',
        link: '/service/dentalImplant',
      },
      {
        name: '矯齒',
        link: '/service/orthodontics',
      },
      {
        name: '杜牙根',
        link: '/service/rootCanal',
      },
      {
        name: '隱適美',
        link: '/service/invisalign',
      },
      {
        name: '瓷貼片',
        link: '/service/veneers',
      },
      {
        name: '全瓷牙冠',
        link: '/service/crown',
      },
      {
        name: '智慧齒脫除',
        link: '/service/extraction',
      }
    ],
  },
  {
    name: '醫生團隊',
    link: `/doctorPage`,
    child: [
      {
        name: '羅湖區',
        link: '/doctorPage',
      },
      {
        name: '福田區',
        link: '/doctorPage',
      },
      {
        name: '南山區',
        link: '/doctorPage',
      },
      {
        name: '寶安區',
        link: '/doctorPage',
      },
      {
        name: '龍華區',
        link: '/doctorPage',
      },
    ],
  },
  // {
  //   name: '個案分享',
  //   link: '/aboutUs',
  //   child: [],
  // },
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
  menuBoxBtn: '立即預約',
  menuBoxPhone: '2828-2828'
}

let menuBoxBool = ref(false)

let menuActNum = ref(0)
const handleMenu = (_idx: number) => {
  if(menuActNum.value === _idx)
    menuActNum.value = 0
  else
    menuActNum.value = _idx
  // console.log(menuActNum)
}

const handleMenuChild = ( _menu:any, _idx: number) =>{
  if(_menu.link.includes('doctorPage')){
    appState.setCurNum(_idx)
    menuBoxBool.value = false
  }
}
const classNamefilter = ( _menu:any, _idx: number) => {
  let className = ''
  if(route.path === '/doctorPage'){
    if(_menu.link.includes('doctorPage')){
      if(appState.areaTabCurNum === _idx){
        className = 'menuChildCurrent'
      }
    }
  }else if(route.path.includes('/service')){
    if(_menu.link.includes(appState.dentistryService)){
      className = 'menuChildCurrent'
    }
  }
  
  // console.log('menu',_menu)
  // console.log('_idx',_idx)
  // console.log('areaTabCurNum',appState.areaTabCurNum)
  // console.log('className',className)
  // else if(_menu.link.includes('dentistryServices')){
  //   return 'servicesPageCurrent'
  // }
  return className
}


onMounted(() => {
  gsap.from('.header-content-bgImg-in', {
    opacity: 0, 
    y: 100, 
    duration: 2
  })
  gsap.from('.header-content-bgImg-imgInfo', {
    opacity: 0, 
    y: 100, 
    duration: 2
  })
});

</script>

<template>
  <header>
    <div class="header-content ">
      <div class="header-content-bgImg">
        <img class="imgBgBox pcBox" :src="headerBgImg" alt="">
        <div class="header-content-bgImg-imgInfo pageCon">
          <img
            :class="['pcBox',{ 'float-right': titlePosition === 'left'}]"
            :src="headerImg"
            alt=""
          />
        </div>
        <img
          class="mbBox"
          :src="mbBg"
          alt=""
        />
        <div class="header-content-bgImg-textInfo pageCon">
          <div :class="['header-content-bgImg-in',{ 'bannerTitleLeft': titlePosition === 'left'}]">
            <div class="bannerTitle">
              <!-- 重拾自信笑容 -->
              <span>{{headerData.bannerTitleSpanOne}}</span>
              <!-- 愛牙愛己，由你做起 -->
              <span>{{headerData.bannerTitleSpanTwo}}</span>
            </div>
            <div class="text">
              <!-- 全程式預約一體化診療服務，讓每一位顧客享受 -->
              {{headerData.bannerText}}
              <!-- 健康微笑之旅。 -->
              <span>{{headerData.bannerTextSpan}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="header-content-bgImgBB pageCon pcBox">
        <img
          :src="headerImg"
          alt=""
        />
      </div>
      <div class="pageCon header-content-in">
        <div class="logo">
          <nuxt-link :to="'/'"
            ><img src="@/assets/images/logo_1.png" alt=""
          /></nuxt-link>
        </div>
        <div class="menu">
          <div class="menuItem"
            v-for="(menuItem, menuIndex) in menuLists"
            :key="menuIndex"
          >
            <nuxt-link :class="menuItem.child.length ? 'triangleIcon' : ''" :to="menuItem.link">
            {{ menuItem.name }}
            </nuxt-link>
            <div class="menuChild" v-if="menuItem.child.length">
              <div :class="['menuChild-item', classNamefilter(menuChildItem,menuChildIndex)]" v-for="(menuChildItem,menuChildIndex) in menuItem.child" :key="menuChildIndex" @click="handleMenuChild(menuItem,menuChildIndex)">
                <nuxt-link :to="menuChildItem.link">
                {{menuChildItem.name}}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="icon" @click="menuBoxBool = !menuBoxBool">
          <img v-if="!menuBoxBool" src="@/assets/images/icon_6.png" >
          <img v-else src="@/assets/images/icon_7.png" >
        </div>
      </div>
      <div class="menuBox" :style="{top: (menuBoxBool ? '0' : '-100vh')}">
        <div class="menuLists">
          <div :class="['menuLists-item',item.child.length ? 'childIcon' : '']" v-for="(item, index) in menuLists" :key="index">
            <nuxt-link :to="!item.child.length ? item.link : ''">
              <div @click="handleMenu(index)">
                {{item.name}}
              </div>
            </nuxt-link>
            <div class="menuLists-childLists" v-if="item.child.length" v-show="menuActNum === index">
              <div class="menuLists-childLists-item" v-for="(itemChild,itemChildIndex) in item.child" :key="itemChildIndex" @click="handleMenuChild(item,itemChildIndex)">
                <nuxt-link :to="itemChild.link">
                {{itemChild.name}}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <!-- 立即預約 -->
        <div class="menuBox-btn">{{headerData.menuBoxBtn}}</div>
        <div class="menuBox-phone">
          <!-- 2828-2828 -->
          <img src="@/assets/images/icon_11.png" >{{headerData.menuBoxPhone}}
        </div>
        <div class="menuBox-icon">
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.facebook.com/smilepartner.cmer/?ref=page_internal-" target="_blank">
              <img src="@/assets/images/icon_01.png" />
            </nuxt-link>
          </div>
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.instagram.com/cmersmilepartner/" target="_blank">
              <img src="@/assets/images/icon_02.png" />
            </nuxt-link>
          </div>
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.youtube.com/@smilepartner_hk"  target="_blank">
              <img src="@/assets/images/icon_03.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="waterBg"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  &-bgImg {
    width: 100%;
    // max-width: 1920px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    // background: #ccc;
    &-imgInfo{
      &>img{
        width: 50%;
      }
    }
    &-textInfo{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
    .imgBgBox{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
    }
    &>img {
      width: 100%;
      // max-width: 1920px;
    }
    &-in{
      position: absolute;
      left: 55%;
      top: 30%;
      .bannerTitle{
        font-weight: 700;
        font-size: 3.125rem;
        line-height: 160%;
        color: #4D4D4D;
        span{
          display: block;
          &:last-child{
            margin-left: 200px;
          }
        }
      }
      .text{
        margin-top: 32px;
        font-style: normal;
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 160%;
        color: #4D4D4D;
        width: 73%;
        span{
          font-size: 1.75rem;
          color: #FFCECB;
        }
      }
      &.bannerTitleLeft{
        left: 0%;
      }
    }
  }
  &-bgImgBB{
    // width: 100%;
    opacity: 0;
    &>img{
      width: 50%;
    }
    
    // z-index: 1;
    // background: none;
  }
  &-in {
    width: 100%;
    // max-width: 1490px;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 0 0 20px;
    align-items: flex-end;
    z-index: 40;
    position: relative;
    .logo {
      width: 290px;
      margin-bottom: 20px;
    }
    .menu {
      flex: 1;
      color: #4d4d4d;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .menuItem {
        padding: 0 0 20px;
        cursor: pointer;
        font-size: 22px;
        font-weight: 600;
        position: relative;
        &>a{
          padding: 0 20px 20px;
        }
        .triangleIcon:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #4d4d4d transparent transparent transparent;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .triangleIcon:hover{
          &:after{
            border-color: #ffa09e transparent transparent transparent;
          }
        }
        &>.router-link-exact-active{
          color: #ffa09e;
          text-decoration-line: underline;
          &.triangleIcon:after{
            border-color: #ffa09e transparent transparent transparent;
          }
        }
        &:hover {
          color: #ffa09e;
          text-decoration-line: underline;
          .triangleIcon:after{
            border-color: #ffa09e transparent transparent transparent;
          }
        }
        &:hover .menuChild{
          display: flex;
        }
        .menuChild{
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 130%;
          z-index: 2;
          display: none;
          flex-direction: column;
          transition: all .3s;
          padding: 0 20px 5px;
          box-sizing: border-box;
          background: #FFFFFF;
          filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
          border-radius: 6px;
          // box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
          &-item{
            width: 100%;
            text-align: center;
            padding: 10px 0 5px;
            font-weight: 500;
            font-size: 1.25rem;
            color: #4d4d4d;
            transition: all .3s;
            &:not(:last-child){
              border-bottom: 1px solid #FFF1F0;
            }
            &:hover{
              color: #FFA09E;
            }
            &.menuChildCurrent{
              color: #FFA09E;
            }
          }
          &::before{
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
      }
    }
    .icon{
      display: none;
    }
  }
  .waterBg{
    position: relative;
    z-index: 35;
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
  // background-size: auto 80px;
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
  // transform: rotate(180deg);
  // -webkit-transform: rotate(180deg);
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
.menuBox{
  display: none;
}

@media (min-width: 768px) and (max-width: 1000px) {
  .header-content {
    &-bgImg {
      &-in{
        left: 50%;
        // top: 15%;
        .bannerTitle{
          font-size: 2.0rem;
          line-height: 130%;
          span{
            display: block;
            &:last-child{
              margin-left: 10%;
            }
          }
        }
        .text{
          margin-top: 1%;
          font-size: 1.2rem;
          line-height: 130%;
          span{
            font-size: 1.2rem;
            color: #FFCECB;
          }
        }
      }
    }
  }
  .waterBg::after,.waterBg::before {
    height: 140px;
  }
}
@media (min-width: 1000px) and (max-width: 1452px) {
  .header-content {
    &-bgImg {
      &-in{
        top: 30%;
        .bannerTitle{
          font-size: 2.5rem;
          line-height: 130%;
          span{
            display: block;
            &:last-child{
              margin-left: 15%;
            }
          }
        }
        .text{
          margin-top: 2%;
          font-size: 1.4rem;
          line-height: 130%;
          span{
            font-size: 1.4rem;
            color: #FFCECB;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .header-content {
    &-in {
      .logo {
        width: 22%;
        margin-bottom: 10px;
      }
      .menu {
        .menuItem {
          font-size: 100%;
          padding: 0 0 10px;
          &>a{
            padding: 0 1.3vw 10px;
            box-sizing: border-box;
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #4d4d4d transparent transparent transparent;
          }
          .menuChild{
            padding: 0 10px;
            &-item{
              font-size: 1rem;
            }
            &::before{
              border: 5px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .header-content {
    &-bgImg {
      position: relative;
      &-textInfo{
        position: static;
        width: 100%;
        background: #fff;
        transform: none;
      }
      &-in{
        position: static;
        .bannerTitle{
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
        .text{
          left: 55%;
          font-weight: 500;
          font-size: 1.25rem;
          width: 60vw;
          padding-left: 30px;
          // margin-top: 30px;
          margin-top: 0;
          span{
            font-size: 1.25rem;
          }
        }
      }
    }
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      margin: 0;
      .logo{
        width: 150px;
        margin-bottom: 0;
      }
      .menu{
        display: none;
      }
      .icon{
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
    .waterBg{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
  .waterBg::after{
    transform: rotate(180deg);
    // box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.15);
    filter: drop-shadow(0px 4px 8px rgba(77, 77, 77, 0.15));
    top: -30px;
  }
  .waterBg::before{
    transform: rotate(180deg);
    top: -40px;
  }
  .menuBox{
    position: fixed;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 30;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    color: #FFCECB;
    transition: all .3s;
    overflow: hidden;
    overflow-y: auto;
    .menuLists{
      margin-top: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-item{
        text-align: left;
        margin-top: 20px;
        font-size: 1.125rem;
        position: relative;
        &.childIcon{
          // padding-left: 37px;
        }
        &.childIcon:after{
          content: '';
          width: 0;
          height: 0;
          display: inline-block;
          position: absolute;
          right: -20px;
          top: 7px;
          border-top: 10px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 10px solid;
          border-color: #FFCECB transparent transparent transparent;
          vertical-align: middle;
          // margin: 6px 10px 0;
        }
      }
      &-childLists{
        // display: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 10px;
        
        &-item{
          padding: 10px 0;
        }
      }
    }
    &-btn{
      margin-top: 71px;
      // font-size: 20px;
      font-size: 1.25rem;
    }
    &-phone{
      font-weight: 400;
      // font-size: 20px;
      font-size: 1.25rem;
      line-height: 23px;
      margin-top: 20px;
      img{
        display: inline-block;
        vertical-align: middle;
        margin-top: -5px;
      }
    }
    &-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      &-in:not(:last-child){
        margin-right: 25px;
      }
    }
  }
}
</style>
