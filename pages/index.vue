<script lang="ts" setup>
import gsap from 'gsap'
import { Autoplay } from 'swiper'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAppState } from '~/stores/appState'
import doctorLists_cs from '~/assets/js/doctor'
import { toWhatsApp } from '~/assets/js/common'
import { useElementBounding, useWindowSize } from '@vueuse/core'
import { formatDate, toDateType } from '~/assets/js/utils'
import { json } from 'stream/consumers'
const appState = useAppState()
const { t } = useLang()
useHead({
  title: 'CKJ愛康健齒科連鎖 | 香港官方網站 | 長者醫療券大灣區試點',
  titleTemplate: '',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健集團是大灣區牙科連鎖機構，其口腔醫院為香港政府指定長者醫療券大灣區試點。（香港熱線: 3892 5049）14間門診有超過20種牙科治療項目，專注為港服務超過29年，可線上預約。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳愛康健口腔醫院 愛康健齒科集團 基楚牙科 美容牙科 深圳牙科 醫療券 長者醫療券大灣區試點 深圳睇牙 深圳整牙 種植牙 假牙 洗牙 補牙 拔牙 智慧齒 杜牙根 根管治療 兒童牙科 牙齒美白 牙齒檢查 矯齒 箍牙 牙醫 牙医 深圳 羅湖 朱咪咪 掛號收費 牙科價目表 線上預約 愛康健齒科,深圳爱康健口腔医院,深圳市口腔医院,深圳牙齿矫正多少钱,愛康健口腔醫院,希玛爱康健,深圳口腔医院,深圳牙科医院,深圳种植牙,深圳植牙價錢,愛康健,香港長者醫療券,愛康健牙科,愛康健牙科中心,愛康健牙科診所',
    },
  ],
})

const caseSharingLists = [
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/72a1864e2021e804.jpg',
  },
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/f1fab4a43cdea943.jpg',
  },
]

const caseSharingTopData = {
  type: 'pages.index.caseSharing.caseSharingTopData.type',
  name: 'pages.index.caseSharing.caseSharingTopData.name',
  skill: 'pages.index.caseSharing.caseSharingTopData.skill',
  process: 'pages.index.caseSharing.caseSharingTopData.process',
  text: 'pages.index.caseSharing.caseSharingTopData.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/06/b6685121c74c93e0.png',
}

//医生模块轮播图事件
let doctorTeamCurrent = ref(1)
const onSlideDoctorTeamSwiperChange = (swiper: any) => {
  doctorTeamCurrent.value = swiper.realIndex + 1
}

let areaTabCurNum = computed(() => {
  return appState.areaTabCurNum
})

watch(
  areaTabCurNum,
  (newValue, oldValue) => {
    changeAreaTabCur(newValue)
  },
  {
    deep: true,
  }
)

const headerConfigData = {
  img: 'https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/216458f63817b47e.jpg',
  pageName: 'course-new',
  pcText: ['重拾自信笑容', '愛牙愛己，由你做起'],
  mbText: ['重拾自信笑容', '愛牙愛己，由你做起'],
}

let dentalProfessionCur = ref('0')
const dentalProfessionList = [
  {
    id: '101',
    name: '種植科',
  },
  {
    id: '102',
    name: '修復科',
  },
  {
    id: '103',
    name: '矯正科',
  },
  {
    id: '104',
    name: '牙髓病科',
  },
  {
    id: '105',
    name: '牙周病科',
  },
  {
    id: '106',
    name: '兒童牙科',
  },
  {
    id: '107',
    name: '口腔頜面外科',
  },
]

let doctorCur = ref('')

let actDoctorListd: any = ref([])

const changleDoctorLists: any = () => {
  let a = doctorLists_cs[appState.areaTabCurNum]
  let b =
    a.filter((temp: any) => {
      return (
        temp.dentalProfessionId.includes(dentalProfessionCur.value) &&
        temp.isIndexShow
      )
    }) || []
  actDoctorListd.value = b
}
let loading = ref(false)
const handletab2 = async (id: string, dpc: Boolean = false) => {
  if (!dpc && dentalProfessionCur.value === id) return
  actDoctorListd.value = []
  loading.value = true
  setTimeout(() => {
    dentalProfessionCur.value = id
    changleDoctorLists()
    doctorCur.value =
      actDoctorListd.value.length > 0 ? actDoctorListd.value[0].id : ''
    nextTick(() => {
      doctorItemSwiper.slideToLoop('0')
    })
    loading.value = false
  }, 500)
}
const changeAreaTabCur = (_idx: any) => {
  if (_idx === 3) {
    handletab2('102', true)
  } else {
    handletab2('101', true)
  }
}
const handleDoctorItem = (id: any) => {
  doctorCur.value = id
  let _idx = actDoctorListd.value.findIndex((item) => item.id === id) || 0
  doctorItemSwiper.slideToLoop(_idx)
}
let doctorItemSwiper: any = {
  slideToLoop: (a) => {},
}

const setDoctorItemSwiper = (swiper: any) => {
  doctorItemSwiper = swiper
}
const doctorItemSlideChange = (swiper) => {
  nextTick(() => {
    doctorCur.value = actDoctorListd.value[swiper.realIndex].id || ''
    doctorTabSwiper_pc.slideToLoop(swiper.realIndex)
    doctorTabSwiper_mb.slideToLoop(swiper.realIndex)
  })
}
let doctorTabSwiper_pc = {
  slideToLoop: (a) => {},
}
let doctorTabSwiper_mb = {
  slideToLoop: (a) => {},
}
const setDoctorTabSwiperRef_pc = (swiper: any) => {
  doctorTabSwiper_pc = swiper
}
const setDoctorTabSwiperRef_mb = (swiper: any) => {
  doctorTabSwiper_mb = swiper
}
const changeDentalProfessionList = () => {
  let _lists: any = []
  if (doctorLists_cs[appState.areaTabCurNum].length > 0) {
    for (var i = 0; i < doctorLists_cs[appState.areaTabCurNum].length; i++) {
      if (doctorLists_cs[appState.areaTabCurNum][i].isIndexShow) {
        _lists = [
          ..._lists,
          ...doctorLists_cs[appState.areaTabCurNum][i].dentalProfessionId,
        ]
        _lists = [...new Set(_lists)]
      }
    }
  }
  return dentalProfessionList.filter((item) => _lists.includes(item.id)) || []
}

let orgTabCur = ref(0)
const orgTabLists = ['監管單位', '戰略合作', '媒體合作', '服務客戶']
const orgLists = [
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-2001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2007.png',
  ],
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-1001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1007.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1008.png',
  ],
  [
    'https://static.cmereye.com/imgs/2024/05/10fa105dea15be81.png',
    'https://static.cmereye.com/imgs/2024/04/0a0cc588677cf1ab.png',
    'https://static.cmereye.com/imgs/2024/04/746c9bc800d9bd68.png',
    'https://static.cmereye.com/imgs/2024/04/9dd67f204905f590.png',
    'https://static.cmereye.com/imgs/2024/04/438936f0a5412fd7.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3007.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3008.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3009.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3010.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3011.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3012.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3013.png',
  ],
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-4001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4007.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4008.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4009.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4010.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4011.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4012.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4013.png',
  ],
]
const handleorgtabfun = (orgTabIndex) => {
  orgTabCur.value = orgTabIndex
  indexOrgSwiperRef.slideToLoop(orgTabIndex)
}
let indexOrgSwiperRef = {
  slideToLoop: (a) => {},
}
const setIndexOrgSwiperRef = (swiper: any) => {
  indexOrgSwiperRef = swiper
}
const onIndexOrgSlideChange = (swiper) => {
  orgTabCur.value = swiper.realIndex ? Number(swiper.realIndex) : 0
}

const doctorTeam = ref(null)
// const { top,bottom } = useElementBounding(doctorTeam)
const { width } = useWindowSize()

let saveData = ref({
  media_coverage_0: [],
  media_coverage_1: [],
  newsLists_1_0: [],
  newsLists_1_1: [],
  newsLists_2_0: [],
  newsLists_2_1: [],
  newsLists_3_0: [],
  newsLists_3_1: [],
  newsData_0: [],
  newsData_1: [],
  newsData_2: [],
})
const handlemedia_coverage = async (idx) => {
  if (media_coverage_cur_tab.value === idx) return
  media_coverage_cur_tab.value = idx
  let _lists = saveData.value[`media_coverage_${idx}`]
  if (_lists && _lists.length) {
    media_coverage_lists.value = _lists
  } else {
    let _order = 'date'
    if (idx === 0) _order = 'visits'
    let a: any = await getNewsLists(14, 5, _order)
    media_coverage_lists.value = a
    saveData.value[`media_coverage_${idx}`] = a
  }
}

