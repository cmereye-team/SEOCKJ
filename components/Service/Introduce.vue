<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  introduceData:{
    type: Object,
    default(){
      return {
        title: '',
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
    <div :class="['introduce-in',{'noTitle':!introduceData.title}]" :style="{
      background: `url(${introduceData.pcImg}) no-repeat`,
      backgroundPosition: 'right top',
      backgroundSize: 'auto 100%'
      }">
      <div class="tabNav noTitle pageCon">
        <nuxt-link :to="'/'"><span>主頁</span></nuxt-link>
        <nuxt-link :to="'/service'"><span>牙科服務</span></nuxt-link>
        <span>{{introduceData.tabNavName}}</span>
      </div>
      <div class="introduce-in-t mbBox">
        <img :src="introduceData.mbImg" alt="">
      </div>
      <div class="introduce-in-l pageCon">
        <div :class="['title',introduceData.pageName]">{{introduceData.title}}</div>
        <div :class="['content',introduceData.pageName]">{{introduceData.content}}</div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
// 介绍
    .introduce{
      &-in{
        margin-top: 45px;
        height: 32.709vw;
        max-height: 628px;
        &-l{
          color: #4D4D4D;
          padding-bottom: 90px;
          .title{
            font-weight: 700;
            font-size: 50px;
            margin-top: 96px;
            &.extraction{
              margin-top: 15%;
            }
            &.teethWhitening{
              margin-top: 15%;
            }
            &.dentalFillings{
              margin-top: 15%;
            }
          }
          .content{
            font-weight: 600;
            font-size: 1.75rem;
            max-width: 650px;
            width: 650px;
            margin-top: 68px;
            &.orthodontics{
              width: 409px;
            }
            &.teethWhitening{
              margin-top: 0;
            }
          }
        }
      }
    }
    .tabNav{
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 160%;
      color: #CBCBCB;
      margin-top: 83px;
      &.noTitle{
        margin-top: 0;
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
    @media (min-width: 768px) and (max-width: 1452px) {
      .introduce{
        &-in{
          margin-top: 3.5vw;
          &-l{
            padding-bottom: 7vw;
            .title{
              font-size: 2.2vw;
              margin-top: 6vw;
            }
            .content{
              font-size: 1.7vw;
              width: 33.85vw;
              margin-top: 4vw;
              &.orthodontics{
                width: 25vw;
              }
            }
            
          }
        }
      }
      .tabNav{
        font-size: 1.5vw;
        margin-top: 6vw;
      }
    }
    @media screen and (max-width: 768px) {
      .introduce{
        &-in{
          height: auto;
          max-height: 300%;
          background: none !important;
          margin-top: 0;
          &.noTitle{
            margin-top: 0;
          }
          &-t{
            width: 100%;
            img{
              width: 100%;
            }
          }
          &-l{
            padding-bottom: 0;
            .title{
              padding: 0 30px;
              font-weight: 700;
              font-size: 26px;
              margin-top: 0;
              &.extraction{
                margin-top: 0;
              }
              &.teethWhitening{
                margin-top: 0;
              }
              &.dentalFillings{
                margin-top: 0;
              }
            }
            .content{
              font-size: 1rem;
              width: 95%;
              padding: 0 30px;
              margin-top: 30px;
              &.orthodontics{
                width: 95%;
              }
            }
            
          }
        }
      }
      .tabNav{
        padding: 30px;
        font-size: 1rem;
        margin-top: 20px;
      }
    }
</style>

