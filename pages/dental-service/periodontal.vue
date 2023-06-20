<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const { t } = useLang()
const appState = useAppState()
appState.setDentistryService('periodontal')
useHead({
  title: "牙周病治療 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙周病治療服務，牙周病是慢性炎症，分為輕微牙齦炎和嚴重牙周炎。牙周病會導致牙齒鬆動、移位，影響外觀和口腔健康。牙周病治療可分為非手術和手術治療。非手術治療包括牙根刮治（深層洗牙），利用儀器刮除發炎組織，促進健康組織的再生，以達到牙周病治療效果。對於嚴重牙周病或牙齦厚實，則需要進行牙周手術來改善牙周病。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙周病 牙周炎 牙齦炎 牙周病治療 牙齦炎治療 牙根刮治 深層洗牙 輕微牙周病 牙菌膜 牙周手術 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/a0628e13323a0a23.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/af082f3968e5712e.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/a2926036660c1155.jpg',
  pageName: 'periodontal',
  pcText: ['健康牙齒，從牙周病治療開始','保持清新口氣、牙肉年輕'],
  mbText: ['健康牙齒','從牙周病治療開始']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.periodontal.introduce.title',
  content: 'pages.dental-service.periodontal.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/cac188cc7c6a922f.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/9923e074ca29600b.jpg',
  tabNavName: 'pages.dental-service.periodontal.introduce.tabNavName',
}

const reasonData = {
  title: 'pages.dental-service.periodontal.reason.title',
  text: 'pages.dental-service.periodontal.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/907c5d9eee09d9ea.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.periodontal.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.periodontal.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.periodontal.reason.lists[2].context',
    }
  ],
  pageName: 'periodontal'
}

const symptomData = {
  title: '牙周病的症狀',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/802fd6c8cf970f64.png',
      title: '刷牙時牙齦出血'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/4778a5335712795b.png',
      title: '牙肉紅腫'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/824e83ff662e5da3.png',
      title: '口臭異味'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/ba588e0ec3a4886b.png',
      title: '牙齒鬆動'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/08851b7f6adcef3e.png',
      title: '牙齦腫脹'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/7a881e098e009caf.png',
      title: '牙齒對冷熱敏感'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/74f3d9aa48972f0b.png',
      title: '容易流牙血'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/b1bcde5602e0bef5.png',
      title: '牙齦萎縮'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/c3f0969e2ce1ca7c.png',
      title: '牙齦從粉紅色變為暗紅色'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/dc65923fd22afa42.png',
      title: '牙齒移位'
    }
  ]
}

const processData = {
  title: '牙周病治療過程',
  tabs: ['牙根刮治\n(深層洗牙)','牙肉翻瓣手術','牙周再生手術'],
  context: [],
  lists: [
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '口腔檢查',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '利用牙科儀器深入牙齦發炎的底部',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '刮除乾淨牙結石及發炎的牙肉組織',
            textIn: ''
          }
        ]
      ]
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '局部麻醉',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '切開牙齦組織，分開牙齦組織與牙齒',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '用超聲波徹底清潔牙根表面及牙周囊袋下的牙垢、牙菌斑和生物膜',
            textIn: ''
          }
        ],
        [
          {
            title: 'Step 4',
            text: '修整牙周骨缺損',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '縫合傷口',
            textIn: ''
          },
        ]
      ]
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '評估是否適合進行牙周組織擴增、增生手術',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '根據牙肉狀態及骨頭的再生狀況，設計牙周再生計劃',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '在骨缺損處以骨粉填充',
            textIn: ''
          }
        ],
        [
          {
            title: 'Step 4',
            text: '覆蓋再生膜，提供牙周組織的生長空間',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '牙周組織增加，使牙周更鞏固，牙齒存活時間更長',
            textIn: ''
          },
          {
            title: 'Step 6',
            text: '咬緊棉花或紗布止血',
            textIn: ''
          },
        ]
      ]
    }
  ]
}

const noteData = {
  title: '牙周病一定要進行手術嗎？',
  lists: [
    {
      name: '一般牙周病治療可分為非手術性和手術性。醫生會透過檢查及評估，再按照病人的病情，擬定適切的治療方案。',
    },
    {
      name: '非手術治療即牙根刮治（深層洗牙），通過儀器刮除發炎組織，讓牙周健康的組織能在短時間內長回來。',
    },
    {
      name: '對於較嚴重的牙周病，或是牙齦厚實經由非手術治療不易達到良好效果者，就會進行牙周手術改善牙周病的情況。',
    },
    {
      name: '牙周病手術主要分成兩類，牙肉翻瓣手術及牙周再生手術，更深入地把發炎組織處理乾淨，防止發炎繼續惡化。',
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.periodontal.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.periodontal.problem.lists[0].Q',
      A: 'pages.dental-service.periodontal.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[1].Q',
      A: 'pages.dental-service.periodontal.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[2].Q',
      A: 'pages.dental-service.periodontal.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[3].Q',
      A: 'pages.dental-service.periodontal.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[4].Q',
      A: 'pages.dental-service.periodontal.problem.lists[4].A'
    },
  ]
}

</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <ServiceReason :reasonData="reasonData" />
    <div class="symptom">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{symptomData.title}}</div>
      </div>
      <div class="symptom-box">
        <div class="symptom-lists pageCon">
          <div class="symptom-lists-in" v-for="(symptomItem,symptomIndex) in symptomData.lists" :key="symptomIndex">
            <div class="symptom-lists-in-img">
              <img :src="symptomItem.imgUrl" alt="">
            </div>
            <div class="symptom-lists-in-title">{{symptomItem.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <ServiceProcess :processData="processData" />
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
.symptom{
  margin-top: 126px;
  &-lists{
    display: flex;
    flex-wrap: wrap;
    margin-top: 54px;
    padding: 0 45px;
    &-in{
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img{
        width: 184px;
        height: 184px;
        margin: 0 auto;
        background: #E6F4FF;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          max-width: 90%;
          max-height: 90%;
        }
      }
      &-title{
        width: 100%;
        max-width: 184px;
        padding: 12px 0;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
      }
      &:nth-of-type(odd){
        .symptom-lists-in-img{
          background: #FFF1F0;
        }
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  .symptom{
    margin-top: 70px;
    &-lists{
      padding: 0 15px;
      margin-top: 28px;
      &-in{
        width: 50%;
        &-img{
          width: 149px;
          height: 149px;
          img{
            max-width: 85%;
            max-height: 85%;
          }
        }
        &-title{
          max-width: 149px;
          padding: 10px 0;
          font-size: 15px;
        }
        &:nth-of-type(4),&:nth-of-type(8){
          .symptom-lists-in-img{
            background: #FFF1F0;
          }
        }
        &:nth-of-type(3),&:nth-of-type(7){
          .symptom-lists-in-img{
            background: #E6F4FF;
          }
        }
      }
    }
  }
}
</style>