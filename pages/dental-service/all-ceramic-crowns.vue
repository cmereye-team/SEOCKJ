<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('all-ceramic-crowns')
useHead({
  title: "全瓷牙冠 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供全瓷牙冠（牙套）服務，全瓷冠又稱全瓷牙冠、全瓷冠假牙、陶瓷假牙，而牙冠（牙套）是修復牙齒的方法，用於覆蓋形狀參差不齊或變色的牙齒。當牙齒因各種原因損壞時、需要修復裂縫或保護脆弱的牙齒時，會建議使用牙冠（牙套）進行修復。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙套 全瓷冠全瓷牙冠 全瓷冠假牙 陶瓷假牙 假牙 牙冠 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/5d98a050a1163042.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/1bd88089085e1d68.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/cb2cff6cdf17d72b.jpg',
  pageName: 'all-ceramic-crowns',
  pcText: ['自然、耐久、性價比首選','讓您恢復美麗微笑，重拾自信'],
  mbText: ['讓您恢復美麗微笑','重拾自信']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.all-ceramic-crowns.introduce.title',
  content: 'pages.dental-service.all-ceramic-crowns.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/9fc2655c5c081f7d.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/cafd36416517ada2.jpg',
  tabNavName: 'pages.dental-service.all-ceramic-crowns.introduce.tabNavName',
}

const foiblesData = {
  title: '全瓷牙冠及全鋯牙冠點揀好？',
  context: {
    span1: '有多種製作牙冠的物料，包括：',
    span2: '金屬、全鋯及全瓷。每種物料各有優點，可讓患者按需要選擇。',
    span3: '以下為你分析全瓷牙冠及全鋯牙冠的優缺點：'
  },
  foiblesLists: [
    {
      title: '金屬牙冠',
      meritLists: [
        '耐用度高，適合需要咬合力較強的後牙',
        '損耗度與真牙非常接近',
        '堅固穩定，不用大幅度磨小牙齒，可保留大部分原牙'
      ],
      shortcomingLists: [
        '金屬顏色，不適合用於前牙，影響外觀',
        '價格較為昂貴',
        '有致癌疑慮',
        '較容易發炎或出現過敏'
      ]
    },
    {
      title: '烤瓷合金牙冠',
      meritLists: [
        '內層金屬，外層陶瓷，可以選擇外層顏色，較為美觀'
      ],
      shortcomingLists: [
        '由於有內外兩層，相對較厚，需磨掉較多牙齒',
        '牙套顏色不夠自然',
        '牙套邊緣會顯出金屬黑影，影響外觀',
        '表層陶瓷較金屬容易剝落或斷裂'
      ]
    },
    {
      title: '全瓷牙冠',
      meritLists: [
        '仿真度最高，透光度高，顏色相似，自然',
        '適合用於前牙，外觀與真牙相似，不影響美觀',
        '可根據需要的堅固度，選擇不同強度的物料'
      ],
      shortcomingLists: [
        '比金屬牙套的強度較低'
      ]
    }
  ]
}

let foiblesSwiperRef ={
  slideToLoop: (a)=>{}
}
const setFoiblesSwiperRef = (swiper:any) => {
  foiblesSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  foiblesSwiperRef.slideToLoop(_value-1)
}

let foiblesCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  foiblesCurrent.value = swiper.realIndex + 1
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
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="smallPageCon">
      <div class="index_title">{{$t('pages.dental-service.title')}}</div>
    </div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <div class="foibles">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{foiblesData.title}}</div>
      </div>
      <div class="foibles-context">
        <div>
          <span>{{foiblesData.context.span1}}</span>
          <span>{{foiblesData.context.span2}}</span>
        </div>
        <span>{{foiblesData.context.span3}}</span>
      </div>
      <div class="foibles-in">
        <div class="foibles-in-box">
          <swiper
            class="swiperBox foibles-in-box"
            :slidesPerView="windowWidth>768 ? 3: 1.2"
            @swiper="setFoiblesSwiperRef"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="swiper-slide">
              <div class="foibles-in-box-th">
                <div class="title"></div>
                <div class="listsTh">優點</div>
                <div class="listsTh">缺點</div>
              </div>
              <div class="foibles-in-box-item">
                <div class="title">{{foiblesData.foiblesLists[0].title}}</div>
                <div class="merit listsBox">
                  <div class="listsBox-in" v-for="(meritItem,meritIndex) in foiblesData.foiblesLists[0].meritLists" :key="meritIndex">
                    <div>· </div>
                    <div>{{meritItem}}</div>
                  </div>
                </div>
                <div class="shortcoming listsBox">
                  <div class="listsBox-in" v-for="(shortcomingItem,shortcomingIndex) in foiblesData.foiblesLists[0].shortcomingLists" :key="shortcomingIndex">
                    <div>· </div>
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="foibles-in-box-item">
                <div class="title">{{foiblesData.foiblesLists[1].title}}</div>
                <div class="merit listsBox">
                  <div class="listsBox-in" v-for="(meritItem,meritIndex) in foiblesData.foiblesLists[1].meritLists" :key="meritIndex">
                    <div>· </div>
                    <div>{{meritItem}}</div>
                  </div>
                </div>
                <div class="shortcoming listsBox">
                  <div class="listsBox-in" v-for="(shortcomingItem,shortcomingIndex) in foiblesData.foiblesLists[1].shortcomingLists" :key="shortcomingIndex">
                    <div>· </div>
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="foibles-in-box-item">
                <div class="title">{{foiblesData.foiblesLists[2].title}}</div>
                <div class="merit listsBox">
                  <div class="listsBox-in" v-for="(meritItem,meritIndex) in foiblesData.foiblesLists[2].meritLists" :key="meritIndex">
                    <div>· </div>
                    <div>{{meritItem}}</div>
                  </div>
                </div>
                <div class="shortcoming listsBox">
                  <div class="listsBox-in" v-for="(shortcomingItem,shortcomingIndex) in foiblesData.foiblesLists[2].shortcomingLists" :key="shortcomingIndex">
                    <div>· </div>
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
          <div class="foibles-line">
            <PageSwiperPointLine :latestNewsNum="3" :latestNewsCurrent="foiblesCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
          </div>
        </div>
      </div>
    </div>
    <serviceCard />
    <NewAddress />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.foibles{
  margin-top: 134px;
  &-context{
    margin-top: 35px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #666666;
    div{
      display: flex;
      justify-content: center;
    }
    &>span{
      &:last-child{
        display: block;
        color: var(--indexColor1);
      }
    }
  }
  &-in{
    margin-top: 54px;
    &-box{
      width: 100%;
      margin: 0 auto;
      max-width: 1394px;
      &-th{
        width: 150px;
        text-align: center;
        .title{
          height: 69px;
        }
        .listsTh{
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          color: #666666;
          &:nth-of-type(2){
            height: 239px;
            line-height: 239px;
          }
          &:last-child{
            height: 271px;
            line-height: 271px;
          }
        }
      }
      &-item{
        .title{
          text-align: center;
          height: 69px;
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 69px;
          color: #FFFFFF;
        }
        .listsBox{
          background: var(--indexColor2);
          display: flex;
          padding: 22px 52px 0 28px;
          flex-direction: column;
          &-in{
            display: flex;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 160%;
            color: #666666;
            justify-content: center;
            div:first-child{
              width: 20px;
            }
            div:last-child{
              flex: 1;
            }
          }
        }
        .merit{
          height: 239px;
        }
        .shortcoming{
          height: 271px;
          margin-top: 15px;
        }
        &:not(:last-child){
          margin-right: 3px;
        }
        &:last-child{
          overflow: hidden;
          .title{
            background: var(--indexColor);
          }
        }
        &:nth-of-type(2){
          border-radius: 60px 0 0 60px;
          overflow: hidden;
          .title{
            background: var(--indexColor1);
          }
        }
        &:nth-of-type(3){
          .title{
            background: var(--indexColor);
          }
        }
      }
      .swiper-slide{
        &:nth-of-type(1){
          display: flex;
          width: calc(40% - 6px) !important;
          margin-right: 3px;
        }
        &:nth-of-type(2){
          width: 30% !important;
        }
        &:nth-of-type(3){
          width: 30% !important;
          border-radius: 0 60px 60px 0;
          overflow: hidden;
          margin-left: 3px;
        }
      }
    }
  }
  &-line{
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1920px) {
  .foibles{
    margin-top: 6.9792vw;
    &-context{
      margin-top: 1.8229vw;
      font-size: 1.0417vw;
    }
    &-in{
      margin-top: 2.8125vw;
      &-box{
        max-width: 72.6042vw;
        &-th{
          width: 7.8125vw;
          .title{
            height: 3.5938vw;
          }
          .listsTh{
            font-size: 1.4583vw;
            &:nth-of-type(2){
              height: 12.4479vw;
              line-height: 12.4479vw;
            }
            &:last-child{
              height: 14.1146vw;
              line-height: 14.1146vw;
            }
          }
        }
        &-item{
          .title{
            height: 3.5938vw;
            font-size: 1.4583vw;
            line-height: 3.5938vw;
          }
          .listsBox{
            padding: 1.1458vw 2.7083vw 0 1.4583vw;
            &-in{
              font-size: 1.0417vw;
              div:first-child{
                width: 1.0417vw;
              }
            }
          }
          .merit{
            height: 12.4479vw;
          }
          .shortcoming{
            height: 14.1146vw;
            margin-top: .7813vw;
          }
          &:not(:last-child){
            margin-right: .1563vw;
          }
          &:nth-of-type(2){
            border-radius: 3.125vw 0 0 3.125vw;
          }
        }
        .swiper-slide{
          &:nth-of-type(1){
            margin-right: .1563vw;
          }
          &:nth-of-type(3){
            border-radius: 0 3.125vw 3.125vw 0;
            margin-left: .1563vw;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .foibles{
    &-context{
      font-size: 16px;
      div{
        flex-direction: column;
        align-items: center;
        &>span{
          width: 80%;
        }
      }
      &>span{
        margin: 0 auto;
        font-weight: 500;
        font-size: 16px;
        width: 60%;
      }
    }
    &-in{
      margin-top: 44px;
      &-box{
        &-th{
          width: 64px;
          text-align: left;
          margin-left: 30px;
          .title{
            height: 40px;
          }
          .listsTh{
            font-weight: 600;
            font-size: 20px;
            &:nth-of-type(2){
              height: 174px;
              line-height: 174px;
            }
            &:last-child{
              height: 197px;
              line-height: 197px;
            }
          }
        }
        &-item{
          flex: 1;
          .title{
            font-weight: 600;
            font-size: 20px;
            height: 40px;
            line-height: 40px;
          }
          .listsBox{
            padding: 0 23px 0 16px;
            justify-content: center;
            &-in{
              font-weight: 500;
              font-size: 15px;
              div:first-child{
                width: 10px;
              }
            }
          }
          .merit{
            height: 174px;
          }
          .shortcoming{
            height: 197px;
            margin-top: 8px;
          }
        }
        .swiper-slide{
          &:nth-of-type(1){
            width: 90% !important;
          }
          &:nth-of-type(2){
            width: 75% !important;
          }
          &:nth-of-type(3){
            width: 75% !important;
          }
        }
      }
    }
    &-line{
      width: 100%;
      max-width: 150px;
      margin: 30px auto 0;
      display: block;
    }
  }
}
</style>