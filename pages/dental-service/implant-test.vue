<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Autoplay } from 'swiper';
import { toWhatsApp } from '~/assets/js/common'
const appState = useAppState()
appState.setDentistryService('implant')
useHead({
  title: "種植牙 | 微創植牙 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: ' 愛康健提供種植牙(種牙/植牙)服務，利用鈦金屬等物料製作成植體，然後植入進行牙槽骨當中，代替牙根以作支撐，然後在上面植入假牙、牙橋或假牙托來填補空缺的牙齒。我們除了提供傳統的植牙方式，亦有微創植牙技術，為安裝人造牙齒的有效方法。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '假牙 植牙 種牙 種植牙 植牙價錢 種牙價錢 假牙價錢 微創植牙 植牙收費 種牙收費 假牙收費 假牙托 活動牙托 人造牙齒 假牙價錢 植牙價錢 鑲牙價錢 鑲假牙價錢 鑲假牙 愛康健種牙 愛康健假牙 深圳植牙 深圳種牙 深圳假牙 羅湖種牙 羅湖假牙 羅湖鑲牙 深圳整牙 羅湖整牙 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  // img: 'https://static.cmereye.com/imgs/2023/06/baaf111867247a7f.png',
  // bg: 'https://static.cmereye.com/imgs/2023/06/2c162ddf8e5bfcd7.jpg',
  // img: 'https://static.cmereye.com/imgs/2023/09/d40dfb893cdf9658.jpg',
  // bg: 'https://static.cmereye.com/imgs/2023/09/d40dfb893cdf9658.jpg',
  // mbImg: 'https://static.cmereye.com/imgs/2023/09/933fef926682e416.jpg',
  img: 'https://static.cmereye.com/imgs/2023/10/29280188e1b68fee.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2023/10/23f7282053c3918c.jpg',
  pageName: 'implant',
  pcText: ['享受失而復得的喜悅','重拾完整人生之旅'],
  mbText: ['享受失而復得的喜悅','重拾完整人生之旅']
}

const introduceData = {
  title: 'pages.dental-service.implant.introduce.title',
  content: 'pages.dental-service.implant.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/2bc3a5d449c9b42e.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/611a2ada62c8fa55.jpg',
  tabNavName: 'pages.dental-service.implant.introduce.tabNavName',
}

const introduceJY = {
  title: 'pages.dental-service.implant.introduce.title',
  content: 'pages.dental-service.implant.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/2bc3a5d449c9b42e.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/02/212030a5fca0b0de.png',
}

const featuresData = {
  title: 'pages.dental-service.implant.features.title',
  featuresLists: [
    'pages.dental-service.implant.features.lists[0].context',
    'pages.dental-service.implant.features.lists[1].context',
    'pages.dental-service.implant.features.lists[2].context',
    'pages.dental-service.implant.features.lists[3].context'
  ]
}

const noteLists = [
  {
    name: 'pages.dental-service.implant.note.lists[0].name',
    img: 'https://static.cmereye.com/imgs/2023/05/786842c578839f96.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[1].name',
    img: 'https://static.cmereye.com/imgs/2023/05/375325d1f47a3eef.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[2].name',
    img: 'https://static.cmereye.com/imgs/2023/05/d2d6a05ff3b7bedc.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[3].name',
    img: 'https://static.cmereye.com/imgs/2023/05/b9bffb9d0a93caf8.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[4].name',
    img: 'https://static.cmereye.com/imgs/2023/05/e263a699e37bb71a.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[5].name',
    img: 'https://static.cmereye.com/imgs/2023/05/e8d6a6c148d1a0ac.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[6].name',
    img: 'https://static.cmereye.com/imgs/2023/05/eeb2f6a620511833.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[7].name',
    img: 'https://static.cmereye.com/imgs/2023/05/00405fd84dde1a1d.png'
  }
]

const stepData = {
  title: '認識種植牙的六個步驟',
  remark: '種植牙於現在是較常見的牙科手術之一，病人最少需要 2 至 3 次的覆診來完成整個種牙程序，整個程序或需要 3 至 6 個月時間。',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
      },
      {
        title: 'Step 2',
        text: '注射麻醉藥'
      },
      {
        title: 'Step 3',
        text: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '等待2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽'
      },
      {
        title: 'Step 5',
        text: '牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒'
      },
      {
        title: 'Step 6',
        text: '將義齒固定在植體上，補上缺去的牙齒'
      }
    ]
  ],
  lists: [
    {
      title: '第1步',
      img: 'https://static.cmereye.com/imgs/2023/09/b881d3776b27ccff.jpg',
      name: '全面口腔檢查及建立個人化方案',
      context: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
    },
    {
      title: '第2步',
      img: 'https://static.cmereye.com/imgs/2023/09/0b7ef1a0f39e9ca9.jpg',
      name: '注射麻醉藥',
      context: ''
    },
    {
      title: '第3步',
      img: 'https://static.cmereye.com/imgs/2023/09/599e940cf6a46009.jpg',
      name: '把植體植入顎骨',
      context: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
    },
    {
      title: '第4步',
      img: 'https://static.cmereye.com/imgs/2023/09/915fb53ec41c5511.jpg',
      name: '安裝臨時假牙', 
      context: '確保植體與牙骨處於良好狀況後，根據客人實際情況，安裝臨時假牙。' 
    },
    {
      title: '第5步',
      img: 'https://static.cmereye.com/imgs/2023/09/7096607a2bb3d79e.jpg',
      name: '套上牙冠及微調',
      context: '確認植體在顎骨已穩固，套上客人心儀的牙色牙冠，作最後全體牙齒微調。'
    },
    {
      title: '第6步',
      img: 'https://static.cmereye.com/imgs/2023/09/9e044f535b6a7b46.jpg',
      name: '定期覆診',
      context: '根據客人情況，定期覆診跟進情況。',
    }
  ]
}

