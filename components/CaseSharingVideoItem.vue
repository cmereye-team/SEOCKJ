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
      font-family: var(--contextFamily);
    }
    .name{
      font-weight: 600;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      margin-top: 9px;
      z-index: 1;
      font-family: var(--contextFamily);
    }
    .skill{
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: var(--indexColor1);
      z-index: 1;
      font-family: var(--contextFamily);
    }
    .process{
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: #69B1FF;
      margin-top: 70px;
      z-index: 1;
      font-family: var(--contextFamily);
    }
    .text{
      font-weight: 500;
      font-size: 18px;
      line-height: 160%;
      color: #666666;
      z-index: 1;
      text-align: justify;
      font-family: var(--contextFamily);
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

@media (min-width: 768px) and (max-width: 1452px) {
  // .caseSaringVideoItem{
  //   &-l{
  //     width: 45%;
  //     img{
  //       height: 350px;
  //     }
  //   }
  //   &-r{
  //     padding: 25px;
  //     .name{
  //       font-size: 1.8rem;
  //       margin-top: 10px;
  //     }
  //     .skill{
  //       font-size: 1.7rem;
  //     }
  //     .process{
  //       font-size: 1.7rem;
  //       margin-top: 50px;
  //     }
  //     .text{
  //       font-size: 1.4rem;
  //     }
  //     .bg_box{
  //       width: 109%;
  //     }
  //   }
  // }
}

@media screen and (max-width: 768px) {
  .caseSaringVideoItem{
    // flex-direction: column;
    flex-wrap: wrap;
    padding: 0 30px;
    position: relative;
    align-items: flex-end;
    &-l{
      // position: absolute;
      // margin-top: 25px;
      width: 167px;
      img{
        width: 100%;
        height: auto;
        margin-top: -20px;
      }
    }
    &-r{
      // width: calc(100% - 167px);
      margin-left: 23px;
      padding: 0;
      .type{
        font-size: 20px;
      }
      .name{
        font-size: 20px;
        margin-top: 0;
      }
      .skill{
        font-size: 18px;
        font-weight: 600;
        margin-top: 3px;
      }
      .process{
        font-size: 18px;
        font-weight: 600;
        margin-top: 9px;
        z-index: 1;
      }
      .text{
        font-size: 1rem;
        z-index: 1;
        display: none;
      }
      .bg_box{
        // width: 345px;
        // height: 150px;
        // right: 0;
        // top: 90px;
        // z-index: 0;
        display: none;
      }
    }
    &-mb{
      display: block;
      z-index: 1;
      margin-top: 23px;
      .text{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #666666;
      }
    }
  }
}
</style>