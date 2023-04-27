<script lang="ts" setup>

const noteLists = [
  [
    {
      name: '輕咬紗布止血'
    },
    {
      name: '28小時內冰敷'
    },
    {
      name: '48小時內熱敷'
    },
    {
      name: '依指示按時服藥'
    }
  ],
  [
    {
      name: '避免飲酒及抽煙'
    },
    {
      name: '進食流質食物'
    },
    {
      name: '避免激烈運動'
    },
    {
      name: '謹記定期複診'
    }
  ]
]

const stepLists = [
  [
    {
      title: 'Step 1',
      text: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
    },
    {
      title: 'Step 2',
      text: '注射麻醉藥'
    },
    {
      title: 'Step 3',
      text: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
    }
  ],
  [
    {
      title: 'Step 4',
      text: '等待2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽'
    },
    {
      title: 'Step 5',
      text: '牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒'
    },
    {
      title: 'Step 6',
      text: '將義齒固定在植體上，補上缺去的牙齒'
    }
  ]
]

const reasonLists = ['常見種植牙的原因傳統治療方法\n(牙套、牙橋及假牙托等)','無法修復缺牙的情況','缺牙影響儀容，嚴重甚至會令面部變形','缺牙容易令牙齒移位，影響咬合、發音','改善咀嚼問題，回復正常飲食']








</script>


<template>
  <div class="bigPageCon">
    <PageHeader :headerBg="'https://static.cmereye.com/imgs/2023/04/306827fc69c5113d.jpg'" :titlePosition="'left'" />
    <div class="dentistryServices">
      <!-- 介绍 -->
      <div class="introduce">
        <div class="index_title pageCon">牙科服務</div>
        <div class="introduce-in">
          <div class="introduce-in-l pageCon">
            <div class="title">種植牙科</div>
            <div class="text">種植牙，俗稱為「種牙」</div>
            <div class="content">牙醫會把植體植入病人的牙槽骨內，待骨整合後用以支撐上面的牙套。</div>
            <div class="tabNav">
              <span>主頁</span>
              <span>牙科服務</span>
              <span>種植牙科</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 原因 -->
      <div class="reason">
        <div class="reason-in pageCon">
          <div class="reason-in-l">
            <div class="text_one">關於植牙</div>
            <div class="text_two">常見種植牙的原因？</div>
            <div class="image">
              <img src="@/assets/images/dentalServices_reasonbg.jpg" alt="">
            </div>
          </div>
          <div class="reason-in-r">
            <div v-for="(reason,reasonIndex) in reasonLists" :key="reasonIndex">
              · {{reason}}
            </div>
          </div>
        </div>
      </div>
      <!-- 六个步骤 -->
      <div class="step">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in">認識種植牙的六個步驟</div>
          <div class="dentistryServices-title-line"></div>
        </div>
        <div class="step-in pageCon">
          <div class="step-in-box" v-for="(step,stepIndex) in stepLists" :key="stepIndex">
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
      <!-- 注意事项 -->
      <div class="note">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in">種植牙後注意事項</div>
          <div class="dentistryServices-title-line"></div>
        </div>
        <div class="note-in pageCon">
          <div class="note-in-ul" v-for="(note,noteIndex) in noteLists" :key="noteIndex">
            <div class="note-in-ul-li" v-for="(noteChild,noteChildIndex) in note" :key="noteChildIndex">
              <img src="@/assets/images/note01.png" alt="">
              <div>{{noteChild.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .dentistryServices{
    background: #fff;
    padding: 143px 0;
    // 介绍
    .introduce{
      &-in{
        margin-top: 45px;
        &-l{
          color: #4D4D4D;
          padding-bottom: 90px;
          background: url(@/assets/images/dentistryServices_bg.jpg) no-repeat;
          // background-size: 100% 100%;
          background-position: right;
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
          }
          .tabNav{
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 160%;
            color: #CBCBCB;
            margin-top: 83px;
            span{
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
              &:last-child{
                color: #FFA09E;
              }
            }
          }
        }
      }
    }
    //原因
    .reason{
      padding: 33px 0 130px;
      &-in{
        display: flex;
        &-l{
          background: linear-gradient(135deg, #FFF1F0 2%, #FFDDDA 75%) no-repeat;
          background-size: 287px 287px;
          padding-left: 103px;
          &>div{
            width: 100%;
            color: #4D4D4D;
            line-height: 160%;
            font-weight: 700;
          }
          .text_one{
            font-size: 1.75rem;
            margin-top: 83px;
          }
          .text_two{
            font-size: 3.125rem;
            margin-top: 19px;
          }
          .image{
            width: 287px;
            height: 287px;
            margin-top: 8px;
            margin-left: 100px;
          }
        }
        &-r{
          display: flex;
          justify-content: center;
          flex-direction: column;
          &>div{
            font-weight: 600;
            font-size: 1.75rem;
            line-height: 160%;
            color: #4D4D4D;
          }
        }
      }
    }
    //六个步骤
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
    //注意事项
    .note{
      margin-top: 96px;
      &-in{
        margin-top: 54px;
        width: 100%;
        &-ul{
          display: flex;
          justify-content: center;
          margin-top: 12px;
          &-li{
            width: 184px;
            margin-right: 88px;
            img{
              width: 100%;
              margin-bottom: 12px;
            }
            &:last-child{
              margin-right: 0;
            }
            text-align: center;
            font-weight: 600;
            font-size: 24px;
            line-height: 160%;
            color: #4D4D4D;
          }
        }
      }
    }
    &-title{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &-in{
        font-weight: 700;
        font-size: 50px;
        line-height: 160%;
        color: #4D4D4D;
      }
      &-line{
        width: 100px;
        height: 5px;
        background: #FFA09E;
        border-radius: 2px;
      }
    }
  }
  @media screen and (max-width: 768px) {
  .dentistryServices{
      padding-bottom: 90px;
    }
  }
</style>