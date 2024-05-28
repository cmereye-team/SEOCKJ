<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setDentistryService('teeth-whitening')
useHead({
  title: '牙齒美白 ｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙齒美白服務，包括激光牙齒美白及藍光美白牙齒。美白牙齒療程可以有效去除外部和內部的污漬，讓牙齒更加明亮，多年科學研究已經證明美白牙齒是安全的療程。在進行療程之前，牙醫會先檢查牙齒和口腔狀況，確定患者適合進行牙齒美白療程。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '美白牙齒 牙齒美白 激光牙齒美白 藍光牙齒美白 牙齒美白療程 美白牙齒服務 藍光美白牙齒 激光美白牙齒 藍光漂牙 激光漂牙 美白牙齒方法 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/c495a817a3a44207.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/6f9de9264afc70b9.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/c35d4f80203378f9.jpg',
  pageName: 'teeth-whitening',
  pcText: ['淨白牙齒，建立閃亮笑容','安全、可靠、快捷'],
  mbText: ['淨白牙齒','建立閃亮笑容']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.teeth-whitening.introduce.title',
  content: 'pages.dental-service.teeth-whitening.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/528550d9da6d31f9.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/06/20a2795169586423.jpg',
  tabNavName: 'pages.dental-service.teeth-whitening.introduce.tabNavName',
  pageName: 'teeth-whitening',
}

const reasonData = {
  title: 'pages.dental-service.teeth-whitening.reason.title',
  text: 'pages.dental-service.teeth-whitening.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/06/1c0dfb6023dc406a.jpg',
  reasonLists: [
    {
      context: 'pages.dental-service.teeth-whitening.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.teeth-whitening.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.teeth-whitening.reason.lists[2].context',
    },
  ],
  isMediumCW: true
}

const noticeData = {
  title: '藍光美白技術',
  text: [
    [
      '採用高科技冷光技術，結合美白劑，',
      '對不同牙齒特質進行納米冷光護齒美白'
    ],
    [
      '這種技術可以將牙齒內部的大分子染色劑（深色）',
      '分解為小分子（淺色或無色），從而實現美白效果'
    ]
  ],
  lists: [
    {
      name: '滲透美白',
      text: '30分鐘滲透美白因子，能快速滲透到牙齒各個部位。'
    },
    {
      name: '舒適美白',
      text: '低溫藍光照射，舒適治療，避免紫外線和紅外線對牙齒的傷害。'
    },
    {
      name: '健康美白',
      text: '美白分子能快速分解，促進牙釉質再生，保護牙齒，實現健康美白。'
    },
    {
      name: '輕鬆美白',
      text: '一次治療即可提升3-8個VITA色階，輕鬆實現美白效果。'
    }
  ]
}
let noticeCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper: any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

const stepData = {
  title: '藍光牙齒美白過程',
  stepLists: [
    [
          {
            title: 'Step 1',
            text: '醫生評估病人口腔及牙齦狀況，了解病人需求，解釋漂牙的程序及風險等',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '進行簡單清潔',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '以牙齒專用色階進行對色，記錄療程前牙齒顏色的色號',
            textIn: ''
          },
          {
            title: 'Step 4',
            text: '套上口腔張口器及保護眼罩',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '在牙齦塗上牙齦保護劑，以免激光及美白劑刺激牙齦',
            textIn: ''
          }
        ],
        [
          {
            title: 'Step 6',
            text: '在牙齒表面均勻塗上激光專用美白劑',
            textIn: ''
          },
          {
            title: 'Step 7',
            text: '以藍光燈開始照射牙齒，整個過程大概需要照射2-3次',
            textIn: ''
          },
          {
            title: 'Step 8',
            text: '療程完成後，清除美白劑與牙齦保護劑',
            textIn: ''
          },
          {
            title: 'Step 9',
            text: '以牙齒專用色階進行對色，比對療程前後效果',
            textIn: ''
          }
        ]
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '1星期內避免進食刺激性食物及飲品',
    },
    {
      name: '3星期內避免進食色素較多的食物及飲品',
    },
    {
      name: '養成健康生活習慣，盡量避免吸煙',
    },
    {
      name: '早晚刷牙，進食後清潔口腔，保持口腔清潔衛生',
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.teeth-whitening.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[0].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[1].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[2].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[3].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[4].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[5].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[5].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[6].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[6].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[7].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[7].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[8].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[8].A'
    },
  ]
}

