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
  img: 'https://static.cmereye.com/imgs/2023/11/5e7d301ce4112f57.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2023/11/6e71e9d443f0ec56.jpg',
  pageName: 'periodontal-test',
  pcText: ['健康牙齒，從牙周病治療開始','保持清新口氣、牙肉年輕'],
  mbText: ['健康牙齒','從牙周病治療開始']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.periodontal.introduce.title',
  content: '牙周病為常見的口腔疾病，這種慢性疾病會引致牙齒移位及鬆脫，不但影響美觀，還會影響口腔健康。',
  mbImg: 'https://static.cmereye.com/imgs/2023/11/3f3d338958c5f8d6.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/11/38143ec138e85da7.jpg',
  tabNavName: 'pages.dental-service.periodontal.introduce.tabNavName',
  pageName: 'periodontal-test'
}

// const reasonData = {
//   title: 'pages.dental-service.periodontal.reason.title',
//   text: 'pages.dental-service.periodontal.reason.text',
//   imgUrl: 'https://static.cmereye.com/imgs/2023/05/907c5d9eee09d9ea.jpg',
//   reasonLists:[
//     {
//       context: 'pages.dental-service.periodontal.reason.lists[0].context',
//     },
//     {
//       context: 'pages.dental-service.periodontal.reason.lists[1].context',
//     },
//     {
//       context: 'pages.dental-service.periodontal.reason.lists[2].context',
//     }
//   ],
//   pageName: 'periodontal'
// }

const symptomData = {
  title: '牙周病的症狀',
  lists: [
    // {
    //   imgUrl: 'https://static.cmereye.com/imgs/2023/05/802fd6c8cf970f64.png',
    //   title: '刷牙時牙齦出血'
    // },
    // {
    //   imgUrl: 'https://static.cmereye.com/imgs/2023/05/4778a5335712795b.png',
    //   title: '牙肉紅腫'
    // },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/255727cb71ff0818.png',
      title: '口氣異常'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/ba588e0ec3a4886b.png',
      title: '牙齒移位及鬆脫'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/7a881e098e009caf.png',
      title: '牙齒對冷熱敏感'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/fa8e1c16a765fd83.png',
      title: '牙根外露'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/34ff8a710678a5ce.png',
      title: '牙齦萎縮'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/dc65923fd22afa42.png',
      title: '牙縫變大'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/c3f0969e2ce1ca7c.png',
      title: '牙齦腫脹變色'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/74f3d9aa48972f0b.png',
      title: '牙齦流血'
    }
  ]
}

const care2Data = {
  title: '牙周病高危族群',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/3a8aebd98eb367cb.png',
      title: '吸煙人士'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/9d13ef2ecc25ed5a.png',
      title: '糖尿病患者'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/e74f0a6deb9d93ed.png',
      title: '長期服用藥物'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/9f370e5d5c8691e6.png',
      title: '孕婦'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/8091ef6de0090f9c.png',
      title: '衛生意識薄弱'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/dd6302ca7772dcf9.png',
      title: '飲食不均衡'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/666042444d5e8fbf.png',
      title: '壓力大'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/78e22b1ad88aee0f.png',
      title: '家族遺傳'
    }
  ]
}

const processData = {
  title: '牙周病治療過程',
  tabs: ['牙根刮治\n(深層洗牙)','牙肉翻瓣手術','引導組織再生手術'],
  context: ['若牙周病屬輕微情況，一般僅需進行初診及微創牙周病治療，再定期覆診即可。若錯過治療牙周病的黃金時機，延誤到牙周炎程度，則需要進行牙周手術。'],
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
          // {
          //   title: 'Step 6',
          //   text: '咬緊棉花或紗布止血',
          //   textIn: ''
          // },
        ]
      ]
    }
  ],
  pageName: 'periodontal-test'
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
    // {
    //   Q: 'pages.dental-service.periodontal.problem.lists[0].Q',
    //   A: 'pages.dental-service.periodontal.problem.lists[0].A'
    // },
    // {
    //   Q: 'pages.dental-service.periodontal.problem.lists[1].Q',
    //   A: 'pages.dental-service.periodontal.problem.lists[1].A'
    // },
    // {
    //   Q: 'pages.dental-service.periodontal.problem.lists[2].Q',
    //   A: 'pages.dental-service.periodontal.problem.lists[2].A'
    // },
    // {
    //   Q: 'pages.dental-service.periodontal.problem.lists[3].Q',
    //   A: 'pages.dental-service.periodontal.problem.lists[3].A'
    // },
    // {
    //   Q: 'pages.dental-service.periodontal.problem.lists[4].Q',
    //   A: 'pages.dental-service.periodontal.problem.lists[4].A'
    // },
    {
      Q: '什麼是牙周袋？',
      A: '牙周病會使齒槽骨遭受破壞，導致牙齦萎縮。牙菌斑和牙結石引發的發炎腫脹會使牙肉與牙齒分離，形成「牙周袋」。牙周袋愈深，便愈難清潔，內藏細菌逐漸積聚，令病情惡化。'
    },
    {
      Q: '牙周病可自行痊癒嗎？',
      A: '牙周病無法自行痊癒，需透過牙醫的深層清潔牙周袋，並配合調整生活習慣與加強口腔清潔，持續細心觀察，才能緩解病情。'
    },
    {
      Q: '接受牙周病治療後，會出現哪些副作用？',
      A: '牙周病令牙齦萎縮，牙根外露。接受牙周病治療後，會出現暫時性牙齒敏感，這種情況一般會在三至四天後自行消退。若副作用持續，建議及時與牙醫聯繫。'
    },
    {
      Q: '牙周病會遺傳嗎？',
      A: '國際牙周病研討會研究指出，牙周病中的侵襲性牙周炎是有遺傳傾向的。若家族中有牙周病史，或年輕人罹患牙周病，建議其家人也定期檢查牙周狀況，以及採取預防措施，減低牙周病的發病率。'
    }
  ]
}

