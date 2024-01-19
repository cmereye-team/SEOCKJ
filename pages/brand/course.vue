<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
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
  img: 'https://static.cmereye.com/imgs/2023/06/a9937a33f4c1e5aa.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/d85c660d38bd5f93.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/8756debfc7f1a54b.jpg',
  pageName: 'brand',
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
      timeNode: '1995年',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_1995.context',
        },
      ],
    },
    {
      timeNode: '2000年',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2000.context',
        },
      ],
    },
    {
      timeNode: '2006年',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2006.context',
        },
      ],
    },
    {
      timeNode: '2008年',
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
      timeNode: '2009年',
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
      timeNode: '2010年',
      events: [
        {
          month: '4月',
          context: 'pages.brand.course.history.time_2010.context_4',
        },
      ],
    },
    {
      timeNode: '2011年',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2011.context',
        },
      ],
    },
    {
      timeNode: '2012年',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2012.context',
        },
      ],
    },
    {
      timeNode: '2014年',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2014.context',
        },
      ],
    },
    {
      timeNode: '2015年',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2015.context',
        },
      ],
    },
    {
      timeNode: '2016年',
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
      timeNode: '2017年',
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
      timeNode: '2018年',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2018.context',
        },
      ],
    },
    {
      timeNode: '2019年',
      events: [
        {
          month: '',
          context:
            'pages.brand.course.history.time_2019.context',
        },
      ],
    },
    {
      timeNode: '2020年',
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
      timeNode: '2021年',
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
            <span>{{$t(introduceData.tabNavName)}}</span>
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
        <div class="course-bg">
          <div class="course-title pageCon">
            <div class="course-title-in">
              {{$t(courseData.title)}}
            </div>
          </div>
          <div class="course-in">
            <swiper
              slidesPerView="2"
              :scrollbar="{
                hide: true,
              }"
              :modules="[Scrollbar]"
              class="swiper"
            >
              <swiper-slide class="swiper-slide" v-for="(courseItem,courseIndex) in courseData.lists" :key="courseIndex">
                <div class="courseBox" >
                  <div class="courseBox-l">
                    <div class="round"></div>
                    <div class="line"></div>
                  </div>
                  <div class="courseBox-in">
                    <div class="timeNode">{{courseItem.timeNode}}</div>
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
  &-bg{
    padding: 70px 0 106px;
    background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
  }
  &-title{
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 160%;
    color: #666666;
    &-in{
      border-bottom: 4px solid var(--indexColor1);
      display: inline-block;
    }
  }
  &-in{
    width: 100%;
    max-width: 1452px;
    margin: 35px auto 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px var(--indexColor3);
    padding: 54px 65px 44px;
    box-sizing: border-box;
    // display: flex;
    // overflow-x: scroll;
    // scroll-snap-align: start;
    :deep(.swiper-scrollbar){
      opacity: 1 !important;
      width: calc(100% - 60px);
      margin: 0 30px;
      background: var(--indexColor2);
    }
    :deep(.swiper-scrollbar-drag){
      background: var(--indexColor1);
    }
    .swiper-slide{
      &:first-child{
        .courseBox{
          &-l{
            .line{
              width: 50%;
              margin-left: 50%;
            }
          }
        }
      }
      &:last-child{
        .courseBox-l{
          .line{
            width: 50%;
          }
        }
      }
    }
    .courseBox{
      display: flex;
      flex-direction: column;
      // min-width: 40%;
      &-l{
        width: 100%;
        // width: 44px;
        .round{
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-left: 50%;
          transform: translateX(-50%);
          background: var(--indexColor1);
        }
        .line{
          height: 3px;
          width: 100%;
          margin-top: -13px;
          background: var(--indexColor1);
          // height: 100%;
          // width: 3px;
          // margin-left: 10px;
        }
      }
      &-in{
        cursor: pointer;
        padding: 60px 30px;
        // padding-top: 50px;
        flex: 1;
        // padding-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        .timeNode{
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 160%;
          color: var(--indexColor1);
          margin-top: -10px;
        }
        &-lists{
          margin-top: 10px;
        }
        &-listItem{
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          .month{
            color: var(--indexColor1);
            text-align: center;
          }
          .context{
            text-align: center;
            color: #666666;
            white-space: pre-wrap;
          }
        }
      }
      // &:first-child{
      //   .courseBox-l{
      //     .line{
      //       width: 50%;
      //       margin-left: 50%;
      //     }
      //   }
      // }
      // &:last-child{
      //   .courseBox-l{
      //     .line{
      //       width: 50%;
            
      //     }
      //   }
      // }
      // &:last-child{
      //   .courseBox-l{
      //     .line{
      //       display: none;
      //     }
      //   }
      //   .courseBox-in{
      //     padding-bottom: 0;
      //   }
      // }
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
    &-bg{
      padding: 44px 0;
      background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
    }
    &-title{
      font-size: 26px;
      display: flex;
      justify-content: center;
    }
    &-in{
      width: calc(100% - 60px);
      padding: 24px;
      .courseBox{
        &-l{
          .round{
            width: 16px;
            height: 16px;
          }
          .line{
            height: 2px;
            margin-top: -9px;
          }
        }
        &-in{
          padding-bottom: 30px;
          .timeNode{
            font-weight: 500;
            font-size: 16px;
            margin-top: -5px;
          }
          &-lists{
            margin-top: 2px;
          }
          &-listItem{
            font-weight: 600;
            font-size: 14px;
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