<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp } from '~/assets/js/common'
const appState = useAppState()
appState.setDentistryService('invisalign')
useHead({
  title: "隱形矯正",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健隱形矯齒服務減5000元,香港熱線: 6933 8128免費預約掛號,羅湖福田深圳灣口岸分店，採用最新技術與個人化矯齒計劃打造黃金比例臉型',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳牙科 深圳愛康健口腔醫院 愛康健齒科集團 基楚牙科 美容牙科 高階牙科 醫療券 長者醫療券大灣區試點 案例 牙醫 牙医 深圳 羅湖 朱咪咪 掛號 收費 價目表 線上預約 矯齒 箍牙 隱形牙套 矯齒價錢 箍牙價錢 箍牙流程 牙齒擠擁 倒及牙 齙牙 箍牙時間 微笑設計 美容牙科 微笑曲線 黃金比例 隱形牙套 隱形矯正器 牙齒矯正 透明牙套 牙醫推薦',
   },
  ]
})

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/03/56c826da104ca7a0.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2024/03/d2587169a5d42cd0.jpg',
  }
]

const orthodonticsIntroduceData = {
  title: '什麼是隱形矯正？',
  content: '隱形矯正是一種活動式透明牙箍，透過先進數位科技，模擬出牙齒移動過程，將牙齒逐步推向理想位置。並利用牙箍的機械性力量令牙周組織產生移動，達到矯正的目的。',
  mbImg: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/yu56uutyu.3x1lwnesqh40.jpg',
  pcImg: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image7895.6do1esh3zu80.jpg',
  tabNavName: '隱形矯正',
  pageName: 'invisalign'
}

const problemData = {
  title: '隱形矯正常見問題',
  lists: [
    {
      Q: '隱形矯正療程需時多久？',
      A: '療程長短因人而異，視乎矯齒難度。一般約需1年至1年半，較複雜情況可能超過2年，而初見改善需約3個月。'
    },
    {
      Q: '隱形矯正有年齡限制嗎？',
      A: '隱形矯正無明確年齡界線，只需擁有充足牙齒且專科主任評估適合便可。兒童為最理想的矯齒黃金期，於7歲起換牙期進行牙科評估，提前處理牙冠及矯正需求。'
    },
    {
      Q: '隱形矯正會產生痛楚嗎？',
      A: ' 隱形矯正利用溫和力量移動牙齒，酸軟感較其他矯正療程低。初期戴新牙箍可能感到緊繃，數日後會自然消退。'
    }
  ]
}

const stepData = {
  title: '隱形矯正治療流程',
  lists: [
    {
      title: '第1步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle89727.5wywzpnocg00.jpg',
      name: '面診諮詢',
      context: '與專科主任交談，理解客人矯正需求，深入探討隱形牙箍治療流程及期待效果。',
    },
    {
      title: '第2步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle78927.na1kw38hz4g.jpg',
      name: '口腔檢查',
      context: '為客人進行口腔全面檢查，評估牙齒狀態和咬合問題。',
    },
    {
      title: '第3步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectang786727.3m6icbbgac80.jpg',
      name: '定制方案',
      context: '根據口腔檢查結果及客人需求，定製個人化治療方案，達到最佳矯正效果。',
    },
    {
      title: '第4步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangl6956727.3uyz0rhi2tm0.jpg',
      name: '牙箍製作',
      context: '依照方案，我們與專業廠商運用現代科技定製隱形牙箍，並寄回門診醫院。',
    },
    {
      title: '第5步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectan956727.7ayu6mc7y5s0.jpg',
      name: '配戴指導',
      context: '隱形牙箍完成後，會教導客人正確配戴方式。除進食和刷牙外，客人需全天配戴。',
    },
    {
      title: '第6步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectang5695627.3pp1abtn4ae0.jpg',
      name: '追蹤狀況',
      context: '治療期間，客人需定期覆診，讓專科主任追蹤進度並調整計劃。',
    },
    {
      title: '第7步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectang695627.3e3udij83mg0.jpg',
      name: '療程結束',
      context: '當牙齒矯正達到預期效果，矯正療程便告一段落。客人需定期配戴固定器，確保牙齒保持理想位置。',
    },
  ],
}

