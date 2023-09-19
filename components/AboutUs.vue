<script lang="ts" setup>
let aboutUsCurrent = ref(1)

const onSlideAboutUsSwiperChange = (swiper:any) => {
  aboutUsCurrent.value = swiper.realIndex + 1
}

const aboutUsLists = [
  {
    title: 'components.aboutUs.item_1.title',
    text: 'components.aboutUs.item_1.text',
    context: 'components.aboutUs.item_1.context',
    mbImg: 'https://static.cmereye.com/imgs/2023/04/312ab3f184b7daf5.jpg',
    pcImg: 'https://static.cmereye.com/imgs/2023/05/77e7c4e4a2376aa8.jpg'
  },
  {
    title: 'components.aboutUs.item_2.title',
    text: '',
    context: 'components.aboutUs.item_2.context',
    mbImg: 'https://static.cmereye.com/imgs/2023/05/57398ce56ec905ad.jpg',
    pcImg: 'https://static.cmereye.com/imgs/2023/05/d847d149cd3aef7d.jpg'
  }
]

let aboutUsSwiperRef ={
  slideToLoop: (a)=>{}
}
const setAboutUsSwiperRef = (swiper:any) => {
  aboutUsSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  // console.log(_value)
  aboutUsSwiperRef.slideToLoop(_value-1)
}
</script>

<template>
  <div class="index-aboutUs">
        <div class="pageCon">
          <div class="index_title">{{$t('components.aboutUs.title')}}</div>
        </div>
        <Swiper
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
                <!-- 科技護航，安全放心 -->
                <div>{{$t(item.title)}}</div>
                <!-- 優質的診療服務，在於醫生的專業素養， -->
                <span>{{$t(item.text)}}</span>
                <!-- 以及匹配的醫療設備的先進程度。愛康健從口腔檢查到臨床手術，全程採購主流牙科設備，與時俱進開展醫生職業技能培訓。我們信奉技術，加進口設備，才能有好的診療功效。 -->
                <span>{{$t(item.context)}}</span>
              </div>
            </div>
          </SwiperSlide>  
          <div class="aboutUs-lineBox">
            <PageSwiperPointLine :latestNewsNum="aboutUsLists.length" :latestNewsCurrent="aboutUsCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
          </div>
        </Swiper>
    </div>
</template>
<style lang="scss" scoped>
  
//關於我們
.index-aboutUs{
  margin-top: 140px;
  &-in{
    display: flex;
    margin-top: 45px;
    &-l{
      width: 55%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-r{
      flex: 1;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      box-sizing: border-box;
      padding-left: 100px;
      div{
        font-weight: 700;
        font-size: 28px;
        line-height: 160%;
        color: var(--indexColor1);
        margin-bottom: 70px;
        margin-top: 100px;
      }
      span{
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
      }
    }
  }
  .swiperBox{
    position: relative;
    cursor: pointer;
    .aboutUs-lineBox{
      position: absolute;
      left: calc(55% + 100px);
      bottom: 100px;
      // width: 324px;
      width: 10%;
      z-index: 100;
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
          margin-bottom: 50px;
          margin-top: 70px;
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
          margin-top: 30px;
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
  }
}

</style>


