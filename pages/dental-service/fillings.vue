<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('fillings')
useHead({
  title: '補牙｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供補牙服務，補牙為了修復破損的牙齒組織，防止蛀牙情況進一步惡化，一般會使用填充物填補牙齒，讓牙齒恢復原來的形狀和功能。常用的牙齒修補材料有複合樹脂（瓷粉）和銀汞合金（銀粉）兩種，選擇適合的補牙材料取決於牙齒蛀壞的程度和位置等因素。補牙過程通常很簡單，同時保有自然牙的美觀性。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '補牙 牙體復形 補牙材料 補牙費用 瓷粉補牙 銀粉補牙 補牙物料 補牙價錢 補牙收費 補牙洞 蛀牙補牙門牙補牙 蛀牙 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/03/3215d200c5bdcff0.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/03/427985a6c82b4c49.jpg',
  pageName: 'invisalign-test',
  pcText: [],
  mbText: []
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.fillings.introduce.title',
  content: 'pages.dental-service.fillings.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/cdfb1a9c081d7a15.webp',
  pcImg: 'https://static.cmereye.com/imgs/2024/02/51bcdbae58f74102.webp',
  tabNavName: 'pages.dental-service.fillings.introduce.tabNavName',
  pageName: 'fillings',
}

// const reasonData = {
//   title: 'pages.dental-service.fillings.reason.title',
//   text: 'pages.dental-service.fillings.reason.text',
//   imgUrl: 'https://static.cmereye.com/imgs/2023/05/d053bb08e7c265a0.jpg',
//   reasonLists: [
//     {
//       context:
//         'pages.dental-service.fillings.reason.lists[0].context',
//     },
//   ],
//   isMediumCW: true,
// }

// const stepData = {
//   title: '補牙過程',
//   stepLists: [
//     [
//       {
//         title: 'Step 1',
//         text: '清除牙齒蛀壞及脆弱的部分',
//       },
//       {
//         title: 'Step 2',
//         text: '用專用的清潔消毒劑清潔牙齒表面，吹乾後，塗上黏固劑',
//       },
//       {
//         title: 'Step 3',
//         text: '填補牙洞及修補缺損部分',
//       },
//     ],
//     [
//       {
//         title: 'Step 4',
//         text: '穩固填充物',
//       },
//       {
//         title: 'Step 5',
//         text: '牙齒修形及拋光（如蛀牙的程度深，或需要使用麻醉劑）',
//       },
//     ],
//   ],
// }

const noteData = {
  title: '補牙後建議',
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2024/02/84e6cc7af16299e7.png',
      text: '避免進食過冷\n或過熱的食物',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/6fda3607b45244cb.png',
      text: '避免咬合\n過硬的食物',
    },
  ],
}

const materialData = {
  title: '補牙材料',
  context: [
    '補牙材料主要分為複合樹脂（俗稱瓷粉）','及銀汞合金（俗稱銀粉）兩種。',
    '複合樹脂是現時最常用的材料。由於銀汞合金氧化後會變成銀黑色，因此較少被選用。',
  ],
  tableLeft: [
    [
      '類別',
      '特性',
      '優點',
      '缺點'
    ],[
      '複合樹脂',
      '多用於修復牙齒的形狀',
      '美觀，接近牙齒天然的顏色與牙釉質有較強的粘合力',
      '強度比銀汞合金稍弱'
    ]
  ],
  tableRight: [
    '銀汞合金',
    '多用於修補小臼齒或大臼齒的蛀牙',
    '堅固，可承受較強的咬合力耐用，不易磨損',
    '氧化後會變銀黑色，欠美觀'
  ]
}

let materialCurrent = ref(1)

