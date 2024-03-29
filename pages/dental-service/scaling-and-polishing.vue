<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp } from '~/assets/js/common'
const appState = useAppState()
appState.setDentistryService('scaling-and-polishing-test')
useHead({
  title: '洗牙｜牙科服務',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健提供洗牙服務，利用牙科儀器徹底清洗牙齒污垢，使牙齒回復平滑，減少細菌滋生的機會。定期進行洗牙可以有效去除牙齒上的牙石和牙菌膜，防止牙齒變色、影響牙齦和骨骼健康、避免蛀牙或牙齒脫落。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '洗牙 洗牙費用 洗牙服務 洗牙費用 洗牙價錢 深層洗牙價錢深層洗牙 定期洗牙 洗牙推薦 牙齒清潔 清除牙石 牙菌膜  牙石 菌膜愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/03/6fcd8f2992e9550b.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/03/98983f4c7178e454.jpg',
  pageName: 'scaling-and-polishing-test',
  pcText: [
    '定期洗牙，全方位清潔口腔盲點',
    '愛牙愛己，愛康健細心守護您牙齒健康',
  ],
  mbText: ['定期洗牙', '全方位清潔口腔盲點'],
}

const orthodonticsIntroduceData = {
  title: '洗牙服務',
  content:
    '提供洗牙和深層洗牙服務，定期洗牙有效去除\n牙齒上的牙垢、牙菌膜和牙結石，更能預防牙\n周病或其他口腔問題。\n\n建議每半年至一年進行一次洗牙，為您的口腔\n健康護航。',
  mbImg: 'https://static.cmereye.com/imgs/2023/10/6caab98f1d6e048f.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/10/cc2d7e8addcc8f94.jpg',
  tabNavName: 'pages.dental-service.scaling-and-polishing.introduce.tabNavName',
  pageName: 'scaling-and-polishing-test',
}

const introduceJY = {
  title: '洗牙服務',
  content: '提供洗牙和深層洗牙服務，定期洗牙有效去除\n牙齒上的牙垢、牙菌膜和牙結石，更能預防牙\n周病或其他口腔問題。\n\n建議每半年至一年進行一次洗牙，為您的口腔\n健康護航。',
  mbImg: 'https://static.cmereye.com/imgs/2023/10/6caab98f1d6e048f.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/02/dbe0ada69cd40f64.png',
}

const reasonData = {
  title: '為何要定期洗牙？',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/10/c064878ac3598d1d.jpg',
      context: '預防牙周病',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/50a1890059584dcd.jpg',
      context: '防止蛀牙',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/f69af3e0ebae289f.jpg',
      context: '改善口氣及牙色',
    },
  ],
}

// const stepData = {
//   title: '洗牙過程',
//   remark:
//     '由於洗牙時會觸碰到牙肉的發炎位置，因此可能會導致牙齦出血或輕微痺痛感。特別是一些從未或相隔很久沒有洗牙的人士，不適感一般會在洗牙後的2至3天後逐漸消失（患有敏感牙齒或牙周病的人士或需更長時間）。如情況持續出現，應立即聯絡醫護人員。',
//   stepLists: [
//     [
//       {
//         title: 'Step 1',
//         text: '利用超聲波洗牙工具，清除牙石及牙菌膜',
//       },
//       {
//         title: 'Step 2',
//         text: '利用刮牙石器去除細小牙石',
//       },
//     ],
//     [
//       {
//         title: 'Step 3',
//         text: '利用牙科用浮石粉拋光打磨或特製混合物料高速噴洗牙齒表面，去除牙漬及保持牙齒平滑',
//       },
//       {
//         title: 'Step 4',
//         text: '利用氟化物鞏固琺瑯質，強化牙齒',
//       },
//     ],
//   ],
//   pageName: 'scaling-and-polishing',
// }

