<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('implant')
useHead({
  title: "種植牙 | 微創植牙 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: ' 愛康健提供種植牙(種牙/植牙)服務，利用鈦金屬等物料製作成植體，然後植入進行牙槽骨當中，代替牙根以作支撐，然後在上面植入假牙、牙橋或假牙托來填補空缺的牙齒。我們除了提供傳統的植牙方式，亦有微創植牙技術，為安裝人造牙齒的有效方法。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '假牙 植牙 種牙 種植牙 植牙價錢 種牙價錢 假牙價錢 微創植牙 植牙收費 種牙收費 假牙收費 假牙托 活動牙托 人造牙齒 假牙價錢 植牙價錢 鑲牙價錢 鑲假牙價錢 鑲假牙 愛康健種牙 愛康健假牙 深圳植牙 深圳種牙 深圳假牙 羅湖種牙 羅湖假牙 羅湖鑲牙 深圳整牙 羅湖整牙 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  // img: 'https://static.cmereye.com/imgs/2023/06/baaf111867247a7f.png',
  // bg: 'https://static.cmereye.com/imgs/2023/06/2c162ddf8e5bfcd7.jpg',
  // img: 'https://static.cmereye.com/imgs/2023/09/d40dfb893cdf9658.jpg',
  // bg: 'https://static.cmereye.com/imgs/2023/09/d40dfb893cdf9658.jpg',
  // mbImg: 'https://static.cmereye.com/imgs/2023/09/933fef926682e416.jpg',
  img: 'https://static.cmereye.com/imgs/2023/09/924a3dca573cd7e8.jpg',
  bg: 'https://static.cmereye.com/imgs/2023/09/924a3dca573cd7e8.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/09/e611e6542ec48641.jpg',
  pageName: 'implant',
  pcText: ['享受失而復得的喜悅','重拾完整人生之旅'],
  mbText: ['享受失而復得的喜悅','重拾完整人生之旅']
}

const introduceData = {
  title: 'pages.dental-service.implant.introduce.title',
  content: 'pages.dental-service.implant.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/2bc3a5d449c9b42e.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/611a2ada62c8fa55.jpg',
  tabNavName: 'pages.dental-service.implant.introduce.tabNavName',
}

const featuresData = {
  title: 'pages.dental-service.implant.features.title',
  featuresLists: [
    'pages.dental-service.implant.features.lists[0].context',
    'pages.dental-service.implant.features.lists[1].context',
    'pages.dental-service.implant.features.lists[2].context',
    'pages.dental-service.implant.features.lists[3].context'
  ]
}

const noteLists = [
  {
    name: 'pages.dental-service.implant.note.lists[0].name',
    img: 'https://static.cmereye.com/imgs/2023/05/786842c578839f96.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[1].name',
    img: 'https://static.cmereye.com/imgs/2023/05/375325d1f47a3eef.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[2].name',
    img: 'https://static.cmereye.com/imgs/2023/05/d2d6a05ff3b7bedc.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[3].name',
    img: 'https://static.cmereye.com/imgs/2023/05/b9bffb9d0a93caf8.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[4].name',
    img: 'https://static.cmereye.com/imgs/2023/05/e263a699e37bb71a.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[5].name',
    img: 'https://static.cmereye.com/imgs/2023/05/e8d6a6c148d1a0ac.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[6].name',
    img: 'https://static.cmereye.com/imgs/2023/05/eeb2f6a620511833.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[7].name',
    img: 'https://static.cmereye.com/imgs/2023/05/00405fd84dde1a1d.png'
  }
]

const stepData = {
  title: '認識種植牙的六個步驟',
  remark: '種植牙於現在是較常見的牙科手術之一，病人最少需要 2 至 3 次的覆診來完成整個種牙程序，整個程序或需要 3 至 6 個月時間。',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
      },
      {
        title: 'Step 2',
        text: '注射麻醉藥'
      },
      {
        title: 'Step 3',
        text: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '等待2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽'
      },
      {
        title: 'Step 5',
        text: '牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒'
      },
      {
        title: 'Step 6',
        text: '將義齒固定在植體上，補上缺去的牙齒'
      }
    ]
  ],
  lists: [
    {
      title: '第1步',
      img: 'https://static.cmereye.com/imgs/2023/09/b881d3776b27ccff.jpg',
      name: '全面口腔檢查及建立個人化方案',
      context: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
    },
    {
      title: '第2步',
      img: 'https://static.cmereye.com/imgs/2023/09/0b7ef1a0f39e9ca9.jpg',
      name: '注射麻醉藥',
      context: ''
    },
    {
      title: '第3步',
      img: 'https://static.cmereye.com/imgs/2023/09/599e940cf6a46009.jpg',
      name: '把植體植入顎骨',
      context: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
    },
    {
      title: '第4步',
      img: 'https://static.cmereye.com/imgs/2023/09/7096607a2bb3d79e.jpg',
      name: '當牙骨與植體癒合，牙醫會安放癒合帽',
      context: '等待2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽'
    },
    {
      title: '第5步',
      img: 'https://static.cmereye.com/imgs/2023/09/ff64dced44370230.jpg',
      name: '牙齦癒合後進行掃描式印模，製作義齒',
      context: '牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒'
    },
    {
      title: '第6步',
      img: 'https://static.cmereye.com/imgs/2023/09/915fb53ec41c5511.jpg',
      name: '將義齒固定在植體上及最後微調',
      context: '將義齒固定在植體上，補上缺去的牙齒'
    }
  ]
}

