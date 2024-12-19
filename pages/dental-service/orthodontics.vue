<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp, whatsAppNum } from '~/assets/js/common'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: '矯齒(箍牙)',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健矯齒(箍牙)服務減2000元,香港熱線: 3892 5049免費預約掛號,羅湖福田深圳灣口岸分店，採用最新技術與個人化矯齒計劃打造黃金比例臉型',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳牙科 深圳愛康健口腔醫院 愛康健齒科集團 美容牙科 高階牙科 醫療券 長者醫療券大灣區試點 案例 牙醫 牙医 深圳 羅湖 朱咪咪 掛號 收費 價目表 線上預約 矯齒 箍牙 固定式外箍 固定式內箍 金屬箍牙 陶瓷箍牙 樹脂箍牙 傳統箍牙 矯齒價錢 箍牙價錢 箍牙流程 牙齒擠擁 倒及牙 齙牙 箍牙時間 微笑設計 美容牙科 微笑曲線 黃金比例 cool牙 兒童箍牙 改善臉型',
    },
  ],
})

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/03/9089da9cf4701d92.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2024/03/77d07e1327c9261f.jpg',
  },
]

const orthodonticsIntroduceData = {
  title: '什麼是矯齒（箍牙）？',
  content:
    '通過矯正器將牙齒逐步調整到理想的位置，從而修正咬合與齒列情況，改善發音問題，提升牙齒外觀的整齊及美觀度。牙齒移動後牙縫變小、咬合位置得到改善，也有助於清潔口腔，減少牙齒疾病風險。',
  mbImg:
    'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-5-(1).5widhc9i93o0.jpg',
  pcImg:
    'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-1235.5nuu1cxast00.jpg',
  tabNavName: 'pages.dental-service.orthodontics.introduce.tabNavName',
  pageName: 'orthodontics-test',
}

const reasonData = {
  title: 'pages.dental-service.orthodontics.reason.title',
  text: 'pages.dental-service.orthodontics.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/39b4d45b6b7bc2ab.jpg',
  reasonLists: [
    {
      context: 'pages.dental-service.orthodontics.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[2].context',
    },
  ],
}

const stepData = {
  title: '矯齒5步曲',
  lists: [
    {
      title: '第1步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectan427.3rp0grf76uu0.jpg',
      name: '初步檢查',
      context:
        '會為客人進行初步的口腔檢查，並拍攝全口腔的電腦斷層掃描檢查(CT Scan)及側面的X光照片',
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
      context:
        '每種矯正器的裝配方式有所不同，客人需要根據專科主任的建議來進行裝配和保養，以達到理想效果',
    },
    {
      title: '第5步',
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle93245235427.3w0l3j7va260.jpg',
      name: '定期覆診',
      context: '完成矯齒療程後，記得定期覆診和持續配戴固定器',
    },
  ],
}

const differData = {
  title: '固定式牙箍與隱形牙箍的分別',
  text: [
    '價格並非選擇的唯一考慮因素，\n選擇最適合自己的矯正方式才是關鍵。',
    '建議向我們的專科主任諮詢，\n並根據自己的口腔情況和需求進行選擇。',
  ],
  firstTextTh: '固定式牙箍',
  secondTextTh: '隱形牙箍',
  listDatas: [
    {
      name: '',
      firstText: '固定式牙箍',
      secondText: '隱形牙箍',
    },
    {
      name: '原理',
      firstText:
        '將矯正器固定在牙面上，利用鋼絲和牙箍的力量，逐步為牙齒調整至理想位置。',
      secondText: '利用電腦模擬牙齒的移動路徑，定期更換度身訂造的牙箍。',
    },
    {
      name: '物料',
      firstText: '金屬/ 陶瓷/ 自鎖/ 舌側',
      secondText: '醫學塑膠',
    },
    {
      name: '拆卸',
      firstText: '無法自行拆卸',
      secondText: '隨時戴脫',
    },
    {
      name: '美觀',
      isArrayType: true,
      firstText: '固定式外箍較顯眼\n固定式內箍對外觀沒有影響',
      secondText: '採用獨特透明設計，難以察覺',
    },
    {
      name: '清潔',
      firstText: '需以工具輔助清潔矯正器與鋼絲死角',
      secondText: '拆卸後可清洗',
    },
    {
      name: '成效',
      firstText: '適合大部份齒列畸形人士',
      secondText: '適合齒列輕度至中度不整及有美觀需求人士',
    },
    {
      name: '療程時長',
      firstText: '每人嚴重程度，因人而異，但一般比隱形牙箍療程快',
      secondText: '每人嚴重程度不同，因人而異',
    },
    {
      name: '其他',
      firstText: '矯齒初期會有不適感',
      secondText: '隱形牙套表面平滑',
    },
  ],
}

const problemData = {
  title: 'pages.dental-service.orthodontics.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[0].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[1].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[1].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[2].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[2].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[3].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[3].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[4].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[4].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[5].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[5].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[6].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[6].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[7].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[7].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[8].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[8].A',
    },
  ],
}

