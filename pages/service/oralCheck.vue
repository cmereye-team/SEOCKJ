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


@media (min-width: 768px) and (max-width: 1452px) {}

//md
@media only screen and (max-width: 760px) {

}
</style>