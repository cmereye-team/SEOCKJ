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
  img: 'https://static.cmereye.com/imgs/2023/06/baaf111867247a7f.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/2c162ddf8e5bfcd7.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/09a561c09c1a9e12.jpg',
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
  ]
}

const reasonData = {
  title: 'pages.dental-service.implant.reason.title',
  text: 'pages.dental-service.implant.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/bab7e2cd0e553a7f.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.implant.reason.lists[0].context',
    },
    {
      hideIcon: true,
      context: 'pages.dental-service.implant.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[2].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[3].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[4].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[5].context',
    }
  ]
}

const noticeData = {
  title: 'pages.dental-service.implant.notice.title',
  topText: [
    'pages.dental-service.implant.notice.topText[0].context',
    'pages.dental-service.implant.notice.topText[1].context'
  ],
  meritLists: [
    'pages.dental-service.implant.notice.meritLists[0].context',
    'pages.dental-service.implant.notice.meritLists[1].context',
  ],
  shortcomingLists: [
    'pages.dental-service.implant.notice.shortcomingLists[0].context',
    'pages.dental-service.implant.notice.shortcomingLists[1].context',
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
  detailTable: [
    {
      service: [
        'pages.dental-service.implant.detail.tableData[0].service[0].context',
        'pages.dental-service.implant.detail.tableData[0].service[1].context',
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[0].type[0].context',
        'pages.dental-service.implant.detail.tableData[0].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[0].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[0].type[2].context[1].text',
          'pages.dental-service.implant.detail.tableData[0].type[2].context[2].text'
        ]
      ],
      price: '¥13800',
      discountedPrice: '¥8800'
    },
    {
      service: [
        'pages.dental-service.implant.detail.tableData[1].service[0].context',
        'pages.dental-service.implant.detail.tableData[1].service[1].context',
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[1].type[0].context',
        'pages.dental-service.implant.detail.tableData[1].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[1].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[1].type[2].context[1].text'
        ]
      ],
      price: '¥15800',
      discountedPrice: '¥12800'
    },
    {
      service: [
        'pages.dental-service.implant.detail.tableData[2].service[0].context',
        'pages.dental-service.implant.detail.tableData[2].service[1].context',
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[2].type[0].context',
        'pages.dental-service.implant.detail.tableData[2].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[2].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[2].type[2].context[1].text',
          'pages.dental-service.implant.detail.tableData[2].type[2].context[2].text'
        ]
      ],
      price: '¥18800',
      discountedPrice: '¥14800'
    },
    {
      service: [
        'pages.dental-service.implant.detail.tableData[3].service[0].context',
        'pages.dental-service.implant.detail.tableData[3].service[1].context',
        'pages.dental-service.implant.detail.tableData[3].service[2].context'
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[3].type[0].context',
        'pages.dental-service.implant.detail.tableData[3].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[3].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[1].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[2].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[3].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[4].text'
        ]
      ],
      price: '¥26000',
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

let noticeCurrent = ref(1)

