<script lang="ts" setup>
import { defineProps } from 'vue'
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
            // hideIcon: true,
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
    <div class="reason-in pageCon">
      <div class="reason-in-l">
        <div class="text_one">{{reasonData.title}}</div>
        <div class="text_two">{{reasonData.text}}</div>
        <div class="image">
          <img :src="reasonData.imgUrl" />
        </div>
      </div>
      <div :class="['reason-in-r',reasonData.pageName,{'mediumCW': reasonData.isMediumCW}]">
        <div v-for="(reason,reasonIndex) in reasonData.reasonLists" :key="reasonIndex">
          <div class="icon">
            {{reason.hideIcon ? '': '· '}}
          </div>
          <div :class="{'context':true,'smallFontSize': reason.isSmallFS}">
            {{reason.context}}
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
    &-l {
      background: linear-gradient(135deg, #fff1f0 2%, #ffddda 75%) no-repeat;
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
        font-size: 3.125rem;
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
      // justify-content: center;
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
      &.children-dentistry{
        margin-left: -10%;
        margin-top: 18%;
      }
      & > div {
        font-weight: 600;
        font-size: 1.75rem;
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
      }
    }
  }
}
</style>