const conditionData = {
  title: '',
  text: '',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/451f4a98dd45a4a6.jpg',
      title: '經常吸煙',
      text: '令牙齒變啡黑'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/dd23b041c7c646ea.jpg',
      title: '飲用深色飲品',
      text: '令牙齒變啡黑'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/df6a3dce695c1e42.jpg',
      title: '年齡增長',
      text: '牙齒老化牙齒自然變黃'
    }
  ]
}

</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="smallPageCon">
      <div class="index_title">{{$t('pages.dental-service.title')}}</div>
    </div>
      <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      <ServiceReason :reasonData="reasonData" />
      <div class="condition">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            你有以下情況嗎？
          </div>
        </div>
        <div class="condition-text">
          牙齒美白可解決以下情況所致的<span>牙齒變色問題</span>
        </div>
        <div class="condition-lists smallPageCon">
          <div class="condition-lists-in" v-for="(conditionItme,conditionIndex) in conditionData.lists" :key="conditionIndex">
            <div>
              <img :src="conditionItme.imgUrl" alt="">
            </div>
            <div>
              <span>{{conditionItme.title}}</span>
              <span>{{conditionItme.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{noticeData.title}}</span>
          </div>
        </div>
        <div class="notice-text">
          <div v-for="(noticeTextItem,noticeTextIndex) in noticeData.text" :key="noticeTextIndex">
            <span v-for="textItem in noticeTextItem" :key="textItem">{{textItem}}</span>
          </div>
        </div>
        <div class="notice-in">
          <swiper
            :slidesPerView="windowWidth>768 ? 4: 1.6"
            :scrollbar="{
              hide: true,
            }"
            :modules="[Scrollbar]"
            class="swiper-wrapper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="swiper-slide" v-for="(noticeItem,noticeIndex) in noticeData.lists" :key="noticeIndex">
              <div class="box">
                <div class="box-name">{{noticeItem.name}}</div>
                <div class="box-text">{{noticeItem.text}}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <ServiceStep :stepData="stepData" />
      <div class="maintain">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            藍光美白可以保持多久？
          </div>
        </div>
        <div class="maintain-in">
          藍光美白牙齒的效果通常可以持續兩年左右，但具體的時間長短取決於患者的飲食和衛生習慣。如果患者平時注意牙齒保養，少食用深色食物，並保持良好口腔衛生習慣，如按時刷牙和飯後漱口，那麼美白效果的持續時間相對會更長。
        </div>
      </div>
      <ServiceNote :noteData="noteData" />
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <NewAddress />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>



<style lang="scss" scoped>
.notice {
  width: 100%;
  max-width: 1450px;
  margin: 153px auto 0;
  &-text{
    margin-top: 35px;
    &>div{
      text-align: center;
      span{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
      }
    }
  }
  &-in {
    width: 100%;
    margin: 56px auto 0;
    .box {
      &>div {
        height: 187px;
        margin-top: 15px;
        display: flex;
        background: var(--indexColor2);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 0 70px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        &:first-child {
          background: var(--indexColor1);
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
          align-items: center;
        }
        &:nth-of-type(2) {
          margin-top: 0;
          padding-top: 40px;
        }
      }
    }
    .swiper-slide:not(:last-child){
      padding-right: 3px;
    }
    .swiper-slide:nth-of-type(1){
      .box{
        border-radius: 60px 0 0 60px;
        overflow: hidden;
      }
    }
    .swiper-slide:nth-of-type(4){
      .box{
        border-radius: 0 60px 60px 0;
        overflow: hidden;
      }
    }
  }
  &-line {
    width: 83px;
    margin: 22px auto;
  }
}
.condition{
  margin-top: 147px;
  &-text{
    margin-top: 35px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #666666;
    span{
      color: var(--indexColor1);
    }
  }
  &-lists{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    &-in{
      display: flex;
      flex-direction: column;
      flex: 1;
      max-width: 440px;
      &>div:last-child{
        margin-top: 30px;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 160%;
        text-align: center;
        color: #666666;
        span{
          display: inline-block;
          width: 100%;
          text-align: center;
          &:last-child{
            color: var(--indexColor1);
          }
        }
      }
    }
  }
}
.maintain{
  margin-top: 98px;
  &-in{
    width: calc(100% - 60px);
    max-width: 1206px;
    margin: 35px auto 0;
    background: var(--indexColor2);
    box-shadow: 0px 4px 8px var(--indexColor3);
    padding: 59px 102px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 160%;
    color: #666666;
  }
}

