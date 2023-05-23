<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('extraction')
useHead({
  title: "智慧齒脫除"
})

const orthodonticsIntroduceData = {
  title: '拔牙及智慧齒脫除',
  content: '',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/db8bbe88934fbe0e.jpg',
  tabNavName: '拔牙及智慧齒脫除',
  pageName: 'extraction'
}

const reasonData = {
  title: '關於拔牙',
  text: '一般需要拔牙的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/44b6fba4b7e68c38.jpg',
  reasonLists:[
    {
      context: '牙齒嚴重蛀壞或崩裂，無法修補',
    },
    {
      context: '嚴重牙周病，牙齒變得十分鬆動',
    },
    {
      context: '牙齒生長於不理想位置，令附近組織受損及感染',
    },
    {
      context: '牙齒外觀及結構出現問題',
    },
    {
      context: '配合牙齒矯正治療',
    }
  ],
  pageName: 'extraction'
}

const issueData = {
  title: ['智慧齒可能','導致的口腔問題：'],
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/c99ca0ddf73edcbc.jpg',
  issueLists: [
    '由於智慧齒生長位置較後，難以清潔，容易積聚牙菌膜，引致蛀牙',
    '當智慧齒出現橫生或斜生情況，鄰近的牙齒會受到壓力，嚴重更會令牙槽骨萎縮，甚至鬆脫',
    '如出現智慧齒阻生情況，牙齒會被牙齦覆蓋，因而令食物渣滓和細菌藏在牙齦和牙冠之間，造成牙齦發炎和腫脹。嚴重更會使整個面頰出現腫脹，進食時亦會感到痛楚，阻生的智慧齒一般需要進行手術方可拔除'
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '一般需咬緊棉花或紗布約三十分鐘至一小時止血，其間可如常吞口水',
    },
    {
      name: '進食後以溫水或鹽水輕輕漱口，保持傷口清潔',
    },
    {
      name: '避免觸碰傷口上的凝固血塊，引致出血',
    },
    {
      name: '避免食用堅硬和粗糙的食物',
    },
    {
      name: '避免飲用含酒精飲品',
    },
    {
      name: '避免吃過冷或過熱的食物',
    },
    {
      name: '避免大力漱口或吐痰'
    }
  ],
  text: '*拔牙後，傷口有機會出現腫脹，一般會數天後消退，可按醫生處方服藥或以冷敷消腫及紓緩不適。如傷口持續或大量出血，需盡快聯絡醫生，或視乎嚴重程度前往就近急症室求診。'
}

const processData = {
  title: '',
  lists: [
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '透過口腔檢查及口腔全景X光片，了解智慧齒生長的狀況及準確位置',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '注射局部麻醉藥',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '如智慧齒出現阻生，需把牙齦割開、翻起，將智慧齒切成數個部分再逐一移除',
            textIn: ''
          }
        ],
        [
          {
            title: 'Step 4',
            text: '清潔及縫合傷口',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '預約覆診',
            textIn: '手術後腫痛的情況會維持兩至三日，醫生會處方止痛藥和抗生素（需要時服用）舒緩情況，一般約一星期後便完全康復。'
          },
        ]
      ]
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '注射局部麻醉或全身麻醉藥（特殊情況下）',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '翻起牙齦',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '除去部分覆蓋牙齒的牙槽骨，使牙根外露',
            textIn: ''
          }
        ],
        [
          {
            title: 'Step 4',
            text: '把牙齒搖鬆或分割成幾部分取出',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '縫合傷口',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '咬緊棉花或紗布止血',
            textIn: ''
          },
        ]
      ]
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '局部麻醉',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '把牙齒搖鬆，拔掉',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '咬緊棉花或紗布止血',
            textIn: ''
          }
        ]
      ]
    },
  ]
}

let swiperRef ={
  slideTo: (a,b)=>{}
}
const setSwiperRef = (swiper:any) => {
  swiperRef = swiper;
};

let processTabsActive = ref(0)
const handleProcessTabs = (_idx: number) =>{
  processTabsActive.value = _idx
  swiperRef.slideTo(_idx, 0);
}

const onSlideProcessSwiperChange = (swiper:any) => {
  processTabsActive.value = swiper.realIndex
}




</script>


