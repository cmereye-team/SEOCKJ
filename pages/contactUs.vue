<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import {Navigation,Thumbs,FreeMode} from 'swiper';
const appState = useAppState()
useHead({
  title: "聯絡我們"
})
const handleAreaTab = (_idx: number) => {
  appState.setCurNum(_idx)
}

let environmentCur = ref(0)
const environmentLists = [
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5004.jpg',
  ],
]
const environmentLists02 = [
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4002.JPG',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5004.jpg',
]
const handleImg = (_idx:number) => {
  console.log(_idx)
  environmentCur.value = _idx
}
let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper:any) => {
  thumbsSwiper.value = swiper;
}
</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader
      :headerBg="'https://static.cmereye.com/imgs/2023/04/b398478bdd2d7847.jpg'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/aa3a789ff99a6ba3.jpg'"
    />
    <div class="contactUs">
      <ContactUs />
      <ContactForm />
      <div class="environment">
        <div class="environment-title">
          <div class="index_title">診所環境</div>
        </div>
        <!-- <div class="environment-in pageCon">
          <div class="bigImg">
            <img :data-cfsrc="environmentLists[appState.areaTabCurNum][environmentCur]"
              :srcset="`${environmentLists[appState.areaTabCurNum][environmentCur]} '768w', ${environmentLists[appState.areaTabCurNum][environmentCur]}`"
              title="診所環境" alt="診所環境" :src="environmentLists[appState.areaTabCurNum][environmentCur]" />
          </div>
          <div class="areaNav">
            <div class="areaNav-in" v-for="(areaItem,areaIndex) in appState.areaTabs" :key="areaIndex" @click="handleAreaTab(areaIndex)">
              <span :class="{'current': appState.areaTabCurNum === areaIndex}">{{areaItem}}</span>
            </div>
          </div>
          <div class="imgLists">
            <div class="imgLists-in" v-for="(imgItem,imgIndex) in environmentLists[appState.areaTabCurNum]" :key="imgIndex" @click="handleImg(imgIndex)">
              <img :src="imgItem" alt="">
            </div>
          </div>
        </div> -->
        <div class="environment-in pageCon">
          <swiper class="environmentSwiperBox" :loop="true" :thumbs="{ swiper: thumbsSwiper }" :modules="[Thumbs,FreeMode]">
            <swiper-slide class="environmentSwiperBox-slide" v-for="(imgItem,imgIndex) in environmentLists02" :key="imgIndex">
                <img :src="imgItem" />
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :loop="true"
            :navigation="true"
            :modules="[Navigation,Thumbs,FreeMode]"
            class="mySwiper"
          >
            <swiper-slide class="mySwiper-slide" v-for="(imgItem,imgIndex) in environmentLists02" :key="imgIndex">
              <img :src="imgItem" /> 
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- <AboutUs /> -->
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .contactUs{
    background: #fff;
    padding-bottom: 143px;
  }
  .environment{
    margin-top: 154px;
    &-title{
      display: flex;
      justify-content: center;
    }
    &-in{
      margin-top: 46px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .bigImg{
        width: 100%;
        max-width: 636px;
      }
      .areaNav{
        margin-top: 35px;
        width: 100%;
        max-width: 840px;
        display: flex;
        justify-content: space-between;
        &-in{
          width: 121px;
          height: 49px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            border-bottom: 1px solid #4D4D4D;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 160%;
            color: #4D4D4D;
            &:hover{
              border-bottom: 1px solid #FFA09E;
              color: #FFA09E;
            }
            &.current{
              border-bottom: 1px solid #FFA09E;
              color: #FFA09E;
            }
          }
        }
      }
      .imgLists{
        margin-top: 16px;
        display: flex;
        width: 100%;
        max-width: 1068px;
        flex-wrap: wrap;
        padding-left: 41px;
        box-sizing: border-box;
        &-in{
          width: 33.33%;
          padding-right: 41px;
          box-sizing: border-box;
          margin-bottom: 16px;
          cursor: pointer;
          img{
            width: 100%;
            height: auto;
            max-width: 329px;
          }
        }
      }
      .environmentSwiperBox{
        width: 100%;
        margin: 0 auto;
        &-slide{
          img{
             margin: 0 auto;
          }
        }
      }
      .mySwiper{
        width: 100%;
        max-width: 1452px;
        margin: 100px auto 0;
        padding-left: 81px;
        padding-right: 50px;
        &-slide{
          padding-right: 31px;
        }
        :deep(.swiper-button-prev:after){
          content: '';
          border-left: 30px solid;
          border-right: 30px solid;
          border-top: 20px solid;
          border-bottom: 20px solid;
          border-color: transparent #FFCECB transparent transparent;
        }
        :deep(.swiper-button-next:after){
          content: '';
          border-left: 30px solid;
          border-right: 30px solid;
          border-top: 20px solid;
          border-bottom: 20px solid;
          border-color: transparent transparent transparent #FFCECB;

        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .contactUs{
      padding-bottom: 90px;
    }
    .environment{
      margin-top: 50px;
      &-in{
        margin-top: 28px;
        .areaNav{
          padding: 0 20px;
          margin-top: 15px;
          &-in{
            span{
              font-size: 16px;
            }
          }
        }
        .imgLists{
          padding-right: 10px;
          padding-left: 30px;
          margin-top: 6px;
          &-in{
            padding-right: 20px;
            margin-bottom: 6px;
          }
        }
        .mySwiper{
          display: none;
        }
      }
      
    }
  }
</style>