const reasonData = {
  title: '為何要定期洗牙？',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/11/c4238b3a85294efc.jpg',
      context: '牙齦及牙齒邊緣長期積聚牙菌膜，細菌分泌毒素刺激牙齦，引發牙齦炎。',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/809923ea93fc6e3d.jpg',
      context: '牙齦發炎時，牙肉紅腫，刷牙時易出血，牙齒表面積聚牙結石。',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/034a5f0ca1755f9c.jpg',
      context: '牙齦炎情況持續，形成「牙周袋」，食物殘渣、牙菌膜和牙石等更易堆積在內，牙周組織遭受破壞，令情況進一步惡化，進而形成牙周炎。',
    },
  ],
}

const reason2Data = {
  title: '牙周病4階段',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/11/4e55161480814853.png',
      context: '牙齦炎',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/f7510b958ec91963.png',
      context: '輕度牙周病',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/1c6c60d91d583f84.png',
      context: '中度牙周病',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/c90e097b4197e5ba.png',
      context: '重度牙周病',
    }
  ]
}

const toWhatsApp = () => {
  location.href = 'https://api.whatsapp.com/send/?phone=85269338128'
}
</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- <ServiceReason :reasonData="reasonData" /> -->
    <div class="reason">
      <div class="dentistryServices-title reason-title">
        <div class="dentistryServices-title-in bb reason-title-in">
          {{ reasonData.title }}
        </div>
      </div>
      <div class="reason-lists">
        <div
          v-for="(item, index) in reasonData.reasonLists"
          :key="index"
          class="reason-lists-item"
        >
          <div class="image">
            <img :src="item.img" alt="" />
          </div>
          <div class="text">
            {{ item.context }}
          </div>
        </div>
      </div>
    </div>
    <div class="reason2">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          {{ reason2Data.title }}
        </div>
      </div>
      <div class="reason2-lists">
        <div
          v-for="(item, index) in reason2Data.reasonLists"
          :key="index"
          class="reason2-lists-item"
        >
          <div class="image">
            <span>{{index+1}}</span>
            <img :src="item.img" alt="" />
          </div>
          <div class="text">
            {{ item.context }}
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="symptom">
      <div class="dentistryServices-title symptom-title">
        <div class="dentistryServices-title-in bb symptom-title-in">{{symptomData.title}}</div>
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
    </div> -->
    <div class="care">
      <div class="dentistryServices-title care-title">
        <div class="dentistryServices-title-in bb care-title-in">
          {{ symptomData.title }}
          <!-- <span>{{ symptomData.title[1] }}</span> -->
        </div>
      </div>
      <div class="care-lists">
        <div
          v-for="(careItem, careIndex) in symptomData.lists"
          :key="careIndex"
          class="care-lists-item"
        >
          <div>
            <div class="image">
              <div class="image-in">
                <img :src="careItem.imgUrl" :alt="careItem.title" />
              </div>
            </div>
            <div class="text">{{ careItem.title }}</div>
          </div>
        </div>
      </div>
      <div class="care-btn">
        <div ref="detailBtn" class="btn">
          <span @click="toWhatsApp">與我們了解更多</span>
          <!-- <span :class="{ showYaAnim: showYaAnim }" @click="toWhatsApp"
            >與我們了解更多</span
          > -->
        </div>
      </div>
    </div>
    <div class="note">
      <div class="dentistryServices-title note-title">
        <div class="dentistryServices-title-in bb note-title-in">
          {{noteData.title}}
        </div>
      </div>
      <div class="note-content">
        <div class="note-content-l">
          <img
            src="https://static.cmereye.com/imgs/2023/11/5ef6ba18cee4782a.jpg"
            alt=""
          />
        </div>
        <div class="note-content-r">
          <div
            v-for="(noteItem, noteIndex) in noteData.lists"
            :key="noteIndex"
          >
            <span>·</span>
            <span>{{ $t(noteItem.name) }}</span>
          </div>
        </div>
      </div>
    </div>
    <ServiceProcess :processData="processData" />
    <!-- <ServiceNote :noteData="noteData" /> -->
    <div class="care2">
      <div class="care2-btn">
        <div ref="detailBtn" class="btn">
          <span @click="toWhatsApp">立即線上諮詢</span>
          <!-- <span :class="{ showYaAnim: showYaAnim }" @click="toWhatsApp"
            >立即線上諮詢</span
          > -->
        </div>
      </div>
      <div class="dentistryServices-title care2-title">
        <div class="dentistryServices-title-in bb care2-title-in">
          {{ care2Data.title }}
        </div>
      </div>
      <div class="care2-lists">
        <div
          v-for="(careItem, careIndex) in care2Data.lists"
          :key="careIndex"
          class="care2-lists-item"
        >
          <div>
            <div class="image">
              <div class="image-in">
                <img :src="careItem.imgUrl" :alt="careItem.title" />
              </div>
            </div>
            <div class="text">{{ careItem.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.reason {
  margin-top: 188px;
  &-title {
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 116px auto 0;
    &-item {
      padding: 0 45px;
      width: calc(100% / 3);
      .image {
        position: relative;
        img {
          width: 100%;
        }
      }
      .text {
        color: #fc1682;
        font-size: 35px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%;
        // text-align: center;
        width: 100%;
        max-width: 90%;
        margin: 35px auto 0;
      }
    }
  }
}
.reason2 {
  margin-top: 150px;
  &-title {
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 53px auto 0;
    &-item {
      padding: 0 45px;
      width: calc(100% / 4);
      .image {
        position: relative;
        img {
          width: 100%;
        }
        span{
          font-size: 50px;
          font-weight: 700;
          color: #4d4d4d;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .text {
        color: #4d4d4d;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        text-align: center;
        width: 100%;
        max-width: 90%;
        margin: 20px auto 0;
      }
    }
  }
}
.symptom{
  margin-top: 126px;
  width: 100%;
  max-width: 1200px;
  margin: 126px auto 0;
  &-title {
    &-in {
      font-size: 50px;
    }
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    margin-top: 54px;
    padding: 0 45px;
    &-in{
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img{
        width: 184px;
        height: 184px;
        margin: 0 auto;
        background: #FFF1F0;
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
      &:nth-of-type(2),&:nth-of-type(4),&:nth-of-type(5),&:nth-of-type(7){
        .symptom-lists-in-img{
          background: var(--indexColor2);
        }
      }
    }
  }
}
.note {
  margin-top: 100px;
  &-title {
    &-in {
      font-size: 50px;
      span {
        color: var(--indexColor1);
      }
    }
  }
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1286px;
    margin: 80px auto 0;
    &-l {
      width: calc((482 / 1242) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      margin-left: calc((42 / 1242) * 100%);
      flex: 1;
      & > div {
        display: flex;
        span {
          color: #4d4d4d;
          font-size: 28px;
          line-height: 160%;
          font-weight: 600;
          &:nth-of-type(1) {
            min-width: 30px;
          }
        }
      }
    }
  }
}
.care {
  margin-top: 140px;
  &-title {
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 54px auto 0;
    &-item {
      width: calc(100% / 4);
      & > div {
        .image {
          width: 100%;
          position: relative;
          padding: 0 calc((89px / 273px) * 100% / 2);
          &-in {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background: #fff1f0;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 90%;
              max-height: 90%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          white-space: nowrap;
        }
      }
      &:nth-of-type(n + 5) {
        margin-top: 90px;
      }
      &:nth-of-type(2),&:nth-of-type(4),&:nth-of-type(5),&:nth-of-type(7) {
        & > div {
          .image {
            &-in {
              background: #fee6f1;
            }
          }
        }
      }
    }
  }
  &-btn {
    .btn {
      margin-top: 55px;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      span {
        box-shadow: 0px 1.74695px 3.4939px 0px rgba(252, 22, 130, 0.38);
        font-size: 35px;
        font-weight: 900;
        color: #fff;
        border-radius: 40px;
        padding: 5px 90px;
        background: var(--indexColor1);
        cursor: pointer;
        top: 0;
        &:nth-of-type(2) {
          color: var(--indexColor1);
          background: #fff;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          animation: btnAnim 1s linear;
          animation-fill-mode: forwards;
          width: max-content;
          display: none;
        }
        &.showYaAnim {
          display: flex;
          animation: btnAnim 1s linear;
          animation-fill-mode: forwards;
        }
      }
    }
  }
}
.care2 {
  margin-top: 78px;
  padding-bottom: 25px;
  &-title {
    margin-top: 126px;
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 54px auto 0;
    &-item {
      width: calc(100% / 4);
      & > div {
        .image {
          width: 100%;
          position: relative;
          padding: 0 calc((89px / 273px) * 100% / 2);
          &-in {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background: #fee6f1;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 90%;
              max-height: 90%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          white-space: nowrap;
        }
      }
      &:nth-of-type(n + 5) {
        margin-top: 15px;
      }
    }
  }
  &-btn {
    .btn {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      span {
        box-shadow: 0px 1.74695px 3.4939px 0px rgba(252, 22, 130, 0.38);
        font-size: 35px;
        font-weight: 900;
        color: #fff;
        border-radius: 40px;
        padding: 5px 90px;
        background: var(--indexColor1);
        cursor: pointer;
        top: 0;
        &:nth-of-type(2) {
          color: var(--indexColor1);
          background: #fff;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          animation: btnAnim 1s linear;
          animation-fill-mode: forwards;
          width: max-content;
          display: none;
        }
        &.showYaAnim {
          display: flex;
          animation: btnAnim 1s linear;
          animation-fill-mode: forwards;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .reason {
    &-lists {
      &-item {
        .text {
          font-size: 3vw;
        }
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  .reason {
    margin-top: 80px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      flex-direction: column;
      margin: 72px auto 0;
      &-item {
        padding: 0 52px;
        width: 100%;
        .text {
          font-size: 20px;
          margin-top: 20px;
        }
        &:not(:last-child) {
          margin-bottom: 53px;
        }
      }
    }
  }
  .reason2 {
    margin-top: 80px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      flex-direction: column;
      margin: 41px auto 0;
      &-item {
        padding: 0 40px;
        width: 100%;
        .text {
          font-size: 20px;
          margin-top: 16px;
        }
        &:not(:last-child) {
          margin-bottom: 53px;
        }
      }
    }
  }
  .symptom{
    margin-top: 70px;
    &-lists{
      padding: 0 15px;
      margin-top: 28px;
      &-in{
        width: calc(100% / 3);
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
            background: var(--indexColor2);
          }
        }
        &:nth-of-type(3),&:nth-of-type(7){
          .symptom-lists-in-img{
            background: #FFF1F0;
          }
        }
      }
    }
  }
  .note {
    margin-top: 55px;
    &-title {
      &-in {
        font-size: 26px;
        span {
          display: inline-block;
        }
      }
    }
    &-content {
      flex-direction: column;
      align-items: flex-start;
      margin: 54px auto 0;
      &-l {
        width: 100%;
        padding: 0 53px;
      }
      &-r {
        margin-left: 0;
        padding: 35px 30px 0;
        & > div {
          span {
            font-size: 16px;
            font-weight: 500;
            &:nth-of-type(1) {
              min-width: 15px;
            }
          }
        }
      }
    }
  }
  .care {
    margin-top: 80px;
    padding-bottom: 0px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 34px 15px 0;
      &-item {
        width: calc(100% / 3);
        & > div {
          .image {
            padding: 0 5px;
          }
          .text {
            white-space: pre-wrap;
            font-size: 14px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
        &:nth-of-type(2),&:nth-of-type(4),&:nth-of-type(5),&:nth-of-type(7) {
          & > div {
            .image {
              &-in {
                background: #fff1f0;
              }
            }
          }
        }
        &:nth-of-type(2n + 2) {
          & > div {
            .image {
              &-in {
                background: #fee6f1;
              }
            }
          }
        }
      }
    }
    &-btn {
      .btn {
        margin-top: 35px;
        span {
          font-size: 20px;
          padding: 5px 70px;
          box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
        }
      }
    }
  }
  .care2 {
    margin-top: 0px;
    padding-bottom: 0px;
    &-title {
      margin-top: 57px;
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 34px 15px 0;
      &-item {
        width: calc(100% / 3);
        & > div {
          .image {
            padding: 0 5px;
            &-in{
              img{
                max-width: 70%;
                max-height: 70%;
              }
            }
          }
          .text {
            white-space: pre-wrap;
            font-size: 14px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
      }
    }
    &-btn {
      .btn {
        margin-top: 35px;
        span {
          font-size: 20px;
          padding: 5px 70px;
          box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
        }
      }
    }
  }
}
</style>
