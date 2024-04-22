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

// const headerConfig = {
//   img: 'https://static.cmereye.com/imgs/2023/06/67f203a9b4c651be.png',
//   bg: 'https://static.cmereye.com/imgs/2023/06/4a26475cb4471cee.jpg',
//   mbImg: 'https://static.cmereye.com/imgs/2023/06/671098dc7b098348.jpg',
//   pageName: 'children-dentistry',
//   pcText: ['關注口腔健康，從定期檢查開始','立即預約檢查，展開護牙行動'],
//   mbText: ['關注口腔健康','從定期檢查開始']
// }
const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/03/6fcd8f2992e9550b.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/03/98983f4c7178e454.jpg',
  pageName: 'scaling-and-polishing-test',
  pcText: [],
  mbText: [],
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

const appointment = [
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointment1.png',
    title: ['Whatsapp','預約指定時間'],
    text: ''
  },{
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointment2.png',
    title: ['收到','SMS預約通知'],
    text: ''
  },{
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointment3.png',
    title: ['牙齒檢查'],
    text: '診斷後作合適報價'
  },{
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointment4.png',
    title: ['進行牙科治療'],
    text: '由專科醫生進行治療'
  },{
    img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointment5.png',
    title: ['預約覆診及','完成付款'],
    text: ''
  } 
]

