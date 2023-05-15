<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  introduceData:{
    type: Object,
    default(){
      return {
        title: '',
        text: '',
        content: '',
        mbImg: '',
        pcImg: '',
        tabNavName: '',
        pageName: ''
      }
    }
  }
})
</script>

<template>
  <div class="introduce bigPageCon">
    <div class="introduce-in" :style="{
      background: `url(${introduceData.pcImg}) no-repeat`,
      backgroundPosition: 'right top',
      backgroundSize: '75% auto'
      }">
      <div class="introduce-in-t mbBox">
        <img :src="introduceData.mbImg" alt="">
      </div>
      <div class="introduce-in-l pageCon">
        <div class="title">{{introduceData.title}}</div>
        <div class="text">{{introduceData.text}}</div>
        <div :class="['content',introduceData.pageName]">{{introduceData.content}}</div>
        <div :class="['tabNav',introduceData.pageName]">
          <nuxt-link :to="'/'"><span>主頁</span></nuxt-link>
          <nuxt-link :to="'/service'"><span>牙科服務</span></nuxt-link>
          <span>{{introduceData.tabNavName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
// 介绍
    .introduce{
      &-in{
        margin-top: 45px;
        &-l{
          color: #4D4D4D;
          padding-bottom: 90px;
          .title{
            font-weight: 700;
            font-size: 1.75rem;
          }
          .text{
            font-weight: 700;
            font-size: 3.125rem;
            margin-top: 19px;
          }
          .content{
            font-weight: 600;
            font-size: 1.75rem;
            width: 410px;
            margin-top: 68px;
            &.rootCanal,&.veneers{
              width: 634px;
            }
            &.invisalign{
              width: 650px;
              font-size: 1.68rem;
            }
          }
          .tabNav{
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 160%;
            color: #CBCBCB;
            margin-top: 83px;
            &.rootCanal{
              margin-top: 30px;
            }
            &.invisalign{
              margin-top: 30px;
            }
            a{
              &:not(:last-child)::after{
                content: '';
                width: 20px;
                height: 2px;
                margin: 0 10px;
                background: #CBCBCB;
                display: inline-block;
                vertical-align: middle;
                margin-top: -4px;
              }
            }
            &>span{
              cursor: pointer;
              color: #FFA09E;
            }
          }
        }
      }
    }
    @media (min-width: 768px) and (max-width: 1452px) {
      .introduce{
        &-in{
          margin-top: 3.5vw;
          &-l{
            padding-bottom: 7vw;
            .title{
              font-size: 1.75vw;
            }
            .text{
              font-size: 3vw;
              margin-top: .75vw;
            }
            .content{
              font-size: 1.7vw;
              width: 25vw;
              margin-top: 5vw;
              &.rootCanal,&.veneers{
                width: 38vw;
              }
              &.invisalign{
                width: 42vw;
                font-size: 1.6vw;
              }
            }
            .tabNav{
              font-size: 1.5vw;
              margin-top: 6vw;
            }
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      .introduce{
        &-in{
          background: none !important;
          &-t{
            width: 100%;
            img{
              width: 100%;
            }
          }
          &-l{
            padding-bottom: 0;
            .title{
              display: none;
            }
            .text{
              font-size: 1.625rem;
              padding: 0 30px;
              margin-top: 0;
            }
            .content{
              font-size: 1rem;
              width: 85%;
              padding: 0 30px;
              margin-top: 30px;
              &.rootCanal,&.veneers{
                width: 90%;
              }
              &.invisalign{
                width: 90%;
                font-size: 1rem;
              }
            }
            .tabNav{
              padding: 30px;
              font-size: 1rem;
              margin-top: 20px;
            }
          }
        }
      }
    }
</style>

