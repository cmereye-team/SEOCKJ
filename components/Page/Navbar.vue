<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
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
  // navFormBool.value = true
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

</script>

<template>
  <div class="navbar-content" :style="{'z-index': appState.isShowForm ? 100 : 50}">
    <div class="navbar-content-in" id="navPcTel">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="tel">6912 2011</div>
        </div>
      </div>
      <img src="@/assets/images/navIcon_1.png" alt="" />
    </div>
    <!-- <div class="navbar-content-in"> -->
      <nuxt-link class="navbar-content-in" id="navPcWhatsapp" :to="'https://api.whatsapp.com/send/?phone=85269122011'" target="_blank">
        <!-- <img src="@/assets/images/navIcon_2.png" alt="" /> -->
      </nuxt-link>
    <!-- </div> -->
    <div class="navbar-content-in" id="navPcWeChat">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="weChat"><img src="https://static.cmereye.com/imgs/2023/06/c5ecb382a7e0eeb2.jpg" alt="二维码"></div>
        </div>
      </div>
      <img src="@/assets/images/navIcon_3.png" alt="" />
    </div>
    <!-- <div class="navbar-content-in"> -->
      <nuxt-link class="navbar-content-in" id="navPcFaceBook" to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">
        <!-- <img src="@/assets/images/navIcon_6.png" alt="" /> -->
      </nuxt-link>
    <!-- </div> -->
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
      <div>
        <nuxt-link id="navMbWhatsapp" :to="'https://api.whatsapp.com/send/?phone=85269122011'" target="_blank">Whatsapp</nuxt-link>
      </div>
    </div>
    <div class="navbar-content-mb">
      <div><nuxt-link id="navMbFacebook" to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">Facebook預約</nuxt-link></div>
      <div @click="handleNavFormNav">填寫表格</div>
    </div>
    <div class="navbar-content-mb" v-if="false">
      <div><nuxt-link id="navMbFacebook" to="https://www.facebook.com/CKJ-%E5%B8%8C%E7%91%AA%E6%84%9B%E5%BA%B7%E5%81%A5-107356075712157" target="_blank">Facebook預約</nuxt-link></div>
      <div>填寫表格</div>
    </div>
    <div class="navForm" :style="{bottom: (appState.isShowForm ? '0' : '-150%')}">
      <ContactForm />
      <div class="navForm-icon" @click="navFormClose">
        <img src="@/assets/images/icon_7.png" alt="">
      </div>
    </div>
    <div class="navForm" :style="{bottom: (mbQDCodeBool ? '0' : '-150%')}">
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
      // img{
      //   width: 100%;
      // }
    }
    &:hover{
      background: #FFA09E;
      .navbarBox{
        display: flex;
      }
    }
  }
  #navPcWhatsapp{
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMOSURBVHgBvViBdZswED28QOkEpRPEG4Ru4A3KBnUniDuB3QlIJ3AyAc4EpBNAJrA3+JWKaPBxQhIW/e9dYuD0+UinO0kJ3QgAufq3VnanLGOPL8paZS/KXpMkael/QotTVio7Iwy1skJZRkvCCKwQB2V0wYowVXZEfDTKCh8NiYdIHX9HGsdfjxOZGDQ2hG6zNnY/wXFQ8fud5kKJ/GrpCR2bO93TgXyF6UUJdSifS+RhFqGf4DCxergtvbihSFBcmRHGUYUQNKyxvs5oASjeR0Hs1qdhKfRkRgvCInY91UAa8oIWBrr018A3BDBO5qXF75shrmP1NrpiwpFLjrw3G0mEETlETZGALqNM9yrGsbkXfKQhkr98ntBU4E65ExeQCUQbyPBLKX5iK8b9NwOszEM9w7KB/8myJLMlY/sMDccvdp3rPytzkbGHLxSGluLhiV3f/fuFrm47Y84SQ8BUzpsBIQxTW49eJAIVDvr+id1+VvdfKS5adv2hF/qJPTiTHXw5do8bFykC3tj15xUFwvTez8EtLfJIC6MX+kZh2NH18Oiq8kDxwEf40gvlMfmRJmBi9QtrpyfkXgoDdNWsgv8+iXO0PdFWSrIuoCu7fCfaDLMGukUyx97BO8SZv3CIkjxhEQvTg1vYtx6VhS+f9GMv07+9ZzLkxbYLjYWrZH5b7vA46eAWq4vBIUCobQnZML+MO+Q+X+whOIO8Yh9C3MRhHM+17SV8sxXUq4Jg/eIK72HVwLLNhhw+hY2cz/5oyzcXMI7NqxHllYnn09BV1CygKxYFu/1jqgE/X8ppYUA+6ChdjZqB85kWBsb7rz6O06lGPOk/WXxyuhGwnw5qkZmrMZ9IhSHU/0tcF4QSM7bJhu8BciVrvDgx3lT5nCZX5gPXDnEbTJ9QO88HkgEh6Db05/V95kiNZY52em27MyuyaUA+pYDQwzXCa7oNFULjHfYarcl0JdEfkhrfvuI0CMd5lkAyQ4+upuo4a5U9U7eBO7mGA11s5vR+7K1tmFpaY799OcnxwgLxN2hR8QcQhR8UBge3jgAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  #navPcFaceBook{
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAADZUlEQVR4nO1cvY7UMBD+7ARO+wwcBR3vsCAk3oWOp6E9CjrEE9DRLDQU1NchxFHR0cCuEhvNJrnksvlxkvHEe8knrXS3yXnGX+z58+SUtRYSsMZECohhTIo4TjpFJkkMrR9A4QCrDLRiVVIpdfqdNyKMIWkPofWeabwLKJVAqXTqUDJEkMJck/cko4kIPVWnW5j0IhvRMwlVGYVMjiEnj0BP5zhS5J+AOgqZhQ4TMH5rkA3QWsbSusKaCEr32hC+rWHMJjgSCETCyNUh5j5Dgl9jeeZYicixEpFjJSLHSkSOdiLIRUojScicvwZwA2Cff2zlQ7/vAFwd70uTeJCGHXNqdp/WRhzJjTOy3OHPMUkbhs8Ang+UpVQUnUy6eUVIkkBPWOt/FRIOXqW1BIKnS0sieyyxb1gFQ1cFC05XhBwJu7km3YS7RDCmtT3YAngmJMsJd4mQS6U/dVzzayNaUBIh5S7TdNOzJarXDlLElMZS678SAhFFbwbcXSfla+36Byat8jhCtshCwdIjx3tp8i8BfOFUoL14K+syq4QfGrZJ9btTjRnQXo+QI6GOJltRfPdWUpE5KlRuAo15DK1vfCjQvDUMFTxFQ2pX5r1sC7RuDWuDie7mhKYa+HKnX0LD2FkiudAQrrEUtxErViKqGFbz64M1l1D6fcddTwaMtuu9I0leII5ZjD23jdjmdUQpjLIj52gjujwaq7cLhYi2SXUFe785FdCC5TlufOQcT3t010MwJsx/x6nA+brPNP3GOZyesRZRYJzRiyLW0mIIKyKI7DcLqOgwNerphnWBNT+gdF8cUT/PaCrXEX4B+J7/fA3gaeXa9WRdayhqlhuxKrZb0kXkePNmsi3I7Qg8+xzaa3DPUBLh0Ki5DCLogCdJFpuW1w6BA+ymFcIpEQtdFavXyNH89K299KVEqGhfEbRFmMpgNQS5ItatkaPbMNKLIAtBNxHZiyDyHbgzoN9VUjK2ADLcYoYFkOEePGVknE+hd+CDu59eo6c5jveAx5jwgq4iPRiRM01bEdR2pAen735WhKV3x90K0fxHfiUJ20njTEMm25GE1qkwKVM0hEoSUshiaUblTrkLpa682BCyAdm/YwB3N66v2sMraP3z9h0symbH1Dnob7JMmHol9sck0EfxCMB/rO8wK3pvGxAAAAAASUVORK5CYII=);
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
