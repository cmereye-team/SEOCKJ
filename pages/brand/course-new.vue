<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { ref } from 'vue';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
const appState = useAppState()
appState.setBrand('course')


useHead({
  title: '品牌歷程 | 口腔專科醫院',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '愛康健作為深圳愛康健口腔醫院是一家專業口腔醫院，秉承著「專科·專業」的服務理念，科學、合理地整合醫療資源。我們的醫師團隊均畢業於國內知名口腔學院，包括種植醫師、美學修復醫師、牙周病醫師等專業人員。他們帶領著醫護人員共同構成我們的服務團隊，為患者提供專業、優質的口腔醫療服務。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 愛康健',
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/01/1bc7c8742b23ae97.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/01/a59e0a87dfb394f1.jpg',
  pageName: 'course-new',
  pcText: ['健齒為本 嚴謹治療','專科 · 專業 · 實力保證'],
  mbText: ['健齒為本 嚴謹治療','專科 · 專業 · 實力保證']
}

const introduceData = {
  title: 'pages.brand.course.introduce.title',
  content:
    'pages.brand.course.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2024/01/64f1f4312e2a0f2c.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/01/f4ba25aef63c2a5b.jpg',
  tabNavName: 'pages.brand.course.introduce.tabNavName',
}

const courseData = {
  title: 'pages.brand.course.history.title',
  lists: [
    {
      timeNode: '1995',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_1995.context',
        },
      ],
    },
    {
      timeNode: '2000',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2000.context',
        },
      ],
    },
    {
      timeNode: '2006',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2006.context',
        },
      ],
    },
    {
      timeNode: '2008',
      events: [
        {
          month: '5月',
          context:
            'pages.brand.course.history.time_2008.context_5',
        },
        {
          month: '7月',
          context: 'pages.brand.course.history.time_2008.context_7',
        },
        {
          month: '10月',
          context: 'pages.brand.course.history.time_2008.context_10',
        },
        {
          month: '11月',
          context:
            'pages.brand.course.history.time_2008.context_11',
        },
      ],
    },
    {
      timeNode: '2009',
      events: [
        {
          month: '4月',
          context: 'pages.brand.course.history.time_2009.context_4',
        },
        {
          month: '6月',
          context: 'pages.brand.course.history.time_2009.context_6',
        },
        {
          month: '7月',
          context: 'pages.brand.course.history.time_2009.context_7',
        },
      ],
    },
    {
      timeNode: '2010',
      events: [
        {
          month: '4月',
          context: 'pages.brand.course.history.time_2010.context_4',
        },
      ],
    },
    {
      timeNode: '2011',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2011.context',
        },
      ],
    },
    {
      timeNode: '2012',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2012.context',
        },
      ],
    },
    {
      timeNode: '2014',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2014.context',
        },
      ],
    },
    {
      timeNode: '2015',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2015.context',
        },
      ],
    },
    {
      timeNode: '2016',
      events: [
        {
          month: '1月',
          context:
            'pages.brand.course.history.time_2016.context_1',
        },
        {
          month: '12月',
          context:
            'pages.brand.course.history.time_2016.context_12',
        },
      ],
    },
    {
      timeNode: '2017',
      events: [
        {
          month: '5月',
          context:
            'pages.brand.course.history.time_2017.context_5',
        },
        {
          month: '8月',
          context:
            'pages.brand.course.history.time_2017.context_8',
        },
      ],
    },
    {
      timeNode: '2018',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2018.context',
        },
      ],
    },
    {
      timeNode: '2019',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2019.context',
        },
      ],
    },
    {
      timeNode: '2020',
      events: [
        {
          month: '11月',
          context:
            'pages.brand.course.history.time_2020.context_11',
        },
        {
          month: '12月',
          context:
            'pages.brand.course.history.time_2020.context_12',
        },
      ],
    },
    {
      timeNode: '2021',
      events: [
        {
          month: '6月',
          context: 'pages.brand.course.history.time_2021.context_6',
        },
        {
          month: '9月',
          context:
            'pages.brand.course.history.time_2021.context_9'
        },
        {
          month: '12月',
          context: 'pages.brand.course.history.time_2021.context_12',
        },
      ],
    },
  ],
}

let _lists = JSON.parse(JSON.stringify(courseData.lists))
let newCourseLists = _lists.reverse()

