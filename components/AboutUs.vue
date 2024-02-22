<script lang="ts" setup>
import { Autoplay,Controller } from 'swiper'
import NuxtImage from 'nuxt'
let aboutUsCurrent = ref(1)

const onSlideAboutUsSwiperChange = (swiper:any) => {
  aboutUsCurrent.value = swiper.realIndex + 1
}

// const aboutUsLists = [
//   {
//     title: 'components.aboutUs.item_1.title',
//     text: 'components.aboutUs.item_1.text',
//     context: 'components.aboutUs.item_1.context',
//     mbImg: 'https://static.cmereye.com/imgs/2023/04/312ab3f184b7daf5.jpg',
//     pcImg: 'https://static.cmereye.com/imgs/2023/05/77e7c4e4a2376aa8.jpg'
//   },
//   {
//     title: 'components.aboutUs.item_2.title',
//     text: '',
//     context: 'components.aboutUs.item_2.context',
//     mbImg: 'https://static.cmereye.com/imgs/2023/05/57398ce56ec905ad.jpg',
//     pcImg: 'https://static.cmereye.com/imgs/2023/05/d847d149cd3aef7d.jpg'
//   }
// ]

let aboutUsSwiperRef ={
  slideToLoop: (a)=>{},
  slidePrev: ()=>{},
  slideNext: ()=>{}
}
const setAboutUsSwiperRef = (swiper:any) => {
  aboutUsSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  // console.log(_value)
  aboutUsSwiperRef.slideToLoop(_value-1)
}



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
</script>

<template>
  <div class="index-aboutUs">
        <div class="pageCon">
          <div class="index_title">{{$t('components.aboutUs.title')}}</div>
        </div>
        <div class="index-aboutUs-swiper bigPageCon">
          <Swiper
            class="index-aboutUs-swiper-in"
            :modules="[Autoplay]"
            :autoplay="{ delay: 0 }"
            :slidesPerView="2"
            :speed="6000"
          >
            <SwiperSlide class="index-aboutUs-swiper-in-slide" v-for="(item,index) in imgsLists" :key="index">
              <el-image :src="item" @click="handleshowdeBox(index)"></el-image>
            </SwiperSlide>
          </Swiper>
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
        <div class="index-aboutUs-content pageCon">
          <div class="contentBox">
            <h2>科技護航，安全放心</h2>
            <span>優質的診療服務，在於醫生的專業素養，以及匹配的醫療設備的先進程度。愛康健從口腔檢查到臨床手術，全程採購主流牙科設備，與時俱進開展醫生職業技能培訓。我們信奉技術，加進口設備，才能有好的診療功效。</span>
          </div>
          <div class="contentBox">
            <h2>嚴謹治療，為效果護航</h2>
            <span>嚴格執行符合世界牙科聯盟(FDI)的診療標準，消毒隔離系統達到8個「一」無菌診療模式：一人一診室，一醫一助，一機一用，一次一消毒，消毒更全面。</span>
          </div>
        </div>
        <div class="deBox" v-show="showdeBox">
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
                <el-image :src="item"></el-image>
              </SwiperSlide>
            </swiper>
            <div class="leftBtn" @click="handleProcessBtn('slidePrev')">
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
            <div class="rightBtn" @click="handleProcessBtn('slideNext')">
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
        <!-- <Swiper
          class="swiperBox pageCon"
          :loop="true"
          :autoplay="{
            disableOnInteraction: true,
          }"
          @swiper="setAboutUsSwiperRef"
          @slideChange="onSlideAboutUsSwiperChange"
        >
          <SwiperSlide v-for="(item,index) in aboutUsLists" :key="index" >
            <div class="index-aboutUs-in ">
              <div class="index-aboutUs-in-l">
                <img class="pcBox" :src="item.pcImg" alt="">
                <img class="mbBox" :src="item.mbImg" alt="">
              </div>
              <div class="index-aboutUs-in-r">
                <div>{{$t(item.title)}}</div>
                <span>{{$t(item.text)}}</span>
                <span>{{$t(item.context)}}</span>
              </div>
            </div>
          </SwiperSlide>  
          <div class="aboutUs-lineBox">
            <PageSwiperPointLine :latestNewsNum="aboutUsLists.length" :latestNewsCurrent="aboutUsCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
          </div>
        </Swiper> -->
    </div>
</template>
<style lang="scss" scoped>
:deep(.index-aboutUs-swiper-in > .swiper-wrapper) {
  transition-timing-function: linear;
}
//關於我們
.index-aboutUs{
  margin-top: 140px;
  padding-bottom: 90px;
  // &-in{
  //   display: flex;
  //   margin-top: 45px;
  //   &-l{
  //     width: 55%;
  //     img{
  //       width: 100%;
  //     }
  //   }
  //   &-r{
  //     flex: 1;
  //     display: flex;
  //     flex-direction: column;
  //     box-sizing: border-box;
  //     padding-left: 100px;
  //     div{
  //       font-weight: 700;
  //       font-size: 28px;
  //       line-height: 160%;
  //       color: var(--indexColor1);
  //       margin-bottom: 70px;
  //       margin-top: 100px;
  //     }
  //     span{
  //       font-weight: 500;
  //       font-size: 20px;
  //       line-height: 160%;
  //       color: #666666;
  //     }
  //   }
  // }
  // .swiperBox{
  //   position: relative;
  //   cursor: pointer;
  //   .aboutUs-lineBox{
  //     position: absolute;
  //     left: calc(55% + 100px);
  //     bottom: 100px;
  //     width: 10%;
  //     z-index: 100;
  //   }
  // }
  &-swiper{
    width: calc(1334 / 1920 * 100%);
    max-width: 1334px;
    margin: 67px auto 0;
    &-in{
      width: 100%;
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
      // transition: all .3s;
      // &:hover{
      //   transform: rotate(90deg);
      // }
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
@media (min-width: 768px) and (max-width: 1452px) {
  .index-aboutUs{
    &-in{
      &-r{
        padding-left: 50px;
        div{
          font-size: 1.5rem;
          // margin-bottom: 50px;
          // margin-top: 70px;
          margin-bottom: calc((35 / 456) * 100%);
          margin-top: calc((50 / 456) * 100%);
        }
        span{
          font-size: 1rem;
        }
      }
    }
    .swiperBox{
      .aboutUs-lineBox{
        left: calc(55% + 50px);
        // width: 20%;
        bottom: 10%;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .index-aboutUs{
    margin-top: 110px;
    &-in{
      &-r{
        padding-left: 30px;
        div{
          margin-bottom: 10px;
          margin-top: 0px;
        }
      }
    }
    .swiperBox{
      .aboutUs-lineBox{
        left: calc(55% + 30px);
        bottom: 5%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
//關於我們
  .index-aboutUs{
    margin-top: 90px;
    padding-bottom: 90px;
    &-in{
      flex-direction: column;
      margin-bottom: 50px;
      &-l{
        width: 100%;
      }
      &-r{
        padding: 10px 30px;
        align-items: center;
        div{
          margin-bottom: 0;
          font-weight: 600;
          font-size: 1.125rem;
          margin-top: 0px;
        }
        span{
          text-align: center;
          font-size: 1rem;
        }
      }
    }
    .swiperBox{
      position: relative;
      .aboutUs-lineBox{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        // width: 200px;
        width: 100px;
        bottom: 30px;
        z-index: 100;
      }
    }
    &-swiper{
      display: none;
    }
    &-mbswiper{
      display: block;
      width: 100%;
      margin-top: 40px;
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


