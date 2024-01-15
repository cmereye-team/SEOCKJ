<script lang="ts" setup>
const news = ref([
])
let currtNew = ref(1)
const handleLineCur = (_value:number) =>{
  newsSwiperRef.slideToLoop(_value-1)
}

let newsSwiperRef ={
  slideToLoop: (a)=>{}
}
const setNewsSwiperRef = (swiper:any) => {
  newsSwiperRef = swiper;
}
const onSlideChange = (swiper:any) => {
  currtNew.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
}
</script>

<template>
<div>
  <swiper
    class="swiperBox"
    :loop="true"
    :autoplay="{
      delay: 2500,
    }"
    @swiper="setNewsSwiperRef"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="index-brandConcept bigPageCon">
      <div class="brandConcept-left pageCon">
        <div class="">
          <div class="index_title brandConceptTitle">{{$t('pages.brand.title')}}</div>
        </div>
        <div class="brandConcept-title">
          <span>{{$t('components.brandConcept.title.span_1')}}</span>
          <span>{{$t('components.brandConcept.title.span_2')}}</span>
        </div>
        <div class="brandConceptBg">
          <img class="mbBox" src="https://static.cmereye.com/imgs/2023/04/d4c1df365750c9c6.jpg" alt="">
        </div>
        <div class="content brandConceptContent">
          {{$t('components.brandConcept.content')}}
        </div>
      </div>
      <div class="brandConcept-right" :style="{
        'background': `url(https://static.cmereye.com/imgs/2023/05/c8173ec71c34ec89.jpg) no-repeat left center`,
        'background-size': 'cover'
      }">
      </div>
    </swiper-slide >
    <swiper-slide class="index-brandConcept bigPageCon">
      <div class="brandConcept-left pageCon">
        <div class="">
          <div class="index_title brandConceptTitle">{{$t('pages.brand.title')}}</div>
        </div>
        <div class="brandConcept-title act">
          <span>接待香港工聯會代表團</span>
        </div>
        <div class="brandConceptBg">
          <img class="mbBox" src="https://static.cmereye.com/imgs/2024/01/e4c3cb0ba5a58c54.jpg" alt="">
        </div>
        <div class="content brandConceptContent act">
          香港工聯會代表團參觀了我們的羅湖口岸愛康健口腔醫院、富康口腔門診部和康輝口腔門診部，詳細了解我們的醫療設施、技術和服務。他們與我們的醫療團隊進行了深入的交流和討論，探討口腔醫療的發展趨勢和技術創新。
        </div>
        <div class="btn">
          <a href="/brand/action-message">查看全文</a>
        </div>
      </div>
      <div class="brandConcept-right" :style="{
        'background': `url(https://static.cmereye.com/imgs/2024/01/04d5f50c079f5d33.jpg) no-repeat left center`,
        'background-size': 'cover'
      }">
      </div>
    </swiper-slide >
  </swiper>
  <div class="index-latestNews-line brandConcept-line">
    <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="currtNew" @changeLineCur="handleLineCur"></PageSwiperPointLine>
  </div>
</div>
  
</template>


<style lang="scss" scoped>
.index-brandConcept {
  width: 100%;
  min-height: 768px;
  margin-top: 143px;
  box-sizing: border-box;
  position: relative;
  .brandConcept-left {
    padding-top: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    position: relative;
    .brandConcept-title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 160%;
      color: #666666;
      margin-top: 100px;
      span {
        display: block;
      }
    }
    .brandConceptBg{
      width: 100%;
      display: none;
      img{
        width: 100%;
      }
    }
    .content {
      width: 30%;
      font-style: normal;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 160%;
      color: #666666;
      margin-top: 70px;
    }
    .btn{
      color: #fff;
      background: var(--indexColor1);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: 160%;
      width: 157px;
      height: 46px;
      line-height: 46px;
      border-radius: 30px;
      margin-top: 30px;
      box-shadow: 0px 3.704px 7.409px 0px rgba(252, 22, 130, 0.38);
      transition: all .3s;
      a{
        width: 100%;
        height: 100%;
      }
      &:hover{
        background: var(--indexColor3);
      }
    }
  }
  .brandConcept-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    // background: url(https://static.cmereye.com/imgs/2023/05/c8173ec71c34ec89.jpg) no-repeat left center;
    // background-size: cover;
    z-index: 0;
  }
}
.brandConcept-line{
  width: 124px;
  margin: 38px auto 0;
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-brandConcept {
    margin-top: 110px;
    .brandConcept-left {
      .content {
        width: 40%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .index-brandConcept {
    min-height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    .brandConcept-left{
      padding-top: 0;
      .brandConcept-title {
        display: none;
        &.act{
          order: 2;
          display: block;
          font-size: 20px;
          margin-top: 0;
          width: 100%;
          padding: 0 30px;
          margin-bottom: 10px;
        }
      }
      .brandConceptBg{
        width: 100%;
        margin-top: 34px;
        display: block;
        order: 1;
      }
      .content{
        width: 100%;
        padding: 0 30px;
        margin-top: 0px;
        box-sizing: border-box;
        font-size: 1rem;
        order: 3;
        &.act{
          text-align: justify;
        }
      }
      .btn{
        height: 40px;
        line-height: 40px;
        width: 137px;
        margin: 15px auto 16px;
        font-size: 18px;
        order: 4;
      }
    }
    .brandConcept-right{
      display: none;
    }
  }
  .brandConcept-line{
    width: 83px;
    margin: 10px auto 0;
  }
}
</style>