const reasonData = {
  title: 'pages.dental-service.implant.reason.title',
  text: '種植牙五大優點',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/bab7e2cd0e553a7f.jpg',
  pageName: 'implant',
  reasonLists:[
    {
      title: '修補缺牙的情況',
      context: '提供接近真牙的功能和外觀，耐用美觀',
    },
    {
      title: '恢復咀嚼功能',
      context: '療程後能夠正常咀嚼食物，恢復咬合功能',
    },
    {
      title: '保護相鄰牙齒',
      context: '不需要磨損鄰近的牙齒來支撐，保護了相鄰牙齒的健康',
    },
    {
      title: '改善口腔美觀',
      context: '會根據患者的牙齒形狀、顏色和咬合情況進行定制，實現自然的外觀方案',
    },
    {
      title: '有助於保持骨質',
      context: '能防止牙槽骨的進一步萎縮，有助於保持骨質的生長',
    }
  ]
}

const noticeData = {
  title: 'pages.dental-service.implant.notice.title',
  topText: [
    'pages.dental-service.implant.notice.topText[0].context',
    'pages.dental-service.implant.notice.topText[1].context'
  ],
  dataLists: [
    {
      name: "",
      merit: "微創植牙",
      shortcoming: "傳統植牙",
    },
    {
      name: "原理",
      merit: "微創植牙搭配電腦導航技術 ， 可以不用開刀縫針，直接透過手術導板穿透軟組織將植牙放到牙骨裡面",
      shortcoming: "在植入牙齒的位置進行切口，手術後等待數月的時間，讓植牙的骨頭組織與人體結合為一個穩固的基礎，再安裝人造牙齒",
    },
    {
      name: "手術創傷",
      merit: "傷口微小，不需縫合",
      shortcoming: "以傳統手術刀切割，傷口較大，需縫合",
    },
    {
      name: "出血和腫脹",
      merit: "手術時間短，減少感染機會，降低術後腫痛現象",
      shortcoming: "會引起較多的出血和腫脹",
    },
    {
      name: "恢復時間",
      merit: "創傷較小，能夠在短時間內康復",
      shortcoming: "需要較長的恢復時間，以便顎骨充分癒合和牙齦康復",
    },
    {
      name: "牙骨修復需求",
      merit: "利用現有的顎骨結構進行植牙",
      shortcoming: "如果顎骨密度不足或有缺陷，可能需要進行額外的補骨手術",
    }
  ],
  bottomText: [
    'pages.dental-service.implant.notice.bottomText[0].context',
    'pages.dental-service.implant.notice.bottomText[1].context',
    'pages.dental-service.implant.notice.bottomText[2].context'
  ]
}

const detailData = {
  title: 'pages.dental-service.implant.detail.title',
  detailTableCol: [
    'pages.dental-service.implant.detail.tableCol[0].text',
    'pages.dental-service.implant.detail.tableCol[1].text',
    'pages.dental-service.implant.detail.tableCol[2].text',
    'pages.dental-service.implant.detail.tableCol[3].text'
  ],
  detailTable: [
    {
      service: "服務", 
      price: "",
      discountedPrice: '優惠價 (單隻)'
    },
    {
      service: "OSSTEM (韓國）奧齒泰親水種植體植入術", 
      price: "原價 ¥13800",
      discountedPrice: '¥8800'
    },
    {
      service: "ANKYLOS（德國）種植體植入術", 
      price: "原價 ¥15800",
      discountedPrice: '¥12800'
    },
    {
      service: "Straumann（瑞士SLA）悅鋯非親水種植體植入術", 
      price: "原價 ¥18800",
      discountedPrice: '¥14800'
    },
    {
      service: "Straumann（瑞士）Roxolid瑞鋯親水  SLAcitive種植體植入術", 
      price: "原價 ¥26000",
      discountedPrice: '¥18800'
    }
  ],
  remark: 'pages.dental-service.implant.detail.remark'
}

const problemData = {
  title: 'pages.dental-service.implant.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.implant.problem.lists[0].Q',
      A: 'pages.dental-service.implant.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[1].Q',
      A: 'pages.dental-service.implant.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[2].Q',
      A: 'pages.dental-service.implant.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[3].Q',
      A: 'pages.dental-service.implant.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[4].Q',
      A: 'pages.dental-service.implant.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[5].Q',
      A: 'pages.dental-service.implant.problem.lists[5].A'
    },
  ]
}

const plagueData = {
  title: '是否有以下的缺牙困擾？',
  lists: [
    {
      type: 'text',
      context: '影響臉型'
    },
    {
      type: 'text',
      context: '咀嚼不順'
    },
    {
      type: 'img',
      context: 'https://static.cmereye.com/imgs/2023/09/6beac28d34c4d438.jpg'
    },
    {
      type: 'text',
      context: '牙槽骨流失'
    },
    {
      type: 'text',
      context: '容易蛀牙'
    },
    {
      type: 'text',
      context: '說話漏風'
    }
  ]
}

let noticeCurrent = ref(1)

