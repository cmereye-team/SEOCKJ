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
let navFormBool = ref(false)
const handleNavFormNav = () =>{
  navFormBool.value = true
  navLiBoxBool.value = false
}
const handleClose = ()=>{
  navFormBool.value = false
}
const toContactUs = () =>{
  window.location.href = '/contactUs#contactUsFormNav'
}

let mbQDCodeBool = ref(false)

</script>

<template>
  <div class="navbar-content" :style="{'z-index': navFormBool ? 100 : 50}">
    <div class="navbar-content-in" id="navPcTel">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="tel">6912 2011</div>
        </div>
      </div>
      <img src="@/assets/images/navIcon_1.png" alt="" />
    </div>
    <div class="navbar-content-in" id="navPcWhatsapp">
      <img src="@/assets/images/navIcon_2.png" alt="" />
    </div>
    <div class="navbar-content-in" id="navPcWeChat">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="weChat"><img src="https://static.cmereye.com/imgs/2023/06/c5ecb382a7e0eeb2.jpg" alt="二维码"></div>
        </div>
      </div>
      <img src="@/assets/images/navIcon_3.png" alt="" />
    </div>
    <div class="navbar-content-in" id="navPcFaceBook">
      <nuxt-link to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">
        <img src="@/assets/images/navIcon_6.png" alt="" />
      </nuxt-link>
    </div>
    <div class="navbar-content-in" id="navPcContactForm" @click="toContactUs">
      <img src="@/assets/images/navIcon_5.png" alt="" />
    </div>
    <div class="navbar-content-in" @click="toPageTop">
      <img src="@/assets/images/navIcon_4.png" alt="" />
    </div>
    <div class="navbar-content-mb" v-if="false">
      <div id="navMbTel">
        <img src="@/assets/images/icon_8.png">6912 2011
      </div>
      <div>
        <div class="navBtn" @click="navLiBoxBool = !navLiBoxBool">立即預約</div>
        <div class="navLiBox" :style="{bottom: (navLiBoxBool ? '100%' : '-350%')}">
          <!-- <div id="navMbContactForm" @click="handleNavFormNav">
            填寫表格
          </div> -->
          <!-- <div id="navMbFacebook">
            <nuxt-link to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">
            Facebook
            </nuxt-link >
          </div> -->
          <!-- <div id="navMbWeChat">
            WeChat
          </div> -->
          <!-- <div id="navMbWhatsapp">
            Whatsapp
          </div> -->
        </div>
      </div>
    </div>
    <div class="navbar-content-mb02">
      <div id="navMbWeChat" @click="mbQDCodeBool = true">WeChat</div>
      <div id="navMbWhatsapp">Whatsapp</div>
    </div>
    <div class="navbar-content-mb">
      <div id="navMbFacebook"><nuxt-link to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">Facebook預約</nuxt-link></div>
      <div @click="handleNavFormNav">填寫表格</div>
    </div>
    <div class="navbar-content-mb" v-if="false">
      <div><nuxt-link to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">Facebook預約</nuxt-link></div>
      <div>填寫表格</div>
    </div>
    <div class="navForm" :style="{bottom: (navFormBool ? '0' : '-100%')}">
      <ContactForm />
      <div class="navForm-icon" @click="navFormBool = false">
        <img src="@/assets/images/icon_7.png" alt="">
      </div>
    </div>
    <div class="navForm" :style="{bottom: (mbQDCodeBool ? '0' : '-100%')}">
      <div class="qdCode">
        <img src="https://static.cmereye.com/imgs/2023/06/c5ecb382a7e0eeb2.jpg" alt="二维码" />
      </div>
      <div class="navForm-icon" @click="mbQDCodeBool = false">
        <img src="@/assets/images/icon_7.png" alt="">
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
    width: 66px;
    height: 66px;
    margin-bottom: 13px;
    cursor: pointer;
    background: #FFDDDA;
    border-radius: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    position: relative;
    .navbarBox{
      position: absolute;
      top: 0;
      right: 66px;
      padding-right: 10px;
      display: none;
      &::after{
        content: '';
        position: absolute;
        right: -20px;
        top: 23px;
        width: 0;
        height: 0;
        border-top: 10px solid;
        border-left: 20px solid;
        border-bottom: 10px solid;
        border-right: 20px solid;
        border-color: transparent transparent transparent #FFA09E;
      }
      &-in{
        transition: all .5s;
        background: #FFA09E;
        height: 100%;
        padding: 20px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        color: #fff;
        .tel{
          white-space: nowrap;
          font-size: 20px;
          font-weight: 600;
        }
        .weChat{
          width: 200px;
          // height: 200px;
          background: #FFDDDA;
          img{
            width: 100%;
            // height: 100%;
          }
        }
      }
    }
    img {
      width: 40px;
    }
    &:nth-of-type(4){
      img{
        width: 100%;
      }
        
      }
    &:hover{
      background: #FFA09E;
      .navbarBox{
        display: flex;
      }
    }
  }
  &-mb{
    display: none;
  }
  &-mb02{
    display: none;
  }
  .navForm{
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: -100%;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: center;
    z-index: 9999;
    transition: all .5s;
    display: none;
    &-icon{
      position: absolute;
      right: 30px;
      top: 100px;
      cursor: pointer;
    }
    .qdCode{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
@media (min-width: 1920px){
  .navbar-content {
    // right: calc((100% - 1920px) / 2 + 90px);
  }
}
@media screen and (max-width: 768px) {
  .navbar-content {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    // height: 62px;
    height: 124px;
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
          height: 248px;
          line-height: 62px;
          position: absolute;
          // bottom: -50%;
          left: 0;
          transition: all .3s;
          z-index: 19;
          &>div{
            background: #FFF1F0;
            // color: #FFDDDA;
            color: #FFA09E;
            text-shadow: none;
            &:hover{
              background: #FFDDDA;
              color: #FFF1F0;
            }
            &:first-child{
              border-radius: 10px 10px 0px 0px;
              box-shadow: 0px -1.5px 0px rgba(255, 204, 199, 0.25);
            }
            &:not(:last-child){
              border-bottom: 1px solid #fff;
            }
          }
        }
      }
    }
    &-mb02{
      display: flex;
      height: 62px;
      &>div{
        height: 100%;
        line-height: 62px;
        text-align: center;
        flex: 1;
        font-weight: 400;
        font-size: 20px;
        position: relative;
        background: #FFF1F0;
        color: #FFA09E;
        img{
          display: inline-block;
          margin-top: -5px;
        }
        &:first-child{
          border-right: 1px solid #fff;
        }
      }
    }
    .navForm{
      display: flex;
    }
  }
}
</style>
