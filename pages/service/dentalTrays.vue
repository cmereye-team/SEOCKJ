<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('dentalTrays')
useHead({
  title: "牙托"
})

const orthodonticsIntroduceData = {
  title: '牙托',
  content: '牙托即活動式假牙，分為局部及全口牙托兩種，可改善缺牙的影響。牙托底部有金屬鉤讓牙托能固定在真牙上，代替缺去的牙齒。活動式假牙可自行配戴，適合缺齒較多的人士使用。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/97b2cb567b59ccdc.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/eff373fe8976c4f0.jpg',
  tabNavName: '牙托',
}

const reasonData = {
  title: '關於牙托',
  text: '全口牙托及局部牙托',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/5aaed24997e19f64.jpg',
  reasonLists:[
    {
      context: '局部牙托',
    },
    {
      context: '局部牙托適用於口腔內尚有健康牙齒的人士，一般以金屬支架或金屬勾設計，以健康牙齒固定牙托，方便自行配戴。',
      hideIcon: true,
      isSmallFS: true
    },
    {
      context: '全口牙托',
    },
    {
      context: '全口牙托適用於所有牙齒已脫落的人士，利用口中黏膜和齒槽骨脊固定，可自行配戴。但全口牙托的咬合感與真牙相差甚大，需以口腔內肌肉及舌頭動作等移動假牙，容易產生不適，需要時間適應。',
      hideIcon: true,
      isSmallFS: true
    }
  ],
  pageName: 'dentalTrays'
}

const problemData = {
  title: '全口牙托及局部牙托常見問題',
  lists: [
    {
      Q: '甚麼情況需要更換牙托？',
      A: '牙槽骨會因長時間承受牙托的壓力而慢慢收縮，以致影響牙托。因此，當牙托開始有鬆動，便需調整或更換新的牙托。'
    },
    {
      Q: '如何清潔牙托？',
      A: '牙托需要每日清潔及浸洗。\n1. 先用假牙清潔劑清洗牙托。\n2. 以假牙清潔片溶劑浸泡牙托消毒\n切勿過度刷洗牙托，以免在牙托表面形成凹槽，令細菌積聚。'
    },
    {
      Q: '如何選擇適合的牙托？',
      A: '牙托有可拆式及固定式，亦有全口及局部的設計。每種牙托以不同物料製作而成，性質及成本皆不一樣。客人應與醫生討論，選擇適合的牙托。'
    },
    {
      Q: '如何護理牙托？',
      A: '客人應注意牙托及牙齒的清潔，定期檢查確定牙托是否合適，以及會否造成口腔損傷等。如牙托開始鬆動，便有需要調較或換新的牙托。'
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