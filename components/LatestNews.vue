<script lang="ts" setup>
// import { defineProps } from "vue"
import { Autoplay } from 'swiper';
// defineProps({
  // titleLeftShow:{
  //   type: Boolean,
  //   default: false
  // }
// })


let latestNewsCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  latestNewsCurrent.value = swiper.realIndex + 1
}
let newsLists = ref([{
  title: '',
  imgUrl: '',
  mbUrl: '',
  link: ''
}])
const getNewsLists = async () => {
  const _res:any = await useFetch('https://admin.ckjhk.com/api.php/list/12',{
    method: 'post',
    // onResponse({ request, response, options }) {
    //   // console.log('response',response)
    //   // console.log(JSON.parse(response._data))
    //   let res = JSON.parse(response._data) || null
    //   if(res){
    //     if(res.data && res.data.length){
    //       newsLists.value = res.data.map(item=>{
    //         return {
    //           title: item.title || '',
    //           imgUrl: item.ext_pcImg_hk && `https://admin.ckjhk.com${item.ext_pcImg_hk}`,
    //           mbUrl: item.ext_mbImg_hk && `https://admin.ckjhk.com${item.ext_mbImg_hk}`,
    //           link: item.ext_banner_link || ''
    //         }
    //       })
    //     }
    //   }
    // }
  });
  // console.log('请求结果--------------->', _res)
  // console.log('请求结果',JSON.parse(_res.data.value))
  let res = JSON.parse(_res.data.value) || null
  if(res){
    // console.log(res.data)
    if(res.data && res.data.length){
      newsLists.value = res.data.map(item=>{
        let _mbUrl = item.ext_mbImg_hk && `https://admin.ckjhk.com${item.ext_mbImg_hk}`
        let _imgUrl = item.ext_pcImg_hk && `https://admin.ckjhk.com${item.ext_pcImg_hk}`
        if(item.ext_mbImg_hk && item.ext_mbImg_hk.indexOf('https://') !== -1){
          _mbUrl = item.ext_mbImg_hk
        }
        if(item.ext_pcImg_hk && item.ext_pcImg_hk.indexOf('https://') !== -1){
          _imgUrl = item.ext_pcImg_hk
        }
        return {
          title: item.title || '',
          imgUrl: _imgUrl,
          mbUrl: _mbUrl,
          link: item.ext_banner_link || ''
        }
      })
      // console.log(newsLists) 
    }
  }
}
setTimeout(()=>{
  getNewsLists()
},0)

const filterBanner = () =>{
  if(windowWidth.value>768){
    // console.log(newsLists.value.filter(item => item.imgUrl !== ''))
    return newsLists.value.filter(item => item.imgUrl !== '')
  }else{
    // console.log(newsLists.value.filter(item => item.mbUrl !== ''))
    return newsLists.value.filter(item => item.mbUrl !== '')
  }
}

// let newsLists = [
//   {
//     title: '歐美種植牙 即減￥2000元/顆',
//     imgUrl: 'https://static.cmereye.com/imgs/2023/06/c82c0ef3ec05c145.jpg',
//     mbUrl: 'https://static.cmereye.com/imgs/2023/06/0507b7e68c818758.jpg',
//     link: '/dental-service/implant'
//   },
//   {
//     title: '隱形牙箍  即減￥5000元',
//     imgUrl: 'https://static.cmereye.com/imgs/2023/06/f1c3617872a221a1.jpg',
//     mbUrl: 'https://static.cmereye.com/imgs/2023/06/e682138cf0372fea.jpg',
//     link: '/dental-service/invisalign'
//   },
//   {
//     title: '金屬矯正牙箍 即減￥2000元',
//     imgUrl: 'https://static.cmereye.com/imgs/2023/06/3df92744a843178d.jpg',
//     mbUrl: 'https://static.cmereye.com/imgs/2023/06/7f53da7aac0a0ac6.jpg',
//     link: '/dental-service/orthodontics'
//   },
//   {
//     title: '成功種牙或矯齒，免費贈送專業潔牙1次',
//     imgUrl: 'https://static.cmereye.com/imgs/2023/06/be220b91ee16b2dc.jpg',
//     mbUrl: 'https://static.cmereye.com/imgs/2023/06/35eddc3953f766d6.jpg',
//     link: '/dental-service'
//   }
// ]

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

const handleLineCur = (_value:number) =>{
  // console.log(_value)
  latestNewsSwiperRef.slideToLoop(_value-1)
}

onMounted(()=>{
  // getNewsLists()
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

let latestNewsSwiperRef ={
  slideToLoop: (a)=>{}
}
const setLatestNewsSwiperRef = (swiper:any) => {
  latestNewsSwiperRef = swiper;
}

</script>

<template>
  <div class="index-latestNews pageCon">
      <div class="index-latestNews-t">
        <div class="index_title">最新優惠</div>
      </div>
      <swiper
        class="swiperBox"
        :loop="true"
        :modules="[Autoplay]"
        :autoplay="{
          delay: 2500,
        }"
        @swiper="setLatestNewsSwiperRef"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(latestNewsItem,latestNewsIndex) in filterBanner()" :key="latestNewsIndex">
          <div class="index-latestNews-in">
            <nuxt-link :to="latestNewsItem.link">
              <img class="newsImg" :src="windowWidth>768?latestNewsItem.imgUrl:latestNewsItem.mbUrl" :alt="latestNewsItem.title" :title="latestNewsItem.title" />
            </nuxt-link>
          </div>
        </swiper-slide>
      </Swiper>
      <div class="index-latestNews-line">
        <PageSwiperPointLine :latestNewsNum="filterBanner().length" :latestNewsCurrent="latestNewsCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  //最新消息
.index-latestNews {
  padding: 90px 0 0;
  .swiperBox{
    width: 100%;
    margin-top: 45px;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    .lineBox{
      width: 42%;
      position: absolute;
      bottom: 50px;
      right: 0;
      display: flex;
      justify-content: center;
      z-index: 100;
      &-in{
        width: 324px;
        margin: 0 auto;
      }
    }
  }
  &-in{
    cursor: pointer;
    background: #FFDDDA;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
  }
  &-t{
    display: flex;
    justify-content: space-between;
  }
  .newsImg{
    width: 100%;
  }
  &-line{
    width: 324px;
    margin: 38px auto 0;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-latestNews {
    .swiperBox{
      .lineBox{
        width: 42%;
        bottom: 10%;
        &-in{
          width: 50%;
          margin: 0 auto;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
//最新消息
  .index-latestNews {
    padding: 90px 0 0;
    .swiperBox{
      width: calc(100% - 60px);
      margin-top: 35px;
      overflow: hidden;
      border-radius: 20px;
      .lineBox{
        width: 200px;
        bottom: 34px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &-in{
      width: 100%;
      box-sizing: border-box;
      height: auto;
      flex-direction: column;
    }
    &-t{
      flex-direction: column;
    }
    &-line{
      width: 216px;
      margin: 26px auto 0;
    }
  }
}
</style>