const onSlideChange = (swiper:any) => {
  materialCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

const problemData = {
  title: 'pages.dental-service.fillings.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.fillings.problem.lists[0].Q',
      A: 'pages.dental-service.fillings.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[1].Q',
      A: 'pages.dental-service.fillings.problem.lists[1].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[2].Q',
      A: 'pages.dental-service.fillings.problem.lists[2].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[3].Q',
      A: 'pages.dental-service.fillings.problem.lists[3].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[4].Q',
      A: 'pages.dental-service.fillings.problem.lists[4].A',
    },
  ],
}
const careData = {
  title: ['蛀牙的常見徵兆'],
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2024/02/0455d2f9f71e35cb.png',
      text: '咀嚼或咬合時\n感到疼痛',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/ea78194a75b40377.png',
      text: '牙齒出現黑色\n或棕色斑點',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/5e3a51999b0fda41.png',
      text: '牙齒出現牙洞\n或凹陷',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/5a746d8adced4068.png',
      text: '牙齦紅腫、\n出血、下陷',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/e7cf8e3f35476d19.png',
      text: '牙齒對冷熱\n或甜食敏感',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/8e1427cf1f4ecc81.png',
      text: '出現口臭',
    },
  ],
}
const contentData1 = [
  {
    img: 'https://static.cmereye.com/imgs/2024/02/61c99e28e2d65cc0.jpg',
    text: '頻繁食用黏性食物\n和高糖份食物'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/02/3fea9c1894d15f28.jpg',
    text: '不當口腔衛生習慣'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/02/8ef84d0d5d91d08c.jpg',
    text: '藥物或手術導致\n唾液分泌減少'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/02/b70309f502c9cb6c.jpg',
    text: '牙齒擠擁清潔困難'
  }
]
const advantageData = {
  title: '預防蛀牙方法',
  lists: [
    {
      name: '1.定期口腔檢查',
      text: '每年至少進行兩次口腔檢查和清潔。牙醫可以檢查牙齒的健康狀況，發現和處理早期的蛀牙問題。'
    },
    {
      name: '2.定期刷牙',
      text: '每天至少刷牙兩次，早晚各一次，使用牙刷和牙膏。刷牙應該持續兩分鐘，確保清潔到所有牙齒表面和牙齦線。選擇含有氟化物的牙膏，有助於保護牙齒免受酸性攻擊。'
    },
    {
      name: '3.使用牙線或牙間刷',
      text: '定期使用牙線或牙間刷清潔牙齒之間的縫隙和牙齦線。這可以有效去除牙線無法觸及的食物殘渣和細菌，減少蛀牙的風險。'
    },
    {
      name: '4.使用漱口水',
      text: '使用含氟的漱口水可以保護牙齒並減少細菌的生長。漱口水有助於清潔口腔中的難以到達的區域，並降低蛀牙風險。'
    },
    {
      name: '5.控制糖分攝入',
      text: '減少攝取高糖飲食，細菌會利用糖分產生酸性物質，促使蛀牙的形成。適時刷牙或漱口可減少糖分在牙齒上的停留時間。'
    },
    {
      name: '6.避免咀嚼硬物',
      text: '避免咀嚼硬物，如冰塊、堅果或硬糖果。這樣可以減少牙齒破裂或損壞的風險。'
    }
  ]
}
const noteData2 = {
  title: '補牙的作用',
  lists: [
    {
      name: '當牙齒的硬組織（琺瑯質、象牙質）受到破壞後，容易造成小孔，形成蛀牙。為了修復破損的組織及防止蛀牙情況加劇，會以填充物填補牙齒，使牙齒能恢復原來形狀和功能。',
    },
    {
      name: '及早補牙有助於預防進一步的牙齒問題，從而避免需要接受根管治療或種植牙治療等較複雜治療的風險和負擔。',
    },
  ]
}
const reasonData = {
  title: '蛀牙階段',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/10/fafa2f37cf68b4fb.jpg',
      title: '蛀牙初期',
      context: '最外層琺瑯質受損',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/91c57e27b6a68095.jpg',
      title: '蛀牙中期',
      context: '受損至象牙質',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/110eb2fe9f155701.jpg',
      title: '蛀牙後期',
      context: '細菌深入牙髓\n內部組織發炎',
    },
  ],
}

