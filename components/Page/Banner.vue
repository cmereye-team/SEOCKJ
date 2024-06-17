<script lang="ts" setup>
import { defineProps } from "vue";
import { Autoplay } from 'swiper';
import { whatsapplink } from '~/assets/js/common'
interface bannerInterface {
  pcImg: string,
  mbImg: string,
  link: string,
  title: string,
  alt: string
}
const props = defineProps({
  bannerConfig:{
    type: Array<bannerInterface>,
    default(){
      return []
    }
  },
  smallLine: {
    type: Boolean,
    default: false
  },
  isApiConfig: {
    type: Boolean,
    default: false
  },
  apiId: {
    type: String,
    default: ''
  }
})
let bannerCur = ref(1)
const handleLineCur = (_value:number) =>{
  bannerSwiperRef.slideToLoop(_value-1)
}

let bannerSwiperRef ={
  slideToLoop: (a)=>{}
}
const setBannerSwiperRef = (swiper:any) => {
  bannerSwiperRef = swiper;
}
const onSlideChange = (swiper:any) => {
  bannerCur.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
}

let apiBannerConfig:any = ref([])
const getBanner = async () => {
  const res = await bannerApi(props.apiId)
  apiBannerConfig.value = [res]
}
onMounted(()=>{
  if(props.isApiConfig){
    setTimeout(()=>{
      getBanner()
    }, 0)
  }
})
</script>

<template>
  <div class="pageBanner">
    <div class="pageBanner-image">
      <Swiper :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 3000,
            }" class="pageBanner-swiper" @swiper="setBannerSwiperRef" @slideChange="onSlideChange">
        <Swiper-slide v-for="(item,index) in isApiConfig ? apiBannerConfig : bannerConfig" :key="index">
          <nuxtLink class="pageCon" :to="[null,undefined,''].includes(item.link) ? 'javaScript:void(0)' : item.link">
            <img :srcset="`${item.mbImg} 768w, ${item.pcImg}`" :src="item.pcImg" :alt="item.alt && item.alt" :title="item.title && item.title">
          </nuxtLink>
        </Swiper-slide>
      </Swiper>
    </div>
    <div class="pageBanner-line" v-if="bannerConfig.length > 1">
      <PageSwiperPointLine :smallLine="smallLine" :latestNewsNum="bannerConfig.length" :latestNewsCurrent="bannerCur" @changeLineCur="handleLineCur" />
    </div>
    <div class="pageBanner-btn">
      <nuxt-link :to="whatsapplink" title="掛號">掛號</nuxt-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.pageBanner{
  width: 100%;
  margin-top: 15px;
  &-image{
    width: 100%;
  }
  &-swiper{
    width: 100%;
    padding: 0 0 20px;
    a{
      display: block;
      img{
        box-shadow: 0px 10px 8.3px 0px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        width: 100%;
      }
    }
  }
  &-line{
    width: 200px;
    margin: 45px auto 0;
  }
  &-btn{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    a{
      background: #FF0302;
      display: inline-block;
      padding: 4px 108px;
      font-size: 35px;
      font-weight: 700;
      line-height: 160%;
      color: #FFF620;
      border-radius: 100px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .pageBanner{
    &-btn{
      margin-top: 2.6042vw;
      a{
        padding: .2083vw 5.625vw;
        font-size: 1.8229vw;
        border-radius: 5.2083vw;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .pageBanner{
    &-swiper{
      a{
        padding: 0 15px;
        img{
          box-shadow: 0px 3px 8.3px 0px rgba(0, 0, 0, 0.25);
        }
      }
    }
    &-line{
      margin-top: 0px;
      width: 100px;
    }
    &-btn{
      margin-top: 20px;
      a{
        transform: none;
        font-size: 26px;
        font-weight: 900;
        padding: 5px 86px;
      }
    }
  }
}
</style>