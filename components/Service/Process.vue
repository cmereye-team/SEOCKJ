<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  processData:{
    type: Object,
    default(){
      return{
        title: '',
        tabs: [],
        context: [],
        lists: []
      }
    }
  }
})

let swiperRef ={
  slideToLoop: (a,b)=>{}
}
const setSwiperRef = (swiper:any) => {
  swiperRef = swiper;
};

let processTabsActive = ref(0)
const handleProcessTabs = (_idx: number) =>{
  processTabsActive.value = _idx
  // console.log('_idx',_idx)
  swiperRef.slideToLoop(_idx, 0);
}

const onSlideProcessSwiperChange = (swiper:any) => {
  // console.log('swiperrealIndex',swiper.realIndex)
  processTabsActive.value = swiper.realIndex
}
</script>

<template>
    <div class="process">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{processData.title}}</div>
      </div>
      <div class="process-context pageCon">
        <span v-for="(processContextItem,processContextIndex) in processData.context" :key="processContextIndex">{{processContextItem}}</span>
      </div>
      <div class="process-tabs pageCon">
        <div :class="{'active': processTabsActive === processTabIndex}" @click="handleProcessTabs(processTabIndex)" v-for="(processTabItem,processTabIndex) in processData.tabs" :key="processTabIndex">
          {{processTabItem}}
        </div>
      </div>
      <div class="process-step pageCon">
        <Swiper
          class="swiperBox"
          :loop="true"
          :activeIndex="processTabsActive"
          @swiper="setSwiperRef"
          @slideChange="onSlideProcessSwiperChange"
        >
          <SwiperSlide v-for="(processItem,index) in processData.lists" :key="index">
            <div class="step-in">
              <div class="step-in-box"
                v-for="(step,stepIndex) in processItem.listItem" :key="stepIndex">
                <div class="step-itemLists">
                  <div class="step-itemLists-in" v-for="(stepChild,stepChildIndex) in step" :key="stepChildIndex">
                    <div :class="['line', { 'lineNone' : step.length === 2 && stepChildIndex === 1 }]"></div>
                    <span class="round"></span>
                    <span class="title">{{stepChild.title}}</span>
                    <span class="text">
                      <div>{{stepChild.text}}</div>
                      <div class="text-in" v-if="stepChild.textIn">{{stepChild.textIn}}</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>  
        </Swiper>
      </div>
    </div>
</template>


<style lang="scss" scoped>
.process{
  background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
  margin-top: 153px;
  padding-top: 70px;
  &-context{
    text-align: center;
    margin-top: 35px;
    span{
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      color: #4D4D4D;
    }
  }
  &-tabs{
    display: flex;
    margin-top: 56px;
    div{
      flex: 1;
      height: 69px;
      // line-height: 69px;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #FFFFFF;
      background: #FFDDDA;
      cursor: pointer;
      &:not(:last-child){
        margin-right: 3px;
      }
      &:hover{
        background: #FFA09E;
      }
      &.active{
        background: #FFA09E;
      }
    }
  }
  &-step{
    padding-bottom: 106px;
    .swiperBox{
      background: #fff;
      box-shadow: 0px 4px 8px #FFDDDA;
    }
    .step-in{
        width: 100%;
        background: #FFFFFF;
        display: flex;
        padding: 44px 65px;
        box-sizing: border-box;
        height: 100%;
        min-height: 460px;
        &-box{
          width: 50%;
          height: 100%;
          .step-itemLists{
            width: 100%;
            &-in{
              padding-bottom: 90px;
              display: flex;
              align-items: flex-start;
              cursor: pointer;
              position: relative;
              .line{
                width: 4px;
                height: 100%;
                background: #FFF1F0;
                position: absolute;
                top: 20px;
                left: 10px;
                z-index: 0;
                &.lineNone{
                  height: 0;
                }
              }
              .round{
                width: 24px;
                height: 24px;
                margin-right: 14px;
                margin-top: 8px;
                border-radius: 50%;
                background: #FFF1F0;
                display: block;
                z-index: 1;
              }
              .title{
                margin-right: 28px;
                font-weight: 700;
                font-size: 28px;
                line-height: 160%;
                color: #4D4D4D;
                display: block;
              }
              .text{
                flex: 1;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 160%;
                color: #4D4D4D;
                display: block;
                padding-top: 10px;
                &-in{
                  // color: #FFA09E;
                }
              }
              &:last-child{
                align-items: center;
                margin-bottom: 0;
                padding-bottom: 0;
                .line{
                  height: calc(50% - 24px);
                  &.lineNone{
                    height: 0;
                  }
                }
              }
              &:hover .round{
                background: #FFCECB;
              }
            }
          }
          &:first-child{
            padding-right: 40px;
          }
          &:last-child{
            margin-left: 40px;
            .step-itemLists{
              &-in{
                &:last-child{
                  align-items: flex-start;
                }
              }
            }
          }
        }
      }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .process{
    background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
    margin-top: 69px;
    padding-top: 44px;
    &-context{
      margin-top: 15px;
      span{
        font-weight: 500;
        font-size: 16px;
        width: 100%;
        display: inline-block;
        text-align: center;
      }
    }
    &-tabs{
      padding: 0 30px;
      margin-top: 33px;
      div{
        height: 40px;
        line-height: 18px;
        font-weight: 600;
        font-size: 15px;
        white-space: pre-wrap;
      }
    }
    &-step{
      padding: 0 30px 46px;
      .step-in{
        flex-direction: column;
        padding: 23px 0 23px 24px;
        // margin-top: 28px;
        &-box{
          width: 100%;
          .step-itemLists{
            &-in{
              height: auto;
              padding-right: 10px;
              padding-bottom: 40px;
              .line{
                width: 2px;
                left: 7px;
              }
              .round{
                width: 16px;
                height: 16px;
                margin-top: 4px;
                margin-right: 7px;
              }
              .title{
                font-weight: 500;
                font-size: 1rem;
                margin-right: 12px;
              }
              .text{
                font-weight: 500;
                font-size: 1rem;
                padding-top: 0;
              }
              &:first-child{
                margin-bottom: 0px;
                margin-top: 0;
              }
              &:last-child{
                align-items: flex-start;
                padding-bottom: 40px;
                .round{
                  margin-top: 4px;
                }
              }
            }
            &-in:last-child{
              .line{
                width: 2px;
                left: 7px;
                height: 100%;
              }
            }
          }
          &:first-child{
            padding-right: 0;
          }
          &:last-child{
            margin-left: 0;
            .step-itemLists{
              &-in:last-child{
                padding-bottom: 0;
                .line{
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>