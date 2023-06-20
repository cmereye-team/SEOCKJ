<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('children-dentistry')
useHead({
  title: "兒童牙科保健｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供兒童牙科保健服務，家長可以定期帶孩子去合格的牙醫進行牙科檢查和諮詢，早期發現兒童牙齒的潛在問題，例如蛀牙和其他口腔疾病，並採取針對性的治療。小朋友口腔和牙齒問題成因與成年人不同，牙科治療上需要留意，同時需要照顧兒童的心靈，讓他們放心接受牙科治療。愛康健兒童牙科保健服務提供適合兒童的治療方式，讓小朋友能夠在舒適安全的環境下接受牙科治療。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '兒童牙科 兒童牙科保健 兒童牙科診所 兒童牙科醫院 學童牙科診所 學童牙科醫院 兒童牙科護理 學童牙科保健 學童牙科 幼童牙科保健 兒童牙齒保健 小兒牙科保健 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/67f203a9b4c651be.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/4a26475cb4471cee.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/671098dc7b098348.jpg',
  pageName: 'children-dentistry',
  pcText: ['關注口腔健康，從定期檢查開始','立即預約檢查，展開護牙行動'],
  mbText: ['關注口腔健康','從定期檢查開始']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.children-dentistry.introduce.title',
  content: 'pages.dental-service.children-dentistry.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/482f1dd094438e98.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/25a2d1f9e0936571.jpg',
  tabNavName: 'pages.dental-service.children-dentistry.introduce.tabNavName',
}

const reasonData = {
  title: '關於兒童牙科',
  text: '兒童定期牙科保健的重要性？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/e47c1087b9625bf0.jpg',
  reasonLists:[
    {
      context: '及早教育小朋友保護牙齒，預防蛀牙及其他口腔疾病',
    },
    {
      context: '緊貼小朋友牙齒發育進度，及早作出針對性治療',
    },
    {
      context: '把握小朋友矯齒黃金期，大大提高改善牙齒排列、面部輪廓、咬字發音等問題的成功率',
    }
  ],
  isMediumCW: true,
  pageName: 'children-dentistry' 
}

const noteData = {
  title: '兒童牙科保健及治療',
  lists: [
    {
      name: '作為一個家長，你可能時刻關注著孩子的身體健康，但在孩子的口腔健康方面，很多人可能會認為等待孩子就讀小學時參加政府提供的牙科保健就足夠了。然而，等到孩子6歲才開始檢查牙齒，可能已經太晚了。因為很多孩子喜歡食用糖果或甜食，又不喜歡刷牙，這極大地增加了他們患上蛀牙的風險。因此，家長們應該早早地關注孩子的口腔健康問題，培養孩子良好的口腔衛生習慣，包括定期刷牙、少吃糖果等甜食，以及定期進行口腔檢查和洁牙，這樣可以有效地預防孩子患上口腔疾病。',
    },
    {
      name: '小朋友擁有第一隻牙開始，就可以定期檢查牙齒。定期進行牙科保健，從小了解保持口腔健康的知識和重要性，家長們亦可以緊貼小朋友的牙齒發育進度，及早發現兒童牙齒的潛在問題，作出針對性治療。',
    }
  ],
  pageName: 'children-dentistry',
}

const problemData = {
  title: 'pages.dental-service.children-dentistry.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[0].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[1].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[2].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[3].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[3].A'
    },
  ]
}

