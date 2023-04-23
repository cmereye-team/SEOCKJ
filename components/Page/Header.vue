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
        name: '品牌理念',
        link: '',
      },
    ],
  },
  {
    name: '醫生團隊',
    link: '',
    child: [
      {
        name: '品牌理念',
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
        name: '品牌理念',
        link: '',
      },
    ],
  },
]
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
          <div
            v-for="(menuItem, menuIndex) in menuLists"
            :key="menuIndex"
            :class="menuItem.child.length ? 'triangleIcon' : ''"
          >
            {{ menuItem.name }}
          </div>
        </div>
        <div class="icon">
          <img src="@/assets/images/icon_6.png" >
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
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  // background: #fff;
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
    z-index: 9;
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
      & > div {
        padding: 0 20px;
        cursor: pointer;
        font-size: 22px;
        font-weight: 600;
        position: relative;
        &:hover {
          color: #ffa09e;
          text-decoration-line: underline;
        }
        // &:last-child{
        //   padding: 0 0 0 20px;
        // }
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
      }
    }
    .icon{
      display: none;
    }
  }
  &-mb{
    display: none;
  }
}
.header-content::after {
  content: '';
  background-image: url(@/assets/images/back_wave01.png);
  background-repeat: repeat-x;
  background-position: center 20px;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 0;
  left: 0px;
  bottom: 0;
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
.header-content::before {
  content: '';
  background-image: url(@/assets/images/back_wave03.png);
  background-repeat: repeat-x;
  background-position: center bottom;
  // background-size: auto 80px;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 0;
  left: 0px;
  bottom: 0;
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
    &-bgImg {
      width: 100%;
      display: none;
      img{
        width: 100%;
      }
    }
    &-in {
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
        width: 210px;
        padding-left: 30px;
        margin-top: 30px;
        span{
          // font-size: 20px;
          font-size: 1.25rem;
          color: #FFCECB;
        }
      }
    }
  }
  .header-content::after{
    transform: rotate(180deg);
    top: -30px;
  }
  .header-content::before{
    transform: rotate(180deg);
    top: -30px;
  }
}
</style>
