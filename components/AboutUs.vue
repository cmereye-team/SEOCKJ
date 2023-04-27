<script lang="ts" setup>
let aboutUsCurrent = ref(1)

const onSlideAboutUsSwiperChange = (swiper:any) => {
  aboutUsCurrent.value = swiper.realIndex + 1
}


</script>

<template>
  <div class="index-aboutUs">
      <div class="index_title pageCon">關於我們</div>
        <Swiper
          class="swiperBox pageCon"
          :loop="true"
          :autoplay="{
            disableOnInteraction: true,
          }"
          @slideChange="onSlideAboutUsSwiperChange"
        >
          <SwiperSlide v-for="slide in 4" :key="slide" >
            <div class="index-aboutUs-in ">
            <div class="index-aboutUs-in-l">
              <img src="@/assets/images/aboutUs_gb.jpg" alt="">
            </div>
            <div class="index-aboutUs-in-r">
              <div>科技護航，安全放心</div>
              <span>優質的診療服務，在於醫生的專業素養，</span>
              <span>"以及匹配的醫療設備的先進程度。愛康健從口腔檢查到臨床手術，全程採購主流牙科設備，與時俱進開展醫生職業技能培訓。我們信奉技術，加進口設備，才能有好的診療功效。"</span>
            </div>
            </div>
          </SwiperSlide>  
          <div class="aboutUs-lineBox">
            <PageSwiperPointLine :latestNewsNum="4" :latestNewsCurrent="aboutUsCurrent"></PageSwiperPointLine>
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
        color: #FFA09E;
        margin-bottom: 70px;
        margin-top: 100px;
      }
      span{
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: #4D4D4D;
      }
    }
  }
  .swiperBox{
    position: relative;
    .aboutUs-lineBox{
      position: absolute;
      left: calc(55% + 100px);
      bottom: 100px;
      width: 423px;
      z-index: 100;
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
        width: 200px;
        bottom: 30px;
        z-index: 100;
      }
    }
  }
}

</style>


