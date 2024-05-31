<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp,whatsAppNum } from '~/assets/js/common'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: "矯齒(箍牙)",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健矯齒(箍牙)服務減2000元,香港熱線: 6933 8128免費預約掛號,羅湖福田深圳灣口岸分店，採用最新技術與個人化矯齒計劃打造黃金比例臉型',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳牙科 深圳愛康健口腔醫院 愛康健齒科集團 美容牙科 高階牙科 醫療券 長者醫療券大灣區試點 案例 牙醫 牙医 深圳 羅湖 朱咪咪 掛號 收費 價目表 線上預約 矯齒 箍牙 固定式外箍 固定式內箍 金屬箍牙 陶瓷箍牙 樹脂箍牙 傳統箍牙 矯齒價錢 箍牙價錢 箍牙流程 牙齒擠擁 倒及牙 齙牙 箍牙時間 微笑設計 美容牙科 微笑曲線 黃金比例 cool牙 兒童箍牙 改善臉型',
   },
  ]
})

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/03/9089da9cf4701d92.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2024/03/77d07e1327c9261f.jpg',
  }
]

const orthodonticsIntroduceData = {
  title: '什麼是矯齒（箍牙）？',
  content: '通過矯正器將牙齒逐步調整到理想的位置，從而修正咬合與齒列情況，改善發音問題，提升牙齒外觀的整齊及美觀度。牙齒移動後牙縫變小、咬合位置得到改善，也有助於清潔口腔，減少牙齒疾病風險。',
  mbImg: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-5-(1).5widhc9i93o0.jpg',
  pcImg: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-1235.5nuu1cxast00.jpg',
  tabNavName: 'pages.dental-service.orthodontics.introduce.tabNavName',
  pageName: 'orthodontics-test'
}

const reasonData = {
  title: 'pages.dental-service.orthodontics.reason.title',
  text: 'pages.dental-service.orthodontics.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/39b4d45b6b7bc2ab.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.orthodontics.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[2].context',
    }
  ]
}

const stepData = {
  title: '矯齒5步曲',
  lists: [
    {
      title: '第1步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectan427.3rp0grf76uu0.jpg',
      name: '初步檢查',
      context: '會為客人進行初步的口腔檢查，並拍攝全口腔的電腦斷層掃描檢查(CT Scan)及側面的X光照片',
    },
    {
      title: '第2步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rect456an427.d4qq7c4j1x4.jpg',
      name: '策劃療程',
      context: '會根據客人的具體情況，制定出最適合的矯正方案',
    },
    {
      title: '第3步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle45583427.35qu7qd8sei0.jpg',
      name: '口腔治療',
      context: '矯齒前，會先治療客人的口腔疾病，確保牙齒處於健康狀態',
    },
    {
      title: '第4步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle84845727.2der2vedis9w.jpg',
      name: '裝配矯正器',
      context: '每種矯正器的裝配方式有所不同，客人需要根據專科主任的建議來進行裝配和保養，以達到理想效果',
    },
    {
      title: '第5步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle93245235427.3w0l3j7va260.jpg',
      name: '定期覆診',
      context: '完成矯齒療程後，記得定期覆診和持續配戴固定器',
    }
  ],
}

