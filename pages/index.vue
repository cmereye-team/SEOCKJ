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

const caseSharingLists = [
  {
    name: '陳裳 Jason',
    skill: '種植牙齒療程',
    text: '安心、舒服、無痛',
    context: '人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/cf650f7fe68dfed5.jpg'
  },
  {
    name: '蔡梓琪 Mandy',
    skill: '牙齒美白療程',
    text: '唔再怕同人合照喇',
    context: '人們都越來越重視牙齒的健康，所以對於缺牙問題大部分的人都會選擇及時進行修復，更多的人選擇了種植牙。',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/ce91ab62a4a1a581.jpg'
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

// const async posts = ({ $content }) => {
//     const posts = await $content("blog").fetch();

//     return {
//       posts,
//     };
//   },
// const posts = ({$content}) => useAsyncData('count', () => {
//   return $content("blog").fetch();
// })
// asyncData
// const { posts } = await this.$content('blog').fetch()
// const posts = await queryContent('blog')
// console.log(posts)
</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader /> 
    <div class="indexPage">
      <!-- <div>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
        </li>
      </div> -->
      <!-- 最新消息 -->
      <LatestNews />
      <!-- 品牌理念 -->
      <brandConcept />
      <!-- 牙科服務 -->
      <!-- 全科牙科,種植牙科,矯齒牙科,美容牙科,兒童牙科 -->
      <serviceCard :isIndexShow="true" />
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
      <div class="index-caseSharing">
        <div class="index-caseSharing-title">
          <div class="index_title">個案分享</div>
        </div>
        <div class="index-caseSharing-in">
          <div class="in-top">
            <CaseSharingVideoItem />
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
        color: #4D4D4D;
        box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
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
