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

const problemData = {
  title: '兒童牙科常見問題',
  lists: [
    {
      Q: '如小朋友牙齒狀況不錯，需要接受兒童牙科檢查呢？檢查的頻率是多久？',
      A: '即使小朋友的牙齒看起來沒有問題，仍建議定期帶他們到牙科診所進行口腔檢查，以便及早發現問題並進行治療。兒童牙科檢查的推薦頻率為每半年一次，首次檢查應在嬰孩長出第一隻乳齒後的6個月內進行。透過定期的兒童牙科檢查，可以教育孩子保護牙齒健康，並確保他們的口腔健康狀態得到有效的掌控。'
    },
    {
      Q: '如果小朋友出現牙痛，可能有哪些原因呢？',
      A: '小朋友出現牙痛的原因可能包括:\n1. 睡前喝奶未清潔牙齒\n2. 用奶瓶餵食時間過長\n3. 不咀嚼食物\n4. 未接受口腔檢查或塗氟素\n如果小朋友出現牙痛，建議及時帶他們到兒童牙科診所進行檢查和治療。'
    },
    {
      Q: '怎樣防止小朋友蛀牙？',
      A: '1. 減少糖分攝入：限制小朋友進食含糖食物的次數，尤其是糖果、巧克力、蛋糕等高糖食品，以及含糖飲料如汽水、果汁等。\n2. 建立良好的口腔衛生習慣：教導小朋友適當的刷牙方法，如每天早晚刷牙，每次刷牙至少2分鐘，以及使用牙線清潔牙縫。\n3. 使用含氟化物的牙膏和漱口水：氟化物有助於強化牙齒，減少蛀牙的風險。\n4. 定期到兒童牙科診所接受檢查：建議每半年到一年帶小朋友到兒童牙科診所進行口腔檢查，及早發現蛀牙問題並進行治療。'
    },
    {
      Q: '為什麼孩子會出現口臭的情況？',
      A: '口腔衛生不佳：如果孩子不注意口腔衛生，牙菌膜和食物殘渣可能在口腔中滋生細菌，進而引起口臭。\n消化系統問題：胃腸不適或消化不良可能會引起口臭，因為胃酸和胃內細菌可能會逆流到口腔中。\n口腔問題：如果孩子有蛀牙、牙周病、齒齦病或其他牙齒問題，這些病症可能會導致口腔感染，造成難聞的氣味。\n鼻竇感染：鼻竇感染會導致鼻道及喉嚨內積存流液，令喉嚨成為細菌聚集的傻先部位，因此可能會導致口臭。'
    },
  ]
}



</script>


<template>
<div>
  <PageHeader
    :mbBg="'https://static.cmereye.com/imgs/2023/06/671098dc7b098348.jpg'"
    :headerImg="'https://static.cmereye.com/imgs/2023/06/5b601411d7775c30.png'"
    :headerBgImg="'https://static.cmereye.com/imgs/2023/06/1f2efa633fda6c65.jpg'"
    :titlePosition="'left'" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <div class="faq">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">兒童常見口腔問題</div>
      </div>
      <div class="faq-in pageCon">
        <div>牙齒畸形</div>
        <div>乳牙滯留</div>
        <div>兒童蛀牙</div>
        <div>牙齒外傷</div>
      </div>
    </div>
    <!-- 注意事项 -->
    <ServiceNote :noteData="noteData" />
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
.faq{
  margin-top: 207px;
  &-in{
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
    &>div{
      flex: 1;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      height: 74px;
      line-height: 74px;
      background: #FFF1F0;
      border-radius: 10px;
      text-align: center;
      color: #4D4D4D;
      &:not(:last-child){
        margin-right: 25px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {}

//md
@media only screen and (max-width: 760px) {

.faq{
  margin-top: 90px;
  &-in{
    flex-direction: column;
    margin-top: 28px;
    &>div{
      font-size: 26px;
      height: 67.8px;
      line-height: 67.8px;
      margin: 0 30px;
      &:not(:last-child){
        margin-right: 30px;
        margin-bottom: 13.2px;
      }
    }
  }
}

}
</style>