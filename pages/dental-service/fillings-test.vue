<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('fillings')
useHead({
  title: '補牙｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供補牙服務，補牙為了修復破損的牙齒組織，防止蛀牙情況進一步惡化，一般會使用填充物填補牙齒，讓牙齒恢復原來的形狀和功能。常用的牙齒修補材料有複合樹脂（瓷粉）和銀汞合金（銀粉）兩種，選擇適合的補牙材料取決於牙齒蛀壞的程度和位置等因素。補牙過程通常很簡單，同時保有自然牙的美觀性。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '補牙 牙體復形 補牙材料 補牙費用 瓷粉補牙 銀粉補牙 補牙物料 補牙價錢 補牙收費 補牙洞 蛀牙補牙門牙補牙 蛀牙 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/02/59dd6590cee09034.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/f56764d79a8e7ca6.jpg',
  pageName: 'course-new',
  pcText: [],
  mbText: []
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.fillings.introduce.title',
  content: 'pages.dental-service.fillings.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/61b68b2597a8e44d.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/98c2430bfc65c812.jpg',
  tabNavName: 'pages.dental-service.fillings.introduce.tabNavName',
  pageName: 'fillings',
}

const reasonData = {
  title: 'pages.dental-service.fillings.reason.title',
  text: 'pages.dental-service.fillings.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/d053bb08e7c265a0.jpg',
  reasonLists: [
    {
      context:
        'pages.dental-service.fillings.reason.lists[0].context',
    },
  ],
  isMediumCW: true,
}

const stepData = {
  title: '補牙過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '清除牙齒蛀壞及脆弱的部分',
      },
      {
        title: 'Step 2',
        text: '用專用的清潔消毒劑清潔牙齒表面，吹乾後，塗上黏固劑',
      },
      {
        title: 'Step 3',
        text: '填補牙洞及修補缺損部分',
      },
    ],
    [
      {
        title: 'Step 4',
        text: '穩固填充物',
      },
      {
        title: 'Step 5',
        text: '牙齒修形及拋光（如蛀牙的程度深，或需要使用麻醉劑）',
      },
    ],
  ],
}

const noteData = {
  title: '補牙後建議',
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2024/02/84e6cc7af16299e7.png',
      text: '避免進食過冷\n或過熱的食物',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/6fda3607b45244cb.png',
      text: '避免咬合\n過硬的食物',
    },
  ],
}

const materialData = {
  title: '補牙材料',
  context: [
    '補牙材料主要分為複合樹脂（俗稱瓷粉）','及銀汞合金（俗稱銀粉）兩種。',
    '複合樹脂是現時最常用的材料。由於銀汞合金氧化後會變成銀黑色，因此較少被選用。',
  ],
  tableLeft: [
    [
      '類別',
      '特性',
      '優點',
      '缺點'
    ],[
      '複合樹脂',
      '多用於修復牙齒的形狀',
      '美觀，接近牙齒天然的顏色與牙釉質有較強的粘合力',
      '強度比銀汞合金稍弱'
    ]
  ],
  tableRight: [
    '銀汞合金',
    '多用於修補小臼齒或大臼齒的蛀牙',
    '堅固，可承受較強的咬合力耐用，不易磨損',
    '氧化後會變銀黑色，欠美觀'
  ]
}

let materialCurrent = ref(1)