const skillData ={
  lists: [
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service05.png',
      title: '窩溝封閉',
      introduce: '用高分子材料把牙齒的窩溝填平，使牙面變得光滑易清潔，一方面，窩溝封閉後，窩溝內原有的細菌斷絕了營養的來源，逐漸死亡；另一方面外面的致齲細菌不能再進入，從而達到預防窩溝齲的目的。',
      characteristic: '操作簡單、兒童易配合，有效避免齲齒發生。',
      adapt: '3—12歲乳磨牙、第一恒磨牙、第二恒磨牙。'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service03.png',
      title: '塗氟',
      introduce: '塗氟是一種保護孩子牙齒的方法，通常使用氟化物溶液塗抹在孩子的乳牙或恒牙表面，以增強牙齒質地，預防蛀牙和齲齒的形成。',
      characteristic: '簡單操作無需局部麻醉，使用的氟化物溶液濃度低，長期效果穩定，可以持續保護孩子的牙齒長達數月至一年的時間。',
      adapt: '一般為孩子乳牙長出後至恒牙長成之前的時間段，這個時間段通常是從孩子3歲開始到12歲左右。建議孩子每年至少進行一次塗氟治療，以保護他們的牙齒健康。'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service02.png',
      title: '補牙(蛀牙)',
      introduce: '採用人造物質修補牙體缺損的方法，用於修補的物質叫充填材料。凡因齲齒、楔狀缺損、外傷等造成牙體組織缺損者都需要修補，以恢復其外形和功能。',
      characteristic: '預防繼續齲齒；恢復正常咬合，維持牙弓長度。',
      adapt: '乳磨牙齲壞、年輕恒牙齲壞。'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/skill01.png',
      title: '兒童牙齒矯正',
      introduce: '通過矯治器的方式可以改善兒童牙齒反頜、牙齒不齊等情況。',
      characteristic: '恢復牙齒美觀和功能；改善口腔不良習慣；舒適、健康、便捷。',
      adapt: '牙列畸形、反頜、牙齒錯位。'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/children-dentistry/service04.png',
      title: '舒適拔牙',
      introduce: '兒童牙科拔牙是一種治療方法，常用於治療牙齒損傷、感染、畸形或擁擠等问题。\n•使用麻醉技術，對孩子的疼痛感受最小化。\n•將拔牙傷害降到最小，減少感染及出血。\n•手術時間短，恢復快。',
      characteristic: '對孩子的身心健康影響較小，疼痛輕微。傷口癒合迅速，不會影響孩子的飲食和日常生活，並可以解決牙齒問題，保護健康的牙齒和口腔健康。',
      adapt: '一般來說，孩子的乳牙在6-12歲之間掉落，而恒牙則在11-14歲之間生長。如果孩子有牙齒問題，建議及早就診，根據醫生的建議決定是否需要拔牙治療。'
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
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
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
      <img class="services-bg services-bg-1" src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/servicesbg1.png">
      <img class="services-bg services-bg-2" src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/servicesbg2.png">
    </div>
    <div class="youtube">
      <div class="youtube-title">
        <h3>小朋友睇牙<span>唔</span><span>洗</span><span>怕</span></h3>
        <h3>愛康健兒童專屬診症室</h3>
      </div>
      <div class="youtube-in">
        <iframe src="https://www.youtube.com/embed/rnuhXoXJFRc?si=OqhqfaVEBOr_peDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div class="appointment">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          預約5部曲
        </div>
      </div>
      <div class="appointment-lists">
        <div class="appointment-lists-in" v-for="(item,index) in appointment" :key="index">
          <div class="image"><img :src="item.img" alt=""></div>
          <div class="title">
            <h3>
              <span v-for="(titleItem,titleIndex) in item.title" :key="titleIndex">{{titleItem}}</span>
            </h3>
          </div>
          <div class="text">
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="appointment-btn">
        <PageAnimBtnTypeTwo str="立即預約"/>
      </div>
    </div>
    <div class="note">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
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
    <div class="habits">
      <div class="habits-title">
        <h3>從乳牙開始培養好的口腔衛生</h3>
        <h3><span>習</span><span>慣</span>有助於建立良好的牙齒健康基礎</h3>
        <img class="habits-right" src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/La124512.png" alt="">
      </div>
      
    </div>
    <div class="skill">
      <div class="skill-lists">
        <div class="skill-lists-in" v-for="(item,index) in skillData.lists" :key="index">
          <div class="skill-lists-in-box">
          <div class="skill-lists-in-l">
            <img :src="item.img" alt="">
          </div>
          <div class="skill-lists-in-r">
            <div class="title">
              <h3>{{item.title}}</h3>
            </div>
            <div class="context">
              <div><img src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/Layer_1.svg" alt="">技術介紹</div>
              <p>{{item.introduce}}</p>
            </div>
            <div class="context">
              <div><img src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/Layer_2.svg" alt="">技術特點</div>
              <p>{{item.characteristic}}</p>
            </div>
            <div class="context">
              <div><img src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/Layer_3.svg" alt="">適應期</div>
              <p>{{item.adapt}}</p>
            </div>
          </div>
          <div class="skill-lists-in-right">
            <div class="skill-lists-in-right-in"></div>
          </div>
          <div class="skill-lists-in-left">
            <div class="skill-lists-in-left-in"></div>
          </div>
          </div>
        </div>
        <img class="skill-anim skill-anim-1" src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/skill_anim-1.png">
        <img class="skill-anim skill-anim-2" src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/skill_anim-2.png">
        <img class="skill-anim skill-anim-3" src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/skill_anim-3.png">
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
  width: 100%;
  max-width: 1920px;
  margin: 100px auto 0;
  position: relative;
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
  .services-bg{
    position: absolute;
    top: -180px;
    width: 670px;
    height: 573px;
    z-index: -1;
    &-1{
      left: 0;
    }
    &-2{
      right: 0;
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
        &:first-child{
          margin-left: 10px;
        }
      }
    }
  }
  &-in{
    width: 936px;
    height: 526px;
    margin: 50px auto 0;
    // background: var(--indexColor2);
    background: url(https://static.cmereye.com/imgs/2024/04/17c157c4b09a17ef.jpg);
    background-size: 100%;
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
    // &::before[
      // content: '';
      // position: absolute;
    // ]
  }
}
.note {
  margin-top: 100px;
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 893px;
    margin: 80px auto 0;
    position: relative;
    &-l {
      width: calc((462 / 893) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      margin-left: calc((48 / 893) * 100%);
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
            min-width: 20px;
            font-size: 26px;
            line-height: 1.5;
          }
        }
      }
    }
    &::before{
      content: '';
      position: absolute;
      width: 217px;
      height: 213px;
      bottom: -50px;
      left: -150px;
      background: url(https://static.cmereye.com/static/ckj/imgs/children-dentistry/note-1.png);
      background-size: 100% 100%;
      animation: noteAnim 4s linear infinite;
    }
    &::after{
      content: '';
      position: absolute;
      width: 169px;
      height: 174px;
      top: 0;
      right: -140px;
      background: url(https://static.cmereye.com/static/ckj/imgs/children-dentistry/note-2.png);
      background-size: 100% 100%;
      animation: noteAnim 6s linear infinite;
    }
  }
}
@keyframes noteAnim {
  0%{
    transform: translate(0);
  }
  25%{
    transform: translate(-10px,-10px);
  }
  50%{
    transform: translate(10px, -10px);
  }
  75%{
    transform: translate(0, 10px);
  }
  100%{
    transform: translate(0);
  }
}
.appointment{
  width: 100%;
  max-width: 1396px;
  margin: 100px auto 0; 
  padding: 110px 0 110px;
  background: url(https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointmentbg.svg);
  background-size: 100% 100%;
  position: relative;
  &::before{
    content: '';
    width: 264px;
    height: 265px;
    position: absolute;
    top: 0;
    right: 259px;
    background: url(https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointment_icon1.png);
    background-size: 100% 100%;
  }
  &-lists{
    display: flex;
    justify-content: center;
    margin-top: 90px;
    &-in{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 246px;
      .image{
        margin-bottom: 18px;
        max-width: 159px;
        img{
          width: 100%;
        }
      }
      .title{
        h3{
          span{
            display: block;
            text-align: center;
            color: var(--textColor);
            font-size: 30px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
          }
        }
      }
      .text{
        font-size: 20px;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 5px;
      }
    }
  }
  &-btn{
    margin-top: 44px;
    display: flex;
    justify-content: center;
  }
}
.habits{
  margin-top: 200px;
  position: relative;
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
        &:last-child{
          margin-right: 10px;
        }
      }
    }
  }
  &-right{
    position: absolute;
    left: 50%;
    bottom: 80%;
    width: 107px;
    height: 172px;
    transform: translateX(310%);
    transform-origin: left bottom;
    animation: habits 4s linear infinite;
  }
}
@keyframes habits{
  0%{
    transform: translateX(310%);
  }
  33%{
    transform: translateX(310%) rotate(5deg);
  }
  66%{
    transform: translateX(310%) rotate(-5deg);;
  }
  100%{
    transform: translateX(310%);
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
.skill{
  position: relative;
  &-lists{
    margin: 140px auto 0;
    max-width: 1438px;
    width: 100%;
    position: relative;
    &-in{
      padding: 40px;
      border-radius: 100px;
      position: relative;
      border: 3px solid #F8CDCD;
      margin-bottom: 20px;
      &-box{
        border: 4px dotted var(--indexColor1);
        border-radius: 80px;
        display: flex;
        justify-content: center;
        padding: 80px 0;
      }
      &-l{
        width: 325px;
        margin-right: 49px;
        img{
          width: 100%;
        }
      }
      &-r{
        width: 669px;
        .title{
          margin-bottom: 30px;
          h3{
            background: var(--indexColor1);
            color: #fff;
            display: inline-block;
            width: 363px;
            border-radius: 30px;
            text-align: center;
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 56px */
            letter-spacing: 7px;
          }
        }
        .context{
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 48px */
          letter-spacing: 3px;
          display: flex;
          align-items: flex-start;
          margin-top: 7px;
          &>div{
            width: 225px;
            display: flex;
            align-items: center;
            &>img{
              width: 47px;
              margin-right: 11px;
            }
          }
          &:nth-of-type(2){
            color: #00AEFF;
          }
          &:nth-of-type(3){
            color: var(--indexColor1);
          }
          &:nth-of-type(4){
            color: #F90;
          }
          p{
            flex: 1;
          }
        }
      }
      &-left,&-right{
        position: absolute;
        top: 0;
        transform: translateY(-60%);
        &-in{
          width: 26px;
          height: 106px;
          background: var(--indexColor1);
          position: relative;
          z-index: 1;
          border-radius: 5px;
        }
        &::before,&::after{
          content: '';
          position: absolute;
          left: 50%;
          z-index: 0;
          width: 49px;
          height: 49px;
          border-radius: 50%;
          background: #fff;
          box-sizing: border-box;
          border: 3px solid #F8CDCD;
        }
        &::before{
          top: 0;
          transform: translate(-50%,-50%);
        }
        &::after{
          bottom: 0;
          transform: translate(-50%,50%);
        }
        
      }
      &-left{
        left: 184px;
      }
      &-right{
        right: 184px
      }
      &:first-child{
        .skill-lists-in-right,.skill-lists-in-left{
          &::before{
            display: none;
          }
          &-in{
            height: 86px;
          }
        }
      }
      &:nth-of-type(odd){
        background: #FFF1F0;
        border: none;
        .skill-lists-in-right,.skill-lists-in-left{
          &::before{

          }
          &::after{
            border: none;
          }
        }
      }
      &:nth-of-type(even){
         .skill-lists-in-right,.skill-lists-in-left{
          &::before{
            border: none;
          }
         }
      }
    }
  }
  &-anim{
    position: absolute;
    &-1{
      width: 264px;
      height: 325px;
      top: 33%;
      left: -90px;
      animation: noteAnim 6.5s linear infinite;
    }
    &-2{
      width: 197px;
      height: 247px;
      top: 40%;
      right: -100px;
      animation: noteAnim 4s linear infinite;
    }
    &-3{
      width: 264px;
      height: 325px;
      right: -70px;
      bottom: -50px;
      animation: noteAnim 5s linear infinite;
    }
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
  .services{
    margin-top: 30px;
    &-text{
      letter-spacing: 1.6px;
      font-size: 16px;
      padding: 0 50px;
      margin-bottom: 45px;
    }
    &-lists{
      padding: 0 15px;
      &-in{
        padding: 0 15px;
        width: calc(100% / 2);
        margin-bottom: 23px;
        .image{
          width: 100%;

        }
        .text{
          h3{
            font-size: 16px;
            line-height: 1.4;
          }
          p{
            font-size: 20px;
            line-height: 1.4;
          }
        }
      }
    }
    .services-bg{
      width: 130px;
      height: 100px;
      top: -20px;
    }
  }
  .youtube{
    padding: 0 30px;
    margin-top: 63px;
    &-title{
      h3{
        font-size: 18px;
        letter-spacing: 1.98px;
        span{
          width: 28px;
          height: 28px;
          line-height: 28px;
          margin: 0 -3px;
          letter-spacing: 0;
          &:first-child{
            margin-left: 2px;
          }
        }
      }
    }
    &-in{
      width: 100%;
      height: calc(526 / 936 * 330px);
      margin: 26px auto 0;
      &::after{
        animation: none;  
        width: 82px;
        height: 100px;
        bottom: -15px;
        right: -25px;
        z-index: 1;
      }
    }
  }
  .note {
    margin-top: 60px;
    &-content{
      padding: 0 30px;
      margin: 45px auto 0;
      display: flex;
      flex-direction: column;
      &-l {
        width: 100%;
      }
      &-r{
        width: 100%;
        margin-top: 45px;
        padding-right: 10px;
        &>div{
          span{
            font-size: 15px;
            letter-spacing: 2.4px;
            &:nth-of-type(1) {
              font-size: 20px;
              min-width: 15px;
              line-height: 1.4;
            }
          }
        }
      }
      &::before{
        left: 10px;
        top: 50%;
        width: 70px;
        height: 77px;
        animation: none;
      }
      &::after{
        right: 10px;
        top: 50%;
        width: 60px;
        height: 66px;
        animation: none;
      }
    }
  }
  .habits{
    margin-top: 60px;
    &-title{
      h3{
        font-size: 18px;
        letter-spacing: 1.98px;
        span{
          width: 28px;
          height: 28px;
          line-height: 28px;
          letter-spacing: 0;
          margin: 0 -3px;
          &:last-child{
            margin-right: 2px;
          }
        }
      }
    }
    &-right{
      transform: none;
      left: auto;
      right: 40px;
      width: 32px;
      height: auto;
    }
  }
  @keyframes habits{
    0%{
      transform: translateX(0);
    }
    33%{
      transform: rotate(5deg);
    }
    66%{
      transform: rotate(-5deg);;
    }
    100%{
      transform: translateX(0);
    }
  }
  .skill{
    &-lists{
      margin-top: 82px;
      padding: 0 30px;
      &-in{
        padding: 10px;
        border-radius: 17px;
        &-box{
          border-radius: 15px;
          border: 1px dotted var(--indexColor1);
          padding: 14px 12px;
        }
        &-l{
          width: calc(68 / 320 * 100%);
          margin-right: 14px;
        }
        &-r{
          flex: 1;
          
          .title{
            margin-bottom: 8px;
            h3{
              font-size: 15px;
              letter-spacing: 3px;
              width: 133px;
            }
          }
          .context{
            font-size: 12px;
            &>div{
              font-size: 14px;
            }
          }
        }
      }
    }
    &-anim{
      left: 0;
      right: 0;
      animation: none;
    }
  }
}
</style>