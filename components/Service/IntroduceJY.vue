<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  introduceData: {
    type: Object,
    default() {
      return {
        title: '',
        content: '',
        mbImg: '',
        pcImg: '',
        tabNavName: '',
        pageName: '',
      }
    },
  },
})
</script>

<template>
  <div class="introduce bigPageCon">
    <div class="introduce-in">
      <img :data-cfsrc="introduceData.pcImg" :srcset="`${introduceData.mbImg} 768w, ${introduceData.pcImg}`" :src="introduceData.pcImg" :alt="introduceData.title" :title="introduceData.title">
      <div class="introduce-in-content pageCon">
        <div class="introduce-in-content-in">
          <div>{{ $t(introduceData.title) }}</div>
          <div>{{ $t(introduceData.content) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.introduce{
  &-in{
    position: relative;
    &>img{
      width: 100%;
    }
    &-content{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      &-in{
        width: calc(668 / 1450 * 100%);
        &>div{
          color: var(--textColor);
          &:nth-of-type(1){
            font-size: 50px;
            line-height: 130%;
            margin-bottom: calc(50 / 668 * 100%);
            font-weight: 600;
          }
          &:nth-of-type(2){
            font-size: 28px;
            line-height: 160%;
            text-align: justify;
            white-space: pre-wrap;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .introduce{
    &-in{
      &-content{
        width: 80%;
        &-in{
          width: calc(668 / 1450 * 100%);
          &>div{
            &:nth-of-type(1){
              font-size: 2.6vw;
            }
            &:nth-of-type(2){
              font-size: 1.6vw;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .introduce{
    margin-top: 60px;
    &-in{
      &-content{
        position: initial;
        transform: none;
        &-in{
          width: 100%;
          &>div{
            padding: 0 30px;
            &:nth-of-type(1){
              font-size: 26px;
              line-height: 180%;
              margin-bottom: 10px;
            }
            &:nth-of-type(2){
              font-size: 16px;
              line-height: 200%;
            }
          }
        }
      }
    }
  }
}
</style>