const problemData = {
  title: 'pages.dental-service.scaling-and-polishing.problem.title',
  lists: [
    // {
    //   Q: 'pages.dental-service.scaling-and-polishing.problem.lists[0].Q',
    //   A: 'pages.dental-service.scaling-and-polishing.problem.lists[0].A'
    // },
    // {
    //   Q: 'pages.dental-service.scaling-and-polishing.problem.lists[1].Q',
    //   A: 'pages.dental-service.scaling-and-polishing.problem.lists[1].A'
    // },
    {
      Q: '為什麼會出現牙石？',
      A: '牙石的形成主要源於口腔內的細菌、食物殘渣以及口水相互作用，它們會在牙齒表面、牙縫和牙齦間形成一層牙菌膜。若牙菌膜未能仔細清除，便會導致牙菌膜上積聚的鈣質形成牙石。建議每半年進行一次洗牙，以保持口腔衛生。',
    },
    {
      Q: '為何洗牙後會感到牙齦不適或疼痛？',
      A: '洗牙後的幾天內可能會伴隨著口腔不適或牙齦出血的症狀，這是因為清除了牙齒的上的牙垢、牙結石及食物殘渣後，原本熟悉的口腔環境有所改變，客人初期可能需要一段時間適應。只要保持良好口腔衛生，這些現象會逐漸消失，牙齦也將恢復至健康狀態。',
    },
    {
      Q: '為何洗牙後會出現牙齒敏感或牙縫變大的情況？',
      A: '在洗牙的過程中，牙醫會清除牙齒表面或牙縫間的牙菌膜和牙結石，使原本被覆蓋的牙根會暴露出來，增加對冷熱或刺激性食物的敏感度。同時，原本受感染的牙肉會逐漸消腫，進而使牙縫變得明顯。然而，牙齒敏感情況通常會在洗牙後大約兩至三天內緩解，期間建議避免進食過於冷熱酸辣的食物，並考慮使用防敏感牙膏。如敏感症狀持續加劇，建議諮詢牙科醫生的專業意見。',
    },
    {
      Q: '洗牙後應如何保持口腔清潔？',
      A: '洗牙後，牙醫或牙齒衛生員會指導病人如何正確地保持口腔清潔，並提醒病人需要注意特別清潔的地方，並示範如何有效地使用口腔護理用品，如牙刷、牙線及牙縫刷。在某些情況下，病人需要使用抗菌漱口水或暖鹽水進一步清潔口腔，但不建議持續使用超過兩星期。',
    },
  ],
}

const differenceData = {
  title: '洗牙技術及過程的區別？',
  tables: [
    {
      a: '',
      b: '超聲波洗牙',
      c: '含鹽洗牙',
      d: '無鹽洗牙',
    },
    {
      a: '所需時間',
      b: '20 分鐘',
      c: '30分鐘',
      d: '30 分鐘',
    },
    {
      a: '菌斑染色定位',
      b: 'n',
      c: 'n',
      d: 'y',
    },
    {
      a: '超聲波技術',
      b: 'y',
      c: 'y',
      d: 'y',
    },
    {
      a: '噴砂技術',
      b: 'n',
      c: '含鹽',
      d: '無鹽',
    },
    {
      a: '氟化物',
      b: 'y',
      c: 'y',
      d: 'y',
    },
    {
      a: '拋光護理',
      b: 'y',
      c: 'y',
      d: 'y',
    },
  ],
}

