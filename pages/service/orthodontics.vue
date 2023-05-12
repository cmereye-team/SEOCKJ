<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: "矯齒"
})

const orthodonticsIntroduceData = {
  title: '矯齒',
  text: '矯齒，俗稱為「箍牙」',
  content: '治療除了能矯正不整齊排列的牙齒，改善外觀外，更能有助減低患上各種牙齒問題的風險。',
  mbImg: 'https://static.cmereye.com/imgs/2023/04/78f038c56a4dc38b.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/24685e7fb53221e2.jpg',
  tabNavName: '矯齒',
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
  ]
}


</script>


<template>
<div>
  <PageHeader /> 
  <div class="orthodonticsPage">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <ServiceStep :stepData="stepData" />
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

//md
@media only screen and (max-width: 760px) {
  .orthodonticsPage{
    padding: 90px 0;
  }
}
</style>