
<template>
  <div class="index-brandConcept bigPageCon">
    <div class="brandConcept-left smallPageCon">
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
    <div class="brandConcept-right">
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