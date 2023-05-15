<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  stepData:{
    type: Object,
    default(){
      return {
        title: '',
        stepLists: [],
        isShowBottom: false,
        bottomText: ''
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
      <!-- <div class="step-in-boxCon"> -->

      <!-- :style="{
          'width': (stepData.stepLists.length && `100/${stepData.stepLists.length}%`)
        }" -->
      <div class="step-in-box"
        v-for="(step,stepIndex) in stepData.stepLists" :key="stepIndex">
        <div class="step-itemLists">
          <div class="step-itemLists-in" v-for="(stepChild,stepChildIndex) in step" :key="stepChildIndex">
            <div class="line"></div>
            <span class="round"></span>
            <span class="title">{{stepChild.title}}</span>
            <span class="text">{{stepChild.text}}</span>
          </div>
        </div>
        <div class="step-bottom" v-if="stepData.isShowBottom">
          {{stepData.bottomText}}
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>


<style lang="scss" scoped>
.step{
  margin-top: 130px;
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
        justify-content: center;
        align-items: center;
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
              &:last-child{
                padding-bottom: 0;
              }
              &:hover .round{
                background: #FFCECB;
              }
            }
            &-in:last-child{
              .line{
                height: calc(50% - 24px);
              }
            }
          }
          &:first-child{
            padding-right: 40px;
          }
          &:last-child{
            margin-left: 40px;
          }
          .step-bottom{
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 160%;
            color: #4D4D4D;
            width: 100%;
            text-align: center;
            margin-top: 50px;
          }
        }
      }
    }

@media (min-width: 768px) and (max-width: 1452px) {
  .step{
    margin-top: 8vw;
//         padding: 6.5vw 0 7.5vw;
//         &-in{
//           padding: 3vw 4.8vw;
//           &-box{
//             .line{
//               width: .3vw;
//               top: 1.5vw;
//               left: .75vw;
//             }
//             .step-itemLists{
//               &-in{
//                 height: 8vw;
//                 .round{
//                   width: 1.7vw;
//                   height: 1.7vw;
//                   margin-right: .95vw;
//                   margin-top: .4vw;
//                 }
//                 .title{
//                   font-size: 1.9vw;
//                   margin-right: 1.9vw;
//                 }
//                 .text{
//                   font-size: 1.4vw;
//                   padding-top: .7vw;
//                 }
//               }
//             }
//             &:first-child{
//               padding-right: 2.8vw;
//             }
//             &:last-child{
//               margin-left: 2.8vw;
//             }
//           }
//         }
      }
}
@media screen and (max-width: 768px) {
  .step{
        background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
        padding: 0 30px;
        margin-top: 90px;
        &-in{
          flex-direction: column;
          padding: 23px 0 23px 24px;
          margin-top: 28px;
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
            .step-bottom{
              font-weight: 500;
              font-size: 16px;
              padding-right: 25px;
              margin-top: 30px;
            }
          }
        }
      }
}
</style>