const bpData = {
  title: '你有以下齒列不整的困擾嗎？',
  text: '在當今競爭激烈的社會中，個人形象已成為一種重要的競爭力。不論是在現實社會還是網絡中，個人形象都能給人留下深刻的印象，對於找工作、交朋友、學習、升職等方面都有著不可忽視的影響。牙齒不僅直接影響面容和微笑，更能夠反映一個人的健康和生活態度。所以，關注自己的形象不但是邁向成功的第一步，更是建立自信微笑的重要一步！',
  lists: [
    {
      title: '咬合過深',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/fcc14b39b1425784.jpg',
    },
    {
      title: '倒 及',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1556.6xop3m9cz3k0.jpg',
    },
    {
      title: '錯咬/個別反咬合',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-39-(1).5dt9vtsy9w00.jpg',
    },
    {
      title: '牙縫過大',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-40-(1).2l66y7enxs80.jpg',
    },
    {
      title: '開 咬',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-41-(1).3fzvrknw66c0.jpg',
    },
    {
      title: '齒列擠擁',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-42-(1).7f6rnufo4vk0.jpg',
    },
    // {
    //   title: '前排齒列擠擁',
    //   imgUrl: 'https://static.cmereye.com/imgs/2023/06/e53653134a5709f1.jpg'
    // }
  ],
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
      text: '隱形設計，低調且難被察覺，美觀度高，同時矯正牙齒與頜面形態，讓矯正過程自然舒適。',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/eb84d445e77694da.jpg',
      title: '陶瓷半隱形矯正',
      text: '使用陶瓷透明托槽和鋼絲，色澤與牙齒相近，較難察覺。',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/1fc83a75a1e52762.jpg',
      title: '金屬托槽矯正',
      text: '最具經濟效益的矯正方式，適用範圍廣泛。',
    },
    {
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-1.7bb54853j3s.jpg',
      title: '舌側隱形矯正',
      text: '對外觀無影響，同時能夠有效修正各種牙齒問題，包括咬合問題和齒列不整等，價錢相對較高。',
    },
  ],
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
    },
  ],
}
</script>


