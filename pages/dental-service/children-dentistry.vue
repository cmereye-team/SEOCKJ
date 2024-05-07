<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { useWindowScroll } from '@vueuse/core'
import { whatsAppNum } from '~/assets/js/common'
const { y } = useWindowScroll()
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
  img: 'https://static.cmereye.com/imgs/2024/05/362da8c4bba078b5.png',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/03307ff2f4b2c9dc.webp',
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
    price: '¥500/顆'
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
    title: ['WhatsApp','預約指定時間'],
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
      adapt: '一般來說，孩子的乳牙在6-12歲之間掉落，而恒牙則在6-14歲之間生長。如果孩子有牙齒問題，建議及早就診，根據醫生的建議決定是否需要拔牙治療。'
    }
  ]
}


let shownav = ref(true)
let shownav_2 = ref(true)
const debounce = <T extends (...args: any[]) => any>(func: T, wait: number) =>{
  let timerId: NodeJS.Timeout | null = null;
  return function(this: ThisParameterType<T>, ...args: Parameters<T>){
    if(timerId) clearTimeout(timerId)
    timerId = setTimeout(()=>{
      func.apply(this,args)
    },wait)
  }
}
watch(
  y, ()=>{
    shownav.value = false
  }
)
watch(
  y, debounce(function(newY: any, oldY: any) {
      // 进行其他操作...
      shownav.value = true
  }, 1000)
)
</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" btnText="預約免費牙齒檢查" />
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
  <div class="YaNavBox shownav" v-if="shownav_2">
    <img class="close" src="@/assets/images/icon_7.svg" alt="" @click.stop="shownav_2 = !shownav_2">
    <nuxt-link :to="`/dental-service/scaling-and-polishing`" class="YaNav">
    
    <div class="YaNav-img">
      <img class="YaNav-img-in" srcset="https://static.cmereye.com/static/ckj/imgs/children-dentistry/yanavimgmb.png 768w, https://static.cmereye.com/static/ckj/imgs/children-dentistry/yanavimgpc.png" src="https://static.cmereye.com/static/ckj/imgs/children-dentistry/yanavimgpc.png" alt="">
    </div>
    <div class="YaNav-text">
      <div class="YaNav-text-in">
        成人洗牙
        <span>
          <i>￥</i>88
        </span>
      </div>
    </div>
    
  </nuxt-link>
  </div>
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
  }
  10%{
    transform: scale(1.05);
  }
  20%{
    transform: scale(1);
  }
  30%{
    transform: scale(1.05);
  }
  40%{
    transform: scale(1);
  }
  100%{
    transform: scale(1);
  }
}
@keyframes YaNavAnim_icon {
  0%{
    opacity: 0;
    transform: translate(30%,100%);
  }
  70%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translate(0);
  }
}
.YaNavBox{
  position: fixed;
  z-index: 101;
  right: 200px;
  bottom:100px;
  transition: all .3s;
  .close{
    position: absolute;
    bottom: 390%;
    left: -5px;
    width: 30px;
    height: 30px;
    z-index: 102;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      transform: rotate(90deg);
    }
  }
}
.YaNav{
  filter: drop-shadow(0 2px 4px rgba(255, 96, 150, .5));
  cursor: pointer;
  transition: all .3s;
  animation: YaNavAnim 7s linear infinite;
  display: block;
  &-img{
    width: 80%;
    position: absolute;
    bottom: 10px;
    margin: 10%;
    &-in{
      width: 100%;
      height: auto;
    }
    &::before{
      content: '';
      position: absolute;
      width: 35.16px;
      height: 28.57px;
      background: url(@/assets/images/icon_45.svg) no-repeat;
      background-size: 100% 100%;
      right: 82%;
      top: -8px;
      animation: YaNavAnim_icon 2s 1s linear infinite;
    }
    &::after{
      content: '';
      position: absolute;
      width: 16px;
      height: 13px;
      background: url(@/assets/images/icon_45.svg) no-repeat;
      background-size: 100% 100%;
      right: 65%;
      top: -15px;
      animation: YaNavAnim_icon 2s linear infinite;
    }
  }
  &-text{
    
    filter: drop-shadow(1px 1px 0 #fff)
            drop-shadow(-1px 1px 0 #fff)
            drop-shadow(1px -1px 0 #fff)
            drop-shadow(-1px -1px 0 #fff);
    transition: all .3s;
    &-in{
      background: var(--indexColor1);
      clip-path: polygon(0 0,50% 12%,100% 0,92% 50%,100% 100%,50% 88%,0 100%,8% 50%);
      color: #fff;
      font-size: 26px;
      line-height: 1.6;
      font-weight: 900;
      padding: 10px 30px;
      font-family: var(--contextFamily);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .3s;
      span{
        font-family: var(--contextFamily);
        font-size: 35px;
        line-height: 1;
        i{
          font-size: 26px;
          line-height: 1.6;
          font-style: normal;
        }
      }
    }
  }
  &:hover{
    margin-right: -10px;
    .YaNav-text{
      &-in{
        padding: 10px 40px;
        animation: none;
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
    font-family: var(--contextFamily);
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
          font-size: 26px;
          font-weight: 400;
          line-height: 160%; /* 48px */
          letter-spacing: 3px;
        }
        p{
          font-size: 24px;
          font-weight: 600;
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
      font-size: 35px;
      font-weight: 400;
      letter-spacing: 5.5px;
      text-align: center;
      color: var(--indexColor1);
      span{
        color: #fff;
        background: var(--indexColor1);
        display: inline-block;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        line-height: 55px;
        margin: 0 -6px;
        &:first-child{
          margin-left: 5px;
        }
      }
    }
  }
  &-in{
    width: 936px;
    height: 526px;
    margin: 50px auto 0;
    background: url(https://static.cmereye.com/imgs/2024/04/17c157c4b09a17ef.jpg) no-repeat;
    background-size: 100% auto;
    background-position: center center;
    position: relative;
    iframe{
      width: 100%;
      height: 100%;
    }
    &::before{
      content: '';
      position: absolute;
      width: 32px;
      height: 26px;
      background: url(@/assets/images/icon_45.svg) no-repeat;
      background-size: 100% 100%;
      right: -103px;
      bottom: 50%;
      transform: rotate(45deg);
      animation: youtubeAnim 3s linear infinite;
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
@keyframes youtubeAnim{
  0%{
    opacity: 0;
    transform: rotate(45deg) translate(30%,100%);
  }
  70%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: rotate(45deg);
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
  background: url(https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointmentbg.png);
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
        margin-bottom: 10px;
        max-width: 159px;
        min-height: 159px;
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
            font-size: 26px;
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
        p{
          font-family: var(--contextFamily);
        }
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
      font-size: 35px;
      font-weight: 400;
      letter-spacing: 5.5px;
      text-align: center;
      color: var(--indexColor1);
      span{
        color: #fff;
        background: var(--indexColor1);
        display: inline-block;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        line-height: 55px;
        margin: 0 -6px;
        &:last-child{
          margin-right: 5px;
        }
      }
    }
  }
  &-right{
    position: absolute;
    left: 50%;
    bottom: 76%;
    width: 107px;
    height: 172px;
    transform: translateX(225%);
    transform-origin: left bottom;
    animation: habits 4s linear infinite;
  }
}
@keyframes habits{
  0%{
    transform: translateX(225%);
  }
  33%{
    transform: translateX(225%) rotate(5deg);
  }
  66%{
    transform: translateX(225%) rotate(-5deg);
  }
  100%{
    transform: translateX(225%);
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
    max-width: 1280px;
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
        width: 200px;
        margin-right: 49px;
        img{
          width: 100%;
        }
      }
      &-r{
        width: 600px;
        .title{
          margin-bottom: 30px;
          h3{
            background: var(--indexColor1);
            color: #fff;
            display: inline-block;
            width: 300px;
            border-radius: 30px;
            text-align: center;
            font-size: 28px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 56px */
            letter-spacing: 7px;
          }
        }
        .context{
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 48px */
          letter-spacing: 3px;
          display: flex;
          align-items: flex-start;
          margin-top: 10px;
          &>div{
            width: 180px;
            display: flex;
            align-items: center;
            &>img{
              width: 28px;
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
  .YaNavBox{
    right: 10.4167vw;
    bottom:5.2083vw;
    .close{
      left: -0.2604vw;
      width: 1.5625vw;
      height: 1.5625vw;
    }
  }
  .YaNav{
    &-img{
      bottom: .5208vw;
      &::before{
        width: 1.8312vw;
        height: 1.488vw;
        top: -0.4167vw;
      }
      &::after{
        width: .8333vw;
        height: .6771vw;
        top: -0.7813vw;
      }
    }
    &-text{
      &-in{
        font-size: 1.3542vw;
        padding: .5208vw 1.5625vw;
        span{
          font-size: 1.8229vw;
          i{
            font-size: 1.3542vw;
          }
        }
      }
    }
    &:hover{
      margin-right: -0.5208vw;
      .YaNav-text{
        &-in{
          padding: .5208vw 2.0833vw;
        }
      }
    }
  }
  .services{
    max-width: 100vw;
    margin: 5.2083vw auto 0;
    &-text{
      font-size: 1.0417vw;
      letter-spacing: .2083vw;
      margin-bottom: 3.9063vw;
      margin-top: 1.5625vw;
    }
    &-lists{
      max-width: 69.2188vw;
      &-in{
        padding: 0 3.125vw;
        .image{
          width: 16.6146vw;
        }
        .text{
          margin-top: .5729vw;
          h3{
            font-size: 1.3542vw;
            letter-spacing: .1563vw;
          }
          p{
            font-size: 1.25vw;
            letter-spacing: .1563vw;
          }
        }
      }
    }
    .services-bg{
      top: -9.375vw;
      width: 34.8958vw;
      height: 29.8438vw;
    }
  }
  .youtube{
    margin-top: 5.8854vw;
    &-title{
      h3{
        font-size: 1.8229vw;
        letter-spacing: .2865vw;
        span{
          width: 2.8646vw;
          height: 2.8646vw;
          line-height: 2.8646vw;
          margin: 0 -0.3125vw;
          &:first-child{
            margin-left: .2604vw;
          }
        }
      }
    }
    &-in{
      width: 48.75vw;
      height: 27.3958vw;
      margin: 2.6042vw auto 0;
      &::before{
        width: 1.6667vw;
        height: 1.3542vw;
        right: -5.3646vw;
      }
      &::after{
        width: 11.6667vw;
        height: 14.4792vw;
      }
    }
  }
  .note {
    margin-top: 5.2083vw;
    &-content {
      max-width: 46.5104vw;
      margin: 4.1667vw auto 0;
      &-r {
        & > div {
          span {
            font-size: 1.0417vw;
            letter-spacing: .1667vw;
            &:nth-of-type(1) {
              min-width: 1.0417vw;
              font-size: 1.3542vw;
            }
          }
        }
      }
      &::before{
        width: 11.3021vw;
        height: 11.0938vw;
        bottom: -2.6042vw;
        left: -7.8125vw;
      }
      &::after{
        width: 8.8021vw;
        height: 9.0625vw;
        right: -7.2917vw;
      }
    }
  }
  .appointment{
    max-width: 72.7083vw;
    margin: 5.2083vw auto 0; 
    padding: 5.7292vw 0 5.7292vw;
    &::before{
      width: 13.75vw;
      height: 13.8021vw;
      right: 13.4896vw;
    }
    &-lists{
      margin-top: 4.6875vw;
      &-in{
        width: 12.8125vw;
        .image{
          margin-bottom: .5208vw;
          max-width: 8.2813vw;
          min-height: 8.2813vw;
        }
        .title{
          h3{
            span{
              font-size: 1.3542vw;
            }
          }
        }
        .text{
          font-size: .9375vw;
          letter-spacing: .2604vw;
        }
      }
    }
    &-btn{
      margin-top: 2.2917vw;
    }
  }
  .habits{
    margin-top: 10.4167vw;
    &-title{
      h3{
        font-size: 1.8229vw;
        letter-spacing: .2865vw;
        span{
          width: 2.8646vw;
          height: 2.8646vw;
          line-height: 2.8646vw;
          margin: 0 -0.3125vw;
          &:last-child{
            margin-right: .2604vw;
          }
        }
      }
    }
    &-right{
      width: 5.5729vw;
      height: 8.9583vw;
    }
  }
  .skill{
    &-lists{
      margin: 7.2917vw auto 0;
      max-width: 66.6667vw;
      &-in{
        padding: 2.0833vw;
        border-radius: 5.2083vw;
        border: .1563vw solid #F8CDCD;
        margin-bottom: 1.0417vw;
        &-box{
          border: .2083vw dotted var(--indexColor1);
          border-radius: 4.1667vw;
          padding: 4.1667vw 0;
        }
        &-l{
          width: 10.4167vw;
          margin-right: 2.5521vw;
        }
        &-r{
          width: 31.25vw;
          .title{
            margin-bottom: 1.5625vw;
            h3{
              width: 15.625vw;
              border-radius: 1.5625vw;
              font-size: 1.4583vw;
              letter-spacing: .3646vw;
            }
          }
          .context{
            font-size: .9375vw;
            letter-spacing: .1563vw;
            margin-top: .3646vw;
            &>div{
              width: 9.375vw;
              &>img{
                width: 1.4583vw;
                margin-right: .5729vw;
              }
            }
          }
        }
        &-left,&-right{
          &-in{
            width: 1.3542vw;
            height: 5.5208vw;
            border-radius: .2604vw;
          }
          &::before,&::after{
            width: 2.5521vw;
            height: 2.5521vw;
            border: .1563vw solid #F8CDCD;
          }
        }
        &-left{
          left: 9.5833vw;
        }
        &-right{
          right: 9.5833vw;
        }
        &:first-child{
          .skill-lists-in-right,.skill-lists-in-left{
            &-in{
              height: 4.4792vw;
            }
          }
        }
      }
    }
    &-anim{
      &-1{
        width: 13.75vw;
        height: 16.9271vw;
        left: -4.6875vw;
      }
      &-2{
        width: 10.2604vw;
        height: 12.8646vw;
        right: -5.2083vw;
      }
      &-3{
        width: 13.75vw;
        height: 16.9271vw;
        right: -3.6458vw;
        bottom: -2.6042vw;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 0;
  }
  .YaNavBox{
    right: 20px;
    bottom: 30%;
    // right: -20px;
    .close{
      bottom: 160%;
      //left: auto;
      left: calc(50% - 10px);
      //right: 0;
      width: 20px;
      height: 20px;
    }
    &.shownav{
      // right: 7px;
    }
  }
  .YaNav{
    animation: YaNavAnim 6s 1s linear infinite;
    &-img{
      width: 120%;
      bottom: 88%;
      margin: 0 -10%;
      &::before{
        width: 15px;
        height: calc(28.57 / 35.16 * 15px);
        top: 0;
      }
      &::after{
        width: 7px;
        height: calc(28.57 / 35.16 * 7px);
        top: -5px;
        right: 70%;
      }
    }
    &-text{
      
      &-in{
        clip-path: polygon(0 0,50% 8%,100% 0,85% 50%,100% 100%,50% 92%,0 100%,15% 50%);
        padding: 20px 0px;
        width: 60px;
        writing-mode: vertical-lr;
        -webkit-writing-mode: vertical-lr;
        font-family: var(--contextFamily);
        font-weight: 700;
        text-align: center;
        font-size: 18px;
        span{
          writing-mode: initial;
          line-height: 1.2;
          font-size: 24px;
          i{
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
    &:hover{
      margin-right: 0;
      .YaNav-text{
        &-in{
          padding: 20px 10px;
        }
      }
    }
  }
  .services{
    margin-top: 30px;
    max-width: 390px;
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
      max-width: 390px;
      height: calc(526 / 936 * 330px);
      margin: 26px auto 0;
      &::before{
        width: 20px;
        height: calc(26 / 32 * 20px);
        right: -17px;
        bottom: 45%;
      }
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
    max-width: 390px;
    margin: 60px auto 0;
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
        width: 75px;
        height: 70px;
        // animation: none;
      }
      &::after{
        right: 10px;
        top: 50%;
        width: 60px;
        height: 66px;
        // animation: none;
      }
    }
  }
  .appointment{
    margin: 70px auto 0; 
    padding: 80px 0 60px;
    background: url(https://static.cmereye.com/static/ckj/imgs/children-dentistry/appointmentbg11.png) no-repeat;
    background-size: auto 100%;
    background-position: center center;
    &::before{
      width: 110px;
      height: 112px;
      right: 34px;
      top: 120px;
    }
    &-lists{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 50px;
      margin: 70px auto 0;
      width: 100%;
      max-width: 390px;
      &-in{
        width: 100%;
        align-items: flex-start;
        margin-top: -45px;
        position: relative;
        .image{
          width: 110px;
          min-height: 0;
        }
        .title{
          width: 120px;
          h3{
            span{
              font-size: 18px;
            }
          }
        }
        .text{
          width: 120px;
          font-size: 12px;
          letter-spacing: 1.2px;
          text-align: center;
        }
        &::after{
          content: '';
          width: 34px;
          height: 20px;
          background: url(@/assets/images/icon_46.svg) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left: 120px;
          bottom: 35px;
        }
        &:last-child{
          &::after{
            display: none;
          }
        }
        &:nth-of-type(even){
          align-items: flex-end;
          &::after{
            left: auto;
            right: 130px;
            bottom: 25px;
            transform: rotateY(180deg);
          }
        }
      }
    }
  }
  .habits{
    max-width: 390px;
    margin: 60px auto 0;
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
      margin-top: 80px;
      padding: 0 30px;
      &-in{
        padding: 10px;
        border-radius: 17px;
        margin-bottom: 10px;
        border: 1px solid #F8CDCD;
        &-box{
          border-radius: 15px;
          border: 1px dotted var(--indexColor1);
          padding: 14px 12px;
          box-sizing: border-box;
        }
        &-l{
          width: calc(68 / 320 * 100%);
          min-width: calc(68 / 320 * 100%);
          margin-right: 14px;
        }
        &-r{
          flex: 1;
          width: auto;
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
            flex-direction: column;
            margin-top: 3px;
            &>div{
              font-size: 14px;
              height: 25px;
              width: auto;
              &>img{
                width: 16px;
                height: 16px;
                margin-right: 5px;
              }
            }
            
          }
        }
        &-left,&-right{
          transform: translateY(-65%);
          &-in{
            width: 6px;
            height: 35px;
            border-radius: 2px;
            
          }
          &::before,&::after{
            width: 14px;    
            height: 14px;
            border: 1px solid #F8CDCD;
          }
        }
        &-left{
          left: 44px;
        }
        &-right{
          right: 44px
        }
        &:first-child{
          .skill-lists-in-right,.skill-lists-in-left{
            &-in{
              height: 25px;
            }
          }
        }
      }
    }
    &-anim{
      &-1{
        width: 60px;
        height: auto;
        top: 29%;
        left: 20px;
      }
      &-2{
        width: 50px;
        height: auto;
        top: 65%;
        right: 20px;
      }
      &-3{
        width: 70px;
        height: auto;
        left: 10px;
        right: auto;
        bottom: -30px;
      }
    }
  }
  @keyframes noteAnim {
    0%{
      transform: translate(0);
    }
    25%{
      transform: translate(-5px,-5px);
    }
    50%{
      transform: translate(5px, -5px);
    }
    75%{
      transform: translate(0, 5px);
    }
    100%{
      transform: translate(0);
    }
  }
}
</style>
