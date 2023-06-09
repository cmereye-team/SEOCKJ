<script lang="ts" setup>
import { defineProps } from "vue"
import { Autoplay } from 'swiper';
defineProps({
  titleLeftShow:{
    type: Boolean,
    default: false
  }
})


let latestNewsCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  latestNewsCurrent.value = swiper.realIndex + 1
}

// const getNewsLists = async () => {
//   console.log('getNewsLists!开始执行')
//   const { data }:any = await useFetch('https://admin.ckjhk.com/api.php/list/2',{
//     method: 'post'
//   });
//   console.log('请求结果',JSON.parse(data.value))
//   let res = JSON.parse(data.value) || []
//   if(res){
//     console.log('data数据',res.data)
//     if(res.data && res.data.length){
//       newsLists = res.data.map(item=>{
//         return {
//           title: item.title || '',
//           imgUrl: `https://admin.ckjhk.com/${item.ico}`,
//           link: ''
//         }
//       })
//       console.log(newsLists)
//     }
//   }
// }
// getNewsLists()
// const newsLists = ref([{
//   title: '',
//   imgUrl: '',
//   link: ''
// }])
let newsLists = [
  {
    title: '歐美種植牙 即減￥2000元/顆',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/c82c0ef3ec05c145.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/06/0507b7e68c818758.jpg',
    link: '/dental-service/implant'
  },
  {
    title: '隱形牙箍  即減￥5000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/f1c3617872a221a1.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/06/e682138cf0372fea.jpg',
    link: '/dental-service/invisalign'
  },
  {
    title: '金屬矯正牙箍 即減￥2000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/3df92744a843178d.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/06/7f53da7aac0a0ac6.jpg',
    link: '/dental-service/orthodontics'
  },
  {
    title: '成功種牙或矯齒，免費贈送專業潔牙1次',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/be220b91ee16b2dc.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/06/35eddc3953f766d6.jpg',
    link: '/dental-service'
  }
]

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
        <div class="pcBox">
           <dropdownCon v-if="titleLeftShow" />
        </div>
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
        <swiper-slide v-for="(latestNewsItem,latestNewsIndex) in newsLists" :key="latestNewsIndex">
          <div class="index-latestNews-in">
            <!-- <div class="index-latestNews-in-l">
              <img class="pcBox" src="https://static.cmereye.com/imgs/2023/04/af8ffdc3e6b0a67c.jpg" alt="">
              <img class="mbBox" src="https://static.cmereye.com/imgs/2023/04/fbd42a968440461c.jpg" alt="">
            </div>
            <div class="index-latestNews-in-r">
              <img src="https://static.cmereye.com/imgs/2023/05/a50d9e0246e0d460.png" alt="">
              <div class="btn">
                <span>了解更多</span>
              </div>
            </div> -->
            <nuxt-link :to="latestNewsItem.link">
              <img class="newsImg" :src="windowWidth>768?latestNewsItem.imgUrl:latestNewsItem.mbUrl" :alt="latestNewsItem.title" :title="latestNewsItem.title" />
            </nuxt-link>
          </div>
        </swiper-slide>
      </Swiper>
      <div class="index-latestNews-line">
        <PageSwiperPointLine :latestNewsNum="newsLists.length" :latestNewsCurrent="latestNewsCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
      </div>
      <!-- <div class="mbBox">
         <dropdownCon  v-if="titleLeftShow" />
      </div> -->
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
    &-l{
      width: 58%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-r{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      &>img{
        margin: 116px 0 0;
        width: 490px;
      }
      .btn{
        width: 274px;
        height: 80px;
        line-height: 80px;
        background: #FFCECB;
        box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
        font-weight: 600;
        // font-size: 32px;
        font-size: 2rem;
        // line-height: 160%;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 100px;
      }
    }
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
    &-in{
      &-l{
        width: 58%;
      }
      &-r{
        &>img{
          margin: 20% 0 0;
          width: 80%;
        }
        .btn{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45%;
          height: 14.5%;
          margin-bottom: 20%;
          font-size: 1.5rem;
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
      &-l{
        width: 100%;
      }
      &-r{
        padding-bottom: 24px;
        &>img{
          margin: 18px 0;
          width: 230px;
        }
        .btn{
          width: 137px;
          height: 40px;
          line-height: 40px;
          font-size: 1rem;
          margin-bottom: 50px;
        }
      }
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