const differData = {
  title: '固定式牙箍與隱形牙箍的分別',
  text: ['價格並非選擇的唯一考慮因素，\n選擇最適合自己的矯正方式才是關鍵。','建議向我們的專科主任諮詢，\n並根據自己的口腔情況和需求進行選擇。'],
  firstTextTh: '固定式牙箍',
  secondTextTh: '隱形牙箍',
  listDatas: [
    {
      name: '',
      firstText: '固定式牙箍',
      secondText: '隱形牙箍'
    },
    {
      name: '原理',
      firstText: '將矯正器固定在牙面上，利用鋼絲和牙箍的力量，逐步為牙齒調整至理想位置。',
      secondText: '利用電腦模擬牙齒的移動路徑，定期更換度身訂造的牙箍。'
    },
    {
      name: '物料',
      firstText: '金屬/ 陶瓷/ 自鎖/ 舌側',
      secondText: '醫學塑膠'
    },
    {
      name: '拆卸',
      firstText: '無法自行拆卸',
      secondText: '隨時戴脫'
    },
    {
      name: '美觀',
      isArrayType: true,
      firstText: '固定式外箍較顯眼\n固定式內箍對外觀沒有影響',
      secondText: '採用獨特透明設計，難以察覺'
    },
    {
      name: '清潔',
      firstText: '需以工具輔助清潔矯正器與鋼絲死角',
      secondText: '拆卸後可清洗'
    },
    {
      name: '成效',
      firstText: '適合大部份齒列畸形人士',
      secondText: '適合齒列輕度至中度不整及有美觀需求人士'
    },
    {
      name: '療程時長',
      firstText: '每人嚴重程度，因人而異，但一般比隱形牙箍療程快',
      secondText: '每人嚴重程度不同，因人而異'
    },
    {
      name: '其他',
      firstText: '矯齒初期會有不適感',
      secondText: '隱形牙套表面平滑'
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.orthodontics.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[0].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[1].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[2].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[3].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[4].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[5].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[5].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[6].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[6].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[7].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[7].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[8].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[8].A'
    },
  ]
}

const bpData ={
  title: '你有以下齒列不整的困擾嗎？',
  text: '在當今競爭激烈的社會中，個人形象已成為一種重要的競爭力。不論是在現實社會還是網絡中，個人形象都能給人留下深刻的印象，對於找工作、交朋友、學習、升職等方面都有著不可忽視的影響。牙齒不僅直接影響面容和微笑，更能夠反映一個人的健康和生活態度。所以，關注自己的形象不但是邁向成功的第一步，更是建立自信微笑的重要一步！',
  lists: [
    {
      title: '咬合過深',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/fcc14b39b1425784.jpg'
    },
    {
      title: '倒 及',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1556.6xop3m9cz3k0.jpg'
    },
    {
      title: '錯咬/個別反咬合',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-39-(1).5dt9vtsy9w00.jpg'
    },
    {
      title: '牙縫過大',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-40-(1).2l66y7enxs80.jpg'
    },
    {
      title: '開 咬',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-41-(1).3fzvrknw66c0.jpg'
    },
    {
      title: '齒列擠擁',
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-42-(1).7f6rnufo4vk0.jpg'
    },
    // {
    //   title: '前排齒列擠擁',
    //   imgUrl: 'https://static.cmereye.com/imgs/2023/06/e53653134a5709f1.jpg'
    // }
  ]
}

let bpCurrent = ref(1)
const onSlideChange = (swiper: any) => {
  bpCurrent.value = swiper.realIndex + 1
}


let aestheticsCurrent = ref(1)
const onAestheticsSlideChange = (swiper: any) => {
  aestheticsCurrent.value = swiper.realIndex + 1
}

const aestheticsData = {
  title: '矯齒方式種類',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/056cf3b645f697c6.jpg',
      title: '隱形牙箍矯正',
      text: '隱形設計，低調且難被察覺，美觀度高，同時矯正牙齒與頜面形態，讓矯正過程自然舒適。'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/eb84d445e77694da.jpg',
      title: '陶瓷半隱形矯正',
      text: '使用陶瓷透明托槽和鋼絲，色澤與牙齒相近，較難察覺。'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/1fc83a75a1e52762.jpg',
      title: '金屬托槽矯正',
      text: '最具經濟效益的矯正方式，適用範圍廣泛。'
    },
    {
      imgUrl: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-1.7bb54853j3s.jpg',
      title: '舌側隱形矯正',
      text: '對外觀無影響，同時能夠有效修正各種牙齒問題，包括咬合問題和齒列不整等，價錢相對較高。'
    }
  ]
}