@media (min-width: 768px) and (max-width: 1920px) {
  .condition{
    margin-top: 7.6563vw;
    &-text{
      margin-top: 1.8229vw;
      font-size: 1.0417vw;
    }
    &-lists{
      margin-top: 2.0833vw;
      &-in{
        max-width: 22.9167vw;
        &>div:last-child{
          margin-top: 1.5625vw;
          font-size: 1.1458vw;
        }
      }
    }
  }
  .notice {
    max-width: 75.5208vw;
    margin: 7.9688vw auto 0;
    &-text{
      margin-top: 1.8229vw;
      &>div{
        span{
          font-size: 1.0417vw;
        }
      }
    }
    &-in {
      margin: 2.9167vw auto 0;
      .box {
        &>div {
          height: 9.7396vw;
          margin-top: .7813vw;
          font-size: 1.0417vw;
          padding: 0 3.6458vw;
          &:first-child {
            height: 3.5938vw;
            font-size: 1.4583vw;
          }
          &:nth-of-type(2) {
            padding-top: 2.0833vw;
          }
        }
      }
      .swiper-slide:not(:last-child){
        padding-right: .1563vw;
      }
      .swiper-slide:nth-of-type(1){
        .box{
          border-radius: 3.125vw 0 0 3.125vw;
        }
      }
      .swiper-slide:nth-of-type(4){
        .box{
          border-radius: 0 3.125vw 3.125vw 0;
        }
      }
    }
    &-line {
      width: 4.3229vw;
      margin: 1.1458vw auto;
    }
  }
  .maintain{
    margin-top: 5.1042vw;
    &-in{
      width: calc(100% - 3.125vw);
      max-width: 62.8125vw;
      margin: 1.8229vw auto 0;
      box-shadow: 0px .2083vw .4167vw var(--indexColor3);
      padding: 3.0729vw 5.3125vw;
      font-size: 1.25vw;
    }
  }
}

@media only screen and (max-width: 768px) {
  .notice {
    margin: 90px auto 0;
    &-text{
      margin-top: 26px;
      &>div{
        span{
          font-size: 14px;
          display: inline-block;
        }
      }
    }
    &-in {
      width: 100%;
      margin: 35px auto 0;
      .box {
        &>div{
          font-weight: 600;
          font-size: 14px;
          height: 131px;
          margin-top: 9px;
          padding: 0 23px;
          &:first-child {
            height: 48px;
            font-weight: 700;
            font-size: 20px;
          }
          &:nth-of-type(2){
            padding-top: 28px;
          }
        }
      }
      .swiper-wrapper{
        padding: 0 30px 30px;
        box-sizing: border-box;
      }
      :deep(.swiper-scrollbar){
        width: calc(100% - 60px);
        opacity: 1 !important;
        left: 30px;
        background: var(--indexColor2);
      }
      :deep(.swiper-scrollbar-drag){
        background: var(--indexColor1);
      }
    }
  }
  .condition{
    &-text{
      margin-top: 22px;
      font-size: 14px;
    }
    &-lists{
      margin-top: 2px;
      flex-direction: column;
      padding: 0 30px;
      &-in{
        flex-direction: row;
        margin-top: 22px;
        background: linear-gradient(90deg, var(--indexColor3) 15.38%, rgba(255, 241, 240, 0) 109.42%);
        border-radius: 10px;
        max-width: 100%;
        &>div:first-child{
          height: 100%;
          img{
            width: auto;
            height: 90px;
            border-radius: 10px;
          }
        }
        &>div:last-child{
          flex: 1;
          font-size: 16px;
          margin-top: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          span{
            text-align: left;
            padding-left: 16px;
          }
        }
        &:nth-of-type(2){
          flex-direction: row-reverse;
          background: linear-gradient(270deg, var(--indexColor3) 15.38%, rgba(255, 241, 240, 0) 109.42%);
          &>div:last-child{
            span{
              text-align: right;
              padding-left: 0;
              padding-right: 16px;
            }
          }
        }
      }
    }
  }
  .maintain{
    margin-top: 90px;
    &-in{
      margin: 28px auto 0;
      padding: 24px 12px;
      font-size: 16px;
      text-align: justify;
    }
  }
}
</style>