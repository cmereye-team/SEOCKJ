<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('dentalImplant')
useHead({
  title: "種植牙"
})

const introduceData = {
  title: '種植牙',
  content: '利用鈦金屬等物料製作成植體，然後植入進行牙槽骨當中，代替牙根以作支撐，然後在上面植入假牙、牙橋或假牙托來填補空缺的牙齒。隨着醫療技術的進步，現在不僅有傳統的植牙方式，還有微創植牙。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/2bc3a5d449c9b42e.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/611a2ada62c8fa55.jpg',
  tabNavName: '種植牙',
}

const featuresData = {
  title: '種植牙的特點',
  featuresLists: [
    '功能和外觀近似真牙，耐用美觀，能恢復正常咀嚼能力',
    '不需要磨損鄰近牙齒',
    '有助防止缺牙後牙槽骨繼續萎縮，保持牙骨的厚度',
    '提高全口假牙托的穩定性，加強假牙托的咀嚼和發音功效'
  ]
}

const noteLists = [
  {
    name: '輕咬紗布止血',
    img: 'https://static.cmereye.com/imgs/2023/05/786842c578839f96.png'
  },
  {
    name: '28小時內冰敷',
    img: 'https://static.cmereye.com/imgs/2023/05/375325d1f47a3eef.png'
  },
  {
    name: '48小時內熱敷',
    img: 'https://static.cmereye.com/imgs/2023/05/d2d6a05ff3b7bedc.png'
  },
  {
    name: '依指示按時服藥',
    img: 'https://static.cmereye.com/imgs/2023/05/b9bffb9d0a93caf8.png'
  },
  {
    name: '避免飲酒及抽煙',
    img: 'https://static.cmereye.com/imgs/2023/05/e263a699e37bb71a.png'
  },
  {
    name: '進食流質食物',
    img: 'https://static.cmereye.com/imgs/2023/05/e8d6a6c148d1a0ac.png'
  },
  {
    name: '避免激烈運動',
    img: 'https://static.cmereye.com/imgs/2023/05/eeb2f6a620511833.png'
  },
  {
    name: '謹記定期複診',
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
  title: '關於植牙',
  text: '常見種植牙的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/bab7e2cd0e553a7f.jpg',
  reasonLists:[
    {
      context: '常見種植牙的原因傳統治療方法',
    },
    {
      hideIcon: true,
      context: '(牙套、牙橋及假牙托等)',
    },
    {
      context: '無法修復缺牙的情況',
    },
    {
      context: '缺牙影響儀容，嚴重甚至會令面部變形',
    },
    {
      context: '缺牙容易令牙齒移位，影響咬合、發音',
    },
    {
      context: '改善咀嚼問題，回復正常飲食',
    }
  ]
}

const noticeData = {
  title: '傳統植牙和微創植牙的區別？',
  meritLists: [
    '傳統植牙',
    '傳統植牙是一種手術程序，需要在植入牙齒的位置進行切口，通常需要在手術後等待數月的時間，讓植牙的骨頭組織與人體結合成為一個穩固的基礎，然後再安裝人造牙齒。',
  ],
  shortcomingLists: [
    '微創植牙',
    '微創植牙是一種相對較新的技術，它採用更小的切口，因此手術的程度和疼痛通常比傳統植牙要小得多。微創植牙通常需要較短的康復時間，並且可以更快地恢復正常的口腔功能。',
  ]
}

const detailData = {
  title: '項目收費詳情',
  detailTableCol: ['服務','類別','原價 (單隻)','優惠價 (單隻)'],
  detailTable: [
    {
      service: [
        'OSSTEM (韓國）',
        '奧齒泰親水種植體植入術',
      ],
      type: [
        '口腔種植醫療服務費',
        '博朗全瓷冠/全鋯冠',
        ['OSSTEM (韓國）','奧齒泰親水','種植系統']
      ],
      price: '¥13800',
      discountedPrice: '¥8800'
    },
    {
      service: [
        'ANKYLOS（德國）',
        '種植體植入術',
      ],
      type: [
        '口腔種植醫療服務費',
        '博朗全瓷冠/全鋯冠',
        ['ANKYLOS（德國）','種植系統']
      ],
      price: '¥15800',
      discountedPrice: '¥12800'
    },
    {
      service: [
        'Straumann（瑞士SLA）',
        '悅鋯非親水種植體植入術',
      ],
      type: [
        '口腔種植醫療服務費',
        '博朗全瓷冠/全鋯冠',
        ['Straumann（瑞士SLA）','悅鋯非親水',' 種植系統']
      ],
      price: '¥18800',
      discountedPrice: '¥14800'
    },
    {
      service: [
        'Straumann（瑞士）',
        'Roxolid瑞鋯親水',
        'SLAcitive種植體植入術'
      ],
      type: [
        '口腔種植醫療服務費',
        '博朗全瓷冠/全鋯冠',
        ['Straumann（瑞士）','Roxolid','瑞鋯親水',' SLAcitive','種植系統']
      ],
      price: '¥26000',
      discountedPrice: '¥18800'
    }
  ]
}

let noticeCurrent = ref(1)

//走马灯事件
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
  // console.log(windowWidth)
}

