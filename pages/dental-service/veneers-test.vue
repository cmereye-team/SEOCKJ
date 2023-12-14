<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('veneers')
useHead({
  title: "瓷貼片｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供瓷貼片服務，透過度身訂製的纖薄瓷貼片黏附於牙齒表層，可以改善牙齒的形狀、長度、外觀和顏色，達到美白和整齊的效果。瓷貼片質地自然，可以有效地美化牙齒外觀，讓您擁有更自信的笑容。主要用於美容修復，可以選擇使用瓷貼片修復形狀或牙色不均的牙齒，達到理想的效果和色澤。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '瓷貼片 瓷貼片價格 瓷貼片推薦 全瓷牙貼價錢 牙貼片 牙瓷貼片 牙貼面 瓷牙貼片 牙貼美白 美白牙齒 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/12/14c37ecd95aeb6f7.webp',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2023/12/0fb5fc6132c5e487.webp',
  pageName: 'veneers-test',
  pcText: ['自訂零死角潔白微笑線','展現自信微笑'],
  mbText: ['自訂零死角潔白微笑線','展現自信微笑']
}

const orthodonticsIntroduceData = {
  // title: '美容牙科',
  title: '全瓷貼片',
  content: '瓷貼片有助改善牙齒的形狀、長度、外觀及顏色，達到牙齒整齊和美白的效果。把度身訂製的纖薄瓷貼片黏附於牙齒表層，效果自然，改善外觀。',
  mbImg: 'https://static.cmereye.com/imgs/2023/12/00e7b5b8b50ed5ad.webp',
  pcImg: 'https://static.cmereye.com/imgs/2023/12/6a199d845146908a.webp',
  tabNavName: '全瓷貼片',
  pageName: 'veneers-test',
}

// const stepData = {
//   title: '瓷貼片治療過程',
//   stepLists: [
//     [
//       {
//         title: 'Step 1',
//         text: '醫生檢查牙齒及牙周健康，如存在口腔問題，必須先洗牙或接受牙周病治療後才能使用瓷貼片'
//       },
//       {
//         title: 'Step 2',
//         text: '確定進行療程'
//       },
//       {
//         title: 'Step 3',
//         text: '輕輕磨走牙齒表面的琺瑯質及把牙齒稍稍磨短'
//       },
//       {
//         title: 'Step 4',
//         text: '印製牙模及拍攝X光片'
//       }
//     ],
//     [
//       {
//         title: 'Step 5',
//         text: '設計及訂製瓷貼片，確保適合進行瓷牙貼片療程'
//       },
//       {
//         title: 'Step 6',
//         text: ' 把貼片粘到牙齒上'
//       },
//       {
//         title: 'Step 7',
//         text: '檢查貼片粘合程度及顏色'
//       },
//       {
//         title: 'Step 8',
//         text: '覆診，檢查牙齦狀況與貼片位置'
//       }
//     ]
//   ]
// }

const noteData = {
  title: '適合使用瓷貼片的人士',
  lists: [
    {
      name: '牙齒縫隙過大',
    },
    {
      name: '牙齒排列不整齊',
    },
    {
      name: '牙齒出現磨損、破碎或斷裂',
    },
    {
      name: '完成牙齒矯正後，牙齒仍有瑕疵',
    },
    {
      name: '牙齒變色，漂牙無法讓牙齒回復潔白',
    },
    {
      name: '牙齒形狀不美觀（如：牙齒過小、牙齒表面有凹坑或凸起）',
    }
  ]
}

const noticeData = {
  title: '選擇瓷貼片療程前你要知',
  meritLists: [
    '優點',
    '短時間內讓牙齒回復整齊美觀，效果自然',
    '需磨掉的牙齒面積較小，便能改善牙齒形狀、長度、弧度、顏色等',
    '貼片物料能減低食物色素沉積的問題',
    '不影響正常的咬合及咀嚼能力，容易適應'
  ],
  shortcomingLists: [
    '缺點',
    '有碎裂或脫落的危機',
    '如沒有緊密粘合到牙齒表面，容易導致蛀牙、牙齦發炎及牙周病等',
    '色澤及形狀不一定很自然'
  ]
}

const problemData = {
  title: 'pages.dental-service.veneers.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.veneers.problem.lists[0].Q',
      A: 'pages.dental-service.veneers.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.veneers.problem.lists[1].Q',
      A: 'pages.dental-service.veneers.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.veneers.problem.lists[2].Q',
      A: 'pages.dental-service.veneers.problem.lists[2].A'
    },
  ]
}

let noticeCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

let veneerSwiperRef ={
  slideToLoop: (a)=>{}
}
const setVeneerSwiperRef = (swiper:any) => {
  veneerSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  // console.log(_value)
  veneerSwiperRef.slideToLoop(_value-1)
}

const bpData ={
  title: '什麼情況下會考慮做全瓷貼片？',
  lists: [
    {
      title: '齒色不均',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/9b4db5661d8f9992.jpg'
    },
    {
      title: '牙齒染色',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/97be3e34fc593112.jpg'
    },
    {
      title: '長短不齊',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/df7104194d15fe77.jpg'
    },
    {
      title: '大小不一',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/fdd4e6d4bd343b8d.jpg'
    },
    {
      title: '缺角斷裂',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/9c6933385f454501.jpg'
    },
    {
      title: '四環素牙',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/7ac148fb970bd0a9.jpg'
    }
  ]
}
const stepData = {
  title: '全瓷貼片4步曲',
  lists: [
    {
      title: '第1步',
      img: 'https://static.cmereye.com/imgs/2023/12/9e887bb9f6594934.webp',
      name: '術前諮詢',
      context: '初步了解口腔狀況，蒐集牙齒資訊，採討客人期望的牙齒型態，並針對微笑曲線進行客製化設計。',
    },
    {
      title: '第2步',
      img: 'https://static.cmereye.com/imgs/2023/12/62871ce11751ca50.webp',
      name: '磨牙印模',
      context: '在保留最多齒質的情況下，適當磨去牙面，以便裝上貼片。',
    },
    {
      title: '第3步',
      img: 'https://static.cmereye.com/imgs/2023/12/d544b7219939438c.webp',
      name: '裝配貼片',
      context: '貼片製作完成後，在客人牙齒上試裝，並確認貼片與牙齒的適合度，例如形狀及顏色是否符合預期，最後將瓷貼片固定在牙面上。',
    },
    {
      title: '第4步',
      img: 'https://static.cmereye.com/imgs/2023/12/bcc90e254b9b9f5c.webp',
      name: '定期追蹤',
      context: '每種矯正器的裝配方式有所不同，客人需要根據專科主任的建議來進行裝配和保養，以達到理想效果',
    }
  ],
}
const toWhatsApp = () => {
  location.href = 'https://api.whatsapp.com/send/?phone=85269338128'
}

const differData = {
  title: '全瓷貼片與樹脂貼片的分別',
  listDatas: [
    {
      name: '',
      firstText: '全瓷貼片',
      secondText: '樹脂貼片'
    },
    {
      name: '材質',
      firstText: '全陶瓷',
      secondText: '樹脂'
    },
    {
      name: '原理',
      firstText: '磨去牙齒表面0.3至0.5mm厚度，並貼附於牙齒外側面',
      secondText: '牙齒未經打磨，直接貼附於牙齒外側面'
    },
    {
      name: '療程時長',
      firstText: '最快即日完成',
      secondText: '即日內完成'
    },
    {
      name: '壽命',
      firstText: '長達15至20年或以上',
      secondText: '只能維持半年至1年'
    },
    {
      name: '優點',
      isArrayType: true,
      firstText: "• 修磨量少，保存最多牙質\n• 術後適應快\n• 低敏感度",
      secondText: "• 價格相對較便宜\n• 製作過程簡單快捷"
    }
  ]
}