let windowWidth = ref(1920)

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

const careData = {
  title: ['矯齒注意事項'],
  lists: [
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1047.2lum1bomw7y0.jpg',
      text: '注意口腔衛生',
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1048.5rfiys1h84k0.jpg',
      text: '忌吃硬黏及\n易染色食物',
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1464.1n0vbh7m2fr4.jpg',
      text: '盡量避免外傷',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/12/d1b77fe7ddd90ec3.jpg',
      text: '持續配戴固定器',
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1052.2t3ji3md60q0.jpg',
      text: '定期覆診檢查',
    }
  ],
}

</script>


<template>
<div>
  <PageBanner :bannerConfig="bannerConfig" />
  <div class="orthodonticsPage">
    <div class="smallPageCon pageTitle">
      <div class="index_title">{{$t('pages.dental-service.title')}}</div>
    </div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
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
    <div class="principle">
      <div class="principle-title dentistryServices-title">
        <div class="dentistryServices-title-in bb">固定式牙箍原理</div>
      </div>
      <div class="principle-topCon">固定式牙箍，專門用於調整和矯正牙齒，分為外箍和內箍兩種形式。</div>
      <div class="principle-in">
        <div class="principle-in-box">
          <img src="https://static.cmereye.com/imgs/2023/12/0454bdfcf890e755.jpg" alt="外箍式">
          <div>外箍式</div>
          <div>將矯正器直接固定在牙面上，利用鐵線的彈性，讓牙齒逐步移動至理想位置。</div>
        </div>
        <div class="principle-in-box">
          <img src="https://static.cmereye.com/imgs/2023/12/f9bc442ec3785727.jpg" alt="內箍式">
          <div>內箍式</div>
          <div>設計理念與外箍相似，區別在於牙箍被安裝在牙齒的內側，對於外觀的影響較小。</div>
        </div>
      </div>
      <div class="principle-bottomCon">
        <img src="@/assets/images/icon_13.png" alt="" />
        <div>在牙箍的材料選擇上，金屬、陶瓷、自鎖或舌側的牙箍，各有特色，可根據個人喜好或實際需求選擇。</div>
        <img src="@/assets/images/icon_13.png" alt="" />
      </div>
      <div class="principle-btn">
        <!-- <a :href="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`">預約免費口腔檢查</a> -->
        <PageAnimBtnTypeTwo :str="'預約免費口腔檢查'" />
      </div>
    </div>
    <div class="differ">
      <div class="differ-title dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{differData.title}}</div>
      </div>
      <div class="differ-context">
          <div v-for="(textItem,textIndex) in differData.text" :key="textIndex">
            {{textItem}}
          </div>
      </div>
      <div class="differ-lists">
        <div class="differ-lists-in" v-for="(listDatasItem,listDatasIndex) in differData.listDatas" :key="listDatasIndex">
          <div>{{listDatasItem.name}}</div>
          <div>{{listDatasItem.firstText}}</div>
          <div>{{listDatasItem.secondText}}</div>
        </div>
      </div>
    </div>
    <div class="aesthetics">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          <span>{{aestheticsData.title}}</span>
        </div>
      </div>
      <div class="aesthetics-in">
        <div
          class="aesthetics-swiper"
        >
          <div class="swiper-slide" v-for="(aestheticsItem,aestheticsIndex) in aestheticsData.lists" :key="aestheticsIndex">
            <div class="swiper-slide-in">
              <img :src="aestheticsItem.imgUrl" alt="" />
              <div class="swiper-slide-in-title">{{aestheticsItem.title}}</div>
              <div class="swiper-slide-in-text">{{aestheticsItem.text}}</div>
            </div>
          </div>
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
                <!-- <div><img src="@/assets/images/icon_13.png" alt="" /></div>
                <div>療程最快<span>即日完成 !</span></div>
                <div><img src="@/assets/images/icon_13.png" alt="" /></div> -->
                <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/20231113_剝智慧齒後一勞永逸？-04-1.vy2qx2j4vkg.png" alt="">
              </div>
              <div class="lastBox-b">
                <!-- <span @click="toWhatsApp">預約免費口腔檢查</span> -->
                <PageAnimBtnTypeTwo :str="'預約免費口腔檢查'" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <NewAddress />
  </div>