</script>


<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader
     :headerBg="'https://static.cmereye.com/imgs/2023/04/306827fc69c5113d.jpg'"
     :mbBg="'https://static.cmereye.com/imgs/2023/04/90e1963571533efa.jpg'"
     :headerImg="'https://static.cmereye.com/imgs/2023/05/c46fcc590da0ffdd.png'"
     :headerBgImg="'https://static.cmereye.com/imgs/2023/05/de7105389a7f04b2.png'"
     :titlePosition="'left'"
    />
    <div class="dentistryServices">
      <div class="index_title pageCon">牙科服務</div>
      <!-- 介绍 -->
      <ServiceIntroduce :introduceData="introduceData" />
      <!-- 原因 -->
      <ServiceReason :reasonData="reasonData" />
      <!-- 特点 -->
      <div class="features">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{featuresData.title}}</div>
        </div>
        <div class="features-in">
          <div class="features-in-l pcBox">
            <img src="https://static.cmereye.com/imgs/2023/05/b5a6fc53ad15b758.png" alt="">
          </div>
          <div class="features-in-r">
            <div class="features-in-r-item" v-for="(featuresItem,index) in featuresData.featuresLists" :key="index">
              <div class="w-20px">· </div>
              <div>{{featuresItem}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 区别 -->
      <div class="notice">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{noticeData.title}}</div>
        </div>
        <div class="notice-topText">
          <span>傳統植牙和微創植牙都是一種牙科手術，用於取代缺失的牙齒。</span>
          <span>兩者之間的主要區別在於手術的程度和方法。</span>
        </div>
        <div class="notice-in">
          <swiper :slidesPerView="windowWidth>768 ? '2': '1'" class="swiper-wrapper" @slideChange="onSlideChange">
              <swiper-slide class="swiper-slide">
                <div class="box box-left">
                  <div class="box-in" v-for="(meritItem,meritIndex) in noticeData.meritLists" :key="meritIndex" >
                    <div>{{meritItem}}</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="box box-right">
                  <div class="box-in" v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists" :key="shortcomingIndex" >
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </swiper-slide>
          </swiper>
        </div>
        <div class="notice-bottomText pcBox">
          <span>*總體而言，傳統植牙和微創植牙都是安裝人造牙齒的有效方法，</span>
          <span>但是微創植牙通常需要較少的手術時間和康復時間，因此對於一些患者來說可能更為適合。然而，</span>
          <span>每個人的情況都是不同的，最好向您的牙醫師諮詢，以了解哪種方法最適合您的情況。</span>
        </div>
        <div class="notice-line mbBox">
          <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="noticeCurrent"></PageSwiperPointLine>
        </div>
      </div>
      <!-- 六个步骤 -->
      <ServiceStep :stepData="stepData" />
      <!-- 注意事項 -->
      <div class="note">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">種植牙後注意事項</div>
          <!-- <div class="dentistryServices-title-line"></div> -->
        </div>
        <div class="noteCard pageCon">
          <div class="noteCard-in" v-for="(note,noteIndex) in noteLists" :key="noteIndex">
            <div class="noteCard-in-image">
              <img :src="note.img" alt="">
            </div>
            <div class="noteCard-in-name">{{note.name}}</div>
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{detailData.title}}</div>
        </div>
        <div class="detail-table">
          <div class="detail-table-in">
            <div class="detail-table-in-col">
              <div v-for="(col,colIndex) in detailData.detailTableCol" :key="colIndex">
                <div v-if="col.length <= 2">{{col}}</div>
                <div v-else>{{col.slice(0,col.length-4)}}</div>
                <div v-if="col.length > 2">{{col.slice(col.length-4,col.length)}}</div>
              </div>
            </div>
            <div class="detail-table-in-data" v-for="(tableItem,tableItemIndex) in detailData.detailTable" :key="tableItemIndex">
              <div>
                <span v-for="(serviceTtem,serviceIndex) in tableItem.service" :key="serviceIndex">{{serviceTtem}}</span>
              </div>
              <div>
                <span v-for="(typeTtem,typeIndex) in tableItem.type" :key="typeIndex">
                  <p>· </p>
                  <p v-if="typeIndex<2">{{typeTtem}}</p>
                  <div v-else>
                    <p v-for="(typeTtemChild,typeTtemChildIndex) in typeTtem" :key="typeTtemChildIndex">
                      {{typeTtemChild}}
                    </p>
                  </div>
                </span>
              </div>
              <div>{{tableItem.price}}</div>
              <div>{{tableItem.discountedPrice}}</div>
            </div>
          </div>
        </div>
      </div>
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
            color: #4D4D4D;
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
              color: #4D4D4D;
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
          color: #4D4D4D;
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
            color: #4D4D4D;
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
    //注意事项
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
            font-size: 24px;
            color: #4D4D4D;
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
            position: relative;
            display: none;
          }
          &::-webkit-scrollbar-thumb{
            background: #FFA09E;
            border: none;
          }
          &::-webkit-scrollbar-track{
            background: #FFF1F0;
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
</style>