const onSlideChange = (swiper:any) => {
  materialCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

const problemData = {
  title: 'pages.dental-service.fillings.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.fillings.problem.lists[0].Q',
      A: 'pages.dental-service.fillings.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[1].Q',
      A: 'pages.dental-service.fillings.problem.lists[1].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[2].Q',
      A: 'pages.dental-service.fillings.problem.lists[2].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[3].Q',
      A: 'pages.dental-service.fillings.problem.lists[3].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[4].Q',
      A: 'pages.dental-service.fillings.problem.lists[4].A',
    },
  ],
}
const careData = {
  title: ['蛀牙的常見徵兆'],
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2024/02/0455d2f9f71e35cb.png',
      text: '咀嚼或咬合時\n感到疼痛',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/ea78194a75b40377.png',
      text: '牙齒出現黑色\n或棕色斑點',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/5e3a51999b0fda41.png',
      text: '牙齒出現牙洞\n或凹陷',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/5a746d8adced4068.png',
      text: '牙齦紅腫、\n出血、下陷',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/e7cf8e3f35476d19.png',
      text: '牙齒對冷熱\n或甜食敏感',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/8e1427cf1f4ecc81.png',
      text: '出現口臭',
    },
  ],
}
const contentData1 = [
  {
    img: 'https://static.cmereye.com/imgs/2024/02/61c99e28e2d65cc0.jpg',
    text: '頻繁食用黏性食物\n和高糖份食物'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/02/3fea9c1894d15f28.jpg',
    text: '不當口腔衛生習慣'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/02/8ef84d0d5d91d08c.jpg',
    text: '藥物或手術導致\n唾液分泌減少'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/02/b70309f502c9cb6c.jpg',
    text: '牙齒擠擁清潔困難'
  }
]
const advantageData = {
  title: '預防蛀牙方法',
  lists: [
    {
      name: '1.定期口腔檢查',
      text: '每年至少進行兩次口腔檢查和清潔。牙醫可以檢查牙齒的健康狀況，發現和處理早期的蛀牙問題。'
    },
    {
      name: '2.定期刷牙',
      text: '每天至少刷牙兩次，早晚各一次，使用牙刷和牙膏。刷牙應該持續兩分鐘，確保清潔到所有牙齒表面和牙齦線。選擇含有氟化物的牙膏，有助於保護牙齒免受酸性攻擊。'
    },
    {
      name: '3.使用牙線或牙間刷',
      text: '定期使用牙線或牙間刷清潔牙齒之間的縫隙和牙齦線。這可以有效去除牙線無法觸及的食物殘渣和細菌，減少蛀牙的風險。'
    },
    {
      name: '4.使用漱口水',
      text: '使用含氟的漱口水可以保護牙齒並減少細菌的生長。漱口水有助於清潔口腔中的難以到達的區域，並降低蛀牙風險。'
    },
    {
      name: '5.控制糖分攝入',
      text: '減少攝取高糖飲食，細菌會利用糖分產生酸性物質，促使蛀牙的形成。適時刷牙或漱口可減少糖分在牙齒上的停留時間。'
    },
    {
      name: '6.避免咀嚼硬物',
      text: '避免咀嚼硬物，如冰塊、堅果或硬糖果。這樣可以減少牙齒破裂或損壞的風險。'
    }
  ]
}
const noteData2 = {
  title: '補牙的作用',
  lists: [
    {
      name: '當牙齒的硬組織（琺瑯質、象牙質）受到破壞後，容易造成小孔，形成蛀牙。為了修復破損的組織及防止蛀牙情況加劇，會以填充物填補牙齒，使牙齒能恢復原來形狀和功能。',
    },
    {
      name: '及早補牙有助於預防進一步的牙齒問題，從而避免需要接受根管治療或種植牙治療等較複雜治療的風險和負擔。',
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
      <ServiceStep :stepData="stepData" />
      <!-- <ServiceNote :noteData="noteData" /> -->
      <div class="note">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">
            {{noteData.title}}
          </div>
        </div>
        <div class="note-lists">
          <div
            v-for="(careItem, careIndex) in noteData.lists"
            :key="careIndex"
            class="note-lists-item"
          >
            <div>
              <div class="image">
                <div class="image-in">
                  <img :src="careItem.img" :alt="careItem.text" />
                </div>
              </div>
              <div class="text">{{ careItem.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="note2">
        <div class="dentistryServices-title note2-title">
          <div class="dentistryServices-title-in bb note2-title-in">
            {{noteData2.title}}
          </div>
        </div>
        <div class="note2-content">
          <div class="note2-content-l">
            <img
              src="https://static.cmereye.com/imgs/2024/02/e593066f247bebff.webp"
              alt=""
            />
          </div>
          <div class="note2-content-r">
            <div
              v-for="(noteItem, noteIndex) in noteData2.lists"
              :key="noteIndex"
            >
              <span>{{ $t(noteItem.name) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="material">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{materialData.title}}</div>
        </div>
        <div class="material-context">
          <span v-for="(contextItem,contextIndex) in materialData.context" :key="contextIndex">{{contextItem}}</span>
        </div>
        <div class="material-in">
          <swiper
            slidesPerView="auto"
            class="swiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="swiper-slide">
              <div class="box-left">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(meritItem,meritIndex) in materialData.tableLeft[0]"
                    :key="meritIndex"
                  >
                    <div>{{meritItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box-center">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(meritItem,meritIndex) in materialData.tableLeft[1]"
                    :key="meritIndex"
                  >
                    <div>{{meritItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box-right">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(shortcomingItem,shortcomingIndex) in materialData.tableRight"
                    :key="shortcomingIndex"
                  >
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="material-line mbBox">
          <PageSwiperPointLine :latestNewsNum="3" :latestNewsCurrent="materialCurrent"></PageSwiperPointLine>
        </div>
      </div>
      <div class="fillings-content-1">
        <div class="dentistryServices-title fillings-content-1-title">
          <div class="dentistryServices-title-in bb fillings-content-1-title-in">
            <span>容易患上蛀牙的高危人士</span>
          </div>
        </div>
        <div class="fillings-content-1-in">
          <div v-for="(contentItem,contentIndex) in contentData1" :key="contentIndex">
            <img :src="contentItem.img" alt="">
            <span>{{contentItem.text}}</span>
          </div>
        </div>
      </div>
      <div class="care">
        <div class="dentistryServices-title care-title">
          <div class="dentistryServices-title-in bb care-title-in">
            <span>{{ careData.title[0] }}</span>
            <span>{{ careData.title[1] }}</span>
          </div>
        </div>
        <div class="care-lists">
          <div
            v-for="(careItem, careIndex) in careData.lists"
            :key="careIndex"
            class="care-lists-item"
          >
            <div>
              <div class="image">
                <div class="image-in">
                  <img :src="careItem.img" :alt="careItem.text" />
                </div>
              </div>
              <div class="text">{{ careItem.text }}</div>
            </div>
          </div>
        </div>
        <div class="care-btn">
          <PageAnimBtn :str="'立即預約免費檢查'" />
        </div>
      </div>
      <div class="advantage">
        <div class="advantage-title dentistryServices-title">
          <div class="advantage-title-in dentistryServices-title-in bb">{{advantageData.title}}</div>
        </div>
        <div class="advantage-in">
          <div class="advantage-in-l"><img src="https://static.cmereye.com/imgs/2024/02/023004e30a0f06d2.webp" :alt="advantageData.title"></div>
          <div class="advantage-in-r">
            <div v-for="(advantageItem,advantageIndex) in advantageData.lists" :key="advantageIndex">
              <div class="name">{{advantageItem.name}}</div>
              <div class="text">{{advantageItem.text}}</div>
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
.material {
  width: 100%;
  max-width: 1450px;
  margin: 96px auto 0;
  &-context{
    width: 100%;
    max-width: 1042px;
    margin: 35px auto 0;
    text-align: center;
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      color: #666666;
    }
  }
  &-in {
    max-width: 1254px;
    margin: 30px auto 0;
    .box {
      width: 100%;
      .box-in {
        height: 140px;
        margin-top: 4px;
        display: flex;
        background: var(--indexColor2);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 0 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        &:first-child {
          background: var(--indexColor1);
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
          justify-content: center;
        }
        &:last-child{
          height: 108px;
        }
        &:nth-of-type(2) {
          margin-top: 0;
        }
      }
    }
    .swiper{
      .swiper-slide{
        &:nth-of-type(1){
          width: 25.68% !important;
        }
        &:nth-of-type(2){
          width: 37.16% !important;
        }
        &:nth-of-type(3){
          width: 37.16% !important;
        }
      }
    }
    .box-left {
      margin-right: 2px;
      border-radius: 60px 0 0 60px;
      overflow: hidden;
      display: flex;
      .box:nth-of-type(1){
        .box-in{
          font-weight: 700;
          font-size: 28px;
          justify-content: center;
        }
      }
    }
    .box-right {
      border-radius: 0 60px 60px 0;
      overflow: hidden;
      margin-left: 2px;
    }
  }
  &-line {
    width: 120px;
    margin: 22px auto;
  }
}
.note{
  margin-top: 100px;
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: calc(819px / 3 * 2);
    margin: 60px auto 0;
    &-item {
      width: calc(100% / 2);
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
              max-width: 80%;
              max-height: 80%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 3px;
          white-space: pre-wrap;
        }
      }
      &:nth-of-type(n + 4) {
        margin-top: 45px;
      }
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              background: #fff1f0;
            }
          }
        }
      }
    }
  }
}
.note2 {
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
    // align-items: center;
    width: 100%;
    max-width: 1340px;
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
        margin-bottom: 40px;
        span {
          color: #4d4d4d;
          font-size: 28px;
          line-height: 160%;
          font-weight: 600;
        }
      }
    }
  }
}
.care {
  margin-top: 206px;
  &-title {
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 819px;
    margin: 45px auto 0;
    &-item {
      width: calc(100% / 3);
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
              max-width: 60%;
              max-height: 60%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 3px;
          white-space: pre-wrap;
        }
      }
      &:nth-of-type(n + 4) {
        margin-top: 45px;
      }
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              background: #fff1f0;
            }
          }
        }
      }
    }
  }
  &-btn{
    margin-top: 45px;
  }
}
.fillings-content-1{
  margin-top: 106px;
  &-in{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 50px auto;
    max-width: 1300px;
    &>div{
      width: 300px;
      display: flex;
      flex-direction: column;
      img{
        border-radius: 10px;
        width: 100%;
      }
      span{
        font-size: 30px;
        line-height: 160%;
        text-align: center;
        margin-top: 20px;
        white-space: pre-wrap;
        color: var(--textColor);
      }
    }
  }
}
.advantage{
  margin-top: 98px;
  &-in{
    display: flex;
    justify-content: center;
    max-width: 1100px;
    width: 100%;
    margin: 77px auto 0;
    &-r{
      flex: 1;
      margin-left: calc((44 / 1246) * 100%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &>div{
        .name{
          color: #fff;
          font-size: 24px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 4px 15px;
          width: calc((404 / 717) * 100%);
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
          letter-spacing: 2px;
        }
        .text{
          color: var(--textColor);     
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          // text-indent: 15px;
          padding-left: 15px;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .material {
    &-context {
      padding: 0 30px;
      margin: 28px auto 0;
      text-align: center;
      span{
        display: block;
        font-weight: 500;
        font-size: 15px;
      }
    }
    &-in {
      width: 100%;
      margin: 34px 0 0;
      .box {
        .box-in {
          font-weight: 500;
          font-size: 15px;
          margin-top: 3px;
          padding: 0 30px;
          &:first-child {
            height: 51.15px;
            font-weight: 600;
            font-size: 20px;
          }
          &:last-child {
            height: 80px;
          }
        }
      }
      .swiper{
        padding: 0 30px;
        .swiper-slide{
          &:nth-of-type(1){
            width: 230.56px !important;
          }
          &:nth-of-type(2){
            width: 92.128% !important;
          }
          &:nth-of-type(3){
            width: 92.128% !important;
          }
        }
      }
      .box-left {
        .box:nth-of-type(1){
          .box-in{
            font-size: 20px;
          }
        }
      }
    }
  }
  .note{
    &-lists {
      width: auto;
      margin: 34px 15px 0;
      &-item {
        width: calc(100% / 2);
        & > div {
          .image {
            padding: 0 5px;
            &-in{
              border-radius: 20px;
            }
          }
          .text {
            white-space: pre-wrap;
            padding: 0;
            font-size: 14px;
            letter-spacing: 1px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
      }
    }
  }
  .note2 {
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
          margin-bottom: 20px;
          span {
            font-size: 16px;
            font-weight: 500;
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
            &-in{
              border-radius: 20px;
            }
          }
          .text {
            white-space: pre-wrap;
            padding: 0;
            font-size: 14px;
            letter-spacing: 1px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
      }
    }
    &-btn{
      margin-top: 30px;
    }
  }
  .fillings-content-1{
    &-in{
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      &>div{
        width: calc(100% - 100px);
        span{
          font-size: 20px;
          margin-top: 10px;
        }
        &:not(:last-child){
          margin-bottom: 40px;
        }
      }
    }
  }
  .advantage{
    margin-top: 100px;
     &-in{
       flex-direction: column;
       margin: 44px auto 0;
       padding: 0 30px;
       &-r{
         margin-left: 0;
         margin-top: 8px;
         &>div{
           margin-top: 44px;
           .name{
             width: 100%;
             font-size: 16px;
             clip-path: polygon(0 0, 90% 0, 95% 100%, 0 100%);
             margin-top: 0;
            // margin-bottom: 15px;
           }
           .text{
             font-size: 16px;
             text-indent: 0;
             padding-left: 10px;
           }
         }
       }
       &-l{
         display: flex;
         justify-content: center;
       }
     }
  }
}
</style>