const onSlideChange = (swiper:any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

let showYaAnim = ref(false)


onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
  window.addEventListener('contextmenu', function(e) {  
    e.preventDefault();  
  });
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

let implantCaseCurrent = ref(1)

//走马灯事件
const onSlideImplantCaseChange = (swiper:any) => {
  implantCaseCurrent.value = swiper.realIndex + 1
}

let implantCaseSwiperRef ={
  slideToLoop: (a)=>{},
  slidePrev: ()=>{},
  slideNext: ()=>{}
}

const handleLineCur = (_value:number) =>{
  implantCaseSwiperRef.slideToLoop(_value-1)
}

const setImplantCaseSwiperRef = (swiper:any) => {
  implantCaseSwiperRef = swiper;
}

const handleProcessBtn = (_type: string) => {
  implantCaseSwiperRef[_type]();
}

const implantCaseData = [
  {
    dataLists: [
      {
        title: '療程前',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-654.6nh16b1gl8o0.jpg'
        ]
      },
      {
        title: '療程後',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-655.3e6w9ehoi4g0.jpg',
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-429.60d0faxtxq00.jpg'
        ]
      }
    ]
  },
  {
    dataLists: [
      {
        title: '療程前',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-656.1sruabv8hag0.jpg'
        ]
      },
      {
        title: '療程後',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-657.46aijuwwb940.jpg',
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-658.1kva3b5gd928.jpg'
        ]
      }
    ]
  },
  {
    dataLists: [
      {
        title: '療程前',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-659.77ltqq7eplg0.jpg'
        ]
      },
      {
        title: '療程後',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-660.4vvjppol91q0.jpg',
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-661.3hny19y4e0g0.jpg'
        ]
      }
    ]
  },
  {
    dataLists: [
      {
        title: '療程前',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-662.4ftyh9pdkhe0.jpg'
        ]
      },
      {
        title: '療程後',
        imgs: [
          'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Rectangle-663.5ss61sod3qk0.jpg'
        ]
      }
    ]
  }
]
let yaImgCurrtNum = ref(6) 
const yaImgFu = (_idx,_type) => {
  if(_type){
    // console.log(_idx,'按住了')
    yaImgCurrtNum.value = _idx
  }else{
    // console.log(_idx,'不按了')
    yaImgCurrtNum.value = 6
  }
}

let Plant_brand_series_cur = ref(0)

const Plant_brand_series_data = [
  {
    id: '1101',
    name: ['美國','皓聖'],
    img: 'https://static.cmereye.com/imgs/2024/02/451f4fbf1a45ce90.png',
    logo: 'https://static.cmereye.com/imgs/2024/02/9badffc6183d36ba.png',
    lists: ['暢銷全球100多個國家','經濟實惠之選','即剝即種']
  },
  {
    id: '1102',
    name: ['韓國','奧齒泰'],
    img: 'https://static.cmereye.com/imgs/2024/02/21015f2908f11759.png',
    logo: 'https://static.cmereye.com/imgs/2024/02/3f53e24f1f9ce65a.png',
    lists: ['適合亞洲人種植','性價比高']
  },
  {
    id: '1103',
    name: ['瑞士','拓美親水'],
    img: 'https://static.cmereye.com/imgs/2024/02/b317ade36efb87d3.png',
    logo: 'https://static.cmereye.com/imgs/2024/02/1ed372ab9936505f.png',
    lists: ['癒合週期短','可於前牙使用','高效抗菌']
  },
  {
    id: '1104',
    name: ['德國','植體'],
    img: 'https://static.cmereye.com/imgs/2024/02/0c7521c0041ce4b1.png',
    logo: 'https://static.cmereye.com/imgs/2024/02/0db21351ca26a0a7.png',
    lists: ['德國老品牌精密傑作','完美保存牙骨及組織','全球終身保養']
  },
  {
    id: '1105',
    name: ['瑞士','士卓曼'],
    img: 'https://static.cmereye.com/imgs/2024/02/fac98f00c8e3f380.png',
    logo: 'https://static.cmereye.com/imgs/2024/02/c35e7ba905606dd0.png',
    lists: ['全球終身保養','全球認可最大植體品牌','癒合時間最短，最快３週完成','煙酒及糖尿病人士適用']
  }
]

const doctorData = {
  title: '植體品牌系列',
  lists: [
  {
    id: '101',
    name: '李川',
    job: '院長',
    addressType: '101',
    addressname: '羅湖區',
    text: '即刻植牙、微創植牙、牙齒美容修復、前牙全瓷美學修復等。',
    img: 'https://static.cmereye.com/imgs/2024/02/a24233463dca40da.png'
  },
  {
    id: '102',
    name: '盧勇輝',
    job: '院長',
    addressType: '101',
    addressname: '羅湖區',
    text: '牙周病系統治療，各類牙周微創手術，牙齒美容修復，牙周炎治療、牙體美學修復、牙齒缺損美學樹脂修復、牙齒美白、舒適微創拔牙等。',
    img: 'https://static.cmereye.com/imgs/2024/02/5965b5326d696a98.png'
  },
  {
    id: '103',
    name: '鞏賢平',
    job: '院長',
    addressType: '101',
    addressname: '羅湖區',
    text: '植牙修復，微創美觀修復，全口咬合重建等；熟練應用口腔顯微鏡並在顯微放大設備下進行植牙手術、牙周美觀手術及各類修復操作。',
    img: 'https://static.cmereye.com/imgs/2024/02/d515b22a846b996e.png'
  },
  {
    id: '104',
    name: '劉鑫',
    job: '院長',
    addressType: '102',
    addressname: '福田區',
    text: '各種疑難植牙、穿顴穿翼、全口無牙顎、上顎竇增高、複雜的軟硬組織移植、即時植牙即刻修復、前牙美觀、數位化和植牙導航等諸多領域。',
    img: 'https://static.cmereye.com/imgs/2024/02/0762d56bee690392.png'
  },
  {
    id: '105',
    name: '周小明',
    job: '院長',
    addressType: '102',
    addressname: '福田區',
    text: '各類口腔疾病診斷與治療、熟練進行微創植牙、即剝即種即刻修復等尖端技術。',
    img: 'https://static.cmereye.com/imgs/2024/02/169059476e4803ff.png'
  },
  {
    id: '106',
    name: '馮曉瑛',
    job: '院長',
    addressType: '103',
    addressname: '南山區',
    text: '複雜病例整體診療方案的設計、數位植牙修復技術等，對齒槽骨嚴重吸收的病例，全口活動義齒修復方面有深厚的技術功底及累積。',
    img: 'https://static.cmereye.com/imgs/2024/02/211667de3a4ffa59.png'
  }
]
}