const getNewsLists = async (
  actType = 14,
  actPageNum = 5,
  order = 'date',
  loading = false,
  retuse = []
) => {
  loading = true
  try {
    const _res: any = await useFetch(
      `https://admin.ckjhk.com/api.php/list/${actType}/page/1/num/${actPageNum}/order/${order}`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (res) {
      retuse = res.data.map((item) => {
        let _Showpics = item.pics.split(',')[0] === ''
        return {
          id: item.id || '',
          logo:
            (item.ext_news_logo.indexOf('/static/upload/image') !== -1
              ? `https://admin.ckjhk.com${item.ext_news_logo}`
              : item.ext_news_logo) || '',
          img:
            (item.ico.indexOf('/static/upload/image') !== -1
              ? `https://admin.ckjhk.com${item.ico}`
              : item.ico) || '',
          desc: item.ext_news_desc || '',
          name: item.title || '',
          time:
            formatDate(
              actType === 16 ? item.update_time : item.ext_news_time
            ) || '',
          hashtag: [null, ''].includes(item.ext_news_hashtag)
            ? []
            : item.ext_news_hashtag.split(','),
          pics: !_Showpics
            ? item.pics.split(',').map((tt) => {
                return (
                  (tt.indexOf('/static/upload/image') !== -1
                    ? `https://admin.ckjhk.com${tt}`
                    : tt) || ''
                )
              })
            : [
                (item.ico.indexOf('/static/upload/image') !== -1
                  ? `https://admin.ckjhk.com${item.ico}`
                  : item.ico) || '',
              ],
        }
      })
    }
    loading = false
  } catch (err) {
    loading = false
  }
  return retuse
}

const sectionBoxImage = [
  'https://static.cmereye.com/imgs/2024/05/d9ac62b96ae1454c.jpg',
  'https://static.cmereye.com/imgs/2024/05/1f0c166a1a9b240f.jpg',
  'https://static.cmereye.com/imgs/2024/05/47e396ed7c3b17ee.jpg',
  'https://static.cmereye.com/imgs/2024/05/4baebbe0a7bf99c3.png',
]
let media_coverage_cur_tab = ref(2)
const media_coverage_lists: any = ref([])
const Dental_knowledge = [
  {
    name: '種植牙',
    context:
      '利用鈦金屬等物料製作成植體，然後植入進行牙槽骨當中，代替牙根以作支撐，然後在上面植入假牙、牙橋或假牙托來填補空缺的牙齒。隨着醫療技術的進步，現在不僅有傳統的植牙方式，還有微創植牙。',
    img: '',
    lists: [
      {
        Q: 'pages.dental-service.implant.problem.lists[0].Q',
        A: 'pages.dental-service.implant.problem.lists[0].A',
      },
      {
        Q: 'pages.dental-service.implant.problem.lists[1].Q',
        A: 'pages.dental-service.implant.problem.lists[1].A',
      },
      {
        Q: 'pages.dental-service.implant.problem.lists[2].Q',
        A: 'pages.dental-service.implant.problem.lists[2].A',
      },
      {
        Q: 'pages.dental-service.implant.problem.lists[3].Q',
        A: 'pages.dental-service.implant.problem.lists[3].A',
      },
      {
        Q: 'pages.dental-service.implant.problem.lists[4].Q',
        A: 'pages.dental-service.implant.problem.lists[4].A',
      },
      {
        Q: 'pages.dental-service.implant.problem.lists[5].Q',
        A: 'pages.dental-service.implant.problem.lists[5].A',
      },
    ],
  },
  {
    name: '洗牙',
    context:
      '提供洗牙和深層洗牙服務，定期洗牙有效去除牙齒上的牙垢、牙菌膜和牙結石，更能預防牙周病或其他口腔問題。建議每半年至一年進行一次洗牙，為您的口腔健康護航。',
    img: '',
    lists: [
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
  },
  {
    name: '補牙',
    context:
      '亦稱為「牙體修復」，透過使用適當的物料填補因蛀牙或其他原因導致的牙齒組織缺失部位，以恢復牙齒的功能、完整性和形態。同時，補牙可用於美觀的填補，使笑容更加協調美觀。',
    img: '',
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
  },
  {
    name: '全瓷貼片',
    context:
      '瓷貼片有助改善牙齒的形狀、長度、外觀及顏色，達到牙齒整齊和美白的效果。把度身訂製的纖薄瓷貼片黏附於牙齒表層，效果自然，改善外觀。',
    img: '',
    lists: [
      {
        Q: '做瓷貼片一定要磨牙嗎？',
        A: '進行瓷貼片療程前，需進行輕微磨牙處理，以確保其穩定性和美觀度。',
      },
      {
        Q: '做瓷貼片會造成牙齒敏感嗎？',
        A: '術後牙齒可能會變得敏感，屬正常現象，一般會在數天內自行適應。',
      },
      {
        Q: '瓷貼片實際效果跟期望有落差嗎？',
        A: '透過數位模擬技術，提供清晰的術後預覽，並製作實體模擬貼片供客人試戴。',
      },
      {
        Q: '全瓷貼片容易脫落嗎？',
        A: '裝上瓷貼片後，需注意保持良好的口腔清潔習慣，避免進食過硬食物，並定期覆診檢查，確保瓷貼片的穩固性和壽命，以減低其脫落風險。一般情況下貼片壽命可長達15年或以上。我們則提供三至五年的保修期，具體期限取決於客人所選擇的瓷貼片品牌。',
      },
    ],
  },
  {
    name: '牙托',
    context:
      '牙托即活動式假牙，分為局部及全口牙托兩種，可改善缺牙的影響。牙托底部有金屬鉤讓牙托能固定在真牙上，代替缺去的牙齒。活動式假牙可自行配戴，適合缺齒較多的人士使用。',
    img: '',
    lists: [
      {
        Q: 'pages.dental-service.toothtray.problem.lists[0].Q',
        A: 'pages.dental-service.toothtray.problem.lists[0].A',
      },
      {
        Q: 'pages.dental-service.toothtray.problem.lists[1].Q',
        A: 'pages.dental-service.toothtray.problem.lists[1].A',
      },
      {
        Q: 'pages.dental-service.toothtray.problem.lists[2].Q',
        A: 'pages.dental-service.toothtray.problem.lists[2].A',
      },
      {
        Q: 'pages.dental-service.toothtray.problem.lists[3].Q',
        A: 'pages.dental-service.toothtray.problem.lists[3].A',
      },
    ],
  },
]
let Dental_knowledge_cur_tab = ref(0)

let changeNewsCur_1_tab = ref(2)
const newsListsConfig_1 = ref({
  title: '牙齒百科',
  tab: ['最熱門', '最新'],
  lists: [],
  linkL: '/news/news-tooth-wiki/',
})
const changeNewsCur_1 = async (idx) => {
  if (changeNewsCur_1_tab.value === idx) return
  changeNewsCur_1_tab.value = idx
  let _lists = saveData.value[`newsLists_1_${idx}`]
  if (_lists && _lists.length) {
    newsListsConfig_1.value.lists = _lists
  } else {
    let _order = 'date'
    if (idx === 0) _order = 'visits'
    let a: any = await getNewsLists(16, 5, _order)
    newsListsConfig_1.value.lists = a
    saveData.value[`newsLists_1_${idx}`] = a
  }
}

let changeNewsCur_2_tab = ref(2)
const newsListsConfig_2 = ref({
  title: '醫生分享',
  tab: ['最熱門', '最新'],
  lists: [] as any,
  linkL: '',
})
const getVideosLists = async (order = 'date', loading = false, retuse = []) => {
  loading = false
  try {
    const _res: any = await useFetch(
      `https://admin.ckjhk.com/api.php/list/18/page/1/num/3/order/${order}`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (res) {
      retuse = res.data.map((item) => {
        return {
          id: item.id || '',
          name: item.title || '',
          time: formatDate(item.date) || '',
          videos: item.ext_videosurl || '',
          shareUrl: item.source || '',
          hashtag: [null, ''].includes(item.tags) ? [] : item.tags.split(','),
        }
      })
    }
    loading = false
  } catch (err) {
    loading = false
  }
  return retuse
}
const changeNewsCur_2 = async (idx) => {
  if (changeNewsCur_2_tab.value === idx) return
  changeNewsCur_2_tab.value = idx
  let _lists = saveData.value[`newsLists_2_${idx}`]
  if (_lists && _lists.length) {
    newsListsConfig_2.value.lists = _lists
  } else {
    let _order = 'date'
    if (idx === 0) _order = 'visits'
    let a: any = await getVideosLists(_order)
    newsListsConfig_2.value.lists = a
    saveData.value[`newsLists_2_${idx}`] = a
  }
}

let changeNewsCur_3_tab = ref(2)
const newsListsConfig_3 = ref({
  title: '最新資訊',
  tab: ['最熱門', '最新'],
  lists: [],
  linkL: '/news/news-information/',
})
const changeNewsCur_3 = async (idx) => {
  if (changeNewsCur_3_tab.value === idx) return
  changeNewsCur_3_tab.value = idx
  let _lists = saveData.value[`newsLists_3_${idx}`]
  if (_lists && _lists.length) {
    newsListsConfig_3.value.lists = _lists
  } else {
    let _order = 'date'
    if (idx === 0) _order = 'visits'
    let a: any = await getNewsLists(15, 5, _order)
    newsListsConfig_3.value.lists = a
    saveData.value[`newsLists_3_${idx}`] = a
  }
}

const PromotionProject = [
  {
    img: 'https://static.cmereye.com/imgs/2024/05/9946e846e1d0eb4e.jpg',
    link: '/dental-service/veneers',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/f4663be0c2b9aa78.jpg',
    link: '/dental-service/invisiblebraces',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/dddeb382b720f94f.jpg',
    link: '/dental-service/orthodontics',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/58d7b2ff7c0e8069.jpg',
    link: '/dental-service/implant',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/68255af5b5d127c8.jpg',
    link: '/dental-service/scaling-and-polishing',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/3531e78ba5e86dca.jpg',
    link: '/dental-service/fillings',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/9946e846e1d0eb4e.jpg',
    link: '/dental-service/veneers',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/f4663be0c2b9aa78.jpg',
    link: '/dental-service/invisiblebraces',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/dddeb382b720f94f.jpg',
    link: '/dental-service/orthodontics',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/58d7b2ff7c0e8069.jpg',
    link: '/dental-service/implant',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/68255af5b5d127c8.jpg',
    link: '/dental-service/scaling-and-polishing',
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/3531e78ba5e86dca.jpg',
    link: '/dental-service/fillings',
  },
]
const bannerConfig = ref([])

let youtobeBox_cur_tab = ref(0)
const handleyoutobeTab = (idx) => {
  youtobeBox_cur_tab.value = idx
}

const news_tab = [
  { name: '媒體報導', num: 14, url: '/news/article/' },
  { name: '最新資訊', num: 15, url: '/news/news-information/' },
  { name: '牙齒百科', num: 16, url: '/news/news-tooth-wiki/' },
]
let news_cur_tab = ref(3)
let newsData: any = ref([])
const handle_news_tab = async (idx) => {
  if (news_cur_tab.value === idx) return
  news_cur_tab.value = idx
  let _lists = saveData.value[`newsData_${idx}`]
  if (_lists && _lists.length) {
    newsData.value = _lists
  } else {
    let _id = news_tab[idx].num
    let _url = news_tab[idx].url
    let a: any = await getNewsData(_id, _url)
    newsData.value = a
    saveData.value[`newsData_${idx}`] = a
  }
}
const getNewsData = async (
  actType = 14,
  _url = '/news/article/',
  actPageNum = 10,
  retuse = []
) => {
  try {
    const _res: any = await useFetch(
      `https://admin.ckjhk.com/api.php/list/${actType}/page/1/num/${actPageNum}`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (res) {
      retuse = res.data.map((item) => {
        return {
          id: item.id || '',
          name: item.title || '',
          tags: item.tags || '',
          link: `${_url}${item.id}`,
          time:
            toDateType(
              actType === 16 ? item.update_time : item.ext_news_time
            ) || '',
        }
      })
    }
  } catch (err) {
    console.log(err)
  }
  return retuse
}

let actShowShare = ref('')
const handleClick = (event, _id) => {
  event.preventDefault()
  if (actShowShare.value === _id) {
    actShowShare.value = ''
  } else {
    actShowShare.value = _id
  }
}
const shareFacebook = (event, id, link, isOuterChain = false) => {
  event.preventDefault()
  let _origin = location.origin
    ? location.origin
    : 'https://www.ckjofficial.com'
  let _url = isOuterChain
    ? `https://www.facebook.com/sharer/sharer.php?u=${link}`
    : `https://www.facebook.com/sharer/sharer.php?u=${_origin}${link}${id}`
  window.open(_url)
}
function copySpecifiedText(event, text, link, isOuterChain = false) {
  let _origin = location.origin
    ? location.origin
    : 'https://www.ckjofficial.com'
  let _url = isOuterChain ? link : `${_origin}${link}${text}`
  event.preventDefault()
  if (navigator.clipboard) {
    navigator.clipboard.writeText(_url).then(
      function () {
        ElMessage({
          showClose: true,
          message: '已複製到剪切板',
          type: 'success',
        })
      },
      function (err) {
        ElMessage({
          showClose: true,
          message: '操作異常，請刷新頁面試試',
          type: 'warning',
        })
      }
    )
  } else {
    alert('您的瀏覽器不支持此功能，請更新瀏覽器')
  }
}

const activeNames = ref(0)

let banner_type = ref(1)
const getBanner = async () => {
  try {
    const _res: any = await useFetch(
      `https://admin.ckjhk.com/api.php/cms/slide/gid/${banner_type.value}`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (res) {
      let _data = res.data
      bannerConfig.value = _data.map((item) => {
        return {
          pcImg:
            (item.pic.indexOf('/static/upload/') !== -1
              ? `https://admin.ckjhk.com${item.pic}`
              : item.pic) || '',
          mbImg:
            (item.pic.indexOf('/static/upload/') !== -1
              ? `https://admin.ckjhk.com${item.pic}`
              : item.pic) || '',
          link: item.link || '',
          title: item.title || '',
          alt: item.subtitle === '' ? item.title : item.subtitle,
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  handletab2('101')
  banner_type.value = width.value > 768 ? 1 : 2
  setTimeout(() => {
    getBanner()
    handlemedia_coverage(0)
    changeNewsCur_1(0)
    changeNewsCur_2(0)
    changeNewsCur_3(0)
    handle_news_tab(0)
  }, 0)
  bannerConfig.value.sort(function () {
    return Math.random() - 0.5
  })
})
if (process.server) {
  handlemedia_coverage(0)
  changeNewsCur_1(0)
  changeNewsCur_2(0)
  changeNewsCur_3(0)
  handle_news_tab(0)
}

const problemData = {
  title: 'pages.index.common_problem.title',
  lists: [
    {
      Q: '請問有什麼支付方式？',
      A: '我們接受人民幣、VISA、Master、銀聯、微信、內地支付寶及香港支付寶。',
    },
    // {
    //   Q: '請問可以使用醫療券嗎？',
    //   A: '預計2024年第三季度（約9月份）將陸續展開相關安排，讓合資格的香港長者可使用醫療券支付費用。',
    // },
    {
      Q: '一般洗牙需要多長時間？',
      A: '一次基本的洗牙程序通常需要30至60分鐘完成。具體時間會根據您的口腔情況和需要的清潔程度而有所不同。我們建議您預留1小時的時間。',
    },
    {
      Q: '植牙需要多少時間才能完成？',
      A: '植牙是一個多步驟的過程，通常需要2至3次就診才能完成。從植入牙根到完成冠修復，整個過程約需3至6個月。我們會為您詳細解釋每個步驟，檢查後再設計方案。',
    },
    {
      Q: '牙周治療大約需要多長時間？',
      A: '這要視乎牙周的程度。一般來說，牙周基本治療大約需要2至3次就診，每次就診時間約1至2小時。具體時間需由牙醫根據您的情況評估。',
    },
    {
      Q: '我可以同時進行牙齒美白和洗牙嗎？',
      A: '我們建議您先來諮詢牙醫，根據您的具體情況制定最佳的治療方案。',
    },
    {
      Q: '箍牙可以分期付款嗎？',
      A: '箍牙一般可以分期付款。面診時可以詳細了解我們的分期付款政策和細節，選擇最適合自己的方案。',
    },
    {
      Q: '為什麼你們的價錢比其他診所貴？',
      A: '我們建議您考慮牙科服務的整體價值。雖然價格是一個重要的考慮因素，但請記住，牙科治療的品質和效果對您的口腔健康和生活品質有著長遠的影響。',
    },
    {
      Q: '預約需要提前多少天？',
      A: '平日最好提前3天預約，週末建議提前1至2星期預約。',
    },
    {
      Q: '不預約可以直接到診所嗎？',
      A: '我們診所需要提前預約，這樣能提高就診效率，避免客人等待時間過長。',
    },
    {
      Q: '請問診所有提供Wi-Fi嗎？',
      A: '有的，我們提供Wi-Fi服務。',
    },
  ],
}

let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
</script>

<template>
  <div>
    <PageBanner :bannerConfig="bannerConfig" :smallLine="true" />
    <div class="indexPage">
      <div class="PromotionProject pageCon">
        <div class="PromotionProject-title">推廣項目</div>
        <div class="PromotionProject-content">
          <Swiper
            class="PromotionProject-swiper"
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{ delay: 0 }"
            :speed="4000"
            :initialSlide="0"
            :centeredSlides="width < 768"
            :slidesPerView="width > 768 ? 4.3 : 2"
            :spaceBetween="14"
          >
            <Swiper-slide
              class="PromotionProject-swiper-slide"
              v-for="(item, index) in PromotionProject"
              :key="index"
            >
              <nuxt-link :to="item.link">
                <img :src="item.img" alt="" />
              </nuxt-link>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
      <serviceCard :isIndexShow="true" />
      <div class="sectionBox">
        <div class="sectionBox-l">
          <div class="image-t">
            <img
              loading="lazy"
              src="https://static.cmereye.com/imgs/2024/05/4f0ef4264fabb9ee.jpg"
              alt=""
            />
          </div>
          <div class="image-b">
            <img
              loading="lazy"
              :src="item"
              v-for="(item, index) in sectionBoxImage"
              :key="index"
              alt=""
            />
          </div>
        </div>
        <div class="sectionBox-c">
          <div class="media_coverage-title">
            <div class="index_title">媒體報導</div>
          </div>
          <div class="media_coverage-tab">
            <div
              :class="{ cur: media_coverage_cur_tab === 0 }"
              @click="handlemedia_coverage(0)"
            >
              最熱門
            </div>
            <div
              :class="{ cur: media_coverage_cur_tab === 1 }"
              @click="handlemedia_coverage(1)"
            >
              最新
            </div>
          </div>
          <div class="media_coverage-content">
            <nuxtLink
              :to="`/news/article/${item.id}`"
              class="list-in"
              v-for="item in width > 768
                ? media_coverage_lists.slice(0, 2)
                : media_coverage_lists"
              :key="item.id"
            >
              <div class="list-in-t">
                <div class="list-in-t-l">
                  <img loading="lazy" :src="item.img" alt="" />
                </div>
                <div class="list-in-t-r">
                  <img loading="lazy" :src="item.logo" alt="" />
                  <span>{{ item.name }}</span>
                </div>
              </div>
              <div class="list-in-b">
                <div class="list-in-b-l">
                  <span
                    v-for="(tagItem, tagIndex) in item.hashtag"
                    :key="tagIndex"
                    >{{ tagItem }}</span
                  >
                </div>
                <div class="list-in-b-r">
                  <span>{{ item.time }}</span>
                  <div
                    class="shareIcon"
                    @click.stop="handleClick($event, item.id)"
                    alt=""
                  >
                    <div
                      :class="[
                        'shareIcon-img',
                        { act: actShowShare === item.id },
                      ]"
                      alt="分享"
                      title="分享"
                    >
                      <img src="@/assets/images/icon_47.svg" alt="" />
                    </div>
                    <div class="shareIcon-in" v-if="actShowShare === item.id">
                      <div
                        class="shareIcon-in-item"
                        @click="
                          shareFacebook($event, item.id, '/news/article/')
                        "
                        alt="Facebook 分享"
                        title="Facebook 分享"
                      >
                        <img src="@/assets/images/icon_49.svg" alt="" /><span
                          >Facebook 分享</span
                        >
                      </div>
                      <div
                        class="shareIcon-in-item"
                        @click="
                          copySpecifiedText($event, item.id, '/news/article/')
                        "
                        alt="複製連結"
                        title="複製連結"
                      >
                        <img src="@/assets/images/icon_48.svg" alt="" /><span
                          >複製連結</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nuxtLink>
          </div>
          <nuxt-link to="/news/coverage" class="media_coverage-btn">
            <div>查看更多</div>
          </nuxt-link>
        </div>
        <div class="sectionBox-r">
          <AboutUs />
        </div>
      </div>
      <div class="Dental_knowledge">
        <div class="Dental_knowledge-title">
          <div class="index_title">牙科知識</div>
        </div>
        <div class="Dental_knowledge-tab">
          <div
            class="Dental_knowledge-tab-in"
            :class="{ cur: Dental_knowledge_cur_tab === index }"
            v-for="(item, index) in Dental_knowledge"
            :key="index"
            @click="Dental_knowledge_cur_tab = index"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="Dental_knowledge-content">
          <div class="Dental_knowledge-content-l">
            <img
              loading="lazy"
              src="https://static.cmereye.com/imgs/2024/05/e2d21aaaf391c909.png"
              alt=""
            />
          </div>
          <div class="Dental_knowledge-content-c">
            <div class="info">
              <div class="info-l">
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2024/05/8a104fb9dc69d0a0.png"
                  alt=""
                />
              </div>
              <div class="info-r">
                <div class="title">
                  {{ Dental_knowledge[Dental_knowledge_cur_tab].name }}
                </div>
                <div class="context">
                  {{ Dental_knowledge[Dental_knowledge_cur_tab].context }}
                </div>
              </div>
            </div>
            <div class="lists">
              <el-collapse v-model="activeNames" accordion>
                <el-collapse-item
                  v-for="(item, index) in Dental_knowledge[
                    Dental_knowledge_cur_tab
                  ].lists"
                  :key="index"
                  :name="index"
                >
                  <template #title>
                    <div class="lists-title">{{ $t(item.Q) }}</div>
                  </template>
                  <div class="lists-context">
                    <!-- <span>A</span> -->
                    <span>{{ $t(item.A) }}</span>
                  </div>
                </el-collapse-item>
              </el-collapse>
              <!-- <div class="lists-in" v-for="(item,index) in Dental_knowledge[Dental_knowledge_cur_tab].lists" :key="index">
                {{$t(item.Q)}}
              </div> -->
            </div>
          </div>
          <div class="Dental_knowledge-content-r">
            <img
              loading="lazy"
              src="https://static.cmereye.com/imgs/2024/05/758fa03eda0cc4ff.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="index-doctorTeam" ref="doctorTeam">
        <div class="index-doctorTeam-t smallPageCon">
          <div class="index_title">醫生團隊</div>
        </div>
        <div class="index-doctorTeam-tab1 index-doctorTeam-con">
          <AreaTab />
        </div>
        <div class="index-doctorTeam-tab2 index-doctorTeam-con">
          <div
            class="index-doctorTeam-tab2-in"
            :class="`tablang-${changeDentalProfessionList().length}`"
          >
            <div
              :class="[
                {
                  'index-doctorTeam-tab2-in-active':
                    dentalProfessionCur === dentalProfessionItem.id,
                },
                `textlang-${dentalProfessionItem.name.length}`,
              ]"
              v-for="(
                dentalProfessionItem, dentalProfessionIndex
              ) in changeDentalProfessionList()"
              :key="dentalProfessionIndex"
              @click="handletab2(dentalProfessionItem.id)"
            >
              {{ dentalProfessionItem.name }}
            </div>
          </div>
        </div>
        <div class="index-doctorTeam-lists index-doctorTeam-con">
          <div class="pcLists">
            <section v-if="actDoctorListd.length < 7">
              <div
                class="pcLists-in"
                :class="{ acitve: doctorCur === doctorItem.id }"
                v-for="doctorItem in actDoctorListd"
                :key="doctorItem.id"
                @click="handleDoctorItem(doctorItem.id)"
              >
                <div class="pcLists-in-img">
                  <img
                    loading="lazy"
                    :src="doctorItem.mbImg || ''"
                    :alt="doctorItem.name"
                    :title="doctorItem.name"
                  />
                </div>
              </div>
            </section>
            <section v-else>
              <Swiper
                class="swiperpcLists-in"
                :slidesPerView="7"
                @swiper="setDoctorTabSwiperRef_pc"
              >
                <SwiperSlide
                  class="swiperpcLists-in-slide"
                  v-for="doctorItem in actDoctorListd"
                  :key="doctorItem.id"
                >
                  <div
                    class="swiperpcLists-in-img"
                    :class="{ acitve: doctorCur === doctorItem.id }"
                    @click="handleDoctorItem(doctorItem.id)"
                  >
                    <img
                      loading="lazy"
                      :src="doctorItem.mbImg || ''"
                      :alt="doctorItem.name"
                      :title="doctorItem.name"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </section>
          </div>
          <div class="mbLists">
            <Swiper
              class="mbLists-in"
              :slidesPerView="3"
              @swiper="setDoctorTabSwiperRef_mb"
            >
              <SwiperSlide
                class="mbLists-in-slide"
                v-for="doctorItem in actDoctorListd"
                :key="doctorItem.id"
              >
                <div
                  class="mbLists-in-img"
                  :class="{ acitve: doctorCur === doctorItem.id }"
                  @click="handleDoctorItem(doctorItem.id)"
                >
                  <img
                    loading="lazy"
                    :src="doctorItem.mbImg || ''"
                    :alt="doctorItem.name"
                    :title="doctorItem.name"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="index-doctorTeam-detailBox" v-loading="loading">
          <Swiper
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 2000,
            }"
            v-if="actDoctorListd.length"
            class="index-doctorTeam-detail-swiper"
            @swiper="setDoctorItemSwiper"
            @slideChange="doctorItemSlideChange"
            :class="[windowWidth > 768 ? 'swiper-no-swiping' : '']"
          >
            <Swiper-slide
              v-for="doctorItem in actDoctorListd"
              :key="`d${doctorItem.id}`"
            >
              <div
                class="index-doctorTeam-detail index-doctorTeam-con"
                :id="`d${doctorItem.id}`"
              >
                <div class="index-doctorTeam-detail-l">
                  <div class="index-doctorTeam-detail-l-in">
                    <img
                      loading="lazy"
                      :srcset="'https://static.cmereye.com/imgs/2024/02/3305056d2ab78db8.webp 768w, https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp'"
                      src="https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      :srcset="`${doctorItem.mbImg} 768w, ${doctorItem.imgUrl}`"
                      :src="doctorItem.imgUrl"
                      :alt="doctorItem.name"
                      :title="doctorItem.name"
                    />
                  </div>
                  <div class="index-doctorTeam-detail-l-btn">
                    <PageAnimBtnTypeTwo str="線上咨詢" />
                  </div>
                </div>
                <div class="index-doctorTeam-detail-r">
                  <div class="detail-1">
                    <span>{{ doctorItem.name }}</span>
                    <span>{{ doctorItem.text }}</span>
                  </div>
                  <div class="detail-2" v-if="doctorItem.newOrg">
                    <span>{{ doctorItem.newOrg }}</span>
                  </div>
                  <div class="detail-3">
                    <span
                      v-for="(jobItem, jobIndex) in doctorItem.newJobs"
                      :key="jobIndex"
                      >{{ jobItem }}</span
                    >
                  </div>
                  <div class="detail-4">
                    <span>擅長項目：</span>
                    <span>
                      {{ doctorItem.newSkilled }}
                    </span>
                  </div>
                  <div class="detail-5">
                    <span
                      v-for="(tagItem, tagIndex) in doctorItem.tags"
                      :key="tagIndex"
                    >
                      {{ tagItem }}
                    </span>
                  </div>
                  <div class="detail-6">
                    <PageAnimBtnTypeTwo str="線上咨詢" />
                  </div>
                </div>
              </div>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
      <div class="youtobeBox pageCon">
        <div class="youtobeBox-l">
          <div class="youtobeBox-l-title">
            <div class="index_title">最新優惠</div>
          </div>
          <div class="youtobeBox-l-in">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Hxm0arbKJbc?si=7xJZxGlpRw9GxkIZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="youtobeBox-r">
          <div class="youtobeBox-r-title">
            <div class="index_title">醫生分享</div>
          </div>
          <div class="youtobeBox-r-in">
            <div class="youtobeBox-r-in-tab">
              <div
                :class="{ cur: changeNewsCur_2_tab === 0 }"
                @click="changeNewsCur_2(0)"
              >
                最熱門
              </div>
              <div
                :class="{ cur: changeNewsCur_2_tab === 1 }"
                @click="changeNewsCur_2(1)"
              >
                最新
              </div>
            </div>
            <div class="youtobeBox-r-in-lists">
              <div
                class="list-in"
                v-for="(item, index) in newsListsConfig_2.lists.slice(0, 2)"
                :key="index"
              >
                <div class="list-in-t">
                  <div class="list-in-t-l">
                    <div class="iframeBox">
                      <iframe
                        width="560"
                        height="315"
                        :src="item.videos"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div class="list-in-t-r">
                    <h2><span>醫生專享</span>{{ item.name }}</h2>
                  </div>
                </div>
                <div class="list-in-b">
                  <div class="list-in-b-l">
                    <span
                      v-for="(tagItem, tagIndex) in item.hashtag"
                      :key="tagIndex"
                      >{{ tagItem }}</span
                    >
                  </div>
                  <div class="list-in-b-r">
                    <span>{{ item.time }}</span>
                    <div
                      class="shareIcon"
                      @click.stop="handleClick($event, item.id)"
                      alt=""
                    >
                      <div
                        :class="[
                          'shareIcon-img',
                          { act: actShowShare === item.id },
                        ]"
                        alt="分享"
                        title="分享"
                      >
                        <img
                          loading="lazy"
                          src="@/assets/images/icon_47.svg"
                          alt=""
                        />
                      </div>
                      <div class="shareIcon-in" v-if="actShowShare === item.id">
                        <div
                          class="shareIcon-in-item"
                          @click="
                            shareFacebook($event, item.id, item.shareUrl, true)
                          "
                          alt="Facebook 分享"
                          title="Facebook 分享"
                        >
                          <img src="@/assets/images/icon_49.svg" alt="" /><span
                            >Facebook 分享</span
                          >
                        </div>
                        <div
                          class="shareIcon-in-item"
                          @click="
                            copySpecifiedText(
                              $event,
                              item.id,
                              item.shareUrl,
                              true
                            )
                          "
                          alt="複製連結"
                          title="複製連結"
                        >
                          <img src="@/assets/images/icon_48.svg" alt="" /><span
                            >複製連結</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nuxtLink
              to="https://www.youtube.com/playlist?list=PLP24ZB2HTnRhFsJLhRt6njGKgJoIR2yTM"
              class="youtobeBox-r-in-btn"
            >
              <div>查看更多</div>
            </nuxtLink>
          </div>
        </div>
      </div>
      <div class="index-org">
        <div class="index-org-t">
          <div class="index_title">相關機構</div>
        </div>
        <div class="index-org-tag smallPageCon">
          <div
            class="index-org-tag-in"
            :class="{ active: orgTabCur === orgTabIndex }"
            v-for="(orgTabItem, orgTabIndex) in orgTabLists"
            :key="orgTabIndex"
            @click="handleorgtabfun(orgTabIndex)"
          >
            {{ orgTabItem }}
          </div>
        </div>
        <div class="index-org-content smallPageCon">
          <Swiper
            class="index-org-content-swiper"
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 3000,
            }"
            @swiper="setIndexOrgSwiperRef"
            @slideChange="onIndexOrgSlideChange"
          >
            <Swiper-slide
              class="index-org-content-swiper-slie"
              v-for="(orgListItem, orgListIndex) in orgLists"
              :key="orgListIndex"
            >
              <div
                class="index-org-content-in"
                :class="`index-org-content-${orgTabCur}`"
                v-for="(orgItem, orgIndex) in orgListItem"
                :key="orgIndex"
              >
                <img loading="lazy" :src="orgItem" alt="" />
              </div>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
      <div class="index-caseSharing">
        <div class="index-caseSharing-title">
          <div class="index_title">
            {{ $t('pages.index.caseSharing.title') }}
          </div>
        </div>
        <div class="index-caseSharing-in">
          <div class="in-top">
            <CaseSharingVideoItem :caseSharingData="caseSharingTopData" />
          </div>
        </div>
      </div>
      <div class="news">
        <div class="news-tab">
          <div
            class="news-tab-in"
            :class="{ cur: news_cur_tab === index }"
            v-for="(item, index) in news_tab"
            :key="index"
            @click="handle_news_tab(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="news-content">
          <nuxtLink
            :to="item.link"
            class="list-in"
            v-for="(item, index) in newsData"
            :key="index"
          >
            <h3 v-if="item.tags !== ''">{{ item.tags }}</h3>
            <h2 :class="{ notags: item.tags === '' }">{{ item.name }}</h2>
            <span>{{ item.time }}</span>
          </nuxtLink>
        </div>
      </div>
      <div class="mbBox">
        <div class="newsListsBox">
          <NewsLists
            :listsConfig="newsListsConfig_1"
            @changeNewsCur="changeNewsCur_1"
          />
        </div>
        <div class="newsListsBox">
          <NewsLists
            :listsConfig="newsListsConfig_2"
            :thameType="'2'"
            @changeNewsCur="changeNewsCur_2"
            :isOuterChain="true"
          />
        </div>
        <div class="newsListsBox">
          <NewsLists
            :listsConfig="newsListsConfig_3"
            :thameType="'3'"
            @changeNewsCur="changeNewsCur_3"
          />
        </div>
        <div class="brandConceptBox">
          <brandConcept-test />
        </div>
        <div class="AboutUsBox">
          <AboutUs />
        </div>
      </div>
      <div class="setionBox pageCon">
        <div class="setionBox-l">
          <brandConcept-test />
        </div>
        <div class="setionBox-r">
          <div class="brand">
            <div class="brand-title">
              <div class="index_title">
                <span>愛康健口腔品牌連鎖</span>
              </div>
            </div>
            <div class="brand-context">始於1995</div>
            <div class="brand-context">- 專科 · 專業 · 專注 · 專心 -</div>
            <div class="brand-in">
              <div>
                <div>
                  <img
                    loading="lazy"
                    src="https://static.cmereye.com/imgs/2023/05/d7e785a21ef31545.png"
                    alt=""
                  />
                </div>
                <div>深圳老字號</div>
              </div>
              <div>
                <div>
                  <img
                    loading="lazy"
                    src="https://static.cmereye.com/imgs/2023/05/6b9b5cbf87f8da95.png"
                    alt=""
                  />
                </div>
                <div>廣東省著名商標品牌</div>
              </div>
              <div>
                <div>
                  <img
                    loading="lazy"
                    src="https://static.cmereye.com/imgs/2023/05/42202884c1b63259.png"
                    alt=""
                  />
                </div>
                <div>中山大學光華口腔醫學院<br />研究生課程深圳教學基地</div>
              </div>
              <div>
                <div>
                  <img
                    loading="lazy"
                    src="https://static.cmereye.com/imgs/2023/05/cb849eb2ad0023d4.png"
                    alt=""
                  />
                </div>
                <div>最具口碑影響力企業</div>
              </div>
              <nuxt-link
                to="https://www.gma-awards.hk01.group/%E5%BE%97%E7%8D%8E%E5%90%8D%E5%96%AE"
              >
                <div>
                  <img
                    loading="lazy"
                    src="https://static.cmereye.com/imgs/2024/05/a4cced5ce2d5c606.png"
                    alt=""
                  />
                </div>
                <div>香港01<br />傑出大灣區牙科醫療<br />服務機構</div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="problem-data">
        <ServiceProblem :problem-data="problemData" />
      </div>
      <NewAddress />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.PromotionProject-swiper > .swiper-wrapper) {
  transition-timing-function: linear;
}
.PromotionProject {
  display: flex;
  align-items: center;
  padding-top: 40px;
  &-title {
    writing-mode: vertical-lr;
    color: var(--Grey-Deep, #4d4d4d);
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    line-height: 110%;
    padding-right: 15px;
    border-right: 3px solid var(--indexColor1);
    letter-spacing: 4px;
    margin-right: 18px;
  }
  &-content {
    flex: 1;
    overflow: hidden;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      width: 100px;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0), #fff 70%);
    }
  }
}
@keyframes numAnim {
  100% {
    // transform: translateY(calc((100% - 96px) * -1));
    transform: none;
  }
}
svg:hover path {
  cursor: pointer;
  fill: rgba(255, 120, 117, 0.65);
}
.indexPage {
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 1;
}
//醫生團隊
.index-doctorTeam {
  margin: 100px auto 50px;
  &-t {
    display: flex;
    justify-content: center;
  }
  &-con {
    width: 70%;
    max-width: 1280px;
    margin: 25px auto 0;
  }
  &-tab1 {
    :deep(.areaTab) {
      div {
        flex: 1;
        text-align: center;
        font-size: 20px;
      }
    }
  }
  &-tab2 {
    margin-top: 10px;
    &-in {
      width: 100%;
      display: flex;
      & > div {
        flex: 1;
        color: #00aeff;
        transition: all 0.3s;
        border-top: 2px solid #00aeff;
        border-bottom: 2px solid #00aeff;
        border-left: 2px solid #00aeff;
        padding: 5px 0;
        font-size: 18px;
        text-align: center;
        letter-spacing: 3px;
        cursor: pointer;
        &:nth-of-type(4) {
          flex: 1.3;
        }
        &:nth-of-type(5) {
          flex: 1.3;
        }
        &:nth-of-type(6) {
          flex: 1.3;
        }
        &:nth-of-type(7) {
          flex: 1.7;
        }
        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-radius: 0 5px 5px 0;
          border-right: 2px solid #00aeff;
        }
        &:hover,
        &.index-doctorTeam-tab2-in-active {
          color: #fff;
          background: #00aeff;
        }
      }
    }
  }
  &-lists {
    width: 100%;
    min-height: 152px;
    .pcLists {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      &-in {
        cursor: pointer;
        margin-bottom: 30px;
        &:not(:last-child) {
          margin-right: 30px;
        }
        &-img {
          width: 150px;
          height: 150px;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209, 0.5);
          transition: all 0.3s;
        }
        &:hover,
        &.acitve {
          .pcLists-in-img {
            background: #ffa8c6;
          }
        }
      }
      & > section {
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .swiperpcLists-in {
        width: 100%;
        overflow: visible;
        &-img {
          margin: 0 15px;
          height: auto;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209, 0.7);
          transition: all 0.3s;
          cursor: pointer;
          &:hover,
          &.acitve {
            background: #ffa8c6;
          }
        }
      }
    }
    .mbLists {
      width: calc(100% - 40px);
      margin: 0 auto;
      display: none;
      &-in {
        width: 100%;
        overflow: visible;
        &-img {
          // width: calc(100% - 20px);
          margin: 0 10px;
          height: auto;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209, 0.7);
          &.acitve {
            background: #ffa8c6;
          }
        }
      }
    }
  }
  &-detail {
    padding: 20px;
    display: flex;
    margin-top: 50px;
    &-l {
      width: calc(434 / 1365 * 100%);
      max-width: 434px;
      position: relative;
      height: max-content;
      &-in {
        width: 100%;
        &::after {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          background: rgba(254, 169, 209, 0.7);
          z-index: 0;
        }
      }
      img {
        position: relative;
        border-radius: 30px;
        z-index: 1;
        &:nth-of-type(1) {
          border: 3px solid var(--indexColor1);
        }
        &:nth-of-type(2) {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          max-height: calc(92% - 3px);
          display: block;
        }
      }
      &-btn {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        z-index: 1;
        width: max-content;
      }
    }
    &-r {
      flex: 1;
      .detail-1 {
        color: var(--indexColor1);
        padding-left: 20px;
        span {
          font-size: 20px;
          &:nth-of-type(1) {
            font-size: 35px;
            margin-right: 5px;
          }
        }
      }
      .detail-2 {
        color: #fff;
        span {
          font-size: 28px;
          padding: 5px 70px 5px 20px;
          display: inline-block;
          background: var(--indexColor1);
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
        }
      }
      .detail-3 {
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        margin-bottom: 30px;
        margin-top: 5px;
        span {
          display: block;
        }
      }
      .detail-4 {
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        margin-bottom: 20px;
        span {
          display: block;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .detail-5 {
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        span {
          border-bottom: 1px solid var(--textColor);
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
      .detail-6 {
        margin-top: 30px;
        margin-left: 20px;
        margin-bottom: 20px;
        display: none;
      }
    }
  }
  &-detailBox {
    min-height: 550px;
  }
  .index-doctorTeam-detail-swiper {
    // overflow: visible;
    padding-bottom: 40px;
  }
}
//個案分享
.index-caseSharing {
  padding: 35px 0 60px;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 240, 0) 0%,
    var(--indexColor2) 100%
  );
  margin-top: 80px;
  &-title {
    display: flex;
    justify-content: center;
  }
  &-in {
    width: 80%;
    max-width: 1046px;
    margin: 45px auto 0;
    .in-top {
      display: flex;
    }
    .in-cen {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 120px;
      &-box {
        width: calc(50% - 8px);
      }
    }
  }
}
.index-org {
  margin-top: 80px;
  &-t {
    display: flex;
    justify-content: center;
  }
  &-tag {
    width: 80%;
    max-width: 804px;
    display: flex;
    margin-top: 50px;
    &-in {
      flex: 1;
      color: var(--indexColor1);
      padding: 5px;
      font-size: 24px;
      text-align: center;
      border-top: 2px solid var(--indexColor1);
      border-bottom: 2px solid var(--indexColor1);
      border-left: 2px solid var(--indexColor1);
      transition: all 0.3s;
      cursor: pointer;
      &:first-child {
        border-radius: 5px 0 0 5px;
      }
      &:last-child {
        border-radius: 0 5px 5px 0;
        border-right: 2px solid var(--indexColor1);
      }
      &:hover,
      &.active {
        color: #fff;
        background: var(--indexColor1);
      }
    }
  }
  &-content {
    max-width: 1200px;
    margin-top: 30px;
    &-swiper {
      width: 100%;
      &-slie {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    &-in {
      width: calc((100% - 300px) / 5);
      margin: 0 30px 40px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    &-0 {
      align-items: flex-start !important;
    }
  }
}
.sectionBox {
  width: 100%;
  max-width: 1406px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 52px;
  &-l {
    .image-t {
      img {
        width: 100%;
      }
    }
    .image-b {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 14px;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
  &-c {
    .media_coverage-tab {
      display: flex;
      margin-top: 20px;
      padding-bottom: 5px;
      border-bottom: 1px solid var(--indexColor1);
      & > div {
        color: var(--indexColor1);
        display: inline-block;
        font-size: 20px;
        padding: 3px 25px;
        border-radius: 50px;
        cursor: pointer;
        margin-left: 20px;
        position: relative;
        &::after {
          content: '';
          width: 24px;
          height: 32px;
          position: absolute;
          left: 50%;
          top: calc(100% + 5px);
          transform: translateX(-50%);
          box-sizing: border-box;
          border-left: 12px solid rgba(255, 255, 255, 0);
          border-top: 16px solid var(--indexColor1);
          border-right: 12px solid rgba(255, 255, 255, 0);
          border-bottom: 16px solid rgba(255, 255, 255, 0);
          display: none;
        }
        &.cur {
          background: var(--indexColor1);
          color: #fff;
          &::after {
            display: block;
          }
        }
      }
    }
    .media_coverage-content {
      margin-top: 22px;
      .list-in {
        margin-bottom: 12px;
        display: block;
        &-t {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 22px;
          align-items: center;
          padding-bottom: 15px;
          &-l {
            width: 100%;
          }
          &-r {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            img {
              display: initial;
              margin-right: 5px;
              max-width: 85px;
            }
            span {
              font-size: 20px;
              font-weight: 700;
              line-height: 200%;
            }
          }
        }
        &-b {
          display: grid;
          grid-template-columns: 2fr 1.5fr;
          padding: 5px 0;
          border-top: 1px solid #aaa;
          border-bottom: 1px solid #aaa;
          align-items: center;
          &-l {
            font-size: 18px;
            letter-spacing: 1.8px;
            position: relative;
            text-decoration: underline;
            overflow: hidden;
            white-space: nowrap;
            span {
              margin-right: 15px;
            }
            &::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 80px;
              height: 100%;
              background: linear-gradient(90deg, rgba(255, 255, 255, 0), #fff);
            }
          }
          &-r {
            background: #fff;
            font-size: 20px;
            color: #aaa;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .shareIcon {
              position: relative;
              margin-left: 15px;
              padding-right: 5px;
              &-img {
                width: 25px;
                height: 25px;
                // padding: 5px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                border: 1px solid #aaa;
                z-index: 21;
                & > img {
                  width: 16px;
                  height: auto;
                }
                &.act {
                  border: none;
                }
              }
              &-in {
                position: absolute;
                z-index: 20;
                top: 0;
                right: 2.5px;
                width: 159px;
                height: 115px;
                background: url(https://static.cmereye.com/static/ckj/imgs/default/shareIcon.svg);
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
                padding: 12px 0;
                &-item {
                  display: flex;
                  align-items: center;
                  padding: 5px 10px;
                  margin: 0 2px;
                  border-radius: 3px;
                  & > img {
                    width: 20px;
                    margin-right: 5px;
                  }
                  & > span {
                    font-size: 14px;
                  }
                  &:hover {
                    background: #f6f6f6;
                  }
                }
              }
            }
          }
        }
      }
    }
    .media_coverage-btn {
      border: 1px solid var(--textColor);
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      padding: 7px 0;
      cursor: pointer;
      display: block;
      border-radius: 2px;
      color: var(--textColor);
    }
  }
  &-r {
    max-width: 351px;
  }
}
.Dental_knowledge {
  margin-top: 60px;
  &-title {
    display: flex;
    justify-content: center;
  }
  &-tab {
    display: flex;
    justify-content: center;
    max-width: 1365px;
    margin: 35px auto 0;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--indexColor1);
    &-in {
      color: var(--indexColor1);
      display: inline-block;
      font-size: 40px;
      padding: 0 35px;
      border-radius: 50px;
      cursor: pointer;
      position: relative;
      &.cur {
        background: var(--indexColor1);
        color: #fff;
      }
    }
  }
  &-content {
    display: grid;
    max-width: 1365px;
    margin: 35px auto 0;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 57px;
    padding: 0 35px;
    &-l {
      img {
        width: 100%;
      }
    }
    &-c {
      .info {
        margin-bottom: 8px;
        &-l {
          display: none;
        }
      }
      .title {
        font-size: 24px;
        color: var(--indexColor1);
      }
      .context {
        font-size: 20px;
        color: var(--textColor);
        margin-top: 5px;
        line-height: 1.6;
      }
      .lists {
        &-in {
          // font-size: 20px;
          // color: var(--textColor);
          // padding:  16px 0;
          // border-bottom: 1px solid #aaa;
          // &:first-child{
          //   border-top: 1px solid #aaa;
          // }
        }
        &-title {
          font-size: 20px;
          color: var(--textColor);
        }
        &-context {
          font-size: 14px;
          color: var(--textColor);
          white-space: pre-wrap;
        }
      }
    }
    &-r {
      img {
        width: 100%;
      }
    }
  }
}
.brand {
  &-title {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
    // font-weight: 900;
  }
  &-context {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 160%;
    text-align: center;
    color: var(--indexColor);
  }
  &-in {
    width: 100%;
    max-width: 1380px;
    margin: 61px auto 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & > div,
    & > a {
      max-width: 42%;
      padding: 0 20px;
      & > div {
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 160%;
        text-align: center;
        color: #4c4c4c;
        img {
          margin: 0 auto;
          max-width: 135px;
        }
      }
    }
  }
}
.mbBox {
  display: none;
}
.youtobeBox {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 70px;
  gap: 50px;
  &-l {
    &-title {
      padding: 0 10px 20px;
    }
    &-in {
      width: 100%;
      height: 0;
      padding-bottom: calc(315 / 560 * 100%);
      position: relative;
      iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }
  &-r {
    &-title {
      padding: 0 10px 20px;
    }
    &-in {
      &-tab {
        display: flex;
        padding-bottom: 5px;
        border-bottom: 1px solid var(--indexColor1);
        & > div {
          color: var(--indexColor1);
          display: inline-block;
          font-size: 20px;
          padding: 3px 25px;
          border-radius: 50px;
          cursor: pointer;
          margin-left: 20px;
          position: relative;
          &::after {
            content: '';
            width: 24px;
            height: 32px;
            position: absolute;
            left: 50%;
            top: calc(100% + 5px);
            transform: translateX(-50%);
            box-sizing: border-box;
            border-left: 12px solid rgba(255, 255, 255, 0);
            border-top: 16px solid var(--indexColor1);
            border-right: 12px solid rgba(255, 255, 255, 0);
            border-bottom: 16px solid rgba(255, 255, 255, 0);
            display: none;
          }
          &.cur {
            background: var(--indexColor1);
            color: #fff;
            &::after {
              display: block;
            }
          }
        }
      }
      &-lists {
        margin-top: 35px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        .list-in {
          &-t {
            grid-template-columns: 1fr;
            &-l {
              position: relative;
              width: 100%;
              height: 0;
              padding-bottom: calc(315 / 560 * 100%);
              .iframeBox {
                position: absolute;
                width: 100%;
                height: 100%;
                iframe {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            &-r {
              padding: 10px 0 5px;
              h2 {
                color: var(--textColor);
                font-size: 15px;
                font-weight: 700;
                line-height: 140%;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                span {
                  color: var(--indexColor1);
                }
              }
            }
          }
          &-b {
            display: grid;
            grid-template-columns: 2fr 1.5fr;
            padding: 5px 0;
            border-top: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
            align-items: center;
            &-l {
              font-size: 13px;
              font-weight: 400;
              letter-spacing: 1.8px;
              position: relative;
              text-decoration: underline;
              overflow: hidden;
              white-space: nowrap;
              span {
                margin-right: 10px;
              }
              &::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 80px;
                height: 100%;
                background: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0),
                  #fff
                );
              }
            }
            &-r {
              background: #fff;
              font-size: 13px;
              font-weight: 400;
              color: #aaa;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .shareIcon {
                position: relative;
                margin-left: 15px;
                padding-right: 5px;
                &-img {
                  width: 25px;
                  height: 25px;
                  // padding: 5px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  border: 1px solid #aaa;
                  z-index: 21;
                  & > img {
                    width: 16px;
                    height: auto;
                  }
                  &.act {
                    border: none;
                  }
                }
                &-in {
                  position: absolute;
                  z-index: 20;
                  top: 0;
                  right: 2.5px;
                  width: 159px;
                  height: 115px;
                  background: url(https://static.cmereye.com/static/ckj/imgs/default/shareIcon.svg);
                  background-size: 100% 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
                  padding: 12px 0;
                  &-item {
                    display: flex;
                    align-items: center;
                    padding: 5px 10px;
                    margin: 0 2px;
                    border-radius: 3px;
                    & > img {
                      width: 20px;
                      margin-right: 5px;
                    }
                    & > span {
                      font-size: 14px;
                    }
                    &:hover {
                      background: #f6f6f6;
                    }
                  }
                }
              }
            }
          }
        }
      }
      &-btn {
        border: 1px solid var(--textColor);
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        padding: 7px 0;
        cursor: pointer;
        display: block;
        border-radius: 2px;
        color: var(--textColor);
        margin-top: 20px;
      }
    }
  }
}
.news {
  &-tab {
    display: flex;
    justify-content: center;
    max-width: 1365px;
    margin: 121px auto 0;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--indexColor1);
    &-in {
      color: var(--indexColor1);
      display: inline-block;
      font-size: 40px;
      padding: 0 35px;
      border-radius: 50px;
      cursor: pointer;
      position: relative;
      &.cur {
        background: var(--indexColor1);
        color: #fff;
      }
    }
  }
  &-content {
    display: grid;
    max-width: 1365px;
    margin: 32px auto 0;
    grid-template-columns: 50% 50%;
    .list-in {
      color: var(--Grey-Deep, #4d4d4d);
      font-size: 20px;
      font-style: normal;
      line-height: 160%;
      display: flex;
      max-width: 100%;
      padding-bottom: 16px;
      h3 {
        font-weight: 900;
        white-space: nowrap;
        width: 20%;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h2 {
        font-weight: 700;
        white-space: nowrap;
        width: 55%;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        &.notags {
          width: 75%;
        }
      }
      span {
        font-weight: 500;
        white-space: nowrap;
        width: 25%;
        text-align: right;
      }
      &:nth-of-type(even) {
        padding-left: 20px;
      }
      &:nth-of-type(odd) {
        padding-right: 20px;
        border-right: 1px solid #aaa;
      }
      &:nth-of-type(9) {
        padding-bottom: 0;
      }
      &:nth-of-type(10) {
        padding-bottom: 0;
      }
    }
  }
}
.setionBox {
  margin-top: 120px;
  display: flex;
  gap: 63px;
  &-l {
    flex: 1;
    max-width: 551px;
    .Medical-vouchers {
      &-title {
        display: flex;
        margin-bottom: 10px;
        padding: 0 10px;
        .index_title {
          &::after {
            background: #d3e9d8;
          }
        }
      }
      &-in {
        border-top: 1px solid #e15697;
        .list-in {
          padding-top: 15px;
          display: block;
          &-t {
            display: grid;
            grid-template-columns: 1fr 1.7fr;
            gap: 19px;
            align-items: center;
            padding-bottom: 15px;
            &-l {
              width: 100%;
              img {
                width: 100%;
              }
            }
            &-r {
              flex: 1;
              h2 {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: var(--indexColor1);
                font-size: 20px;
                font-weight: 700;
                line-height: 140%;
              }
              p {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 12px;
                font-weight: 700;
                line-height: 133%;
                color: var(--textColor);
              }
            }
          }
          &-b {
            display: grid;
            grid-template-columns: 2fr 1fr;
            padding: 5px 0;
            border-top: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
            &-l {
              font-size: 18px;
              letter-spacing: 1.8px;
              position: relative;
              text-decoration: underline;
              overflow: hidden;
              white-space: nowrap;
              span {
                margin-right: 10px;
                color: var(--textColor);
              }
              &::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 80px;
                height: 100%;
                background: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0),
                  #fff
                );
              }
            }
            &-r {
              background: #fff;
              font-size: 20px;
              color: #aaa;
              display: flex;
              justify-content: flex-end;
            }
          }
        }
        .btn {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: 'Noto Serif CJK TC';
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          border-radius: 2px;
          border: 1px solid var(--Grey-Deep, #4d4d4d);
          display: block;
          margin-top: 10px;
          padding: 5px 0;
          text-align: center;
        }
      }
    }
  }
  &-r {
    flex: 1;
  }
}
.problem-data {
  :deep(.problem) {
    .dentistryServices-title-in {
      color: var(--textColor);
      display: inline-block;
      font-size: 35px;
      position: relative;
      text-align: center;
      font-weight: 400;
    }
    .bb {
      padding-bottom: 0;
    }
    .bb::after {
      border-radius: 2px;
      background: var(--indexColor_2);
      width: calc(100% + 20px);
      left: -10px;
      height: 50%;
      z-index: -1;
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .PromotionProject {
    padding-top: 2.0833vw;
    &-title {
      font-size: 1.8229vw;
      padding-right: 0.7813vw;
      border-right: 0.1563vw solid var(--indexColor1);
      letter-spacing: 0.2083vw;
      margin-right: 0.9375vw;
    }
  }
  .index-org {
    margin-top: 6.25vw;
    &-tag {
      max-width: 41.875vw;
      margin-top: 2.6042vw;
      &-in {
        padding: 0.2604vw;
        font-size: 1.25vw;
        &:first-child {
          border-radius: 0.2604vw 0 0 0.2604vw;
        }
        &:last-child {
          border-radius: 0 0.2604vw 0.2604vw 0;
        }
      }
    }
    &-content {
      max-width: 62.5vw;
      margin-top: 1.5625vw;
      &-in {
        width: calc((100% - 15.625vw) / 5);
        margin: 0 1.5625vw 2.0833vw;
      }
    }
  }
  .index-caseSharing {
    padding: 1.8229vw 0 3.125vw;
    margin-top: 4.1667vw;
    &-in {
      width: 70%;
      max-width: 54.4792vw;
      margin: 2.3438vw auto 0;
      .in-cen {
        margin-top: 6.25vw;
        &-box {
          width: calc(50% - 0.4167vw);
        }
      }
    }
  }
  .index-doctorTeam {
    margin: 5.2083vw auto 2.6042vw;
    &-con {
      max-width: 66.6667vw;
      margin: 1.3021vw auto 0;
    }
    &-tab1 {
      :deep(.areaTab) {
        div {
          font-size: 1.0417vw;
        }
      }
    }
    &-tab2 {
      margin-top: 0.5208vw;
      &-in {
        & > div {
          padding: 0.2604vw 0;
          font-size: 0.9375vw;
          letter-spacing: 0.1563vw;
          &:first-child {
            border-radius: 0.2604vw 0 0 0.2604vw;
          }
          &:last-child {
            border-radius: 0 0.2604vw 0.2604vw 0;
          }
        }
      }
    }
    &-lists {
      min-height: 7.9167vw;
      .pcLists {
        &-in {
          margin-bottom: 1.5625vw;
          &:not(:last-child) {
            margin-right: 1.5625vw;
          }
          &-img {
            width: 7.8125vw;
            height: 7.8125vw;
            border-radius: 0.5208vw;
          }
        }
        .swiperpcLists-in {
          &-img {
            margin: 0 0.7813vw;
            border-radius: 0.5208vw;
          }
        }
      }
      .mbLists {
        width: calc(100% - 2.0833vw);
        &-in {
          &-img {
            margin: 0 0.5208vw;
            border-radius: 0.5208vw;
          }
        }
      }
    }
    &-detail {
      padding: 1.0417vw;
      margin-top: 2.6042vw;
      &-l {
        max-width: 22.6042vw;
        &-in {
          &::after {
            top: -1.0417vw;
            left: -1.0417vw;
            border-radius: 1.5625vw;
          }
        }
        img {
          border-radius: 1.5625vw;
        }
      }
      &-r {
        .detail-1 {
          padding-left: 1.0417vw;
          span {
            font-size: 1.0417vw;
            &:nth-of-type(1) {
              font-size: 1.8229vw;
              margin-right: 0.2604vw;
            }
          }
        }
        .detail-2 {
          span {
            font-size: 1.4583vw;
            padding: 0.2604vw 3.6458vw 0.2604vw 1.0417vw;
          }
        }
        .detail-3 {
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          margin-bottom: 1.5625vw;
          margin-top: 0.2604vw;
        }
        .detail-4 {
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          margin-bottom: 1.0417vw;
        }
        .detail-5 {
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          span {
            &:not(:last-child) {
              margin-right: 0.5208vw;
            }
          }
        }
        .detail-6 {
          margin-top: 1.5625vw;
          margin-left: 1.0417vw;
          margin-bottom: 1.0417vw;
        }
      }
    }
    &-detailBox {
      min-height: 28.6458vw;
    }
    .index-doctorTeam-detail-swiper {
      padding-bottom: 2.0833vw;
    }
  }
  .sectionBox {
    max-width: 73.2292vw;
    margin: 2.6042vw auto 0;
    gap: 2.7083vw;
    &-l {
      .image-b {
        gap: 0.8333vw;
        margin-top: 0.7292vw;
      }
    }
    &-c {
      .media_coverage-tab {
        margin-top: 1.0417vw;
        padding-bottom: 0.2604vw;
        & > div {
          font-size: 1.0417vw;
          padding: 0.1563vw 1.3021vw;
          border-radius: 2.6042vw;
          margin-left: 1.0417vw;
          &::after {
            width: 1.25vw;
            height: 1.6667vw;
            top: calc(100% + 0.2604vw);
            border-left: 0.625vw solid rgba(255, 255, 255, 0);
            border-top: 0.8333vw solid var(--indexColor1);
            border-right: 0.625vw solid rgba(255, 255, 255, 0);
            border-bottom: 0.8333vw solid rgba(255, 255, 255, 0);
          }
        }
      }
      .media_coverage-content {
        margin-top: 1.1458vw;
        .list-in {
          margin-bottom: 0.625vw;
          &-t {
            gap: 1.1458vw;
            padding-bottom: 0.7813vw;
            &-r {
              img {
                margin-right: 0.2604vw;
                max-width: 4.4271vw;
              }
              span {
                font-size: 1.0417vw;
              }
            }
          }
          &-b {
            padding: 0.2604vw 0;
            &-l {
              font-size: 0.9375vw;
              letter-spacing: 0.0938vw;
              span {
                margin-right: 0.7813vw;
              }
              &::after {
                width: 4.1667vw;
              }
            }
            &-r {
              font-size: 1.0417vw;
            }
          }
        }
      }
      .media_coverage-btn {
        font-size: 1.0417vw;
        padding: 0.3646vw 0;
      }
    }
    &-r {
      max-width: 18.2813vw;
    }
  }
  .brand {
    &-title {
      margin-bottom: 1.4583vw;
    }
    &-context {
      font-size: 1.5625vw;
    }
    &-in {
      max-width: 71.875vw;
      margin: 3.1771vw auto 0;
      & > div,
      & > a {
        padding: 0 1.0417vw;
        & > div {
          font-size: 1.3542vw;
          img {
            max-width: 7.0313vw;
          }
        }
      }
    }
  }
  .Dental_knowledge {
    margin-top: 3.125vw;
    &-tab {
      max-width: 71.0938vw;
      margin: 1.8229vw auto 0;
      gap: 1.0417vw;
      padding-bottom: 0.5208vw;
      &-in {
        font-size: 2.0833vw;
        padding: 0 1.8229vw;
        border-radius: 2.6042vw;
      }
    }
    &-content {
      max-width: 71.0938vw;
      margin: 1.8229vw auto 0;
      gap: 2.9688vw;
      padding: 0 1.8229vw;
      &-c {
        .info {
          margin-bottom: 0.4167vw;
        }
        .title {
          font-size: 1.25vw;
        }
        .context {
          font-size: 1.0417vw;
          margin-top: 0.2604vw;
        }
        .lists {
          &-in {
            font-size: 1.0417vw;
            padding: 0.8333vw 0;
          }
          &-title {
            font-size: 1.0417vw;
          }
          &-context {
            font-size: 0.7292vw;
          }
        }
      }
    }
  }
  .news {
    &-tab {
      max-width: 71.0938vw;
      margin: 6.3021vw auto 0;
      gap: 1.0417vw;
      padding-bottom: 0.5208vw;
      &-in {
        font-size: 2.0833vw;
        padding: 0 1.8229vw;
        border-radius: 2.6042vw;
      }
    }
    &-content {
      max-width: 71.0938vw;
      margin: 1.6667vw auto 0;
      .list-in {
        font-size: 1.0417vw;
        padding-bottom: 0.8333vw;
        &:nth-of-type(even) {
          padding-left: 1.0417vw;
        }
        &:nth-of-type(odd) {
          padding-right: 1.0417vw;
        }
      }
    }
  }
  .setionBox {
    margin-top: 6.25vw;
    gap: 3.2813vw;
    &-l {
      max-width: 28.6979vw;
      .Medical-vouchers {
        &-title {
          margin-bottom: 0.5208vw;
          padding: 0 0.5208vw;
        }
        &-in {
          .list-in {
            padding-top: 0.7813vw;
            &-t {
              gap: 0.9896vw;
              padding-bottom: 0.7813vw;
              &-r {
                h2 {
                  font-size: 1.0417vw;
                }
                p {
                  font-size: 0.625vw;
                }
              }
            }
            &-b {
              padding: 0.2604vw 0;
              &-l {
                font-size: 0.9375vw;
                letter-spacing: 0.0938vw;
                span {
                  margin-right: 0.5208vw;
                }
                &::after {
                  width: 4.1667vw;
                }
              }
              &-r {
                font-size: 1.0417vw;
              }
            }
          }
          .btn {
            font-size: 1.0417vw;
            margin-top: 0.5208vw;
            padding: 0.2604vw 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .problem-data {
    :deep(.problem) {
      .dentistryServices-title-in {
        color: var(--textColor);
        display: inline-block;
        font-size: 19px;
        position: relative;
        text-align: center;
        font-weight: 700;
      }
      .bb {
        padding-bottom: 0;
      }
      .bb::after {
        border-radius: 2px;
        background: var(--indexColor_2);
        width: calc(100% + 20px);
        left: -10px;
        height: 50%;
        z-index: -1;
      }
    }
  }
  .setionBox {
    gap: 0;
    margin-top: 0;
    &-l {
      display: none;
    }
  }
  .news {
    display: none;
  }
  .youtobeBox {
    margin-top: 0;
    grid-template-columns: 1fr;
    gap: 0;
    &-l {
      &-title {
        padding: 0 20px 10px;
      }
    }
    &-r {
      display: none;
    }
  }
  .PromotionProject {
    width: 100%;
    flex-direction: column;
    padding-top: 20px;
    &-title {
      color: var(--Grey-Deep, #4d4d4d);
      writing-mode: initial;
      font-size: 19px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 30.4px */
      text-align: center;
      margin: 8px 0;
      letter-spacing: initial;
      margin-right: 0;
      padding-right: 0;
      border-right: none;
    }
    &-content {
      width: 100%;
      overflow: hidden;
      margin-bottom: 8px;
      .PromotionProject-swiper-slide {
        img {
          width: 100%;
        }
      }
      &::after {
        display: none;
      }
    }
  }
  .mbBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    .newsListsBox {
      margin-top: 60px;
      width: 100%;
    }
    .brandConceptBox {
      margin-top: 60px;
      width: 100%;
    }
    .AboutUsBox {
      margin-top: 60px;
      max-width: 100%;
    }
  }
  .indexPage {
    width: 100%;
    background: #fff;
  }
  .index-doctorTeam {
    margin: 50px 0 0;
    width: 100%;
    &-con {
      width: 100%;
    }
    &-t {
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
      padding: 0 20px;
    }
    &-tab1 {
      :deep(.areaTab) {
        div {
          font-size: 16px;
        }
      }
    }
    &-tab2 {
      padding: 0 20px;
      margin-top: 20px;
      &-in {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #00aeff;
        border-radius: 5px;
        & > div {
          font-size: 16px;
          border: none;
          &:not(:nth-of-type(n + 4)) {
            border-right: 1px solid #00aeff;
          }
          &:not(:nth-of-type(n + 5)) {
            border-bottom: 1px solid #00aeff;
          }
          &:nth-of-type(n + 6) {
            border-left: 1px solid #00aeff;
          }
          &.textlang-3,
          &.textlang-4 {
            min-width: calc(100% / 4);
          }
          &:first-child {
            border-radius: 0;
          }
          &:last-child {
            border-right: none;
            border-radius: 0;
          }
          &:hover {
            color: #00aeff;
            background: #fff;
          }
          &.index-doctorTeam-tab2-in-active {
            color: #fff;
            background: #00aeff;
          }
        }
        &.tablang-1,
        &.tablang-2,
        &.tablang-3,
        &.tablang-4 {
          & > div {
            border-bottom: none;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
    }
    &-lists {
      margin-top: 20px;
      min-height: 96px;
      overflow: hidden;
      .pcLists {
        display: none;
      }
      .mbLists {
        display: block;
      }
    }
    &-detail {
      flex-direction: column;
      padding: 0 17px;
      margin-top: 30px;
      position: relative;
      &-l {
        width: 169px;
        height: 230px;
        overflow: hidden;
        position: absolute;
        left: 17px;
        top: 0;
        &-in {
          &::after {
            display: none;
          }
        }
        img {
          border-radius: 0;
          &:nth-of-type(1) {
            border: none;
            width: 169px;
            height: 230px;
          }
          &:nth-of-type(2) {
            max-width: 130%;
            width: 130%;
            height: auto;
            max-height: 100%;
            left: 50%;
            top: auto;
            bottom: 0;
            transform: translateX(-50%);
          }
        }
        &-btn {
          display: none;
        }
      }
      &-r {
        // display: inline;
        display: flex;
        flex-direction: column;
        .detail-1 {
          order: 1;
          margin: 5px 0;
          padding: 0;
          // width: calc(100% - 180px);
          width: auto;
          padding-left: 180px;
          span {
            font-size: 15px;
            display: block;
            letter-spacing: 1.5px;
            &:nth-of-type(1) {
              font-size: 30px;
              letter-spacing: 6px;
              margin-right: 5px;
            }
          }
        }
        .detail-2 {
          order: 2;
          width: auto;
          padding-left: 180px;
          span {
            width: 100%;
            font-size: 15px;
            padding: 5px 15px 5px 10px;
            clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .detail-3 {
          order: 3;
          margin-top: 10px;
          margin-bottom: 10px;
          padding: 0;
          font-size: 14px;
          width: auto;
          padding-left: 180px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .detail-4 {
          order: 5;
          font-size: 14px;
          padding: 0;
          margin-bottom: 30px;
          margin-top: 20px;
          span {
            text-align: justify;
          }
        }
        .detail-5 {
          font-size: 12px;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          order: 4;
          width: auto;
          padding-left: 180px;
          min-height: 67px;
          span {
            display: inline-block;
            &:not(:last-child) {
              margin-right: 40px;
            }
            margin-right: 40px;
            &::before {
              content: '#';
            }
          }
        }
        .detail-6 {
          order: 6;
          display: flex;
          justify-content: center;
          margin-left: 0;
          margin-top: 10px;
          span {
            font-size: 28px;
          }
        }
      }
    }
  }
  .index-caseSharing {
    padding: 0;
    background: none;
    margin-top: 30px;
    &-title {
      justify-content: flex-start;
      padding: 0 20px;
    }
    &-in {
      width: 100%;
      margin: 35px auto 0;
      .in-cen {
        margin-top: 34px;
        flex-direction: column;
        &-box {
          width: 100%;
        }
      }
      .in-bottom {
        width: 100%;
        background: linear-gradient(
          0deg,
          rgba(255, 241, 240, 0.7) 41.54%,
          rgba(255, 241, 240, 0) 137.31%
        );
        padding: 20px 0;
        margin-top: 0;
        span {
          width: 137px;
          height: 40px;
          font-weight: 500;
          font-size: 1rem;
          background: #ffffff;
          line-height: 40px;
          padding: 0;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          color: #666666;
          transition: all 0.3s;
          &:hover {
            background: var(--indexColor3);
            color: #ffffff;
            text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
          }
        }
      }
    }
  }
  .index-org {
    margin-top: 30px;
    &-t {
      justify-content: flex-start;
      padding: 0 20px;
    }
    &-tag {
      width: 100%;
      max-width: calc(100% - 40px);
      margin-top: 30px;
      &-in {
        font-size: 16px;
      }
    }
    &-content {
      max-width: calc(100% - 20px);
      justify-content: flex-start;
      &-swiper {
        &-slie {
          justify-content: initial;
        }
      }
      &-in {
        margin: 0 10px 30px;
        width: calc((100% - 60px) / 3);
        img {
          max-height: 70px;
        }
      }
    }
  }
  .brand {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    &-title {
      order: 2;
      margin-bottom: 0;
      .index_title {
        font-size: 15px;
        color: var(--indexColor1);
        &::after {
          display: none;
        }
      }
    }
    &-context {
      margin-top: 0px;
      font-size: 15px;
      color: var(--indexColor1);
      &:nth-of-type(2) {
        order: 1;
      }
      &:nth-of-type(3) {
        order: 3;
        margin-top: 4px;
        color: var(--Blue-Deep, #00aeff);
      }
    }
    &-in {
      order: 4;
      margin: 24.68px auto 0;
      padding: 0 21.5px;
      padding: 0;
      flex-wrap: nowrap;
      justify-content: flex-start;
      overflow: hidden;
      overflow-x: scroll;
      max-width: 100vw;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
      & > div,
      & > a {
        width: 106px;
        min-width: 106px;
        padding: 0 12px 10px;
        scroll-snap-align: center;
        & > div {
          font-size: 13px;
          &:first-child {
            img {
              width: 100%;
            }
          }
          &:last-child {
            margin-top: 6px;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .sectionBox {
    grid-template-columns: 1fr;
    padding: 0 17px;
    &-l,
    &-r {
      display: none;
    }
    &-c {
      .media_coverage-title {
        padding: 0 10px;
      }
      .media_coverage-tab {
        & > div {
          font-size: 15px;
          font-weight: 700;
          &::after {
            width: 12px;
            height: 16px;
            border-left: 6px solid rgba(255, 255, 255, 0);
            border-top: 8px solid var(--indexColor1);
            border-right: 6px solid rgba(255, 255, 255, 0);
            border-bottom: 8px solid rgba(255, 255, 255, 0);
          }
        }
      }
      .media_coverage-content {
        margin-top: 18px;
        .list-in {
          margin-bottom: 10px;
          &-t {
            padding-bottom: 10px;
            &-r {
              img {
                max-width: 40px;
              }
              span {
                font-size: 14px;
              }
            }
          }
          &-b {
            &-l {
              font-size: 13px;
            }
            &-r {
              font-size: 13px;
            }
          }
        }
      }
      .media_coverage-btn {
        display: none;
      }
    }
  }
  .Dental_knowledge {
    padding: 0 20px;
    &-title {
      justify-content: flex-start;
      padding: 0 10px;
    }
    &-tab {
      gap: 20px;
      padding-bottom: 6px;
      margin-top: 16px;
      &-in {
        font-size: 15px;
        padding: 3px 15px;
        font-weight: 700;
        &:nth-of-type(4) {
          display: none;
        }
      }
    }
    &-content {
      grid-template-columns: 1fr;
      padding: 0;
      margin-top: 18px;
      &-l,
      &-r {
        display: none;
      }
      &-c {
        .info {
          display: flex;
          margin-bottom: 18px;
          &-l {
            display: block;
            max-width: 127px;
            margin-right: 11px;
            img {
              width: 100%;
            }
          }
          &-r {
            flex: 1;
          }
        }
        .title {
          font-size: 15px;
        }
        .context {
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .lists {
          &-in {
            padding: 5px 0;
            font-size: 14px;
            text-decoration: underline;
          }
          &-title {
            font-size: 14px;
          }
          &-context {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