const caseLists = [
  {
    img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Ellipse785203.6a7dtcro1wo0.png',
    name: 'Natalie',
    jos: '大學生',
    context: '未箍牙之前，每次露齒笑都好尷尬，喺學校真係唔敢識新朋友。經過年半箍牙療程，成個人自信返晒嚟，更容易識到新朋友添！'
  },
  {
    img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Ellipse568202.1tnubdc0cgo0.png',
    name: 'Chloe',
    jos: '職場OL',
    context: '平日返工都好羨慕啲女同事個個牙齒整齊又白淨，搞到我心郁郁想箍牙。箍牙後塊面望起上嚟瘦咗，笑容都自信咗好多。'
  },
  {
    img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Ellipse5634604.35rbxs3bw6e0.png',
    name: 'Shirley',
    jos: '平面模特兒',
    context: '做Model除咗個樣要靚之外，笑容都好重要，所以我揀咗隱形牙箍療程，令我喺平日拍攝工作上笑得更上鏡自然。'
  },
]

const noteData = {
  title: '隱形牙箍日常保養',
  lists: [
    {
      name: '每天須自律佩戴20至22小時',
    },
    {
      name: '進食時需除下隱形牙箍',
    },
    {
      name: '盡量避免飲用染色飲料',
    },
    {
      name: '佩戴前應保持口腔衛生',
    }
  ]
}
const bpData ={
  title: '哪種牙齒狀況適合隱形矯正 ？',
  text: '在當今競爭激烈的社會中，個人形象已成為一種重要的競爭力。不論是在現實社會還是網絡中，個人形象都能給人留下深刻的印象，對於找工作、交朋友、學習、升職等方面都有著不可忽視的影響。牙齒不僅直接影響面容和微笑，更能夠反映一個人的健康和生活態度。所以，關注自己的形象不但是邁向成功的第一步，更是建立自信微笑的重要一步！',
  lists: [
    {
      title: '咬合過深',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/fcc14b39b1425784.jpg'
    },
    {
      title: '倒 及',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1556.6xop3m9cz3k0.jpg'
    },
    {
      title: '錯咬/個別反咬合',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-39-(1).5dt9vtsy9w00.jpg'
    },
    {
      title: '牙縫過大',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-40-(1).2l66y7enxs80.jpg'
    },
    {
      title: '開 咬',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-41-(1).3fzvrknw66c0.jpg'
    },
    {
      title: '齒列擠擁',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-42-(1).7f6rnufo4vk0.jpg'
    },
  ]
}

const advantageData = {
  title: '隱形牙箍四大優點',
  lists: [
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/z0x4bI.tif.48men0yif480.png',
      name: '透明無痕',
      text: '採用獨特透明設計，\n無金屬部分露出，讓笑容更自然。'
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1575.15r621pvsabg.png',
      name: '清潔便利',
      text: '可隨時戴脫，方便清潔，\n減低口腔問題風險。'
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1486.46ttbalb42o0.png',
      name: '舒適貼身',
      text: '採用輕薄柔軟材質，減少口腔內軟組織的摩擦，提供無比的舒適感。'
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1487.52a5et9f3ts0.png',
      name: '彈性回診',
      text: '回診時間可根據專科主任的建議適度延長，可達六至八星期。'
    },
  ]
}
const differData = {
  title: '矯正技術的區別？',
  listDatas: [
    {
      name: '',
      firstText: '隱形式',
      secondText: '傳統式'
    },
    {
      name: '材質',
      firstText: '活動自如，以塑料或樹脂製成。',
      secondText: '固定不動，以金屬或陶瓷製成。'
    },
    {
      name: '舒適度',
      firstText: '採用柔軟輕薄物料，無金屬環和鐵線，舒適度更高。',
      secondText: '配戴初期可能會引起不適感，如口腔潰瘍或牙齦刺激，金屬鋼箍也會對口腔軟組織造成摩擦和壓力。'
    },
    {
      name: '療程時長',
      firstText: '療程時長因人而異，需要一年至兩年的時間，具體取決於個人的牙齒情況。',
      secondText: '需要一年半或更長的時間才能達到理想的矯正效果。'
    },
    {
      name: '回診時間',
      isArrayType: true,
      firstText: '通常每兩至三個月回診一次，以檢查矯正進度並更換新牙套。',
      secondText: '回診頻率較高，通常每一個月需回診進行調整。'
    },
    {
      name: '優點',
      firstText: '外觀隱蔽，不易被察覺，可自行除戴，方便清潔口腔。',
      secondText: '矯正效果更佳，適用於各種牙齒狀況。'
    }
  ]
}
</script>


