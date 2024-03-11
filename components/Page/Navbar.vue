<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { whatsAppNum,smallPhoneNum } from '~/assets/js/common'

defineProps({
  langType: {
    default: '',
    type: String
  }
})
const appState = useAppState()
const navbarLists = []
let navLiBoxBool = ref(false)
const toPageTop = () =>{
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
      if (top <= 0) {
          clearInterval(timeTop);
      }
  }, 10);
}
let navFormBool = ref(false)
const handleNavFormNav = () =>{
  appState.setIsShowForm(true)
  navLiBoxBool.value = false
}
const navFormClose = () =>{
  appState.setIsShowForm(false)
}

const toContactUs = () =>{
  window.location.href = '/contactUs#contactUsFormNav'
}

let mbQDCodeBool = ref(false)

const centerDialogVisible = ref(false)
const handlecopywechatcode = () =>{
  if (navigator.clipboard) {  
      navigator.clipboard.writeText('ckjhongkong').then(function() {  
        // ElMessage({
        //   showClose: true,
        //   message: '已複製到剪切板',
        //   type: 'success',
        // }) 
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


let _bool = ref(false)

</script>

<template>
  <div class="navbar-content" :style="{'z-index': appState.isShowForm ? 100 : 50}">
    <div class="navbar-content-in" id="navPcTel" title="致電">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="tel">（852）{{smallPhoneNum}}</div>
        </div>
      </div>
    </div>
    <nuxt-link class="navbar-content-in" id="navPcWhatsapp" :to="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`" title="WhatsApp" target="_blank">
    </nuxt-link>
    <!-- <div class="navbar-content-in" id="navPcWeChat" title="WeChat">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="weChat"><img src="https://static.cmereye.com/imgs/2023/09/a43a869a1fc07eea.jpg" alt="二维码"></div>
        </div>
      </div>
    </div> -->
    <!-- <nuxt-link class="navbar-content-in" id="navPcFaceBook" to="https://www.facebook.com/ckjdental.hk/" title="FaceBook" target="_blank">
    </nuxt-link> -->
    <div class="navbar-content-in" id="navPcContactForm" title="預約" @click="toContactUs">
    </div>
    <div class="navbar-content-in" @click="toPageTop">
      <img src="@/assets/images/navIcon_4.png" alt="toTop" />
    </div>
    <div class="navbar-content-mb">
      <nuxt-link  id="navMbTel" :to="`tel: +852 ${smallPhoneNum}`" class="mbcc-boxInAA mbcc-boxInAA-1"></nuxt-link>
      <nuxt-link id="navMbWhatsapp" :to="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`" target="_blank" class="mbcc-boxInAA mbcc-boxInAA-2"></nuxt-link>
      <div id="navMbContactFormBtn" class="mbcc-boxInAA mbcc-boxInAA-3" @click="handleNavFormNav">
        <img src="https://static.cmereye.com/imgs/2023/09/a8f9c3f82bbda125.png" alt="馬上預約">
        <span :class="{english:langType === 'english'}">馬上預約</span>
      </div>
      <div id="navMbWeChat" class="mbcc-boxInAA mbcc-boxInAA-4" @click="handlecopywechatcode"></div>
      <!-- <div id="navMbWeChat" class="mbcc-boxInAA mbcc-boxInAA-4" @click="mbQDCodeBool = true"></div> -->
      <nuxt-link id="navMbFacebook" to="https://www.facebook.com/ckjdental.hk/"  target="_blank" class="mbcc-boxInAA mbcc-boxInAA-5"></nuxt-link>
    </div>
    <div class="navForm" :style="{bottom: (appState.isShowForm ? '0' : '-150%')}">
      <ContactForm />
      <div class="navForm-icon" @click="navFormClose">
        <img src="@/assets/images/icon_7.svg" alt="close">
      </div>
    </div>
    <div class="navForm" :style="{bottom: (mbQDCodeBool ? '0' : '-150%')}">
      <div class="qdCode">
        <img src="https://static.cmereye.com/imgs/2023/09/a43a869a1fc07eea.jpg" alt="二维码" />
      </div>
      <div class="navForm-icon" @click="mbQDCodeBool = false">
        <img src="@/assets/images/icon_7.svg" alt="close">
      </div>
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
  </div>
</template>
<style lang="scss" scoped>
@keyframes animLeftIn {
  from{
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
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
    background: var(--indexColor3);
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
      opacity: 0;
      transform: translateX(-20px);
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
        border-color: transparent transparent transparent var(--indexColor1);
      }
      &-in{
        transition: all .5s;
        background: var(--indexColor1);
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
          background: var(--indexColor3);
          img{
            width: 100%;
          }
        }
      }
    }
    img {
      width: 40px;
    }
    &:hover{
      background: var(--indexColor1);
      .navbarBox{
        display: flex;
        animation: animLeftIn 1s forwards;
      }
    }
  }
  #navPcTel{
    background-image:url(@/assets/images/navIcon_1.png);
    background-repeat: no-repeat;
    background-position: 43% 57%;
  }
  #navPcWeChat{
    background-image:url(@/assets/images/navIcon_3.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  #navPcWhatsapp{
    background-image:url(@/assets/images/navIcon_2.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  #navPcFaceBook{
    background-image:url(@/assets/images/navIcon_6.png);
  }
  #navPcContactForm{
    background-image:url(@/assets/images/navIcon_5.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  &-mb{
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
@media (min-width: 768px) and (max-width: 1440px) {
  .navbar-content{
    width: 50px;
    &-in{
      width: 50px;
      height: 50px;
      .navbarBox{
        right: 50px;
        &::after{
          top: 15px;
        }
        &-in{
          padding: 10px;
        }
      }
      img{
        width: 30px;
      }
    }
    #navPcTel{
      background-size: 60% auto;
    }
    #navPcWeChat{
      background-size: 60% auto;
    }
    #navPcWhatsapp{
      background-size: 60% auto;
    }
    #navPcFaceBook{
      
      background-size: 100%;
    }
    #navPcContactForm{
      background-size: 60% auto;
    }
  }
}
@media screen and (max-width: 768px) {
  .navbar-content {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--indexColor3);
    box-shadow: 0px -1.5px 0px rgba(255, 204, 199, 0.25);
    z-index: 20;
    &-in{
      position: absolute;
      right: 30px;
      top: -164px;
      width: 34px;
      height: 34px;
      background: var(--indexColor3);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;
      img{
        width: 24px;
      }
      &:nth-of-type(4){
        display: flex;
      }
    }
    &-mb{
      display: block;
      width: 100%;
      height: auto;
      background: #FFF;
      box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.25);
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      padding: 0 10px;
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
      .mbcc-boxInAA{
        flex: 1;
        height: 60px;
        &-1{
          background: url(https://static.cmereye.com/imgs/2023/07/ac801f63f6e35840.png) no-repeat;
          background-position: center center;
          animation: fromRight 1s none;
        }
        &-2{
          background: url(https://static.cmereye.com/imgs/2023/07/c631714e6eab7b74.png) no-repeat;
          background-position: center center;
          animation: fromRight 1s none;
        }
        &-3{
          width: 103px;
          height: 103px;
          min-width: 103px;
          max-width: 103px;
          background: #fff;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: -30px 10px -10px;
          animation: mbIn3Anim 1s 1s none;
          opacity: 0;
          animation-fill-mode: forwards;
          img{
            width: 28px;
            margin-bottom: 5px;
          }
          span{
            color: #6B6B6B;
            text-align: center;
            font-size: 12.376px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.6;
            letter-spacing: 3.094px;
            &.english{
              line-height: 1;
            }
          }
        }
        &-4{
          background: url(https://static.cmereye.com/imgs/2023/07/d1ec7e5ab5a240b6.png) no-repeat;
          background-position: center center;
          animation: fromLeft 1s none;
        }
        &-5{
          background: url(https://static.cmereye.com/imgs/2023/07/d067e48cd2a6f7a4.png) no-repeat;
          background-position: center center;
          animation: fromLeft 1s none;
        }
      }
    }
    .navForm{
      display: flex;
    }
  }
  @keyframes mbIn3Anim {
    0%{
      opacity: 0;
      transform: translateY(100%) scale(1);
    }
    30%{
      transform: translateY(-30px) scale(1.3);
      opacity: 1;
    }
    60%{
      transform: translateY(0px) scale(1);
      opacity: 1;
    }
    80%{
      transform: translateY(-5px) scale(1.07);
      opacity: 1;
    }
    100%{
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  @keyframes fromRight {
    from{
      opacity: 0;
      transform: translateX(20px);
    }
    to{
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fromLeft {
    from{
      opacity: 0;
      transform: translateX(-20px);
    }
    to{
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
