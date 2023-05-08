<template>
  <div class="index-brandConcept">
    <div class="brandConcept-left pageCon">
      <div class="index_title">品牌理念</div>
      <div class="brandConcept-title">
        <span>希瑪愛康健品牌</span>
        <span>28年專注你的口腔健康</span>
      </div>
      <div class="brandConceptBg">
        <img class="mbBox" src="https://static.cmereye.com/imgs/2023/04/d4c1df365750c9c6.jpg" alt="">
      </div>
      <div class="content">
        作為深圳口腔專科醫院，深圳愛康健口腔醫院秉承著“專科·專業”的服務宗旨，對醫療資源進行了科學、合理的整合。醫師團隊是畢業於國內知名口腔學院的專業人員；醫院各專業帶頭人，包括種植醫師、美學修復醫師、牙周病醫師等共同組成，帶領一批醫護人員一起構成愛康健口腔醫院的服務團隊。全程式預約一體化診療服務，讓每一位顧客享受健康微笑之旅。
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