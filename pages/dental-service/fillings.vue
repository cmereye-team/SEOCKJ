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
  img: 'https://static.cmereye.com/imgs/2023/06/84d8cb1804ceccde.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/2baa49a13d587aa6.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/dc5a79b64bbddc8c.jpg',
  pageName: 'fillings',
  pcText: ['高質量的修復效果','緊急救援您珍貴的牙齒'],
  mbText: ['高質量的修復效果','緊急救援您珍貴的牙齒']
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
      name: '避免咬合過硬的食物',
    },
    {
      name: '避免進食過冷或過熱的食物',
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
  ],
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
      <ServiceNote :noteData="noteData" />
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
        background: #fff1f0;
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
          background: #ffa09e;
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
@media only screen and (max-width: 760px) {
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
}
</style>