const careData = {
  title: ['全瓷貼片保養方式'],
  lists: [
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1047.2lum1bomw7y0.jpg',
      text: '注意口腔衛生',
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1048.5rfiys1h84k0.jpg',
      text: '忌吃過硬食物',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/12/661abd1dab682391.jpg',
      text: '定期覆診檢查',
    },
  ],
}
const advantageData = {
  title: '全瓷貼片三大優勢',
  lists: [
    {
      name: '1.輕薄零負擔',
      text: '僅貼附於牙齒表面，厚度為0.3至0.5mm，對咬合的影響微乎其微。'
    },
    {
      name: '2.自然美白效果',
      text: '質地和色澤與自然牙齒相近，耐用且不易變色。'
    },
    {
      name: '3.輕薄零負擔',
      text: '直接改變牙齒形狀，適合輕微齒列不整人士。'
    },
  ]
}
</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 注意事项 -->
    <!-- <ServiceNote :noteData="noteData" /> -->
    <div class="bp">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          <span>{{bpData.title}}</span>
        </div>
      </div>
      <div class="bp-lists">
        <div class="bp-lists-in" v-for="(bpItem,bpIndex) in bpData.lists" :key="bpIndex">
          <div class="bp-lists-in-title">{{bpItem.title}}</div>
          <img :src="bpItem.imgUrl" alt="" />
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-in">
        <div class="dentistryServices-title step-title">
          <div class="dentistryServices-title-in bb step-title-in">
            {{ stepData.title }}
          </div>
        </div>
        <div class="step-lists">
          <div
            v-for="(stepItem, stepIndex) in stepData.lists"
            :key="stepIndex"
            class="step-lists-in"
          >
            <div class="step-lists-in-l">
              <div class="title">
                <img src="@/assets/images/icon_13.png" alt="" />
                {{ stepItem.title }}
              </div>
              <div class="image"><img :src="stepItem.img" alt="" /></div>
              <div class="name">{{ stepItem.name }}</div>
              <div class="context">{{ stepItem.context }}</div>
            </div>
            <div class="step-lists-in-r">
              <img src="@/assets/images/icon_12.png" alt="" />
            </div>
          </div>
          <div class="step-lists-in">
            <div class="lastBox-t">
              <div><img src="@/assets/images/icon_13.png" alt="" /></div>
              <div>別讓牙齒問題，阻礙<span>笑容綻放!!</span></div>
              <div><img src="@/assets/images/icon_13.png" alt="" /></div>
            </div>
            <div class="lastBox-b">
              <span @click="toWhatsApp">獲取免費諮詢</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="advantage-title dentistryServices-title">
        <div class="advantage-title-in dentistryServices-title-in bb">{{advantageData.title}}</div>
      </div>
      <div class="advantage-in">
        <div class="advantage-in-l"><img src="https://static.cmereye.com/imgs/2023/12/9827ef860bdc595c.webp" :alt="advantageData.title"></div>
        <div class="advantage-in-r">
          <div v-for="(advantageItem,advantageIndex) in advantageData.lists" :key="advantageIndex">
            <div class="name">{{advantageItem.name}}</div>
            <div class="text">{{advantageItem.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="differ">
      <div class="differ-title dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{differData.title}}</div>
      </div>
      <div class="differ-lists">
        <div class="differ-lists-in" v-for="(listDatasItem,listDatasIndex) in differData.listDatas" :key="listDatasIndex">
          <div>{{listDatasItem.name}}</div>
          <div>{{listDatasItem.firstText}}</div>
          <div>{{listDatasItem.secondText}}</div>
        </div>
      </div>
      <div class="differ-btn">
          <div ref="detailBtn" class="btn">
            <span @click="toWhatsApp">獲取免費諮詢</span>
            <span @click="toWhatsApp">獲取免費諮詢</span>
          </div>
        </div>
    </div>
    <!-- 步骤 -->
    <!-- <ServiceStep :stepData="stepData" /> -->
    <!-- <div class="notice">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{noticeData.title}}</div>
      </div>
      <div class="notice-in">
        <swiper :slidesPerView="windowWidth>768 ? '2': '1'" class="swiper-wrapper" @slideChange="onSlideChange" @swiper="setVeneerSwiperRef">
            <swiper-slide class="swiper-slide">
              <div class="box box-left">
                <div class="box-in" v-for="(meritItem,meritIndex) in noticeData.meritLists" :key="meritIndex" >
                  <div>{{meritItem}}</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box box-right">
                <div class="box-in" v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists" :key="shortcomingIndex" >
                  <div>{{shortcomingItem}}</div>
                </div>
              </div>
            </swiper-slide>
        </swiper>
      </div>
      <div class="notice-line mbBox">
        <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="noticeCurrent"  @changeLineCur="handleLineCur"></PageSwiperPointLine>
      </div>
    </div> -->
    <div class="care">
      <div class="dentistryServices-title care-title">
        <div class="dentistryServices-title-in bb care-title-in">
          <span>{{ careData.title[0] }}</span>
          <span>{{ careData.title[1] }}</span>
        </div>
      </div>
      <div class="care-lists">
        <div
          v-for="(careItem, careIndex) in careData.lists"
          :key="careIndex"
          class="care-lists-item"
        >
          <div>
            <div class="image">
              <div class="image-in">
                <img :src="careItem.img" :alt="careItem.text" />
              </div>
            </div>
            <div class="text">{{ careItem.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 问题 -->
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.notice{
  width: 100%;
  max-width: 1450px;
  margin: 96px auto 0;
  &-in{
    width: 90%;
    margin: 70px auto 0;
    .box{
      .box-in{
        height: 112px;
        margin-top: 15px;
        display: flex;
        background: var(--indexColor2);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        &:first-child{
          background: var(--indexColor1);
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
        }
        &:nth-of-type(2){
          margin-top: 0;
        }
      }
    }
    .box-left{
      border-radius:  60px 0 0 60px;
      overflow: hidden;
    }
    .box-right{
      margin-left: 3px;
      border-radius:  0 60px 60px 0;
      overflow: hidden;
      .box-in{
        &:nth-of-type(3){
          height: 239px;
        }
        &:first-child{
          background: var(--indexColor);
        }
      }
    }
  }
  &-line{
    width: 83px;
    margin: 22px auto;
  }
}
.bp{
  margin-top: 176px;
  &-swiper{
    margin-top: 42px;
    .swiper-slide-in{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 39.5px 83.1px;
      box-sizing: border-box;
      align-items: center;
      &-title{
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        background: var(--indexColor1);
        position: relative;
        &::after{
          content: '';
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 20px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 20px solid;
          border-color: var(--indexColor1) transparent transparent transparent;
        }
      }
      img{
        width: 100%;
        max-width: 267px;
        margin: 36px auto 0;
      }
      &:last-child{
        padding: 0 39.5px;
      }
    }
    .swiper-slide{
      padding: 0 30px;
      height: 100%;
      &:nth-of-type(3){
        .swiper-slide-in{
          padding: 0 39.5px 53.1px;
          // &:last-child{
          //   padding: 0 39.5px;
          // }
        }
      }
    }
    &-line{
      max-width: 216px;
      margin: 53px auto 0;
    }
  }
  &-text{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
    width: 100%;
    max-width: 1042px;
    text-align: center;
    margin: 36px auto 0;
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 60px auto;
    &-in{
      min-width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 39.5px 95.69px;
      box-sizing: border-box;
      align-items: center;
      &-title{
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        background: var(--indexColor1);
        position: relative;
        &::after{
          content: '';
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 20px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 20px solid;
          border-color: var(--indexColor1) transparent transparent transparent;
        }
      }
      img{
        margin-top: 30px;
        width: 100%;
      }
      // &:last-child{
      //   padding: 0 39.5px;
      // }
    }
  }
}
.step {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 241, 240, 0) 0%,
    rgba(255, 241, 240, 0.7) 12.5%,
    rgba(255, 241, 240, 0.7) 81.99%,
    rgba(255, 241, 240, 0) 100%
  );
  padding: 61px 0 140px;
  margin-top: 100px;
  &-in {
    width: 100%;
    max-width: 1444px;
    margin: 0 auto;
  }
  &-title {
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    margin-top: 98px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-in {
      display: flex;
      align-items: center;
      margin-bottom: 92px;
      &:nth-of-type(4),
      &:nth-of-type(5) {
        margin-bottom: 0;
      }
      &:nth-of-type(3),
      &:nth-of-type(4){
        .step-lists-in-r {
          display: none;
        }
      }
      &-l {
        width: 100%;
        max-width: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        .title {
          display: flex;
          align-items: center;
          font-size: 35px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #4d4d4d;
          img {
            height: auto;
            margin-right: 15px;
          }
        }
        .image {
          width: 100%;
          img {
            width: 100%;
            border-radius: 30px;
          }
        }
        .name {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 8px 15px;
          clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
        }
        .context {
          font-size: 20px;
          font-weight: 700;
          color: #4d4d4d;
          padding: 0 15px;
        }
      }
      &-r {
        margin-left: 50px;
        img {
          width: 15px;
          height: auto;
        }
      }
      &:nth-of-type(5) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .lastBox-t {
          display: flex;
          align-items: flex-end;
          & > div {
            color: var(--indexColor1);
            font-size: 35px;
            font-weight: 700;
            span {
              font-size: 85px;
            }
            &:nth-of-type(1) {
              padding-bottom: 25px;
              margin-right: 30px;
            }
            &:nth-of-type(3) {
              padding-bottom: 25px;
              margin-left: 30px;
            }
          }
        }
        .lastBox-b {
          margin-top: 15px;
          span {
            cursor: pointer;
            background: var(--indexColor1);
            color: #fff;
            font-size: 35px;
            font-weight: 700;
            padding: 5px 50px;
            border-radius: 30px;
            display: block;
            box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
            position: relative;
            z-index: 1;
            &::after,&::before{
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              opacity: 0;
              border-radius: 50px;
              background: var(--indexColor1);
              z-index: -1;
            }
            &:hover{
              &::after{
                animation: btnAnim2 3s infinite;
              }
              &::before{
                animation: btnAnim3 3s infinite;
              }
            }
          }
        }
      }
    }
  }
}
.differ{
  margin-top: 136px;
  &-lists{
    width: 100%;
    max-width: 1251px;
    margin: 55px auto 0;
    &-in{
      display: flex;
      &:not(:last-child){
        margin-bottom: 15px;
      }
      &:nth-of-type(odd){
        &>div{
          background: #FDD3E3;
        }
      }
      &:nth-of-type(1){
        &>div{
          background: none;
          padding: 0;
          justify-content: center;
          align-items: center;
          min-height: 45px;
          font-size: 28px;
          font-weight: 700;
        }
      }
      &>div{
        color: #4D4D4D;
        font-size: 20px;
        min-height: 112px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%;
        background: #FEE6F1;
        display: flex;
        align-items: center;
        white-space: pre-wrap;
        &:nth-of-type(1){
          width: calc( (122 / 1251) * 100%);
          border-radius: 60px 0 0 60px;
          justify-content: center;
        }
        &:nth-of-type(2){
          width: calc( (572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (74 / 1251) * 100%);
        }
        &:nth-of-type(3){
          width: calc( (572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (74 / 1251) * 100%);
          border-radius: 0 60px 60px 0;
        }
      }
    }
  }
  &-btn {
    margin-top: 57px;
    width: 100%;
    display: flex;
    justify-content: center;
    .btn {
      position: relative;
      span {
        box-shadow: 0px 1.74695px 3.4939px 0px rgba(252, 22, 130, 0.38);
        font-size: 35px;
        font-weight: 900;
        color: #fff;
        border-radius: 40px;
        padding: 5px 90px;
        background: var(--indexColor1);
        cursor: pointer;
        top: 0;
        display: block;
        &:nth-of-type(2) {
          color: var(--indexColor1);
          box-shadow: 0px 1.74695px 3.4939px 0px rgb(230, 230, 230);
          background: #fff;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          // animation: btnAnim 1s linear;
          // animation-fill-mode: forwards;
          width: max-content;
          display: flex;
          opacity: 0;
          transition: all .3s;
        }
      }
      &:hover {
        span{
          &:nth-of-type(2){
            // display: flex;
            animation: btnAnim 1s linear;
            animation-fill-mode: forwards;
            transition: all .3s;
            opacity: 1;
          }
        }
      }
    }
  }
}
.care {
  margin-top: 118px;
  &-title {
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 819px;
    margin: 54px auto 0;
    &-item {
      width: calc(100% / 3);
      & > div {
        .image {
          width: 100%;
          position: relative;
          padding: 0 calc((89px / 273px) * 100% / 2);
          &-in {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            // background: #fff1f0;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              // max-width: 90%;
              // max-height: 90%;
              width: 100%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          white-space: nowrap;
        }
      }
      &:nth-of-type(n + 4) {
        margin-top: 51px;
      }
    }
  }
}
.advantage{
  margin-top: 98px;
  &-in{
    display: flex;
    justify-content: center;
    max-width: 1246px;
    width: 100%;
    margin: 77px auto 0;
    &-r{
      flex: 1;
      margin-left: calc((44 / 1246) * 100%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &>div{
        .name{
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 8px 15px;
          width: calc((404 / 717) * 100%);
          clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
        }
        .text{
          color: var(--textColor);     
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          text-indent: 15px;
        }
      }
    }
  }
}
@keyframes btnAnim {
  0% {
    clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  50% {
    clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
    opacity: 1;
  }
  70%{
    opacity: 1;
  }
  100% {
    clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
    opacity: 0;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media (min-width: 768px) and (max-width: 1100px) {
  .bp{
    &-text{
      padding: 0 30px;
    }
    &-list{
      &-in{
        min-width: 50%;
      }
    }
  }
}
//md

@media only screen and (max-width: 760px) {
  .notice{
    &-in{
      width: 100%;
      margin: 34px 0 0;
      .box{
        margin-left: 30px;
        .box-in{
          font-weight: 500;
          font-size: 15px;
          height: 65px;
          margin-top: 9px;
          padding: 0 46px;
          &:first-child{
            height: 40px;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .box-right{
        margin-right: 30px;
        margin-left: 0;
        .box-in{
          &:nth-of-type(3){
            height: 139px;
          }
        }
      }
    }
  }
  .bp{
    margin-top: 94px;
    &-text{
      padding: 0 30px;
      font-weight: 500;
      font-size: 16px;
      margin: 47px auto 0;
      text-align: justify;
    }
    &-lists{
      margin: 53px auto 0;
      &-in{
        padding: 0 30px 85px;
      }
    }
  }
  .step {
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 12.5%,
      rgba(255, 241, 240, 0.7) 81.99%,
      rgba(255, 241, 240, 0) 100%
    );
    margin-top: 0;
    padding: 46px 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 57px 40px 0;
      &-in {
        flex-direction: column;
        margin-bottom: 30px;
        &:nth-of-type(n + 4) {
          margin-bottom: 30px;
        }
        &:nth-of-type(3) {
          .step-lists-in-r {
            display: block;
          }
        }
        &-l {
          .title {
            padding: 0 6px;
            font-size: 26px;
          }
          .image {
            padding: 0 6px;
          }
          .name {
            margin-top: -25px;
            font-size: 16px;
            clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
          }
          .context {
            font-size: 16px;
          }
        }
        &-r {
          margin-top: 30px;
          margin-left: 0;
          img {
            transform: rotate(90deg);
          }
        }
        &:nth-of-type(5) {
          margin-top: 15px;
          .lastBox-t {
            & > div {
              font-size: 15px;
              span {
                font-size: 24px;
              }
              img {
                width: 20px;
                height: 22px;
              }
              &:nth-of-type(1) {
                padding-bottom: 5px;
                margin-right: 7px;
              }
              &:nth-of-type(3) {
                padding-bottom: 5px;
                margin-left: 7px;
              }
            }
          }
          .lastBox-b {
            margin-top: 20px;
            span {
              font-size: 20px;
              padding: 5px 50px;
              border-radius: 25px;
            }
          }
        }
      }
    }
  }
  .differ{
    margin-top: 80px;
    &-lists{
      padding: 0 30px;
      margin-top: 35px;
      &-in{
        &:not(:last-child){
          margin-bottom: 4px;
        }
        &>div{
          font-size: 12px;
          box-sizing: border-box;
          min-height: auto;
          &:nth-of-type(1){
            border-radius: 0;
            margin-left: 1px;
            padding: 20px 10px;
            font-size: 16px;
            width: auto;
            flex: 1;
            text-align: center;
          }
          &:nth-of-type(2){
            padding: 20px 14px;
            width: calc( (127 / 315) * 100%);
          }
          &:nth-of-type(3){
            border-radius: 0;
            margin-left: 1px;
            padding: 20px 14px;
            width: calc( (127 / 315) * 100%);
          }
        }
        &:nth-of-type(1){
          &>div{
            font-size: 16px;
            padding: 0;
          }
        }
        &:nth-of-type(2){
          &>div{
            &:nth-of-type(1){
              border-radius: 20px 0 0 0;
            }
            &:nth-of-type(3){
              border-radius: 0 20px 0 0;
            }
          }
        }
        &:nth-of-type(3){
          &>div{
            &:nth-of-type(1){
              padding: 0;
            }
          }
        }
        &:last-child{
          &>div{
            &:nth-of-type(1){
              border-radius: 0 0 0 20px;
            }
            &:nth-of-type(3){
              border-radius: 0 0 20px 0;
            }
          }
        }
      }
    }
    &-btn {
      margin-top: 35px;
      .btn {
        // margin-top: 30px;
        span {
          font-size: 20px;
          padding: 5px 40px;
          box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
        }
      }
    }
  }
  .care {
    margin-top: 62px;
    padding-bottom: 0px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 34px 15px 0;
      &-item {
        width: calc(100% / 3);
        & > div {
          .image {
            padding: 0 5px;
          }
          .text {
            white-space: pre-wrap;
            font-size: 14px;
          }
        }
      }
    }
  }
  .advantage{
    margin-top: 40px;
     &-in{
       flex-direction: column;
       margin: 44px auto 0;
       padding: 0 30px;
       &-r{
         margin-left: 0;
         margin-top: 8px;
         &>div{
           margin-top: 44px;
           .name{
             width: 100%;
             font-size: 16px;
             clip-path: polygon(0 0, 90% 0, 95% 100%, 0 100%);
             margin-top: 0;
            // margin-bottom: 15px;
           }
           .text{
             font-size: 16px;
             text-indent: 0;
             padding-left: 10px;
           }
         }
       }
     }
  }
}
</style>
