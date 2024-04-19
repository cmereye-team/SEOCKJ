<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const route = useRouter()
const appState = useAppState()
appState.setDentistryService('children-dentistry')
useHead({
  title: "兒童牙科保健｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供兒童牙科保健服務，家長可以定期帶孩子去合格的牙醫進行牙科檢查和諮詢，早期發現兒童牙齒的潛在問題，例如蛀牙和其他口腔疾病，並採取針對性的治療。小朋友口腔和牙齒問題成因與成年人不同，牙科治療上需要留意，同時需要照顧兒童的心靈，讓他們放心接受牙科治療。愛康健兒童牙科保健服務提供適合兒童的治療方式，讓小朋友能夠在舒適安全的環境下接受牙科治療。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '兒童牙科 兒童牙科保健 兒童牙科診所 兒童牙科醫院 學童牙科診所 學童牙科醫院 兒童牙科護理 學童牙科保健 學童牙科 幼童牙科保健 兒童牙齒保健 小兒牙科保健 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/67f203a9b4c651be.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/4a26475cb4471cee.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/671098dc7b098348.jpg',
  pageName: 'children-dentistry',
  pcText: ['關注口腔健康，從定期檢查開始','立即預約檢查，展開護牙行動'],
  mbText: ['關注口腔健康','從定期檢查開始']
}

const introduceData = {
  title: 'pages.dental-service.children-dentistry.introduce.title',
  content: 'pages.dental-service.children-dentistry.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/482f1dd094438e98.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/25a2d1f9e0936571.jpg',
  tabNavName: 'pages.dental-service.children-dentistry.introduce.tabNavName',
}

const problemData = {
  title: 'pages.dental-service.children-dentistry.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[0].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[1].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[2].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[3].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[3].A'
    },
  ]
}

const services = [
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service01.png',
    name: '兒童洗牙',
    price: '¥150',
  },
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service02.png',
    name: '兒童補牙',
    price: '¥300/顆'
  },
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service03.png',
    name: '牙齒塗氟',
    price: '¥200/全口',
  },
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service04.png',
    name: '乳齒拔除',
    price: '¥300/顆'
  },
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service05.png',
    name: '窩溝封閉',
    price: '¥300/顆',
  },
]

