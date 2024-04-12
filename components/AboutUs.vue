<script lang="ts" setup>
import { Autoplay,Controller } from 'swiper'
import NuxtImage from 'nuxt'

const imgsLists = [
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001005.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001006.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001007.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001008.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001009.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001010.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001011.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001012.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/de/1001013.jpg'
]

let showdeBox = ref(false)
let deBoxSwiperRef ={
  slideTo: (a)=>{},
  slideToLoop: (a)=>{},
  slidePrev: ()=>{},
  slideNext: ()=>{}
}
const handleshowdeBox = (_idx) =>{
  showdeBox.value = true
  deBoxSwiperRef.slideTo(_idx)
}
const setdeBoxSwiperRef = (swiper:any) => {
  deBoxSwiperRef = swiper;
}
const handleProcessBtn = (_type: string) => {
  deBoxSwiperRef[_type]();
}

// mb
const firstSwiper:any = ref(null);
const secondSwiper = ref(null);
const handleFirstSwiper = (swiper) =>{
  let _index = swiper.clickedIndex
  firstSwiper.value.slideToLoop(_index);
}

const setFirstSwiper = (swiper) => {
  firstSwiper.value = swiper;
};
const setSecondSwiper = (swiper) => {
  secondSwiper.value = swiper;
};

let mouseType:any = ref('leave')
const changemouse = (type: String) =>{
  mouseType.value = type
}
</script>

