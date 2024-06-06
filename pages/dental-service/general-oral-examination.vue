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

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/05/6e3082c25989960e.webp',
    mbImg: 'https://static.cmereye.com/imgs/2024/06/c4609debfba9b45c.jpg',
  }
]

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.general-oral-examination.introduce.title',
  content: '許多人常忽略定期進行口腔檢查的重要性。由於口腔是細菌滋生的溫床，缺乏適當的護理可能會引發諸如蛀牙、口腔潰瘍、牙周炎及牙齦炎等問題。定期的口腔檢查有助於確保牙齒和牙齦的健康，並預防這些口腔疾病的發生。',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/fc2fa3db10c294f7.webp',
  pcImg: 'https://static.cmereye.com/imgs/2024/05/ac6d40ca8a20cdcc.webp',
  tabNavName: 'pages.dental-service.general-oral-examination.introduce.tabNavName',
}

const stepData = {
  title: '一般口腔檢查過程',
  stepLists: [
    {
      img: 'https://static.cmereye.com/imgs/2024/05/ae767977839ee26a.png',
      text: ['檢查牙齒、牙齦健康'],
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/05/aa4a51e8ca6733ed.png',
      text: ['檢查面部或頸項','有否出現異常情況'],
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/05/bddc48d6b23920b8.png',
      text: ['評估整體口腔健康','狀況及提供建議'],
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/05/4f75229a1b52a602.png',
      text: ['需要時建議進行口腔X光造影檢查'],
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/05/58d5900bf105e8bf.png',
      text: ['提供口腔保健資訊'],
    },
  ]
}

