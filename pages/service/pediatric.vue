<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('pediatric')
useHead({
  title: "兒童牙科"
})

const orthodonticsIntroduceData = {
  title: '兒童牙科',
  content: '除了身體健康，小朋友的口腔健康同樣重要，家長可定期找合資格牙醫為孩子進行牙科檢查及諮詢。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/482f1dd094438e98.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/25a2d1f9e0936571.jpg',
  tabNavName: '兒童牙科',
}

const reasonData = {
  title: '關於兒童牙科',
  text: '兒童定期牙科保健的重要性？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/e47c1087b9625bf0.jpg',
  reasonLists:[
    {
      context: '及早教育小朋友保護牙齒都好,預防蛀牙及其他口腔疾病',
    },
    {
      context: '緊貼小朋友牙齒發育進度,及早作出針對性治療',
    },
    {
      context: '把握小朋友矯齒黃金期,大大提高改善牙齒排列、面部輪廓、咬字發音等問題的成功率',
    }
  ],
  isMediumCW: true
}

const noteData = {
  title: '兒童牙科保健及治療',
  lists: [
    {
      name: '作為家長的你，可能好多人都會時刻關注自己小朋友的身體健康，但在小朋友的口腔健康上，大多數人可能都會認為等待小朋友就讀小一時，參加由政府提供的牙科保健就已經足夠。其實等待小朋友6歲才開始檢查牙齒，可能已經太遲。因為好多小朋友都喜歡食糖或甜食，又不喜歡刷牙，大大增加患上蛀牙的風險。',
    },
    {
      name: '小朋友擁有第一隻牙開始，就可以定期檢查牙齒。定期進行牙科保健，從小了解保持口腔健康的知識和重要性，家長們亦可以緊貼小朋友的牙齒發育進度，及早發現兒童牙齒的潛在問題，作出針對性治療。',
    }
  ],
  pageName: 'pediatric',
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


@media (min-width: 768px) and (max-width: 1452px) {}

//md
@media only screen and (max-width: 760px) {

}
</style>