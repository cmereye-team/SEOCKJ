<script lang="ts" setup>
import { ref } from 'vue'
import { Controller } from 'swiper'
import { Scrollbar } from 'swiper'

useHead({
  title: '品牌介紹 | 口腔專科醫院',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健作為深圳愛康健口腔醫院是一家專業口腔醫院，秉承著「專科·專業」的服務理念，科學、合理地整合醫療資源。我們的醫師團隊均畢業於國內知名口腔學院，包括種植醫師、美學修復醫師、牙周病醫師等專業人員。他們帶領著醫護人員共同構成我們的服務團隊，為患者提供專業、優質的口腔醫療服務。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 愛康健',
    },
  ],
})

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/06/26b5fe0384118903.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2024/06/90ea93afd252c8e6.jpg',
  },
]

const introduceData = {
  title: 'pages.brand.course.introduce.title',
  content: 'pages.brand.course.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2024/01/64f1f4312e2a0f2c.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/01/f4ba25aef63c2a5b.jpg',
  tabNavName: 'pages.brand.course.introduce.tabNavName',
}

const courseData = {
  title: 'pages.brand.course.history.title',
  lists: [
    {
      timeNode: '1995',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_1995.context',
        },
      ],
    },
    {
      timeNode: '2000',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2000.context',
        },
      ],
    },
    {
      timeNode: '2006',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2006.context',
        },
      ],
    },
    {
      timeNode: '2008',
      events: [
        {
          month: '5月',
          context: 'pages.brand.course.history.time_2008.context_5',
        },
        {
          month: '7月',
          context: 'pages.brand.course.history.time_2008.context_7',
        },
        {
          month: '10月',
          context: 'pages.brand.course.history.time_2008.context_10',
        },
        {
          month: '11月',
          context: 'pages.brand.course.history.time_2008.context_11',
        },
      ],
    },
    {
      timeNode: '2009',
      events: [
        {
          month: '4月',
          context: 'pages.brand.course.history.time_2009.context_4',
        },
        {
          month: '6月',
          context: 'pages.brand.course.history.time_2009.context_6',
        },
        {
          month: '7月',
          context: 'pages.brand.course.history.time_2009.context_7',
        },
      ],
    },
    {
      timeNode: '2010',
      events: [
        {
          month: '4月',
          context: 'pages.brand.course.history.time_2010.context_4',
        },
      ],
    },
    {
      timeNode: '2011',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2011.context',
        },
      ],
    },
    {
      timeNode: '2012',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2012.context',
        },
      ],
    },
    {
      timeNode: '2014',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2014.context',
        },
      ],
    },
    {
      timeNode: '2015',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2015.context',
        },
      ],
    },
    {
      timeNode: '2016',
      events: [
        {
          month: '1月',
          context: 'pages.brand.course.history.time_2016.context_1',
        },
        {
          month: '12月',
          context: 'pages.brand.course.history.time_2016.context_12',
        },
      ],
    },
    {
      timeNode: '2017',
      events: [
        {
          month: '5月',
          context: 'pages.brand.course.history.time_2017.context_5',
        },
        {
          month: '8月',
          context: 'pages.brand.course.history.time_2017.context_8',
        },
      ],
    },
    {
      timeNode: '2018',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2018.context',
        },
      ],
    },
    {
      timeNode: '2019',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2019.context',
        },
      ],
    },
    {
      timeNode: '2020',
      events: [
        {
          month: '11月',
          context: 'pages.brand.course.history.time_2020.context_11',
        },
        {
          month: '12月',
          context: 'pages.brand.course.history.time_2020.context_12',
        },
      ],
    },
    {
      timeNode: '2021',
      events: [
        {
          month: '6月',
          context: 'pages.brand.course.history.time_2021.context_6',
        },
        {
          month: '9月',
          context: 'pages.brand.course.history.time_2021.context_9',
        },
        {
          month: '12月',
          context: 'pages.brand.course.history.time_2021.context_12',
        },
      ],
    },
  ],
}

let _lists = JSON.parse(JSON.stringify(courseData.lists))
let newCourseLists = _lists.reverse()

let currtNum = ref(0)

const firstSwiper: any = ref(null)
const secondSwiper = ref(null)
const handleFirstSwiper = (swiper) => {
  let _index = swiper.clickedIndex
  firstSwiper.value.slideToLoop(_index)
}