const noteData = {
  title: '兒童定期牙科保健的重要性？',
  lists: [
    {
      name: '及早教育小朋友保護牙齒都好,預防蛀牙及其他口腔疾病'
    },
    {
      name: '緊貼小朋友牙齒發育進度,及早作出針對性治療',
    },
    {
      name: '把握小朋友矯齒黃金期,大大提高改善牙齒排列、面部輪廓、咬字發音等問題的成功率',
    }
  ]
}
</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <div class="tabNav pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院"
          ><span>{{ $t('pages.index.title') }}</span></nuxt-link
        >
        <nuxt-link :to="'/dental-service'" :title="$t('pages.dental-service.title')" :alt="('pages.dental-service.title')"
          ><span>{{ $t('pages.dental-service.title') }}</span></nuxt-link
        >
        <span :title="$t(introduceData.tabNavName)">{{ $t(introduceData.tabNavName) }}</span>
      </div>
    <div class="services">
      <div class="dentistryServices-title problem-title">
        <div class="dentistryServices-title-in bb problem-title-in">
          兒童牙科服務
        </div>
      </div>
      <div class="services-text">
        定期兒童牙科檢查有助於早期發現和治療牙齒問題，預防牙病發展。
      </div>
      <div class="services-lists">
        <div class="services-lists-in" v-for="(item,index) in services" :key="index">
          <div class="image">
            <img :src="item.img" alt="">
          </div>
          <div class="text">
            <h3>{{item.name}}</h3>
            <p>{{item.price}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="youtube">
      <div class="youtube-title">
        <h3>小朋友睇牙<span>唔</span><span>洗</span><span>怕</span></h3>
        <h3>愛康健兒童專屬診症室</h3>
      </div>
      <div class="youtube-in">

      </div>
    </div>
    <div class="note">
      <div class="dentistryServices-title note-title">
        <div class="dentistryServices-title-in bb note-title-in">
          {{noteData.title}}
        </div>
      </div>
      <div class="note-content">
        <div class="note-content-l">
          <img
            src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/xin.webp"
            alt=""
          />
        </div>
        <div class="note-content-r">
          <div
            v-for="(noteItem, noteIndex) in noteData.lists"
            :key="noteIndex"
          >
            <span>·</span>
            <span>{{ $t(noteItem.name) }}</span>
          </div>
        </div>
      </div>
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <NewAddress />
  </div>
  <!-- <div class="YaNav">
    <div class="YaNav-img">
      <img class="YaNav-img-in" src="https://static.cmereye.com/imgs/2024/04/1b6462901bf4df9e.png" alt="">
    </div>
    <div class="YaNav-text">
      <div class="YaNav-text-in">
        超聲波洗牙
        <span>
          ￥88
        </span>
      </div>
    </div>
  </div> -->
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 20px;
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
@keyframes YaNavAnim {
  0%{
    transform: scale(1);
    // padding: 10px 30px;
  }
  10%{
    transform: scale(1.1);
    // padding: 10px 40px;
  }
  20%{
    transform: scale(1);
    // padding: 10px 30px;
  }
  30%{
    transform: scale(1.1);
    // padding: 10px 40px;
  }
  40%{
    transform: scale(1);
    // padding: 10px 30px;
  }
  100%{
    transform: scale(1);
    // padding: 10px 30px;
  }
}
.YaNav{
  position: fixed;
  z-index: 101;
  right: 100px;
  bottom:100px;
  filter: drop-shadow(0 2px 4px rgba(255, 96, 150, .5));
  cursor: pointer;
  transition: all .3s;
  animation: YaNavAnim 7s linear infinite;
  &-img{
    width: 80%;
    position: absolute;
    bottom: 10px;
    margin: 10%;
    &-in{
      width: 100%;
      height: auto;
    }
  }
  &-text{
    background: var(--indexColor1);
    clip-path: polygon(0 0,50% 12%,100% 0,92% 50%,100% 100%,50% 88%,0 100%,8% 50%);
    // animation: YaNavAnim 7s linear infinite;
    transition: all .3s;
    &-in{
      color: #fff;
      font-size: 20px;
      padding: 10px 30px;
      font-family: var(--contextFamily);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .3s;
      // animation: YaNavAnim 7s linear infinite;
      span{
        font-family: var(--contextFamily);
        font-size: 26px;
      }
    }
  }
  &:hover{
    .YaNav-text{
      // clip-path: polygon(0 0,50% 12%,100% 0,92% 50%,100% 100%,50% 88%,0 100%,8% 50%);
      // clip-path: polygon(0 0,100% 0,100% 100%, 0 100%);
      // transform: scale(1.1);
      &-in{
        padding: 10px 40px;
        animation:none;
      }
    }
  }
}
.services{
  margin-top: 100px;
  &-text{
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
    margin-bottom: 75px;
    margin-top: 30px;
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1329px;
    margin: 0 auto;
    &-in{
      width: calc(100% / 3);
      padding: 0 60px;
      display: flex;
      flex-direction: column;
      align-content: center;
      .image{
        width: 319px;
        img{
          width: 100%;
        }
      }
      .text{
        color: var(--textColor);
        margin-top: 11px;
        text-align: center;
        h3{
          font-size: 30px;
          font-weight: 400;
          line-height: 160%; /* 48px */
          letter-spacing: 3px;
        }
        p{
          font-size: 30px;
          font-weight: 900;
          line-height: 160%; /* 48px */
          letter-spacing: 3px;
        }
      }
    }
  }
}
.youtube{
  margin-top: 113px;
  &-title{
    h3{
      font-size: 50px;
      font-weight: 400;
      letter-spacing: 5.5px;
      text-align: center;
      color: var(--indexColor1);
      span{
        color: #fff;
        background: var(--indexColor1);
        display: inline-block;
        border-radius: 50%;
        width: 83px;
        height: 83px;
        line-height: 83px;
        margin: 0 -10px;
      }
    }
  }
  &-in{
    width: 936px;
    height: 526px;
    margin: 50px auto 0;
    background: var(--indexColor2);
    position: relative;
    iframe{
      width: 100%;
      height: 100%;
    }
    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
      width: 224px;
      height: 278px;
      background: url(https://static.cmereye.com/static/ckj/imgs/children-dentistry/icon_1.png)no-repeat;
      background-size: 100% auto;
      animation: youtubeIcon 1s forwards;
    }
  }
}
.note {
  margin-top: 100px;
  &-title {
    &-in {
      font-size: 50px;
      span {
        color: var(--indexColor1);
      }
    }
  }
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1286px;
    margin: 80px auto 0;
    &-l {
      width: calc((482 / 1242) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      margin-left: calc((42 / 1242) * 100%);
      flex: 1;
      & > div {
        display: flex;
        span {
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 193%; /* 38.6px */
          letter-spacing: 3.2px;
          color: var(--textColor);
          &:nth-of-type(1) {
            min-width: 30px;
          }
        }
      }
    }
  }
}
@keyframes youtubeIcon {
  from{
    // transform: translateX(0);
  }
  to{
    transform: translateX(65%);
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  
}
@media only screen and (max-width: 768px) {
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 0;
  }
  .YaNav{
    display: none;
  }
}
</style>