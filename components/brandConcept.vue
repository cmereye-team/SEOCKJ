<script lang="ts" setup>
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
onMounted(() => {
  // gsap.registerPlugin(ScrollTrigger);
  // const animRightIn = (name: string) => {
  //   return gsap.from(name, {
  //     opacity: 0, 
  //     x: 100, 
  //     duration: 2
  //   })
  // }
  // const animBottomIn = (name: string) => {
  //   return gsap.from(name, {
  //     opacity: 0, 
  //     y: 100, 
  //     duration: 2
  //   })
  // }
  // ScrollTrigger.create({
  //   trigger: ".brandConcept-right",
  //   animation: animRightIn(".brandConcept-right"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".brandConceptTitle",
  //   animation: animBottomIn(".brandConceptTitle"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".brandConcept-title",
  //   animation: animBottomIn(".brandConcept-title"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".brandConceptContent",
  //   animation: animBottomIn(".brandConceptContent"),
  //   start: "bottom bottom",
  // })
});
</script>


<template>
  <div class="index-brandConcept bigPageCon">
    <div class="brandConcept-left pageCon">
      <div class="index_title brandConceptTitle">品牌理念</div>
      <div class="brandConcept-title">
        <span>愛康健齒科連鎖品牌</span>
        <span>28年專注你的口腔健康</span>
      </div>
      <div class="brandConceptBg">
        <img class="mbBox" src="https://static.cmereye.com/imgs/2023/04/d4c1df365750c9c6.jpg" alt="">
      </div>
      <div class="content brandConceptContent">
        深圳愛康健口腔醫院是一家專業的口腔醫療機構，秉承著「專科·專業」的服務宗旨，通過科學、合理的醫療資源整合，為患者提供高品質的醫療服務。我們擁有畢業於國內知名口腔學院的專業醫生團隊，包括種植醫生、美學修復醫生、牙周病醫生等，帶領一批優秀的醫護人員，共同為患者提供全程式預約一體化診療服務，讓每一位患者都能享受健康微笑之旅。
      </div>
    </div>
    <div class="brandConcept-right">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.index-brandConcept {
  width: 100%;
  min-height: 760px;
  // margin: 50px 0 0;
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
      // font-size: 28px;
      font-size: 1.75rem;
      line-height: 160%;
      color: #4d4d4d;
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
      // font-size: 20px;
      font-size: 1.25rem;
      line-height: 160%;
      color: #4d4d4d;
      margin-top: 70px;
    }
  }
  .brandConcept-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    background: url(https://static.cmereye.com/imgs/2023/05/c8173ec71c34ec89.jpg) no-repeat left center;
    background-size: cover;
    z-index: 0;
  }
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
      }
      .brandConceptBg{
        width: 100%;
        margin-top: 34px;
        display: block;
      }
      .content{
        width: 100%;
        padding: 0 30px;
        margin-top: 0px;
        box-sizing: border-box;
        font-size: 1rem;
      }
    }
    .brandConcept-right{
      display: none;
    }
  }

}
</style>