const setFirstSwiper = (swiper) => {
  firstSwiper.value = swiper
}
const setSecondSwiper = (swiper) => {
  secondSwiper.value = swiper
}

const changeSwiper = (swiper) => {
  currtNum.value = swiper.activeIndex
}

let swiperRef = {
  slidePrev: () => {},
  slideNext: () => {},
}
const setSwiperRef = (swiper: any) => {
  swiperRef = swiper
}
const handleProcessBtn = (_type: string) => {
  swiperRef[_type]()
}

// let actShowShare = ref(0)
const handleClick = (event, _index: number) => {
  event.preventDefault()
  summaryOfAnActivity.value.map((item, index) => {
    if (index === _index) {
      item.isShare = !item.isShare
    }
  })
}
const shareFacebook = (event, id, link) => {
  event.preventDefault()
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=https://www.ckjofficial.com${link}`
  )
}
function copySpecifiedText(event, id, link) {
  event.preventDefault()
  if (navigator.clipboard) {
    navigator.clipboard.writeText(`https://www.ckjofficial.com${link}`).then(
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
const summaryOfAnActivity = ref<Activity[]>([
  {
    id: 103,
    titleName: '活動剪影',
    img: 'https://static.cmereye.com/imgs/2024/07/8efd3b557840d9de.jpg',
    title: ['香港華人牙醫公會參觀交流'],
    text: '2024年5月22日，我們接待了香港華人牙醫公會的訪問團隊，此次訪問旨在進一步加强與香港在口腔醫療領域的學習與交流。作為大灣區的領先口腔醫療機構，愛康健口腔集團致力於提升醫療服務質量，此次交流將有助於推動地區醫療服務的共同發展。',
    tagLink: ['#團體交流'],
    date: '2024年5月30日',
    link: '/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association',
    moreLink: '/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association',
    isShare: false,
  },
  {
    id: 104,
    titleName: '活動剪影',
    img: 'https://static.cmereye.com/imgs/2024/07/c8abd1734a4764fc.jpg',
    title: ['愛心洗牙啟動禮公益活動'],
    text: '與立法會議員、香港中旅集團及社福團體，為過千位長者及有需要人士提供免費基層牙科醫療及交通接送服務',
    tagLink: ['#公益活動'],
    date: '2024年5月30日',
    link: '/brand/love-teeth-wash-launching-ceremony-public-welfare-activity',
    moreLink: '/brand/love-teeth-wash-launching-ceremony-public-welfare-activity',
    isShare: false,
  },
  {
    id: 101,
    titleName: '工聯會專區',
    img: 'https://static.cmereye.com/imgs/2024/05/78b98f959d17010c.jpg',
    title: ['香港工聯會參觀交流'],
    text: '接待香港工聯會代表團，交流牙科醫療服務發展及趨勢',
    tagLink: ['#團體交流'],
    date: '2023年12月15日',
    link: '/brand/action-message',
    moreLink: '/federation-of-trade-unions-zone',
    isShare: false,
  },
  {
    id: 102,
    titleName: '長者醫療券',
    img: 'https://static.cmereye.com/imgs/2024/05/5fa4444992580948.jpg',
    title: ['深圳愛康健正式納入', '灣區長者醫療券參與機構'],
    text: '2024年2月19日政府公布，深圳愛康健齒科已經正式成為「長者醫療券大灣區試點計劃」的參與機構，這個計劃旨在資助符合條件的長者跨境到愛康健齒科口腔醫院使用長者醫療券支付治療費用。政府預計今年第三季開始實施該計劃，約有170萬名合資格的長者將從中受益。',
    tagLink: ['#醫療券', '#長者', '#政府政策'],
    date: '2024年2月19日',
    link: '/brand/action-message',
    moreLink: '/federation-of-trade-unions-zone',
    isShare: false,
  },
])

interface Activity {
  id: number
  titleName: string
  img: string
  title: string[]
  text: string
  tagLink: string[]
  date: string
  link: string
  moreLink: string
  isShare: boolean
}

const pageSize = ref(2)
const currentPage = ref(1)
const nowList = ref<Activity[]>([])
const handleCurrentChange = (page) => {
  currentPage.value = page
  if (page == 1) {
    // 取前两个
    nowList.value = summaryOfAnActivity.value.slice(0, pageSize.value)
  } else if (page == 2) {
    // 取后两个
    nowList.value = summaryOfAnActivity.value.slice(
      pageSize.value * (page - 1),
      pageSize.value * page
    )
  }
}

onMounted(() => {
  handleCurrentChange(1)
})
</script>

<template>
  <div>
    <PageBanner :isApiConfig="true" :apiId="'187'" />
    <div class="pageIn whitebgColor">
      <div class="smallPageCon aboutsUs-title">
        <div class="index_title">關於我們</div>
      </div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link
          :to="'/'"
          title="深圳愛康健口腔醫院"
          alt="深圳愛康健口腔醫院"
        >
          <span>{{ $t('pages.index.title') }}</span>
        </nuxt-link>
        <span :title="'關於我們'">關於我們</span>
      </div>
      <div class="introduce bigPageCon">
        <div
          class="introduce-in"
          :style="{
            background: `url(${introduceData.pcImg}) no-repeat`,
            backgroundPosition: 'right top',
            backgroundSize: 'auto 100%',
          }"
        >
          <div class="introduce-in-t mbBox">
            <img :src="introduceData.mbImg" />
          </div>
          <div class="introduce-in-l pageCon">
            <h2>簡介</h2>
            <div class="title">CKJ愛康健口腔品牌連鎖專注口腔，屢獲殊榮</div>
            <div class="content">
              作為深圳口腔專科醫院，深圳愛康健口腔醫院秉承著「專科·專業」的服務宗旨，對醫療資源進行了科學、合理的整合。醫師團隊是畢業於國內知名口腔學院的專業人員；醫院各專業帶頭人，包括種植醫師、美學修復醫師、牙周病醫師等共同組成，帶領一批醫護人員一起構成愛康健口腔醫院的服務團隊。全程式預約一體化診療服務，讓每一位顧客享受健康微笑之旅。
            </div>
          </div>
        </div>
      </div>
      <div class="setionBox pageCon">
        <div class="setionBox-l">
          <div v-for="(item, index) in nowList" :key="item.id">
            <div class="course-action-title">
              <div class="index_title" :id="`title-${item.id}`">
                {{ item.titleName }}
              </div>
            </div>
            <div class="course-action-in">
              <nuxtLink :to="item.link" class="list-in">
                <div class="list-in-t">
                  <div class="list-in-t-l">
                    <img :src="item.img" :alt="item.titleName" />
                  </div>
                  <div class="list-in-t-r">
                    <h2 v-for="(e, i) in item.title" :key="i">{{ e }}</h2>
                    <p>{{ item.text }}</p>
                  </div>
                </div>
                <div class="list-in-b">
                  <div class="list-in-b-l">
                    <span v-for="(el, i) in item.tagLink" :key="i">{{
                      el
                    }}</span>
                  </div>
                  <div class="list-in-b-r">
                    <span>{{ item.date }}</span>
                    <div
                      class="shareIcon"
                      @click.stop="handleClick($event, index)"
                      alt=""
                    >
                      <div
                        :class="[
                          'shareIcon-img',
                          { act: item.isShare === true },
                        ]"
                        alt="分享"
                        title="分享"
                      >
                        <img src="@/assets/images/icon_47.svg" alt="" />
                      </div>
                      <div class="shareIcon-in" v-if="item.isShare === true">
                        <div
                          class="shareIcon-in-item"
                          @click="shareFacebook($event, index, item.link)"
                          alt="Facebook 分享"
                          title="Facebook 分享"
                        >
                          <img src="@/assets/images/icon_49.svg" alt="" /><span
                            >Facebook 分享</span
                          >
                        </div>
                        <div
                          class="shareIcon-in-item"
                          @click="copySpecifiedText($event, index, item.link)"
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
              <nuxt-link :to="item.moreLink" class="btn">
                <span>查看更多</span>
              </nuxt-link>
            </div>
          </div>
          <el-pagination
            :page-size="pageSize"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="summaryOfAnActivity.length"
            @current-change="handleCurrentChange"
          />
          <!-- <div class="course-action-title">
            <div class="index_title">工聯會專區</div>
          </div>
          <div class="course-action-in">
            <nuxtLink :to="`/brand/action-message`" class="list-in">
              <div class="list-in-t">
                <div class="list-in-t-l">
                  <img
                    src="https://static.cmereye.com/imgs/2024/05/78b98f959d17010c.jpg"
                    alt=""
                  />
                </div>
                <div class="list-in-t-r">
                  <h2>香港工聯會參觀交流</h2>
                  <p>接待香港工聯會代表團，交流牙科醫療服務發展及趨勢</p>
                </div>
              </div>
              <div class="list-in-b">
                <div class="list-in-b-l">
                  <span>#團體交流</span>
                </div>
                <div class="list-in-b-r">
                  <span>2023年12月15日</span>
                  <div
                    class="shareIcon"
                    @click.stop="handleClick($event, '1')"
                    alt=""
                  >
                    <div
                      :class="['shareIcon-img', { act: actShowShare === '1' }]"
                      alt="分享"
                      title="分享"
                    >
                      <img src="@/assets/images/icon_47.svg" alt="" />
                    </div>
                    <div class="shareIcon-in" v-if="actShowShare === '1'">
                      <div
                        class="shareIcon-in-item"
                        @click="
                          shareFacebook($event, '1', '/brand/action-message')
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
                            '1',
                            '/brand/action-message'
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
            </nuxtLink>
            <nuxt-link to="/federation-of-trade-unions-zone" class="btn">
              <span>查看更多</span>
            </nuxt-link>
          </div>
          <div class="Medical-vouchers-title">
            <div class="index_title">長者醫療券</div>
          </div>
          <div class="Medical-vouchers-in">
            <nuxtLink :to="`/health-care-voucher`" class="list-in">
              <div class="list-in-t">
                <div class="list-in-t-l">
                  <img
                    src="https://static.cmereye.com/imgs/2024/05/5fa4444992580948.jpg"
                    alt=""
                  />
                </div>
                <div class="list-in-t-r">
                  <h2>深圳愛康健正式納入<br />灣區長者醫療券參與機構</h2>
                  <p>
                    2024年2月19日政府公布，深圳愛康健齒科已經正式成為「長者醫療券大灣區試點計劃」的參與機構，這個計劃旨在資助符合條件的長者跨境到愛康健齒科口腔醫院使用長者醫療券支付治療費用。政府預計今年第三季開始實施該計劃，約有170萬名合資格的長者將從中受益。
                  </p>
                </div>
              </div>
              <div class="list-in-b">
                <div class="list-in-b-l">
                  <span>#醫療券</span>
                  <span>#長者</span>
                  <span>#政府政策</span>
                </div>
                <div class="list-in-b-r">
                  <span>2024年2月19日</span>
                  <div
                    class="shareIcon"
                    @click.stop="handleClick($event, '2')"
                    alt=""
                  >
                    <div
                      :class="['shareIcon-img', { act: actShowShare === '2' }]"
                      alt="分享"
                      title="分享"
                    >
                      <img src="@/assets/images/icon_47.svg" alt="" />
                    </div>
                    <div class="shareIcon-in" v-if="actShowShare === '2'">
                      <div
                        class="shareIcon-in-item"
                        @click="
                          shareFacebook($event, '2', '/health-care-voucher')
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
                          copySpecifiedText($event, '2', '/health-care-voucher')
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
            <nuxt-link to="/health-care-voucher" class="btn">
              <span>查看更多</span>
            </nuxt-link>
          </div> -->
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
                    src="https://static.cmereye.com/imgs/2023/05/d7e785a21ef31545.png"
                    alt=""
                  />
                </div>
                <div>深圳老字號</div>
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/05/6b9b5cbf87f8da95.png"
                    alt=""
                  />
                </div>
                <div>廣東省著名商標品牌</div>
              </div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/05/42202884c1b63259.png"
                    alt=""
                  />
                </div>
                <div>中山大學光華口腔醫學院<br />研究生課程深圳教學基地</div>
              </div>
              <div>
                <div>
                  <img
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
      <div class="course">
        <div class="course-title dentistryServices-title">
          <div class="course-title-in dentistryServices-title-in bb">
            {{ $t(courseData.title) }}
          </div>
        </div>
        <div class="course-in">
          <div class="historyNode-pc">
            <div class="historyNode-pc-t">
              <swiper
                :slidesPerView="1"
                class="courseSwiperT"
                :modules="[Controller]"
                :width="145"
                :translate="145"
                @swiper="setFirstSwiper"
                @click="handleFirstSwiper"
                @slideChange="changeSwiper"
                :controller="{ control: secondSwiper }"
              >
                <swiper-slide
                  :class="['swiper-slide']"
                  v-for="(courseItem, courseIndex) in newCourseLists"
                  :key="courseIndex"
                >
                  <div class="timeNode">{{ courseItem.timeNode }}</div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="historyNode-pc-line">
              <div class="historyNode-pc-line-in"></div>
            </div>
            <div class="historyNode-pc-b">
              <swiper
                class="courseSwiperB"
                :modules="[Controller]"
                @swiper="setSecondSwiper"
                @click="handleFirstSwiper"
                :controller="{ control: firstSwiper }"
              >
                <swiper-slide
                  :class="['swiper-slide']"
                  v-for="(courseItem, courseIndex) in newCourseLists"
                  :key="courseIndex"
                >
                  <div class="courseBox">
                    <div class="courseBox-line">
                      <div
                        class="round"
                        :class="{ currtNumRound: currtNum >= courseIndex }"
                      ></div>
                    </div>
                    <div class="courseBox-in">
                      <div class="courseBox-in-lists">
                        <div
                          class="courseBox-in-listItem"
                          v-for="(
                            courseTimeNodeItem, courseTimeNodeIndex
                          ) in courseItem.events"
                          :key="courseTimeNodeIndex"
                        >
                          <div class="month">
                            {{ courseTimeNodeItem.month }}
                          </div>
                          <div class="context">
                            {{ $t(courseTimeNodeItem.context) }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="historyNode-mb">
            <div
              class="historyNode-in"
              v-for="(courseItem, courseIndex) in courseData.lists"
              :key="courseIndex"
            >
              <div
                :class="[
                  'historyNode-box',
                  { 'act-historyNode-box': currtNum === courseIndex },
                ]"
              >
                <div class="year" @click="currtNum = courseIndex">
                  {{ courseItem.timeNode }}
                </div>
                <div
                  :class="[
                    'eventsItem',
                    { 'act-eventsItem': currtNum === courseIndex },
                  ]"
                  v-for="(eventsItem, eventsIndex) in courseItem.events"
                  :key="eventsIndex"
                >
                  <div class="month">{{ eventsItem.month }}</div>
                  <div class="context">{{ $t(eventsItem.context) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="honor">
        <div class="honor-bg">
          <div class="honor-title">
            <span>{{ $t('pages.brand.honor.honorSwiper.title.span_1') }}</span>
            <span>{{ $t('pages.brand.honor.honorSwiper.title.span_2') }}</span>
          </div>
          <div class="honor-in smallPageCon">
            <div class="leftBtn" @click="handleProcessBtn('slidePrev')"></div>
            <swiper
              slidesPerView="auto"
              :loop="true"
              class="honorSwiper"
              @swiper="setSwiperRef"
            >
              <swiper-slide class="swiper-slide">
                <img
                  src="https://static.cmereye.com/imgs/2023/06/154e36113fa5e579.png"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <img
                  src="https://static.cmereye.com/imgs/2023/06/ac0aa9264119857f.png"
                  alt=""
                />
              </swiper-slide>
            </swiper>
            <div class="rightBtn" @click="handleProcessBtn('slideNext')"></div>
          </div>
        </div>
      </div>
      <div class="international">
        <div class="international-title">
          <span>{{ $t('pages.brand.honor.international.title.span_1') }}</span>
          <span>{{ $t('pages.brand.honor.international.title.span_2') }}</span>
        </div>
        <div class="international-context">
          {{ $t('pages.brand.honor.international.context.item_1') }}<br />
          {{ $t('pages.brand.honor.international.context.item_2') }}<br />
          {{ $t('pages.brand.honor.international.context.item_3') }}<br />
          <br />
          {{ $t('pages.brand.honor.international.context.item_4') }}<br />
          {{ $t('pages.brand.honor.international.context.item_5') }}<br />
          {{ $t('pages.brand.honor.international.context.item_6') }}<br />
          {{ $t('pages.brand.honor.international.context.item_7') }}<br />
        </div>
        <div class="international-in smallPageCon">
          <!-- https://static.cmereye.com/imgs/2023/05/f358efedd13763fe.jpg -->
          <swiper
            slidesPerView="auto"
            :scrollbar="{
              hide: true,
            }"
            :modules="[Scrollbar]"
            class="internationalSwiper"
          >
            <swiper-slide class="swiper-slide">
              <img
                src="https://static.cmereye.com/imgs/2023/05/077256e4a998aad2.jpg"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img
                src="https://static.cmereye.com/imgs/2023/05/d528ef75d3159deb.jpg"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img
                src="https://static.cmereye.com/imgs/2023/05/bd7fb4779d941c03.jpg"
                alt=""
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <NewAddress />
    </div>
  </div>
</template>



<style lang="scss" scoped>
// 介绍
.introduce {
  &-in {
    margin-top: 20px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #666666;
      padding-bottom: 90px;
      h2 {
        color: var(--Grey-Deep, #4d4d4d);
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 54.6px */
        padding-top: 66px;
      }
      .title {
        font-weight: 700;
        margin-top: 10px;
        color: var(--indexColor1);
        width: 630px;
        font-size: 50px;
        letter-spacing: 5px;
      }
      .content {
        font-weight: 600;
        font-size: 20px;
        width: 630px;
        margin-top: 10px;
        letter-spacing: 4px;
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 43px;
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
.course {
  margin-top: 100px;

  &-in {
    width: 100%;
    margin: 36px auto 0;
    overflow-x: hidden;
    .courseSwiperT {
      width: 732px;
      overflow: visible;
      .swiper-slide {
        width: auto;
        transition: all 0.5s;
        display: flex;
        align-items: flex-end;
        height: 96px;
        width: 145px;
        box-sizing: content-box;
        .timeNode {
          color: var(--textColor);
          text-align: center;
          font-size: 34px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          transition: all 0.5s;
          opacity: 0.6;
          width: 100%;
        }
        &.swiper-slide-active {
          padding: 0 62px 0 40px;
          .timeNode {
            font-size: 60px;
            opacity: 1;
            color: var(--indexColor1);
          }
        }
      }
    }
    .courseSwiperB {
      width: 100%;
      max-width: calc(284px + 82px);
      margin: 0 auto 0 calc((100% - 732px) / 2);
      overflow: visible;
      .swiper-slide {
        max-width: max-content;
        padding: 31px 41px;
        position: relative;
        height: auto;
        .courseBox {
          width: 284px;
          &-line {
            .round {
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #fdd3e3;
              position: absolute;
              top: -9px;
              left: 41px;
              transition: all 0.3s;
              &.currtNumRound {
                background: var(--indexColor1);
              }
            }
          }
          &-in {
            opacity: 0.6;
            transition: all 0.5s;
            &-listItem {
              .month {
                color: var(--indexColor1);
                text-align: justify;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 32px */
                letter-spacing: 2px;
              }
              .context {
                color: var(--textColor);
                text-align: justify;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 32px */
                letter-spacing: 2px;
              }
            }
          }
        }
        &.swiper-slide-active {
          .courseBox {
            &-in {
              opacity: 1;
            }
          }
        }
      }
    }
    .historyNode-pc-t {
      width: 100%;
      max-width: max-content;
      margin: 0 auto 33px;
    }
    .historyNode-pc-b {
      background: linear-gradient(
        rgba(252, 22, 130, 0.4) -68.47%,
        rgba(252, 22, 130, 0.28) -68.46%,
        rgba(255, 168, 198, 0) 63.88%
      );
    }
    .historyNode-pc-line {
      width: 100%;
      height: 2px;
      background: #fdd3e3;
      position: relative;
      &-in {
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        width: calc((100% - 732px + 90px) / 2);
        background: var(--indexColor1);
      }
    }
    .historyNode-mb {
      display: none;
    }
  }
}
.course-action {
  &-title {
    display: flex;
    margin-bottom: 10px;
    padding: 0 10px;
    .index_title {
      &::after {
        background: #fde3c4;
      }
    }
  }
  &-in {
    border-top: 1px solid #e15697;
    margin-bottom: 63px;
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
            line-height: 200%;
          }
          p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
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
.setionBox {
  margin-top: 97px;
  display: flex;
  gap: 100px;
  &-l {
    flex: 1;
    max-width: 600px;
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
    & > :last-child {
      justify-content: center;
    }
    :deep(.el-pagination) {
      .el-icon {
        background: transparent;
        display: flex;
        align-items: center;
        color: #e15697;
        font-weight: 900;
        font-size: 20px;
      }
      button {
        background: transparent;
      }
      .el-icon {
        font-size: 28px;
      }
    }

    :deep(.el-pager) {
      margin: 0 10px;
      & > li {
        margin: 0 5px;
      }
      .number {
        color: var(--SEO-theme, #e15697);
        text-align: center;
        font-family: 'Noto Serif CJK TC';
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
      }
      .is-active {
        border-radius: 50.5px;
        border: 2px solid var(--SEO-theme, #e15697);
        background: var(--SEO-theme, #e15697);
        width: 40px;
        height: 40px;
        color: var(--White, #fff);
        text-align: center;
        font-family: 'Noto Serif CJK TC';
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
      }
    }
  }
  &-r {
    flex: 1;
  }
}
.honor {
  margin-top: 20px;
  &-bg {
    padding: 70px 0 106px;
    background: linear-gradient(
      270deg,
      rgba(255, 241, 240, 0) 2.6%,
      rgba(255, 241, 240, 0.7) 23.89%,
      rgba(255, 241, 240, 0.7) 75.33%,
      rgba(255, 241, 240, 0) 97.4%
    );
  }
  &-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      &:last-child {
        border-bottom: 4px solid var(--indexColor1);
      }
    }
  }
  &-in {
    margin-top: 72px;
    display: flex;
    .leftBtn {
      width: 70px;
      background: var(--indexColor2);
      cursor: pointer;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-75%, -50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent #fff transparent transparent;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .rightBtn {
      width: 70px;
      background: var(--indexColor);
      cursor: pointer;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-25%, -50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent transparent transparent #fff;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .honorSwiper {
      width: calc(100% - 140px);
      overflow: hidden;
      margin: 0;
      .swiper-slide {
        img {
          width: 100%;
        }
      }
    }
  }
}
.international {
  margin-top: 60px;
  &-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      &:last-child {
        border-bottom: 4px solid var(--indexColor1);
      }
    }
  }
  &-context {
    text-align: center;
    margin-top: 44px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
  }
  &-in {
    margin-top: 58px;
    .internationalSwiper {
      padding-bottom: 44px;
      .swiper-slide {
        padding: 0 15px;
        &:nth-of-type(1) {
          width: 105%;
        }
        &:nth-of-type(2) {
          width: 91%;
        }
        &:nth-of-type(3) {
          width: 131.5%;
        }
      }
      :deep(.swiper-scrollbar) {
        opacity: 1 !important;
        width: 450px;
        margin: 0 auto;
        background: var(--indexColor2);
        left: 50%;
        transform: translateX(-50%);
      }
      :deep(.swiper-scrollbar-drag) {
        background: var(--indexColor1);
      }
    }
  }
}
.aboutsUs-title {
  display: flex;
  justify-content: center;
}
.brand {
  &-title {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
    font-weight: 900;
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
      max-width: 41%;
      padding: 0 10px;
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
#title-102::after {
  background: #d3e9d8;
}
#title-103::after,
#title-104::after {
  border-radius: 2px;
  background: var(--Pink-Mid, #fdd3e3);
}
@media (min-width: 768px) and (max-width: 1920px) {
  .introduce {
    &-in {
      margin-top: 1.0417vw;
      height: 32.709vw;
      max-height: 628px;
      &-l {
        padding-bottom: 4.6875vw;
        h2 {
          font-size: 2.1875vw;
          padding-top: 3.4375vw;
        }
        .title {
          margin-top: 0.5208vw;
          width: 32.8125vw;
          font-size: 2.6042vw;
          letter-spacing: 0.2604vw;
        }
        .content {
          font-size: 1.0417vw;
          width: 32.8125vw;
          margin-top: 0.5208vw;
          letter-spacing: 0.2083vw;
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 2.2396vw;
  }
  .course {
    margin-top: 120px;
  }
  .course-action {
    &-in {
      margin-bottom: 3.2813vw;
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
  .setionBox {
    margin-top: 5.0521vw;
    gap: 8.3333vw;
    &-l {
      max-width: 31.25vw;
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
        padding: 0 0.5208vw;
        & > div {
          font-size: 1.3542vw;
          img {
            max-width: 7.0313vw;
          }
        }
      }
    }
  }
}

//md
@media only screen and (max-width: 768px) {
  .introduce {
    &-in {
      height: auto;
      max-height: 300%;
      background: none !important;
      margin-top: 0;
      &-t {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &-l {
        padding-bottom: 0;
        h2 {
          padding: 0 30px;
          font-size: 16px;
        }
        .title {
          padding: 0 30px;
          font-weight: 700;
          font-size: 16px;
          margin-top: 10px;
          width: auto;
        }
        .content {
          font-size: 15px;
          width: auto;
          padding: 0 30px;
          margin-top: 10px;
        }
      }
    }
  }
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 20px;
  }
  .course {
    margin-top: 90px;
    &-in {
      margin-top: 0;
      padding: 42px 53px 0;
      .historyNode-pc {
        display: none;
      }
      .historyNode-mb {
        display: block;
        .year {
          color: var(--indexColor1);
          // text-align: center;
          font-size: 30px;
          font-weight: 700;
          line-height: 160%;
          background: #fff;
          display: inline-block;
          position: relative;
          z-index: 1;
          padding: 0 10px;
          animation: modulFontAnim 2s infinite;
        }
        .month {
          color: var(--indexColor1);
          text-align: justify;
          font-size: 16px;
          font-weight: 500;
          line-height: 160%;
        }
        .context {
          color: var(--textColor);
          font-size: 16px;
          font-weight: 500;
          line-height: 160%;
        }
        .eventsItem {
          opacity: 0;
          transition: all 0.5s;
          transition-delay: 0.5s;
          height: 0;
          overflow: hidden;
          margin-bottom: 0;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          &.act-eventsItem {
            height: initial;
            opacity: 1;
            &:not(:last-child) {
              margin-bottom: 25px;
            }
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        .historyNode-in {
          padding-bottom: 47px;
          padding-left: 33px;
          position: relative;
          .historyNode-box {
            &::before {
              content: '';
              width: 90px;
              height: 2px;
              background: var(--indexColor1);
              position: absolute;
              top: 25.5px;
              left: 0;
              transition: all 0.5s;
              // animation: modulAnim 3s infinite;
            }
            &::after {
              content: '';
              background: url(@/assets/images/icon_15.svg);
              width: 15px;
              height: 15px;
              background-size: 100% 100%;
              position: absolute;
              top: 19px;
              left: 130px;
              transition: all 0.5s;
            }
            &.act-historyNode-box {
              &::before {
                width: calc(100% - 20px);
              }
              &::after {
                left: calc(100% - 16px);
                transform: rotate(90deg);
              }
            }
          }
          &::before {
            content: '';
            width: 2px;
            height: 100%;
            background: var(--indexColor1);
            position: absolute;
            top: 30px;
            left: 0;
          }
          &::after {
            content: '';
            width: 16px;
            height: 16px;
            background: var(--indexColor1);
            border-radius: 50%;
            position: absolute;
            top: 18px;
            left: -7.5px;
          }
          &:last-child::before {
            display: none;
          }
        }
      }
    }
  }
  .course-action {
    &-in {
      margin-bottom: 32px;
      .list-in {
        &-t {
          padding-bottom: 10px;
          &-r {
            h2 {
              font-size: 14px;
              line-height: 1.3;
            }
            p {
              font-size: 12px;
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
      .btn {
        font-size: 13px;
      }
    }
  }
  .honor {
    margin-top: 30px;
    &-bg {
      padding: 44px 30px;
      background: linear-gradient(
        360deg,
        rgba(255, 241, 240, 0) 0%,
        rgba(255, 241, 240, 0.3) 12.5%,
        rgba(255, 241, 240, 0.3) 81.99%,
        rgba(255, 241, 240, 0) 100%
      );
    }
    &-title {
      span {
        font-size: 26px;
        &:last-child {
          border-bottom: 2.5px solid var(--indexColor1);
        }
      }
    }
    &-in {
      margin-top: 35px;
      .leftBtn {
        width: 15.5px;
        &::after {
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent #fff transparent transparent;
        }
      }
      .rightBtn {
        width: 15.5px;
        &::after {
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent transparent transparent #fff;
        }
      }
      .honorSwiper {
        width: calc(100% - 31px);
      }
    }
  }
  .international {
    margin-top: 30px;
    &-title {
      span {
        font-size: 26px;
        &:last-child {
          border-bottom: 2.5px solid var(--indexColor1);
        }
      }
    }
    &-context {
      font-weight: 500;
      font-size: 14px;
      margin-top: 28px;
    }
    &-in {
      margin-top: 28px;
      .internationalSwiper {
        padding-bottom: 30px;
        .swiper-slide {
          padding: 0 5px;
          &:nth-of-type(1) {
            margin-left: 25px;
          }
        }
        :deep(.swiper-scrollbar) {
          width: 249px;
        }
      }
    }
  }
  .setionBox {
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;
    padding: 0;
    &-l {
      padding: 0 17px;
      .Medical-vouchers {
        &-in {
          .list-in {
            &-t {
              padding-bottom: 10px;
              &-r {
                h2 {
                  font-size: 14px;
                  line-height: 1.3;
                }
                p {
                  font-size: 12px;
                  -webkit-line-clamp: 2;
                  line-clamp: 2;
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
          .btn {
            font-size: 13px;
          }
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
}
</style>