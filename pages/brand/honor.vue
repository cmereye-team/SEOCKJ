<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setBrand('honor')
useHead({
  title: "品牌榮譽 | 口腔專科醫院",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健作為深圳愛康健口腔醫院，是一家牙科齒科品牌連鎖醫院，專注於口腔醫療，以醫療品質為核心，注重提升醫療技術水準。在口腔學術領域競賽中，我們連年斬獲大獎。我們秉承著「專科 · 專業 · 專注 · 專心」的初心，為廣大患者提供優質的牙科醫療服務。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 愛康健',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/4c587827f9cbed56.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/0ff6a2d8f919e481.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/95bbceb9fc7469d1.jpg',
  pageName: 'brand',
  pcText: ['專注口腔 榮獲殊榮','與時俱進 邁步向前'],
  mbText: ['專注口腔 榮獲殊榮','與時俱進 邁步向前']
}

const introduceData = {
  title: '品牌榮譽',
  content: 'CKJ愛康健口腔品牌連鎖\n專注口腔，屢獲殊榮',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/080b60a67d204e25.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/3db5860b4c31810e.jpg',
  tabNavName: '品牌榮譽',
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
    <div class="index_title pageCon">品牌理念</div>
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
            <span>主頁</span>
          </nuxt-link>
          <nuxt-link :to="'/dental-service'">
            <span>品牌理念</span>
          </nuxt-link>
          <span>{{introduceData.tabNavName}}</span>
        </div>
        <div class="introduce-in-t mbBox">
          <img :src="introduceData.mbImg" />
        </div>
        <div class="introduce-in-l pageCon">
          <div class="title">{{introduceData.title}}</div>
          <div class="content">{{introduceData.content}}</div>
        </div>
      </div>
    </div>
    <!-- 荣誉 -->
    <div class="honor">
      <div class="honor-bg">
        <div class="honor-title">
          <span>向匠心致敬</span>
          <span>愛康健品牌榮譽榜</span>
        </div>
        <div class="honor-in pageCon">
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
          <span>與時俱進，博採眾長</span>
          <span>技術與世界同步</span>
      </div>
      <div class="international-context">
        以醫療品質為本<br />
        注重醫療技術水準整體提升<br />
        在口腔學術領域競賽愛康健連年斬獲大獎<br />
        <br />
        與時俱進，技術與世界同步<br />
        攜手國內外口腔研究與教育中心和口腔醫學院校<br />
        合作成立多專科再教育/教學基地<br />
        為華南地區培養口腔專業人才<br />
      </div>
      <div class="international-in pageCon">
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
    <!-- 品牌 -->
    <div class="brand">
      <div class="brand-title">
        <div class="brand-title-in">
          <span>始於1995</span>
          <span>愛康健口腔品牌連鎖</span>
        </div>
      </div>
      <div class="brand-context">- 專科 · 專業 · 專注 · 專心 - </div>
      <div class="brand-in">
        <div>
          <div>
            <img src="https://static.cmereye.com/imgs/2023/05/d7e785a21ef31545.png" alt="">
          </div>
          <div>
            深圳老字號
          </div>
        </div>
        <div>
          <div>
            <img src="https://static.cmereye.com/imgs/2023/05/6b9b5cbf87f8da95.png" alt="">
          </div>
          <div>
            廣東省著名商標品牌
          </div>
        </div>
        <div>
          <div>
            <img src="https://static.cmereye.com/imgs/2023/05/42202884c1b63259.png" alt="">
          </div>
          <div>
            中山大學光華口腔醫學院<br class="mbBox" />研究生課程深圳教學基地
          </div>
        </div>
        <div>
          <div>
            <img src="https://static.cmereye.com/imgs/2023/05/cb849eb2ad0023d4.png" alt="">
          </div>
          <div>
            最具口碑影響力企業
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
      font-style: normal;
      .title {
        font-weight: 700;
        font-size: 50px;
        margin-top: 96px;
      }
      .content {
        font-weight: 600;
        font-size: 26px;
        max-width: 650px;
        width: 650px;
        margin-top: 68px;
        white-space: pre-wrap;
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
    color: #ffa09e;
  }
}
.honor{
  margin-top: 157px;
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
        border-bottom: 4px solid #FFA09E;
      }
    }
  }
  &-in{
    margin-top: 72px;
    display: flex;
    .leftBtn{
      width: 70px;
      background: #FFF1F0;
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
      background: #FFCECB;
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
  margin-top: 98px;
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
        border-bottom: 4px solid #FFA09E;
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
        background: #FFF1F0;
        left: 50%;
        transform: translateX(-50%);
      }
      :deep(.swiper-scrollbar-drag){
        background: #FFA09E;
      }
    }
  }
}
.brand{
  margin-top: 140px;
  &-title{
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 160%;
    color: #666666;
    display: flex;
    justify-content: center;
    &-in{
      display: inline-block;
      border-bottom: 4px solid #FFA09E;
      span{
        text-align: center;
        display: block;
      }
    }
  }
  &-context{
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 160%;
    text-align: center;
    color: #FFA09E;
    margin-top: 35px;
  }
  &-in{
    width: 100%;
    max-width: 1452px;
    margin: 61px auto 0;
    display: flex;
    justify-content: space-between;
    &>div{
      flex: 1;
      padding: 0 30px;
      &>div{
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 160%;
        text-align: center;
        color: #4C4C4C;
        white-space: pre-wrap;
        &:last-child{
          padding: 0 5px;
        }
        img{
          margin: 0 auto;
          max-width: 120px;
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
          font-size: 1.7vw;
          margin-top: 4vw;
          width: 33vw;
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 6vw;
  }
  .brand{
    &-in{
      &>div{
        padding: 0 2vw;
      }
    }
  }
}

//md
@media only screen and (max-width: 760px) {
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
  .honor{
    margin-top: 90px;
    &-bg{
      padding: 44px 30px;
      background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.3) 12.5%, rgba(255, 241, 240, 0.3) 81.99%, rgba(255, 241, 240, 0) 100%);
    }
    &-title{
      span{
        font-size: 26px;
        &:last-child{
          border-bottom: 2.5px solid #FFA09E;
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
    margin-top: 90px;
    &-title{
      span{
        font-size: 26px;
        &:last-child{
          border-bottom: 2.5px solid #FFA09E;
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
  .brand{
    margin-top: 90px;
    &-title{
      font-size: 26px;
      &-in{
        border-bottom: 2.5px solid #FFA09E;
      }
    }
    &-context{
      margin-top: 8px;
      font-size: 14px;
    }
    &-in{
      margin: 24.68px auto 0;
      padding: 0 21.5px;
      &>div{
        width: 25%;
        padding: 0 8.5px;
        &>div{
          font-size: 12px;
          &:last-child{
            width: 200%;
            white-space: nowrap;
            transform: scale(.5) translate(-50%,-50%);
            margin-top: 6px;
          }
          img{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>