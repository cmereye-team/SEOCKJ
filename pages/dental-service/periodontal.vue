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
  title: '牙周病治療',
  content: '牙周病屬慢性炎症，分為輕微的牙齦炎及嚴重的牙周炎兩種。會令牙齒鬆脫、移位，影響外貌及口腔健康。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/cac188cc7c6a922f.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/9923e074ca29600b.jpg',
  tabNavName: '牙周病治療',
}

const reasonData = {
  title: '關於牙周病',
  text: '常見牙周病的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/907c5d9eee09d9ea.jpg',
  reasonLists:[
    {
      context: '牙齦及牙齒邊緣長期積聚牙菌膜，細菌分泌毒素刺激牙齦，引致牙齦炎。',
    },
    {
      context: '牙齦發炎時，牙肉紅腫，刷牙時流牙血，牙齒表面積聚十分粗糙的牙石。',
    },
    {
      context: '牙齦炎情況持續，形成「牙周袋」，食物殘渣、牙菌膜和牙石等更易堆積在內，使牙周組織持續受破壞，而出現牙周炎。',
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
  // title: t('pages.blank.title'),
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
  title: '牙周病常見問題',
  lists: [
    {
      Q: '牙肉腫脹及刷牙流牙血是牙周病的徵兆嗎？',
      A: '牙周病的主要原因是口腔衛生狀態不好，令牙垢膜長期積聚，分泌出毒素感染牙周組織，導致牙肉腫脹或流牙血。如發炎情況持續，令牙槽骨受到侵蝕，形成「牙周袋」，當情況持續惡化的時候，便會令牙齒變得鬆動，移位，甚至脫落。'
    },
    {
      Q: '甚麼人較容易有牙周病?',
      A: '1. 吸煙人士\n2. 沒有定期口腔檢查及洗牙\n3. 全身性疾病患者（如：AIDS、糖尿病等）\n4. 長期服用藥物人士'
    },
    {
      Q: '為何定期洗牙，早晚刷牙，也會患上牙周病？',
      A: '定期洗牙的確能維持口腔健康，但牙周病並不只是牙齦出現問題，牙周骨質受到破壞也有影響。最近亦有研究顯示，牙周病與糖尿病有若干關係。因此，定期口腔檢查及洗牙是必須的。'
    },
    {
      Q: '接受牙周治療後，牙齒為何會變酸軟或敏感？',
      A: '由於牙周病令牙齦萎縮，牙根外露，因此接受牙根刮治後，有些牙齒會變得更敏感，但這些情況一般會在三至四天後慢慢消退。'
    },
    {
      Q: '接受牙周治療後，需要多久覆診一次？',
      A: '牙醫會按病況的嚴重程度，患者的配合程度而預計覆診時間。一般建議情況受控的患者每三個月覆診一次，監察牙周康復進程。'
    }
  ]
}

</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <!-- <LanguageSwitcher /> -->
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
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
    <!-- 过程 -->
    <ServiceProcess :processData="processData" />
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
        font-size: 24px;
        line-height: 160%;
        color: #4D4D4D;
      }
      &:nth-of-type(odd){
        .symptom-lists-in-img{
          background: #FFF1F0;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {}

//md
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
          font-size: 20px;
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