<template>
  <div class="index-aboutUs">
        <div class="smallPageCon">
          <div class="index_title">{{$t('components.aboutUs.title')}}</div>
        </div>
        <div class="index-aboutUs-swiper bigPageCon">
          <Swiper
            class="index-aboutUs-swiper-in"
            :modules="[Autoplay]"
            :autoplay="{ delay: 0 }"
            :slidesPerView="2"
            :speed="mouseType === 'leave' ? 6000 : 1000"
          >
            <SwiperSlide class="index-aboutUs-swiper-in-slide" v-for="(item,index) in imgsLists" :key="index">
              <el-image :src="item" @click="handleshowdeBox(index)"></el-image>
            </SwiperSlide>
          </Swiper>
          <div class="index-aboutUs-swiper-in-mouseLeft" @mouseleave.stop="changemouse('leave')" @mouseover.stop="changemouse('over')"></div>
          <div class="index-aboutUs-swiper-in-mouseRight" @mouseleave.stop="changemouse('leave')" @mouseover.stop="changemouse('over')"></div>
        </div>
        <div class="index-aboutUs-mbswiper">
          <swiper class="index-aboutUs-mbswiper-t" :modules="[Controller]" :controller="{ control: secondSwiper }" @swiper="setFirstSwiper">
            <SwiperSlide v-for="(item,tindex) in imgsLists" :key="tindex">
              <el-image :src="item"></el-image>
            </SwiperSlide>
          </swiper>
          <swiper class="index-aboutUs-mbswiper-b" :modules="[Controller]" :controller="{ control: firstSwiper }" @swiper="setSecondSwiper" @click="handleFirstSwiper">
            <SwiperSlide class="index-aboutUs-mbswiper-b-slide" v-for="(item,bindex) in imgsLists" :key="bindex">
              <el-image :src="item"></el-image>
            </SwiperSlide>
          </swiper>
        </div>
        <div class="index-aboutUs-content smallPageCon">
          <div class="contentBox">
            <h2>科技護航，安全放心</h2>
            <span>優質的診療服務，在於醫生的專業素養，以及匹配的醫療設備的先進程度。愛康健從口腔檢查到臨床手術，全程採購主流牙科設備，與時俱進開展醫生職業技能培訓。我們信奉技術，加進口設備，才能有好的診療功效。</span>
          </div>
          <div class="contentBox">
            <h2>嚴謹治療，為效果護航</h2>
            <span>嚴格執行符合世界牙科聯盟(FDI)的診療標準，消毒隔離系統達到8個「一」無菌診療模式：一人一診室，一醫一助，一機一用，一次一消毒，消毒更全面。</span>
          </div>
        </div>
        <div class="deBox" v-show="showdeBox" @click.stop="showdeBox = false">
          <div class="deBox-close" @click="showdeBox = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="107" viewBox="0 0 107 107" fill="none">
              <g filter="url(#filter0_d_2664_13034)">
                <circle cx="51.5" cy="51.5" r="49.5" fill="white"/>
              </g>
              <path d="M28 31L50.6154 51.4878L28 73" stroke="#FC1682" stroke-width="9.69231" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M73.6172 31L51.0018 51.4878L73.6172 73" stroke="#FC1682" stroke-width="9.69231" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <filter id="filter0_d_2664_13034" x="0" y="0" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="2" dy="2"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.0862745 0 0 0 0 0.509804 0 0 0 0.24 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2664_13034"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2664_13034" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          <div class="deBox-in">
            <swiper class="deBox-in-swiper" @swiper="setdeBoxSwiperRef">
              <SwiperSlide class="deBox-in-swiper-slide" v-for="(item,deBoxindex) in imgsLists" :key="deBoxindex">
                <el-image :src="item" @click.stop="()=>{}"></el-image>
              </SwiperSlide>
            </swiper>
            <div class="leftBtn" @click.stop="handleProcessBtn('slidePrev')">
              <svg xmlns="http://www.w3.org/2000/svg" width="107" height="107" viewBox="0 0 107 107" fill="none">
                <g filter="url(#filter0_d_2664_13039)">
                  <circle cx="51.5" cy="51.5" r="49.5" fill="white"/>
                </g>
                <path d="M59.0859 69.3037L38.999 51.4994L59.0859 33.695" stroke="#FC1682" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <filter id="filter0_d_2664_13039" x="0" y="0" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.0862745 0 0 0 0 0.509804 0 0 0 0.24 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2664_13039"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2664_13039" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
            <div class="rightBtn" @click.stop="handleProcessBtn('slideNext')">
              <svg xmlns="http://www.w3.org/2000/svg" width="107" height="107" viewBox="0 0 107 107" fill="none">
                <g filter="url(#filter0_d_2664_13030)">
                  <circle cx="51.5" cy="51.5" r="49.5" fill="white"/>
                </g>
                <path d="M43 31L65.6154 51.4878L43 73" stroke="#FC1682" stroke-width="9.69231" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <filter id="filter0_d_2664_13030" x="0" y="0" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.0862745 0 0 0 0 0.509804 0 0 0 0.24 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2664_13030"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2664_13030" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