<template>
  <div>
    <PageBanner :isApiConfig="true" :apiId="'173'" />
    <div class="orthodonticsPage">
      <div class="smallPageCon pageTitle">
        <div class="index_title">{{ $t('pages.dental-service.title') }}</div>
      </div>
      <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      <div class="traffic">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>北上箍牙最緊要交通方便</span>
          </div>
        </div>
        <div>4大口岸分店</div>
        <div class="port-list">
          <div>
            <div>1</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/eaa32a881990a4c1.png"
                  alt=""
              /></span>
              <span>羅湖口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/5d173da6d8e10df7.png"
                  alt=""
              /></span>
              <span>出關<i>步行3分鐘</i></span>
            </div>
          </div>
          <div>
            <div>2</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/77a62d18592cf103.png"
                  alt=""
              /></span>
              <span>福田口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/495d73a43935aa21.png"
                  alt=""
              /></span>
              <span>出關<i>步行3分鐘</i></span>
            </div>
          </div>
          <div>
            <div>3</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/77a62d18592cf103.png"
                  alt=""
              /></span>
              <span>南山口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/9b250a2b3a446a3d.png"
                  alt=""
              /></span>
              <span
                ><i>免費專車接送/</i>
                <i
                  >步行3分鐘<img
                    src="https://static.cmereye.com/imgs/2024/12/15f68bb258f6df7a.png"
                    alt=""
                /></i>
              </span>
            </div>
          </div>
          <div>
            <div>4</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/eaa32a881990a4c1.png"
                  alt=""
              /></span>
              <span>蓮塘口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/5498a63c60ebbdcd.png"
                  alt=""
              /></span>
              <span
                >地鐵2號線<i>坐4個站</i
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/15f68bb258f6df7a.png"
                  alt=""
              /></span>
            </div>
          </div>
        </div>
        <div class="port-combo" v-if="windowWidth > 768">
          <div class="dentistryServices-title">
            <div class="dentistryServices-title-in bb">
              <span>愛康健限時箍牙套餐</span>
            </div>
          </div>
          <div>
            <div>
              <span>2</span><span>人同行再減</span><span>¥</span
              ><span>500</span>
            </div>
            <div>
              <div>
                <span>經濟實惠</span>
                <span>傳統金屬箍牙</span>
                <span><i>¥</i>12,800<i>起</i></span>
                <span><i>¥</i>23<i>/日</i></span>
              </div>
              <div>
                <span>性價比高</span>
                <span>時代天使<br />隱形牙箍</span>
                <span><i>¥</i>18,800<i>起</i></span>
                <span><i>¥</i>34<i>/日</i></span>
              </div>
              <div>
                <span>複雜牙列適用</span>
                <span>Spar<br />隱形牙箍</span>
                <span><i>¥</i>39,800<i>起</i></span>
                <span><i>¥</i>71<i>/日</i></span>
              </div>
              <div>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/2301eafa387509ab.png"
                    alt=""
                /></span>
                <span>隱形牙箍</span>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/7293760e23244e49.png"
                    alt=""
                /></span>
                <span>¥5,000</span>
              </div>
            </div>
            <a
              href="https://wa.me/85269338128?text=Hello%E6%84%9B%E5%BA%B7%E5%81%A5,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E7%89%99%E7%A7%91%E6%9C%8D%E5%8B%99"
              target="_blank"
              >網上及WhatApp預約專享</a
            >
          </div>
        </div>
        <div class="port-combo_mb" v-else>
          <div class="dentistryServices-title">
            <div class="dentistryServices-title-in bb">
              <span>愛康健限時箍牙套餐</span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>經濟實惠</span>
                <span>傳統金屬箍牙</span>
                <span><i>¥</i>12,800<i>起</i></span>
                <span><i>¥</i>23<i>/日</i></span>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/12/5d174b9388c1daec.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div>
                <span>性價比高</span>
                <span>時代天使<br />隱形牙箍</span>
                <span><i>¥</i>18,800<i>起</i></span>
                <span><i>¥</i>34<i>/日</i></span>
              </div>
              <div>
                <span>複雜牙列適用</span>
                <span>Spar<br />隱形牙箍</span>
                <span><i>¥</i>39,800<i>起</i></span>
                <span><i>¥</i>71<i>/日</i></span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/12/324edafce5729e21.png"
                  alt=""
                />
              </div>
              <div>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/2301eafa387509ab.png"
                    alt=""
                /></span>
                <span>隱形牙箍</span>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/7293760e23244e49.png"
                    alt=""
                /></span>
                <span>¥5,000</span>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/85269338128?text=Hello%E6%84%9B%E5%BA%B7%E5%81%A5,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E7%89%99%E7%A7%91%E6%9C%8D%E5%8B%99"
            target="_blank"
            >網上及WhatApp預約專享</a
          >
        </div>
      </div>
      <div class="bp">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{ bpData.title }}</span>
          </div>
        </div>
        <div class="bp-lists">
          <div
            class="bp-lists-in"
            v-for="(bpItem, bpIndex) in bpData.lists"
            :key="bpIndex"
          >
            <div class="bp-lists-in-title">{{ bpItem.title }}</div>
            <img :src="bpItem.imgUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="principle">
        <div class="principle-title dentistryServices-title">
          <div class="dentistryServices-title-in bb">固定式牙箍原理</div>
        </div>
        <div class="principle-topCon">
          固定式牙箍，專門用於調整和矯正牙齒，分為外箍和內箍兩種形式。
        </div>
        <div class="principle-in">
          <div class="principle-in-box">
            <img
              src="https://static.cmereye.com/imgs/2023/12/0454bdfcf890e755.jpg"
              alt="外箍式"
            />
            <div>外箍式</div>
            <div>
              將矯正器直接固定在牙面上，利用鐵線的彈性，讓牙齒逐步移動至理想位置。
            </div>
          </div>
          <div class="principle-in-box">
            <img
              src="https://static.cmereye.com/imgs/2023/12/f9bc442ec3785727.jpg"
              alt="內箍式"
            />
            <div>內箍式</div>
            <div>
              設計理念與外箍相似，區別在於牙箍被安裝在牙齒的內側，對於外觀的影響較小。
            </div>
          </div>
        </div>
        <div class="principle-bottomCon">
          <img src="@/assets/images/icon_13.png" alt="" />
          <div>
            在牙箍的材料選擇上，金屬、陶瓷、自鎖或舌側的牙箍，各有特色，可根據個人喜好或實際需求選擇。
          </div>
          <img src="@/assets/images/icon_13.png" alt="" />
        </div>
        <div class="principle-btn">
          <!-- <a :href="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`">預約免費口腔檢查</a> -->
          <PageAnimBtnTypeTwo :str="'預約免費口腔檢查'" />
        </div>
      </div>
      <div class="differ">
        <div class="differ-title dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{ differData.title }}
          </div>
        </div>
        <div class="differ-context">
          <div
            v-for="(textItem, textIndex) in differData.text"
            :key="textIndex"
          >
            {{ textItem }}
          </div>
        </div>
        <div class="differ-lists">
          <div
            class="differ-lists-in"
            v-for="(listDatasItem, listDatasIndex) in differData.listDatas"
            :key="listDatasIndex"
          >
            <div>{{ listDatasItem.name }}</div>
            <div>{{ listDatasItem.firstText }}</div>
            <div>{{ listDatasItem.secondText }}</div>
          </div>
        </div>
      </div>
      <div class="aesthetics">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{ aestheticsData.title }}</span>
          </div>
        </div>
        <div class="aesthetics-in">
          <div class="aesthetics-swiper">
            <div
              class="swiper-slide"
              v-for="(aestheticsItem, aestheticsIndex) in aestheticsData.lists"
              :key="aestheticsIndex"
            >
              <div class="swiper-slide-in">
                <img :src="aestheticsItem.imgUrl" alt="" />
                <div class="swiper-slide-in-title">
                  {{ aestheticsItem.title }}
                </div>
                <div class="swiper-slide-in-text">
                  {{ aestheticsItem.text }}
                </div>
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
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/20231113_剝智慧齒後一勞永逸？-04-1.vy2qx2j4vkg.png"
                  alt=""
                />
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
.orthodonticsPage {
  background: #fff;
  padding: 140px 0;
  position: relative;
  z-index: 1;
}
.traffic {
  margin-top: 109px;
  & > div:nth-child(2) {
    color: var(--Theme-Color, #fc1682);
    text-align: center;
    font-family: FakePearl;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 65px */
    margin: 16px auto 40px;
  }
  .port-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 28px;
    max-width: 1066px;
    margin: 0 auto;
    & > div {
      display: flex;
      width: 510px;
      // max-width: 558px;
      & > div:nth-child(1) {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; /* 64px */
      }
      & > div:nth-child(2) {
        flex: 9;
        display: flex;
        align-items: center;
        gap: 0 12px;
        span {
          display: flex;
          align-items: center;
          i {
            font-style: normal;
          }
        }
        span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: FakePearl;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%; /* 38.4px */
        }
        span:nth-child(4) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: FakePearl;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
        }
      }
    }
    & > div:nth-child(1),
    & > div:nth-child(4) {
      & > div:nth-child(1) {
        border-radius: 10px 0px 0px 10px;
        background: var(--Theme-Color, #fc1682);
        width: 39px;
        // height: 100%;
        // min-height: 82px;
        min-height: max-content;
      }
      & > div:nth-child(2) {
        padding: 30px 16px;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
        border: 2px solid var(--Theme-Color, #fc1682);
        background: var(--White, #fff);
      }
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      & > div:nth-child(1) {
        border-radius: 10px 0px 0px 10px;
        background: var(--Blue-Deep, #00aeff);
        width: 39px;
        // height: 100%;
        // min-height: 82px;
        min-height: max-content;
      }
      & > div:nth-child(2) {
        padding: 16px 30px;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
        border: 2px solid var(--Blue-Deep, #00aeff);
        background: var(--White, #fff);
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        & > span {
          flex-direction: column;
          i {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        & > span:last-child {
          i {
            color: var(--Theme-Color, #fc1682);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        & > span:last-child {
          i {
            color: var(--Theme-Color, #fc1682);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
          }
        }
      }
    }
  }
}
.bp {
  margin-top: 176px;
  &-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 60px auto;
    &-in {
      // min-width: 33.33%;
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 39.5px 95.69px;
      box-sizing: border-box;
      align-items: center;
      &-title {
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #ffffff;
        background: var(--indexColor1);
        position: relative;
        &::after {
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
      img {
        margin-top: 30px;
        width: 100%;
      }
      // &:last-child{
      //   padding: 0 39.5px;
      // }
    }
  }
}
.aesthetics {
  margin-top: 108px;
  &-in {
    margin-top: 40px;
    padding: 88px 0;
    background: linear-gradient(
      -99deg,
      rgba(252, 22, 130, 0.4) -0.55%,
      rgba(252, 22, 130, 0.28) -0.54%,
      rgba(255, 168, 198, 0) 99.3%
    );
  }
  &-swiper {
    padding-bottom: 10px;
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    display: flex;
    .swiper-slide {
      height: 100%;
      padding: 0 30px;
      width: calc(100% / 4);
      &-in {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 4px 4px 6px rgba(255, 163, 158, 0.25),
          inset 1px -1px 0px #ffccc7;
        border-radius: 15px;
        overflow: hidden;
        background: #fff;
        height: auto;
        min-height: 485px;
        img {
          width: 100%;
          box-sizing: border-box;
          padding-left: 1px;
        }
        &-title {
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 160%;
          text-align: center;
          color: var(--indexColor1);
          margin-top: 40px;
        }
        &-text {
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
.principle {
  &-topCon {
    color: #4d4d4d;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    margin-top: 30px;
  }
  &-in {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    &-box {
      width: 100%;
      max-width: 462px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:nth-of-type(2) {
        margin-left: calc((89 / 1920) * 100%);
      }
      div {
        &:nth-of-type(1) {
          padding: 0 60px;
          margin: -18% auto 0;
          color: #fff;
          text-align: center;
          font-size: 35px;
          font-style: normal;
          font-weight: 900;
          line-height: 160%;
          background: #fc1682;
          border-radius: 30px;
          display: inline-block;
          filter: drop-shadow(0px 3.704px 7.409px rgba(252, 22, 130, 0.38));
        }
        &:nth-of-type(2) {
          margin-top: 63px;
          color: #4d4d4d;
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
  &-bottomCon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    img {
      width: 36px;
      height: 40px;
    }
    div {
      color: #fc1682;
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
  &-btn {
    display: flex;
    justify-content: center;
    margin-top: 29px;
  }
}
.differ {
  margin-top: 136px;
  &-context {
    margin-top: 40px;
    text-align: center;
    color: #4d4d4d;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
  }
  &-lists {
    width: 100%;
    max-width: 1251px;
    margin: 40px auto 0;
    &-in {
      display: flex;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      &:nth-of-type(odd) {
        & > div {
          background: #fdd3e3;
        }
      }
      &:nth-of-type(1) {
        & > div {
          background: none;
          padding: 0;
          justify-content: center;
          align-items: center;
          min-height: 45px;
          font-size: 28px;
          font-weight: 700;
        }
      }
      & > div {
        color: #4d4d4d;
        font-size: 20px;
        min-height: 112px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%;
        background: #fee6f1;
        display: flex;
        align-items: center;
        white-space: pre-wrap;
        &:nth-of-type(1) {
          width: calc((102 / 1251) * 100%);
          border-radius: 60px 0 0 60px;
          justify-content: center;
        }
        &:nth-of-type(2) {
          width: calc((572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc((74 / 1251) * 100%);
        }
        &:nth-of-type(3) {
          width: calc((572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc((74 / 1251) * 100%);
          border-radius: 0 60px 60px 0;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .port-combo {
    margin-top: 88px;
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: relative;
        width: fit-content;
        margin: 0 auto;
        & > span:nth-child(1) {
          color: var(--Orange, #f90);
          font-family: var(--indexFontFamily);
          font-size: 62.931px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        & > span:nth-child(2) {
          color: var(--Orange, #f90);
          font-family: var(--indexFontFamily);
          font-size: 38px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding-bottom: 10px;
        }
        & > span:nth-child(3) {
          color: var(--Theme-Color, #fc1682);
          font-family: var(--indexFontFamily);
          font-size: 41.954px;
          font-style: normal;
          font-weight: 600;
          padding-bottom: 10px;
          line-height: normal;
        }
        & > span:nth-child(4) {
          color: var(--Theme-Color, #fc1682);
          font-family: var(--indexFontFamily);
          font-size: 69.923px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      & > div:nth-child(1)::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2024/12/5115a14ce57ce053.png)
          no-repeat;
        background-size: contain;
        width: 265px;
        height: 78px;
        position: absolute;
        left: -70%;
        top: 30%;
        transform: translateY(-50%);
      }
      & > div:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0 14px;
        max-width: 900px;
        margin: 10px auto;
        & > div {
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          justify-content: space-between;
          & > span:nth-child(1) {
            position: absolute;
            top: -10%;
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            font-family: FakePearl;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%; /* 42.937px */
            letter-spacing: 2.067px;
          }
          & > span:nth-child(3) {
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 38.184px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
            text-align: center;
            i:nth-child(1) {
              color: var(--Theme-Color, #fc1682);
              text-align: center;
              font-family: FakePearl;
              font-size: 24.095px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 44.952px */
            }
            i:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
              font-family: FakePearl;
              font-size: 22.081px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%;
              letter-spacing: 2.408px;
            }
          }
          & > span:nth-child(4) {
            border-radius: 12.041px;
            background: var(--Theme-Color, #fc1682);
            box-sizing: border-box;
            padding: 0 15px;
            color: var(--White, #fff);
            font-family: FakePearl;
            font-size: 58.98px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            i {
              color: var(--White, #fff);
              text-align: center;
              font-family: FakePearl;
              font-size: 28.095px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 44.952px */
            }
          }
        }
        & > div:nth-child(1) {
          border-radius: 20.068px;
          border: 2.007px solid var(--Theme-Color, #fc1682);
          background: var(--White, #fff);
          box-sizing: border-box;
          padding: 55px 15px 22px;
          & > span:nth-child(1) {
            color: var(--White, #fff);
            text-align: center;
            font-family: FakePearl;
            font-size: 30.669px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 49.071px */
            letter-spacing: 2.067px;
            border-radius: 12.041px;
            background: var(--Theme-Color, #fc1682);
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            box-sizing: border-box;
            padding: 0 15px;
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            font-family: FakePearl;
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%; /* 42.937px */
            letter-spacing: 2.067px;
          }
        }
        & > div:nth-child(2),
        & > div:nth-child(3) {
          margin-top: 20px;
          border-radius: 17.013px;
          border: 1.701px solid var(--Orange, #f90);
          background: var(--White, #fff);
          box-sizing: border-box;
          padding: 30px 15px 18px;
          & > span:nth-child(1) {
            color: var(--White, #fff);
            text-align: center;
            font-family: FakePearl;
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 41.6px */
            letter-spacing: 2.6px;
            border-radius: 10.208px;
            background: var(--Orange, #f90);
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            box-sizing: border-box;
            padding: 0 15px;
          }
          & > span:nth-child(3) {
            color: var(--Orange, #f90);
            font-family: FakePearl;
            font-size: 38.184px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
            text-align: center;
            i:nth-child(1) {
              color: var(--Orange, #f90);
              text-align: center;
              font-family: FakePearl;
              font-size: 24.095px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 44.952px */
            }
            i:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
              font-family: FakePearl;
              font-size: 22.081px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%;
              letter-spacing: 2.408px;
            }
          }
          & > span:nth-child(4) {
            border-radius: 12.041px;
            background: var(--Orange, #f90);
            box-sizing: border-box;
            padding: 0 15px;
            color: var(--White, #fff);
            font-family: FakePearl;
            font-size: 58.98px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            i {
              color: var(--White, #fff);
              text-align: center;
              font-family: FakePearl;
              font-size: 28.095px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 44.952px */
            }
          }
        }
        & > div:nth-child(4) {
          margin-top: 20px;
          border-radius: 17.013px;
          border: 1.701px solid var(--Orange, #f90);
          background: var(--White, #fff);
          box-sizing: border-box;
          padding: 30px 15px 18px;
          position: relative;
          & > span:nth-child(1) {
            position: relative;
            top: 0;
          }
          & > span:nth-child(4) {
            color: var(--Orange, #f90);
            background: transparent;
            i {
              font-size: 22.081px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%;
              letter-spacing: 2.408px;
            }
          }
        }
        & > div:nth-child(4)::before {
          content: '';
          background: url(https://static.cmereye.com/imgs/2024/12/5695ec6f720ab1f7.png)
            no-repeat;
          background-size: contain;
          width: 296px;
          height: 162px;
          position: absolute;
          top: -61%;
          left: 0%;
        }
      }
      & > a {
        color: var(--White, #fff);
        text-align: center;

        /* PC/SubHead-PC */
        font-family: FakePearl;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 13px 32px;
        border-radius: 100.806px;
        background: var(--Theme-Color, #fc1682);
        box-shadow: 1.925px 3.851px 32.924px 0px rgba(252, 22, 130, 0.5);
        width: fit-content;
        margin: 60px auto;
        position: relative;
      }
      & > a::before {
        content: '';
        position: absolute;
        top: -20px;
        right: -50%;
        width: 233px;
        height: 64px;
        background: url(https://static.cmereye.com/imgs/2024/12/a0961ad6ab44e4cf.png)
          no-repeat;
        background-size: contain;
      }
    }
  }
  .bp {
    margin-top: 9.1667vw;
    &-lists {
      max-width: 57.2917vw;
      margin: 3.125vw auto;
      &-in {
        padding: 0 1.9vw 4.9839vw;
        &-title {
          min-width: 8.5938vw;
          height: 2.0833vw;
          line-height: 2.0833vw;
          font-size: 1.0417vw;
          &::after {
            bottom: -2vw;
            border-top: 1.0417vw solid;
            border-left: 0.4167vw solid;
            border-right: 0.4167vw solid;
            border-bottom: 1.0417vw solid;
            border-color: var(--indexColor1) transparent transparent transparent;
          }
        }
        img {
          margin-top: 1.5625vw;
        }
      }
    }
  }
  .principle {
    &-topCon {
      font-size: 1.4583vw;
      margin-top: 1.5625vw;
    }
    &-in {
      margin-top: 2.0833vw;
      &-box {
        max-width: 24.0625vw;
        div {
          &:nth-of-type(1) {
            padding: 0 3.125vw;
            font-size: 1.8229vw;
            border-radius: 1.5625vw;
            filter: drop-shadow(0px 0.1929vw 0.3859vw rgba(252, 22, 130, 0.38));
          }
          &:nth-of-type(2) {
            margin-top: 3.2813vw;
            font-size: 1.4583vw;
            padding: 0 2.0833vw;
          }
        }
      }
    }
    &-bottomCon {
      margin-top: 4.4271vw;
      img {
        width: 1.875vw;
        height: 2.0833vw;
      }
      div {
        font-size: 1.8229vw;
        max-width: 46.4583vw;
        margin-right: 1.3542vw;
        margin-left: 2.2917vw;
      }
    }
    &-btn {
      margin-top: 1.5104vw;
    }
  }
  .differ {
    margin-top: 7.0833vw;
    &-context {
      margin-top: 2.0833vw;
      font-size: 1.4583vw;
    }
    &-lists {
      max-width: 65.1563vw;
      margin: 2.0833vw auto 0;
      &-in {
        &:not(:last-child) {
          margin-bottom: 0.7813vw;
        }
        &:nth-of-type(1) {
          & > div {
            min-height: 2.3438vw;
            font-size: 1.4583vw;
          }
        }
        & > div {
          font-size: 1.0417vw;
          min-height: 5.8333vw;
          &:nth-of-type(1) {
            border-radius: 3.125vw 0 0 3.125vw;
          }
          &:nth-of-type(2) {
            margin-left: 0.1302vw;
          }
          &:nth-of-type(3) {
            margin-left: 0.1302vw;
            border-radius: 0 3.125vw 3.125vw 0;
          }
        }
      }
    }
  }
  .aesthetics {
    margin-top: 5.625vw;
    &-in {
      margin-top: 2.0833vw;
      padding: 4.5833vw 0;
      background: linear-gradient(
        -99deg,
        rgba(252, 22, 130, 0.4) -0.55%,
        rgba(252, 22, 130, 0.28) -0.54%,
        rgba(255, 168, 198, 0) 99.3%
      );
    }
    &-swiper {
      padding-bottom: 0.5208vw;
      max-width: 78.75vw;
      .swiper-slide {
        padding: 0 1.5625vw;
        &-in {
          box-shadow: 0.2083vw 0.2083vw 0.3125vw rgba(255, 163, 158, 0.25),
            inset 1px -1px 0px #ffccc7;
          border-radius: 0.7813vw;
          min-height: 25.2604vw;
          &-title {
            font-size: 1.4583vw;
            margin-top: 2.0833vw;
          }
          &-text {
            padding: 0.9375vw 1.7708vw 0.9375vw;
            font-size: 0.9375vw;
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
            margin-bottom: 0.7813vw;
            img {
              margin-right: 0.7813vw;
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
            margin-bottom: 0.7813vw;
            padding: 0.4167vw 0.7813vw;
          }
          .context {
            font-size: 1.0417vw;
            padding: 0 0.7813vw;
          }
        }
        &-r {
          margin-left: 2.6042vw;
          img {
            width: 0.7813vw;
          }
        }
        &:nth-of-type(6) {
          .lastBox-b {
            margin-top: 0.7813vw;
          }
          .lastBox-t {
            img {
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
              margin-bottom: 0.6771vw;
              border-radius: 0.5208vw;
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
  .orthodonticsPage {
    padding: 90px 0;
  }
  .bp {
    margin-top: 94px;
    &-lists {
      &-in {
        width: 100%;
      }
    }
  }
  .aesthetics {
    margin-top: 90px;
    &-in {
      margin-top: 28px;
      padding: 44px 0;
    }
    &-swiper {
      flex-direction: column;
      padding-bottom: 0;
      .swiper-slide {
        width: 100%;
        &:not(:first-child) {
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
        &:nth-of-type(6) {
          margin-top: 15px;
          width: 100%;
          .lastBox-t {
            img {
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
  .principle {
    padding: 0 30px;
    &-topCon {
      font-size: 16px;
      font-weight: 500;
    }
    &-in {
      flex-direction: column;
      &-box {
        &:nth-of-type(2) {
          margin-left: 0;
          margin-top: 44px;
        }
        div {
          &:nth-of-type(1) {
            font-size: 20px;
            padding: 3px 50px;
          }
          &:nth-of-type(2) {
            font-size: 20px;
            margin-top: 43px;
            padding: 0 30px;
          }
        }
      }
    }
    &-bottomCon {
      margin-top: 60px;
      img {
        width: 20px;
        height: 22px;
      }
      div {
        font-size: 16px;
        margin-right: 18px;
        margin-left: 17px;
      }
    }
    &-btn {
      margin-top: 44px;
      // a{
      //   font-size: 20px;
      //   padding: 5px 45px;
      // }
    }
  }
  .differ {
    &-context {
      font-size: 16px;
      white-space: pre-wrap;
    }
    &-lists {
      padding: 0 30px;
      &-in {
        &:not(:last-child) {
          margin-bottom: 4px;
        }
        & > div {
          font-size: 12px;
          box-sizing: border-box;
          min-height: auto;
          &:nth-of-type(1) {
            border-radius: 0;
            // margin-left: 1px;
            padding: 20px 10px;
            font-size: 16px;
            width: auto;
            flex: 1;
            text-align: center;
          }
          &:nth-of-type(2) {
            padding: 20px 14px;
            margin-left: 1px;
            width: calc((127 / 315) * 100%);
          }
          &:nth-of-type(3) {
            border-radius: 0;
            margin-left: 1px;
            padding: 20px 14px;
            width: calc((127 / 315) * 100%);
          }
        }
        &:nth-of-type(1) {
          & > div {
            font-size: 16px;
            padding: 0;
          }
        }
        &:nth-of-type(2) {
          & > div {
            &:nth-of-type(1) {
              border-radius: 20px 0 0 0;
            }
            &:nth-of-type(3) {
              border-radius: 0 20px 0 0;
            }
          }
        }
        &:last-child {
          & > div {
            &:nth-of-type(1) {
              border-radius: 0 0 0 20px;
            }
            &:nth-of-type(3) {
              border-radius: 0 0 20px 0;
            }
          }
        }
      }
    }
  }
  .traffic {
    margin-top: 30px;
    & > div:nth-child(2) {
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      font-family: FakePearl;
      font-size: 5.128vw;
      font-style: normal;
      font-weight: 600;
      line-height: 160%; /* 32px */
      margin: 1.28vw auto 3.58vw;
    }
    .port-list {
      display: flex;
      flex-direction: column;
      max-width: 100vw;
      box-sizing: border-box;
      padding: 0 4.015vw;
      & > div {
        width: 100%;
        max-width: 100vw;
        box-sizing: border-box;
        & > div:nth-child(1) {
          width: 4.872vw !important;
          border-radius: 2.564vw 0px 0px 2.564vw;
          background: var(--Theme-Color, #fc1682);
        }
        & > div:nth-child(2) {
          padding: 5.128vw 2.05vw !important;
          gap: 0 2.05vw;
          & > span:nth-child(1) {
            width: 4.35vw;
            height: 6.15vw;
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
            font-family: FakePearl;
            font-size: 4.015vw;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
            font-family: FakePearl;
            font-size: 4.015vw;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
          }
          & > span:nth-child(3) {
            width: 11.5vw;
            height: 6.15vw;
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          & > span:nth-child(4) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
            font-family: FakePearl;
            font-size: 4.015vw;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
            i {
              color: var(--Theme-Color, #fc1682) !important;
              font-size: 4.015vw !important;
              font-style: normal;
            }
            img {
              width: 4.87vw;
              height: 4.87vw;
              object-fit: contain;
            }
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > span:nth-child(4) {
            i {
              color: #00aeff !important;
            }
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          background: var(--Theme-Color, #fc1682);
        }
        & > div:nth-child(2) {
          border-radius: 0px 2.564vw 2.564vw 0px;
          border: 2px solid var(--Theme-Color, #fc1682);
          background: var(--White, #fff);
          & > span:nth-child(4) {
            i:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d) !important;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          background: var(--Blue-Deep, #00aeff);
        }
        & > div:nth-child(2) {
          border-radius: 0px 2.564vw 2.564vw 0px;
          border: 2px solid var(--Blue-Deep, #00aeff);
          background: var(--White, #fff);
          padding: 5.128vw 0px 5.128vw 2.05vw !important;
          & > span:nth-child(4) {
            display: flex;
            align-items: center;
            i {
              color: #00aeff !important;
            }
          }
        }
      }
    }
    .port-combo_mb {
      & > div:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        box-sizing: border-box;
        padding: 0 3.846vw;
        margin: 6.15vw auto 17.948vw;
        gap: 0 1.28vw;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          gap: 9.48vw 0;
          & > div:nth-child(1) {
            border-radius: 2.892vw;
            border: 1.128px solid var(--Theme-Color, #fc1682);
            background: var(--White, #fff);
            position: relative;
            box-sizing: border-box;
            padding: 5.128vw 1.79vw 2.307vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            & > span:nth-child(1) {
              position: absolute;
              top: -10%;
              left: 50%;
              transform: translateX(-50%);
              width: max-content;
              box-sizing: border-box;
              padding: 0 9px;
              color: var(--White, #fff);
              text-align: center;
              font-family: FakePearl;
              font-size: 4.015vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 19.2px */
              letter-spacing: 1.2px;
              border-radius: 6px;
              background: var(--Theme-Color, #fc1682);
            }
            & > span:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: center;
              font-family: FakePearl;
              font-size: 4.015vw;
              font-style: normal;
              font-weight: 400;
              line-height: 120%; /* 14.4px */
              letter-spacing: 1.2px;
            }
            & > span:nth-child(3) {
              color: var(--Theme-Color, #fc1682);
              font-family: FakePearl;
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              text-align: center;
              i:nth-child(1) {
                color: var(--Theme-Color, #fc1682);
                text-align: center;
                font-family: FakePearl;
                font-size: 4.015vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
              i:nth-child(2) {
                color: var(--Theme-Color, #fc1682);
                text-align: center;
                font-family: FakePearl;
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
            }
            & > span:nth-child(4) {
              border-radius: 1.58vw;
              background: var(--Theme-Color, #fc1682);
              color: var(--White, #fff);
              text-align: center;
              font-family: FakePearl;
              font-size: 3.58vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 22.4px */
              box-sizing: border-box;
              padding: 0 3.33vw;
              color: var(--White, #fff);
              font-family: FakePearl;
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              i {
                color: var(--White, #fff);
                font-family: FakePearl;
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%;
              }
            }
          }
          & > div:nth-child(2) {
            position: relative;
          }
          & > div:nth-child(2)::after {
            content: '';
            width: 25.64vw;
            height: 8.97vw;
            background: url(https://static.cmereye.com/imgs/2024/12/fd7b50d5dae7aead.png)
              no-repeat;
            background-size: contain;
            bottom: -30%;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
          }
        }
        & > div:nth-child(2) {
          gap: 7.69vw 0;
          display: flex;
          flex-direction: column;
          margin-top: 2.564vw;
          & > div {
            border-radius: 2.564vw;
            border: 1px solid var(--Orange, #f90);
            background: var(--White, #fff);
            position: relative;
            box-sizing: border-box;
            padding: 5.128vw 1.79vw 2.3vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            & > span:nth-child(1) {
              position: absolute;
              top: -10%;
              left: 50%;
              transform: translateX(-50%);
              width: max-content;
              box-sizing: border-box;
              padding: 0 2.3vw;
              color: var(--White, #fff);
              text-align: center;
              font-family: FakePearl;
              font-size: 3.07vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 19.2px */
              letter-spacing: 1.2px;
              border-radius: 6px;
              background: var(--Orange, #f90);
            }
            & > span:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: center;
              font-family: FakePearl;
              font-size: 3.07vw;
              font-style: normal;
              font-weight: 400;
              line-height: 120%; /* 14.4px */
              letter-spacing: 1.2px;
            }
            & > span:nth-child(3) {
              color: var(--Orange, #f90);
              font-family: FakePearl;
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              text-align: center;
              i:nth-child(1) {
                color: var(--Orange, #f90);
                text-align: center;
                font-family: FakePearl;
                font-size: 3.07vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
              i:nth-child(2) {
                color: var(--Orange, #f90);
                text-align: center;
                font-family: FakePearl;
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
            }
            & > span:nth-child(4) {
              border-radius: 6px;
              background: var(--Orange, #f90);
              color: var(--White, #fff);
              text-align: center;
              font-family: FakePearl;
              font-size: 3.58vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 22.4px */
              box-sizing: border-box;
              padding: 0 3.33vw;
              color: var(--White, #fff);
              font-family: FakePearl;
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              i {
                color: var(--White, #fff);
                font-family: FakePearl;
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%;
              }
            }
          }
        }
        & > div:nth-child(3) {
          box-sizing: border-box;
          margin-top: 2.564vw;
          & > div:nth-child(2) {
            padding: 2.3vw 2.05vw;
            border-radius: 2.564vw;
            border: 1px solid var(--Orange, #f90);
            background: var(--White, #fff);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            & > span:nth-child(3) {
              width: 10.07vw;
              height: 8.97vw;
              display: flex;
              align-items: center;
              justify-content: center;
              & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
      & > a {
        border-radius: 4.1vw;
        background: var(--Theme-Color, #fc1682);

        /* Pink Glory */
        box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);

        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 1.79vw 4.358vw;
        position: relative;
      }
      & > a::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2024/12/ee3dea0e1c138a64.png)
          no-repeat;
        background-size: contain;
        width: 25.64vw;
        height: 12.8vw;
        position: absolute;
        top: -90%;
        left: 70%;
      }
    }
  }
}
</style>