<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppState } from '~/stores/appState'
import doctorLists_cs from '~/assets/js/doctor'
const appState = useAppState()
const { t } = useLang()
useHead({
  title: "主頁"
})

const doctorLists = [
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/516aeed6d967c676.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/80992f78106c7d53.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/1d3456ed3821c1c4.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/196b50324fc93fe4.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/1dbb3984575639ff.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/56e49b7148384404.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/34d614d0c682a526.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/1ef93f85ee9a633a.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/9784f0ad2629d595.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/88d453a0a618a07e.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/e860a5daa7853ce0.png',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/b77316390f0e14e2.png',
  },
]


onMounted(() => {
  // gsap.registerPlugin(ScrollTrigger);
  // const animRightIn = (name: string) => {
  //   return gsap.from(name, {
  //     opacity: 0, 
  //     x: 100, 
  //     duration: 3
  //   })
  // }
  // const animBottomIn = (name: string) => {
  //   return gsap.from(name, {
  //     opacity: 0, 
  //     y: 100, 
  //     duration: 3
  //   })
  // }
  // ScrollTrigger.create({
  //   trigger: ".index_title_1",
  //   animation: animRightIn(".index_title_1"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".index_title_2",
  //   animation: animRightIn(".index_title_2"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".dentalServices-box-in",
  //   animation: animBottomIn(".dentalServices-box-in"),
  //   start: "bottom bottom",
  // })
});

//医生模块轮播图事件
let doctorTeamCurrent = ref(1)
const onSlideDoctorTeamSwiperChange = (swiper:any) => {
  doctorTeamCurrent.value = swiper.realIndex + 1
}

//牙科服务卡片数据
const dentalServicesPagesList = [
  {
    title: '全科牙科',  //全科牙科
    pcImg: 'https://static.cmereye.com/imgs/2023/04/f76f7533f148b28f.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2023/04/4a393cf514e04325.jpg',
    link: ''
  },{
    title: '種植牙科',  //種植牙科
    pcImg: 'https://static.cmereye.com/imgs/2023/04/8ab832a4008bbe41.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2023/04/6b647f537779629d.jpg',
    link: '/service/dentalImplant'
  },{
    title: '矯齒牙科',  //矯齒牙科
    pcImg: 'https://static.cmereye.com/imgs/2023/04/ddea98c028072525.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2023/04/d017f197ce790ac6.jpg',
    link: ''
  },{
    title: '美容牙科',  //美容牙科
    pcImg: 'https://static.cmereye.com/imgs/2023/04/c9adcbbc63580982.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2023/04/9c92afda6655eae2.jpg',
    link: ''
  },{
    title: '兒童牙科',  //兒童牙科
    pcImg: 'https://static.cmereye.com/imgs/2023/04/d6c26df971b3a3f1.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2023/04/40d24f9212839593.jpg',
    link: ''
  }
]




