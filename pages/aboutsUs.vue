<script lang="ts" setup>
import { ref } from 'vue';
import { Controller } from 'swiper';
import { Scrollbar } from 'swiper';

useHead({
  title: '品牌介紹 | 口腔專科醫院',
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

let currtNum = ref(0)

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

const changeSwiper = (swiper) =>{
  currtNum.value = swiper.activeIndex
}

let swiperRef ={
  slidePrev: ()=>{},
  slideNext: ()=>{}
}
const setSwiperRef = (swiper:any) => {
  swiperRef = swiper;
};
const handleProcessBtn = (_type: string) => {
  swiperRef[_type]();
}
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="smallPageCon aboutsUs-title">
        <div class="index_title">關於我們</div>
      </div>
      <div class="tabNav noTitle smallPageCon">
            <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
              <span>{{$t('pages.index.title')}}</span>
            </nuxt-link>
            <span :title="'關於我們'">關於我們</span>
          </div>
      <div class="introduce bigPageCon">
        <div
          class="introduce-in"
          :style="{
        background: `url(${introduceData.pcImg}) no-repeat`,
        backgroundPosition: 'right top',
        backgroundSize: 'auto 100%'
        }"
        >
          <div class="introduce-in-t mbBox">
            <img :src="introduceData.mbImg" />
          </div>
          <div class="introduce-in-l smallPageCon">
            <h2>簡介</h2>
            <div class="title">CKJ愛康健口腔品牌連鎖專注口腔，屢獲殊榮</div>
            <div class="content">作為深圳口腔專科醫院，深圳愛康健口腔醫院秉承著「專科·專業」的服務宗旨，對醫療資源進行了科學、合理的整合。醫師團隊是畢業於國內知名口腔學院的專業人員；醫院各專業帶頭人，包括種植醫師、美學修復醫師、牙周病醫師等共同組成，帶領一批醫護人員一起構成愛康健口腔醫院的服務團隊。全程式預約一體化診療服務，讓每一位顧客享受健康微笑之旅。</div>
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
                :slidesPerView="1"
                class="courseSwiperT"
                :modules="[Controller]"
                :width="145"
                :translate="145"
                @swiper="setFirstSwiper"
                @click="handleFirstSwiper"
                @slideChange="changeSwiper"
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
                @click="handleFirstSwiper"
                :controller="{ control: firstSwiper }"
              >
                <swiper-slide :class="['swiper-slide']" v-for="(courseItem,courseIndex) in newCourseLists" :key="courseIndex">
                  <div class="courseBox">
                    <div class="courseBox-line">
                      <div class="round" :class="{currtNumRound: currtNum >= courseIndex}"></div>
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
      <div class="honor">
      <div class="honor-bg">
        <div class="honor-title">
          <span>{{$t('pages.brand.honor.honorSwiper.title.span_1')}}</span>
          <span>{{$t('pages.brand.honor.honorSwiper.title.span_2')}}</span>
        </div>
        <div class="honor-in smallPageCon">
          <div class="leftBtn" @click="handleProcessBtn('slidePrev')"></div>
          <swiper
            slidesPerView="auto"
            :loop="true"
            class="honorSwiper"
            @swiper="setSwiperRef"
          >
            <swiper-slide class="swiper-slide">
              <img src="https://static.cmereye.com/imgs/2023/06/154e36113fa5e579.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="https://static.cmereye.com/imgs/2023/06/ac0aa9264119857f.png" alt="">
            </swiper-slide>
          </swiper>
          <div class="rightBtn" @click="handleProcessBtn('slideNext')"></div>
        </div>
      </div>
    </div>
    <!-- 国际 -->
    <div class="international">
      <div class="international-title">
          <span>{{$t('pages.brand.honor.international.title.span_1')}}</span>
          <span>{{$t('pages.brand.honor.international.title.span_2')}}</span>
      </div>
      <div class="international-context">
        {{$t('pages.brand.honor.international.context.item_1')}}<br />
        {{$t('pages.brand.honor.international.context.item_2')}}<br />
        {{$t('pages.brand.honor.international.context.item_3')}}<br />
        <br />
        {{$t('pages.brand.honor.international.context.item_4')}}<br />
        {{$t('pages.brand.honor.international.context.item_5')}}<br />
        {{$t('pages.brand.honor.international.context.item_6')}}<br />
        {{$t('pages.brand.honor.international.context.item_7')}}<br />
      </div>
      <div class="international-in smallPageCon">
        <!-- https://static.cmereye.com/imgs/2023/05/f358efedd13763fe.jpg -->
        <swiper
          slidesPerView="auto"
          :scrollbar="{
            hide: true,
          }"
          :modules="[Scrollbar]"
          class="internationalSwiper"
        >
          <swiper-slide class="swiper-slide">
            <img src="https://static.cmereye.com/imgs/2023/05/077256e4a998aad2.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="https://static.cmereye.com/imgs/2023/05/d528ef75d3159deb.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="https://static.cmereye.com/imgs/2023/05/bd7fb4779d941c03.jpg" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div>
      <NewAddress />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>



