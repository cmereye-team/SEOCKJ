<script lang="ts" setup>

defineProps({
  reasonData: {
    type: Object,
    default(){
      return {
        title: '',
        text: '',
        imgUrl: '',
        reasonLists:[
          {
            context: '',
            pageName: '',
            isSmallFS: false,
            isMediumCW: false
          }
        ]
      }
    }
  },
})
</script>

<template>
  <div class="reason">
    <div class="reason-in smallPageCon" :class="reasonData.pageName">
      <div class="reason-in-l">
        <div class="text_one">{{$t(reasonData.title)}}</div>
        <div class="text_two">{{$t(reasonData.text)}}</div>
        <div class="image">
          <img :src="reasonData.imgUrl" />
        </div>
      </div>
      <div v-if="reasonData.pageName !== 'implant'" :class="['reason-in-r',reasonData.pageName,{'mediumCW': reasonData.isMediumCW}]">
        <div v-for="(reason,reasonIndex) in reasonData.reasonLists" :key="reasonIndex">
          <div class="icon">
            {{reason.hideIcon ? '': '· '}}
          </div>
          <div :class="{'context':true,'smallFontSize': reason.isSmallFS}">
            {{$t(reason.context)}}
          </div>
        </div>
      </div>
      <div v-else :class="['reason-in-r',reasonData.pageName]">
        <div v-for="(reason,reasonIndex) in reasonData.reasonLists" :key="reasonIndex">
          <div class="title">
            <span>{{reasonIndex + 1}}</span>{{reason.title}}
          </div>
          <div :class="{'context':true}">
            {{$t(reason.context)}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.reason {
  padding: 108px 0 0;
  &-in {
    display: flex;
    &.implant{
      margin-top: 100px;
      align-items: center;
      .reason-in-l{
        .text_two {
          font-size: 50px;
        }
      }
    }
    &-l {
      // background: linear-gradient(135deg, rgba(255, 255, 255, 0.30) 2%, #ffddda 75%) no-repeat;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.30) 2%, #FEE6F1 75%) no-repeat;
      background-size: 287px 287px;
      padding-left: 103px;
      & > div {
        width: 100%;
        color: #666666;
        line-height: 160%;
        font-weight: 700;
      }
      .text_one {
        font-size: 1.75rem;
        margin-top: 83px;
      }
      .text_two {
        font-size: 30px;
        margin-top: 19px;
      }
      .image {
        width: 287px;
        height: 287px;
        margin: 8px 100px 0 100px;
      }
    }
    &-r {
      display: flex;
      flex-direction: column;
      max-width: 520px;
      margin-top: 155px;
      &.wisdom-teeth-extraction{
        margin-left: 22px;
      }
      &.periodontal{
        max-width: 560px;
      }
      &.toothtray{
        max-width: 680px;
      }
      &.mediumCW{
        max-width: 663px;
      }
      & > div {
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        display: flex;
        .icon{
          width: 20px;
          display: block;
        }
        .context{
          flex: 1;
          word-wrap: normal;
          &.smallFontSize{
            font-size: 24px;
            margin-bottom: 24px;
          }
        }
      }
      &.implant{
        max-width: 100%;
        margin-top: 0;
        &>div{
          display: flex;
          flex-direction: column;
          &:not(:last-child){
            margin-bottom: 40px;
          }
          .title{
            color: var(--indexColor1);
            font-size: 32px;
            font-weight: 900;
            span{
              font-size: 50px;
              padding-right: 10px;
              position: relative;
              z-index: 1;
              &::before{
                content: "";
                width: 50px;
                height: 50px;
                background: #FFEBF4;
                position: absolute;
                right: 10px;
                bottom: 20px;
                z-index: -1;
                border-radius: 50%;
              }
            }
          }
          .context{
            font-size: 26px;
            margin-top: 25px;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
.reason {
  padding: 5.625vw 0 0;
  &-in {
    &.implant{
      margin-top: 5.2083vw;
      .reason-in-l{
        .text_two {
          font-size: 2.6042vw;
        }
      }
    }
    &-l {
      background-size: 14.9479vw 14.9479vw;
      padding-left: 5.3646vw;
      .text_one {
        font-size: 1.4583vw;
        margin-top: 4.3229vw;
      }
      .text_two {
        font-size: 1.5625vw;
        margin-top: .9896vw;
      }
      .image {
        width: 14.9479vw;
        height: 14.9479vw;
        margin: .4167vw 5.2083vw 0 5.2083vw;
      }
    }
    &-r {
      max-width: 27.0833vw;
      margin-top: 8.0729vw;
      &.wisdom-teeth-extraction{
        margin-left: 1.1458vw;
      }
      &.periodontal{
        max-width: 29.1667vw;
      }
      &.toothtray{
        max-width: 35.4167vw;
      }
      &.mediumCW{
        max-width: 34.5313vw;
      }
      & > div {
        font-size: 1.0417vw;
        .icon{
          width: 1.0417vw;
        }
        .context{
          &.smallFontSize{
            font-size: 1.25vw;
            margin-bottom: 1.25vw;
          }
        }
      }
      &.implant{
        &>div{
          &:not(:last-child){
            margin-bottom: 2.0833vw;
          }
          .title{
            font-size: 1.6667vw;
            span{
              font-size: 2.6042vw;
              padding-right: .5208vw;
              &::before{
                width: 2.6042vw;
                height: 2.6042vw;
                right: .5208vw;
                bottom: 1.0417vw;
              }
            }
          }
          .context{
            font-size: 1.3542vw;
            margin-top: 1.3021vw;
          }
        }
      }
    }
  }
}
}
@media screen and (max-width: 768px) {
  .reason {
    width: 100%;
    padding: 60px 30px 0;
    box-sizing: border-box;
    &-in {
      width: 100%;
      flex-direction: column;
       &.implant{
        margin-top: 0;
        align-items: center;
        .reason-in-l{
          .text_two {
            font-size: 26px;
          }
        }
      }
      &-l {
        background-size: 204px 204px;
        padding-left: 42px;
        .text_one {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 53px;
        }
        .text_two {
          font-size: 1.625rem;
          margin-top: 13px;
        }
        .image {
          max-width: 223px;
          width: calc(223 / 288 * 100%);
          height: auto;
          margin: 20px 0 0 calc(60 / 288 * 100%);
        }
      }
      &-r {
        margin-top: 28px;
        &.wisdom-teeth-extraction{
          margin-left: 0;
        }
        & > div {
          font-weight: 500;
          font-size: 1rem;
          .context{
            &.smallFontSize{
              font-size: 14px;
              margin-bottom: 12px;
            }
          }
        }
        &.implant{
          margin-top: 30px;
          margin-left: 20px;
          &>div{
            &:not(:last-child){
              margin-bottom: 30px;
            }
            .title{
              font-size: 21px;
              span{
                font-size: 41px;
                &::before{
                  width: 35px;
                  height: 35px;
                  bottom: 15px;
                }
              }
            }
            .context{
              margin-top: 5px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>