<template>
<div>
  <PageHeader />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <!-- 智慧齒可能導致的口腔問題 -->
    <div class="issue pageCon">
      <div class="issue-top">
        <span v-for="(titleItem,titleIndex) in issueData.title" :key="titleIndex">{{titleItem}}</span>
      </div>
      <div class="issue-bottom">
        <div class="issue-bottom-img">
          <img :src="issueData.imgUrl" alt="">
        </div>
        <div class="issue-bottom-lists">
          <div class="issue-bottom-lists-in" v-for="(issueItem,issueIndex) in issueData.issueLists" :key="issueIndex">
            <div>· </div>
            <div>{{issueItem}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 拔牙及智慧齒脫除過程 -->
    <div class="process">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">拔牙及智慧齒脫除過程</div>
      </div>
      <div class="process-context pageCon">
        <span>* 拔牙一般不需要進行手術，</span>
        <span>但若牙齒歪生或非常接近神經，則有機會需</span>
        <span>要進行手術式脫牙。</span>
      </div>
      <div class="process-tabs pageCon">
        <div :class="{'active': processTabsActive === 0}" @click="handleProcessTabs(0)">智慧齒脫除</div>
        <div :class="{'active': processTabsActive === 1}" @click="handleProcessTabs(1)">手術性脫牙</div>
        <div :class="{'active': processTabsActive === 2}" @click="handleProcessTabs(2)">非手術性脫牙</div>
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
    <!-- 療程後注意事項 -->
    <div class="note">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{noteData.title}}</div>
      </div>
      <div class="note-in">
        <div class="note-in-lists">
          <div class="note-in-lists-item" v-for="(item,index) in noteData.lists" :key="index">
            <div>·</div>
            <div>{{item.name}}</div>
          </div>
        </div>
        <div class="note-in-text">
          {{noteData.text}}
        </div>
      </div>
    </div>
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.note{
  padding: 96px 0 0;
  &-in{
    width: 100%;
    max-width: 1200px;
    margin: 35px auto;
    padding: 60px 0;
    background: #FFF1F0;
    box-shadow: 0px 4px 8px #FFDDDA;
    min-height: 378px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-lists{
      width: 80%;
      max-width: 1000px;
      &-item{
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 160%;
        color: #4D4D4D;
        display: flex;
        &>div:first-child{
          width: 20px;
        }
        &>div:last-child{
          flex: 1;
        }
      }
    }
    &-text{
      margin-top: 32px;
      width: 80%;
      max-width: 1000px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      color: #FFA09E;
    }
  }
}

.issue{
  margin-top: 126px;
  &-top{
    margin-left: 203px;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 160%;
    color: #4D4D4D;
    display: flex;
    align-items: center;
  }
  &-bottom{
    margin-top: 37px;
    margin-left: 203px;
    display: flex;
    &-img{
      width: 360px;
      height: 360px;
      margin-right: 49px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-lists{
      flex: 1;
      max-width: 750px;
      &-in{
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 160%;
        color: #4D4D4D;
        display: flex;
        &>div:first-child{
          width: 20px;
        }
        &>div:last-child{
          flex: 1;
        }
      }
    }
  }
}

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
      line-height: 69px;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
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
                  color: #FFA09E;
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

@media (min-width: 768px) and (max-width: 1452px) {
  .issue{
    margin-top: 10vw;
    &-top{
      margin-left: 13vw;
      font-size: 3vw;
    }
    &-bottom{
      margin-left: 13vw;
      margin-top: 2vw;
      &-img{
        width: 23vw;
        height: 23vw;
        margin-right: 2vw;
      }
      &-lists{
        max-width: 45vw;
        &-in{
          font-size: 1.7vw;
        }
      }
    }
  }
}

//md
@media only screen and (max-width: 760px) {
  .note{
    padding: 96px 30px 0;
    box-sizing: border-box;
    &-in{
      padding: 23px 15px;
      box-sizing: border-box;
      min-height: 0;
      &-lists{
        width: 100%;
        &-item{
          font-weight: 500;
          font-size: 16px;
          margin-top: 5px;
          &>div:first-child{
            width: 15px;
          }
        }
      }
      &-text{
        width: 100%;
        margin-top: 13px;
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
  .issue{
    margin-top: 69px;
    padding: 30px;
    &-top{
      margin-left: 0;
      font-weight: 700;
      font-size: 26px;
      display: flex;
      flex-direction: column;
    }
    &-bottom{
      margin-left: 0;
      margin-top: 34px;
      flex-direction: column;
      &-img{
        width: 100%;
        height: 100%;
        padding: 0 20px;
        margin-right: 0;
      }
      &-lists{
        width: 100%;
        max-width: 100%;
        margin-top: 15px;
        padding-right: 20px;
        &-in{
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }

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
        font-weight: 600;
        font-size: 15px;
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