const currtNum = ref(0)

const firstSwiper:any = ref(null);
const secondSwiper = ref(null);
const handleFirstSwiper = (swiper) =>{
  let _index = swiper.clickedIndex
  firstSwiper.value.slideToLoop(_index);
}

const setFirstSwiper = (swiper) => {
  firstSwiper.value = swiper;
};
const setSecondSwiper = (swiper) => {
  secondSwiper.value = swiper;
};
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">{{$t('pages.brand.title')}}</div>
      <div class="introduce bigPageCon">
        <div
          class="introduce-in"
          :style="{
        background: `url(${introduceData.pcImg}) no-repeat`,
        backgroundPosition: 'right top',
        backgroundSize: 'auto 100%'
        }"
        >
          <div class="tabNav noTitle pageCon">
            <nuxt-link :to="'/'">
              <span>{{$t('pages.index.title')}}</span>
            </nuxt-link>
            <nuxt-link :to="''">
              <span>{{$t('pages.brand.title')}}</span>
            </nuxt-link>
            <span>品牌介紹</span>
          </div>
          <div class="introduce-in-t mbBox">
            <img :src="introduceData.mbImg" />
          </div>
          <div class="introduce-in-l pageCon">
            <div class="title">{{$t(introduceData.title)}}</div>
            <div class="content">{{$t(introduceData.content)}}</div>
          </div>
        </div>
      </div>
      <div class="course-action">
        <div class="course-action-in">
          <div class="course-action-in-l">
            <img src="https://static.cmereye.com/imgs/2024/01/84dc48aa55e716a2.jpg" alt="">
          </div>
          <div class="course-action-in-r">
            <div class="t">
              <div class=t-t>
                <div class="title">香港工聯會參觀交流</div>
                <div class="time">2023年12月15日</div>
              </div>
              <div class="context">接待香港工聯會代表團，交流牙科醫療服務發展及趨勢</div>
            </div>
            <div class="b">
              <div class="btn">
                <a href="/brand/action-message">查看全文</a>
              </div>
              <div class="text">團體交流</div>
            </div>
          </div>
        </div>
      </div>
      <div class="course">
        <div class="course-title dentistryServices-title">
          <div class="course-title-in dentistryServices-title-in bb">
            {{$t(courseData.title)}}
          </div>
        </div>
        <div class="course-in">
          <div class="historyNode-pc">
            <div class="historyNode-pc-t">
              <swiper
                :slidesPerView="'auto'"
                class="courseSwiperT"
                :modules="[Controller]"
                :width="131.41"
                @swiper="setFirstSwiper"
                @click="handleFirstSwiper"
                :controller="{ control: secondSwiper }"
              >
                <swiper-slide :class="['swiper-slide']" v-for="(courseItem,courseIndex) in newCourseLists" :key="courseIndex">
                  <div class="timeNode">{{courseItem.timeNode}}</div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="historyNode-pc-line">
              <div class="historyNode-pc-line-in"></div>
            </div>
            <div class="historyNode-pc-b">
              <swiper
                class="courseSwiperB"
                :modules="[Controller]"
                @swiper="setSecondSwiper"
                :controller="{ control: firstSwiper }"
              >
                <swiper-slide :class="['swiper-slide']" v-for="(courseItem,courseIndex) in newCourseLists" :key="courseIndex">
                  <div class="courseBox">
                    <div class="courseBox-line">
                      <div class="round"></div>
                      <div class="line"></div>
                    </div>
                    <div class="courseBox-in">
                      <div class="courseBox-in-lists">
                        <div class="courseBox-in-listItem" v-for="(courseTimeNodeItem,courseTimeNodeIndex) in courseItem.events" :key="courseTimeNodeIndex">
                          <div class="month">{{courseTimeNodeItem.month}}</div>
                          <div class="context">{{$t(courseTimeNodeItem.context)}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="historyNode-mb">
            <div class="historyNode-in" v-for="(courseItem,courseIndex) in courseData.lists" :key="courseIndex">
              <div :class="['historyNode-box',{'act-historyNode-box': currtNum === courseIndex}]" >
                <div class="year" @click="currtNum = courseIndex">{{courseItem.timeNode}}</div>
                <div :class="['eventsItem',{'act-eventsItem': currtNum === courseIndex}]" v-for="(eventsItem,eventsIndex) in courseItem.events" :key="eventsIndex">
                  <div class="month">{{eventsItem.month}}</div>
                  <div class="context">{{$t(eventsItem.context)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>



<style lang="scss" scoped>
// 介绍
.introduce {
  &-in {
    margin-top: 45px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #666666;
      padding-bottom: 90px;
      .title {
        font-weight: 700;
        font-size: 50px;
        margin-top: 96px;
      }
      .content {
        font-weight: 600;
        font-size: 26px;
        max-width: 630px;
        width: 630px;
        margin-top: 56px;
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 83px;
  a {
    &:not(:last-child)::after {
      content: '';
      width: 20px;
      height: 2px;
      margin: 0 10px;
      background: #cbcbcb;
      display: inline-block;
      vertical-align: middle;
      margin-top: -4px;
    }
  }
  & > span {
    cursor: pointer;
    color: var(--indexColor1);
  }
}
.course{
  margin-top: 157px;
  &-in{
    width: 100%;
    margin: 75px auto 0;
    .courseSwiperT{
      width: 100%;
      width: 732px;
      overflow: visible;
      .swiper-slide{
        width: auto;
        padding: 0 24px;
        transition: all .5s;
        display: flex;
        align-items: flex-end;
        height: 96px;
        .timeNode{
          color: var(--textColor);
          text-align: center;
          font-size: 34px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          transition: all .5s;
          opacity: .6;
        }
        &.swiper-slide-active{
          padding: 0 62px 0 40px;
          // margin-left: 20px;
          // margin: 0 62px 0 40px;
          .timeNode{
            font-size: 60px;
            opacity: 1;
            color: var(--indexColor1);
          }
        }
      }
    }
    .courseSwiperB{
      width: 100%;
      max-width: calc(284px + 82px);
      margin: 0 auto 0 calc((100% - 732px) / 2);
      overflow: visible;
      .swiper-slide{
        max-width: max-content;
        padding: 31px 41px;
        position: relative;
        height: auto;
        .courseBox{
          width: 284px;
          &-line{
            .round{
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: var(--indexColor1);
              position: absolute;
              top: -9px;
              left: 41px;
            }
          }
          &-in{
            opacity: .6;
            transition: all .5s;
            &-listItem{
              .month{
                color: var(--indexColor1);
                text-align: justify;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 32px */
                letter-spacing: 2px;
              }
              .context{
                color: var(--textColor);
                text-align: justify;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 32px */
                letter-spacing: 2px;
              }
            }
          }
        }
        &.swiper-slide-active{
          .courseBox{
            &-in{
              opacity: 1;
            }
          }
        }
      }
    }
    .historyNode-pc-t{
      width: 100%;
      max-width: max-content;
      margin: 0 auto 33px;
    }
    .historyNode-pc-b{
      background: linear-gradient(rgba(252, 22, 130, 0.40) -68.47%, rgba(252, 22, 130, 0.28) -68.46%, rgba(255, 168, 198, 0.00) 63.88%);
    }
    .historyNode-pc-line{
      width: 100%;
      height: 2px;
      background: #FDD3E3;
      position: relative;
      &-in{
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        width: calc((100% - 732px + 90px) / 2);
        background: var(--indexColor1);
      }
    }
    .historyNode-mb{
      display: none;
    }
  }
}
.course-action{
  width: 100%;
  padding: 0 30px;
  margin: 129px auto 0;
  max-width: 1470px;
  &-in{
    display: flex;
    width: 100%;
    &-l{
      width: calc((520 / 1410) * 100%);
      margin-right: calc((40 / 1410) * 100%);
    }
    &-r{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .t{
        .t-t{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title{
            color: var(--indexColor1);
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; 
          }
          .time{
            color: var(--textColor);
            text-align: right;
            font-family: Noto Serif HK;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
          }
        }
        .context{
          color: var(--textColor);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 32px */
          margin-top: 14px;
        }
      }
      .b{
        .btn{
          background: var(--indexColor1);
          box-shadow: 0px 3.704px 7.409px 0px rgba(252, 22, 130, 0.38);
          width: 157px;
          height: 46px;
          line-height: 46px;
          color: #fff;
          transition: all .3s;
          border-radius: 30px;
          text-align: center;
          &:hover{
            background: var(--indexColor3);
          }
          a{
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .text{
          color: var(--textColor);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 32px */
          text-decoration-line: underline;
          margin-top: 22px;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .introduce {
    &-in {
      margin-top: 3.5vw;
      &-l {
        padding-bottom: 7vw;
        .title {
          font-size: 2.2vw;
          margin-top: 6vw;
        }
        .content {
          font-size: 1.5vw;
          margin-top: 3vw;
          width: 42vw;
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 6vw;
  }
  .course{
    margin-top: 120px;
  }
}

//md
@media only screen and (max-width: 768px) {
  .introduce {
    &-in {
      height: auto;
      max-height: 300%;
      background: none !important;
      margin-top: 0;
      &-t {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &-l {
        padding-bottom: 0;
        .title {
          padding: 0 30px;
          font-weight: 700;
          font-size: 26px;
          margin-top: 0;
        }
        .content {
          font-size: 1rem;
          width: 95%;
          padding: 0 30px;
          margin-top: 30px;
        }
      }
    }
  }
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 20px;
  }
  .course{
    margin-top: 90px;
    &-in{
      margin-top: 0;
      padding: 42px 53px 0;
      .historyNode-pc{
        display: none;
      }
      .historyNode-mb{
        display: block;
        .year{
          color: var(--indexColor1);
          // text-align: center;
          font-size: 30px;
          font-weight: 700;
          line-height: 160%;
          background: #fff;
          display: inline-block;
          position: relative;
          z-index: 1;
          padding: 0 10px;
          animation: modulFontAnim 3s infinite;
        }
        .month{
          color: var(--indexColor1);
          text-align: justify;
          font-size: 16px;
          font-weight: 500;
          line-height: 160%;
        }
        .context{
          color: var(--textColor);
          font-size: 16px;
          font-weight: 500;
          line-height: 160%;
        }
        .eventsItem{
          opacity: 0;
          transition: all 1s;
          transition-delay: 1s;
          height: 0;
          overflow: hidden;
          margin-bottom: 0;
          -webkit-clip-path: polygon(0 0,100% 0,100% 0,0 0);
          clip-path: polygon(0 0,100% 0,100% 0,0 0);
          &.act-eventsItem{
            height: initial;
            opacity: 1;
            &:not(:last-child){
              margin-bottom: 25px;
            }
            -webkit-clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
            clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
          }
        }
        .historyNode-in{
          padding-bottom: 47px;
          padding-left: 33px;
          position: relative;
          .historyNode-box{
            &::before{
              content: '';
              width: 90px;
              height: 2px;
              background: var(--indexColor1);
              position: absolute;
              top: 25.5px;
              left: 0;
              transition: all 1s;
              // animation: modulAnim 3s infinite;
            }
            &::after{
              content: '';
              background: url(@/assets/images/icon_15.svg);
              width: 15px;
              height: 15px;
              background-size: 100% 100%;
              position: absolute;
              top: 19px;
              left: 130px;
              transition: all 1s;
              animation: modulIconAnim 3s infinite;
            }
            &.act-historyNode-box{
              &::before{
                width: calc(100% - 20px);
              }
              &::after{
                left: calc(100% - 16px);
                transform: rotate(90deg);
              }
            }
            
          }
          &::before{
            content: '';
            width: 2px;
            height: 100%;
            background: var(--indexColor1);
            position: absolute;
            top: 30px;
            left: 0;
          }
          &::after{
            content: '';
            width: 16px;
            height: 16px;
            background: var(--indexColor1);
            border-radius: 50%;
            position: absolute;
            top: 18px;
            left: -7.5px;
          }
          &:last-child::before{
            display: none;
          }
        }
      }
    }
  }
  .course-action{
    margin: 65px auto 0;
    padding: 0;
    &-in{
      flex-direction: column;
      &-l{
        width: 100%;
        img{
          width: 100%;
        }
      }
      &-r{
        padding: 0 30px;
        .t{
          .t-t{
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            .title{
              margin-top: 17px;
              font-size: 18px;
            }
            .time{
              font-size: 16px;
              text-align: left;
            }
          }
          .context{
            font-size: 16px;
          }
        }
        .b{
          display: flex;
          flex-direction: column;
          .btn{
            order: 2;
            margin: 13px auto 0;
            width: 137px;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
          }
          .text{
            order: 1;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>