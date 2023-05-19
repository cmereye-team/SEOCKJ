<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('invisalign')
useHead({
  title: "隱適美"
})

const orthodonticsIntroduceData = {
  title: 'Invisalign 隱適美',
  content: '隱適美是一種透明配戴式牙箍，可自行配戴及除下。相比傳統箍牙，隱適美牙箍更方便清潔牙齒及日常飲食習慣，適合不同年齡人士。其原理是透過先進數位科技，以電腦模擬牙齒移動過程，再按每個移動過程製作出一系列階段的專屬牙箍，利用牙箍的機械性力量令牙齒周圍組織產生移動，繼而將牙齒推向適當位置。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/caaab69f2a4941c9.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/e88458969b68b96d.jpg',
  tabNavName: '隱適美',
  pageName: 'invisalign'
}

const stepData = {
  title: '隱適美流程',
  stepLists: [
    [
      {
        title: 'Step 1',
        textTh: '收集牙齒資料',
        text: '與牙醫諮詢及溝通過後，專人會為你的牙齒進行拍照、X光片、口腔內掃瞄或牙模套印來建立你的牙齒資料，亦會透過詳細講解令你明白整個療程過程及效果。'
      },
      {
        title: 'Step 2',
        textTh: '訂制矯齒計劃',
        text: '牙醫會與廠商方面溝通，為你建立專屬的3D矯齒治療方案。'
      },
      {
        title: 'Step 3',
        textTh: '訂製牙套並開始療程',
        text: '廠商用3D電腦雷射列印科技製成一系列訂製牙箍，寄送至牙醫診所。我們會聯絡客人安排到診進行試戴並評估效果。客人需要每6至8星期複診，與牙醫跟進矯齒進度及取得新牙箍。'
      }
    ]
  ],
  pageName: 'invisalign'
}

const differData = {
  title: '為何選擇隱適美療程？',
  text: '',
  firstTextTh: 'Invisalign 隱適美',
  secondTextTh: '其他隱形牙箍品牌',
  listDatas: [
    {
      name: '舒適度',
      firstText: '物料為具專利的復合層物料製造牙箍以U型剪裁貼合牙齦，舒適度最佳',
      secondText: '使用無乳膠或醫用塑料牙箍剪裁較為平面，舒適度欠佳，有機會令牙齦受感染'
    },
    {
      name: '療程跟進',
      firstText: '由註冊及持續接手培訓的隱適美牙醫看診及制定療程每4-8星期回診，定期跟進矯齒效果及進度',
      secondText: '獲註冊牙醫最少3次看診，只有註冊牙醫初次面診，甚至沒有註冊牙醫看診及跟進'
    },
    {
      name: '數據支援',
      firstText: '收集及擁有來自全球隱適美使用者資料庫，超過1,200萬大數據不斷更新及調整矯正技術，提高成效及舒適度',
      secondText: '未有收集資料庫或使用者數據甚少'
    },
    {
      name: '可處理療程',
      firstText: '可處理輕微、中度至複雜的矯齒個案',
      secondText: '只可處理輕微至中度複雜個案'
    },
    {
      name: '預測技術',
      firstText: '牙箍內附有SmartForce專利附件粒粒，預測及精準配合牙齒移動需要，同步將不同牙齒的牙冠和牙腳正確移動',
      secondText: '未有使用附件或預測精準度低'
    }
  ],
  pageName: 'invisalign'
}

</script>


<template>
<div>
  <PageHeader />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <ServiceStep :stepData="stepData" />
    <ServiceDiffer :differData="differData" />
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