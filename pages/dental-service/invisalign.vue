<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('invisalign')
useHead({
  title: "Invisalign隱適美｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供Invisalign隱適美服務，這是一種透明的配戴式牙箍，患者可以自行配戴和除下。相比傳統的牙箍，隱適美牙箍更容易清潔和適應日常飲食習慣，適合不同年齡的患者使用。它利用先進的數位科技，通過電腦模擬牙齒移動過程，制作出一系列專屬的牙箍，每個階段都有不同的適應性，利用牙箍的機械力量，推動牙齒移動至適當的位置。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: 'Invisalign 透明牙套 隱適美 隱適美流程 隱適美價錢 時代天使價錢 Insignia價錢 Invisalign價錢 Angel aligner價錢 Insignia價格 Invisalign價格 Angel aligner價格 箍牙價錢 隱形牙箍價錢 透明牙箍價錢 箍牙推薦 隱形牙箍推薦 透明牙箍推薦 牙齒矯正 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/d7eb727cb5e0a48a.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/6f363ef134d0612a.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/890ea6177889138c.jpg',
  pageName: 'invisalign',
  pcText: ['自由．舒適．美觀','保持自然笑容 牙齒更加美麗動人'],
  mbText: ['保持自然笑容','牙齒更加美麗動人']
}

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

const problemData = {
  title: 'Invisalign 隱適美常見問題',
  lists: [
    {
      Q: '整個隱適美療程需時多久？',
      A: '療程時間需視乎你的矯齒複雜程度，平均需1年至1年半，複雜個案則可能需2年或以上，而最快約3個月左右可見矯齒效果。'
    },
    {
      Q: '隱適美療程有年齡限制嗎？',
      A: '隱適美療程並沒有特別的年齡限制，只要有足夠牙齒數量及經牙醫評估你的狀況合適就可以。\n兒童為最理想的矯齒黃金期，由於兒童的骨質較軟，令移動速度及效果較好。家長可考慮於小\n童7歲左右的換牙階段，找牙醫作檢查及評估，及早針對牙冠及早期矯正需要。'
    },
    {
      Q: '戴上隱適美牙箍會有痛楚嗎？',
      A: '隱適美牙箍以漸進緩和的矯正力道移動你的牙齒，相比其他矯正療程引起的痛楚較低。\n而某些使用者會於剛戴上新牙箍數天內或會感到緊繃的感覺，此為牙齒移動的跡象，不適感亦會於數天後消失。'
    },
    {
      Q: '隱適美的全方位矯齒療程同副線隱適美‧易（Invisalign Go）有什麼分別？',
      A: '隱適美的全方位矯齒療程可解決輕微至複雜的矯齒個案，包括開咬、深咬、錯咬、倒及、哨牙等較複雜的牙齒問題。\n隱適美‧易（Invisalign Go）矯齒療程主要處理較輕微至中度的牙齒問題，適合想於較短時間內改善牙縫、牙齒擠擁等牙齒排列問題，價格亦較為優惠。'
    },
    {
      Q: '對小朋友而言，隱適美兒童專線 (Invisalign First) 矯齒療程安全嗎？',
      A: 'Invisalign First 矯齒牙箍採用已獲專利的SmartTrack材料，並且得到美國FDA認證其安全性。\nInvisalign First更根據兒童的短小牙齒進行優化，使用相應附件，提供穩定力度。牙箍亦可加上藍色依從性顯示點，方便檢查及監察牙箍佩戴時間，達致最佳療程效果。'
    },
  ]
}

</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <ServiceStep :stepData="stepData" />
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


@media (min-width: 768px) and (max-width: 1452px) {}

//md
@media only screen and (max-width: 760px) {

}
</style>