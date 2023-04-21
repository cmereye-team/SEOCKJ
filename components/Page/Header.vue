<script lang="ts" setup>
// export default defineComponent({
//   layout: 'dashboard',
// })
const menuLists = [
  {
    name: '主頁',
    link: '',
    child: []
  },{
    name: '最新消息',
    link: '',
    child: []
  },{
    name: '品牌理念',
    link: '',
    child: [
      
    ]
  },{
    name: '牙科服務',
    link: '',
    child: [
      {
        name: '品牌理念',
        link: '',
      }
    ]
  },{
    name: '醫生團隊',
    link: '',
    child: [
      {
        name: '品牌理念',
        link: '',
      }
    ]
  },{
    name: '個案分享',
    link: '',
    child: []
  },{
    name: '聯絡我們',
    link: '',
    child: [
      {
        name: '品牌理念',
        link: '',
      }
    ]
  }
]
</script>

<template>
  <!-- <div class="lg:px-8 px-4 mb-6">
    <slot />
  </div> -->
  <header>
    <div class="header-content">
      <div class="header-content-bgImg">
        <img src="https://static.cmereye.com/imgs/2023/04/958c5d647ba584df.png" alt="">
      </div>
      <div class="header-content-span">
        <span>你的口腔健康</span>
        <span>我們專注</span>
      </div>
      <div class="pageCon header-content-in">
        <div class="logo">
          <nuxt-link :to="'/'"><img src="@/assets/images/logo_1.png" alt=""></nuxt-link>
        </div>
        <div class="menu">
          <div :class="menuItem.child.length ? 'triangleIcon' : ''" v-for="(menuItem,menuIndex) in menuLists" :key="menuIndex">{{menuItem.name}}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-content{
  width: 100%;
  position: relative;
  background: #fff;
  &-bgImg{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    img{
      width: 100%;
    }
  }
  &-span{
    width: 126px;
    // width: 8vw;
    position: absolute;
    font-weight: 500;
    font-size: 36px;
    line-height: 140%;
    color: #000;
    right: 25vw;
    bottom: 13vw;
    span{
      padding: 10px 0;
      height: auto;
      background: #fff;
      font-style: normal;
      width: 40%;
      text-align: center;
      &:first-child{
        float: left;
        margin-top: 55px;
      }
      &:last-child{
        float: right;
      }
    }
  }
  &-in{
    width: 100vw;
    max-width: 1490px;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin: 32vw auto 0;
    padding: 50px 0 20px 20px;
    align-items: flex-end;
    .logo{
      width: 290px;
    }
    .menu{
      flex: 1;
      color: #4D4D4D;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      &>div{
        padding: 0 20px;
        cursor: pointer;
        font-size: 22px;
        font-weight: 600;
        position: relative;
        &:hover{
          color: #FFA09E;
          text-decoration-line: underline;
        }
        // &:last-child{
        //   padding: 0 0 0 20px;
        // }
        &.triangleIcon:after{
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #4D4D4D transparent transparent transparent;
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .header-content{
    &-in{
      // padding-left: 20px;
      .logo{
        width: 22%;
      }
      .menu{
        &>div{
          font-size: 100%;
          padding: 0 2%;
          &.triangleIcon:after{
            border: .5rem solid;
            bottom: -.9rem;
            border-color: #4D4D4D transparent transparent transparent;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px){
  .header-content{
    &-in{
      display: none;
    }
    &-span{
      width: 70px;
      font-weight: 400;
      font-size: 20px;
    }
  }
}
</style>