<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Autoplay } from 'swiper';
const appState = useAppState()
appState.setDentistryService('general-oral-examination')
useHead({
  title: '口腔檢查｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供一般口腔檢查服務，定期口腔檢查確保牙齒和牙齦的健康，預防各種口腔疾病。牙科醫生通過口腔檢查評估牙齒、牙齦、面部和口腔組織的健康狀況，確保沒有潛在的蛀牙、牙齦發炎或其他口腔問題。要徹底預防一些口腔問題，必須定期接受牙齒檢查和口腔護理',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '口腔檢查 定期口腔檢查 牙齒檢查 檢查牙齒 牙科檢查 基本牙科服務 口腔衛生保健 口腔保健 牙科保健服務 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/05/6e3082c25989960e.webp',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/ebc49dda0d1eb137.webp',
  pageName: 'scaling-and-polishing-test',
  pcText: [],
  mbText: [],
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.general-oral-examination.introduce.title',
  content: '許多人常忽略定期進行口腔檢查的重要性。由於口腔是細菌滋生的溫床，缺乏適當的護理可能會引發諸如蛀牙、口腔潰瘍、牙周炎及牙齦炎等問題。定期的口腔檢查有助於確保牙齒和牙齦的健康，並預防這些口腔疾病的發生。',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/fc2fa3db10c294f7.webp',
  pcImg: 'https://static.cmereye.com/imgs/2024/05/ac6d40ca8a20cdcc.webp',
  tabNavName: 'pages.dental-service.general-oral-examination.introduce.tabNavName',
}

const reasonData = {
  title: 'pages.dental-service.general-oral-examination.reason.title',
  text: 'pages.dental-service.general-oral-examination.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/4077102eecb8a253.jpg',
  reasonLists: [
    {
      context: 'pages.dental-service.general-oral-examination.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.general-oral-examination.reason.lists[1].context',
    },
  ],
  isMediumCW: true,
}

const stepData = {
  title: '一般口腔檢查過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: ['檢查牙齒、牙齦健康'],
      },
      {
        title: 'Step 2',
        text: ['檢查面部或頸項','有否出現異常情況'],
      },
      {
        title: 'Step 3',
        text: ['評估整體口腔健康','狀況及提供建議'],
      },
      {
        title: 'Step 4',
        text: ['需要時建議進行口腔X光造影檢查'],
      },
      {
        title: 'Step 5',
        text: ['提供口腔保健資訊'],
      },
    ],
  ],
}

const problemData = {
  title: 'pages.dental-service.general-oral-examination.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.general-oral-examination.problem.lists[0].Q',
      A: 'pages.dental-service.general-oral-examination.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.general-oral-examination.problem.lists[1].Q',
      A: 'pages.dental-service.general-oral-examination.problem.lists[1].A',
    },
  ],
}

const noticeData = {
  title: '服務包括',
  meritLists: [
    '口腔及牙齒檢查',
    '檢查口腔整體健康狀況包括檢查牙齦、牙齒、口腔組織和面頜骨，以確定是否需要進行進一步的治療。為了評估牙齒和牙齦的整體健康狀況，牙醫可能會建議進行牙齒X光檢查。',
  ],
  shortcomingLists: [
    '口腔 X光片',
    '口腔X光檢查一般分為傳統口內X光和口外全景X光兩種。口內X光可以提供牙齒、骨骼和口腔組織的詳細圖像，能夠幫助牙醫檢測蛀牙、觀察牙根、檢查牙齒四周的骨骼健康、診斷牙周病以及檢查正在生長的牙齒。',
  ],
}
let noticeCurrent = ref(1)

const onSlideChange = (swiper: any) => {
  noticeCurrent.value = swiper.realIndex + 1
}


const noteData = {
  title: '口腔檢查的目的',
  lists: [
    {
      name: '健康評估\n牙科醫生通過檢查可以評估牙齒、牙齦、面頜及其他口腔組織的健康狀況，及早發現潛在的蛀牙、牙齦發炎或其他問題。'
    },
    {
      name: '預防措施\n透過定期檢查及早發現問題，可進行及時治療，避免病情惡化。',
    }
  ]
}

