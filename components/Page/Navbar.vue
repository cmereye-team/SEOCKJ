<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { whatsAppNum,smallPhoneNum } from '~/assets/js/common'

defineProps({
  langType: {
    default: '',
    type: String
  },
  showDialogBox: {
    default: false,
    type: Boolean
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
    <nuxt-link class="navbar-content-whatApp" id="navPcWhatsapp" :to="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`" title="WhatsApp" target="_blank">
      <div class="iconDialogBox" v-if="showDialogBox">
        <span>專業客服為你匹配適合你的醫生！</span>
        <img class="iconDialogBox-icon" data-ord="1" src="@/assets/images/icon_42.svg" alt="">
        <img class="iconDialogBox-icon" data-ord="2" src="@/assets/images/icon_43.svg" alt="">
        <img class="iconDialogBox-icon" data-ord="3" src="@/assets/images/icon_44.svg" alt="">
      </div>
      <div class="navbar-content-whatApp-icon">
        <img class="navbar-content-whatApp-icon-in" src="https://static.cmereye.com/imgs/2024/03/22dd0fd2c5f7164e.png" alt="">
        <img class="navbar-content-whatApp-icon-right" src="https://static.cmereye.com/imgs/2024/03/3fee6b4b5c9a323a.png" alt="">
      </div>
      <div class="navbar-content-whatApp-btn">
        <div class="navbar-content-whatApp-btn-text">立即</div>
        <div class="navbar-content-whatApp-btn-img">
          <div class="navbar-content-whatApp-btn-img-in">
            <img src="@/assets/images/navIcon_2.png" alt="">
          </div>
        </div>
        <div class="navbar-content-whatApp-btn-text">預約</div>
      </div>
    </nuxt-link>
    <div class="navbar-content-in" id="navPcTel" title="致電">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="tel">（852）{{smallPhoneNum}}</div>
        </div>
      </div>
    </div>
    <div class="navbar-content-in" id="navPcContactForm" title="預約" @click="toContactUs">
    </div>
    <div class="navbar-content-in pageTop" @click="toPageTop">
      <img srcset="@/assets/images/icon_50.svg 768w, @/assets/images/navIcon_4.png" src="@/assets/images/navIcon_4.png" alt="toTop" />
    </div>
    <div class="navbar-content-mb">
      <nuxt-link class="navbar-content-mb-in" id="navMbWhatsapp" :to="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`">
        <img src="@/assets/images/icon_28.svg" alt="">
        <span>WhatsApp</span>
      </nuxt-link>
      <nuxt-link class="navbar-content-mb-in" id="navMbTel" :to="`tel: +852 ${smallPhoneNum}`">
        <div class="navbar-content-mb-in-top">
          <img src="@/assets/images/icon_29.svg" alt="">
          <span>香港熱線</span>
        </div>
        <span class="navbar-content-mb-in-center">(852) {{smallPhoneNum}}</span>
      </nuxt-link>
      <div class="navbar-content-mb-in navMbContactFormBtn" id="navMbContactFormBtn" @click="handleNavFormNav">
        <img class="navMbContactFormBtn" src="@/assets/images/icon_30.svg" alt="">
        <span class="navMbContactFormBtn">預約表格</span>
      </div>
    </div>
    <div class="navForm" :style="{bottom: (appState.isShowForm ? '0' : '-150%')}">
      <ContactForm-new />
      <div class="navForm-icon" @click="navFormClose">
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
@keyframes whatAppIconAnim {
  0%{
    transform: rotate(0deg);
  }
  5%{
    transform: rotate(-10deg);
  }
  10%{
    transform: rotate(10deg);
  }
  15%{
    transform: rotate(-10deg);
  }
  20%{
    transform: rotate(10deg);
  }
  25%{
    transform: rotate(-10deg);
  }
  30%{
    transform: rotate(10deg);
  }
  35%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes btntestafterAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #86F99B;
  }
  19%{
    border: 8px solid rgba(134, 249, 155, .5);
    width: calc(100% + 32px);
    height: calc(100% + 32px);
  }
  24%{
    width: calc(100% + 32px);
    height: calc(100% + 32px);
  }
  29%{
    border: 0 solid rgba(134, 249, 155, 0);
    width: calc(100% + 32px);
    height: calc(100% + 32px);
  }
  100%{
    border: 0 solid rgba(134, 249, 155, 0);
    width: calc(100% + 32px);
    height: calc(100% + 32px);
  }
}
@keyframes btntestafterAnimaHover {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #86F99B;
  }
  19%{
    border: 10px solid rgba(134, 249, 155, .5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(134, 249, 155, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(134, 249, 155, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes animLeftIn {
  from{
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes animTopIn {
  to{
    transform: translateX(-50%);
    opacity: 1;
  }
}
@keyframes iconTopIn {
  20%{
    transform: translateY(7px);
    opacity: 1;
  }
  40%{
    transform: translateY(-3px);
  }
  60%{
    transform: translateY(2px);
  }
  80%{
    transform: translateY(-1px);
  }
  100%{
    transform: none;
    opacity: 1;
  }
}
@keyframes iconBottomIn {
  20%{
    transform: translateY(-7px);
    opacity: 1;
  }
  40%{
    transform: translateY(3px);
  }
  60%{
    transform: translateY(-2px);
  }
  80%{
    transform: translateY(1px);
  }
  100%{
    transform: none;
    opacity: 1;
  }
}
.navbar-content {
  width: 66px;
  position: fixed;
  right: 4.5vw;
  top: 30vh;
  z-index: 50;
  &-in {
    width: 66px;
    height: 66px;
    margin-bottom: 13px;
    cursor: pointer;
    background: var(--indexColor1);
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
      background: var(--indexColor3);
      .navbarBox{
        display: flex;
        animation: animLeftIn 1s forwards;
      }
    }
  }
  &-whatApp{
    margin-left: calc(132px - 200px);
    width: 200px;
    position: relative;
    margin-bottom: 30px;
    display: block;
    transition: all .3s;
    &-icon{
      position: relative;
      width: 95%;
      &-in{
        width: 100%;
      }
      &-right{
        position: absolute;
        width: calc(51 / 197 * 100%);
        right: 10px;
        bottom: 10px;
        animation: whatAppIconAnim 5s infinite;
        transform-origin: bottom center;
      }
    }
    &-btn{
      display: flex;
      height: 44px;
      margin-top: -25px;
      background: var(--indexColor1);
      border-radius: 50px;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      &-text{
        color: #fff;
        line-height: 1;
        font-size: 23px;
        font-weight: 600;
      }
      &-img{
        width: 66px;
        height: 66px;
        margin: 0 5px;
        position: relative;
        transition: all .3s;
        &-in{
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1;
          background: #32d851;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
        }
        img{
          width: 60%;
          width: 60%;
        }
        &::after{
          content: '';
          position: absolute;
          display: inline-block;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          // border: 10px solid #86F99B;
          z-index: 0;
          border-radius: 70px;
          animation: btntestafterAnima 5.6s infinite;
          transition: all .5s;
        }
      }
    }
    &:hover{
      transform: scale(1.08) translateY(-10px);
      .navbar-content-whatApp-btn{
        &-img{
        
          &::after{
            animation: btntestafterAnimaHover 4s infinite;
          }
        }
      }
    }
    .iconDialogBox{
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      width: 220px;
      font-size: 22px;
      text-align: center;
      opacity: 0;
      transform: translate(-50%,20px);
      animation: animTopIn 1s forwards;
      padding-bottom: 20px;
      &>span{
        border-radius: 12px;
        background: var(--indexColor1);
        padding: 20px;
        display: inline-block;
      }
      &-icon{
        position: absolute;
        opacity: 0;
        &[data-ord="1"]{
          left: 60%;
          top: -30px;
          transform: translateY(-40px);
          animation: iconTopIn 2s .5s forwards;
        }
        &[data-ord="2"]{
          bottom: 15px;
          left: -15px;
          transform: translateY(40px);
          animation: iconBottomIn 2s .5s forwards;
        }
        &[data-ord="3"]{
          bottom: 45px;
          right: 10px;
          transform: translateY(40px);
          animation: iconBottomIn 2s .5s forwards;
        }
      }
      &::after{
        content: '';
        position: absolute;
        bottom: 7px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-top: 15px solid;
        border-left: 10px solid;
        border-bottom: 0 solid;
        border-right: 10px solid;
        border-color: var(--indexColor1) transparent transparent  transparent ;
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
  // #navPcWhatsapp{
  //   background-image:url(@/assets/images/navIcon_2.png);
  //   background-repeat: no-repeat;
  //   background-position: 50%;
  // }
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
@media (min-width: 768px) and (max-width: 1800px) {
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
    &-whatApp{
      margin-left: calc(100px - 150px);
      width: 150px;
      margin-bottom: 20px;
      &-btn{
        margin-top: -20px;
        height: 35px;
        &-text{
          font-size: 16px;
        }
        &-img{
          width: 50px;
          height: 50px;
        }
      }
      .iconDialogBox{
        font-size: 16px;
        width: 170px;
        &>span{
          padding: 15px;
          border-radius: 8px;
        }
        &-icon{
          &[data-ord="1"]{
            width: 40px;
            left: 55%;
            top: -20px;
            transform: translateY(-30px);
          }
          &[data-ord="2"]{
            width: 40px;
            left: -10px;
          }
          &[data-ord="3"]{
            bottom: 30px;
            right: 10px;
            transform: translateY(30px);
          }
        }
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
      &.pageTop{
        display: block;
        width: 40px;
        height: auto;
        background: none;
        right: 12px;
        top: auto;
        bottom: 80px;
        img{
          width: 100%;
          // background-clip: text;
          // mix-blend-mode: difference;
          // box-shadow:2px 2px 0 #fff;
          filter: drop-shadow(1px 1px 0 #fff)
          drop-shadow(-1px 1px 0 #fff)
          drop-shadow(1px -1px 0 #fff)
          drop-shadow(-1px -1px 0 #fff);
        }
      }
    }
    &-whatApp{
      display:none;
    }
    &-mb{
      width: 100%;
      height: auto;
      background: #FFF;
      filter: drop-shadow(0 -3px 5px rgba(252, 22, 130, .3));
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
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
      display: flex;
      &-in{
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        background: var(--indexColor1);
        color: #fff;
        // margin-top: 10px;
        font-size: 16px;
        line-height: 130%;
        &-top{
          display: flex;
          align-items: center;
          color: var(--indexColor1);
          font-size: 20px;
          line-height: 160%;
          &>span{
            margin-left: 8px;
          }
        }
        &-center{
          color: var(--textColor);
        }
        &:nth-of-type(2){
          flex: 1.5;
          background: #fff;
          margin-top: -10px;
          border-radius: 10px 10px 0 0;
          padding: 15px 0 10px;
        }
        &>span{
          margin-top: 5px;
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
