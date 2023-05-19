<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: "矯齒"
})

const orthodonticsIntroduceData = {
  title: '矯齒',
  content: '治療除了能矯正不整齊排列的牙齒，改善外觀外，更能有助減低患上各種牙齒問題的風險。',
  mbImg: 'https://static.cmereye.com/imgs/2023/04/78f038c56a4dc38b.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/9993e95bc1c6a9c9.jpg',
  tabNavName: '矯齒',
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
    <!-- 注意 -->
    <ServiceStep :stepData="stepData" />
    <!-- 区别 -->
    <ServiceDiffer :differData="differData" />
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