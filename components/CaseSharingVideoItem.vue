<template>
  <div class="caseSaringVideoItem">
    <div class="caseSaringVideoItem-l">
      <!-- <video src=""></video> -->
      <img src="@/assets/images/aboutUs_gb.jpg" alt="">
      <!-- <iframe
        class="pcShow"
        width="100%"
        height="440"
        src="https://www.youtube.com/embed/7_A3ae7q15E"
        :title="$t('service.icl.film.title2')"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> -->
    </div>
    <div class="caseSaringVideoItem-r">
      <div class="name">梁家棋 Joyce</div>
      <div class="skill">種植牙齒療程</div>
      <div class="process">過程舒適無痛</div>
      <div class="text">人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。</div>
      <div class="bg_box"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.caseSaringVideoItem{
  display: flex;
  // background: #fff no-repeat;
  // background-size: 50% 252px;
  // padding-left: 103px;
  &-l{
    width: 55%;
    z-index: 1;
    img{
      width: 100%;
      height: 440px;
      background: #FFF1F0;
      box-shadow: 2px 4px 8px rgba(255, 120, 117, 0.35);
    }
  }
  &-r{
    flex: 1;
    padding: 45px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name{
      font-weight: 600;
      font-size: 2.12rem;
      line-height: 160%;
      color: #4D4D4D;
      margin-top: 20px;
      z-index: 1;
    }
    .skill{
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
      color: #FFA09E;
      text-indent: 40px;
      z-index: 1;
    }
    .process{
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
      color: #FFCECB;
      margin-top: 70px;
      z-index: 1;
    }
    .text{
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 160%;
      color: #4D4D4D;
      z-index: 1;
    }
    .bg_box{
      background: #fff;
      position: absolute;
      width: 716px;
      height: 252px;
      right: 0;
      bottom: -30px;
      z-index: 0;
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  .caseSaringVideoItem{
    &-l{
      width: 45%;
      img{
        height: 350px;
      }
    }
    &-r{
      padding: 25px;
      .name{
        font-size: 1.8rem;
        margin-top: 10px;
      }
      .skill{
        font-size: 1.7rem;
      }
      .process{
        font-size: 1.7rem;
        margin-top: 50px;
      }
      .text{
        font-size: 1.4rem;
      }
      .bg_box{
        width: 109%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .caseSaringVideoItem{
    flex-direction: column-reverse;
    padding: 0 30px;
    &-l{
      margin-top: 25px;
      width: 100%;
      img{
        height: auto;
      }
    }
    &-r{
      width: 100%;
      padding: 0;
      .name{
        font-size: 1.625rem;
        margin-top: 0;
      }
      .skill{
        font-size: 1.625rem;
        margin-top: 0;
        text-indent: 40px;
      }
      .process{
        font-weight: 600;
        font-size: 1.25rem;
        margin-top: 26px;
        z-index: 1;
      }
      .text{
        font-size: 1rem;
        z-index: 1;
      }
      .bg_box{
        width: 345px;
        height: 150px;
        right: 0;
        top: 90px;
        z-index: 0;
      }
    }
  }
}
</style>