const reasonData = {
  title: 'pages.dental-service.implant.reason.title',
  text: '種植牙五大優點',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/bab7e2cd0e553a7f.jpg',
  // reasonLists:[
  //   {
  //     context: 'pages.dental-service.implant.reason.lists[0].context',
  //   },
  //   {
  //     hideIcon: true,
  //     context: 'pages.dental-service.implant.reason.lists[1].context',
  //   },
  //   {
  //     context: 'pages.dental-service.implant.reason.lists[2].context',
  //   },
  //   {
  //     context: 'pages.dental-service.implant.reason.lists[3].context',
  //   },
  //   {
  //     context: 'pages.dental-service.implant.reason.lists[4].context',
  //   },
  //   {
  //     context: 'pages.dental-service.implant.reason.lists[5].context',
  //   }
  // ]
  pageName: 'implant',
  reasonLists:[
    {
      title: '修補缺牙的情況',
      context: '提供接近真牙的功能和外觀，耐用美觀',
    },
    {
      title: '恢復咀嚼功能',
      context: '療程後能夠正常咀嚼食物，恢復咬合功能',
    },
    {
      title: '保護相鄰牙齒',
      context: '不需要磨損鄰近的牙齒來支撐，保護了相鄰牙齒的健康',
    },
    {
      title: '改善口腔美觀',
      context: '會根據患者的牙齒形狀、顏色和咬合情況進行定制，實現自然的外觀方案',
    },
    {
      title: '有助於保持骨質',
      context: '能防止牙槽骨的進一步萎縮，有助於保持骨質的生長',
    }
  ]
}

const noticeData = {
  title: 'pages.dental-service.implant.notice.title',
  topText: [
    'pages.dental-service.implant.notice.topText[0].context',
    'pages.dental-service.implant.notice.topText[1].context'
  ],
  // meritLists: [
  //   'pages.dental-service.implant.notice.meritLists[0].context',
  //   'pages.dental-service.implant.notice.meritLists[1].context',
  // ],
  // shortcomingLists: [
  //   'pages.dental-service.implant.notice.shortcomingLists[0].context',
  //   'pages.dental-service.implant.notice.shortcomingLists[1].context',
  // ],
  dataLists: [
    {
      name: "",
      merit: "微創植牙",
      shortcoming: "傳統植牙",
    },
    {
      name: "原理",
      merit: "微創植牙搭配電腦導航技術 ， 可以不用開刀縫針，直接透過手術導板穿透軟組織將植牙放到牙骨裡面",
      shortcoming: "在植入牙齒的位置進行切口，手術後等待數月的時間，讓植牙的骨頭組織與人體結合為一個穩固的基礎，再安裝人造牙齒",
    },
    {
      name: "手術創傷",
      merit: "傷口微小，不需縫合",
      shortcoming: "以傳統手術刀切割，傷口較大，需縫合",
    },
    {
      name: "出血和腫脹",
      merit: "手術時間短，減少感染機會，降低術後腫痛現象",
      shortcoming: "會引起較多的出血和腫脹",
    },
    {
      name: "恢復時間",
      merit: "創傷較小，能夠在短時間內康復",
      shortcoming: "需要較長的恢復時間，以便顎骨充分癒合和牙齦康復",
    },
    {
      name: "牙骨修復需求",
      merit: "利用現有的顎骨結構進行植牙",
      shortcoming: "如果顎骨密度不足或有缺陷，可能需要進行額外的補骨手術",
    }
  ],
  bottomText: [
    'pages.dental-service.implant.notice.bottomText[0].context',
    'pages.dental-service.implant.notice.bottomText[1].context',
    'pages.dental-service.implant.notice.bottomText[2].context'
  ]
}

