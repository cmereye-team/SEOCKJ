<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('invisalign')
useHead({
  title: "隱適美"
})

const orthodonticsIntroduceData = {
  title: '隱形牙箍',
  text: 'Invisalign 隱適美',
  content: '隱適美是一種透明配戴式牙箍，可自行配戴及除下。相比傳統箍牙，隱適美牙箍更方便清潔牙齒及日常飲食習慣，適合不同年齡人士。其原理是透過先進數位科技，以電腦模擬牙齒移動過程，再按每個移動過程製作出一系列階段的專屬牙箍，利用牙箍的機械性力量令牙齒周圍組織產生移動，繼而將牙齒推向適當位置。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/db8bbe88934fbe0e.jpg',
  tabNavName: '隱適美',
}



</script>


<template>
<div>
  <PageHeader />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
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