<style lang="scss" scoped>
// 介绍
.introduce {
  &-in {
    margin-top: 20px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #666666;
      padding-bottom: 90px;
      h2{
        color: var(--Grey-Deep, #4D4D4D);
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 54.6px */
        padding-top: 66px;
      }
      .title {
        font-weight: 700;
        margin-top: 10px;
        color: var(--indexColor1);
        width: 630px;
        font-size: 50px;
        letter-spacing: 5px;
      }
      .content {
        font-weight: 600;
        font-size: 20px;
        width: 630px;
        margin-top: 10px;
        letter-spacing: 4px;
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 43px;
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
  margin-top: 100px;
  &-in{
    width: 100%;
    margin: 36px auto 0;
    .courseSwiperT{
      width: 732px;
      overflow: visible;
      .swiper-slide{
        width: auto;
        transition: all .5s;
        display: flex;
        align-items: flex-end;
        height: 96px;
        width: 145px;
        box-sizing: content-box;
        .timeNode{
          color: var(--textColor);
          text-align: center;
          font-size: 34px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          transition: all .5s;
          opacity: .6;
          width: 100%;
        }
        &.swiper-slide-active{
          padding: 0 62px 0 40px;
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
              background: #FDD3E3;
              position: absolute;
              top: -9px;
              left: 41px;
              transition: all .3s;
              &.currtNumRound{
                background: var(--indexColor1);
              }
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
  margin: 80px auto 0;
  max-width: 1280px;
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
          // width: 157px;
          width: calc(400 / 892 * 100%);
          max-width: 400px;
          height: 60px;
          line-height: 60px;
          color: #fff;
          transition: all .3s;
          border-radius: 30px;
          text-align: center;
          font-size: 35px;
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
          line-height: 120%; /* 32px */
          // text-decoration-line: underline;
          margin-top: 22px;
          // padding-bottom: 3px;
          display: inline-block;
          border-bottom: 1px solid var(--textColor);
        }
      }
    }
  }
}
.honor{
  margin-top: 20px;
  &-bg{
    padding: 70px 0 106px;
    background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
  }
  &-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span{
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      &:last-child{
        border-bottom: 4px solid var(--indexColor1);
      }
    }
  }
  &-in{
    margin-top: 72px;
    display: flex;
    .leftBtn{
      width: 70px;
      background: var(--indexColor2);
      cursor: pointer;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-75%,-50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent #fff transparent transparent;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .rightBtn{
      width: 70px;
      background: var(--indexColor);
      cursor: pointer;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-25%,-50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent transparent transparent #fff;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .honorSwiper{
      width: calc(100% - 140px);
      overflow: hidden;
      margin: 0;
      .swiper-slide{
        img{
          width: 100%;
        }
      }
    }
  }
}
.international{
  margin-top: 60px;
  &-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span{
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      &:last-child{
        border-bottom: 4px solid var(--indexColor1);
      }
    }
  }
  &-context{
    text-align: center;
    margin-top: 44px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
  }
  &-in{
    margin-top: 58px;
    .internationalSwiper{
      padding-bottom: 44px;
      .swiper-slide{
        padding: 0 15px;
        &:nth-of-type(1){
          width: 105%;
        }
        &:nth-of-type(2){
          width: 91%;
        }
        &:nth-of-type(3){
          width: 131.5%
        }
      }
      :deep(.swiper-scrollbar){
        opacity: 1 !important;
        width: 450px;
        margin: 0 auto;
        background: var(--indexColor2);
        left: 50%;
        transform: translateX(-50%);
      }
      :deep(.swiper-scrollbar-drag){
        background: var(--indexColor1);
      }
    }
  }
}
.aboutsUs-title{
  display: flex;
  justify-content: center;
  
}
@media (min-width: 768px) and (max-width: 1920px) {
  .introduce {
    &-in {
      margin-top: 1.0417vw;
      height: 32.709vw;
      max-height: 628px;
      &-l {
        padding-bottom: 4.6875vw;
        h2{
          font-size: 2.1875vw;
          padding-top: 3.4375vw;
        }
        .title {
          margin-top: .5208vw;
          width: 32.8125vw;
          font-size: 2.6042vw;
          letter-spacing: .2604vw;
        }
        .content {
          font-size: 1.0417vw;
          width: 32.8125vw;
          margin-top: .5208vw;
          letter-spacing: .2083vw;
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 2.2396vw;
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
          animation: modulFontAnim 2s infinite;
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
          transition: all .5s;
          transition-delay: .5s;
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
              transition: all .5s;
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
              transition: all .5s;
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
            width: max-content;
          }
        }
      }
    }
  }
  .honor{
    margin-top: 30px;
    &-bg{
      padding: 44px 30px;
      background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.3) 12.5%, rgba(255, 241, 240, 0.3) 81.99%, rgba(255, 241, 240, 0) 100%);
    }
    &-title{
      span{
        font-size: 26px;
        &:last-child{
          border-bottom: 2.5px solid var(--indexColor1);
        }
      }
    }
    &-in{
      margin-top: 35px;
      .leftBtn{
        width: 15.5px;
        &::after{
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent #fff transparent transparent;
        }
      }
      .rightBtn{
        width: 15.5px;
        &::after{
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent transparent transparent #fff;
        }
      }
      .honorSwiper{
        width: calc(100% - 31px);
      }
    }
  }
  .international{
    margin-top: 30px;
    &-title{
      span{
        font-size: 26px;
        &:last-child{
          border-bottom: 2.5px solid var(--indexColor1);
        }
      }
    }
    &-context{
      font-weight: 500;
      font-size: 14px;
      margin-top: 28px;
    }
    &-in{
      margin-top: 28px;
      .internationalSwiper{
        padding-bottom: 30px;
        .swiper-slide{
          padding: 0 5px;
          &:nth-of-type(1){
            margin-left: 25px;
          }
        }
        :deep(.swiper-scrollbar){
          width: 249px;
        }
      }
    }
  }
}
</style>