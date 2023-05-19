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
}

const reasonData = {
  title: '關於拔牙',
  text: '一般需要拔牙的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/6e9ea22364596cbd.jpg',
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