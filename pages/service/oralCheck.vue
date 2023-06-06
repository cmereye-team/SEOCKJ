<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('oralCheck')
useHead({
  title: "一般口腔檢查"
})

const orthodonticsIntroduceData = {
  title: '一般口腔檢查',
  content: '一般人常常忽略了定期檢查口腔的重要性，口腔容易滋生各種細菌，缺乏適當護理，有機會會引致各種問題，例如蛀牙、口腔潰瘍、牙周炎、牙齦炎等等。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/1adfbf26ba2d3e03.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/0c05f7b7469e4f0d.jpg',
  tabNavName: '一般口腔檢查',
}

const reasonData = {
  title: '關於一般口腔檢查',
  text: '一般口腔檢查的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/4077102eecb8a253.jpg',
  reasonLists:[
    {
      context: '定期口腔檢查能確保牙齒、牙齦健康，預防各種口腔疾病。',
    },
    {
      context: '牙科醫生透過檢查評估牙齒、牙齦、面頜及口腔組織的健康情況，能確保沒有潛在蛀牙、牙齦發炎或其他口腔問題。',
    }
  ],
  isMediumCW: true
}

const stepData = {
  title: '一般口腔檢查過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '檢查牙齒、牙齦健康'
      },
      {
        title: 'Step 2',
        text: '面部或頸項有否出現異常情況'
      },
      {
        title: 'Step 3',
        text: '評估整體口腔健康狀況及提供建議'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '需要時建議進行口腔X光造影檢查'
      },
      {
        title: 'Step 5',
        text: '提供口腔保健資訊'
      }
    ]
  ]
}

const problemData = {
  title: '一般口腔檢查常見問題',
  lists: [
    {
      Q: '需要多久接受一次口腔檢查？',
      A: '一般建議半年進行一次口腔檢查，減少引致各種口腔問題的機會。'
    },
    {
      Q: '孕婦可以進行口腔檢查或治療嗎？',
      A: '孕婦可以接受口腔檢查，但不宜在懷孕期間進行其他牙科治療。雖然牙科的X光機幅射量低，但在非緊急的情況下並不會建議使用。有見及此，所有非緊急的牙科治療應推遲至分娩後才進行。'
    }
  ]
}

const noticeData = {
  title: '服務包括',
  meritLists: [
    '口腔及牙齒檢查',
    '檢查口腔整體健康狀況包括檢查牙齦、牙齒、口腔組織和面頜骨，以確定是否需要進行進一步的治療。為了評估牙齒和牙齦的整體健康狀況，牙醫可能會建議進行牙齒X光檢查。',
  ],
  shortcomingLists: [
    '口腔 X光片',
    '口腔X光檢查一般分為傳統口內X光和口外全景X光兩種。口內X光可以提供牙齒、骨骼和口腔組織的詳細圖像，能夠幫助牙醫檢測蛀牙、觀察牙根、檢查牙齒四周的骨骼健康、診斷牙周病以及檢查正在生長的牙齒。',
  ],
}
let noticeCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper: any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

</script>


<template>
<div>
  <PageHeader :mbBg="'https://static.cmereye.com/imgs/2023/06/5fb010c120970570.jpg'" 
    :headerImg="'https://static.cmereye.com/imgs/2023/06/97c82cdfd887382a.png'"
    :headerBgImg="'https://static.cmereye.com/imgs/2023/06/387acf0954409624.jpg'"
    :titlePosition="'left'" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <!-- 服务 -->
      <div class="notice">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{noticeData.title}}</span>
          </div>
        </div>
        <div class="notice-in">
          <swiper
            :slidesPerView="windowWidth>768 ? '2': '1'"
            class="swiper-wrapper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="swiper-slide">
              <div class="box box-left">
                <div
                  class="box-in"
                  v-for="(meritItem,meritIndex) in noticeData.meritLists"
                  :key="meritIndex"
                >
                  <div>{{meritItem}}</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box box-right">
                <div
                  class="box-in"
                  v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists"
                  :key="shortcomingIndex"
                >
                  <div>{{shortcomingItem}}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="notice-line mbBox">
          <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="noticeCurrent"></PageSwiperPointLine>
        </div>
      </div>
    <!-- 过程 -->
    <ServiceStep :stepData="stepData" />
    <!-- 问题 -->
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.notice {
  width: 100%;
  max-width: 1450px;
  margin: 153px auto 0;
  &-in {
    width: 90%;
    margin: 30px auto 0;
    .box {
      .box-in {
        height: 278px;
        margin-top: 15px;
        display: flex;
        background: #fff1f0;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #4d4d4d;
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child {
          background: #ffa09e;
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
        }
        &:nth-of-type(2) {
          margin-top: 0;
        }
      }
    }
    .box-left {
      border-radius: 60px 0 0 60px;
      overflow: hidden;
    }
    .box-right {
      margin-left: 3px;
      border-radius: 0 60px 60px 0;
      overflow: hidden;
      .box-in {
        &:first-child {
          background: #ffcecb;
        }
      }
    }
  }
  &-line {
    width: 83px;
    margin: 22px auto;
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  .notice {
    &-in {
      .box {
        .box-in {
          font-size: 18px;
          padding: 0 4vw;
        }
      }
    }
  }
}

//md
@media only screen and (max-width: 760px) {
.notice {
    margin: 90px auto 0;
    &-in {
      width: 100%;
      margin: 34px 0 0;
      .box {
        margin-left: 30px;
        .box-in {
          font-weight: 500;
          font-size: 15px;
          height: 240px;
          margin-top: 9px;
          padding: 0 46px;
          &:first-child {
            height: 40px;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .box-right {
        margin-right: 30px;
        margin-left: 0;
      }
    }
  }
}
</style>