const skillData ={
  title: ['從乳牙開始培養好的口腔衛生', '習慣，有助於建立良好的牙齒健康基礎。'],
  lists: [
    {
      title: '窩溝封閉',
      introduce: '用高分子材料把牙齒的窩溝填平，使牙面變得光滑易清潔，一方面，窩溝封閉後，窩溝內原有的細菌斷絕了營養的來源，逐漸死亡；另一方面外面的致齲細菌不能再進入，從而達到預防窩溝齲的目的。',
      characteristic: '操作簡單、兒童易配合，有效避免齲齒發生。',
      adapt: '3—12歲乳磨牙、第一恒磨牙、第二恒磨牙。'
    },
    {
      title: '塗氟',
      introduce: '塗氟是一種保護孩子牙齒的方法，通常使用氟化物溶液塗抹在孩子的乳牙或恒牙表面，以增強牙齒質地，預防蛀牙和齲齒的形成。',
      characteristic: '簡單操作無需局部麻醉，使用的氟化物溶液濃度低，長期效果穩定，可以持續保護孩子的牙齒長達數月至一年的時間。',
      adapt: '一般為孩子乳牙長出後至恒牙長成之前的時間段，這個時間段通常是從孩子3歲開始到12歲左右。建議孩子每年至少進行一次塗氟治療，以保護他們的牙齒健康。'
    },
    {
      title: '補牙(蛀牙)',
      introduce: '採用人造物質修補牙體缺損的方法，用於修補的物質叫充填材料。凡因齲齒、楔狀缺損、外傷等造成牙體組織缺損者都需要修補，以恢復其外形和功能。',
      characteristic: '預防繼續齲齒；恢復正常咬合，維持牙弓長度。',
      adapt: '乳磨牙齲壞、年輕恒牙齲壞。'
    },
    {
      title: '兒童牙齒矯正',
      introduce: '通過矯治器的方式可以改善兒童牙齒反頜、牙齒不齊等情況。',
      characteristic: '恢復牙齒美觀和功能；改善口腔不良習慣；舒適、健康、便捷。',
      adapt: '牙列畸形、反頜、牙齒錯位。'
    },
    {
      title: '舒適拔牙',
      introduce: '兒童牙科拔牙是一種治療方法，常用於治療牙齒損傷、感染、畸形或擁擠等问题。\n•使用麻醉技術，對孩子的疼痛感受最小化。\n•將拔牙傷害降到最小，減少感染及出血。\n•手術時間短，恢復快。',
      characteristic: '對孩子的身心健康影響較小，疼痛輕微。傷口癒合迅速，不會影響孩子的飲食和日常生活，並可以解決牙齒問題，保護健康的牙齒和口腔健康。',
      adapt: '一般來說，孩子的乳牙在6-12歲之間掉落，而恒牙則在11-14歲之間生長。如果孩子有牙齒問題，建議及早就診，根據醫生的建議決定是否需要拔牙治療。'
    },
    {
      title: '根管治療',
      introduce: '根管治療是一種治療乳牙或恒牙牙髓炎或牙髓壞死等問題的方法。\n•使用麻醉技術對孩子的疼痛感受最小化。\n•將治療風險降到最小，減少感染和出血。\n•根管治療技術使其保留牙齒和神經系統的功能，減少後續治療。',
      characteristic: '對孩子的身心健康影響較小，疼痛輕微。效果長期穩定，可以保護孩子的牙齒健康，並可以避免拔牙對口腔造成的影響，保留自然牙齒。',
      adapt: '兒童牙科根管治療需要根據孩子的年齡、牙齒狀況以及治療需要等多方面因素進行綜合考慮，建議家長及時就醫，並根據醫生的建議進行治療。'
    }
  ]
}

const changeSkillTitle = (_idx:number) => {
  let a = ['適應期','適應期','適用','適用','適應期','注意事項']
  return a[_idx]
}