const detailData = {
  title: 'pages.dental-service.implant.detail.title',
  detailTableCol: [
    'pages.dental-service.implant.detail.tableCol[0].text',
    'pages.dental-service.implant.detail.tableCol[1].text',
    'pages.dental-service.implant.detail.tableCol[2].text',
    'pages.dental-service.implant.detail.tableCol[3].text'
  ],
  // detailTable: [
  //   {
  //     service: [
  //       'pages.dental-service.implant.detail.tableData[0].service[0].context',
  //       'pages.dental-service.implant.detail.tableData[0].service[1].context',
  //     ],
  //     type: [
  //       'pages.dental-service.implant.detail.tableData[0].type[0].context',
  //       'pages.dental-service.implant.detail.tableData[0].type[1].context',
  //       [
  //         'pages.dental-service.implant.detail.tableData[0].type[2].context[0].text',
  //         'pages.dental-service.implant.detail.tableData[0].type[2].context[1].text',
  //         'pages.dental-service.implant.detail.tableData[0].type[2].context[2].text'
  //       ]
  //     ],
  //     price: '¥13800',
  //     discountedPrice: '¥8800'
  //   },
  //   {
  //     service: [
  //       'pages.dental-service.implant.detail.tableData[1].service[0].context',
  //       'pages.dental-service.implant.detail.tableData[1].service[1].context',
  //     ],
  //     type: [
  //       'pages.dental-service.implant.detail.tableData[1].type[0].context',
  //       'pages.dental-service.implant.detail.tableData[1].type[1].context',
  //       [
  //         'pages.dental-service.implant.detail.tableData[1].type[2].context[0].text',
  //         'pages.dental-service.implant.detail.tableData[1].type[2].context[1].text'
  //       ]
  //     ],
  //     price: '¥15800',
  //     discountedPrice: '¥12800'
  //   },
  //   {
  //     service: [
  //       'pages.dental-service.implant.detail.tableData[2].service[0].context',
  //       'pages.dental-service.implant.detail.tableData[2].service[1].context',
  //     ],
  //     type: [
  //       'pages.dental-service.implant.detail.tableData[2].type[0].context',
  //       'pages.dental-service.implant.detail.tableData[2].type[1].context',
  //       [
  //         'pages.dental-service.implant.detail.tableData[2].type[2].context[0].text',
  //         'pages.dental-service.implant.detail.tableData[2].type[2].context[1].text',
  //         'pages.dental-service.implant.detail.tableData[2].type[2].context[2].text'
  //       ]
  //     ],
  //     price: '¥18800',
  //     discountedPrice: '¥14800'
  //   },
  //   {
  //     service: [
  //       'pages.dental-service.implant.detail.tableData[3].service[0].context',
  //       'pages.dental-service.implant.detail.tableData[3].service[1].context',
  //       'pages.dental-service.implant.detail.tableData[3].service[2].context'
  //     ],
  //     type: [
  //       'pages.dental-service.implant.detail.tableData[3].type[0].context',
  //       'pages.dental-service.implant.detail.tableData[3].type[1].context',
  //       [
  //         'pages.dental-service.implant.detail.tableData[3].type[2].context[0].text',
  //         'pages.dental-service.implant.detail.tableData[3].type[2].context[1].text',
  //         'pages.dental-service.implant.detail.tableData[3].type[2].context[2].text',
  //         'pages.dental-service.implant.detail.tableData[3].type[2].context[3].text',
  //         'pages.dental-service.implant.detail.tableData[3].type[2].context[4].text'
  //       ]
  //     ],
  //     price: '¥26000',
  //     discountedPrice: '¥18800'
  //   }
  // ],
  detailTable: [
    {
      service: "服務", 
      price: "",
      discountedPrice: '優惠價 (單隻)'
    },
    {
      service: "OSSTEM (韓國）奧齒泰親水種植體植入術", 
      price: "原價 ¥13800",
      discountedPrice: '¥8800'
    },
    {
      service: "ANKYLOS（德國）種植體植入術", 
      price: "原價 ¥15800",
      discountedPrice: '¥12800'
    },
    {
      service: "Straumann（瑞士SLA）悅鋯非親水種植體植入術", 
      price: "原價 ¥18800",
      discountedPrice: '¥14800'
    },
    {
      service: "Straumann（瑞士）Roxolid瑞鋯親水  SLAcitive種植體植入術", 
      price: "原價 ¥26000",
      discountedPrice: '¥18800'
    }
  ],
  remark: 'pages.dental-service.implant.detail.remark'
}

const problemData = {
  title: 'pages.dental-service.implant.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.implant.problem.lists[0].Q',
      A: 'pages.dental-service.implant.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[1].Q',
      A: 'pages.dental-service.implant.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[2].Q',
      A: 'pages.dental-service.implant.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[3].Q',
      A: 'pages.dental-service.implant.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[4].Q',
      A: 'pages.dental-service.implant.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[5].Q',
      A: 'pages.dental-service.implant.problem.lists[5].A'
    },
  ]
}

const plagueData = {
  title: '是否有以下的缺牙困擾？',
  lists: [
    {
      type: 'text',
      context: '影響臉型'
    },
    {
      type: 'text',
      context: '咀嚼不順'
    },
    {
      type: 'img',
      context: 'https://static.cmereye.com/imgs/2023/09/6beac28d34c4d438.jpg'
    },
    {
      type: 'text',
      context: '牙槽骨流失'
    },
    {
      type: 'text',
      context: '容易蛀牙'
    },
    {
      type: 'text',
      context: '說話漏風'
    }
  ]
}