const services_include = {
  title: '服務包括',
  lists: [
    {
      image: 'https://static.cmereye.com/imgs/2024/05/e79c47b6045036ee.webp',
      name: ['口腔及','牙齒檢查'],
      text: '檢查口腔整體健康狀況包括檢查牙齦、牙齒、口腔組織和面頜骨，以確定是否需要進行進一步的治療。為了評估牙齒和牙齦的整體健康狀況，牙醫可能會建議進行牙齒X光檢查。'
    },
    {
      image: 'https://static.cmereye.com/imgs/2024/05/e26252187319b784.webp',
      name: ['口腔','X光片'],
      text: '口腔X光檢查一般分為傳統口內X光和口外全景X光兩種。口內X光可以提供牙齒、骨骼和口腔組織的詳細圖像，能夠幫助牙醫檢測蛀牙、觀察牙根、檢查牙齒四周的骨骼健康、診斷牙周病以及檢查正在生長的牙齒。'
    },
    {
      image: 'https://static.cmereye.com/imgs/2024/05/1f2d5c000d1caf6e.webp',
      name: ['病歷','詢問'],
      text: '牙醫會詢問您的一般健康狀況和任何過去的醫療狀況，因為這些可能影響口腔健康和治療方案。此外，也會問及任何藥物使用情況。'
    },
    {
      image: 'https://static.cmereye.com/imgs/2024/05/1eecac3f9b55ddd1.webp',
      name: ['口腔','健康建議'],
      text: '牙醫會提供關於如何改善日常的口腔護理技巧的建議，例如正確的刷牙和使用牙線的方法。此外，牙醫也可能講解日常飲食對牙齒健康的影響，這些都是導致牙齒腐蝕的常見原因。'
    }
  ]
}
let services_include_cur = ref(0)
let swiperRef:any = {
  slideToLoop: (a)=>{}
}
const setSwiperRef = (swiper:any) => {
  swiperRef = swiper
}
const changeSwiper = (swiper) =>{
  services_include_cur.value = swiper.realIndex
}
const handleServicesInclude = (index) => {
  services_include_cur.value = index
  swiperRef.slideToLoop(index)
}
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" btnText="預約免費牙齒檢查" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
      <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      <div class="note">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{noteData.title}}
          </div>
        </div>
        <div class="note-content">
          <div class="note-content-l">
            <img
              src="https://static.cmereye.com/imgs/2024/05/efd35ad22ef95b91.webp"
              :alt="noteData.title"
              :title="noteData.title"
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
      <div class="services_include">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{services_include.title}}
          </div>
        </div>
        <div class="services_include-in">
          <div class="services_include-in-l">
            <Swiper class="swiperBox" 
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 3000,
            }"
            @swiper="setSwiperRef" 
            @slideChange="changeSwiper">
              <Swiper-slide class="swiperSlide" v-for="(item,index) in services_include.lists" :key="index">
                <div class="swiperIn">
                  <div class="image">
                    <img :src="item.image" :alt="item.name.join()" :title="item.name.join()">
                  </div>
                  <div class="context">
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </Swiper-slide>
            </Swiper>
          </div>
          <div class="services_include-in-r">
            <div class="fan">
            <div class="name">
              <div class="name-in" :class="{act: services_include_cur === index}" v-for="(item,index) in services_include.lists" :key="index" @click.stop="handleServicesInclude(index)">
                <span v-for="(nameItem,nameIndex) in item.name" :key="nameIndex">
                  {{nameItem}}
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frequency">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>口腔檢查頻率</span>
          </div>
        </div>
        <div class="frequency-in">
          <div class="frequency-in-top">
            對於一般人來說，
            <br class="mbBox" />每年進行一次口腔檢查已經足夠。
          </div>
          <div class="frequency-in-top">
            然而，對於某些
            <span>高風險人群</span>，
            <br class="mbBox" />建議每半年或更頻繁地進行口腔檢查。
          </div>
          <div class="frequency-in-title">高危人士包括:</div>
          <div class="frequency-in-lists">
            <div>
              <div>吸煙者</div>
              <div>吸煙者患牙周病的機率比非吸煙者高，高達五倍或以上。</div>
            </div>
            <div>
              <div>患有嚴重口腔疾病的人士</div>
              <div>如嚴重蛀牙、牙周病、口腔癌、裂顎等，需要接受較頻繁的口腔檢查以維護口腔健康。</div>
            </div>
            <div>
              <div>患有系統性疾病人士</div>
              <div>對於患有糖尿病、血友病、愛滋病等系統性疾病的人士，由於身體免疫系統受到妨礙，抵抗病原體的能力降低，如果口腔衛生不佳，牙齒表面的菌斑就會容易引致牙周病，甚至發展成嚴重疾病。</div>
            </div>
          </div>
          <div class="frequency-in-bottom">因此，高風險人群需要更加重視口腔健康，並接受更頻繁的口腔檢查</div>
        </div>
      </div>
      <!-- <ServiceStep :stepData="stepData" /> -->
      <div class="step">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{stepData.titile}}</div>
        </div>
        <div class="step-in">

        </div>
      </div>
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <NewAddress />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>



