<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppState } from '~/stores/appState'
import doctorLists_cs from '~/assets/js/doctor'
const appState = useAppState()
const { t } = useLang()
useHead({
  title: "CKJ愛康健齒科連鎖 | 香港官方網站 | 深圳二級口腔醫院",
  titleTemplate: '',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '愛康健提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，剝智慧牙、植牙、箍牙、牙齒美白、全口修復及各種牙科治療等，專注你的口腔健康。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 愛康健齒科集團 深圳口腔專科醫院 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科',
    },
  ],
})

const caseSharingLists = [
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/72a1864e2021e804.jpg'
  },
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/f1fab4a43cdea943.jpg'
  },
]

const caseSharingTopData = {
  type: 'pages.index.caseSharing.caseSharingTopData.type',
  name: 'pages.index.caseSharing.caseSharingTopData.name',
  skill: 'pages.index.caseSharing.caseSharingTopData.skill',
  process: 'pages.index.caseSharing.caseSharingTopData.process',
  text: 'pages.index.caseSharing.caseSharingTopData.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/06/b6685121c74c93e0.png'
}

//医生模块轮播图事件
let doctorTeamCurrent = ref(1)
const onSlideDoctorTeamSwiperChange = (swiper:any) => {
  doctorTeamCurrent.value = swiper.realIndex + 1
}

let areaTabCurNum = computed(()=>{
  return appState.areaTabCurNum
})

let doctorTeamSwiperRef = {
  slideTo: (a,b)=>{},
  slideToLoop: (a)=>{}
}
const setDoctorTeamSwiperRef = (swiper:any) => {
  doctorTeamSwiperRef = swiper;
}

const handleLineCur = (_value:number) =>{
  doctorTeamSwiperRef.slideToLoop(_value-1)
}

watch(
  areaTabCurNum, (newValue, oldValue) => {
    doctorTeamSwiperRef.slideTo(0, 0);
  },
  {
    deep: true,
  }
);

const headerConfigData = {
  img: 'https://static.cmereye.com/imgs/2023/11/e9f317c46f2242ed.jpg',
  bg: 'https://static.cmereye.com/imgs/2023/11/be45851e1f050a5b.png',
  mbImg: 'https://static.cmereye.com/imgs/2023/11/50a66a8efbcfcc12.jpg',
  pageName: 'index-test',
  pcText: ['重拾自信笑容', '愛牙愛己，由你做起'],
  mbText: ['重拾自信笑容', '愛牙愛己，由你做起'],
}

