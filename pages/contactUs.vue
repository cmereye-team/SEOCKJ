<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import {Navigation,Thumbs,FreeMode,Autoplay} from 'swiper';
const appState = useAppState()
useHead({
  title: "聯絡我們 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健為香港希瑪眼科醫療控股有限公司（股份代號：3309）旗下的內地牙科品牌，各門診位於內地深圳市，包括: 雅健口腔門診部、恒樂口腔門診、深圳愛康健口腔醫院、富康口腔門診部、李川口腔診所、王琦口腔診所等牙科診所及醫院。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院 愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院 牙科服務 內地牙科 深圳口腔專科希瑪眼科醫療控股有限公司雅健口腔門診部 恒樂口腔門診 富康口腔門診部 李川口腔診所 王琦口腔診所 恒潔口腔門診部 康輝口腔門診部 顏麗口腔診所 恒雅口腔門診部 恒美口腔門診部 沈虹口腔診所 炫雅口腔門診部',
   },
  ]
})

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/06/e95ec940e8903f32.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2024/06/b157ba27733d677e.jpg',
  }
]

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
let thumbsSwiper = ref({
  slideToLoop: (a)=>{}
});

const setThumbsSwiper = (swiper:any) => {
  thumbsSwiper.value = swiper;
}

const changeThumbsSwiper = (swiper:any) => {
  environmentSwiperRef.value.slideToLoop(swiper.realIndex)
}

let environmentSwiperRef = ref({
  slideToLoop: (a)=>{}
})
const setEnvironmentSwiperRef = (swiper:any)=>{
  environmentSwiperRef.value = swiper;
}

const changeEnvironment = (swiper:any) => {
  // console.log(swiper)
  // thumbsSwiper.value = swiper
  thumbsSwiper.value.slideToLoop(swiper.realIndex)
}

let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})
</script>

<template>
  <div>
    <PageBanner :bannerConfig="bannerConfig" />
    <div class="contactUs">
      <NewAddress />
      <div class="serviceCard">
        <serviceCard :isIndexShow="true" />
      </div>
      <div class="environment">
        <div class="environment-title">
          <div class="index_title">{{$t('contactUs.clinic_environment')}}</div>
        </div>
        <div class="environment-in smallPageCon">
          <swiper
            class="environmentSwiperBox" 
            :loop="true"
            :autoplay="{
              delay: 3000,
            }"
            :modules="[Autoplay]"
            @swiper="setEnvironmentSwiperRef"
            @slideChange="changeEnvironment">
            <swiper-slide class="environmentSwiperBox-slide" v-for="(imgItem,imgIndex) in environmentLists02" :key="imgIndex">
                <img :src="imgItem" />
            </swiper-slide>
          </swiper>
          <swiper
            :spaceBetween="30"
            :slidesPerView="windowWidth>768 ? 4 : 'auto'"
            :loop="true"
            :navigation="true"
            :modules="[Navigation]"
            class="mySwiper"
            @swiper="setThumbsSwiper"
            @slideChange="changeThumbsSwiper"
          >
            <swiper-slide class="mySwiper-slide" v-for="(imgItem,imgIndex) in environmentLists02" :key="imgIndex">
              <img :src="imgItem" /> 
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .contactUs{
    background: #fff;
    padding-bottom: 50px;
    position: relative;
    z-index: 1;
  }
  .environment{
    margin-top: 154px;
    &-title{
      display: flex;
      justify-content: center;
      z-index: 1;
    }
    &-in{
      margin-top: 46px;
      display: flex;
      flex-direction: column;
      align-items: center;
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
          border-color: transparent transparent transparent var(--indexColor);

        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .contactUs{
      padding-bottom: 0px;
    }
    .index-contactUs{
      :deep(.index-contactUs-t){
        position: relative;
        z-index: 1 !important;
      }
    }
    .serviceCard{
      margin-top: 30px;
    }
    .environment{
      margin-top: 60px;
      &-in{
        margin-top: 28px;
        .environmentSwiperBox{
          &-slide{
            width: auto;
            padding: 15px;
            img{
              max-width: calc(100% - 60px);
              margin: 0 auto;
            }
          }
        }
        .mySwiper{
          margin: 10px auto;
          padding: 0 0 0 25%;
          &-slide{
            width: auto;
            padding: 0;
            img{
              max-width: 200px;
              margin: 0 auto;
            }
          }
        }
      }
      
    }
  }
</style>

