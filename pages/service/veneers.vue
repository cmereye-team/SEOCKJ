<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('veneers')
useHead({
  title: "瓷貼片｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '希瑪愛康健提供瓷貼片服務，透過度身訂製的纖薄瓷貼片黏附於牙齒表層，可以改善牙齒的形狀、長度、外觀和顏色，達到美白和整齊的效果。瓷貼片質地自然，可以有效地美化牙齒外觀，讓您擁有更自信的笑容。主要用於美容修復，可以選擇使用瓷貼片修復形狀或牙色不均的牙齒，達到理想的效果和色澤。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '瓷貼片 瓷貼片價格 瓷貼片推薦 全瓷牙貼價錢 牙貼片 牙瓷貼片 牙貼面 瓷牙貼片 牙貼美白 美白牙齒 希瑪愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const orthodonticsIntroduceData = {
  // title: '美容牙科',
  title: '瓷貼片',
  content: '瓷貼片有助改善牙齒的形狀、長度、外觀及顏色，達到牙齒整齊和美白的效果。把度身訂製的纖薄瓷貼片黏附於牙齒表層，效果自然，改善外觀。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/799e2153f93aa770.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/dd4df0400ac8c1c1.jpg',
  tabNavName: '瓷貼片',
  pageName: 'veneers',
}

const stepData = {
  title: '瓷貼片治療過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '醫生檢查牙齒及牙周健康，如存在口腔問題，必須先洗牙或接受牙周病治療後才能使用瓷貼片'
      },
      {
        title: 'Step 2',
        text: '確定進行療程'
      },
      {
        title: 'Step 3',
        text: '輕輕磨走牙齒表面的琺瑯質及把牙齒稍稍磨短'
      },
      {
        title: 'Step 4',
        text: '印製牙模及拍攝X光片'
      }
    ],
    [
      {
        title: 'Step 5',
        text: '設計及訂製瓷貼片，確保適合進行瓷牙貼片療程'
      },
      {
        title: 'Step 6',
        text: ' 把貼片粘到牙齒上'
      },
      {
        title: 'Step 7',
        text: '檢查貼片粘合程度及顏色'
      },
      {
        title: 'Step 8',
        text: '覆診，檢查牙齦狀況與貼片位置'
      }
    ]
  ]
}

const noteData = {
  title: '適合使用瓷貼片的人士',
  lists: [
    {
      name: '牙齒縫隙過大',
    },
    {
      name: '牙齒排列不整齊',
    },
    {
      name: '牙齒出現磨損、破碎或斷裂',
    },
    {
      name: '完成牙齒矯正後，牙齒仍有瑕疵',
    },
    {
      name: '牙齒變色，漂牙無法讓牙齒回復潔白',
    },
    {
      name: '牙齒形狀不美觀（如：牙齒過小、牙齒表面有凹坑或凸起）',
    }
  ]
}

const noticeData = {
  title: '選擇瓷貼片療程前你要知',
  meritLists: [
    '優點',
    '短時間內讓牙齒回復整齊美觀，效果自然',
    '需磨掉的牙齒面積較小，便能改善牙齒形狀、長度、弧度、顏色等',
    '貼片物料能減低食物色素沉積的問題',
    '不影響正常的咬合及咀嚼能力，容易適應'
  ],
  shortcomingLists: [
    '缺點',
    '有碎裂或脫落的危機',
    '如沒有緊密粘合到牙齒表面，容易導致蛀牙、牙齦發炎及牙周病等',
    '色澤及形狀不一定很自然'
  ]
}

const problemData = {
  title: '瓷貼片常見問題',
  lists: [
    {
      Q: '甚麼情況才需要瓷貼片？',
      A: '瓷貼片主要是為了美化牙齒，大多客人選擇以瓷貼片修復形狀或牙色不平均的牙齒。多建議同時期處理約6顆牙齒的範圍，達至理想效果及色澤。'
    },
    {
      Q: '瓷貼片的壽命有多長？',
      A: '視乎病人如何使用瓷貼片及其口腔清潔狀況而定，若病人有定期進行口腔檢查及洗牙，一般可使用頗長的時間。'
    },
    {
      Q: '如何護理瓷貼片？',
      A: '瓷貼片不需任何特別護理。只要注意口腔衛生習慣，定期進行口腔檢查及洗牙，就能好好保護瓷貼片。'
    }
  ]
}

let noticeCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

</script>


<template>
<div>
  <PageHeader 
    :mbBg="'https://static.cmereye.com/imgs/2023/06/473d12422a9fb1c8.jpg'"
    :headerImg="'https://static.cmereye.com/imgs/2023/06/08c3c37fae7cce23.png'"
    :headerBgImg="'https://static.cmereye.com/imgs/2023/06/d22dc37028a9e513.jpg'"
    :titlePosition="'left'" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 注意事项 -->
    <ServiceNote :noteData="noteData" />
    <!-- 步骤 -->
    <ServiceStep :stepData="stepData" />
    <div class="notice">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in">{{noticeData.title}}</div>
        <div class="dentistryServices-title-line"></div>
      </div>
      <div class="notice-in">
        <swiper :slidesPerView="windowWidth>768 ? '2': '1'" class="swiper-wrapper" @slideChange="onSlideChange">
            <swiper-slide class="swiper-slide">
              <div class="box box-left">
                <div class="box-in" v-for="(meritItem,meritIndex) in noticeData.meritLists" :key="meritIndex" >
                  <div>{{meritItem}}</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box box-right">
                <div class="box-in" v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists" :key="shortcomingIndex" >
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
.notice{
  width: 100%;
  max-width: 1450px;
  margin: 96px auto 0;
  &-in{
    width: 90%;
    margin: 70px auto 0;
    .box{
      .box-in{
        height: 112px;
        margin-top: 15px;
        display: flex;
        background: #FFF1F0;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #4D4D4D;
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        &:first-child{
          background: #FFA09E;
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
        }
        &:nth-of-type(2){
          margin-top: 0;
        }
      }
    }
    .box-left{
      border-radius:  60px 0 0 60px;
      overflow: hidden;
    }
    .box-right{
      margin-left: 3px;
      border-radius:  0 60px 60px 0;
      overflow: hidden;
      .box-in{
        &:nth-of-type(3){
          height: 239px;
        }
        &:first-child{
          background: #FFCECB;
        }
      }
    }
  }
  &-line{
    width: 83px;
    margin: 22px auto;
  }
}

@media (min-width: 768px) and (max-width: 1452px) {}
//md
@media only screen and (max-width: 760px) {
  .notice{
    &-in{
      width: 100%;
      margin: 34px 0 0;
      .box{
        margin-left: 30px;
        .box-in{
          font-weight: 500;
          font-size: 15px;
          height: 65px;
          margin-top: 9px;
          padding: 0 46px;
          &:first-child{
            height: 40px;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .box-right{
        margin-right: 30px;
        margin-left: 0;
        .box-in{
          &:nth-of-type(3){
            height: 139px;
          }
        }
      }
    }
  }
}
</style>