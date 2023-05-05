<script lang="ts" setup>
const navbarLists = []
let navLiBoxBool = ref(false)
const toPageTop = () =>{
  // window.scrollTo(0,0);
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  // 实现滚动效果 
  const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
      if (top <= 0) {
          clearInterval(timeTop);
      }
  }, 10);
}


</script>

<template>
  <div class="navbar-content">
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_1.png" alt="" />
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_2.png" alt="" />
    </div>
    <div class="navbar-content-in">
      <img src="@/assets/images/navIcon_3.png" alt="" />
    </div>
    <div class="navbar-content-in" @click="toPageTop">
      <img src="@/assets/images/navIcon_4.png" alt="" />
    </div>
    <div class="navbar-content-mb">
      <div>
        <img src="@/assets/images/icon_8.png">2828-2828
      </div>
      <div>
        <div class="navBtn" @click="navLiBoxBool = !navLiBoxBool">立即預約</div>
        <div class="navLiBox" :style="{bottom: (navLiBoxBool ? '200%' : '-100%')}">
          <div>
            WeChat
          </div>
          <div>
            Whatsapp
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar-content {
  width: 66px;
  position: fixed;
  right: 3vw;
  top: 30vh;
  z-index: 50;
  &-in {
    width: 100%;
    height: 66px;
    margin-bottom: 20px;
    cursor: pointer;
    background: #FFDDDA;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      // height: 100%;
    }
    &:hover{
      background: #FFA09E;
    }
  }
  &-mb{
    display: none;
  }
}
@media (min-width: 1920px){
  .navbar-content {
    right: calc((100% - 1920px) / 2 + 90px);
  }
}
@media screen and (max-width: 768px) {
  .navbar-content {
    // right: 30px;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 62px;
    background: #FFDDDA;
    box-shadow: 0px -1.5px 0px rgba(255, 204, 199, 0.25);
    z-index: 20;
    &-in{
      position: absolute;
      right: 30px;
      top: -64px;
      width: 34px;
      height: 34px;
      background: #FFDDDA;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 24px;
      }
    }
    &-in::not(:last-child){
      display: none;
    }
    &-mb{
      display: flex;
      height: 100%;
      &>div{
        height: 100%;
        line-height: 62px;
        text-align: center;
        flex: 1;
        font-weight: 400;
        // font-size: 20px;
        font-size: 1.25rem;
        color: #FFFFFF;
        text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
        position: relative;
        img{
          display: inline-block;
          margin-top: -5px;
        }
        &:first-child{
          border-right: 1px solid #fff;
        }
        .navBtn{
          width: 100%;
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 90;
          background: #FFDDDA;
        }
        .navLiBox{
          width: 100%;
          height: 62px;
          line-height: 62px;
          position: absolute;
          bottom: -100%;
          left: 0;
          transition: all .3s;
          z-index: 19;
          &>div{
            background: #FFF1F0;
            // color: #FFDDDA;
            color: #FFA09E;
            text-shadow: none;
            &:first-child{
              border-radius: 10px 10px 0px 0px;
              box-shadow: 0px -1.5px 0px rgba(255, 204, 199, 0.25);
              border-bottom: 1px solid #fff;
            }
          }
        }
      }
    }
  }
}
</style>