<template>
<div>
  <PageBanner :isApiConfig="true" :apiId="'179'" />
  <div class="pageIn whitebgColor">
    <div class="smallPageCon pageTitle">
      <div class="index_title">{{$t('pages.dental-service.title')}}</div>
    </div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <div class="bp">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          <span>{{bpData.title}}</span>
        </div>
      </div>
      <div class="bp-text">
        <div>
          <span>專注於</span>
          前排上下8顆牙齒
        </div>
        <div>
          <span>塑造</span>
          完美微笑曲線
        </div>
      </div>
      <div class="bp-lists">
        <div class="bp-lists-in" v-for="(bpItem,bpIndex) in bpData.lists" :key="bpIndex">
          <div class="bp-lists-in-title">{{bpItem.title}}</div>
          <img :src="bpItem.imgUrl" alt="" />
        </div>
      </div>
      <div class="bp-btn">
        <PageAnimBtnTypeTwo :str="'獲取免費諮詢'" />
      </div>
        
    </div>
    <div class="advantage">
      <div class="advantage-title dentistryServices-title">
        <div class="dentistryServices-title-in bb">隱形牙箍四大優點</div>
      </div>
      <div class="advantage-lists">
        <div class="advantage-lists-in" v-for="(advantageItem,advantageIndex) in advantageData.lists" :key="advantageIndex">
          <div class="advantage-lists-in-image">
            <span>{{advantageIndex + 1}}</span>
            <img :src="advantageItem.img" alt="">
          </div>
          <div class="advantage-lists-in-name">{{advantageItem.name}}</div>
          <div class="advantage-lists-in-text">{{advantageItem.text}}</div>
        </div>
      </div>
    </div>
    <div class="differ">
      <div class="differ-title dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{differData.title}}</div>
      </div>
      <div class="differ-lists">
        <div class="differ-lists-in" v-for="(listDatasItem,listDatasIndex) in differData.listDatas" :key="listDatasIndex">
          <div>{{listDatasItem.name}}</div>
          <div>{{listDatasItem.firstText}}</div>
          <div>{{listDatasItem.secondText}}</div>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-in">
        <div class="dentistryServices-title step-title">
          <div class="dentistryServices-title-in bb step-title-in">
            {{ stepData.title }}
          </div>
        </div>
        <div class="step-lists">
          <div
            v-for="(stepItem, stepIndex) in stepData.lists"
            :key="stepIndex"
            class="step-lists-in"
          >
            <div class="step-lists-in-l">
              <div class="title">
                <img src="@/assets/images/icon_13.png" alt="" />
                {{ stepItem.title }}
              </div>
              <div class="image"><img :src="stepItem.img" alt="" /></div>
              <div class="name">{{ stepItem.name }}</div>
              <div class="context">{{ stepItem.context }}</div>
            </div>
            <div class="step-lists-in-r">
              <img src="@/assets/images/icon_12.png" alt="" />
            </div>
          </div>
          <div class="step-lists-in">
            <div class="lastBox-t">
              <div><img src="@/assets/images/icon_13.png" alt="" /></div>
              <div>別讓牙齒問題，阻礙<span>笑容綻放!!</span></div>
              <div><img src="@/assets/images/icon_13.png" alt="" /></div>
            </div>
            <div class="lastBox-b">
              <!-- <span @click="toWhatsApp">立即預約牙齒檢查</span> -->
              <PageAnimBtnTypeTwo :str="'立即預約牙齒檢查'" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="case-title">
        <div class="case-title-in">個案分享</div>
      </div>
      <div class="case-context">
        <span>
          締造自信燦爛笑顏
        </span>
        <span>
          我只揀愛康健！
        </span>
      </div>
      <div class="case-content">
        <div class="case-content-in">
          <div v-for="(caseItem,caseIndex) in caseLists" :key="caseIndex">
            <div class="case-content-in-l">
              <div>
                <img :src="caseItem.img" alt="">
              </div>
              <div>
                <span>{{caseItem.jos}}</span>
                <span>{{caseItem.name}}</span>
              </div>
            </div>
            <div class="case-content-in-r">
              {{caseItem.context}}
            </div>
          </div>
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
            src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Vect9854or.4p92fvd4t4e0.jpg"
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
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <NewAddress />
  </div>