const chargeData = {
  title: '項目收費詳情',
  tables: [
    {
      a: '服務',
      b: '價格',
    },
    {
      a: '超聲波洗牙',
      b: '¥180',
      c: '',
    },
    {
      a: '菌斑導向專業洗牙（含鹽）',
      b: '¥168',
      c: '原價 ¥350',
    },
    {
      a: '菌斑導向專業洗牙（無鹽）',
      b: '¥550',
      c: '',
    },
  ],
}
const careData = {
  title: '洗牙後注意事項',
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/10/9ee1140fe832c40d.png',
      text: '避免過度清潔口腔',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/29723aa73549d385.png',
      text: '注意清潔牙縫',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/fa97affc4ee443a6.png',
      text: '避免吃冰冷、酸、甜的食物',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/b00b6fbbd953800a.png',
      text: '避免喝酒和吸煙',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/b681fad6412d727b.png',
      text: '使用防敏感牙膏',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/678fdab4c186e0d6.png',
      text: '定期覆診檢查',
    },
  ],
}
const stepData = {
  title: '洗牙6步曲',
  lists: [
    {
      title: '第1步',
      img: 'https://static.cmereye.com/imgs/2024/02/6731dba434edd53f.jpg',
      name: '口腔檢查',
      context: '洗牙前，醫師會對全口的口腔狀況進行檢查',
    },
    {
      title: '第2步',
      img: 'https://static.cmereye.com/imgs/2024/02/c8aa8929874fd251.jpg',
      name: '消毒',
      context: '使用漱口水漱口，此過程能夠降低唾液中細菌的含量，從而減少細菌感染',
    },
    {
      title: '第3步',
      img: 'https://static.cmereye.com/imgs/2024/02/ea678899b066c7cb.jpg',
      name: '牙石去除',
      context: '以手工或超音波的方式進行去除牙結石',
    },
    {
      title: '第4步',
      img: 'https://static.cmereye.com/imgs/2024/02/e134fd577d7f9467.jpg',
      name: '噴砂',
      context: '透過特製的鹽加上高壓水為牙齒做進一步的清洗',
    },
    {
      title: '第5步',
      img: 'https://static.cmereye.com/imgs/2024/02/58ba4fa2a7ff9ffa.jpg',
      name: '拋光',
      context: '透過拋光可以使牙齒光亮，牙面更光滑，從而減輕牙菌斑及色素的附著和牙石的生成',
    },
    {
      title: '第6步',
      img: 'https://static.cmereye.com/imgs/2024/02/c881f0c09986279f.jpg',
      name: '牙周保護',
      context: '洗牙完成後，我們為牙齒周邊塗抹藥物進行牙肉保護',
    }
  ],
}
const doctorData = {
  title: '專業醫療團隊',
  lists: [
  {
    id: '101',
    name: '曾紅艷',
    job: '主任醫生',
    addressType: '101',
    addressname: '羅湖區',
    text: '牙潔治技術、各種牙周疾病的專業治療及手術治療（翻瓣術及牙周引導骨組織再造術、齦切除術）以及種植體周圍感染疾病的治療。',
    img: 'https://static.cmereye.com/imgs/2024/02/50b761413772724d.png'
  },
  {
    id: '102',
    name: '李洪偉',
    job: '醫生',
    addressType: '101',
    addressname: '羅湖區',
    text: '牙齒美容修復，各類牙列缺損的固定及活動義齒的修復、鑄造支架式可摘局部義齒、 數字化修復、種植上部義齒修復等。在口腔數字化修復、口腔色度學、口腔仿生材料等領域進行過深入研究，成績顯著。',
    img: 'https://static.cmereye.com/imgs/2024/02/2f77790cc4d81a82.png'
  },
  {
    id: '103',
    name: '周小明',
    job: '院長',
    addressType: '102',
    addressname: '福田區',
    text: '各類口腔疾病診斷與治療、熟練開展微創種植、即拔即種即刻修復等前沿技術，在各類口腔複雜案例多學科聯合診療方面有獨到的診療思路及技術經驗，積累案例數千例。',
    img: 'https://static.cmereye.com/imgs/2024/02/e88238abad82c427.png'
  },
  {
    id: '104',
    name: '曹小蘭',
    job: '醫生',
    addressType: '102',
    addressname: '福田區',
    text: '牙周病系統性治療、輕中重度四環素牙、牙體牙髓病治療、牙體缺損修復、根管治療及其他各種疑難著色牙的美白治療。',
    img: 'https://static.cmereye.com/imgs/2024/02/fdb9c21dfd4b91d4.png'
  },
  {
    id: '105',
    name: '趙董博',
    job: '醫生',
    addressType: '103',
    addressname: '南山區',
    text: '牙周病的診斷及序列治療，前後牙的美學樹脂充填，牙體牙髓疾病及根尖週疾病的診治，前牙貼面及後牙嵌體、全冠的修復，口腔常見多發疾病的預防及保健。',
    img: 'https://static.cmereye.com/imgs/2024/02/45665cefc05c177a.png'
  },
  {
    id: '106',
    name: '朱艷秀',
    job: '醫生',
    addressType: '104',
    addressname: '寶安區',
    text: '各類牙周、牙髓疾病的診斷治療，牙體缺損的修復、各類牙齒的外科拔除。',
    img: 'https://static.cmereye.com/imgs/2024/02/1551fb960998a5a8.png'
  },
  {
    id: '107',
    name: '韋秋紅',
    job: '院長',
    addressType: '105',
    addressname: '龍華區',
    text: '複雜修復設計及齲病、牙體牙髓和牙周病的治療，尤其在美學修復有較深的造詣，熟練運用MICD微創牙科及DSD數字微笑設計理念。',
    img: 'https://static.cmereye.com/imgs/2024/02/07f09b9fd1ccf36f.png'
  }
]
}
</script>

