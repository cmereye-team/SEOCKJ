<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  stepData:{
    type: Object,
    default(){
      return {
        title: ''
      }
    }
  }
})
</script>

<template>
  <div class="step">
    <div class="dentistryServices-title">
      <div class="dentistryServices-title-in">{{stepData.title}}</div>
      <div class="dentistryServices-title-line"></div>
    </div>
    <div class="step-in pageCon">
      <div class="step-in-box" v-for="(step,stepIndex) in stepData.stepLists" :key="stepIndex">
        <div class="line"></div>
        <div class="step-itemLists">
          <div class="step-itemLists-in" v-for="(stepChild,stepChildIndex) in step" :key="stepChildIndex">
            <span class="round"></span>
            <span class="title">{{stepChild.title}}</span>
            <span class="text">{{stepChild.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.step{
      background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
      padding: 96px 0 106px;
      &-in{
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 8px #FFDDDA;
        margin-top: 35px;
        display: flex;
        padding: 44px 65px;
        box-sizing: border-box;
        &-box{
          width: 50%;
          box-sizing: border-box;
          position: relative;
          .line{
            width: 4px;
            height: 80%;
            background: #FFF1F0;
            position: absolute;
            top: 20px;
            left: 10px;
            z-index: 0;
          }
          .step-itemLists{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &-in{
              // margin-bottom: 90px;
              height: 120px;
              display: flex;
              align-items: flex-start;
              cursor: pointer;
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
                font-weight: 600;
                font-size: 20px;
                line-height: 160%;
                color: #4D4D4D;
                display: block;
                padding-top: 10px;
              }
              &:last-child{
                align-items: center;
                margin-bottom: 0;
                .round{
                  margin-top: 0;
                }
                .text{
                  padding-top: 0;
                }
              }
              &:first-child{
                margin-bottom: 30px;
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
          }
        }
      }
    }

@media (min-width: 768px) and (max-width: 1452px) {
  .step{
        padding: 6.5vw 0 7.5vw;
        &-in{
          padding: 3vw 4.8vw;
          &-box{
            .line{
              width: .3vw;
              top: 1.5vw;
              left: .75vw;
            }
            .step-itemLists{
              &-in{
                height: 8vw;
                .round{
                  width: 1.7vw;
                  height: 1.7vw;
                  margin-right: .95vw;
                  margin-top: .4vw;
                }
                .title{
                  font-size: 1.9vw;
                  margin-right: 1.9vw;
                }
                .text{
                  font-size: 1.4vw;
                  padding-top: .7vw;
                }
              }
            }
            &:first-child{
              padding-right: 2.8vw;
            }
            &:last-child{
              margin-left: 2.8vw;
            }
          }
        }
      }
}
@media screen and (max-width: 768px) {
  .step{
        background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
        padding: 0 30px;
        &-in{
          flex-direction: column;
          padding: 23px 0 23px 24px;
          margin-top: 28px;
          &-box{
            width: 100%;
            .line{
              width: 2px;
              left: 7px;
            }
            .step-itemLists{
              &-in{
                height: auto;
                margin-top: 34px;
                padding-right: 10px;
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
                }
              }
            }
            &:first-child{
              padding-right: 0;
              .line{
                height: 120%;
                // top: 50px;
              }
            }
            &:last-child{
              margin-left: 0;
              margin-top: 34px;
            }
          }
        }
      }
}
</style>