</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader /> 
    <div class="indexPage">
      <!-- <svg width="91" height="132" viewBox="0 0 91 132" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M67.077 68.5028C73.7866 62.5899 79.322 53.3642 82.4672 46.319C85.151 40.3223 87.6672 34.6191 87.6672 26.6095C87.6672 18.0967 82.6768 3 66.8253 3C57.5157 3 54.4545 9.16446 45.3545 9.16446C36.2965 9.16446 33.0675 3 23.8418 3C8.0322 3 3 18.1386 3 26.6095C3 34.6611 5.55806 40.3223 8.19997 46.319C11.3451 53.3642 16.8805 62.5899 23.5902 68.5028" fill="white"/>
        <path d="M67.077 68.5028C73.7866 62.5899 79.322 53.3642 82.4672 46.319C85.151 40.3223 87.6672 34.6191 87.6672 26.6095C87.6672 18.0967 82.6768 3 66.8253 3C57.5157 3 54.4545 9.16446 45.3545 9.16446C36.2965 9.16446 33.0675 3 23.8418 3C8.0322 3 3 18.1386 3 26.6095C3 34.6611 5.55806 40.3223 8.19997 46.319C11.3451 53.3642 16.8805 62.5899 23.5902 68.5028" stroke="#4D4D4D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.8045 8.5698C39.2839 8.90533 39.7614 9.22664 40.2433 9.54032C39.7413 9.28791 39.2354 9.02414 38.7107 8.75039L38.6916 8.74043L38.6724 8.73079C38.3996 8.5944 38.234 8.49678 38.0254 8.37374C37.8572 8.27458 37.6611 8.15892 37.3582 7.99315C36.8932 7.72159 36.5008 7.48615 35.9919 7.17316C35.9373 7.13632 35.9039 7.08441 35.8911 7.02892C35.8847 7.00104 35.8845 6.97576 35.8881 6.95387C35.8914 6.93415 35.8994 6.90686 35.9228 6.8706L35.9285 6.86178L35.9341 6.85291C35.9712 6.79442 36.025 6.75893 36.0826 6.74562C36.1105 6.73919 36.1358 6.73896 36.1577 6.74262C36.1774 6.74592 36.2047 6.75392 36.2409 6.77732L36.7983 7.1369C37.0323 7.31541 37.3012 7.51746 37.5465 7.68916L37.58 7.64124L37.5465 7.68916L38.8045 8.5698Z" fill="white" stroke="#4D4D4D" stroke-width="5"/>
        <path d="M23.6318 68.502L64.4767 76.7213" stroke="#4D4D4D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.9028 80.1172L61.751 87.1204" stroke="#4D4D4D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30.1318 91.7344L59.0252 97.5214" stroke="#4D4D4D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.4028 103.35L56.2575 107.962" stroke="#4D4D4D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36.6318 114.967L53.5317 118.364" stroke="#4D4D4D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39.9028 126.582L50.806 128.763" stroke="#4D4D4D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> -->
      <!-- 最新消息 -->
      <LatestNews />
      <!-- 品牌理念 -->
      <brandConcept />
      <!-- 牙科服務 -->
      <!-- 全科牙科,種植牙科,矯齒牙科,美容牙科,兒童牙科 -->
      <serviceCard :isIndexShow="true" />
      <!-- <div class="index-dentalServices">
        <div class="index_title_1 index_title pageCon">牙科服務</div>
        <div class="index-dentalServices-in">
          <div class="dentalServices-box pageCon">
            <div class="dentalServices-box-in" v-for="(serviceCar,serviceCarIndex) in dentalServicesPagesList" :key="serviceCarIndex">
              <nuxt-link :to="serviceCar.link">
                <div class="images">
                  <img class="pcBox" :src="serviceCar.pcImg" alt="">
                  <img class="mbBox" :src="serviceCar.mbImg" alt="">
                </div>
                <h3>{{serviceCar.title}}</h3>
                <span>了解更多</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div> -->
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
              @slideChange="onSlideDoctorTeamSwiperChange"
            >
              <SwiperSlide v-for="(swiperPage,swiperPageIndex) in Math.ceil( doctorLists_cs[appState.areaTabCurNum].length / 12 )" :key="swiperPageIndex" >
                <div class="doctorTeamPage">
                  <div class="doctorItem" v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabCurNum].slice(swiperPageIndex*12,(swiperPageIndex+1)*12)" :key="doctorIndex">
                    <nuxt-link :to="`/doctorPage?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                  <!-- <div class="doctorItem" v-for="(doctorItem,doctorIndex) in doctorLists" :key="doctorIndex">
                    <nuxt-link :to="`/doctorPage`">
                      <img :src="doctorItem.imgUrl || ''" alt="">
                    </nuxt-link>
                  </div> -->
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
        <div class="index-doctorTeam-b pageCon">
          <div class="index-doctorTeam-b-in">
            <PageSwiperPointLine :latestNewsNum="Math.ceil( doctorLists_cs[appState.areaTabCurNum].length / 12 )" :latestNewsCurrent="doctorTeamCurrent" :isAutoWidth="true"></PageSwiperPointLine>
          </div>
        </div>
      </div>
      <!-- 個案分享 -->
      <!-- <div class="index-caseSharing">
        <div class="index_title pageCon">個案分享</div>
        <div class="index-caseSharing-in pageCon">
          <div class="in-top">
            <CaseSharingVideoItem />
          </div>
          <div class="in-cen">
            <CaseSharingImageItem />
            <CaseSharingImageItem />
          </div>
          <div class="in-bottom">
            <span>了解更多</span>
          </div>
        </div>
      </div> -->
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
//牙科服務
// .index-dentalServices {
//   padding: 140px 0 0;
//   width: 100%;
//   &-in {
//     background: linear-gradient(180deg, #FFF1F0 0%, rgba(255, 241, 240, 0) 100%);
//     padding: 80px 0;
//     margin-top: 30px;
//     .dentalServices-box {
//       display: flex;
//       justify-content: space-between;
//       &-in{
//         cursor: pointer;
//         width: 280px;
//         height: 539px;
//         background: #ffffff;
//         box-shadow: 4px 4px 6px rgba(255, 163, 158, 0.25),
//           inset 1px -1px 0px #ffccc7;
//         border-radius: 10px;
//         overflow: hidden;
//         .images{
//           width: calc(100% - 1px);
//           margin-left: 2px;
//           transition: all .3s;
//           overflow: hidden;
//           img{
//             transition: all .3s;
//             width: 100%;
//           }
//         }
//         h3 {
//           font-weight: 700;
//           font-size: 1.87rem;
//           line-height: 160%;
//           color: #4D4D4D;
//           text-indent: 15px;
//           margin-top: 34px;
//           transition: all .3s;
//         }
//         span {
//           display: inline-block;
//           text-indent: 15px;
//           font-weight: 500;
//           font-size: 0.94rem;
//           line-height: 160%;
//           color: #4D4D4D;
//           margin-top: 30px;
//           position: relative;
//           &::after {
//             content: '';
//             background: url(@/assets/images/icon_4.png) no-repeat;
//             background-size: 100% 100%;
//             width: 15px;
//             height: 15px;
//             display: block;
//             position: absolute;
//             right: -20px;
//             top: 50%;
//             transform: translateY(-50%);
//           }
//         }
//         &:hover{
//           .images{
//             transform: scale(1,1.1);
//             img{
//               transform: scale(1.1,1);
//             }
//           }
//           h3{
//             color: #FFA09E;
//           }
//         }
//       }
//     }
//   }
// }
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
    box-shadow: 2px 0px 8px rgba(255, 163, 158, 0.25);
    .doctorTeamPage{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .doctorItem{
        cursor: pointer;
        flex: 1;
        min-width: 16.55%;
        max-width: 16.7%;
        mix-blend-mode: multiply;
        box-shadow: inset -1px -1px 0px #FFA39E;
        transition: all .5s;
        overflow: hidden;
        img{
          width: calc(100% - 1px);
          height: calc(100% - 1px);
        }
        &:hover{
          background: #FFDDDA;
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
  background: linear-gradient(180deg,rgba(255, 241, 240, 0) 0%,#FFF1F0 100%);
  &-in{
    margin-top: 45px;
    .in-top{
      display: flex;
    }
    .in-cen{
      display: flex;
      justify-content: space-between;
      margin-top: 120px;
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
        color: #FFFFFF;
        text-align: center;
        display: inline-block;
        padding: 10px 70px;
        background: #FFCECB;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  // .index-dentalServices {
  //   padding: 110px 0 0;
  //   &-in {
  //     padding: 50px 0;
  //     .dentalServices-box {
  //       &-in{
  //         width: 18%;
  //         height: auto;
  //         padding-bottom: 20px;
  //         h3 {
  //           font-size: 1.6rem;
  //         }
  //         span {
  //           margin-top: 10px;
  //         }
  //       }
  //     }
  //   }
  // }
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
  //牙科服務
  // .index-dentalServices {
  //   padding: 90px 0 0;
  //   &-in {
  //     background: linear-gradient(270deg, rgba(255, 204, 199, 0.7) 0.02%, rgba(255, 241, 240, 0) 62%);
  //     padding: 16px 30px;
  //     .dentalServices-box {
  //       flex-direction: column;
  //       &-in{
  //         width: 100%;
  //         height: 100px;
  //         margin-bottom: 10px;
  //         position: relative;
  //         .images{
  //           position: absolute;
  //           right: 0;
  //           top: 0;
  //           width: 60%;
  //           height: 100%;
  //           height: calc(100% - 1px);
  //           img{
  //             height: 100%;
  //             width: auto;
  //             float: right;
  //           }
  //           &::before{
  //             content: '';
  //             position: absolute;
  //             top: 0px;
  //             left: 0;
  //             width: 100%;
  //             height: 99px;
  //             background: linear-gradient(to right, #fff 50%, rgba(0,0,0,0));
  //           }
  //         }
  //         h3{
  //           margin-top: 0;
  //           font-size: 1.25rem;
  //           margin-top: 15px;
  //         }
  //         span{
  //           margin-top: 20px;
  //           font-size: .625rem;
  //           &::after{
  //             width: 9px;
  //             height: 9px;
  //             right: -12px;
  //             top: 9px;
  //           }
  //         }
  //         &:last-child{
  //           margin-bottom: 0;
  //         }
  //       }
  //     }
  //   }
  // }
  //個案分享
  .index-caseSharing{
    padding: 0;
    &-in{
      margin-top: 35px;
      .in-top{
        display: none;
      }
      .in-cen{
        margin-top: 34px;
        flex-direction: column;
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
          color: #4D4D4D;
          transition: all .3s;
          &:hover{
            background: #FFDDDA;
            color: #FFFFFF;
            text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
          }
        }
      }
    }
  }
}
</style>
