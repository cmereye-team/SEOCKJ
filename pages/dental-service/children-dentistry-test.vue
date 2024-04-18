<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const route = useRouter()
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

const introduceData = {
  title: 'pages.dental-service.children-dentistry.introduce.title',
  content: 'pages.dental-service.children-dentistry.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/482f1dd094438e98.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/25a2d1f9e0936571.jpg',
  tabNavName: 'pages.dental-service.children-dentistry.introduce.tabNavName',
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
    <div class="tabNav pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院"
          ><span>{{ $t('pages.index.title') }}</span></nuxt-link
        >
        <nuxt-link :to="'/dental-service'" :title="$t('pages.dental-service.title')" :alt="('pages.dental-service.title')"
          ><span>{{ $t('pages.dental-service.title') }}</span></nuxt-link
        >
        <span :title="$t(introduceData.tabNavName)">{{ $t(introduceData.tabNavName) }}</span>
      </div>
    <div class="services">
      <div class="dentistryServices-title problem-title">
        <div class="dentistryServices-title-in bb problem-title-in">
          兒童牙科服務
        </div>
      </div>
      <div class="services-text">
        定期兒童牙科檢查有助於早期發現和治療牙齒問題，預防牙病發展。
      </div>
      <div class="services-lists">
        <div class="services-lists-in">
          <div></div>
        </div>
      </div>
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <NewAddress />
  </div>
  <div class="YaNav">
    <div class="YaNav-img">
      <img class="YaNav-img-in" src="https://static.cmereye.com/imgs/2024/04/1b6462901bf4df9e.png" alt="">
      <!-- <div></div> -->
    </div>
    <div class="YaNav-text">
      <div class="YaNav-text-in">
        超聲波洗牙
        <span>
          ￥88
        </span>
      </div>
    </div>
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 20px;
  a {
    &:not(:last-child)::after {
      content: '';
      width: 20px;
      height: 2px;
      margin: 0 10px;
      background: #cbcbcb;
      display: inline-block;
      vertical-align: middle;
      margin-top: -4px;
    }
  }
  & > span {
    cursor: pointer;
    color: var(--indexColor1);
  }
}
@keyframes YaNavAnim {
  0%{
    transform: scale(1);
    // padding: 10px 30px;
  }
  10%{
    transform: scale(1.1);
    // padding: 10px 40px;
  }
  20%{
    transform: scale(1);
    // padding: 10px 30px;
  }
  30%{
    transform: scale(1.1);
    // padding: 10px 40px;
  }
  40%{
    transform: scale(1);
    // padding: 10px 30px;
  }
  100%{
    transform: scale(1);
    // padding: 10px 30px;
  }
}
.YaNav{
  position: fixed;
  z-index: 101;
  right: 100px;
  bottom:100px;
  filter: drop-shadow(0 2px 4px rgba(255, 96, 150, .5));
  cursor: pointer;
  transition: all .3s;
  animation: YaNavAnim 7s linear infinite;
  &-img{
    width: 80%;
    position: absolute;
    bottom: 10px;
    margin: 10%;
    &-in{
      width: 100%;
      height: auto;
    }
  }
  &-text{
    background: var(--indexColor1);
    clip-path: polygon(0 0,50% 12%,100% 0,92% 50%,100% 100%,50% 88%,0 100%,8% 50%);
    // animation: YaNavAnim 7s linear infinite;
    transition: all .3s;
    &-in{
      color: #fff;
      font-size: 20px;
      padding: 10px 30px;
      font-family: var(--contextFamily);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .3s;
      // animation: YaNavAnim 7s linear infinite;
      span{
        font-family: var(--contextFamily);
        font-size: 26px;
      }
    }
  }
  &:hover{
    .YaNav-text{
      // clip-path: polygon(0 0,50% 12%,100% 0,92% 50%,100% 100%,50% 88%,0 100%,8% 50%);
      // clip-path: polygon(0 0,100% 0,100% 100%, 0 100%);
      // transform: scale(1.1);
      &-in{
        padding: 10px 40px;
        animation:none;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  
}
@media only screen and (max-width: 768px) {
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 0;
  }
  .YaNav{
    display: none;
  }
}
</style>