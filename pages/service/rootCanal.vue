<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('rootCanal')
useHead({
  title: "杜牙根"
})

const orthodonticsIntroduceData = {
  title: '根管治療',
  text: '根管治療，俗稱為「杜牙根」',
  content: '根管治療（杜牙根）是治療嚴重蛀牙或牙根受細菌感染的手術，當蛀牙菌的感染深入牙髓，以致牙齒內的神經發炎，便需要以杜牙根手術徹底清除感染的部分。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/db8bbe88934fbe0e.jpg',
  tabNavName: '杜牙根',
  pageName: 'rootCanal',
}

const reasonData = {
  title: '關於杜牙根',
  text: '常見杜牙根的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/6e9ea22364596cbd.jpg',
  reasonLists:[
    {
      context: '切除受感染的牙髓神經，解決牙痛問題',
    },
    {
      context: '防止牙髓感染蔓延至牙周組織和牙槽骨，導致更嚴重的口腔問題',
    },
    {
      context: '患者出現牙痛問題，經醫生評估後，認為牙齒仍有保留價值而確定保留真牙',
    },
    {
      context: '牙齒被蛀蝕得太深、撞斷或嚴重磨耗，需徹底清除牙髓內的感染，解決牙髓壞死、化膿等問題',
    }
  ]
}

const stepData = {
  title: '根管治療(杜牙根)過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '為受感染的牙齒照X光，了解根管形狀及長度'
      },
      {
        title: 'Step 2',
        text: '局部麻醉，進行牙根消毒'
      },
      {
        title: 'Step 3',
        text: '從牙冠進入牙髓腔，把牙髓組織刮除或吸出'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '以藥水徹底消毒乾淨根管內壁'
      },
      {
        title: 'Step 5',
        text: ' 把牙冠髓腔填封及覆蓋牙洞，以降低蛀牙菌再度入侵的機會'
      },
      {
        title: 'Step 6',
        text: '如經治療後的牙齒太脆弱，需為牙齒套上牙套，預防再被咬崩而要拔除'
      }
    ]
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '注意口腔衛生',
    },
    {
      name: '避免吃堅硬食物，失去牙髓的牙齒不能承受過大的咬合力',
    },
    {
      name: '牙齒失去牙髓後，有機會漸漸變黑，戴上牙套可保持美觀',
    },
    {
      name: '杜牙根手術後，牙齒變得脆弱，需配戴牙套來保護牙齒，避免斷裂',
    },
    {
      name: '定期覆診，檢查牙齒是否出現斷裂、二度感染、異常腫痛等問題',
    },
    {
      name: '如發現臨時補牙物料脫落，須盡快見牙醫，以免唾液中的細菌滲入牙齒髓腔',
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
    <!-- 六个步骤 -->
    <ServiceStep :stepData="stepData" />
    <!-- 注意事项 -->
    <ServiceNote :noteData="noteData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>


</style>