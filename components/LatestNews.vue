<script lang="ts" setup>
let latestNewsCurrent = ref(1)

const onSlideChange = (swiper:any) => {
  latestNewsCurrent.value = swiper.realIndex + 1
}


</script>

<template>
  <div class="index-latestNews">
      <div class="index_title pageCon">最新消息</div>
      <Swiper
        class="swiperBox pageCon"
        :loop="true"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="latestNewsItem in 4" :key="latestNewsItem">
          <div class="index-latestNews-in">
            <div class="index-latestNews-in-l">
              <img class="pcBox" src="https://static.cmereye.com/imgs/2023/04/af8ffdc3e6b0a67c.jpg" alt="">
              <img class="mbBox" src="https://static.cmereye.com/imgs/2023/04/fbd42a968440461c.jpg" alt="">
            </div>
            <div class="index-latestNews-in-r">
              <img src="@/assets/images/icon_10.png" alt="">
              <div class="btn">
                <span>了解更多</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div class="lineBox">
          <div class="lineBox-in">
            <PageSwiperPointLine :latestNewsNum="4" :latestNewsCurrent="latestNewsCurrent"></PageSwiperPointLine>
          </div>
        </div>
      </Swiper>
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
        width: 423px;
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
  }
}
</style>