const toWhatsApp = () =>{
  location.href="https://api.whatsapp.com/send/?phone=85269338128"
}

let noticeCurrent = ref(1)

const onSlideChange = (swiper:any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

let showYaAnim = ref(false)
// const detailBtn:any = ref<HTMLElement>()
// const getScrollTop = () => {
//   let _offsetTop = detailBtn.value.offsetTop || 0
//   if(window.scrollY>=_offsetTop-600){
//     showYaAnim.value = true
//   }
// }

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
  // getScrollTop()
  // window.addEventListener('scroll',getScrollTop)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig"/>
    <div class="dentistryServices">
      <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
      <ServiceIntroduce :introduceData="introduceData" />
      <div class="plague">
        <div class="plague-in">
          <div class="dentistryServices-title plague-title">
            <div class="dentistryServices-title-in bb plague-title-in">{{plagueData.title}}</div>
          </div>
          <div class="plague-lists">
            <div v-for="(plagueItem,plagueIndex) in plagueData.lists" :key="plagueIndex">
              <span v-if="plagueItem.type === 'text'">{{plagueItem.context}}</span>
              <img v-else :src="plagueItem.context" alt="">
            </div>
          </div>
        </div>
      </div>
      <ServiceReason :reasonData="reasonData" />
      <!-- <div class="features">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{$t(featuresData.title)}}</div>
        </div>
        <div class="features-in">
          <div class="features-in-l">
            <img src="https://static.cmereye.com/imgs/2023/05/b5a6fc53ad15b758.png" alt="">
          </div>
          <div class="features-in-r">
            <div class="features-in-r-item" v-for="(featuresItem,index) in featuresData.featuresLists" :key="index">
              <div class="w-20px">· </div>
              <div>{{$t(featuresItem)}}</div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="notice">
        <div class="dentistryServices-title notice-title">
          <div class="dentistryServices-title-in bb notice-title-in">{{$t(noticeData.title)}}</div>
        </div>
        <div class="notice-topText">
          <span v-for="(topTextItem,topTextIndex) in noticeData.topText" :key="topTextIndex">{{$t(topTextItem)}}</span>
        </div>
        <div class="notice-in">
          <!-- <swiper :slidesPerView="windowWidth>768 ? '2': '1'" class="swiper-wrapper" @slideChange="onSlideChange">
              <swiper-slide class="swiper-slide">
                <div class="box box-left">
                  <div class="box-in" v-for="(meritItem,meritIndex) in noticeData.meritLists" :key="meritIndex" >
                    <div>{{$t(meritItem)}}</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="box box-right">
                  <div class="box-in" v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists" :key="shortcomingIndex" >
                    <div>{{$t(shortcomingItem)}}</div>
                  </div>
                </div>
              </swiper-slide>
          </swiper> -->
          <div class="lists">
            <div class="lists-in" v-for="(noticeItem,noticeIndex) in noticeData.dataLists" :key="noticeIndex">
              <div class="name">{{noticeItem.name}}</div>
              <div class="merit">{{noticeItem.merit}}</div>
              <div class="shortcoming">{{noticeItem.shortcoming}}</div>
            </div>
          </div>
        </div>
        <div class="notice-bottomText pcBox">
          <span v-for="(bottomTextItem,bottomTextIndex) in noticeData.bottomText" :key="bottomTextIndex">{{$t(bottomTextItem)}}</span>
        </div>
        <!-- <div class="notice-line mbBox">
          <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="noticeCurrent"></PageSwiperPointLine>
        </div> -->
      </div>
      <!-- <ServiceStep :stepData="stepData" /> -->
      <div class="step">
        <div class="step-in">
          <div class="dentistryServices-title step-title">
            <div class="dentistryServices-title-in bb step-title-in">植牙6步曲</div>
          </div>
          <div class="step-lists">
            <div class="step-lists-in" v-for="(stepItem,stepIndex) in stepData.lists" :key="stepIndex">
              <div class="step-lists-in-l">
                <div class="title">
                  <img src="@/assets/images/icon_13.png" alt="">
                  {{stepItem.title}}
                </div>
                <div class="image"><img :src="stepItem.img" alt=""></div>
                <div class="name">{{stepItem.name}}</div>
                <div class="context">{{stepItem.context}}</div>
              </div>
              <div class="step-lists-in-r">
                <img src="@/assets/images/icon_12.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">{{$t('pages.dental-service.implant.note.title')}}</div>
        </div>
        <div class="noteCard pageCon">
          <div class="noteCard-in" v-for="(note,noteIndex) in noteLists" :key="noteIndex">
            <div class="noteCard-in-image">
              <img :src="note.img" alt="">
            </div>
            <div class="noteCard-in-name">{{$t(note.name)}}</div>
          </div>
        </div>
      </div>
      <!-- <div class="detail">
        <div class="dentistryServices-title detail-title">
          <div class="dentistryServices-title-in bb detail-title-in">{{$t(detailData.title)}}</div>
        </div>
        <div class="detail-table">
          <div class="detail-table-in" v-for="(tableItem,tableItemIndex) in detailData.detailTable" :key="tableItemIndex">
            <div class="service">{{tableItem.service}}</div>
            <div class="price">
              <span>{{tableItem.discountedPrice}}</span>
              <span>{{tableItem.price}}</span>
            </div>
          </div>
        </div>
        <div class="detail-bottom">
          <div class="text">
            成功預約送專業洗牙 及 X光口腔檢查 1次
          </div>
          <div class="btn" ref="detailBtn">
            <span @click="toWhatsApp">預約檢查及諮詢</span>
            <span :class="{showYaAnim:showYaAnim}" @click="toWhatsApp">預約檢查及諮詢</span>
          </div>
        </div>
      </div> -->
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .dentistryServices{
    background: #fff;
    padding: 143px 0;
    .plague{
      width: 100%;
      background: linear-gradient(135deg, rgba(255, 241, 240, 0.25) 0%, rgba(255, 221, 218, 0.25) 100%);
      padding: 98px 0;
      margin-top: 206px;
      &-in{
        width: 100%;
        max-width: 803px;
        margin: 0 auto;
      }
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      &-lists{
        margin-top: 98px;
        display: flex;
        flex-wrap: wrap;
        &>div{
          display: flex;
          justify-content: center;
          &:nth-of-type(1){
            width: 100%;
            span{
              margin-bottom: -60px;
            }
          }
          &:nth-of-type(2){
            width: calc(100% / 3);
          }
          &:nth-of-type(3){
            width: calc(100% / 3);
            img{
              margin-bottom: -80px;
              margin-top: 80px;
            }
          }
          &:nth-of-type(4){
            width: calc(100% / 3);
          }
          &:nth-of-type(5){
            width: 50%;
            justify-content: flex-end;
            margin-top: 53px;
            padding-right: 33.5px;
          }
          &:nth-of-type(6){
            margin-top: 53px;
            width: 50%;
            justify-content: flex-start;
            padding-left: 33.5px;
          }
          span{
            width: 260px;
            height: 260px;
            font-size: 35px;
            font-weight: 900;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 50%;
            background: var(--indexColor3);
          }
          img{
            width: 260px;
            height: 260px;
            border-radius: 50%;
          }
        }
      }
    }
    .features{
      margin-top: 90px;
      &-in{
        margin-top: 34px;
        padding: 54px 0;
        background: linear-gradient(135deg, rgba(255, 241, 240, 0.25) 0%, rgba(255, 221, 218, 0.25) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        &-l{
          margin-right: 10px;
        }
        &-r{
          &-item{
            display: flex;
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 160%;
            color: #666666;
            &>div:first-child{
              width: 20px;
            }
          }
        }
      }
    }
    .detail{
      margin-top: 206px;
      padding-bottom: 100px;
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      &-table{
        width: 100%;
        max-width: 1091px;
        margin: 54px auto 0;
        border-radius: 60px;
        overflow: hidden;
        // overflow: hidden;
        // overflow-x: auto;
        &-in{
          // width: 100%;
          // min-width: 714px;
          // border-radius: 60px;
          // overflow: hidden;
          &-col{
            display: flex;
            height: 69px;
            &>div{
              background: var(--indexColor1);
              flex: 1;
              font-style: normal;
              font-weight: 700;
              font-size: 28px;
              line-height: 160%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #FFFFFF;
              &:nth-of-type(1){
                flex: 1.5;
              }
              &:nth-of-type(2){
                flex: 2;
              }
              &:not(:last-child){
                margin-right: 3px;
              }
            }
          }
          &-data{
            display: flex;
            height: 172px;
            &>div{
              flex: 1;
              background: var(--indexColor2);
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 160%;
              color: #666666;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              span{
                width: 100%;
                max-width: 80%;
                display: flex;
                &>div{
                  flex: 1;
                  p{
                    display: inline-block;
                    &:not(:first-child){
                      margin-right: 10px;
                    }
                  }
                }
                &>p{
                  &:nth-of-type(1){
                    width: 20px;
                  }
                }
              }
              &:nth-of-type(1){
                flex: 1.5;
              }
              &:nth-of-type(2){
                flex: 2;
              }
              &:nth-of-type(3),&:nth-of-type(4){
                font-weight: 700;
                font-size: 28px;
              }
              &:not(:last-child){
                margin-right: 3px;
              }
            }
            &:not(:nth-of-type(2)){
              margin-top: 8px;
            }
          }
          display: flex;
          &>div{
            background: var(--indexColor2);
            margin-bottom: 8px;
            padding: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #666666;
            &:nth-of-type(1){
              width: 67%;
            }
            &:nth-of-type(2){
              flex: 1;
            }
            &:not(:last-child){
              margin-right: 8px;
            }
            flex-direction: column;
            span{
              &:nth-of-type(1){
                color: var(--indexColor1);
                font-weight: 700;
                font-size: 28px;
              }
              &:nth-of-type(2){
                font-size: 16px;
                font-weight: 700;
                position: relative;
                &::before{
                  content: '';
                  width: 100%;
                  height: 1px;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%,-50%) rotate(4deg);
                  background: #4d4d4d;
                }
              }
            }
          }
          &:nth-of-type(1){
            &>div{
              padding: 13px 0;
              font-size: 28px;
              font-weight: 600;
              color: #fff;
              background: var(--indexColor);
              margin-bottom: 0;
              span{
                font-size: 28px;
                color: #fff;
              }
            }
          }
          &:last-child{
            &>div{
              margin-bottom: 0;
            }
          }
        }
      }
      &-remark{
        width: 100%;
        max-width: 1245px;
        margin: 20px auto 0;
        font-size: 20px;
        font-weight: 600;
      }
      &-bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
        .text{
          margin-top: 35px;
          font-size: 35px;
          font-weight: 700;
          color: var(--indexColor1);
        }
        .btn{
          margin-top: 35px;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          span{
            box-shadow: 0px 1.74695px 3.4939px 0px rgba(252, 22, 130, 0.38);
            font-size: 35px;
            font-weight: 900;
            color: #fff;
            border-radius: 40px;
            padding: 5px 90px;
            background: var(--indexColor1);
            cursor: pointer;
            top: 0;
            &:nth-of-type(2){
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
            &.showYaAnim{
              display: flex;
              animation: btnAnim 1s linear;
              animation-fill-mode: forwards;
            }
          }
        }
      }
    }
    .notice{
      width: 100%;
      max-width: 1450px;
      margin: 200px auto 0;
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      &-topText,&-bottomText{
        width: 100%;
        span{
          display: block;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          text-align: center;
          color: #666666;
        }
      }
      &-topText{
        margin: 35px auto 0;
        display: none;
      }
      &-bottomText{
        margin: 54px auto 0;
      }
      &-in{
        width: 90%;
        margin: 54px auto 0;
        .box{
          .box-in{
            height: 207px;
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
            &:first-child{
              background: var(--indexColor1);
              color: #fff;
              margin-top: 0;
              height: 69px;
              font-weight: 700;
              font-size: 28px;
            }
            &:nth-of-type(2){
              margin-top: 0;
            }
          }
        }
        .box-left{
          border-radius:  60px 0 0 60px;
          overflow: hidden;
        }
        .box-right{
          margin-left: 3px;
          border-radius:  0 60px 60px 0;
          overflow: hidden;
          .box-in{
            &:first-child{
              background: var(--indexColor3);
            }
            &:last-child{
              color: var(--indexColor1);
            }
          }
        }
        .lists{
          border-radius: 60px;
          overflow: hidden;
          &-in{
            display: flex;
            &>div{
              background: var(--indexColor2);
              margin-bottom: 8px;
              padding: 50px 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              color: #666666;
              &:nth-of-type(1){
                padding: 0;
                flex: 1;
                color: var(--indexColor);
                font-weight: 900;
              }
              &:nth-of-type(2){
                width: 43.5%;
              }
              &:nth-of-type(3){
                width: 43.5%;
              }
              &:not(:last-child){
                margin-right: 8px;
              }
            }
            &:nth-of-type(1){
              &>div{
                padding: 13px 0;
                font-size: 28px;
                font-weight: 600;
                color: #fff;
                background: var(--indexColor);
                margin-bottom: 0;
              }
            }
            &:last-child{
              &>div{
                margin-bottom: 0;
              }
            }
          }
        }
      }
      &-line{
        width: 83px;
        margin: 22px auto;
      }
    }
    .step{
      width: 100%;
      background: linear-gradient(90deg, rgba(255, 241, 240, 0.00) 0%, rgba(255, 241, 240, 0.70) 12.5%, rgba(255, 241, 240, 0.70) 81.99%, rgba(255, 241, 240, 0.00) 100%);
      padding: 98px 0;
      margin-top: 206px;
      &-in{
        width: 100%;
        max-width: 1444px;
        margin: 0 auto;
      }
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      &-lists{
        margin-top: 98px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-in{
          display: flex;
          align-items: center;
          // width: 30%;
          margin-bottom: 60px;
          &:nth-of-type(n+4){
            margin-bottom: 0;
          }
          &:nth-of-type(4),&:nth-of-type(5){
            .step-lists-in-l{
              .name{
                clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
              }
            }
          }
          &:nth-of-type(3),&:nth-of-type(6){
            .step-lists-in-r{
              display: none;
            }
          }
          &-l{
            width: 100%;
            max-width: 400px;
            height: 100%;
            display: flex;
            flex-direction: column;
            .title{
              display: flex;
              align-items: center;
              font-size: 35px;
              font-weight: 700;
              margin-bottom: 15px;
              color: #666666;
              img{
                height: auto;
                margin-right: 15px;
              }
            }
            .image{
              width: 100%;
              img{
                width: 100%;
                border-radius: 30px;
              }
            }
            .name{
              color: #fff;
              font-size: 20px;
              font-weight: 700;
              background: var(--indexColor1);
              margin-top: 24px;
              margin-bottom: 15px;
              padding: 8px 15px;
              clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
            }
            .context{
              font-size: 20px;
              font-weight: 700;
              color: #666666;
            }
          }
          &-r{
            margin-left: 50px;
            img{
              width: 15px;
              height: auto;
            }
          }
        }
      }
    }
    .note{
      margin-top: 206px;
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      .noteCard{
        display: flex;
        flex-wrap: wrap;
        margin: 54px auto 0;
        width: 100%;
        max-width: 1090px;
        &-in{
          cursor: pointer;
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 45px;
          box-sizing: border-box;
          &-image{
            width: 100%;
            height: 0;
            padding-top: 100%;
            position: relative;
            background: var(--indexColor2);
            border-radius: 10px;
            img{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              max-width: 90%;
              max-height: 90%;
            }
          }
          &:nth-of-type(1)>&-image,&:nth-of-type(3)>&-image,&:nth-of-type(6)>&-image,&:nth-of-type(8)>&-image{
            background: #FFF1F0;
          }
          &-name{
            height: 64px;
            line-height: 64px;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: #666666;
            text-align: center;
          }
        }
      }
    }
  }
  @keyframes btnAnim {
    0%{
      clip-path: polygon(-10% 0,0 0,-10% 100%,-20% 100%);
    }
    50%{
      clip-path: polygon(50% 0, 60% 0, 50% 100%,40% 100%);
    }
    100%{
      clip-path: polygon(110% 0, 120% 0,110% 100%,100% 100%);
    }
  }

  @media (min-width: 768px) and (max-width: 1452px) {
    .dentistryServices{
      padding: 110px 0;
      .note{
        .noteCard{
          &-in{
            padding: 0 3vw;
             &-image{
              img{
                max-width: 80%;
                max-height: 80%;
              }
              &-name{
                height: 60px;
                line-height: 60px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 890px) {
    .dentistryServices{
      .note{
        &-in{
          &-ul{
            &-li{
              margin-right: 3vw;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .dentistryServices{
      padding: 90px 0;
      .plague{
        margin-top: 95px;
        padding: 31px 0 44px;
        &-title{
          &-in{
            font-size: 26px;
          }
        }
        &-lists{
          margin-top: 34px;
          &>div{
            &:nth-of-type(1){
              span{
                margin-bottom: -15px;
              }
            }
            &:nth-of-type(2){
              justify-content: flex-end;
            }
            &:nth-of-type(3){
              img{
                margin-bottom: -30px;
                margin-top: 30px;
              }
            }
            &:nth-of-type(4){
              justify-content: flex-start;
            }
            &:nth-of-type(5){
              margin-top: 24px;
              padding-right: 15px;
            }
            &:nth-of-type(6){
              margin-top: 24px;
              padding-left: 15px;
            }
            span{
              width: 110px;
              height: 110px;
              font-size: 16px;
            }
            img{
              width: 110px;
              height: 110px;
            }
          }
        }
      }
      .note{
        margin-top: 50px;
        &-title{
          &-in{
            font-size: 26px;
          }
        }
        .noteCard{
          margin: 34px auto 0;
          padding: 0 15px;
          box-sizing: border-box;
          &-in{
            width: calc(100% / 3);
            padding: 0 5px;
            &-image{
              img{
                max-width: 70%;
                max-height: 70%;
              }
            }
            &:nth-of-type(5)>&-image,&:nth-of-type(7)>&-image{
              background: #FFF1F0;
            }
            &:nth-of-type(6)>&-image,&:nth-of-type(8)>&-image{
              background: var(--indexColor2);
            }
            &-name{
              height: 30px;
              line-height: 30px;
              margin-bottom: 25px;
              font-size: 14px;
            }
          }
        }
      }
      .detail{
        margin-top: 75px;
        padding-bottom: 0;
        &-title{
          &-in{
            font-size: 26px;
          }
        }
        &-table{
          margin: 29px 30px 0;
          width: auto;
          border-radius: 20px;
          position: relative;
          &::-webkit-scrollbar {
            background: none;
            height: 3px;
            width: 3px;
            position: relative;
          }
          &::-webkit-scrollbar-thumb{
            background: var(--indexColor1);
            border: none;
          }
          &::-webkit-scrollbar-track{
            background: var(--indexColor2);
          }
          &::-webkit-scrollbar-button{
            display: block;
            opacity: 0;
          }
          &-in{
            // margin: 0 30px;
            &-col{
              height: 40px;
              &>div{
                flex: 1.2;
                font-weight: 600;
                font-size: 20px;
                &>div{
                  &:last-child{
                    font-weight: 700;
                    font-size: 16px;
                  }
                }
              }
            }
            &-data{
              height: 117px;
              &>div{
                flex: 1.2;
                font-weight: 500;
                font-size: 15px;
                &:nth-of-type(3),&:nth-of-type(4){
                  font-weight: 600;
                  font-size: 20px;
                }
              }
              &:not(:nth-of-type(2)){
                margin-top: 4px;
              }
              &:last-child{
                height: 149px;
              }
            }
            &>div{
              padding: 22px;
              margin-bottom: 2px;
              font-size: 15px;
              &:nth-of-type(1){
                width: 54%;
              }
              &:not(:last-child){
                margin-right: 2px;
              }
              span{
                &:nth-of-type(1){
                  font-size: 20px;
                }
                &:nth-of-type(2){
                  font-size: 12px;
                }
              }
            }
            &:nth-of-type(1){
              &>div{
                padding: 10px 0;
                font-size: 20px;
                span{
                  font-size: 20px;
                }
              }
            }
          }
        }
        &-remark{
          padding: 0 30px;
          font-size: 16px;
          text-align: center;
        }
        &-bottom{
          .text{
            font-size: 16px;
            margin-top: 17px;
          }
          .btn{
            margin-top: 17px;
            span{
              font-size: 16px;
              padding: 5px 50px;
            }
          }
        }
      }
      .notice{
        width: auto;
        margin: 74px 30px 0;
        &-title{
          &-in{
            font-size: 26px;
            white-space: pre-wrap;
          }
        }
        &-topText,&-bottomText{
          // padding: 0 30px;
          span{
            display: inline;
            font-size: 15px;
          }
        }
        &-topText{
          margin: 31px auto 0;
          text-align: center;
          display: block;
        }
        &-bottomText{
          display: none;
        }
        &-in{
          width: 100%;
          margin: 35px 0 0;
          .box{
            margin-left: 30px;
            .box-in{
              font-weight: 500;
              font-size: 15px;
              height: 168px;
              margin-top: 9px;
              padding: 0 46px;
              &:first-child{
                height: 40px;
                font-weight: 600;
                font-size: 20px;
              }
            }
          }
          .box-right{
            margin-right: 30px;
            margin-left: 0;
          }
          .lists{
            border-radius: 20px;
            &-in{
              &>div{
                padding: 30px 10px;
                font-size: 12px;
                margin-bottom: 2px;
                &:nth-of-type(1){
                  font-size: 15px;
                  padding: 0 10px;
                }
                &:nth-of-type(2){
                  width: 39%;
                }
                &:nth-of-type(3){
                  width: 39%;
                }
                &:not(:last-child){
                  margin-right: 2px;
                }
              }
              &:nth-of-type(1){
                &>div{
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
      .step{
        background: linear-gradient(0deg, rgba(255, 241, 240, 0.00) 0%, rgba(255, 241, 240, 0.70) 12.5%, rgba(255, 241, 240, 0.70) 81.99%, rgba(255, 241, 240, 0.00) 100%);
        margin-top: 25px;
        padding: 46px 0;
        &-title{
          &-in{
            font-size: 26px;
          }
        }
        &-lists{
          width: auto;
          margin: 57px 40px 0;
          &-in{
            flex-direction: column;
            margin-bottom: 30px;
            &:nth-of-type(n+4){
              margin-bottom: 30px;
            }
            &:nth-of-type(3){
              .step-lists-in-r{
                display: block;
              }
            }
            &-l{
              .title{
                padding: 0 6px;
                font-size: 26px;
              }
              .image{
                padding: 0 6px;
              }
              .name{
                margin-top: -25px;
                font-size: 16px;
                clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
              }
              .context{
                font-size: 16px;
              }
            }
            &-r{
              margin-top: 30px;
              margin-left: 0;
              img{
                transform: rotate(90deg);
              }
            }
          }
        }
      }
      .features{
        &-in{
          padding: 24px 30px;
          box-sizing: border-box;
          flex-direction: column;
          &-r{
            &-item{
              font-weight: 500;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 360px) {
    .dentistryServices{
      .note{
        .noteCard{
          &-in{
            &-name{
              font-size: 15px;
            }
          }
        }
      }
    }
  }
</style>