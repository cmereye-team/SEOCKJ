<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('teethWhitening')
useHead({
  title: '牙齒美白',
})

const orthodonticsIntroduceData = {
  title: '牙齒美白',
  content: '',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/a21ff27ef9b1ec7b.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/bde3dfa1732da054.jpg',
  tabNavName: '牙齒美白',
  pageName: 'teethWhitening',
}

const reasonData = {
  title: '關於牙齒美白',
  text: '牙齒美白的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/2fd8bcb619ea1dc0.jpg',
  reasonLists: [
    {
      context: '想擁有更亮白的牙齒，可以考慮進行美白牙齒療程。',
    },
    {
      context: '美白牙齒療程能夠有效地把外在和內在的牙漬清除，令牙齒更加亮白。',
    },
    {
      context: '診所提供藍光美白牙齒及激光美白牙齒服務，助你建立閃亮笑容。',
    },
  ],
  isMediumCW: true
}

const noticeData = {
  title: {
    span1: '激光牙齒美白和',
    span2: '藍光牙齒美白的區別？',
  },
  meritLists: [
    '激光牙齒美白',
    '激光美白是利用激光能量激活美白劑，將適量的過氧化氫（hydrogen peroxide，即是美白劑），透過氧化原理滲入象牙質，將色素分子打碎，排除沉澱的色素。相比其他美白牙齒的方式，激光美白屬較安全、快速、效果較持久及較亮白的方法。過程約 30分鐘，即時見效，可維持至少1年。',
  ],
  shortcomingLists: [
    '藍光牙齒美白',
    '藍光美白是將專用美白溶液塗上牙齒表面，以藍光照射數次，進行氧化還原作用，達到美白的效果。過程約1小時，效果可維持約1年。',
  ],
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

const processData = {
  title: '牙齒美白過程',
  tabs: ['激光牙齒美白過程','藍光牙齒美白過程'],
  context: ['拔牙一般不需要進行手術，','但若牙齒歪生或非常接近神經，','則有機會需要進行手術式脫牙。'],
  lists: [
    {
      listItem: [
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
            text: '以激光儀器照射牙齒',
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
    },
    {
      listItem: [
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
  title: '美白牙齒常見問題',
  lists: [
    {
      Q: '牙齒美白的效果能維持多久？',
      A: '接受牙齒美白後，效果最長可維持3年。如有吸煙習慣、飲用過量紅酒，茶或咖啡等習慣亦容易令色素積聚，大大縮短美白能維持的時間。'
    },
    {
      Q: '如何護理牙齒美白療程後的牙齒？',
      A: '1. 減少吃含有大量色素的食品，如咖哩、茶、咖啡、白酒及紅酒等\n2. 減少吸煙或戒煙\n3. 早晚刷牙\n4. 定期洗牙'
    },
    {
      Q: '牙齒美白是否安全？',
      A: '多年的科學研究已能證明牙齒美白屬安全的療程。在接受療程前，牙醫會先檢查牙齒及口腔狀況，確定客人適合接受牙齒美白療程。'
    }
  ]
}

</script>


<template>
  <div>
    <PageHeader />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">牙科服務</div>
      <!-- 介绍 -->
      <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      <!-- 原因 -->
      <ServiceReason :reasonData="reasonData" />
      <!-- 区别 -->
      <div class="notice">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{noticeData.title.span1}}</span>
            <span>{{noticeData.title.span2}}</span>
          </div>
        </div>
        <div class="notice-in">
          <swiper
            :slidesPerView="windowWidth>768 ? '2': '1'"
            class="swiper-wrapper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="swiper-slide">
              <div class="box box-left">
                <div
                  class="box-in"
                  v-for="(meritItem,meritIndex) in noticeData.meritLists"
                  :key="meritIndex"
                >
                  <div>{{meritItem}}</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box box-right">
                <div
                  class="box-in"
                  v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists"
                  :key="shortcomingIndex"
                >
                  <div>{{shortcomingItem}}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="notice-line mbBox">
          <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="noticeCurrent"></PageSwiperPointLine>
        </div>
      </div>
      <!-- 过程 -->
      <ServiceProcess :processData="processData" />
      <!-- 注意事项 -->
      <ServiceNote :noteData="noteData" />
      <!-- 问题 -->
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <ContactUs />
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
  &-in {
    width: 90%;
    margin: 30px auto 0;
    .box {
      .box-in {
        height: 278px;
        margin-top: 15px;
        display: flex;
        background: #fff1f0;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #4d4d4d;
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child {
          background: #ffa09e;
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
          background: #ffcecb;
        }
      }
    }
  }
  &-line {
    width: 83px;
    margin: 22px auto;
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  .notice {
    &-in {
      .box {
        .box-in {
          font-size: 18px;
          padding: 0 4vw;
        }
      }
    }
  }
}

//md
@media only screen and (max-width: 760px) {
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
}
</style>