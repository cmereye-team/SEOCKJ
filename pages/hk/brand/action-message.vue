<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setBrand('course')


useHead({
  title: '活動消息 | 口腔專科醫院',
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
  img: 'https://static.cmereye.com/imgs/2024/01/c61d17a2a11e2f5e.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/01/5ca99f8e9d9eaca9.jpg',
  pageName: 'action-message',
  pcText: [],
  mbText: []
}

const introduceData = {
  title: ['接待香港工聯會代表團','交流牙科醫療服務發展及趨勢'],
  time: '2023年12月15日',
  content: ['11月20日，愛康健口腔集團接待了香港工聯會代表團的訪問，旨在交流大灣區牙科醫療服務的發展及趨勢。這次訪問對愛康健口腔集團來說是一個重要的里程碑，讓我們更深入了解香港醫療領域的需求。',
  '香港工聯會成立於1948年，是香港最大的勞工團體，致力於提供多項服務，包括進修、培訓、就業、醫療、民生和長者護理等，對香港社會的發展和民眾的福祉起著重要作用。'],
  mbImg: 'https://static.cmereye.com/imgs/2024/01/3ecc200110e70423.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/01/04d5f50c079f5d33.jpg',
  tabNavName: '活動消息',
}
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">{{$t('pages.brand.title')}}</div>
      <div class="introduce bigPageCon">
        <div class="tabNav noTitle pageCon">
          <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">
            <span>{{$t('pages.index.title')}}</span>
          </nuxt-link>
          <nuxt-link :to="''">
            <span>{{$t('pages.brand.title')}}</span>
          </nuxt-link>
          <span>{{$t(introduceData.tabNavName)}}</span>
        </div>
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
          <div class="introduce-in-l pageCon">
            <div class="title">
              <span v-for="(titleItem,titleIndex) in introduceData.title" :key="titleIndex">{{titleItem}}</span>
            </div>
            <div class="time">{{introduceData.time}}</div>
            <div class="content">
              <span v-for="(contentItem,contentIndex) in introduceData.content" :key="contentIndex">{{contentItem}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ckj-action-message bigPageCon">
        <div class="ckj-action-message-content">
          <a href="https://youtu.be/tcpGNgVGG4g" class="video">
            <img src="https://static.cmereye.com/imgs/2024/01/3188d1c493bd4575.jpg" alt="">
            <img src="https://static.cmereye.com/imgs/2023/12/e974c03be612528f.png" alt="">
          </a>
        </div>
        <div class="ckj-action-message-content">
          <div class="l">
            <img src="https://static.cmereye.com/imgs/2024/01/99415a059cc9a36c.jpg" alt="">
          </div>
          <div class="r">
            <span>愛康健口腔集團成立於1995年，致力於為香港市民提供專業、貼心的口腔醫療服務。我們不斷更新和升級醫療設備，引進先進的技術，確保為客人提供更安全、舒適、高效的醫療體驗。我們也重視醫療研究和教育，提升醫生們的專業水平和技術能力。作為深圳老字號連鎖齒科品牌，在香港市民中已有29年的歷史，一直以來都以提供專業、優質、全面的牙科服務為宗旨。</span>
            <img src="https://static.cmereye.com/imgs/2024/01/0c39bdc26df8cb95.jpg" alt="">
            <span>在訪問期間，香港工聯會代表團參觀了我們的羅湖口岸愛康健口腔醫院、富康口腔門診部和康輝口腔門診部，詳細了解我們的醫療設施、技術和服務。他們與我們的醫療團隊進行了深入的交流和討論，探討口腔醫療的發展趨勢和技術創新。我們共同探討了兩地牙科醫療所面臨的挑戰，特別是香港牙科服務供不應求的問題，每3.7位香港牙醫需服務約10,000名香港市民。</span>
            <span>愛康健將繼續努力，通過技術創新、人才培養和質量管理的提升、關注患者的需求和利益，提供更優質專業的醫療服務。這次交流為我們提供了寶貴的學習機會，讓我們更好地回應香港市民對醫療服務的需求。</span>
          </div>
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
    margin-top: 56px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #666666;
      padding-bottom: 90px;
      .title {
        font-weight: 700;
        font-size: 50px;
        span{
          display: block;
        }
      }
      .content {
        font-weight: 600;
        font-size: 26px;
        max-width: 630px;
        width: 630px;
        margin-top: 56px;
        span{
          display: block;
          &:not(:last-child){
            margin-bottom: 50px;
          }
        }
      }
      .time{
        color: #666;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 44px;
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
.ckj-action-message{
  &-content{
    width: 100%;
    position: relative;
    .video{
      width: 100%;
      max-width: 1084px;
      margin: 88px auto;
      position: relative;
      display: block;
      img{
        width: 100%;
        &:nth-of-type(2){
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          width: 195px;
          height: 195px;
          cursor: pointer;
          transition: all .3s;
          &:hover{
            width: 210px;
            height: 210px;
          }
        }
      }
    }
  }
  .l{
    position: absolute;
    width: calc(917 / 1920 * 100%);
    img{
      width: 100%;
    }
  }
  .r{
    width: 100%;
    max-width: 1452px;
    margin: 0 auto;
    img{
      display: none;
    }
    span{
      display: block;
      // width: calc((717 / 1452) * 100%);
      width: auto;
      margin-left: calc((1452 - 717) / 1452 * 100%);
      color: var(--textColor);
      text-align: justify;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%; /* 44.8px */
      &:not(:last-child){
        margin-bottom: 30px;
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
          margin-top: 020px;
          span{
            display: inline;
          }
        }
        .time{
          padding: 0 30px;
        }
        .content {
          font-size: 16px;
          width: 95%;
          padding: 0 30px;
          margin-top: 20px;
          span{
            &:not(:last-child){
              margin-bottom: 30px;
            }
          }
        }
      }
    }
  }
  .tabNav {
    padding: 30px 30px 17px;
    font-size: 1rem;
    margin-top: 0px;
  }
  .ckj-action-message{
    &-content{
      .video{
        margin: 30px auto;
        img{
          &:nth-of-type(2){
            width: 67px;
            height: 67px;
            &:hover{
              width: 75px;
              height: 75px;
            }
          }
        }
      }
    }
    .l{
      position: initial;
      width: 100%;
      display: none;
    }
    .r{
      span{
        margin-left: 0;
        padding: 0 30px;
        color: var(--textColor);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; 
      }
      img{
        width: 100%;
        display: block;
        margin-bottom: 30px;
      }
    }
  }
}
</style>