</div>
</template>

<style scoped lang="scss">
@keyframes btnAnim {
  0% {
    clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  50% {
    clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
    opacity: 1;
  }
  70%{
    opacity: 1;
  }
  100% {
    clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
    opacity: 0;
  }
}
.bp{
  margin-top: 106px;
  &-text{
    margin-top: 37px;
    div{
      color: #4D4D4D;
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      span{
        color: #FC1682;
      }
    }
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 40px auto 0;
    &-in{
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 39.5px 80px;
      box-sizing: border-box;
      align-items: center;
      &-title{
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        background: var(--indexColor1);
        position: relative;
        &::after{
          content: '';
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 20px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 20px solid;
          border-color: var(--indexColor1) transparent transparent transparent;
        }
      }
      img{
        margin-top: 30px;
        width: 100%;
      }
    }
  }
  &-btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.advantage{
  margin-top: 117px;
  &-title{
    margin-bottom: 54px;
  }
  &-lists{
    width: 100%;
    max-width: 1088px;
    margin: 0 auto;
    display: flex;
    &-in{
      flex: 1;
      margin: 0 calc((22 / 1088) * 100%);
      &-image{
        width: auto;
        margin: 0 calc((22 / 230) * 100%);
        background: #FFF1F0;
        border-radius: 10px;
        height: 0;
        padding-bottom: calc((186 / 230) * 100%);
        position: relative;
        span{
          color: var(--textColor);
          font-size: 40px;
          font-style: normal;
          font-weight: 700;
          line-height: 100%;
          position: absolute;
          left: 10px;
          top: 6px;
        }
        img{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          max-width: 75%;
          max-height: 75%;
        }
      }
      &-name{
        color: var(--indexColor1);
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%;
        margin: 15px 0 10px;
      }
      &-text{
        color: var(--textColor);
        text-align: justify;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; 
      }
      &:nth-of-type(even){
        .advantage-lists-in-image{
          background: #FEE6F1;
        }
      }
    }
  }
}
.differ{
  margin-top: 136px;
  &-lists{
    width: 100%;
    max-width: 1251px;
    margin: 55px auto 0;
    &-in{
      display: flex;
      &:not(:last-child){
        margin-bottom: 15px;
      }
      &:nth-of-type(odd){
        &>div{
          background: #FDD3E3;
        }
      }
      &:nth-of-type(1){
        &>div{
          background: none;
          padding: 0;
          justify-content: center;
          align-items: center;
          min-height: 45px;
          font-size: 28px;
          font-weight: 700;
        }
      }
      &>div{
        color: #4D4D4D;
        font-size: 20px;
        min-height: 112px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%;
        background: #FEE6F1;
        display: flex;
        align-items: center;
        white-space: pre-wrap;
        &:nth-of-type(1){
          width: calc( (122 / 1251) * 100%);
          border-radius: 60px 0 0 60px;
          justify-content: center;
        }
        &:nth-of-type(2){
          width: calc( (715 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (93 / 1251) * 100%);
        }
        &:nth-of-type(3){
          width: calc( (409 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (53 / 1251) * 100%);
          border-radius: 0 60px 60px 0;
        }
      }
    }
  }
}
.step {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 241, 240, 0) 0%,
    rgba(255, 241, 240, 0.7) 12.5%,
    rgba(255, 241, 240, 0.7) 81.99%,
    rgba(255, 241, 240, 0) 100%
  );
  padding: 61px 0 140px;
  margin-top: 163px;
  &-in {
    width: 100%;
    max-width: 1444px;
    margin: 0 auto;
  }
  &-lists {
    margin-top: 98px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-in {
      display: flex;
      align-items: center;
      margin-bottom: 92px;
      &:nth-of-type(7),
      &:nth-of-type(8) {
        margin-bottom: 0;
      }
      &:nth-of-type(3),
      &:nth-of-type(6),
      &:nth-of-type(7) {
        .step-lists-in-r {
          display: none;
        }
      }
      &-l {
        width: 100%;
        max-width: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        .title {
          display: flex;
          align-items: center;
          font-size: 35px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #4d4d4d;
          img {
            height: auto;
            margin-right: 15px;
          }
        }
        .image {
          width: 100%;
          img {
            width: 100%;
            border-radius: 30px;
          }
        }
        .name {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 8px 15px;
          clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
        }
        .context {
          font-size: 20px;
          font-weight: 700;
          color: #4d4d4d;
          padding: 0 15px;
        }
      }
      &-r {
        margin-left: 50px;
        img {
          width: 15px;
          height: auto;
        }
      }
      &:nth-of-type(8) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .lastBox-t {
          display: flex;
          align-items: flex-end;
          & > div {
            color: var(--indexColor1);
            font-size: 35px;
            font-weight: 700;
            span {
              font-size: 85px;
            }
            &:nth-of-type(1) {
              padding-bottom: 25px;
              margin-right: 30px;
            }
            &:nth-of-type(3) {
              padding-bottom: 25px;
              margin-left: 30px;
            }
          }
        }
        .lastBox-b {
          margin-top: 15px;
        }
      }
    }
  }
}
.case{
  width: 100%;
  margin-top: 97px;
  &-title{
    display: flex;
    justify-content: center;
    &-in{
      font-style: normal;
      position: relative;
      font-weight: 600;
      font-size: 30px;
      line-height: 150%;
      text-indent: 65px;
      color: #666666;
      background: url(@/assets/images/indexTitle_bg_2.png) no-repeat;
      background-size: auto 100%;
      padding-bottom: 5px;
      padding-right: 7px;
    }
  }
  &-context{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 21px;
    span{
      color: #FC1682;
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; 
    }
  }
  &-content{
    display: flex;
    justify-content: center;
    margin-top: 46px;
    padding: 58px 0 62px;
    background: linear-gradient(279deg, rgba(252, 22, 130, 0.40) -0.55%, rgba(252, 22, 130, 0.28) -0.54%, rgba(255, 168, 198, 0.00) 99.3%);
    &-in{
      width: 100%;
      max-width: 1560px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      
      &>div{
        display: flex;
        width: calc(100% / 3);
        flex-direction: column;
        background: #fff;
        padding: 14px 29px 25px;
        box-sizing: border-box;
        &:not(:first-child){
          margin-left: 16px;
        }
      }
      
      &-l{
        display: flex;
        img{
          border-radius: 50%;
          margin-top: -36%;
          border: 8px solid #fff;
        }
        span{
          display: block;
          margin-left: 18px;
          &:nth-of-type(1){
            color: #4D4D4D;
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }
          &:nth-of-type(2){
            color: #FC1682;
            font-size: 21px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }
        }
      }
      &-r{
        margin-top: 15px;
        color: #4D4D4D;
        text-align: justify;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
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
@media (min-width: 768px) and (max-width: 1920px) {
  .bp{
    margin-top: 5.5208vw;
    &-text{
      margin-top: 1.9271vw;
      div{
        font-size: 1.8229vw;
      }
    }
    &-lists{
      max-width: 57.2917vw;
      margin: 2.0833vw auto 0;
      &-in{
        padding: 0 2.0573vw 4.1667vw;
        &-title{
          min-width: 8.5938vw;
          height: 2.0833vw;
          line-height: 2.0833vw;
          font-size: 1.0417vw;
          &::after{
            bottom: -2vw;
            border-top: 1.0417vw solid;
            border-left: .4167vw solid;
            border-right: .4167vw solid;
            border-bottom: 1.0417vw solid;
            border-color: var(--indexColor1) transparent transparent transparent;
          }
        }
        img{
          margin-top: 1.5625vw;
        }
      }
    }
  }
  .advantage{
    margin-top: 6.0938vw;
    &-title{
      margin-bottom: 2.8125vw;
    }
    &-lists{
      max-width: 56.6667vw;
      &-in{
        &-image{
          border-radius: .5208vw;
          position: relative;
          span{
            font-size: 2.0833vw;
            left: .5208vw;
            top: .3125vw;
          }
        }
        &-name{
          font-size: 1.4583vw;
          margin: .7813vw 0 .5208vw;
        }
        &-text{
          font-size: 1.25vw;
        }
      }
    }
  }
  .differ{
    margin-top: 7.0833vw;
    &-lists{
      max-width: 65.1563vw;
      margin: 2.8646vw auto 0;
      &-in{
        &:not(:last-child){
          margin-bottom: .7813vw;
        }
        &:nth-of-type(1){
          &>div{
            min-height: 2.3438vw;
            font-size: 1.4583vw;
          }
        }
        &>div{
          font-size: 1.0417vw;
          min-height: 5.8333vw;
          &:nth-of-type(1){
            border-radius: 3.125vw 0 0 3.125vw;
          }
          &:nth-of-type(2){
            margin-left: .1302vw;
          }
          &:nth-of-type(3){
            margin-left: .1302vw;
            border-radius: 0 3.125vw 3.125vw 0;
          }
        }
      }
    }
  }
  .step {
    padding: 3.1771vw 0 7.2917vw;
    margin-top: 8.4896vw;
    &-in {
      max-width: 75.2083vw;
    }
    &-lists {
      margin-top: 5.1042vw;
      &-in {
        margin-bottom: 4.7917vw;
        &-l {
          max-width: 20.8333vw;
          .title {
            font-size: 1.8229vw;
            margin-bottom: .7813vw;
            img {
              margin-right: .7813vw;
            }
          }
          .image {
            img {
              border-radius: 1.5625vw;
            }
          }
          .name {
            font-size: 1.0417vw;
            margin-top: 1.25vw;
            margin-bottom: .7813vw;
            padding: .4167vw .7813vw;
          }
          .context {
            font-size: 1.0417vw;
            padding: 0 .7813vw;
          }
        }
        &-r {
          margin-left: 2.6042vw;
          img {
            width: .7813vw;
          }
        }
        &:nth-of-type(8) {
          .lastBox-t {
            & > div {
              font-size: 1.8229vw;
              span {
                font-size: 4.4271vw;
              }
              &:nth-of-type(1) {
                padding-bottom: 1.3021vw;
                margin-right: 1.5625vw;
              }
              &:nth-of-type(3) {
                padding-bottom: 1.3021vw;
                margin-left: 1.5625vw;
              }
            }
          }
          .lastBox-b {
            margin-top: .7813vw;
          }
        }
      }
    }
  }
  .case{
    margin-top: 5.0521vw;
    &-title{
      &-in{
        font-size: 1.5625vw;
        text-indent: 3.3854vw;
        padding-bottom: .2604vw;
        padding-right: .3646vw;
      }
    }
    &-context{
      margin-top: 1.0938vw;
      span{
        font-size: 1.8229vw;
      }
    }
    &-content{
      margin-top: 2.3958vw;
      padding: 3.0208vw 0 3.2292vw;
      &-in{
        max-width: 81.25vw;
        &>div{
          padding: .7292vw 1.5104vw 1.3021vw;
          &:not(:first-child){
            margin-left: .8333vw;
          }
        }
        &-l{
          img{
            width: 9.1146vw;
            border: .4167vw solid #fff;
          }
          span{
            margin-left: .9375vw;
            &:nth-of-type(1){
              font-size: 1.4583vw;
            }
            &:nth-of-type(2){
              font-size: 1.0938vw;
            }
          }
        }
        &-r{
          margin-top: .7813vw;
          font-size: 1.0417vw;
        }
      }
    }
  }
  .note {
    margin-top: 5.2083vw;
    &-title {
      &-in {
        font-size: 2.6042vw;
      }
    }
    &-content {
      max-width: 66.9792vw;
      margin: 4.1667vw auto 0;
      &-r {
        & > div {
          span {
            font-size: 1.4583vw;
            &:nth-of-type(1) {
              min-width: 1.5625vw;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .advantage{
    margin-top: 40px;
    &-title{
      margin-bottom: 0;
    }
    &-lists{
      max-width: 390px;
      flex-direction: column;
      &-in{
        margin: 44px 30px 0;
        &-image{
          margin: 0 10px;
          padding-bottom: calc(100% - 20px);
          span{
            top: 14px;
            left: 18px;
          }
          img{
            width: 100%;
          }
        }
        &-name{
          margin: 20px 0 18px;
          font-size: 32px;
        }
        &-text{
          font-size: 20px;
          white-space: pre-wrap;
          text-align: center;
        }
      }
    }
  }
  .bp{
    margin-top: 94px;
    &-text{
      margin-top: 44px;
      div{
        font-size: 16px;
      }
    }
    &-lists{
      &-in{
        width: 100%;
      }
    }
    &-btn {
      display: none;
      .btn {
        margin-top: 30px;
        span {
          font-size: 20px;
          padding: 5px 70px;
          box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
        }
      }
    }
  }
  .differ{
    margin-top: 80px;
    &-lists{
      padding: 0 30px;
      margin-top: 35px;
      &-in{
        &:not(:last-child){
          margin-bottom: 4px;
        }
        &>div{
          font-size: 12px;
          box-sizing: border-box;
          min-height: auto;
          &:nth-of-type(1){
            border-radius: 0;
            margin-left: 1px;
            padding: 20px 10px;
            font-size: 16px;
            width: auto;
            flex: 1;
            text-align: center;
          }
          &:nth-of-type(2){
            padding: 20px 14px;
            width: calc( (127 / 315) * 100%);
          }
          &:nth-of-type(3){
            border-radius: 0;
            margin-left: 1px;
            padding: 20px 14px;
            width: calc( (127 / 315) * 100%);
          }
        }
        &:nth-of-type(1){
          &>div{
            font-size: 16px;
            padding: 0;
          }
        }
        &:nth-of-type(2){
          &>div{
            &:nth-of-type(1){
              border-radius: 20px 0 0 0;
            }
            &:nth-of-type(3){
              border-radius: 0 20px 0 0;
            }
          }
        }
        &:nth-of-type(3){
          &>div{
            &:nth-of-type(1){
              padding: 0;
            }
          }
        }
        &:last-child{
          &>div{
            &:nth-of-type(1){
              border-radius: 0 0 0 20px;
            }
            &:nth-of-type(3){
              border-radius: 0 0 20px 0;
            }
          }
        }
      }
    }
  }
  .case{
    margin-top: 20px;
    background: linear-gradient(279deg, rgba(252, 22, 130, 0.40) -0.55%, rgba(252, 22, 130, 0.28) -0.54%, rgba(255, 168, 198, 0.00) 99.3%);
    padding: 44px 30px;
    &-title{
      &-in{
        font-size: 20px;
        text-indent: 45px;
      }
    }
    &-context{
      margin-top: 44px;
      span{
        font-size: 16px;
      }
    }
    &-content{
      background: none;
      margin-top: 44px;
      padding: 0;
      &-in{
        flex-direction: column;
        &>div{
          width: 100%;
          padding: 16px 12px;
          &:not(:first-child){
            margin-left: 0px;
            margin-top: 44px;
          }
        }
        &-l{
          align-items: center;
          img{
            width: 125px;
            height: 125px;
            margin-top: 0;
            border: none;
          }
          span{
            margin-left: 15px;
            &:nth-of-type(1){
              font-size: 20px;
            }
            &:nth-of-type(2){
              font-size: 18px;
            }
          }
        }
        &-r{
          margin-top: 10px;
          font-size: 16px;
        }
      }
    }
  }
  .step {
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 12.5%,
      rgba(255, 241, 240, 0.7) 81.99%,
      rgba(255, 241, 240, 0) 100%
    );
    margin-top: 80px;
    padding: 46px 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 57px 40px 0;
      &-in {
        flex-direction: column;
        margin-bottom: 30px;
        &:nth-of-type(n + 4) {
          margin-bottom: 30px;
        }
        &:nth-of-type(3),
        &:nth-of-type(6) {
          .step-lists-in-r {
            display: block;
          }
        }
        &-l {
          .title {
            padding: 0 6px;
            font-size: 26px;
          }
          .image {
            padding: 0 6px;
          }
          .name {
            margin-top: -25px;
            font-size: 16px;
            clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
          }
          .context {
            font-size: 16px;
          }
        }
        &-r {
          margin-top: 30px;
          margin-left: 0;
          img {
            transform: rotate(90deg);
          }
        }
        &:nth-of-type(8) {
          margin-top: 15px;
          .lastBox-t {
            & > div {
              font-size: 15px;
              span {
                font-size: 24px;
              }
              img {
                width: 20px;
                height: 22px;
              }
              &:nth-of-type(1) {
                padding-bottom: 5px;
                margin-right: 7px;
              }
              &:nth-of-type(3) {
                padding-bottom: 5px;
                margin-left: 7px;
              }
            }
          }
          .lastBox-b {
            margin-top: 20px;
            // span {
            //   font-size: 20px;
            //   padding: 5px 50px;
            //   border-radius: 25px;
            // }
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
      align-items: center;
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
}
</style>
