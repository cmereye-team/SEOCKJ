<script lang="ts" setup>
const props = defineProps({
  caseSharingData: {
    type: Object,
    default(){
      return {
        type: '',
        name: '',
        skill: '',
        process: '',
        text: '',
        imgUrl: ''
      }
    }
  }
})


</script>

<template>
  <div class="caseSaringVideoItem">
    <div class="caseSaringVideoItem-l">
      <img src="https://static.cmereye.com/imgs/2023/06/b6685121c74c93e0.png" alt="">
    </div>
    <div class="caseSaringVideoItem-r">
      <div class="type">{{$t(caseSharingData.type)}}</div>
      <div class="name">{{$t(caseSharingData.name)}}</div>
      <div class="skill">{{$t(caseSharingData.skill)}}</div>
      <div class="process">{{$t(caseSharingData.process)}}</div>
      <div class="text">{{$t(caseSharingData.text)}}</div>
      <div class="bg_box"></div>
    </div>
    <div class="caseSaringVideoItem-mb">
      <div class="text">{{$t(caseSharingData.text)}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.caseSaringVideoItem{
  display: flex;
  &-l{
    width: 35.94%;
    z-index: 1;
    background: var(--indexColor2);
    box-shadow: 2px 4px 8px rgba(255, 120, 117, 0.35);
    img{
      width: 100%;
      margin-top: -40px;
    }
  }
  &-r{
    flex: 1;
    padding: 0 56px 0 47px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .type{
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 160%;
      display: flex;
      align-items: center;
      color: #666666;
      
    }
    .name{
      font-weight: 600;
      font-size: 34px;
      line-height: 160%;
      color: #666666;
      margin-top: 9px;
      z-index: 1;
      
    }
    .skill{
      font-weight: 700;
      font-size: 32px;
      line-height: 160%;
      color: var(--indexColor1);
      z-index: 1;
      
    }
    .process{
      font-weight: 700;
      font-size: 32px;
      line-height: 160%;
      color: #69B1FF;
      margin-top: 70px;
      z-index: 1;
      
    }
    .text{
      font-weight: 500;
      font-size: 24px;
      line-height: 160%;
      color: #666666;
      z-index: 1;
      text-align: justify;
      
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
  &-mb{
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1920px) {
  .caseSaringVideoItem{
    &-l{
      img{
        margin-top: -2.0833vw;
      }
    }
    &-r{
      padding: 0 2.9167vw 0 2.4479vw;
      .type{
        font-size: 1.7708vw;
      }
      .name{
        font-size: 1.7708vw;
        margin-top: .4688vw;
      }
      .skill{
        font-size: 1.6667vw;
      }
      .process{
        font-size: 1.6667vw;
        margin-top: 3.6458vw;
      }
      .text{
        font-size: 1.25vw;
      }
      .bg_box{
        width: 37.2917vw;
        height: 13.125vw;
        bottom: -1.5625vw;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .caseSaringVideoItem{
    flex-wrap: wrap;
    padding: 0 17px;
    position: relative;
    align-items: flex-start;
    display: block;
    &-l{
      width: 150px;
      display: inline-block;
      float: left;
      img{
        width: 100%;
        height: auto;
        margin-top: -20px;
      }
    }
    &-r{
      width: calc(100% - 150px);
      padding: 0;
      padding-left: 17px;
      
      display: initial;
      float: left;
      position: initial;
      .type{
        font-size: 15px;
        position: absolute;
        top: 130px;
        left: 9px;
        background: #00AEFF;
        color: #fff;
        padding: 2px 20px 2px 10px;
        clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
      }
      .name{
        font-size: 20px;
        margin-top: 0;
        font-size: 15px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%; /* 24px */
        color: var(--indexColor1);
      }
      .skill{
        font-size: 15px;
        font-weight: 600;
        margin-top: 0;
        color: var(--Blue-Deep, #00AEFF);
        display: inline-block;
      }
      .process{
        font-size: 15px;
        font-weight: 600;
        margin-top: 0;
        z-index: 1;
        color: var(--Blue-Deep, #00AEFF);
        display: inline;
      }
      .text{
        font-size: 1rem;
        z-index: 1;
        display: none;
      }
      .bg_box{
        display: none;
      }
    }
    &-mb{
      display: inline;
      z-index: 1;
      margin-top: 0;
      float: left;
      padding: 0;
      width: calc(100% - 150px);
      padding-left: 17px;
      .text{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 160%;
        color: #666666;
        display: initial;
      }
    }
  }
}
</style>