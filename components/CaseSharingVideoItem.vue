<template>
  <div class="caseSaringVideoItem">
    <div class="caseSaringVideoItem-l">
      <!-- <video src=""></video> -->
      <img src="@/assets/images/aboutUs_gb.jpg" alt="">
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
    }
    .skill{
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
      color: #FFA09E;
      text-indent: 40px;
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


@media screen and (max-width: 768px) {
  
}
</style>