<script lang="ts" setup>
import { defineProps } from "vue"
defineProps({
  userInfo:{
    type: Object,
    default(){
      return {
        name: '陳裳 Jason',
        skill: '種植牙齒療程',
        text: '安心、舒服、無痛',
        context: '人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。',
        imgUrl: 'https://static.cmereye.com/imgs/2023/05/cf650f7fe68dfed5.jpg',
      }
    }
  },
  userIndex: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div :class="['caseSaringImageItem', userIndex%2 === 0 ? 'odd': 'even']">
    <div class="caseSaringImageItem-t">
      <div class="caseSaringImageItem-t-img">
        <img :src="userInfo.imgUrl" alt="">
      </div>
      <div class="caseSaringImageItem-t-context">
        <span class="name">{{userInfo.name}}</span>
        <span class="skill">{{userInfo.skill}} </span>
        <span class="text">{{userInfo.text}}</span>
      </div>
    </div>
    <div class="caseSaringImageItem-b">
      {{userInfo.context}}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.caseSaringImageItem{
  width: 100%;
  background: #fff;
  padding: 40px;
  box-sizing: border-box;
  padding: 0 42px 25px 21px;
  &-t{
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-img{
      max-width: 176px;
      margin-right: 17px;
      img{
        margin: -45px auto 0;
        border-radius: 50%;
        border: 8px solid #fff;
      }
    }
    &-context{
      flex: 1;
      .name{
        font-weight: 600;
        font-size: 28px;
        line-height: 160%;
        color: #666666;
        display: block;
        margin-top: 14px;
      }
      .skill{
        margin-top: 2px;
        font-weight: 700;
        font-size: 21px;
        line-height: 160%;
        color: #FFA09E;
        display: block;
      }
      .text{
        margin-top: 2px;
        font-weight: 700;
        font-size: 21px;
        line-height: 160%;
        color: #FFA09E;
        display: block;
        text-align: right;
      }
    }
  }
  &-b{
    padding-left: 8px;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 160%;
    color: #666666;
    margin-top: 10px;
  }
} 

@media (min-width: 1000px) and (max-width: 1452px) {
  // .caseSaringImageItem{
  //   width: 49%;
  //   padding: 20px;
  //   height: auto;
  //   &-t{
  //     .text{
  //       font-size: 1.5rem;
  //     }
  //     &>div{
  //       top: 50%;
  //       .name{
  //         font-size: 1.6rem;
  //       }
  //       .skill{
  //         font-size: 1.5rem;
  //       }
  //     }
  //   }
  //   &-b{

  //   }
  // }
}

@media screen and (max-width: 1000px) {
  .caseSaringImageItem{
    width: 100%;
    padding: 18px 36px 18px 30px;
    height: auto;
    &-t{
      width: 100%;
      height: 125px;
      align-items: flex-end;
      &-img{
        max-width: 124px;
        margin-right: 24px;
        img{
          width: 125px;
          margin: 0;
          border-radius: 50%;
          border: none;
          display: inline-block;
          box-shadow: 0px 1px 2px #FFA09E;
        }
      }
      &-context{
        right: 0;
        top: 30px;
        .name{
          font-size: 20px;
          font-weight: 600;
        }
        .skill{
          font-size: 18px;
          font-weight: 600;
          text-align: right;
          margin-top: 0;
        }
        .text{
          font-size: 20px;
          margin-top: 10px;
          font-weight: 600;
          text-align: right;
        }
      }
    }
    &-b{
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      margin-top: 13px;
    }
    &.odd{
      background: linear-gradient(90deg, rgba(255, 204, 199, 0.7) -19.87%, rgba(255, 241, 240, 0) 62%);
    }
    &.even{
      background: linear-gradient(270deg, rgba(255, 241, 240, 0.7) 0.02%, rgba(255, 241, 240, 0) 62%);
    }
  }
}
</style>