</div>
</template>



<style lang="scss" scoped>
.orthodonticsPage{
  background: #fff;
  padding: 140px 0;
  position: relative;
  z-index: 1;
}
.bp{
  margin-top: 176px;
  &-lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 60px auto;
    &-in{
      // min-width: 33.33%;
      width: calc(100% / 3);
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
.aesthetics{
  margin-top: 108px;
  &-in{
    margin-top: 40px;
    padding: 88px 0;
    background: linear-gradient(-99deg, rgba(252, 22, 130, 0.40) -0.55%, rgba(252, 22, 130, 0.28) -0.54%, rgba(255, 168, 198, 0.00) 99.3%);
  }
  &-swiper{
    padding-bottom: 10px;
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    display: flex;
    .swiper-slide{
      height: 100%;
      padding: 0 30px;
      width: calc(100% / 4);
      &-in{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 4px 4px 6px rgba(255, 163, 158, 0.25), inset 1px -1px 0px #FFCCC7;
        border-radius: 15px;
        overflow: hidden;
        background: #fff;
        height: auto;
        min-height: 485px;
        img{
          width: 100%;
          box-sizing: border-box;
          padding-left: 1px;
        }
        &-title{
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 160%;
          text-align: center;
          color: var(--indexColor1);
          margin-top: 40px;
        }
        &-text{
          padding: 18px 34px 18px;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 160%;
          color: #666666;
          text-align: justify;
        }
      }
    }
  }
}
.care {
  margin-top: 206px;
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
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              // background: #fee6f1;
            }
          }
        }
      }
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
  // margin-top: 77px;
  &-in {
    width: 100%;
    max-width: 1444px;
    margin: 0 auto;
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
      &:nth-of-type(5) {
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
          color: #666666;
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
          color: #666666;
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
      &:nth-of-type(6) {
        // flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .lastBox-t {
          display: flex;
          align-items: flex-end;
        }
        .lastBox-b {
          margin-top: 15px;
        }
      }
    }
  }
}
.principle{
  &-topCon{
    color:#4D4D4D;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    margin-top: 30px;
  }
  &-in{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    &-box{
      width: 100%;
      max-width: 462px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:nth-of-type(2){
        margin-left: calc((89 / 1920) * 100%);
      }
      div{
        &:nth-of-type(1){
          padding: 0 60px;
          margin: -18% auto 0;
          color: #FFF;
          text-align: center;
          font-size: 35px;
          font-style: normal;
          font-weight: 900;
          line-height: 160%;
          background: #FC1682;
          border-radius: 30px;
          display: inline-block;
          filter: drop-shadow(0px 3.704px 7.409px rgba(252, 22, 130, 0.38));
        }
        &:nth-of-type(2){
          margin-top: 63px;
          color: #4D4D4D;
          text-align: justify;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          padding: 0 40px;
        }
      }
    }
  }
  &-bottomCon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    img{
      width: 36px;
      height: 40px;
    }
    div{
      color: #FC1682;
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      width: 100%;
      max-width: 892px;
      margin-right: 26px;
      margin-left: 44px;
    }
  }
  &-btn{
    display: flex;
    justify-content: center;
    margin-top: 29px;
  }
}
.differ{
  margin-top: 136px;
  &-context{
    margin-top: 40px;
    text-align: center;
    color: #4D4D4D;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
  }
  &-lists{
    width: 100%;
    max-width: 1251px;
    margin: 40px auto 0;
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
          width: calc( (102 / 1251) * 100%);
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
}
@media (min-width: 768px) and (max-width: 1920px) {
  .bp{
    margin-top: 9.1667vw;
    &-lists{
      max-width: 57.2917vw;
      margin: 3.125vw auto;
      &-in{
        padding: 0 1.9vw 4.9839vw;
        &-title{
          min-width: 8.5938vw;
          height: 2.0833vw;
          line-height: 2.0833vw;
          font-size: 1.0417vw;
          &::after{
            bottom: -2vw;
            border-top: 1.0417vw solid;
            border-left: .4167vw solid;
            border-right: .4167vw solid;
            border-bottom: 1.0417vw solid;
            border-color: var(--indexColor1) transparent transparent transparent;
          }
        }
        img{
          margin-top: 1.5625vw;
        }
      }
    }
  }
  .principle{
    &-topCon{
      font-size: 1.4583vw;
      margin-top: 1.5625vw;
    }
    &-in{
      margin-top: 2.0833vw;
      &-box{
        max-width: 24.0625vw;
        div{
          &:nth-of-type(1){
            padding: 0 3.125vw;
            font-size: 1.8229vw;
            border-radius: 1.5625vw;
            filter: drop-shadow(0px .1929vw .3859vw rgba(252, 22, 130, 0.38));
          }
          &:nth-of-type(2){
            margin-top: 3.2813vw;
            font-size: 1.4583vw;
            padding: 0 2.0833vw;
          }
        }
      }
    }
    &-bottomCon{
      margin-top: 4.4271vw;
      img{
        width: 1.875vw;
        height: 2.0833vw;
      }
      div{
        font-size: 1.8229vw;
        max-width: 46.4583vw;
        margin-right: 1.3542vw;
        margin-left: 2.2917vw;
      }
    }
    &-btn{
      margin-top: 1.5104vw;
    }
  }
  .differ{
    margin-top: 7.0833vw;
    &-context{
      margin-top: 2.0833vw;
      font-size: 1.4583vw;
    }
    &-lists{
      max-width: 65.1563vw;
      margin: 2.0833vw auto 0;
      &-in{
        &:not(:last-child){
          margin-bottom: .7813vw;
        }
        &:nth-of-type(1){
          &>div{
            min-height: 2.3438vw;
            font-size: 1.4583vw;
          }
        }
        &>div{
          font-size: 1.0417vw;
          min-height: 5.8333vw;
          &:nth-of-type(1){
            border-radius: 3.125vw 0 0 3.125vw;
          }
          &:nth-of-type(2){
            margin-left: .1302vw;
          }
          &:nth-of-type(3){
            margin-left: .1302vw;
            border-radius: 0 3.125vw 3.125vw 0;
          }
        }
      }
    }
  }
  .aesthetics{
    margin-top: 5.625vw;
    &-in{
      margin-top: 2.0833vw;
      padding: 4.5833vw 0;
      background: linear-gradient(-99deg, rgba(252, 22, 130, 0.40) -0.55%, rgba(252, 22, 130, 0.28) -0.54%, rgba(255, 168, 198, 0.00) 99.3%);
    }
    &-swiper{
      padding-bottom: .5208vw;
      max-width: 78.75vw;
      .swiper-slide{
        padding: 0 1.5625vw;
        &-in{
          box-shadow: .2083vw .2083vw .3125vw rgba(255, 163, 158, 0.25), inset 1px -1px 0px #FFCCC7;
          border-radius: .7813vw;
          min-height: 25.2604vw;
          &-title{
            font-size: 1.4583vw;
            margin-top: 2.0833vw;
          }
          &-text{
            padding: .9375vw 1.7708vw .9375vw;
            font-size: .9375vw;
          }
        }
      }
    }
  }
  .step {
    padding: 3.1771vw 0 7.2917vw;
    &-in {
      max-width: 75.2083vw;
    }
    &-lists {
      margin-top: 5.1042vw;
      &-in {
        margin-bottom: 4.7917vw;
        &-l {
          max-width: 20.8333vw;
          .title {
            font-size: 1.8229vw;
            margin-bottom: .7813vw;
            img {
              margin-right: .7813vw;
            }
          }
          .image {
            img {
              border-radius: 1.5625vw;
            }
          }
          .name {
            font-size: 1.0417vw;
            margin-top: 1.25vw;
            margin-bottom: .7813vw;
            padding: .4167vw .7813vw;
          }
          .context {
            font-size: 1.0417vw;
            padding: 0 .7813vw;
          }
        }
        &-r {
          margin-left: 2.6042vw;
          img {
            width: .7813vw;
          }
        }
        &:nth-of-type(6) {
          .lastBox-b {
            margin-top: .7813vw;
          }
          .lastBox-t{
            img{
              width: 9.6875vw;
            }
          }
        }
      }
    }
  }
  .care {
    margin-top: 10.7292vw;
    &-lists {
      max-width: 42.6563vw;
      margin: 2.8125vw auto 0;
      &-item {
        & > div {
          .image {
            &-in {
              margin-bottom: .6771vw;
              border-radius: .5208vw;
            }
          }
          .text {
            font-size: 1.25vw;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 2.6563vw;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .orthodonticsPage{
    padding: 90px 0;
  }
  .bp{
    margin-top: 94px;
    &-lists{
      &-in{
        width: 100%;
      }
    }
  }
  .aesthetics{
    margin-top: 90px;
    &-in{
      margin-top: 28px;
      padding: 44px 0;
    }
    &-swiper{
      flex-direction: column;
      padding-bottom: 0;
      .swiper-slide{
        width: 100%;
        &:not(:first-child){
          margin-top: 44px;
        }
      }
    }
  }
  .care {
    margin-top: 40px;
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
        &:nth-of-type(1) {
          & > div {
            .text {
              padding: 0 30px;
            }
          }
        }
        &:nth-of-type(3) {
          & > div {
            .text {
              padding: 0 15px;
            }
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
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
    margin-top: 80px;
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
        &:nth-of-type(3){
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
        &:nth-of-type(6) {
          margin-top: 15px;
          width: 100%;
          .lastBox-t {
            img{
              width: 125px;
            }
          }
          .lastBox-b {
            margin-top: 20px;
            // span {
            //   font-size: 20px;
            //   padding: 5px 50px;
            //   border-radius: 25px;
            // }
          }
        }
      }
    }
  }
  .principle{
    padding: 0 30px;
    &-topCon{
      font-size: 16px;
      font-weight: 500;
    }
    &-in{
      flex-direction: column;
      &-box{
        &:nth-of-type(2){
          margin-left: 0;
          margin-top: 44px;
        }
        div{
          &:nth-of-type(1){
            font-size: 20px;
            padding: 3px 50px;
          }
          &:nth-of-type(2){
            font-size: 20px;
            margin-top: 43px;
            padding: 0 30px;
          }
        }
      }
    }
    &-bottomCon{
      margin-top: 60px;
      img{
        width: 20px;
        height: 22px;
      }
      div{
        font-size: 16px;
        margin-right: 18px;
        margin-left: 17px;
      }
    }
    &-btn{
      margin-top: 44px;
      // a{
      //   font-size: 20px;
      //   padding: 5px 45px;
      // }
    }
  }
  .differ{
    &-context{
      font-size: 16px;
      white-space: pre-wrap;
    }
    &-lists{
      padding: 0 30px;
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
            // margin-left: 1px;
            padding: 20px 10px;
            font-size: 16px;
            width: auto;
            flex: 1;
            text-align: center;
          }
          &:nth-of-type(2){
            padding: 20px 14px;
            margin-left: 1px;
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
  }
}
</style>