const The_benefits_of_resin_filling_teeth = {
  title: '樹脂補牙3大好處',
  lists: [
    {
      name: ['美觀'],
      text: '樹脂材料可以調配成與牙齒自然色相匹配的顏色，從而在美觀上優於傳統的金屬填充物，尤其是在前牙或其他容易看見的牙齒上。'
    },
    {
      name: ['保存','性高'],
      text: '與傳統金屬填充物不同，樹脂填料通常需要去除較少的牙體組織，因為它們可以直接粘附在牙齒表面上，這有助於保留更多的天然牙齒結構。'
    },
    {
      name: ['安全'],
      text: '樹脂填充物不含金屬，因此對於對某些金屬敏感或擔心金屬汞合金健康影響的人來說，這是一個更安全的選擇。'
    }
  ]
}
const stepData = {
  title: '補牙5部曲',
  lists: [
    {
      title: '第1步',
      img: 'https://static.cmereye.com/imgs/2024/02/7da900517cf80179.jpg',
      name: '清除牙齒蛀壞及脆弱的部分',
    },
    {
      title: '第2步',
      img: 'https://static.cmereye.com/imgs/2024/02/3e6bc9ac0edc0d89.jpg',
      name: '用專用的清潔消毒劑清潔牙齒表面，\n吹乾後，塗上黏固劑',
    },
    {
      title: '第3步',
      img: 'https://static.cmereye.com/imgs/2024/02/8233293d90d88e23.jpg',
      name: '填補牙洞及修補缺損部分',
    },
    {
      title: '第4步',
      img: 'https://static.cmereye.com/imgs/2024/02/631f4e13fa030aab.jpg',
      name: '穩固填充物',
    },
    {
      title: '第5步',
      img: 'https://static.cmereye.com/imgs/2024/02/7a0fb0ea64f3e589.jpg',
      name: '牙齒修形及拋光\n（如蛀牙的程度深，或需要使用麻醉劑）',
    }
  ],
}
const differData:any = {
  title: '補牙物料比較',
  listDatas: [
    {
      name: '',
      firstText: '全瓷貼片',
      secondText: '樹脂貼片'
    },
    {
      name: '',
      contentType: '2',
      firstText: 'https://static.cmereye.com/imgs/2024/02/cc9429201855225d.jpg',
      secondText: 'https://static.cmereye.com/imgs/2024/02/51cdfd0bf4ee583b.png'
    },
    {
      name: '特性',
      firstText: '多用於修復牙齒的形狀',
      secondText: '多用於修補小臼齒或大臼齒的蛀牙'
    },
    {
      name: '優點',
      contentType: '1',
      firstText: ['美觀，接近牙齒天然的顏色','與牙釉質有較強的粘合力'],
      secondText: ['堅固，可承受較強的咬合力','耐用，不易磨損']
    },
    {
      name: '缺點',
      firstText: '強度比銀汞合金稍弱',
      secondText: '氧化後會變銀黑色，欠美觀'
    },
  ]
}
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
      <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      <!-- <ServiceReason :reasonData="reasonData" /> -->
      <!-- <ServiceStep :stepData="stepData" /> -->
      <!-- <ServiceNote :noteData="noteData" /> -->
      <div class="The_benefits_of_resin_filling_teeth">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            {{The_benefits_of_resin_filling_teeth.title}}
          </div>
        </div>
        <div class="The_benefits_of_resin_filling_teeth-img">
          <img data-cfsrc="https://static.cmereye.com/imgs/2024/02/91c959b48d0683e6.jpg" srcset="https://static.cmereye.com/imgs/2024/02/6588c782aea9aebe.jpg 768w, https://static.cmereye.com/imgs/2024/02/91c959b48d0683e6.jpg" src="https://static.cmereye.com/imgs/2024/02/91c959b48d0683e6.jpg" alt=""> 
        </div>
        <div class="The_benefits_of_resin_filling_teeth-lists">
          <div class="The_benefits_of_resin_filling_teeth-lists-in" v-for="(item,index) in The_benefits_of_resin_filling_teeth.lists" :key="index">
            <div class="The_benefits_of_resin_filling_teeth-lists-in-l">
              <div>
                <div>
                  <span v-for="(spanitem,spanindex) in item.name" :key="spanindex">{{spanitem}}</span>
                </div>
              </div>
            </div>
            <div class="The_benefits_of_resin_filling_teeth-lists-in-r">{{item.text}}</div>
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
              </div>
              <div class="step-lists-in-r">
                <img src="@/assets/images/icon_12.png" alt="" />
              </div>
            </div>
            <div class="step-lists-in">
              <div>
                <div class="lastBox-t">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="93" height="37" viewBox="0 0 93 37" fill="none">
                      <path d="M61.2884 3.61569C61.0125 3.2167 57.6082 -2.72905 49.2665 1.5291C49.2665 1.5291 47.5695 2.19409 46.5 2.19409C45.4305 2.19409 43.7335 1.5291 43.7335 1.5291C35.3962 -2.72905 31.9883 3.21522 31.7116 3.61569C27.3835 9.86291 32.1353 26.4818 36.328 32.7046C43.965 44.0405 43.4306 29.4114 46.5 28.9068C49.5694 29.4114 49.035 44.0405 56.672 32.7046C60.8647 26.4818 65.6165 9.86512 61.2884 3.61569Z" fill="#FC1682"/>
                      <path d="M0.881739 10.0521C1.02388 9.82569 2.77758 6.45108 7.07483 8.86787C7.07483 8.86787 7.94906 9.2453 8.5 9.2453C9.05094 9.2453 9.92517 8.86787 9.92517 8.86787C14.2202 6.45108 15.9757 9.82485 16.1183 10.0521C18.3479 13.5979 15.9 23.0302 13.7401 26.5621C9.8059 32.9959 10.0812 24.693 8.5 24.4065C6.91881 24.693 7.1941 32.9959 3.25989 26.5621C1.10001 23.0302 -1.3479 13.5991 0.881739 10.0521Z" fill="#FC1682"/>
                      <path d="M76.8817 10.0521C77.0239 9.82569 78.7776 6.45108 83.0748 8.86787C83.0748 8.86787 83.9491 9.2453 84.5 9.2453C85.0509 9.2453 85.9252 8.86787 85.9252 8.86787C90.2202 6.45108 91.9757 9.82485 92.1183 10.0521C94.3479 13.5979 91.9 23.0302 89.7401 26.5621C85.8059 32.9959 86.0812 24.693 84.5 24.4065C82.9188 24.693 83.1941 32.9959 79.2599 26.5621C77.1 23.0302 74.6521 13.5991 76.8817 10.0521Z" fill="#FC1682"/>
                    </svg>
                  </div>
                  <div>最快即日<span>修補牙齒</span></div>
                </div>
                <div class="lastBox-b">
                  <!-- <PageAnimBtn :str="'免費網上預約'" /> -->
                  <PageAnimBtnTypeTwo :str="'免費網上預約'" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="differ">
        <div class="differ-title dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{differData.title}}</div>
        </div>
        <div class="differ-tc">
          <span>補牙材料主要分為複合樹脂</span>
          <span>（俗稱瓷粉）及銀汞合金（俗稱銀粉）兩種。複合樹脂是現時最常用的材料。</span>
          <span>由於銀汞合金氧化後會變成銀黑色，</span>
          <span>因此較少被選用。</span>
        </div>
        <div class="differ-lists">
          <div class="differ-lists-in" v-for="(listDatasItem,listDatasIndex) in differData.listDatas" :key="listDatasIndex">
            <div>{{listDatasItem.name}}</div>
            <div>
              <div v-if="listDatasItem.contentType === '1'">
                <span v-for="(spanitem,spanindex) in listDatasItem.firstText" :key="spanindex">
                  {{spanitem}}
                </span>
              </div>
              <div v-else-if="listDatasItem.contentType === '2'">
                <img :src="listDatasItem.firstText || ''" alt="">
              </div>
              <div v-else>
                {{listDatasItem.firstText}}
              </div>
            </div>
            <div>
              <div v-if="listDatasItem.contentType === '1'">
                <span v-for="(spanitem,spanindex) in listDatasItem.secondText" :key="spanindex">
                  {{spanitem}}
                </span>
              </div>
              <div v-else-if="listDatasItem.contentType === '2'">
                <img :src="listDatasItem.secondText" alt="">
              </div>
              <div v-else>
                {{listDatasItem.secondText}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">
            {{noteData.title}}
          </div>
        </div>
        <div class="note-lists">
          <div
            v-for="(careItem, careIndex) in noteData.lists"
            :key="careIndex"
            class="note-lists-item"
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
      <div class="note2">
        <div class="dentistryServices-title note2-title">
          <div class="dentistryServices-title-in bb note2-title-in">
            {{noteData2.title}}
          </div>
        </div>
        <div class="note2-content">
          <div class="note2-content-l">
            <img
              src="https://static.cmereye.com/imgs/2024/02/e593066f247bebff.webp"
              alt=""
            />
          </div>
          <div class="note2-content-r">
            <div
              v-for="(noteItem, noteIndex) in noteData2.lists"
              :key="noteIndex"
            >
              <span>{{ $t(noteItem.name) }}</span>
            </div>
          </div>
        </div>
      </div>
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
            </div>
            <div class="text">
              <span>{{ item.title }}</span>
              <span>{{ item.context }}</span>
            </div>
          </div>
        </div>
        <div class="reason-bt">
          <div><span>蛀牙的前期及中期可靠補牙修復。</span><span>一旦蛀牙深入牙髓，則需要接受更進一步的治療，</span><span>例如根管治療(杜牙根)、</span><span>全瓷牙冠、拔牙、種植牙。</span></div>
          <div><span>建議在遇到蛀牙問題時，及早就醫並諮詢專業牙醫生建議，</span><span>以確定最適合您的治療方案。</span></div>
        </div>
        <div class="reason-btn">
          <!-- <PageAnimBtn :str="'了解根管治療資訊'" /> -->
          <PageAnimBtnTypeTwo :str="'了解根管治療資訊'" />
        </div>
      </div>
      <!-- <div class="material">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">{{materialData.title}}</div>
        </div>
        <div class="material-context">
          <span v-for="(contextItem,contextIndex) in materialData.context" :key="contextIndex">{{contextItem}}</span>
        </div>
        <div class="material-in">
          <swiper
            slidesPerView="auto"
            class="swiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="swiper-slide">
              <div class="box-left">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(meritItem,meritIndex) in materialData.tableLeft[0]"
                    :key="meritIndex"
                  >
                    <div>{{meritItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box-center">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(meritItem,meritIndex) in materialData.tableLeft[1]"
                    :key="meritIndex"
                  >
                    <div>{{meritItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box-right">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(shortcomingItem,shortcomingIndex) in materialData.tableRight"
                    :key="shortcomingIndex"
                  >
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="material-line mbBox">
          <PageSwiperPointLine :latestNewsNum="3" :latestNewsCurrent="materialCurrent"></PageSwiperPointLine>
        </div>
      </div> -->
      <div class="fillings-content-1">
        <div class="dentistryServices-title fillings-content-1-title">
          <div class="dentistryServices-title-in bb fillings-content-1-title-in">
            <span>容易患上蛀牙的高危人士</span>
          </div>
        </div>
        <div class="fillings-content-1-in">
          <div v-for="(contentItem,contentIndex) in contentData1" :key="contentIndex">
            <img :src="contentItem.img" alt="">
            <span>{{contentItem.text}}</span>
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
        <div class="care-btn">
          <!-- <PageAnimBtn :str="'立即預約免費檢查'" /> -->
          <PageAnimBtnTypeTwo :str="'立即預約免費檢查'" />
        </div>
      </div>
      <div class="advantage">
        <div class="advantage-title dentistryServices-title">
          <div class="advantage-title-in dentistryServices-title-in bb">{{advantageData.title}}</div>
        </div>
        <div class="advantage-in">
          <div class="advantage-in-l"><img src="https://static.cmereye.com/imgs/2024/02/023004e30a0f06d2.webp" :alt="advantageData.title"></div>
          <div class="advantage-in-r">
            <div v-for="(advantageItem,advantageIndex) in advantageData.lists" :key="advantageIndex">
              <div class="name">{{advantageItem.name}}</div>
              <div class="text">{{advantageItem.text}}</div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <NewAddress />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
.reason {
  margin-top: 188px;
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 116px auto 0;
    &-item {
      padding: 0 55px;
      width: calc(100% / 3);
      .image {
        position: relative;
        img {
          width: 100%;
        }
      }
      .text {
        font-style: normal;
        text-align: center;
        margin-top: -45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1;
        span {
          font-size: 35px;
          font-weight: 900;
          &:nth-of-type(1) {
            color: #fff;
            border-radius: 30px;
            background: var(--indexColor1);
            text-align: center;
            width: max-content;
            padding: 0 40px;
            filter: drop-shadow(
              0px 3.7044363021850586px 7.408872604370117px
                rgba(252, 22, 130, 0.38)
            );
          }
          &:nth-of-type(2) {
            color: var(--indexColor1);
            white-space: pre-wrap;
            margin-top: 44px;
          }
        }
      }
    }
  }
  &-bt{
    font-size: 20px;
    line-height: 160%;
    color: var(--textColor);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    &>div{
      width: calc(100% - 60px);
      max-width: 860px;
      text-align: center;
      margin-top: 30px;
      span{
        display: inline-block;
      }
    }
  }
  &-btn{
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}
.material {
  width: 100%;
  max-width: 1450px;
  margin: 96px auto 0;
  &-context{
    width: 100%;
    max-width: 1042px;
    margin: 35px auto 0;
    text-align: center;
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      color: #666666;
    }
  }
  &-in {
    max-width: 1254px;
    margin: 30px auto 0;
    .box {
      width: 100%;
      .box-in {
        height: 140px;
        margin-top: 4px;
        display: flex;
        background: var(--indexColor2);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 0 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        &:first-child {
          background: var(--indexColor1);
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
          justify-content: center;
        }
        &:last-child{
          height: 108px;
        }
        &:nth-of-type(2) {
          margin-top: 0;
        }
      }
    }
    .swiper{
      .swiper-slide{
        &:nth-of-type(1){
          width: 25.68% !important;
        }
        &:nth-of-type(2){
          width: 37.16% !important;
        }
        &:nth-of-type(3){
          width: 37.16% !important;
        }
      }
    }
    .box-left {
      margin-right: 2px;
      border-radius: 60px 0 0 60px;
      overflow: hidden;
      display: flex;
      .box:nth-of-type(1){
        .box-in{
          font-weight: 700;
          font-size: 28px;
          justify-content: center;
        }
      }
    }
    .box-right {
      border-radius: 0 60px 60px 0;
      overflow: hidden;
      margin-left: 2px;
    }
  }
  &-line {
    width: 120px;
    margin: 22px auto;
  }
}
.note{
  margin-top: 100px;
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: calc(819px / 3 * 2);
    margin: 60px auto 0;
    &-item {
      width: calc(100% / 2);
      & > div {
        .image {
          width: 100%;
          position: relative;
          padding: 0 calc((89px / 273px) * 100% / 2);
          &-in {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background: #fee6f1;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 80%;
              max-height: 80%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 3px;
          white-space: pre-wrap;
        }
      }
      &:nth-of-type(n + 4) {
        margin-top: 45px;
      }
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              background: #fff1f0;
            }
          }
        }
      }
    }
  }
}
.note2 {
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
    // align-items: center;
    width: 100%;
    max-width: 1340px;
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
        margin-bottom: 40px;
        span {
          color: #4d4d4d;
          font-size: 28px;
          line-height: 160%;
          font-weight: 600;
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
    margin: 45px auto 0;
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
            background: #fee6f1;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 60%;
              max-height: 60%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 3px;
          white-space: pre-wrap;
        }
      }
      &:nth-of-type(n + 4) {
        margin-top: 45px;
      }
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              background: #fff1f0;
            }
          }
        }
      }
    }
  }
  &-btn{
    margin-top: 45px;
    display: flex;
    justify-content: center;
  }
}
.fillings-content-1{
  margin-top: 106px;
  &-in{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 50px auto;
    max-width: 1300px;
    &>div{
      width: 300px;
      display: flex;
      flex-direction: column;
      img{
        border-radius: 10px;
        width: 100%;
      }
      span{
        font-size: 30px;
        line-height: 160%;
        text-align: center;
        margin-top: 20px;
        white-space: pre-wrap;
        color: var(--textColor);
      }
    }
  }
}
.advantage{
  margin-top: 98px;
  &-in{
    display: flex;
    justify-content: center;
    max-width: 1100px;
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
          font-size: 24px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 4px 15px;
          width: calc((404 / 717) * 100%);
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
          letter-spacing: 2px;
        }
        .text{
          color: var(--textColor);     
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          // text-indent: 15px;
          padding-left: 15px;
        }
      }
    }
  }
}
.The_benefits_of_resin_filling_teeth{
  margin-top: 30px;
  &-img{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
      width: 100%;
      max-width: 1150px;
    }
  }
  &-lists{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    &-in{
      width: 100%;
      max-width: 804px;
      display: flex;
      margin-bottom: 30px;
      align-items: center;
      &-l{
        width: calc(182 / 802 * 100%);
        margin-right: calc(50 / 802 * 100%);
        &>div{
          height: 0;
          padding-bottom: 100%;
          position: relative;
          background: var(--indexColor1);
          color: #fff;
          font-size: 30px;
          line-height: 1.6;
          border-radius: 50%;
          &>div{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
            display: flex;
            justify-content: center;
            span{
              text-align: center;
            }
          }
        }
      }
      &-r{
        flex: 1;
        font-size: 20px;
        line-height: 160%;
        color: var(--textColor);
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
  padding: 61px 0 99px;
  margin-top: 70px;
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
      &:nth-of-type(5) {
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
          width: 100%;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 8px 15px;
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
          white-space: pre-wrap;
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
        margin-bottom: 0;
        align-items: flex-end;
        justify-content: center;
        &>div{
          margin-bottom: 20px;
        }
        .lastBox-t {
          & > div {
            color: var(--indexColor1);
            font-size: 50px;
            font-weight: 700;
            text-align: center;
            span {
              font-size: 50px;
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
      &:nth-of-type(2),&:nth-of-type(5) {
        .step-lists-in-l{
          .name{
            width: 110%;
            clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
          }
        }
      }
    }
  }
}
.differ{
  margin-top: 140px;
  &-tc{
    width: 100%;
    max-width: 1016px;
    margin: 30px auto 0;
    text-align: center;
    span{
      font-size: 20px;
      line-height: 1.6;
      display: inline-block;
    }
  }
  &-lists{
    width: 100%;
    max-width: 1251px;
    margin: 55px auto 0;
    &-in{
      display: flex;
      &:not(:last-child){
        margin-bottom: 15px;
      }
      &:nth-of-type(1){
        &>div{
          background: none;
          padding: 0;
          justify-content: center;
          align-items: center;
          min-height: 45px;
          font-size: 30px;
          font-weight: 700;
        }
      }
      &:nth-of-type(2){
        &>div{
          background: none;
          justify-content: center;
        }
      }
      &>div{
        color: #4D4D4D;
        font-size: 28px;
        min-height: 112px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%;
        background: #FEE6F1;
        display: flex;
        align-items: center;
        white-space: pre-wrap;
        span{
          display: block;
          &::before{
            content: '·';
            display: inline-block;
            margin-right: 10px;
            font-size: 30px;
            vertical-align: middle;
            margin-top: -2px;
          }
        }
        &:nth-of-type(1){
          width: calc( (122 / 1251) * 100%);
          border-radius: 60px 0 0 60px;
          justify-content: center;
        }
        &:nth-of-type(2){
          width: calc( (562 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (30 / 1251) * 100%);
        }
        &:nth-of-type(3){
          width: calc( (562 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (30 / 1251) * 100%);
          border-radius: 0 60px 60px 0;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .reason {
    margin-top: 54px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      flex-direction: column;
      margin: 72px auto 0;
      &-item {
        width: 100%;
        padding: 0 53px;
        .text {
          margin-top: -34px;
          span {
            font-size: 20px;
            &:nth-of-type(1) {
              padding: 8px 40px;
            }
            &:nth-of-type(2) {
              margin-top: 20px;
              white-space: normal;
            }
          }
        }
        &:not(:last-child) {
          margin-bottom: 35px;
        }
      }
    }
    &-bt{
      font-size: 16px;
      line-height: 200%;
      padding: 0 20px;
      &>div{
        margin-top: 20px;
        &:nth-of-type(1){
          span{
            &:nth-of-type(1){
              width: 100%;
            }
            &:nth-of-type(2),&:nth-of-type(3){
              display: inline;
            }
          }
        }
      }
    }
    &-btn{
      margin-top: 20px;
    }
  }
  .material {
    &-context {
      padding: 0 30px;
      margin: 28px auto 0;
      text-align: center;
      span{
        display: block;
        font-weight: 500;
        font-size: 15px;
      }
    }
    &-in {
      width: 100%;
      margin: 34px 0 0;
      .box {
        .box-in {
          font-weight: 500;
          font-size: 15px;
          margin-top: 3px;
          padding: 0 30px;
          &:first-child {
            height: 51.15px;
            font-weight: 600;
            font-size: 20px;
          }
          &:last-child {
            height: 80px;
          }
        }
      }
      .swiper{
        padding: 0 30px;
        .swiper-slide{
          &:nth-of-type(1){
            width: 230.56px !important;
          }
          &:nth-of-type(2){
            width: 92.128% !important;
          }
          &:nth-of-type(3){
            width: 92.128% !important;
          }
        }
      }
      .box-left {
        .box:nth-of-type(1){
          .box-in{
            font-size: 20px;
          }
        }
      }
    }
  }
  .note{
    margin-top: 30px;
    &-lists {
      width: auto;
      margin: 34px 15px 0;
      &-item {
        width: calc(100% / 2);
        & > div {
          .image {
            padding: 0 5px;
            &-in{
              border-radius: 20px;
            }
          }
          .text {
            white-space: pre-wrap;
            padding: 0;
            font-size: 14px;
            letter-spacing: 1px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
      }
    }
  }
  .note2 {
    margin-top: 55px;
    &-title {
      &-in {
        font-size: 26px;
        span {
          display: inline-block;
        }
      }
    }
    &-content {
      flex-direction: column;
      align-items: flex-start;
      margin: 54px auto 0;
      &-l {
        width: 100%;
        padding: 0 53px;
      }
      &-r {
        margin-left: 0;
        padding: 35px 30px 0;
        & > div {
          margin-bottom: 20px;
          span {
            font-size: 16px;
            font-weight: 500;
          }
        }
      }
    }
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
            &-in{
              border-radius: 20px;
            }
          }
          .text {
            white-space: pre-wrap;
            padding: 0;
            font-size: 14px;
            letter-spacing: 1px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
      }
    }
    &-btn{
      margin-top: 30px;
    }
  }
  .fillings-content-1{
    &-in{
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      &>div{
        width: calc(100% - 100px);
        span{
          font-size: 20px;
          margin-top: 10px;
        }
        &:not(:last-child){
          margin-bottom: 40px;
        }
      }
    }
  }
  .advantage{
    margin-top: 100px;
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
       &-l{
         display: flex;
         justify-content: center;
       }
     }
  }
  .The_benefits_of_resin_filling_teeth{
    margin-top: 100px;
    &-img{
      padding: 0 30px;
    }
    &-lists{
      &-in{
        padding: 0 30px;
        &-l{
          width: 60px;
          height: 60px;
          &>div{
            font-size: 16px;
            line-height: 1.4;
            letter-spacing: 2px;
            &>div{
              flex-direction: column;
            }
          }
        }
        &-r{
          font-size: 16px;
          line-height: 2;
          text-align: justify;
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
      padding: 0;
      &-in {
        flex-direction: column;
        margin-bottom: 30px;
        width: 100%;
        padding: 0;
        &:nth-of-type(n + 4) {
          margin-bottom: 30px;
        }
        &:nth-of-type(5) {
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
            white-space: initial;
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
          align-items: initial;
          .lastBox-t {
            & > div {
              font-size: 26px;
              span {
                font-size: 26px;
                display: inline-block;
              }
              img {
                width: 20px;
                height: 22px;
              }
            }
          }
          .lastBox-b {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            .bigBan{
              font-size: 28px;
            }
          }
        }
        &:nth-of-type(2),&:nth-of-type(5) {
          .step-lists-in-l{
            .name{
              width: 90%;
              clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
            }
          }
        }
      }
    }
  }
  .differ{
    margin-top: 40px;
    &-tc{
      padding: 0 40px;
      span{
        font-size: 15px;
        &:nth-of-type(2){
          display: block;
        }
      }
    }
    &-lists{
      padding: 0 30px;
      margin-top: 25px;
      &-in{
        &:not(:last-child){
          margin-bottom: 4px;
        }
        &>div{
          font-size: 15px;
          box-sizing: border-box;
          min-height: auto;
          span{
            display: flex;
            &::before{
              font-size: 20px;
              line-height: 1.4;
              vertical-align: initial;
            }
          }
          &:nth-of-type(1){
            border-radius: 20px 0 0 20px;
            margin-left: 0;
            padding: 20px 10px;
            font-size: 15px;
            width: auto;
            flex: 1;
            text-align: center;
          }
          &:nth-of-type(2){
            padding: 20px 20px 20px 14px;
            width: calc( (127 / 315) * 100%);
            margin-left: 1px;
          }
          &:nth-of-type(3){
            border-radius: 0 20px 20px 0;
            margin-left: 1px;
            padding: 20px 20px 20px 14px;
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
            padding: 0 20px 5px 20px;
          }
        }
      }
    }
  }
}
</style>