const onSlideChange = (swiper:any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
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
      <ServiceReason :reasonData="reasonData" />
      <div class="features">
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
      </div>
      <div class="notice">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{$t(noticeData.title)}}</div>
        </div>
        <div class="notice-topText">
          <span v-for="(topTextItem,topTextIndex) in noticeData.topText" :key="topTextIndex">{{$t(topTextItem)}}</span>
        </div>
        <div class="notice-in">
          <swiper :slidesPerView="windowWidth>768 ? '2': '1'" class="swiper-wrapper" @slideChange="onSlideChange">
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
          </swiper>
        </div>
        <div class="notice-bottomText pcBox">
          <span v-for="(bottomTextItem,bottomTextIndex) in noticeData.bottomText" :key="bottomTextIndex">{{$t(bottomTextItem)}}</span>
        </div>
        <div class="notice-line mbBox">
          <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="noticeCurrent"></PageSwiperPointLine>
        </div>
      </div>
      <ServiceStep :stepData="stepData" />
      <div class="note">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{$t('pages.dental-service.implant.note.title')}}</div>
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
      <div class="detail">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{$t(detailData.title)}}</div>
        </div>
        <div class="detail-table">
          <div class="detail-table-in">
            <div class="detail-table-in-col">
              <div v-for="(col,colIndex) in detailData.detailTableCol" :key="colIndex">
                <div v-if="col.length <= 2">{{$t(col)}}</div>
                <div v-else>{{$t(col).slice(0,col.length-4)}}</div>
                <div v-if="col.length > 2">{{$t(col).slice(col.length-4,col.length)}}</div>
              </div>
            </div>
            <div class="detail-table-in-data" v-for="(tableItem,tableItemIndex) in detailData.detailTable" :key="tableItemIndex">
              <div>
                <span v-for="(serviceTtem,serviceIndex) in tableItem.service" :key="serviceIndex">{{$t(serviceTtem)}}</span>
              </div>
              <div>
                <span v-for="(typeTtem,typeIndex) in tableItem.type" :key="typeIndex">
                  <p>· </p>
                  <p v-if="typeIndex<2">{{ $t(String(typeTtem)) }}</p>
                  <div v-else>
                    <p v-for="(typeTtemChild,typeTtemChildIndex) in typeTtem" :key="typeTtemChildIndex">
                      {{ $t(typeTtemChild) }}
                    </p>
                  </div>
                </span>
              </div>
              <div>{{tableItem.price}}</div>
              <div>{{tableItem.discountedPrice}}</div>
            </div>
          </div>
        </div>
        <div class="detail-remark">{{$t(detailData.remark)}}</div>
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
  .dentistryServices{
    background: #fff;
    padding: 143px 0;
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
      margin-top: 98px;
      &-table{
        width: 100%;
        max-width: 1245px;
        margin: 54px auto 0;
        overflow: hidden;
        overflow-x: auto;
        &-in{
          width: 100%;
          min-width: 714px;
          border-radius: 60px;
          overflow: hidden;
          &-col{
            display: flex;
            height: 69px;
            &>div{
              background: #FFA09E;
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
              background: #FFF1F0;
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
        }
      }
      &-remark{
        width: 100%;
        max-width: 1245px;
        margin: 20px auto 0;
        font-size: 20px;
        font-weight: 600;
      }
    }
    .notice{
      width: 100%;
      max-width: 1450px;
      margin: 96px auto 0;
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
      }
      &-bottomText{
        margin: 60px auto 0;
      }
      &-in{
        width: 90%;
        margin: 30px auto 0;
        .box{
          .box-in{
            height: 207px;
            margin-top: 15px;
            display: flex;
            background: #FFF1F0;
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
              background: #FFA09E;
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
              background: #FFCECB;
            }
          }
        }
      }
      &-line{
        width: 83px;
        margin: 22px auto;
      }
    }
    .note{
      margin-top: 96px;
      .noteCard{
        display: flex;
        flex-wrap: wrap;
        margin: 46px auto 0;
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
            background: #E6F4FF;
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
      .note{
        .noteCard{
          padding: 0 21.5px;
          box-sizing: border-box;
          &-in{
            width: 50%;
            padding: 0 8.5px;
            &-image{
              img{
                max-width: 70%;
                max-height: 70%;
              }
            }
            &:nth-of-type(1)>&-image,&:nth-of-type(4)>&-image,&:nth-of-type(5)>&-image,&:nth-of-type(8)>&-image{
              background: #FFF1F0;
            }
            &:nth-of-type(3)>&-image,&:nth-of-type(6)>&-image{
              background: #E6F4FF;
            }
            &-name{
              height: 56px;
              line-height: 56px;
              font-size: 15px;
            }
          }
        }
      }
      .detail{
        margin-top: 90px;
        &-table{
          padding-bottom: 30px;
          margin: 29px auto 0;
          position: relative;
          &::-webkit-scrollbar {
            background: none;
            height: 3px;
            width: 3px;
            position: relative;
          }
          &::-webkit-scrollbar-thumb{
            background: #FFA09E;
            border: none;
          }
          &::-webkit-scrollbar-track{
            background: #FFF1F0;
          }
          &::-webkit-scrollbar-button{
            display: block;
            opacity: 0;
          }
          &-in{
            margin: 0 30px;
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
          }
        }
        &-remark{
          padding: 0 30px;
          font-size: 16px;
          text-align: center;
        }
      }
      .notice{
        &-topText,&-bottomText{
          padding: 0 30px;
          span{
            display: inline;
          }
        }
        &-topText{
          margin: 28px auto 0;
          text-align: center;
        }
        &-in{
          width: 100%;
          margin: 34px 0 0;
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