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
        bottomText: '',
        remark: '',
        pageName: ''
      }
    }
  }
})
</script>

<template>
  <div :class="['step',stepData.pageName]">
    <div class="dentistryServices-title">
      <div class="dentistryServices-title-in bb">{{stepData.title}}</div>
    </div>
    <div :class="['step-remark',stepData.pageName]" v-if="stepData.remark">
      {{stepData.remark}}
    </div>
    <div :class="`${stepData.pageName}Bg`">
      <div :class="['step-in','pageCon',stepData.pageName]">
        <div :class="['step-in-box',stepData.stepLists.length === 1 ? 'oneBox' : '']"
          v-for="(step,stepIndex) in stepData.stepLists" :key="stepIndex">
          <div class="step-itemLists">
            <div :class="['step-itemLists-in',{'oneBoxListItem':stepData.stepLists.length === 1 ,'listInOneTiem': step.length === 1}]" v-for="(stepChild,stepChildIndex) in step" :key="stepChildIndex">
              <div :class="['line',{ 'lineNone' : step.length === 1 }]"></div>
              <span class="round"></span>
              <span class="title">{{stepChild.title}}</span>
              <span class="text">
                <div class="text-th" v-if="stepChild.textTh">{{stepChild.textTh}}</div>
                <div>{{stepChild.text}}</div>
              </span>
            </div>
          </div>
          <div class="step-bottom" v-if="stepIndex===1 && stepData.isShowBottom">
            {{stepData.bottomText}}
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.step{
      margin-top: 130px;
      background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
      padding: 96px 0 106px;
      &-remark{
        max-width: 830px;
        margin: 35px auto 0;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        text-align: center;
        color: #4D4D4D;
        &.scaling-and-polishing{
          max-width: 1042px;
        }
      }
      &-in{
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 8px #FFDDDA;
        margin-top: 35px;
        display: flex;
        padding: 44px 65px;
        box-sizing: border-box;
        justify-content: center;
        height: 100%;
        min-height: 460px;
        &-box{
          width: 50%;
          height: 100%;
          &.oneBox{
            width: 60%;
          }
          .step-itemLists{
            width: 100%;
            &-in{
              padding-bottom: 40px;
              min-height: 120px;
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
                font-weight: 600;
                font-size: 20px;
                line-height: 160%;
                color: #4D4D4D;
                display: block;
                padding-top: 10px;
                &-th{
                  font-style: normal;
                  font-weight: 700;
                  font-size: 28px;
                  padding-bottom: 20px;
                  color: #4D4D4D;
                }
              }
              &:last-child{
                align-items: center;
                margin-bottom: 0;
                padding-bottom: 0;
              }
              &.oneBoxListItem,&.listInOneTiem{
                align-items: flex-start;
              }
              &.oneBoxListItem:last-child{
                .line{
                  height: 0;
                }
              }
              &:hover .round{
                background: #FFCECB;
              }
            }
            &-in:last-child{
              .line{
                height: calc(50% - 24px);
                &.lineNone{
                  height: 0;
                }
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
        &.scaling-and-polishing{
          min-height: 300px;
        }
        &.invisalign{
          min-height: 300px;
        }
      }
      .invisalignBg{
        background: url(https://static.cmereye.com/imgs/2023/05/ed92fb119afcb678.png),
        linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
      }
      &.invisalign{
        background: none;
        padding: 0 0 106px;
      }
      .rootCanalBg{
        background: none;
      }
      &.rootCanal{
        background: none;
        padding: 0 30px;
      }
    }

@media (min-width: 768px) and (max-width: 1452px) {
  .step{
    margin-top: 8vw;
    &-in{
       &-box{
         &.oneBox{
           width: 50vw;
         }
       }
    }
  }
}
@media screen and (max-width: 768px) {
  .step{
        background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
        padding: 0 30px;
        margin-top: 90px;
        &-remark{
          margin: 20px auto 0;
          font-size: 17px;
        }
        &-in{
          flex-direction: column;
          padding: 23px 0 23px 24px;
          margin-top: 28px;
          &-box{
            width: 100%;
            &.oneBox{
              width: 100%;
            }
            .step-itemLists{
              &-in{
                height: auto;
                padding-right: 10px;
                padding-bottom: 40px;
                min-height: 0;
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
                  &-th{
                    font-weight: 700;
                    font-size: 16px;
                    padding-bottom: 5px;
                  }
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
        &.invisalign{
          background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
          padding: 0 30px;
        }
      }
}
</style>