</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfigData" /> 
    <div class="indexPage">
      <!-- 最新消息 -->
      <LatestNews />
      <!-- 品牌理念 -->
      <brandConcept />
      <!-- 牙科服務 -->
      <serviceCard :isIndexShow="true" />
      <!-- 视频地址 -->
      <div class="index-videoBox">
        <div class="index-videoBox-t pageCon">
          <div class="index_title index_title_2">專題報導</div>
        </div>
        <div class="index-videoBox-c pageCon">
          <div class="index-videoBox-c-l">
            <div>HK01</div>
            <div>深圳食買玩，點少得睇牙!口岸位置、性價比高 咪咪姐推薦口腔醫院</div>
            <a href="https://www.hk01.com/%E5%81%A5%E5%BA%B7Easy/959987/%E6%B7%B1%E5%9C%B3%E9%A3%9F%E8%B2%B7%E7%8E%A9-%E9%BB%9E%E5%B0%91%E5%BE%97%E7%9D%87%E7%89%99-%E5%8F%A3%E5%B2%B8%E4%BD%8D%E7%BD%AE-%E6%80%A7%E5%83%B9%E6%AF%94%E9%AB%98-%E5%92%AA%E5%92%AA%E5%A7%90%E6%8E%A8%E8%96%A6%E5%8F%A3%E8%85%94%E9%86%AB%E9%99%A2" target="black">
              查看原文
            </a>
          </div>
          <div class="index-videoBox-c-r">
            <a href="https://www.hk01.com/%E5%81%A5%E5%BA%B7Easy/959987/%E6%B7%B1%E5%9C%B3%E9%A3%9F%E8%B2%B7%E7%8E%A9-%E9%BB%9E%E5%B0%91%E5%BE%97%E7%9D%87%E7%89%99-%E5%8F%A3%E5%B2%B8%E4%BD%8D%E7%BD%AE-%E6%80%A7%E5%83%B9%E6%AF%94%E9%AB%98-%E5%92%AA%E5%92%AA%E5%A7%90%E6%8E%A8%E8%96%A6%E5%8F%A3%E8%85%94%E9%86%AB%E9%99%A2" target="black">
              <img src="https://static.cmereye.com/imgs/2023/12/0ef603cd96873713.webp" alt="專題報導" title="專題報導">
              <img src="https://static.cmereye.com/imgs/2023/12/e974c03be612528f.png" class="icon" alt="">
            </a>
          </div>
        </div>
      </div>
      <!-- 關於我們 -->
      <AboutUs />
      <!-- 醫生團隊 -->
      <div class="index-doctorTeam">
        <div class="index-doctorTeam-t pageCon">
          <div class="index_title index_title_2">醫生團隊</div>
          <AreaTab />
        </div>
        <div class="index-doctorTeam-c pageCon">
            <Swiper
              class="swiperBox"
              :loop="true"
              :autoplay="{
                disableOnInteraction: true,
              }"
              @swiper="setDoctorTeamSwiperRef"
              @slideChange="onSlideDoctorTeamSwiperChange"
            >
              <SwiperSlide v-for="(swiperPage,swiperPageIndex) in Math.ceil( doctorLists_cs[appState.areaTabCurNum].length / 12 )" :key="swiperPageIndex" >
                <div class="doctorTeamPage">
                  <div class="doctorItem" v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabCurNum].slice(swiperPageIndex*12,(swiperPageIndex+1)*12)" :key="doctorIndex">
                    <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
        <div class="index-doctorTeam-b pageCon">
          <div class="index-doctorTeam-b-in">
            <PageSwiperPointLine :latestNewsNum="Math.ceil( doctorLists_cs[appState.areaTabCurNum].length / 12 )" :latestNewsCurrent="doctorTeamCurrent" :isAutoWidth="true" @changeLineCur="handleLineCur"></PageSwiperPointLine>
          </div>
        </div>
      </div>
      <!-- 個案分享 -->
      <div class="index-caseSharing">
        <div class="index-caseSharing-title">
          <div class="index_title">{{$t('pages.index.caseSharing.title')}}</div>
        </div>
        <div class="index-caseSharing-in">
          <div class="in-top">
            <CaseSharingVideoItem :caseSharingData="caseSharingTopData" />
          </div>
          <div class="in-cen">
            <div class="in-cen-box" v-for="(caseSharingItem,caseSharingIndex) in caseSharingLists" :key="caseSharingIndex">
              <CaseSharingImageItem :userInfo="caseSharingItem" :userIndex="caseSharingIndex" />
            </div>
          </div>
          <!-- <div class="in-bottom">
            <span>了解更多</span>
          </div> -->
        </div>
      </div>
      <!-- 聯絡我們 -->
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
svg:hover path{
  cursor: pointer;
  fill:rgba(255, 120, 117, 0.65)
}
.indexPage {
  width: 100%;
  background: #fff;
  padding-bottom: 140px;
}
//醫生團隊
.index-doctorTeam{
  margin: 140px 0;
  &-t{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &-c{
    margin-top: 45px;
    .doctorTeamPage{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 10px;
      .doctorItem{
        cursor: pointer;
        flex: 1;
        min-width: 16.55%;
        max-width: 16.6%;
        border-right: 1px solid;
        border-bottom: 1px solid;
        border-color: #FFA39E;
        transition: all .5s;
        overflow: hidden;
        box-shadow: 2px -2px 8px rgba(255, 163, 158, 0.25);
        img{
          width: calc(100% - 1px);
          height: calc(100% - 1px);
        }
        &:hover{
          background: var(--indexColor);
        }
      }
    }
  }
  &-b{
    padding-top: 60px;
    display: flex;
    justify-content: center;
  }
}
//個案分享
.index-caseSharing{
  padding: 35px 0;
  background: linear-gradient(180deg,rgba(255, 241, 240, 0) 0%,var(--indexColor2) 100%);
  &-title{
    display: flex;
    justify-content: center;
  }
  &-in{
    width: 100%;
    max-width: 1046px;
    margin: 45px auto 0;
    .in-top{
      display: flex;
    }
    .in-cen{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 120px;
      &-box{
        width: calc(50% - 8px);
      }
    }
    .in-bottom{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 35px;
      span{
        cursor: pointer;
        font-style: normal;
        font-weight: 600;
        font-size: 2rem;
        line-height: 160%;
        text-align: center;
        display: inline-block;
        padding: 10px 70px;
        background: #FFFFFF;
        color: #666666;
        box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
      }
    }
  }
}
.index-videoBox{
  margin-top: 132px;
  &-c{
    display: flex;
    align-items: center;
    margin-top: 50px;
    &-l{
      flex: 1;
      div{
        &:nth-of-type(1){
          color: #4D4D4D;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%; 
        }
        &:nth-of-type(2){
          color: #FC1682;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%; 
        }
      }
      a{
        display: block;
        color: #fff;
        background: #FC1682;
        border-radius: 30px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 35px;
        font-style: normal;
        font-weight: 900;
        width: 100%;
        max-width: 400px;
        margin-top: 47px;
        box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
        transition: all .3s;
        &:hover{
          background: #FF85AF;
        }
      }
    }
    &-r{
      width: calc((966 / 1432) * 100%);
      padding-left: calc((100 / 1432) * 100%);
      img{
        width: 100%;
      }
      a{
        position: relative;
      }
      .icon{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 20%;
        height: auto;
        transition: all .3s;
        &:hover{
          width: 23%;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-videoBox{
    &-c{
      &-l{
        a{
          width: 50%;
          min-width: 50px;
          font-size: 2vw;
          margin-top: 2vw;
          height: 4vw;
          line-height: 4vw;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .indexPage {
    width: 100%;
    background: #fff;
    padding: 0 0 90px;
  }
  //醫生團隊
  .index-doctorTeam{
    margin: 90px 0;
    &-t{
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
    }
    &-c{
      margin-top: 20px;
      .doctorTeamPage{
        .doctorItem{
          // width: 33.33%;
          min-width: 33.33%;
          max-width: 33.34%;
        }
      }
    }
  }
  //個案分享
  .index-caseSharing{
    padding: 0;
    background:none;
    &-in{
      margin: 35px auto 0;
      .in-cen{
        margin-top: 34px;
        flex-direction: column;
        &-box{
          width: 100%;
        }
      }
      .in-bottom{
        width: 100%;
        background: linear-gradient(0deg, rgba(255, 241, 240, 0.7) 41.54%, rgba(255, 241, 240, 0) 137.31%);
        padding: 20px 0;
        margin-top: 0;
        span{
          width: 137px;
          height: 40px;
          font-weight: 500;
          font-size: 1rem;
          background: #FFFFFF;
          line-height: 40px;
          padding: 0;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          color: #666666;
          transition: all .3s;
          &:hover{
            background: var(--indexColor3);
            color: #FFFFFF;
            text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
          }
        }
      }
    }
  }
  .index-videoBox{
    margin-top: 48px;
    &-c{
      flex-direction: column-reverse;
      text-align: center;
      margin-top: 34px;
      &-l{
        width: auto;
        margin: 19px 30px 0;
        div{
          &:nth-of-type(1){
            font-size: 16px;
          }
          &:nth-of-type(2){
            font-size: 18px;
          }
        }
        a{
          font-size: 20px;
          height: 40px;
          line-height: 40px;
          max-width: 267px;
          margin: 30px auto 0;
        }
      }
      &-r{
        width: 100%;
        padding-left: 0;
        a{
          display: block;
        }
      }
    }
  }
}
</style>