let skillCur = ref(0)
const handleSkillTab = (_idx:number) => {
  skillCur.value = _idx
}
</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
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
    <div class="skill">
      <div class="skill-title">
        <div class="skill-title-in">
          <span>從乳牙開始培養好的口腔衛生</span>
          <span>習慣，有助於建立良好的牙齒健康基礎。</span>
        </div>
      </div>
      <div class="skill-tab pcBox pageCon">
        <div class="skill-tab-t">
          <div :class="{'cur': skillCur === skillIndex}" v-for="(skillItem,skillIndex) in skillData.lists" :key="skillIndex" @click="handleSkillTab(skillIndex)">
            {{skillItem.title}}
          </div>
        </div>
        <div class="skill-tab-b">
          <div>
            <div>技術介紹</div>
            <div>{{skillData.lists[skillCur].introduce}}</div>
          </div>
          <div>
            <div>技術特點</div>
            <div>{{skillData.lists[skillCur].characteristic}}</div>
          </div>
          <div>
            <div>{{changeSkillTitle(skillCur)}}</div>
            <div>{{skillData.lists[skillCur].adapt}}</div>
          </div>
        </div>
      </div>
      <div class="skill-collapse mbBox">
        <el-collapse v-model="skillCur" accordion>
          <el-collapse-item :name="skillIndex" v-for="(skillItem,skillIndex) in skillData.lists" :key="skillIndex">
            <template #title>
              <div class="skill-collapse-title">
                {{skillItem.title}}
              </div>
            </template>
            <div class="skill-collapse-b">
              <div>
                <div>技術介紹</div>
                <div>{{skillItem.introduce}}</div>
              </div>
              <div>
                <div>技術特點</div>
                <div>{{skillItem.characteristic}}</div>
              </div>
              <div>
                <div>{{changeSkillTitle(skillIndex)}}</div>
                <div>{{skillItem.adapt}}</div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <ServiceNote :noteData="noteData" />
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
      color: #666666;
      &:not(:last-child){
        margin-right: 25px;
      }
    }
  }
}
.skill{
  margin-top: 144px;
  &-title{
    display: flex;
    justify-content: center;
    align-items: center;
    &-in{
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      text-align: center;
      color: #666666;
      border-bottom: 4px solid #FFA09E;
      span{
        display: block;
      }
    }
  }
  &-tab{
    margin-top: 46px;
    box-shadow: 0px 4px 8px #FFDDDA;
    &-t{
      display: flex;
      &>div{
        flex: 1;
        text-align: center;
        background: #FFDDDA;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        height: 70px;
        line-height: 70px;
        color: #FFFFFF;
        cursor: pointer;
        &:not(:last-child){
          margin-right: 3px;
        }
        &:hover{
          background: #FFA09E;
        }
        &.cur{
          background: #FFA09E;
        }
      }
    }
    &-b{
      min-height: 460px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      &>div{
        display: flex;
        width: 100%;
        max-width: 806px;
        margin: 0 auto;
        &>div:first-child{
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 160%;
          color: #666666;
          width: 152px;
        }
        &>div:last-child{
          flex: 1;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          color: #666666;
          padding-top: 10px;
          white-space: pre-wrap;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .skill{
    &-tab{
      &-t{
        &>div{
          font-size: 24px;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
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
.skill{
  margin-top: 90px;
  padding: 0 30px;
  &-title{
    &-in{
      font-weight: 700;
      font-size: 26px;
      span{
        display: inline;
      }
    }
  }
  &-collapse{
    margin-top: 33px;
    box-shadow: 0px 4px 8px #FFDDDA;
    &-b{
      &>div{
        margin-top: 25px;
        padding: 0 24px;
        &>div:first-child{
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          text-align: center;
          color: #666666;
        }
        &>div:last-child{
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          text-align: center;
          color: #666666;
          margin-top: 5px;
          white-space: pre-wrap;
        }
      }
    }
    :deep(.el-collapse){
      border: none;
    }
    :deep(.el-collapse-item){
      margin-bottom: 2px;
      border: none;
    }
    :deep(.el-collapse-item__wrap){
      border: none;
    }
    :deep(.el-collapse-item__header){
      padding: 10.5px 0;
      background: #FFDDDA;
      border: none;
      box-sizing: initial;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 26px;
      justify-content: center;
    }
    :deep(.el-collapse-item__header.is-active){
      background: #FFA09E;
      .skill-collapse-title{
        color: #FFFFFF;
      }
    }
    :deep(.el-icon){
     display: none;
    }
  }
}
}
</style>