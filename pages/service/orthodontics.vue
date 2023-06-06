<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: "矯齒(箍牙)"
})

const orthodonticsIntroduceData = {
  title: '矯齒(箍牙)',
  content: '治療除了能矯正不整齊排列的牙齒，改善外觀外，更能有助減低患上各種牙齒問題的風險。',
  mbImg: 'https://static.cmereye.com/imgs/2023/04/78f038c56a4dc38b.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/9993e95bc1c6a9c9.jpg',
  tabNavName: '矯齒(箍牙)',
  pageName: 'orthodontics'
}

const reasonData = {
  title: '關於矯齒',
  text: '為什麼要矯齒？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/39b4d45b6b7bc2ab.jpg',
  reasonLists:[
    {
      context: '因先天或其他因素引致上顎或下顎較為突出，影響臉型',
    },
    {
      context: '下顎咬合不正的情況，容易導致蛀牙、影響進食及口腔健康',
    },
    {
      context: '牙齒排列不整，例如前後重疊、高低不等，影響進食、發音、清潔等，更容易引致牙周病等情況',
    }
  ]
}

const stepData = {
  title: '矯齒(箍牙)過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '醫生會先進行檢查及評估，確認矯齒的需要'
      },
      {
        title: 'Step 2',
        text: '拍攝牙齒外觀照片，包括全口腔及側面X光照片，以印製牙模'
      },
      {
        title: 'Step 3',
        text: '醫生講解情況及治療方案'
      },
      {
        title: 'Step 4',
        text: '配戴牙箍及定期覆診'
      },
      {
        title: 'Step 5',
        text: '矯齒完成後，需定期覆診，晚上佩戴固定器，防止牙齒移位'
      }
    ]
  ],
  isShowBottom: true,
  bottomText: '*不建議牙齒還沒完成發育、智慧齒還沒長出的人士接受牙齒矯正治療'
}

const differData = {
  title: '傳統箍牙VS透明箍牙大有不同！',
  text: '箍牙主要可分為三類，固定式外箍、內箍及透明配戴式牙箍。矯正時間因人而異，一般為一年至一年半左右，複雜個案需要兩年或以上。心思思想箍牙，但你又知唔知道各種牙箍的分別？',
  firstTextTh: '固定式外箍/內箍',
  secondTextTh: '透明配戴式牙箍',
  listDatas: [
    {
      name: '原理',
      firstText: '將矯正器黏貼在牙齒表面，以鋼絲連上牙釘，施加外力移動牙齒',
      secondText: '運用電腦模擬牙齒移動位置，按牙齒移動速度，定期更換度身訂造牙箍，慢慢移動牙齒'
    },
    {
      name: '物料',
      firstText: '金屬/ 搪瓷/ 樹脂',
      secondText: '醫學塑膠'
    },
    {
      name: '拆卸',
      firstText: '不能自行拆卸',
      secondText: '能隨時戴上及脫下'
    },
    {
      name: '美觀',
      isArrayType: true,
      firstText: ['• 牙箍固定於牙齒外側會外露(固定式外箍)','• 牙箍固定於牙齒內側較難察覺(固定式內箍)'],
      secondText: '透明牙箍，近乎隱形，極難察覺'
    },
    {
      name: '清潔',
      firstText: '需以工具輔助清潔矯正器與鋼絲死角',
      secondText: '拆卸後獨立清洗'
    },
    {
      name: '成效',
      firstText: '比較適合齒列嚴重不正的人士',
      secondText: '適合輕度或中度齒列不正的人士'
    },
    {
      name: '其他',
      firstText: '牙箍可能會引起不適',
      secondText: '隱形牙套表面平滑'
    }
  ]
}

const problemData = {
  title: '矯齒(箍牙)常見問題',
  lists: [
    {
      Q: '甚麼年紀適合接受矯齒治療？',
      A: '不論甚麼年紀都能接受矯齒治療，醫生可評估口腔情況，而建議相關的療程。'
    },
    {
      Q: '甚麼是完美笑容的黃金方程式？',
      A: '完美笑容的黃金方程式包括：牙齒排列整齊、大小適中、色澤自然亮白，中間線上下對齊及牙齦健康。'
    },
    {
      Q: '透明牙箍是否有效？',
      A: '透明牙箍能處理大部分牙齒排列不齊的情況，如：太擠、太疏，或矯正後再次移位的情況。'
    },
    {
      Q: '透明牙箍如何矯正牙齒？',
      A: '透明牙箍的療程是先以數碼系統拍攝影像，利用3D電腦技術，模擬及預測整個矯齒過程。客人同意療程後，供應商會度身訂造一系列透明牙箍。客人透過每日佩戴至少22小時，約每兩週更換新牙箍，就能逐漸把牙齒調整至理想位置。'
    },
    {
      Q: '佩戴透明牙箍前有甚麼要注意？',
      A: '透明牙箍是一個自我監察的療程，每天佩戴至少22小時，除了進食、刷牙等時間外，任何時間都要戴上牙套，並定時覆診及更換新牙箍。'
    },
    {
      Q: '透明牙箍的療程要多長時間？',
      A: '與傳統牙齒矯正治療一樣，需視乎每個個案的複雜程度而定。一般透明牙箍的療程時間約為六個月至兩年不等。'
    }
  ]
}


</script>


<template>
<div>
  <PageHeader
    :mbBg="'https://static.cmereye.com/imgs/2023/06/0c4c600f0e07547d.jpg'"
    :headerImg="'https://static.cmereye.com/imgs/2023/06/853005c3e17e4c2a.png'"
    :headerBgImg="'https://static.cmereye.com/imgs/2023/06/6d1016f37061df54.png'"
    :titlePosition="'left'" /> 
  <div class="orthodonticsPage">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <!-- 問題困擾 -->
    <div class="bp">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          <span>您是否有牙齒不齊問題困擾？</span>
        </div>
      </div>
      <div class="bp-swiper mbBox">

      </div>
      <div class="bp-text">
        在當今競爭激烈的社會中，個人形象已成為一種重要的競爭力。不論是在現實社會還是網絡中，個人形象都能給人留下深刻的印象，對於找工作、交朋友、學習、升職等方面都有著不可忽視的影響。牙齒不僅直接影響面容和微笑，更能夠反映一個人的健康和生活態度。所以，關注自己的形象不但是邁向成功的第一步，更是建立自信微笑的重要一步！
      </div>
      <div class="bp-lists pcBox">
        <div class="bp-lists-in" v-for="item in 7" :key="item">
          <div class="bp-lists-in-title">前排齒列擠擁</div>
          <img src="https://static.cmereye.com/imgs/2023/06/9e889b19a082e947.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- 注意 -->
    <ServiceStep :stepData="stepData" />
    <!-- 区别 -->
    <ServiceDiffer :differData="differData" />
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

.orthodonticsPage{
  background: #fff;
  padding: 140px 0;
}

.bp{
  margin-top: 176px;
  &-text{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #4D4D4D;
    width: 100%;
    max-width: 1042px;
    text-align: center;
    margin: 36px auto 0;
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 60px auto;
    &-in{
      min-width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 39.5px 95.69px;
      box-sizing: border-box;
      align-items: center;
      &-title{
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        background: #FFA09E;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 20px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 20px solid;
          border-color: #FFA09E transparent transparent transparent;
        }
      }
      img{
        margin-top: 30px;
        width: 100%;
      }
      &:last-child{
        padding: 0 39.5px;
      }
    }
  }
}

//md
@media only screen and (max-width: 760px) {
  .orthodonticsPage{
    padding: 90px 0;
  }
  
}
</style>