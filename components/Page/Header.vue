<script lang="ts" setup>
// export default defineComponent({
//   layout: 'dashboard',
// })
const menuLists = [
  {
    name: '主頁',
    link: '',
    child: [],
  },
  {
    name: '最新消息',
    link: '',
    child: [],
  },
  {
    name: '品牌理念',
    link: '',
    child: [],
  },
  {
    name: '牙科服務',
    link: '',
    child: [
      {
        name: '牙科服務',
        link: '',
      },
      {
        name: '牙科服務',
        link: '',
      },
      {
        name: '牙科服務',
        link: '',
      }
    ],
  },
  {
    name: '醫生團隊',
    link: '',
    child: [
      {
        name: '醫生團隊',
        link: '',
      },
    ],
  },
  {
    name: '個案分享',
    link: '',
    child: [],
  },
  {
    name: '聯絡我們',
    link: '',
    child: [
      {
        name: '聯絡我們',
        link: '',
      },
      {
        name: '聯絡我們',
        link: '',
      }
    ],
  },
]
 

let menuBoxBool = ref(false)
</script>

<template>
  <!-- <div class="lg:px-8 px-4 mb-6">
    <slot />
  </div> -->
  <header>
    <div class="header-content">
      <div class="header-content-bgImg">
        <img
          class="pcShow"
          src="https://static.cmereye.com/imgs/2023/04/958c5d647ba584df.png"
          alt=""
        />
      </div>
      <div class="header-content-span">
        <span>你的口腔健康</span>
        <span>我們專注</span>
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
            :class="menuItem.child.length ? 'triangleIcon' : ''"
          >
            {{ menuItem.name }}
            <div class="menuChild" v-if="menuItem.child.length">
              <div class="menuChild-item" v-for="(menuChildItem,menuChildIndex) in menuItem.child" :key="menuChildIndex">{{menuChildItem.name}}</div>
            </div>
          </div>
        </div>
        <div class="icon" @click="menuBoxBool = !menuBoxBool">
          <img v-if="!menuBoxBool" src="@/assets/images/icon_6.png" >
          <img v-else src="@/assets/images/icon_7.png" >
        </div>
      </div>
      <div class="header-content-mb">
        <img
          src="@/assets/images/header_bg.jpg"
          alt=""
        />
        <div class="text">
          全程式預約一體化診療服務，讓每一位顧客享受
          <span>健康微笑之旅。</span>
        </div>
      </div>
      <div class="menuBox" :style="{top: (menuBoxBool ? '0' : '-100vh')}">
        <div class="menuLists">
          <div :class="item.child.length ? 'childIcon' : ''" v-for="(item, index) in menuLists" :key="index">
            {{item.name}}
          </div>
        </div>
        <div class="menuBox-btn">立即預約</div>
        <div class="menuBox-phone">
          <img src="@/assets/images/icon_11.png" >2828-2828
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
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    img {
      width: 100%;
    }
  }
  &-span {
    width: 126px;
    // width: 8vw;
    position: absolute;
    font-weight: 500;
    font-size: 36px;
    line-height: 140%;
    color: #000;
    right: 25vw;
    bottom: 13vw;
    span {
      padding: 10px 0;
      height: auto;
      background: #fff;
      font-style: normal;
      width: 40%;
      text-align: center;
      &:first-child {
        float: left;
        margin-top: 55px;
      }
      &:last-child {
        float: right;
      }
    }
  }
  &-in {
    width: 100%;
    max-width: 1490px;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin: 32vw auto 0;
    padding: 20px 0 20px 20px;
    align-items: flex-end;
    z-index: 40;
    position: relative;
    .logo {
      width: 290px;
    }
    .menu {
      flex: 1;
      color: #4d4d4d;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .menuItem {
        padding: 0 20px;
        cursor: pointer;
        font-size: 22px;
        font-weight: 600;
        position: relative;
        &:hover {
          color: #ffa09e;
          text-decoration-line: underline;
        }
        &:hover .menuChild{
          display: flex;
        }
        &.triangleIcon:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #4d4d4d transparent transparent transparent;
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
        }
        .menuChild{
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          z-index: 2;
          display: none;
          flex-direction: column;
          transition: all .3s;
          padding-top: 20px;
          &-item{
            width: 100%;
            background: #FFF1F0;
            text-align: center;
            padding: 10px 20px 5px;
            font-size: 1.25rem;
            color: #FFDDDA;
            transition: all .3s;
            &:not(:last-child){
              border-bottom: 1px solid #fff;
            }
            &:hover{
              color: #fff;
              background: #FFCECB;
              text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
            }
          }
        }
      }
    }
    .icon{
      display: none;
    }
  }
  &-mb{
    display: none;
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

@media (min-width: 768px) and (max-width: 1200px) {
  .header-content {
    &-in {
      // padding-left: 20px;
      .logo {
        width: 22%;
      }
      .menu {
        & > div {
          font-size: 100%;
          padding: 0 2%;
          &.triangleIcon:after {
            border: 0.5rem solid;
            bottom: -0.9rem;
            border-color: #4d4d4d transparent transparent transparent;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .header-content {
    // position: fixed;
    // top: 0;
    &-bgImg {
      width: 100%;
      display: none;
      img{
        width: 100%;
      }
    }
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      margin: 0;
      .logo{
        width: 150px;
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
    &-mb{
      background: #fff;
      display: block;
      img{
        width: 100%;
      }
      .text{
        margin-top: 0;
        font-style: normal;
        font-weight: 500;
        // font-size: 20px;
        font-size: 1.25rem;
        line-height: 160%;
        color: #4D4D4D;
        width: 60vw;
        padding-left: 30px;
        margin-top: 30px;
        span{
          // font-size: 20px;
          font-size: 1.25rem;
          color: #FFCECB;
        }
      }
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 30;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    color: #FFCECB;
    transition: all .3s;
    pointer-events: none;
    .menuLists{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &>div{
        text-align: left;
        margin-top: 20px;
        font-size: 1.125rem;
        &.childIcon{
          padding-left: 37px;
        }
        &.childIcon:after{
          content: '';
          width: 0;
          left: 0;
          display: inline-block;
          border-top: 10px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 10px solid;
          border-color: #FFCECB transparent transparent transparent;
          vertical-align: middle;
          margin: 6px 10px 0;
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
