<script lang="ts" setup>
// import { defineProps } from "vue";
import { useElementBounding } from '@vueuse/core'
import { smallPhoneNum,phoneNum } from '~/assets/js/common' 
const menuBar = ref(null)
// const { x, y, top, right, bottom, left, width, height } = useElementBounding(menuBar)
// defineProps({
//   str:{
//     type: String,
//     default: ''
//   }
// })



</script>

<template>
  <div class="menuBar " ref="menuBar">
    <div class="menuBar-in">
      <div class="menuBar-in-l">
        <div class="menuBar-box" title="深圳市醫保定點醫院">
          <img src="@/assets/images/icon_38.svg" alt="">
          <p>深圳市醫保定點醫院</p>
        </div>
        <div class="menuBar-box" title="深圳二級口腔醫院">
          <img src="@/assets/images/icon_39.svg" alt="">
          <p>深圳二級口腔醫院</p>
        </div>
      </div>
      <div class="menuBar-in-r">
        <nuxtLink :to="`tel: ${phoneNum}`" class="menuBar-box" title="香港熱線">
          <img src="@/assets/images/navIcon_1.png" alt="香港熱線">
          <p>香港熱線：(852) {{smallPhoneNum}}</p>
        </nuxtLink>
        <div class="menuBar-box" title="營業時間">
          <p>營業時間：9:00-17:30（假日照常應診）</p>
        </div>
        <div class="menuBar-icon">
          <nuxt-link class="menuBar-icon-in" to="https://www.facebook.com/ckjdental.hk/" target="_blank">
            <img src="@/assets/images/icon_1.png" alt="facebook" title="facebook" />
          </nuxt-link>
          <nuxt-link class="menuBar-icon-in" to="https://www.instagram.com/ckj_hk/" target="_blank">
            <img src="@/assets/images/icon_2.png" alt="instagram" title="instagram" />
          </nuxt-link>
          <nuxt-link class="menuBar-icon-in" to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA" target="_blank">
            <img src="@/assets/images/icon_3.png" alt="youtube" title="youtube" />
          </nuxt-link>
          <div class="menuBar-icon-in weChatBox">
            <img src="@/assets/images/navIcon_3.png" alt="weChat" title="weChat" />
            <div class="weChatCode">
              <div class="weChatCode-in">
                <div class="weChat"><img src="https://static.cmereye.com/imgs/2023/09/a43a869a1fc07eea.jpg" alt="二维码"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.menuBar{
  width: 100%;
  height: 67px;
  display: flex;
  // position: relative;
  &-in{
    width: 100%;
    height: 67px;
    background: var(--indexColor1);
    position: fixed;
    z-index: 0;
    left: 0;
    padding: 0 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menuBar-box{
      display: flex;
      align-items: center;
      &>img{
        display: inline-block;
        vertical-align: middle;
        margin-top: -5px;
        margin-right: 5px;
      }
      p{
        font-size: 22px;
        color: #fff;
        display: inline-block;
      }
    }
    &-l{
      display: flex;
      align-items: center;
      .menuBar-box{
        margin-right: 57px;
      }
    }
    &-r{
      display: flex;
      align-items: center;
      .menuBar-box{
        margin-left: 40px;
        &>img{
          max-height: 24px;
          margin-top: -3px;
        }
      }
      .menuBar-icon{
        display: flex;
        align-items: center;
        cursor: pointer;
        &-in{
          margin-left: 22px;
          position: relative;
          &>img{
            max-height: 27px;
          }
          .weChatCode{
            position: absolute;
            top: 100%;
            right: 0;
            display: none;
            opacity: 0;
            transform: translateX(10px);
            z-index: 42;
            &-in{
              transition: all .5s;
              background: var(--indexColor1);
              height: 100%;
              padding: 20px;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              color: #fff;
              .weChat{
                width: 200px;
                background: var(--indexColor3);
                img{
                  width: 100%;
                }
              }
            }
          }
          &.weChatBox:hover .weChatCode{
            display: flex;
            animation: animRightIn 1s forwards;
          }
        }
      }
    }
  }
}
@keyframes animRightIn {
  from{
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .menuBar{
    height: 3.4896vw;
    &-in{
      height: 3.4896vw;
      padding: 0 3.6458vw;
      .menuBar-box{
        &>img{
          margin-top: -0.2604vw;
          margin-right: .2604vw;
        }
        p{
          font-size: 1.1458vw;
        }
      }
      &-l{
        .menuBar-box{
          margin-right: 2.9688vw;
        }
      }
      &-r{
        .menuBar-box{
          margin-left: 2.0833vw;
          &>img{
            max-height: 1.25vw;
            margin-top: -0.1563vw;
          }
        }
        .menuBar-icon{
          &-in{
            margin-left: 1.1458vw;
            &>img{
              max-height: 1.4063vw;
            }
            .weChatCode{
              &-in{
                padding: 1.0417vw;
                border-radius: .5208vw;
                .weChat{
                  width: 10.4167vw;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .menuBar{
    display: none;
  }
}
</style>