<style lang="scss" scoped>
.note {
  margin-top: 100px;
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 893px;
    margin: 80px auto 0;
    position: relative;
    &-l {
      width: calc((462 / 893) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      margin-left: calc((48 / 893) * 100%);
      flex: 1;
      & > div {
        display: flex;
        &:not(:last-child){
          margin-bottom: 30px;
        }
        span {
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 38.6px */
          letter-spacing: 3.2px;
          color: var(--textColor);
          white-space: pre-wrap;
          &:nth-of-type(1) {
            min-width: 20px;
            font-size: 26px;
            line-height: 1.5;
          }
        }
      }
    }
  }
}
.notice {
  width: 100%;
  max-width: 1450px;
  margin: 153px auto 0;
  &-in {
    width: 90%;
    margin: 30px auto 0;
    .box {
      .box-in {
        height: 278px;
        margin-top: 15px;
        display: flex;
        background: var(--indexColor2);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child {
          background: var(--indexColor1);
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
        }
        &:nth-of-type(2) {
          margin-top: 0;
        }
      }
    }
    .box-left {
      border-radius: 60px 0 0 60px;
      overflow: hidden;
    }
    .box-right {
      margin-left: 3px;
      border-radius: 0 60px 60px 0;
      overflow: hidden;
      .box-in {
        &:first-child {
          background: var(--indexColor);
        }
      }
    }
  }
  &-line {
    width: 83px;
    margin: 22px auto;
  }
}
.frequency {
  margin-top: 106px;
  &-in {
    width: 100%;
    // max-width: 1246px;
    padding: 59px 50px;
    background: var(--indexColor2);
    box-shadow: 0px 4px 8px var(--indexColor3);
    margin: 35px auto;
    &-top {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      text-align: center;
      color: #666666;
      span {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: var(--indexColor1);
      }
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 160%;
      text-align: center;
      color: var(--indexColor1);
      margin-top: 40px;
    }
    &-lists {
      display: flex;
      margin: 30px auto 0;
      max-width: 1100px;
      & > div {
        padding: 36px 30px;
        background: #fff;
        border-radius: 30px;
        margin: 0 20px;
        font-style: normal;
        box-sizing: border-box;
        min-height: 304px;
        & > div:first-child {
          color: var(--indexColor1);
          font-weight: 500;
          font-size: 22px;
          line-height: 160%;
          text-align: center;
        }
        & > div:last-child {
          color: #666666;
          font-weight: 500;
          font-size: 20px;
          line-height: 160%;
          text-align: justify;
          text-align: center;
        }
        &:nth-of-type(1) {
          min-width: 266px;
        }
        &:nth-of-type(2) {
          min-width: 330px;
        }
      }
    }
    &-bottom {
      margin-top: 54px;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 160%;
      text-align: center;
      color: var(--indexColor1);
    }
  }
}
.services_include{
  margin-top: 106px;
  &-in{
    margin: 60px auto 0;
    display: flex;
    max-width: 880px;
    width: auto;
    gap: 26px;
    &-l{
      flex: 1;
      max-width: 50%;
      // max-height: 427px;
      .swiperBox{
        width: 100%;
        .swiperSlide{
          width: 100%;
          .swiperIn{
            .image{
              width: 100%;
              img{
                width: 100%;
              }
            }
            .context{
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 30.4px */
              letter-spacing: 3.8px;
              color: var(--textColor);
              padding: 20px;
            }
          }
        }
      }
    }
    &-r{
      flex: 1;
      .fan{
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        position: relative;
      }
      .name{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #FDEDF4;
        border-radius: 20px;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        &-in{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          z-index: 1;
          cursor: pointer;
          span{
            width: 100%;
            text-align: center;
            display: block;
            color: var(--textColor);
            font-size: 23px;
            font-style: normal;
            font-weight: 500;
            line-height: 152%;
            position: relative;
            z-index: 1;
            transition: all .3s;
          }
          &::after{
            content: '';
            width: calc(100% - 44px);
            height: calc(100% - 44px);
            position: absolute;
            top: 22px;
            left: 22px;
            border-radius: 10px;
            z-index: 0;
            background: var(--indexColor1);
            opacity: 0;
            transition: all .3s;
          }
          &:hover{
            span{
              color: rgba(255,255,255,.8);
            }
            &::after{
              opacity: .3;
            }
          }
          &.act{
            span{
              color: #fff;
            }
            &::after{
              opacity: 1;
            }
          }
        }
        &::after{
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          background: url(https://static.cmereye.com/imgs/2024/05/c225182317a1ee09.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  
}

@media only screen and (max-width: 768px) {
  .notice {
    margin: 90px auto 0;
    &-in {
      width: 100%;
      margin: 34px 0 0;
      .box {
        margin-left: 30px;
        .box-in {
          font-weight: 500;
          font-size: 15px;
          height: 240px;
          margin-top: 9px;
          padding: 0 46px;
          &:first-child {
            height: 40px;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .box-right {
        margin-right: 30px;
        margin-left: 0;
      }
    }
  }
  .frequency {
    margin: 90px 0 0;
    &-in {
      padding: 24px 30px 35px;
      &-top {
        font-size: 16px;
        font-family: var(--contextFamily);
        span {
          font-family: var(--contextFamily);
          font-size: 16px;
        }
      }
      &-title {
        font-size: 18px;
        margin-top: 30px;
      }
      &-lists {
        flex-direction: column;
        margin: 13px auto 0;
        & > div {
          width: 100%;
          margin: 0;
          padding: 14px 23px;
          min-height: 0;
          border-radius: 15.5967px;
          & > div:first-child {
            font-size: 16px;
          }
          & > div:last-child {
            font-size: 16px;
          }
          &:nth-of-type(1) {
            min-width: 100%;
            margin-bottom: 12px;
          }
          &:nth-of-type(2) {
            min-width: 100%;
            margin-bottom: 12px;
          }
        }
      }
      &-bottom {
        font-size: 16px;
        padding: 0 30px;
        margin-top: 18px;
      }
    }
  }
  .note {
    max-width: 390px;
    margin: 60px auto 0;
    &-content{
      padding: 0 30px;
      margin: 45px auto 0;
      display: flex;
      flex-direction: column;
      &-l {
        width: 100%;
      }
      &-r{
        width: 100%;
        margin-top: 45px;
        padding-right: 10px;
        &>div{
          span{
            font-size: 15px;
            letter-spacing: 2.4px;
            &:nth-of-type(1) {
              font-size: 20px;
              min-width: 15px;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }
  .services_include{
    padding: 0 30px;
    margin-top: 80px;
    &-in{
      flex-direction: column;
      margin: 45px auto 0;
      gap: 0;
      .swiperBox{
        .swiperSlide{
          .swiperIn{
            .context{
              padding: 35px 0 10px;
            }
          }
        }
      }
      &-l{
        max-width: 100%;
      }
      &-r{
        .name{
          border-radius: 15px;
          &-in{
            span{
              font-size: 20px;
            }
            &::after{
              width: calc(100% - 30px);
              height: calc(100% - 30px);
              top: 15px;
              left: 15px;
            }
          }
        }
      }
    }
  }
}
</style>