const problemData = {
  title: 'pages.dental-service.general-oral-examination.problem.title',
  lists: [
    {
      Q: '口腔檢查會痛嗎？',
      A: '一般來說，標準的口腔檢查是無痛的。但如果您有牙齦疾病或牙齒敏感等問題，您可能會感到些許不適。牙科醫生會盡量使用輕柔的手法進行檢查，並在需要時提供麻醉或其他舒緩措施。',
    },
    {
      Q: '小孩應該從何時開始進行口腔檢查？',
      A: '建議孩子在出生後的第一年內，或第一顆乳牙長出後不久就應該開始接受口腔檢查。及早開始定期檢查有助於建立良好的口腔衛生習慣，並及早發現並處理可能的口腔問題。',
    },
    {
      Q: '生痱滋需要做口腔檢查嗎？',
      A: '生痱滋（通常稱為口腔潰瘍）在許多情況下是無害的，可以在幾天到一周內自行癒合。然而，在以下情況下，建議進行口腔檢查：\n潰瘍持續時間長：如果口腔潰瘍持續超過兩周未愈合，建議看牙醫或醫生進行檢查。\n潰瘍經常復發：頻繁出現的潰瘍可能是身體某些潛在問題的指示，如營養缺失、自身免疫疾病或其他健康問題。\n伴隨其他症狀：如果口腔潰瘍伴隨有發熱、難以吞嚥或極度疼痛等症狀，應尋求醫療幫助。\n潰瘍異常大：通常口腔潰瘍的直徑小於1厘米，如果明顯大於這個尺寸，應該進行專業評估。\n進行口腔檢查可以幫助確定潰瘍的原因，並提供相應的治療建議或必要的醫療介入。',
    },
    {
      Q: '牙骹疼痛要看醫生嗎?',
      A: '牙醫可以進行口腔檢查和必要的X光檢查，以確定疼痛的具體原因。\n如果疼痛非常嚴重，伴有臉部或頸部腫脹，發熱，或無法開口等症狀，應該立即尋求緊急醫療幫助。',
    },
    {
      Q: '鼻竇炎可能是牙齒感染引起？',
      A: '當牙齒感染發生在上顎牙齒的根部附近時。這種情況被稱為「牙源性鼻竇炎」。\n症狀：包括典型的鼻竇炎症狀如鼻塞、分泌物、面部壓痛以及牙齒疼痛，特別是在上顎。\n治療：治療牙源性鼻竇炎通常需要牙科和耳鼻喉科的聯合介入。治療牙齒感染通常是解決問題的關鍵，這可能包括根管治療或牙齒的拔除。\n診斷：確定鼻竇炎是否牙源性可能需要綜合考慮症狀、臨床檢查、X光片和CT掃描。',
    }
  ]
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
    <PageBanner :bannerConfig="bannerConfig" />
    <div class="pageIn whitebgColor">
      <div class="smallPageCon pageTitle">
        <div class="index_title">{{$t('pages.dental-service.title')}}</div>
      </div>
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
      <div class="step">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{stepData.title}}</div>
        </div>
        <div class="step-in">
          <div class="lists-in" v-for="(item,index) in stepData.stepLists" :key="index">
            <div class="image">
              <img :src="item.img" :alt="item.text.join()" :title="item.text.join()">
            </div>
            <div class="text">
              <p>
                <span v-for="(textItem,textIndex) in item.text" :key="textIndex">
                  {{textItem}}
                </span>
              </p>
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
.step{
  margin-top: 106px;
  position: relative;
  &-in{
    max-width: 1369px;
    margin: 50px auto 0;
    display: grid;
    gap: 70px;
    grid-template-columns: repeat(5,1fr);
    position: relative;
    .lists-in{
      .image{
        img{
          width: 100%;
        }
      }
      .text{
        margin-top: 10px;
        p{
          font-size: 23px;
          color: var(--indexColor1);
          span{
            display: block;
            text-align: center;
          }
        }
      }
    }
    &::before{
      content: '';
      position: absolute;
      background: url(https://static.cmereye.com/imgs/2024/05/0245d98d5d39cd83.png) no-repeat;
      background-size: 100% 100%;
      width: 14px;
      height: 21px;
      top: 124px;
      left: -50px;
    }
    &::after{
      content: '';
      position: absolute;
      background: url(https://static.cmereye.com/imgs/2024/05/0245d98d5d39cd83.png) no-repeat;
      background-size: 100% 100%;
      width: 14px;
      height: 21px;
      top: 124px;
      right: -50px;
    }
  }
  &::after{
    content: '';
    width: 100vw;
    height: 10px;
    background: var(--indexColor1);
    transform: scaleY(.1);
    position: absolute;
    left: 0;
    top: 240px;
    z-index: -1;
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .note {
    margin-top: 5.2083vw;
    &-content {
      max-width: 46.5104vw;
      margin: 4.1667vw auto 0;
      &-r {
        & > div {
          &:not(:last-child){
            margin-bottom: 1.5625vw;
          }
          span {
            font-size: 1.0417vw;
            letter-spacing: .1667vw;
            &:nth-of-type(1) {
              min-width: 1.0417vw;
              font-size: 1.3542vw;
            }
          }
        }
      }
    }
  }
  .notice {
    max-width: 75.5208vw;
    margin: 7.9688vw auto 0;
    &-in {
      margin: 1.5625vw auto 0;
      .box {
        .box-in {
          height: 14.4792vw;
          margin-top: .7813vw;
          font-size: 1.0417vw;
          padding: 0 4.1667vw;
          &:first-child {
            height: 3.5938vw;
            font-size: 1.4583vw;
          }
        }
      }
      .box-left {
        border-radius: 3.125vw 0 0 3.125vw;
      }
      .box-right {
        margin-left: .1563vw;
        border-radius: 0 3.125vw 3.125vw 0;
      }
    }
    &-line {
      width: 4.3229vw;
      margin: 1.1458vw auto;
    }
  }
  .frequency {
    margin-top: 5.5208vw;
    &-in {
      padding: 3.0729vw 2.6042vw;
      box-shadow: 0px .2083vw .4167vw var(--indexColor3);
      margin: 1.8229vw auto;
      &-top {
        font-size: 1.0417vw;
        span {
          font-size: 1.0417vw;
        }
      }
      &-title {
        font-size: 1.25vw;
        margin-top: 2.0833vw;
      }
      &-lists {
        margin: 1.5625vw auto 0;
        max-width: 57.2917vw;
        & > div {
          padding: 1.875vw 1.5625vw;
          border-radius: 1.5625vw;
          margin: 0 1.0417vw;
          min-height: 15.8333vw;
          & > div:first-child {
            font-size: 1.1458vw;
          }
          & > div:last-child {
            font-size: 1.0417vw;
          }
          &:nth-of-type(1) {
            min-width: 13.8542vw;
          }
          &:nth-of-type(2) {
            min-width: 17.1875vw;
          }
        }
      }
      &-bottom {
        margin-top: 2.8125vw;
        font-size: 1.25vw;
      }
    }
  }
  .services_include{
    margin-top: 5.5208vw;
    &-in{
      margin: 3.125vw auto 0;
      max-width: 45.8333vw;
      gap: 1.3542vw;
      &-l{
        .swiperBox{
          .swiperSlide{
            .swiperIn{
              .context{
                font-size: .9896vw;
                letter-spacing: .1979vw;
                padding: 1.0417vw;
              }
            }
          }
        }
      }
      &-r{
        .name{
          border-radius: 1.0417vw;
          &-in{
            span{
              font-size: 1.1979vw;
            }
            &::after{
              width: calc(100% - 2.2917vw);
              height: calc(100% - 2.2917vw);
              top: 1.1458vw;
              left: 1.1458vw;
              border-radius: .5208vw;
            }
          }
        }
      }
    }
  }
  .step{
    margin-top: 5.5208vw;
    &-in{
      max-width: 71.3021vw;
      margin: 2.6042vw auto 0;
      gap: 3.6458vw;
      .lists-in{
        .text{
          margin-top: .5208vw;
          p{
            font-size: 1.1979vw;
          }
        }
      }
      &::before{
        width: .7292vw;
        height: 1.0938vw;
        top: 6.2vw;
        left: -2.6042vw;
      }
      &::after{
        width: .7292vw;
        height: 1.0938vw;
        top: 6.2vw;
        right: -2.6042vw;
      }
    }
    &::after{
      width: 100vw;
      height: .5208vw;
      top: 12.5vw;
    }
  }
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
            letter-spacing: 4.5px;
            &:nth-of-type(1) {
              font-size: 20px;
              min-width: 15px;
              line-height: 1.2;
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
  .step{
    margin-top: 80px;
    &-in{
      padding: 0 30px;
      grid-template-columns: repeat(2,1fr);
      gap: 30px;
      margin-top: 35px;
      .lists-in{
        .text{
          p{
            font-size: 16px;
            line-height: 2;
            span{
              font-family: var(--contextFamily);
            }
          }
        }
      }
      &::before,&::after{
        display: none;
      }
    }
    &::after{
      display: none;
    }
  }
}
</style>