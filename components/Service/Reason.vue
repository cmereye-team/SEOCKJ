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
    <div class="reason-in pageCon" :class="reasonData.pageName">
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
@media (min-width: 768px) and (max-width: 1452px) {
  .reason {
    padding: 3vw 0 0;
    &-in {
      &-l {
        background-size: 19vw 19vw;
        padding-left: 7vw;
        .text_one {
          font-size: 2vw;
          margin-top: 5vw;
        }
        .text_two {
          font-size: 3vw;
          margin-top: 1.4vw;
        }
        .image {
          width: 19vw;
          height: 19vw;
          margin: 0.5vw 6vw 0;
        }
      }
      &-r {
        margin-top: 10.5vw;
        &.wisdom-teeth-extraction{
          margin-left: 1.5vw;
        }
        & > div {
          font-size: 1.7vw;
          .context{
            &.smallFontSize{
              font-size: 1.5vw;
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
          width: 223px;
          height: 223px;
          margin: 20px 0 0 60px;
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