<template>
  <div>
    <PageHeader :header-config="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">
        {{ $t('pages.dental-service.title') }}
      </div>
      <div class="tabNav pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院"
          ><span>{{ $t('pages.index.title') }}</span></nuxt-link
        >
        <nuxt-link :to="'/dental-service'" :title="$t('pages.dental-service.title')" :alt="('pages.dental-service.title')"
          ><span>{{ $t('pages.dental-service.title') }}</span></nuxt-link
        >
        <span :title="$t(orthodonticsIntroduceData.tabNavName)">{{ $t(orthodonticsIntroduceData.tabNavName) }}</span>
      </div>
      <!-- <ServiceIntroduce :introduce-data="orthodonticsIntroduceData" /> -->
      <div class="reason">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            {{ reasonData.title }}
          </div>
        </div>
        <div class="reason-lists">
          <div
            v-for="(item, index) in reasonData.reasonLists"
            :key="index"
            class="reason-lists-item"
          >
            <div class="image">
              <img :src="item.img" alt="" />
              <!-- <div>
                0{{index+1}}
              </div> -->
            </div>
            <div class="text">
              {{ item.context }}
            </div>
          </div>
        </div>
      </div>
      <div class="introduceJY">
        <ServiceIntroduceJY :introduceData="introduceJY" />
      </div>
      <div class="difference">
        <div class="dentistryServices-title difference-title">
          <div class="dentistryServices-title-in bb difference-title-in">
            {{ differenceData.title }}
          </div>
        </div>
        <div class="difference-tables">
          <div
            v-for="(differenceItem, differenceIndex) in differenceData.tables"
            :key="differenceIndex"
            class="difference-tables-item"
          >
            <div class="item-in">{{ differenceItem.a }}</div>
            <div class="item-in">
              <div v-if="differenceItem.b === 'n'" class="item-in-n">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M3 27L27 3"
                    stroke="#FC1682"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3 27L27 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M27 27L3 3"
                    stroke="#FC1682"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M27 27L3 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div v-else-if="differenceItem.b === 'y'" class="item-in-y">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="29"
                  viewBox="0 0 37 29"
                  fill="none"
                >
                  <path
                    d="M3 15L13.425 26L34 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div v-else>{{ differenceItem.b }}</div>
            </div>
            <div class="item-in">
              <div v-if="differenceItem.c === 'n'" class="item-in-n">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M3 27L27 3"
                    stroke="#FC1682"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3 27L27 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M27 27L3 3"
                    stroke="#FC1682"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M27 27L3 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div v-else-if="differenceItem.c === 'y'" class="item-in-y">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="29"
                  viewBox="0 0 37 29"
                  fill="none"
                >
                  <path
                    d="M3 15L13.425 26L34 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div v-else>{{ differenceItem.c }}</div>
            </div>
            <div class="item-in">
              <div v-if="differenceItem.d === 'n'" class="item-in-n">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M3 27L27 3"
                    stroke="#FC1682"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3 27L27 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M27 27L3 3"
                    stroke="#FC1682"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M27 27L3 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div v-else-if="differenceItem.d === 'y'" class="item-in-y">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="29"
                  viewBox="0 0 37 29"
                  fill="none"
                >
                  <path
                    d="M3 15L13.425 26L34 3"
                    stroke="#4C4C4C"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div v-else>{{ differenceItem.d }}</div>
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
        </div>
      </div>
    </div>
      <div class="charge">
        <div class="dentistryServices-title charge-title">
          <div class="dentistryServices-title-in bb charge-title-in">
            {{ chargeData.title }}
          </div>
        </div>
        <div class="charge-tables">
          <div class="charge-tables-in">
            <div
              v-for="(chargeItem, chargeIndex) in chargeData.tables"
              :key="chargeIndex"
              class="charge-tables-item"
            >
              <div class="item-in">{{ chargeItem.a }}</div>
              <div class="item-in">
                <span>{{ chargeItem.b }}</span>
                <span>{{ chargeItem.c }}</span>
              </div>
            </div>
          </div>
          <!-- <div class="charge-rightBox">
            <div class="a">二人同行優惠</div>
            <div class="b">¥<span>320</span>/2次</div>
            <div class="c">原價¥700/2次</div>
          </div> -->
        </div>
        <div class="charge-text">
          <span>把握限時優惠</span>
          <span>，</span>
          <span>現在就來預約我們的洗牙服務吧！</span>
        </div>
        <div class="charge-btn">
          <!-- <PageAnimBtnTypeTwo :str="'預約檢查及諮詢'" /> -->
          <PageAnimBtnTypeTwo :str="'預約檢查及諮詢'" />
        </div>
      </div>
      <div class="Medical_sterilization_equipment">
        <div class="dentistryServices-title plague-title">
          <div class="dentistryServices-title-in bb plague-title-in">醫療滅菌設備</div>
        </div>
        <div class="Medical_sterilization_equipment-in pageCon">
          <div class="Medical_sterilization_equipment-in-box">
            <img src="https://static.cmereye.com/imgs/2024/02/30f4f16be7ec0112.jpg" alt="">
            <div>
              <span>瑞士EMS超音波科技採用光學數位掃描，高頻聲納定位，作用於清潔牙結石，預防牙周病和蛀牙。</span>
            </div>
          </div>
          <div class="Medical_sterilization_equipment-in-box">
            <div>
              <span>以「一醫一診室」、「一機一用一消毒」的無菌治療模式，避免交叉感染機會。</span>
            </div>
            <img src="https://static.cmereye.com/imgs/2024/02/166a2c06cc4acf88.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="doctorTeam">
        <ServiceSpecializedTeam :doctorData="doctorData" />
      </div>
      <div class="care">
        <div class="dentistryServices-title care-title">
          <div class="dentistryServices-title-in bb care-title-in">
            {{ careData.title }}
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
      <ServiceProblem :problem-data="problemData" />
      <serviceCard />
      <NewAddress />
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
.introduceJY{
  margin-top: 140px;
}
.reason {
  margin-top: 188px;
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 116px auto 0;
    &-item {
      padding: 0 45px;
      .image {
        position: relative;
        img {
          width: 100%;
        }
        div {
          position: absolute;
          top: -29px;
          left: -13px;
          width: 110px;
          height: 113px;
          color: #fff;
          text-align: center;
          font-size: 50px;
          font-style: normal;
          font-weight: 900;
          background: url(https://static.cmereye.com/imgs/2023/10/d9a06b8771bc917a.png)
            no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .text {
        color: #fc1682;
        font-size: 35px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%;
        text-align: center;
        margin-top: 35px;
      }
    }
  }
}
.difference {
  margin-top: 188px;
  &-tables {
    width: 100%;
    max-width: 1244px;
    margin: 54px auto 0;
    border-radius: 60px;
    overflow: hidden;
    &-item {
      display: flex;
      width: 100%;
      height: 92px;
      margin-bottom: 8px;
      .item-in {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--indexColor2);
        color: #4d4d4d;
        font-size: 20px;
        font-weight: 600;
        &:nth-of-type(1) {
          color: var(--indexColor);
          font-weight: 900;
        }
        &:nth-of-type(3) {
          font-size: 28px;
          font-weight: 900;
          background: #fdd3e3;
        }
        &:not(:last-child) {
          margin-right: 8px;
        }
      }
      &:nth-of-type(1) {
        height: 70px;
        margin-bottom: 0;
        .item-in {
          background: var(--indexColor);
          color: #fff;
          font-size: 28px;
          &:nth-of-type(3) {
            font-size: 34px;
            background: var(--indexColor1);
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.charge {
  margin-top: 206px;
  &-tables {
    width: 100%;
    max-width: 1491px;
    margin: 54px auto 0;
    position: relative;
    &-in {
      width: auto;
      max-width: 1091px;
      margin: 0 200px;
      border-radius: 60px;
      overflow: hidden;
    }
    &-item {
      display: flex;
      width: 100%;
      height: 130px;
      margin-bottom: 8px;
      .item-in {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: var(--indexColor2);
        color: #4d4d4d;
        font-size: 24px;
        font-weight: 600;
        span {
          font-size: 28px;
          font-weight: 700;
          color: var(--indexColor);
          &:nth-of-type(2) {
            color: #4c4c4c;
            font-size: 16px;
            position: relative;
            &::before {
              content: '';
              width: 100%;
              height: 1px;
              background: #4c4c4c;
              position: absolute;
              top: 55%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(5deg);
            }
          }
        }
        &:nth-of-type(1) {
          flex: 2;
        }
        &:not(:last-child) {
          margin-right: 8px;
        }
      }
      &:nth-of-type(1) {
        height: 70px;
        margin-bottom: 0;
        .item-in {
          color: #fff;
          font-size: 28px;
          font-weight: 700;
          background: var(--indexColor);
          span {
            color: #fff;
          }
        }
      }
      &:nth-of-type(3) {
        .item-in {
          background: #fdd3e3;
          font-size: 28px;
          font-weight: 900;
          span {
            font-size: 37px;
            line-height: 1.2;
            &:nth-of-type(2) {
              color: #4c4c4c;
              font-size: 16px;
              position: relative;
              &::before {
                content: '';
                width: 100%;
                height: 1px;
                background: #4c4c4c;
                position: absolute;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(5deg);
              }
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-text {
    color: var(--indexColor1);
    font-size: 35px;
    font-weight: 700;
    line-height: 160%;
    text-align: center;
    margin: 54px auto 34px;
  }
  &-btn {
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }
 
}
.doctorTeam{
  margin-top: 140px;
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
  padding: 61px 0 99px;
  margin-top: 140px;
  &-in {
    width: 100%;
    max-width: calc(1444px + 122px);
    margin: 0 auto;
  }
  &-lists {
    margin-top: 98px;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-in {
      display: flex;
      align-items: center;
      margin-bottom: 92px;
      padding: 0 calc((61 / ( 1444 + 122 )) * 100%);
      width: calc(100% / 3);
      &:nth-of-type(4),
      &:nth-of-type(5) {
        margin-bottom: 0;
      }
      &:nth-of-type(6) {
        .step-lists-in-l{
          .image {
            &::after{
              display: none;
            }
          }
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
          position: relative;
            &::after{
              content: '';
              position: absolute;
              right: -17%;
              top: 50%;
              transform: translateY(-50%);
              background: url(@/assets/images/icon_12.png);
              background-size: 100% 100%;
              width: 16px;
              height: 30px;
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
        display: none;
        img {
          width: 15px;
          height: auto;
        }
      }
      &:nth-of-type(6) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        .lastBox-t {
          // display: flex;
          // align-items: flex-end;
          & > div {
            color: var(--indexColor1);
            font-size: 55px;
            font-weight: 700;
            text-align: center;
            span {
              font-size: 85px;
              line-height: 120%;
              display: block;
            }
            &:nth-of-type(1) {
              display: flex;
              justify-content: center;
              width: 100%;
              margin-bottom: 15px;
            }
          }
        }
        .lastBox-b {
          margin-top: 20px;
          .bigBan{
            font-size: 44px;
            line-height: 1.2;
          }
        }
      }
    }
  }
}
.care {
  margin-top: 206px;
  padding-bottom: 108px;
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
            background: #fff1f0;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 70%;
              max-height: 70%;
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
        margin-top: 60px;
      }
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              background: #fee6f1;
            }
          }
        }
      }
    }
  }
}
.Medical_sterilization_equipment{
  // background: ;
  background: linear-gradient(
    90deg,
    rgba(255, 241, 240, 0) 0%,
    rgba(255, 241, 240, 0.7) 12.5%,
    rgba(255, 241, 240, 0.7) 81.99%,
    rgba(255, 241, 240, 0) 100%
  );
  margin-top: 140px;
  padding: 50px 0 10px;
  &-in{
    margin-top: 60px;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    &-box{
      width: 100%;
      max-width: 1205px;
      display: flex;
      margin-bottom: 40px;
      img{
        width: calc(696 / 1205 * 100%);
        border-radius: 20px;
      }
      &>div{
        font-size: 28px;
        line-height: 160%;
        color: #fff;
        margin-top: calc(50 / 1205 * 100%);
        display: inline-block;
        height: max-content;
        text-align: justify;
        border-radius: 20px;
        position: relative;
        span{
          position: relative;
          z-index: 1;
        }
        &::after{
          content: '';
          position: absolute;
          display: block;
          top: 0;
          width: calc(100% + 30px);
          height: 100%;
          z-index: 0;
          border-radius: 20px;
        }
      }
      &:nth-of-type(1){
        &>div{
          padding: 30px 30px 30px 0;
          &::after{
            background: var(--indexColor1);
            left: -30px;
          }
        }
      }
      &:nth-of-type(2){
        &>div{
          padding: 30px 0 30px 30px;
          &::after{
            background: #00AEFF;
            right: -30px;
          }
        }
      }
    }
  }
}
// @media (min-width: 768px) and (max-width: 1300px) {
//   .step {
//     &-lists {
//       &-in{
//         &:nth-of-type(6) {
//           .lastBox-t {
//             &>div{
//               font-size: 35px;
//               span{
//                 font-size: 60px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-width: 768px) and (max-width: 1200px) {
//   .reason {
//     &-lists {
//       &-item {
//         .image {
//           div {
//             font-size: 4vw;
//             width: 9vw;
//             height: calc(9vw + 3px);
//             background-size: 100% 100%;
//           }
//         }
//         .text {
//           font-size: 3vw;
//         }
//       }
//     }
//   }
//   .charge {
//     &-tables {
//       &-in {
//         margin: 0 150px;
//       }
//     }
//   }
//   .step {
//     &-lists {
//       &-in{
//         width: calc(100% / 2);
//       }
//     }
//   }
// }
// @media (min-width: 768px) and (max-width: 1100px) {
//   .step {
//     &-lists {
//       &-in{
//         // padding: 0 calc((61 / ( 1444 + 122 )) * 100%);
//         &-l {
//           .image{
//             &::after{
//               right: -10%;
//             }
//           }
//         }
//       }
//     }
//   }
// }
@media (min-width: 768px) and (max-width: 1920px) {
  .introduceJY{
    margin-top: 7.2917vw;
  }
  .reason {
    margin-top: 9.7917vw;
    &-lists {
      max-width: 86.25vw;
      margin: 6.0417vw auto 0;
      &-item {
        padding: 0 2.3438vw;
        .image {
          div {
            top: -1.5104vw;
            left: -0.6771vw;
            width: 5.7292vw;
            height: 5.8854vw;
            font-size: 2.6042vw;
          }
        }
        .text {
          font-size: 1.8229vw;
          margin-top: 1.8229vw;
        }
      }
    }
  } 
  .difference {
    margin-top: 9.7917vw;
    &-tables {
      max-width: 64.7917vw;
      margin: 2.8125vw auto 0;
      border-radius: 3.125vw;
      &-item {
        height: 4.7917vw;
        margin-bottom: .4167vw;
        .item-in {
          font-size: 1.0417vw;
          &:nth-of-type(3) {
            font-size: 1.4583vw;
          }
          &:not(:last-child) {
            margin-right: .4167vw;
          }
        }
        &:nth-of-type(1) {
          height: 3.6458vw;
          .item-in {
            font-size: 1.4583vw;
            &:nth-of-type(3) {
              font-size: 1.7708vw;
            }
          }
        }
      }
    }
  }  
  .step {
    padding: 3.1771vw 0 5.1563vw;
    margin-top: 7.2917vw;
    &-in {
      max-width: calc(75.2083vw + 6.3542vw);
    }
    &-lists {
      margin-top: 5.1042vw;
      padding: 0 1.0417vw;
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
              &::after{
                width: .8333vw;
                height: 1.5625vw;
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
          img {
            width: .7813vw;
          }
        }
        &:nth-of-type(6) {
          .lastBox-t {
            & > div {
              font-size: 2.8646vw;
              span {
                font-size: 4.4271vw;
              }
              &:nth-of-type(1) {
                margin-bottom: .7813vw;
              }
            }
          }
          .lastBox-b {
            margin-top: 1.0417vw;
            .bigBan{
              font-size: 2.2917vw;
            }
          }
        }
      }
    }
  }
  .charge {
    margin-top: 10.7292vw;
    &-tables {
      max-width: 77.6563vw;
      margin: 2.8125vw auto 0;
      &-in {
        max-width: 56.8229vw;
        margin: 0 10.4167vw;
        border-radius: 3.125vw;
      }
      &-item {
        height: 6.7708vw;
        margin-bottom: .4167vw;
        .item-in {
          font-size: 1.25vw;
          span {
            font-size: 1.4583vw;
            &:nth-of-type(2) {
              font-size: .8333vw;
            }
          }
          &:not(:last-child) {
            margin-right: .4167vw;
          }
        }
        &:nth-of-type(1) {
          height: 3.6458vw;
          .item-in {
            font-size: 1.4583vw;
          }
        }
        &:nth-of-type(3) {
          .item-in {
            font-size: 1.4583vw;
            span {
              font-size: 1.9271vw;
              &:nth-of-type(2) {
                font-size: .8333vw;
              }
            }
          }
        }
      }
    }
    &-text {
      font-size: 1.8229vw;
      margin: 2.8125vw auto 1.7708vw;
    }
    &-btn {
      margin-top: 1.8229vw;
    }
  }
  .Medical_sterilization_equipment{
    margin-top: 7.2917vw;
    padding: 2.6042vw 0 .5208vw;
    &-in{
      margin-top: 3.125vw;
      &-box{
        max-width: 62.7604vw;
        margin-bottom: 2.0833vw;
        img{
          border-radius: 1.0417vw;
        }
        &>div{
          font-size: 1.4583vw;
          border-radius: 1.0417vw;
          &::after{
            width: calc(100% + 1.5625vw);
            border-radius: 1.0417vw;
          }
        }
        &:nth-of-type(1){
          &>div{
            padding: 1.5625vw 1.5625vw 1.5625vw 0;
            &::after{
              left: -1.5625vw;
            }
          }
        }
        &:nth-of-type(2){
          &>div{
            padding: 1.5625vw 0 1.5625vw 1.5625vw;
            &::after{
              right: -1.5625vw;
            }
          }
        }
      }
    }
  }
  .doctorTeam{
    margin-top: 7.2917vw;
  }
  .care {
    margin-top: 10.7292vw;
    padding-bottom: 5.625vw;
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
          margin-top: 3.125vw;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .tabNav {
        padding: 30px;
        font-size: 1rem;
        margin-top: 0;
      }
      .introduceJY{
        margin-top: 60px;
      }
  .reason {
    margin-top: 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      flex-direction: column;
      margin: 72px auto 0;
      &-item {
        padding: 0 52px;
        .image {
          div {
            top: -18px;
            left: -8px;
            width: 64px;
            height: 66px;
            background-size: 100% 100%;
            font-size: 34px;
          }
        }
        .text {
          font-size: 20px;
          margin-top: 20px;
        }
        &:not(:last-child) {
          margin-bottom: 53px;
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
    margin-top: 60px;
    padding: 46px 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 57px 40px 0;
      padding: 0;
      &-in {
        flex-direction: column;
        margin-bottom: 30px;
        width: 100%;
        padding: 0;
        &:nth-of-type(n + 5) {
          margin-bottom: 30px;
        }
        &:nth-of-type(6) {
          .step-lists-in-r {
            display: none;
          }
        }
        &-l {
          .title {
            padding: 0 6px;
            font-size: 26px;
          }
          .image {
            padding: 0 6px;
            &::after{
              display: none;
            }
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
          display: block;
          margin-top: 30px;
          margin-left: 0;
          img {
            transform: rotate(90deg);
          }
        }
        &:nth-of-type(6) {
          margin-top: 15px;
          .lastBox-t {
            & > div {
              font-size: 16px;
              span {
                font-size: 24px;
                display: inline-block;
                &::before{
                  content: '，';
                  font-size: 16px;
                  font-family: var(--contextFamily);
                }
              }
              img {
                width: 20px;
                height: 22px;
              }
              &:nth-of-type(1) {
                display: none;
              }
              &:nth-of-type(2) {
                // display: none;
                &::before,&::after{
                  content: '';
                  display: inline-block;
                  width: 20px;
                  height: 22px;
                  margin: 0 9px;
                  background: url(@/assets/images/icon_13.png);
                  background-size: 100% 100%;
                }
              }
              // &:nth-of-type(3) {
              //   padding-bottom: 5px;
              //   margin-left: 7px;
              // }
            }
          }
          .lastBox-b {
            margin-top: 30px;
            .bigBan{
              font-size: 28px;
            }
          }
        }
      }
    }
  }
  .difference {
    margin-top: 80px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-tables {
      width: auto;
      margin: 28px 30px 0;
      border-radius: 20px;
      &-item {
        height: 75px;
        margin-bottom: 2px;
        .item-in {
          font-size: 15px;
          &-n {
            transform: scale(0.5);
          }
          &-y {
            transform: scale(0.5);
          }
          &:nth-of-type(1) {
            max-width: calc(25% - 4px);
            box-sizing: border-box;
            text-align: center;
          }
          &:nth-of-type(3) {
            font-size: 18px;
          }
          &:not(:last-child) {
            margin-right: 2px;
          }
        }
        &:nth-of-type(1) {
          height: 62px;
          margin-bottom: 0;
          .item-in {
            font-size: 16px;
            padding: 0 17px;
            line-height: 1.2;
            text-align: center;
            &:nth-of-type(3) {
              font-size: 20px;
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(5),
        &:nth-of-type(7) {
          .item-in {
            &:nth-of-type(1) {
              padding: 0 20px;
            }
          }
        }
        &:nth-of-type(3),
        &:nth-of-type(4) {
          .item-in {
            &:nth-of-type(1) {
              padding: 0 10px;
            }
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .charge {
    margin-top: 40px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-tables {
      margin: 28px auto 0;
      &-in {
        // margin: 0 50px 0 30px;
        margin: 0 30px;
        border-radius: 20px;
      }
      &-item {
        height: 68px;
        margin-bottom: 2px;
        .item-in {
          font-size: 15px;
          span {
            font-size: 20px;
            &:nth-of-type(2) {
              font-size: 9px;
              font-weight: 500;
            }
          }
          &:nth-of-type(1) {
            flex: 1;
          }
          &:not(:last-child) {
            margin-right: 2px;
            padding: 0 20px;
          }
        }
        &:nth-of-type(1) {
          height: 40px;
          margin-bottom: 0;
          .item-in {
            font-size: 20px;
          }
        }
        &:nth-of-type(3) {
          height: 96px;
          .item-in {
            font-size: 16px;
            span {
              font-size: 20px;
              &:nth-of-type(2) {
                font-size: 9px;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
    &-text {
      font-size: 16px;
      margin: 14px auto 25px;
      span {
        display: block;
        &:nth-of-type(2) {
          display: none;
        }
      }
    }
    &-btn {
      margin-top: 0;
      // .btn {
      //   margin-top: 0;
      //   span {
      //     font-size: 20px;
      //     padding: 5px 70px;
      //     box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
      //   }
      // }
    }
    // &-rightBox {
    //   width: 84px;
    //   height: 84px;
    //   .a {
    //     font-size: 9.803px;
    //   }
    //   .b {
    //     font-size: 11.168px;
    //     span {
    //       font-size: 15.464px;
    //     }
    //   }
    //   .c {
    //     font-size: 6.033px;
    //   }
    // }
  }
  .doctorTeam{
    margin-top: 60px;
  }
  .care {
    margin-top: 80px;
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
  .Medical_sterilization_equipment{
    padding: 30px 0 10px;
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 12.5%,
      rgba(255, 241, 240, 0.7) 81.99%,
      rgba(255, 241, 240, 0) 100%
    );
    &-in{
      margin-top: 40px;
      &-box{
        flex-direction: column;
        img{
          width: 100%;
          border-radius: 0;
        }
        &>div{
          width: calc(100% - 60px);
          font-size: 16px;
          margin: -20px auto 0;
          &::after{
            width: 100%;
            border-radius: 8px;
          }
        }
        &:nth-of-type(1){
          &>div{
            padding: 20px;
            &::after{
              left: 0;
            }
          }
        }
        &:nth-of-type(2){
          img{
            order: 1;
          }
          &>div{
            order: 2;
            padding: 20px;
            &::after{
              right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