:deep(.index-aboutUs-swiper-in > .swiper-wrapper) {
  transition-timing-function: linear;
}
//關於我們
.index-aboutUs{
  margin-top: 40px;
  // padding-bottom: 60px;
  &-swiper{
    width: 100%;
    margin: 30px auto 0;
    position: relative;
    &-in{
      width: 100%;
      width: calc(1334 / 1920 * 100%);
      max-width: 1334px;
      overflow: visible;
      &-slide{
        .el-image{
          width: 100%;
          cursor: pointer;
          transition: all .3s;
          &:hover{
            transform: scale(1.05);
            z-index: 1;
            box-shadow: 0 5px 10px rgba(0,0,0, .3);
          }
        }
        img{
          width: 100%;
        }
      }
    }
    &-in-mouseLeft{
      width: calc((100% - (1334 / 1920 * 100%)) / 2);
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    &-in-mouseRight{
      width: calc((100% - (1334 / 1920 * 100%)) / 2);
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
  }
  &-mbswiper{
    display: none;
  }
  &-content{
    max-width: 1120px;
    display: flex;
    .contentBox{
      flex: 1;
      padding: calc(66 / 1000 * 100%);
      position: relative;
      &:first-child::after{
        content: '';
        width: 36px;
        height: 100%;
        background: url(https://static.cmereye.com/imgs/2024/02/92c4f6042aafba5d.png) no-repeat;
        background-size: 100% auto;
        background-position: center;
        display: inline-block;
        position: absolute;
        right: -18px;
        top: 0;
      }
      h2{
        color: var(--indexColor1);
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%;
        letter-spacing: 3px;
        text-align: center;
      }
      span{
        width: 100%;
        display: inline-block;
        text-align: justify;
        color: var(--textColor);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 2px;
        margin-top: 15px;
      }
    }
  }
  .deBox{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999999999999;
    background: rgba(254, 230, 241, 0.50);
    &-close{
      width: 99px;
      height: 99px;
      position: absolute;
      top: 57px;
      right: 40px;
      cursor: pointer;
      z-index: 2;
    }
    &-in{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      transform: translate(-50%,-50%);
      &-swiper{
        width: 100%;
        z-index: 1;
        &-slide{
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .el-image{
          width: calc(100% - 60px);
          max-width: 1170px;
        }
        img{
          width: 100%;
        }
      }
    }
    .leftBtn{
      position: absolute;
      top: 50%;
      left: calc((100% - 1450px) / 2);
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 2;
    }
    .rightBtn{
      position: absolute;
      top: 50%;
      right: calc((100% - 1450px) / 2);
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 2;
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
    .index-aboutUs{
      margin-top: 2.0833vw;
      // padding-bottom: 3.125vw;
      &-swiper{
        margin: 1.5625vw auto 0;
        &-in{
          max-width: 69.4792vw;
          &-slide{
            .el-image{
              &:hover{
                box-shadow: 0 .2604vw .5208vw rgba(0,0,0, .3);
              }
            }
          }
        }
      }
    &-content{
      max-width: 58.3333vw;
      .contentBox{
        &:first-child::after{
          width: 1.875vw;
          right: -0.9375vw;
        }
        h2{
          font-size: 1.5625vw;
          letter-spacing: .1563vw;
        }
        span{
          font-size: 1.0417vw;
          letter-spacing: .1042vw;
          margin-top: .7813vw;
        }
      }
    }
    .deBox{
      &-close{
        width: 5.1563vw;
        height: 5.1563vw;
        top: 2.9688vw;
        right: 2.0833vw;
      }
      &-in{
        &-swiper{
          .el-image{
            max-width: 60.9375vw;
          }
        }
      }
      .leftBtn{
        left: calc((100% - 75.5208vw) / 2);
      }
      .rightBtn{
        right: calc((100% - 75.5208vw) / 2);
      }
    }
  }
}
@media screen and (max-width: 768px) {
//關於我們
  .index-aboutUs{
    margin-top: 90px;
    padding-bottom: 90px;
    &-swiper{
      display: none;
    }
    &-mbswiper{
      display: block;
      width: 100%;
      margin-top: 40px;
      overflow: hidden;
      &-t{
        width: 100%;
      }
      &-b{
        width: 80px;
        height: 60px;
        overflow: visible;
        margin: 28px auto 0;
        &-slide{
          padding: 0 6px;
          .el-image{
            transition: all .3s;
          }
          &.swiper-slide-active{
            .el-image{
              border: 4px solid var(--indexColor1);
              transform: translateY(-14px);
              position: relative;
              overflow: initial;
              &::before{
                content: '';
                width: 0px;
                height: 0px;
                border: 8px solid;
                border-top: 8px solid;
                border-left: 4px solid;
                border-right: 4px solid;
                border-bottom: 8px solid;
                border-color: transparent transparent var(--indexColor1) transparent;
                position: absolute;
                top: -20px;
                left: 50%;
                display: inline-block;
                transform: translateX(-50%);
              }
            }
          }
        }
      }
    }
    &-content{
      flex-direction: column;
      .contentBox{
        padding: 30px;
        &:first-child::after{
          display: none;
        }
        h2{
          font-size: 18px;
        }
        span{
          font-size: 16px;
          margin-top: 0;
        }
      }
    }
  }
}

</style>