</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig"/>
    <div class="dentistryServices">
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
      <div class="plague">
        <div class="plague-in">
          <div class="dentistryServices-title plague-title">
            <div class="dentistryServices-title-in bb plague-title-in">{{plagueData.title}}</div>
          </div>
          <div class="plague-lists">
            <div v-for="(plagueItem,plagueIndex) in plagueData.lists" :key="plagueIndex">
              <span v-if="plagueItem.type === 'text'">{{plagueItem.context}}</span>
              <img v-else :src="plagueItem.context" alt="">
            </div>
          </div>
        </div>
      </div>
      <ServiceIntroduceJY :introduceData="introduceJY" />
      <div class="Dental_implant_technology">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            種植牙技術
          </div>
        </div>
        <div class="Dental_implant_technology-context">
          為了提供精准化的種植牙服務，運用先進電腦圖形影像技術，對客戶進行定制化分析。根據口腔內CT掃描和光學掃描的數據，在電腦上重建下顎骨立體模型，旨在確保每次種植的精準性和成功率。
        </div>
        <div class="Dental_implant_technology-img">
          <img src="https://static.cmereye.com/imgs/2024/02/889bd45e5e2ee385.png" alt="">
        </div>
      </div>
      <div class="notice">
        <div class="dentistryServices-title notice-title">
          <div class="dentistryServices-title-in bb notice-title-in">{{$t(noticeData.title)}}</div>
        </div>
        <div class="notice-topText">
          <span v-for="(topTextItem,topTextIndex) in noticeData.topText" :key="topTextIndex">{{$t(topTextItem)}}</span>
        </div>
        <div class="notice-in">
          <div class="lists">
            <div class="lists-in" v-for="(noticeItem,noticeIndex) in noticeData.dataLists" :key="noticeIndex">
              <div class="name">{{noticeItem.name}}</div>
              <div class="merit">{{noticeItem.merit}}</div>
              <div class="shortcoming">{{noticeItem.shortcoming}}</div>
            </div>
          </div>
        </div>
        <div class="notice-bottomText pcBox">
          <span v-for="(bottomTextItem,bottomTextIndex) in noticeData.bottomText" :key="bottomTextIndex">{{$t(bottomTextItem)}}</span>
        </div>
      </div>
      <ServiceReason :reasonData="reasonData" />
      <div class="step">
        <div class="step-in">
          <div class="dentistryServices-title step-title">
            <div class="dentistryServices-title-in bb step-title-in">植牙6步曲</div>
          </div>
          <div class="step-lists">
            <div class="step-lists-in" v-for="(stepItem,stepIndex) in stepData.lists" :key="stepIndex">
              <div class="step-lists-in-l">
                <div class="title">
                  <img src="@/assets/images/icon_13.png" alt="">
                  {{stepItem.title}}
                </div>
                <div class="image"><img :src="stepItem.img" alt=""></div>
                <div class="name">{{stepItem.name}}</div>
                <div class="context">{{stepItem.context}}</div>
              </div>
              <div class="step-lists-in-r">
                <img src="@/assets/images/icon_12.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Plant_brand_series">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            植體品牌系列
          </div>
        </div>
        <div class="Plant_brand_series-tab">
          <span :class="{active: Plant_brand_series_cur === tabIndex}" v-for="(tabItem,tabIndex) in Plant_brand_series_data" :key="tabIndex" @click="Plant_brand_series_cur = tabIndex">
            <span v-for="(tabspanitem,tabspanindex) in tabItem.name" :key='tabspanindex'>
              {{tabspanitem}}
            </span>
          </span>
        </div>
        <div class="Plant_brand_series-content">
          <div class="Plant_brand_series-content-l">
            <img :src="Plant_brand_series_data[Plant_brand_series_cur].img" alt="">
          </div>
          <div class="Plant_brand_series-content-r">
            <div><img :src="Plant_brand_series_data[Plant_brand_series_cur].logo" alt=""></div>
            <div>
              <span v-for="(tabspanitem,tabspanindex) in Plant_brand_series_data[Plant_brand_series_cur].name" :key='tabspanindex'>
                {{tabspanitem}}
              </span>
            </div>
            <div>
              <span v-for="(item,index) in Plant_brand_series_data[Plant_brand_series_cur].lists" :key="index">
                {{item}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="doctorTeam">
        <ServiceSpecializedTeam :doctorData="doctorData" />
      </div>
      <div class="implantCase">
        <div class="implantCase-title dentistryServices-title">
          <div class="dentistryServices-title-in bb implantCase-title-in">植牙案例</div>
        </div>
        <div class="implantCase-content">
          <swiper
            class="implantCaseBoxSwiper"
            :loop="true"
            :autoplay="{
              delay: 4000,
            }"
            @swiper="setImplantCaseSwiperRef"
            @slideChange="onSlideImplantCaseChange"
          >
            <swiper-slide v-for="(implantCaseItem,implantCaseIndex) in implantCaseData" :key="implantCaseIndex">
              <div class="implantCase-content-in">
                <div :class="['implantCaseText',{act: yaImgCurrtNum===implantCaseIndex}]">{{yaImgCurrtNum===implantCaseIndex ? 'before' : 'after'}}</div>
                <div class="implantCaseBox-t">
                  <div :style="{background:`url(${implantCaseItem.dataLists[0].imgs[0]})`,'background-size': '100% 100%'}" :key="implantCaseIndex">
                    <img class="ya" :style="{opacity:(yaImgCurrtNum===implantCaseIndex ? 0 : 1)}" :src="implantCaseItem.dataLists[1].imgs[0]" alt="">
                    <img class="rightMbIcon" src="https://static.cmereye.com/imgs/2024/02/6f085bb1a3aef878.png" alt="" @touchstart="yaImgFu(implantCaseIndex,true)" @touchend="yaImgFu(implantCaseIndex,false)">
                  </div>
                  <!-- <div>
                    <img :src="implantCaseItem.dataLists[1].imgs[0]">
                  </div> -->
                </div>
                <div class="implantCaseBox-b">
                  <img :class="{firstBox: implantCaseIndex===0}" :src="implantCaseItem.dataLists[1].imgs[1]">
                </div>
              </div>
            </swiper-slide>
          </Swiper>
          <div class="leftBtn" @click="handleProcessBtn('slidePrev')">
            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="107" viewBox="0 0 107 107" fill="none">
              <g filter="url(#filter0_d_1167_2367)">
                <circle cx="51.5" cy="51.5" r="49.5" fill="white"/>
              </g>
              <path d="M59.0859 69.3037L38.999 51.4994L59.0859 33.695" stroke="#FC1682" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <filter id="filter0_d_1167_2367" x="0" y="0" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="2" dy="2"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.0862745 0 0 0 0 0.509804 0 0 0 0.24 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1167_2367"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1167_2367" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          <div class="rightBtn" @click="handleProcessBtn('slideNext')">
            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="107" viewBox="0 0 107 107" fill="none">
              <g filter="url(#filter0_d_1166_2259)">
                <circle cx="51.5" cy="51.5" r="49.5" fill="white"/>
              </g>
              <path d="M43 31L65.6154 51.4878L43 73" stroke="#FC1682" stroke-width="9.69231" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <filter id="filter0_d_1166_2259" x="0" y="0" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="2" dy="2"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.0862745 0 0 0 0 0.509804 0 0 0 0.24 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1166_2259"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1166_2259" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          <div class="implantCase-content-line">
            <PageSwiperPointLine :latestNewsNum="implantCaseData.length" :latestNewsCurrent="implantCaseCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">{{$t('pages.dental-service.implant.note.title')}}</div>
        </div>
        <div class="noteCard pageCon">
          <div class="noteCard-in" v-for="(note,noteIndex) in noteLists" :key="noteIndex">
            <div class="noteCard-in-image">
              <img :src="note.img" alt="">
            </div>
            <div class="noteCard-in-name">{{$t(note.name)}}</div>
          </div>
        </div>
      </div>
      <ServiceCase />
      <!-- <ServiceProblem :problemData="problemData" /> -->
      <serviceCard />
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .dentistryServices{
    background: #fff;
    padding: 143px 0;
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
    .plague{
      width: 100%;
      background: linear-gradient(135deg, rgba(255, 241, 240, 0.25) 0%, rgba(255, 221, 218, 0.25) 100%);
      padding: 98px 0;
      margin-top: 30px;
      &-in{
        width: 100%;
        max-width: 803px;
        margin: 0 auto;
      }
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      &-lists{
        margin-top: 98px;
        display: flex;
        flex-wrap: wrap;
        &>div{
          display: flex;
          justify-content: center;
          &:nth-of-type(1){
            width: 100%;
            span{
              margin-bottom: -60px;
            }
          }
          &:nth-of-type(2){
            width: calc(100% / 3);
          }
          &:nth-of-type(3){
            width: calc(100% / 3);
            img{
              margin-bottom: -80px;
              margin-top: 80px;
            }
          }
          &:nth-of-type(4){
            width: calc(100% / 3);
          }
          &:nth-of-type(5){
            width: 50%;
            justify-content: flex-end;
            margin-top: 53px;
            padding-right: 33.5px;
          }
          &:nth-of-type(6){
            margin-top: 53px;
            width: 50%;
            justify-content: flex-start;
            padding-left: 33.5px;
          }
          span{
            width: 260px;
            height: 260px;
            font-size: 35px;
            font-weight: 900;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 50%;
            background: var(--indexColor3);
          }
          img{
            width: 260px;
            height: 260px;
            border-radius: 50%;
          }
        }
      }
    }
    .Dental_implant_technology{
      margin-top: 80px;
      &-context{
        width: 100%;
        max-width: 1016px;
        margin: 20px auto 50px;
        font-size: 20px;
        line-height: 160%;
        text-align: center;
      }
      &-img{
        width: 100%;
        max-width: 1038px;
        margin: 0 auto;
      }
    }
    .notice{
      width: 100%;
      max-width: 1450px;
      margin: 200px auto 0;
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      &-topText,&-bottomText{
        width: 100%;
        span{
          display: block;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          text-align: center;
          color: #666666;
        }
      }
      &-topText{
        margin: 35px auto 0;
        display: none;
      }
      &-bottomText{
        margin: 54px auto 0;
      }
      &-in{
        width: 90%;
        margin: 54px auto 0;
        .lists{
          border-radius: 60px;
          overflow: hidden;
          &-in{
            display: flex;
            &>div{
              background: var(--indexColor2);
              margin-bottom: 8px;
              padding: 50px 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              color: #666666;
              &:nth-of-type(1){
                padding: 0;
                flex: 1;
                color: var(--indexColor);
                font-weight: 900;
              }
              &:nth-of-type(2){
                width: 43.5%;
              }
              &:nth-of-type(3){
                width: 43.5%;
              }
              &:not(:last-child){
                margin-right: 8px;
              }
            }
            &:nth-of-type(1){
              &>div{
                padding: 13px 0;
                font-size: 28px;
                font-weight: 600;
                color: #fff;
                background: var(--indexColor);
                margin-bottom: 0;
              }
            }
            &:last-child{
              &>div{
                margin-bottom: 0;
              }
            }
          }
        }
      }
      &-line{
        width: 83px;
        margin: 22px auto;
      }
    }
    .step{
      width: 100%;
      background: linear-gradient(90deg, rgba(255, 241, 240, 0.00) 0%, rgba(255, 241, 240, 0.70) 12.5%, rgba(255, 241, 240, 0.70) 81.99%, rgba(255, 241, 240, 0.00) 100%);
      padding: 98px 0;
      margin-top: 206px;
      &-in{
        width: 100%;
        max-width: 1444px;
        margin: 0 auto;
      }
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      &-lists{
        margin-top: 98px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-in{
          display: flex;
          align-items: center;
          // width: 30%;
          margin-bottom: 60px;
          &:nth-of-type(n+4){
            margin-bottom: 0;
          }
          // &:nth-of-type(4),&:nth-of-type(5){
          //   .step-lists-in-l{
          //     .name{
          //       clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
          //     }
          //   }
          // }
          &:nth-of-type(3),&:nth-of-type(6){
            .step-lists-in-r{
              display: none;
            }
          }
          &-l{
            width: 100%;
            max-width: 400px;
            height: 100%;
            display: flex;
            flex-direction: column;
            .title{
              display: flex;
              align-items: center;
              font-size: 35px;
              font-weight: 700;
              margin-bottom: 15px;
              color: #666666;
              img{
                height: auto;
                margin-right: 15px;
              }
            }
            .image{
              width: 100%;
              img{
                width: 100%;
                border-radius: 30px;
              }
            }
            .name{
              color: #fff;
              font-size: 20px;
              font-weight: 700;
              background: var(--indexColor1);
              margin-top: 24px;
              margin-bottom: 15px;
              padding: 8px 15px;
              clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
            }
            .context{
              font-size: 20px;
              font-weight: 700;
              color: #666666;
            }
          }
          &-r{
            margin-left: 50px;
            img{
              width: 15px;
              height: auto;
            }
          }
        }
      }
    }
    .Plant_brand_series{
      margin-top: 80px;
      &-tab{
        width: 100%;
        max-width: 864px;
        margin: 30px auto;
        display: flex;
        &>span{
          flex: 1;
          color: var(--indexColor1);
          font-size: 22px;
          border-top: 2px solid var(--indexColor1);
          border-bottom: 2px solid var(--indexColor1);
          border-left: 2px solid var(--indexColor1);
          padding: 7px 0;
          text-align: center;
          cursor: pointer;
          transition: all .3s;
          &:first-child{
            border-radius: 5px 0 0 5px;
          }
          &:last-child{
            border-radius: 0 5px 5px 0;
            border-right: 2px solid var(--indexColor1);
          }
          &:hover,&.active{
            background: var(--indexColor1);
            color: #fff;
          }
        }
      }
      &-content{
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        &-l{
          width: calc(300 / 700 * 100%);
          margin-right: calc(30 / 695 * 100%);
          img{
            width: 100%;
          }
        }
        &-r{
          flex: 1;
          &>div{
            &>img{
              max-width: 100%;
            }
            &:nth-of-type(2){
              width: 70%;
              color: #fff;
              background: var(--indexColor1);
              font-size: 30px;
              line-height: 160%;
              padding-left: 17px;
              clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
              margin: 10px 0;
            }
            &:nth-of-type(3){
              display: flex;
              flex-direction: column;
              span{
                font-size: 26px;
                line-height: 1.6;
                &::before{
                  content: '·';
                  display: inline-block;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
    .doctorTeam{
      margin-top: 80px;
    }
    .note{
      margin-top: 206px;
      &-title{
        &-in{
          font-size: 50px;
        }
      }
      .noteCard{
        display: flex;
        flex-wrap: wrap;
        margin: 54px auto 0;
        width: 100%;
        max-width: 1090px;
        &-in{
          cursor: pointer;
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 45px;
          box-sizing: border-box;
          &-image{
            width: 100%;
            height: 0;
            padding-top: 100%;
            position: relative;
            background: var(--indexColor2);
            border-radius: 10px;
            img{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              max-width: 90%;
              max-height: 90%;
            }
          }
          &:nth-of-type(1)>&-image,&:nth-of-type(3)>&-image,&:nth-of-type(6)>&-image,&:nth-of-type(8)>&-image{
            background: #FFF1F0;
          }
          &-name{
            height: 64px;
            line-height: 64px;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: #666666;
            text-align: center;
          }
        }
      }
    }
    .implantCase{
      margin-top: 112px;
      &-content{
        margin-top: 40px;
        padding: 127px 0;
        background: linear-gradient(269deg, rgba(255, 241, 240, 0.00) 0.53%, rgba(255, 241, 240, 0.70) 12.92%, rgba(255, 241, 240, 0.70) 81.78%, rgba(255, 241, 240, 0.00) 99.62%);
        width: 100%;
        position: relative;
        cursor: url(@/assets/images/icon_17.svg)54 54, auto;
        .implantCaseBoxSwiper{
          width: 100%;
          margin: 0 auto;
          .implantCaseText{
            display: none;
          }
          .implantCaseBox{
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: max-content;
            margin: 0 auto;
            
            &-t{
              width: 100%;
              max-width: 562px;
              margin: 0 auto;
              color: #4D4D4D;
              font-size: 35px;
              font-style: normal;
              font-weight: 700;
              line-height: 160%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              border-radius: 30px;
              overflow: hidden;
              transition: all .3s;
              cursor: url(@/assets/images/icon_18.svg)54 54, auto;
              div{
                width: 100%;
              }
              img{
                width: 100%;
                transition: all .3s;
              }
              .rightMbIcon{
                display: none;
              }
              
            }
            &:not(:first-child){
              .implantCaseBox-t{
                margin-top: 59px;
              }
            }
            &-b{
              margin-top: 60px;
              img{
                  border-radius: 30px;
                  margin: 0 auto;
                }
              // div{
              //   img{
              //     border-radius: 30px;
              //     margin: 0 auto;
              //   }
              //   &:not(:first-child){
              //     margin-top: 33px;
              //   }
              // }
            }
          }
        }
        .leftBtn{
          position: absolute;
          left: calc((100% - 562px - 495px) / 2);
          top: 25%;
          cursor: pointer;
          z-index: 2;
        }
        .rightBtn{
          position: absolute;
          right: calc((100% - 562px - 495px) / 2);
          top: 25%;
          cursor: pointer;
          z-index: 2;
        }
        &-line{
          width: 326px;
          margin: 60px auto 0;
        }
      }
    }
  }
  @keyframes btnAnim {
    0%{
      clip-path: polygon(-10% 0,0 0,-10% 100%,-20% 100%);
    }
    50%{
      clip-path: polygon(50% 0, 60% 0, 50% 100%,40% 100%);
    }
    100%{
      clip-path: polygon(110% 0, 120% 0,110% 100%,100% 100%);
    }
  }
  @media (any-hover: hover) {
    .dentistryServices{
      .implantCase{
        &-content{
          .implantCaseBoxSwiper{
            .implantCaseBox{
              &-t{
                div{
                  .ya{
                    &:hover{
                      opacity: 0 !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1452px) {
    .dentistryServices{
      padding: 110px 0;
      .note{
        .noteCard{
          &-in{
            padding: 0 3vw;
             &-image{
              img{
                max-width: 80%;
                max-height: 80%;
              }
              &-name{
                height: 60px;
                line-height: 60px;
              }
            }
          }
        }
      }
      .tabNav {
        font-size: 1.5vw;
        margin-top: 20px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    .dentistryServices{
      .implantCase{
        &-content{
          .leftBtn{
            left: 0;
          }
          .rightBtn{
            right: 0;
          }
        }
      }

    }
  }
  @media (min-width: 768px) and (max-width: 890px) {
    .dentistryServices{
      .note{
        &-in{
          &-ul{
            &-li{
              margin-right: 3vw;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    @keyframes identifier {
      0% {
          background: url(https://static.cmereye.com/imgs/2024/02/ea9a267c45465e86.png);
          background-size: 100% 100%;
      }
      50% {
          background: url(https://static.cmereye.com/imgs/2024/02/265b194eda50c574.png);
          background-size: 100% 100%;
      }
      95% {
          background: url(https://static.cmereye.com/imgs/2024/02/b56183c6f0ad64b9.png);
          background-size: 100% 100%;
      }
      to {
          background: url(https://static.cmereye.com/imgs/2024/02/ea9a267c45465e86.png);
          background-size: 100% 100%;
      }
    }
    .dentistryServices{
      padding: 90px 0;
      .tabNav {
        padding: 30px;
        font-size: 1rem;
        margin-top: 0;
      }
      .Dental_implant_technology{
        &-context{
          font-size: 16px;
          line-height: 200%;
          padding: 0 30px;
          text-align: justify;
          margin: 20px auto 30px;
        }
      }
      .plague{
        margin-top: 0;
        padding: 31px 0 44px;
        &-title{
          &-in{
            font-size: 26px;
          }
        }
        &-lists{
          margin-top: 34px;
          &>div{
            &:nth-of-type(1){
              span{
                margin-bottom: -15px;
              }
            }
            &:nth-of-type(2){
              justify-content: flex-end;
            }
            &:nth-of-type(3){
              img{
                margin-bottom: -30px;
                margin-top: 30px;
              }
            }
            &:nth-of-type(4){
              justify-content: flex-start;
            }
            &:nth-of-type(5){
              margin-top: 24px;
              padding-right: 15px;
            }
            &:nth-of-type(6){
              margin-top: 24px;
              padding-left: 15px;
            }
            span{
              width: 110px;
              height: 110px;
              font-size: 16px;
            }
            img{
              width: 110px;
              height: 110px;
            }
          }
        }
      }
      .note{
        margin-top: 50px;
        &-title{
          &-in{
            font-size: 26px;
          }
        }
        .noteCard{
          margin: 34px auto 0;
          padding: 0 15px;
          box-sizing: border-box;
          &-in{
            width: calc(100% / 3);
            padding: 0 5px;
            &-image{
              img{
                max-width: 70%;
                max-height: 70%;
              }
            }
            &:nth-of-type(5)>&-image,&:nth-of-type(7)>&-image{
              background: #FFF1F0;
            }
            &:nth-of-type(6)>&-image,&:nth-of-type(8)>&-image{
              background: var(--indexColor2);
            }
            &-name{
              height: 30px;
              line-height: 30px;
              margin-bottom: 25px;
              font-size: 14px;
            }
          }
        }
      }
      .notice{
        width: auto;
        margin: 74px 30px 0;
        &-title{
          &-in{
            font-size: 26px;
            white-space: pre-wrap;
          }
        }
        &-topText,&-bottomText{
          // padding: 0 30px;
          span{
            display: inline;
            font-size: 15px;
          }
        }
        &-topText{
          margin: 31px auto 0;
          text-align: center;
          display: block;
        }
        &-bottomText{
          display: none;
        }
        &-in{
          width: 100%;
          margin: 35px 0 0;
          .lists{
            border-radius: 20px;
            &-in{
              &>div{
                padding: 30px 10px;
                font-size: 12px;
                margin-bottom: 2px;
                &:nth-of-type(1){
                  font-size: 15px;
                  padding: 0 10px;
                }
                &:nth-of-type(2){
                  width: 39%;
                }
                &:nth-of-type(3){
                  width: 39%;
                }
                &:not(:last-child){
                  margin-right: 2px;
                }
              }
              &:nth-of-type(1){
                &>div{
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
      .step{
        background: linear-gradient(0deg, rgba(255, 241, 240, 0.00) 0%, rgba(255, 241, 240, 0.70) 12.5%, rgba(255, 241, 240, 0.70) 81.99%, rgba(255, 241, 240, 0.00) 100%);
        margin-top: 25px;
        padding: 46px 0;
        &-title{
          &-in{
            font-size: 26px;
          }
        }
        &-lists{
          width: auto;
          margin: 57px 40px 0;
          &-in{
            flex-direction: column;
            margin-bottom: 30px;
            &:nth-of-type(n+4){
              margin-bottom: 30px;
            }
            &:nth-of-type(3){
              .step-lists-in-r{
                display: block;
              }
            }
            &-l{
              .title{
                padding: 0 6px;
                font-size: 26px;
              }
              .image{
                padding: 0 6px;
              }
              .name{
                margin-top: -25px;
                font-size: 16px;
                clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
              }
              .context{
                font-size: 16px;
              }
            }
            &-r{
              margin-top: 30px;
              margin-left: 0;
              img{
                transform: rotate(90deg);
              }
            }
          }
        }
      }
      .Plant_brand_series{
        margin-top: 30px;
        &-tab{
          padding: 0 30px;
          &>span{
            font-size: 15px;
            line-height: 160%;
            &>span{
              display: block;
            }
            &:nth-of-type(1){
              flex: 1;
            }
            &:nth-of-type(2){
              flex: 1.2;
            }
            &:nth-of-type(3){
              flex: 1.4;
            }
            &:nth-of-type(4){
              flex: 1;
            }
            &:nth-of-type(5){
              flex: 1.2;
            }
            &:hover{
              background: none;
              color: var(--indexColor1);
            }
            &.active{
              background: var(--indexColor1);
              color: #fff;
            }
          }
        }
        &-content{
          padding: 0 30px;
          &-r{
            &>div{
              &>img{
                max-width: 80%;
              }
              &:nth-of-type(2){
                width: 90%;
                font-size: 15px;
                padding: 2px 0 2px 15px;
                margin: 5px 0;
                clip-path: polygon(0 0, 87% 0, 100% 100%, 0 100%);
              }
              &:nth-of-type(3){
                span{
                  font-size: 12px;
                  &::before{
                    margin-right: 6px;
                    font-size: 20px;
                    line-height: 100%;
                    vertical-align: middle;
                    margin-top: -2px;
                  }
                }
              }
            }
          }
        }
      }
      .doctorTeam{
        margin-top: 60px;
      }
      .implantCase{
        margin-top: 90px;
        &-content{
          margin-top: 31px;
          background: linear-gradient(0deg, rgba(255, 241, 240, 0.00) 0%, rgba(255, 241, 240, 0.70) 12.5%, rgba(255, 241, 240, 0.70) 81.99%, rgba(255, 241, 240, 0.00) 100%);
          padding: 16px 0 27px;
          .implantCaseBoxSwiper{
            .implantCaseText{
              display: block;
              // text-align: center;
              font-size: 25px;
              font-weight: 600;
              margin-bottom: 5px;
              color: var(--indexColor1);
              padding: 0 44px;
              &.act{
                color: #79828d;
              }
            }
            .implantCaseBox{
              padding: 0 44px;
              width: 100%;
              box-sizing: border-box;
              &-t{
                font-size: 26px;
                margin: 0 44px;
                width: auto;
                border-radius: 15px;
                div{
                  position: relative;
                  -webkit-touch-callout:none;
                }
                .rightMbIcon{
                  display: block;
                  position: absolute;
                  width: 27px;
                  height: auto;
                  right: 10px;
                  top: 10px;
                }
                
              }
              &-b{
              margin-top: 30px;
              padding: 0 44px;
              img{
                  border-radius: 20px;
                  margin: 0 auto;
                  &.firstBox{
                    width: 50%;
                  }
                }
              }
            }
            
          }
          .leftBtn{
            top: 20%;
            left: 13px;
            svg{
              width: 52px;
              height: 52px;
            }
          }
          .rightBtn{
            top: 20%;
            right: 13px;
            svg{
              width: 52px;
              height: 52px;
            }
          }
          &-line{
            width: 216px;
            margin: 30px auto 0;
          }
          &-in{
            padding-bottom: 40px;
            position: relative;
            &:after {
              content: "";
              display: inline-block;
              width: 17px;
              height: 28px;
              position: absolute;
              top: 0px;
              right: 60px;
              -webkit-animation: identifier .9s infinite;
              animation: identifier .9s infinite
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 360px) {
    .dentistryServices{
      .note{
        .noteCard{
          &-in{
            &-name{
              font-size: 15px;
            }
          }
        }
      }
    }
  }
</style>