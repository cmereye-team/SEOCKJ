<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp } from '~/assets/js/common'
const appState = useAppState()
appState.setDentistryService('veneers')
useHead({
  title: "全瓷貼片",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供瓷牙貼片服務,香港熱線: 6933 8128免費預約掛號,羅湖福田深圳灣口岸分店，透過度身訂製的纖薄瓷貼片黏附於牙齒表層，可以改善牙齒的形狀、長度、外觀和顏色，達到美白和整齊的效果。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳牙科 深圳愛康健口腔醫院 愛康健齒科集團 美容牙科 高階牙科 醫療券 長者醫療券大灣區試點 案例 牙醫 牙医 深圳 羅湖 朱咪咪 掛號收費 牙科價目表 線上預約 瓷貼片 瓷貼片價格 瓷貼片推薦 全瓷牙貼價錢 牙貼片 牙瓷貼片 牙貼面 瓷牙貼片 美白貼片 美白牙齒 愛康健 瓷貼片流程 微笑設計 美容牙科 微笑曲線 黃金比例',
   },
  ]
})

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/03/1aa48f3837b91f34.jpg',
    mbImg: 'https://static.cmereye.com/imgs/2024/03/fa2f62acde3bd172.jpg',
  }
]

const orthodonticsIntroduceData = {
  title: '全瓷貼片',
  content: '瓷貼片有助改善牙齒的形狀、長度、外觀及顏色，達到牙齒整齊和美白的效果。把度身訂製的纖薄瓷貼片黏附於牙齒表層，效果自然，改善外觀。',
  mbImg: 'https://static.cmereye.com/imgs/2023/12/00e7b5b8b50ed5ad.webp',
  pcImg: 'https://static.cmereye.com/imgs/2023/12/6a199d845146908a.webp',
  tabNavName: '全瓷貼片',
  pageName: 'veneers-test',
}

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
      Q: '做瓷貼片一定要磨牙嗎？',
      A: '進行瓷貼片療程前，需進行輕微磨牙處理，以確保其穩定性和美觀度。'
    },
    {
      Q: '做瓷貼片會造成牙齒敏感嗎？',
      A: '術後牙齒可能會變得敏感，屬正常現象，一般會在數天內自行適應。'
    },
    {
      Q: '瓷貼片實際效果跟期望有落差嗎？',
      A: '透過數位模擬技術，提供清晰的術後預覽，並製作實體模擬貼片供客人試戴。'
    },
    {
      Q: '全瓷貼片容易脫落嗎？',
      A: '裝上瓷貼片後，需注意保持良好的口腔清潔習慣，避免進食過硬食物，並定期覆診檢查，確保瓷貼片的穩固性和壽命，以減低其脫落風險。一般情況下貼片壽命可長達15年或以上。我們則提供三至五年的保修期，具體期限取決於客人所選擇的瓷貼片品牌。'
    }
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
}

let veneerSwiperRef ={
  slideToLoop: (a)=>{}
}
const setVeneerSwiperRef = (swiper:any) => {
  veneerSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
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
  title: '全瓷貼片5步曲',
  lists: [
    {
      title: '第1步',
      img: 'https://static.cmereye.com/imgs/2024/01/08cebccce32ce042.jpg',
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
      img: 'https://static.cmereye.com/imgs/2024/01/210e0b77a225135b.jpg',
      name: '裝貼臨時貼片',
      context: '磨牙完成後，會為客人安裝臨時的樹脂材質貼面，不會影響日常生活及美觀。',
    },
    {
      title: '第4步',
      img: 'https://static.cmereye.com/imgs/2023/12/d544b7219939438c.webp',
      name: '全瓷貼片安裝',
      context: '貼片製作完成後，在客人牙齒上試裝，並確認貼片與牙齒的適合度，例如形狀及顏色是否符合預期，最後將瓷貼片固定在牙面上。',
    },
    {
      title: '第5步',
      img: 'https://static.cmereye.com/imgs/2024/01/c6cbb247f245fa19.jpg',
      name: '定期追蹤',
      context: '安裝瓷貼片後，需按照專科主任的建議，定期覆診以確保貼片維持良好狀態，壽命可長達15年或以上。',
    }
  ],
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
      firstText: '一星期完成',
      secondText: '數天或當天完成'
    },
    {
      name: '耐用度',
      firstText: '長達15至20年或以上',
      secondText: '只能維持半年至1年，甚至更短'
    },
    {
      name: '優點',
      isArrayType: true,
      firstText: ['不易影響咬合','牙齒美白效果極佳','耐用相容性高','陶瓷材質不易變色損壞'],
      secondText: ['價格相對較實惠','安裝過程簡單']
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

const caseLists = [
  {
    img: 'https://static.cmereye.com/imgs/2024/01/af72e6f70d4049a0.jpg',
    name: 'Teresa',
    jos: '空姐',
    context: '好多同事都做咗瓷貼片，笑得好靚好有自信，睇落好有氣質。所以我都跟住一齊做，效果非常滿意，好多人讚我似明星。'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/01/5e714af6773bc97e.jpg',
    name: 'Doris',
    jos: '準新娘',
    context: '自細都介意自己門牙牙齒縫過大，為咗迎接婚禮決定做瓷貼片。影婚紗相時可以盡情笑，整個人煥然一新，感覺迎接新生活的開始。'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/01/752d9de409ed7644.jpg',
    name: 'Anson',
    jos: '模特兒兼演員',
    context: '經常要出show面對粉絲觀眾，想整體上鏡形象效果更好。做瓷貼片可以微調原本牙齒嘅不足，棚牙更白更整齊。'
  },
]

</script>

<template>
<div>
  <PageBanner :bannerConfig="bannerConfig" />
  <div class="pageIn whitebgColor">
    <div class="smallPageCon">
      <div class="index_title">{{$t('pages.dental-service.title')}}</div>
    </div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 注意事项 -->
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
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="93" height="37" viewBox="0 0 93 37" fill="none">
                  <path d="M61.2884 3.61569C61.0125 3.2167 57.6082 -2.72905 49.2665 1.5291C49.2665 1.5291 47.5695 2.19409 46.5 2.19409C45.4305 2.19409 43.7335 1.5291 43.7335 1.5291C35.3962 -2.72905 31.9883 3.21522 31.7116 3.61569C27.3835 9.86291 32.1353 26.4818 36.328 32.7046C43.965 44.0405 43.4306 29.4114 46.5 28.9068C49.5694 29.4114 49.035 44.0405 56.672 32.7046C60.8647 26.4818 65.6165 9.86512 61.2884 3.61569Z" fill="#FC1682"/>
                  <path d="M0.881739 10.0521C1.02388 9.82569 2.77758 6.45108 7.07483 8.86787C7.07483 8.86787 7.94906 9.2453 8.5 9.2453C9.05094 9.2453 9.92517 8.86787 9.92517 8.86787C14.2202 6.45108 15.9757 9.82485 16.1183 10.0521C18.3479 13.5979 15.9 23.0302 13.7401 26.5621C9.8059 32.9959 10.0812 24.693 8.5 24.4065C6.91881 24.693 7.1941 32.9959 3.25989 26.5621C1.10001 23.0302 -1.3479 13.5991 0.881739 10.0521Z" fill="#FC1682"/>
                  <path d="M76.8817 10.0521C77.0239 9.82569 78.7776 6.45108 83.0748 8.86787C83.0748 8.86787 83.9491 9.2453 84.5 9.2453C85.0509 9.2453 85.9252 8.86787 85.9252 8.86787C90.2202 6.45108 91.9757 9.82485 92.1183 10.0521C94.3479 13.5979 91.9 23.0302 89.7401 26.5621C85.8059 32.9959 86.0812 24.693 84.5 24.4065C82.9188 24.693 83.1941 32.9959 79.2599 26.5621C77.1 23.0302 74.6521 13.5991 76.8817 10.0521Z" fill="#FC1682"/>
                </svg>
              </div>
              <div>笑容蛻變<span>美麗綻放!!</span></div>
            </div>
            <div class="lastBox-b">
              <PageAnimBtnTypeTwo :str="'獲取免費檢查諮詢'" />
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
        <div class="advantage-in-l"><img src="https://static.cmereye.com/imgs/2024/01/53516f846e4b5815.jpg" :alt="advantageData.title"></div>
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
          <div v-if="!listDatasItem.isArrayType">{{listDatasItem.firstText}}</div>
          <div v-else class="isArrayType">
            <span v-for="(textItem,textIndex) in listDatasItem.firstText" :key="textIndex">{{textItem}}</span>
          </div>
          <div v-if="!listDatasItem.isArrayType">{{listDatasItem.secondText}}</div>
          <div v-else class="isArrayType">
            <span v-for="(textItem,textIndex) in listDatasItem.secondText" :key="textIndex">{{textItem}}</span>
          </div>
        </div>
      </div>
      <div class="differ-btn">
        <PageAnimBtnTypeTwo :str="'獲取免費諮詢'" />
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
      <div class="care-context">在愛康健完成瓷貼片療程後，我們提供三至五年的保修期，具體期限取決於客人所選擇的瓷貼片品牌。</div>
    </div>
    <div class="case">
      <div class="case-title">
        <div class="case-title-in">個案分享</div>
      </div>
      <div class="case-context">
        <span>
          締造自信燦爛笑顏
        </span>
        <span>
          我只揀愛康健！
        </span>
      </div>
      <div class="case-content">
        <div class="case-content-in">
          <div v-for="(caseItem,caseIndex) in caseLists" :key="caseIndex">
            <div class="case-content-in-l">
              <div>
                <img :src="caseItem.img" alt="">
              </div>
              <div>
                <span>{{caseItem.jos}}</span>
                <span>{{caseItem.name}}</span>
              </div>
            </div>
            <div class="case-content-in-r">
              {{caseItem.context}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 问题 -->
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <NewAddress />
  </div>
</div>
</template>

<style lang="scss" scoped>
.bp{
  margin-top: 108px;
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
      padding: 0 39.5px 85px;
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
        text-align: justify;
        &:nth-of-type(1){
          width: calc( (122 / 1251) * 100%);
          border-radius: 60px 0 0 60px;
          justify-content: center;
        }
        &:nth-of-type(2){
          width: calc( (572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (74 / 1251) * 100%);
          &.isArrayType{
            align-content: center;
            flex-wrap: wrap;
            span{
              display: flex;
              width: 50%;
              white-space: nowrap;
              &:nth-of-type(1){
                order: 1;
              }
              &:nth-of-type(2){
                order: 3;
              }
              &:nth-of-type(3){
                order: 2;
              }
              &:nth-of-type(4){
                order: 4;
              }
              &::before {  
                content: "•";
              }
            }
          }
        }
        &:nth-of-type(3){
          width: calc( (572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc( (74 / 1251) * 100%);
          border-radius: 0 60px 60px 0;
          &.isArrayType{
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            span{
              display: flex;
              &::before {  
                content: "•";
              }
            }
          }
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
          width: max-content;
          display: flex;
          opacity: 0;
          transition: all .3s;
        }
      }
      &:hover {
        span{
          &:nth-of-type(2){
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
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
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
  &-context{
    width: 100%;
    max-width: 990px;
    padding: 20px 30px;
    margin: 0 auto;
    color: var(--indexColor1);
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }
}
.case{
  width: 100%;
  margin-top: 97px;
  &-title{
    display: flex;
    justify-content: center;
    &-in{
      font-style: normal;
      position: relative;
      font-weight: 600;
      font-size: 30px;
      line-height: 150%;
      text-indent: 65px;
      color: #666666;
      background: url(@/assets/images/indexTitle_bg_2.png) no-repeat;
      background-size: auto 100%;
      padding-bottom: 5px;
      padding-right: 7px;
    }
  }
  &-context{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 21px;
    span{
      color: #FC1682;
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; 
    }
  }
  &-content{
    display: flex;
    justify-content: center;
    margin-top: 46px;
    padding: 58px 0 62px;
    background: linear-gradient(279deg, rgba(252, 22, 130, 0.40) -0.55%, rgba(252, 22, 130, 0.28) -0.54%, rgba(255, 168, 198, 0.00) 99.3%);
    &-in{
      width: 100%;
      max-width: 1560px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      
      &>div{
        display: flex;
        width: calc(100% / 3);
        flex-direction: column;
        background: #fff;
        padding: 14px 29px 25px;
        box-sizing: border-box;
        &:not(:first-child){
          margin-left: 16px;
        }
      }
      
      &-l{
        display: flex;
        img{
          border-radius: 50%;
          margin-top: -36%;
          border: 8px solid #fff;
        }
        span{
          display: block;
          margin-left: 18px;
          &:nth-of-type(1){
            color: #4D4D4D;
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }
          &:nth-of-type(2){
            color: #FC1682;
            font-size: 21px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }
        }
      }
      &-r{
        margin-top: 15px;
        color: #4D4D4D;
        text-align: justify;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
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
@media (min-width: 768px) and (max-width: 1920px) {
  .bp{
    margin-top: 5.625vw;
    &-text{
      font-size: 1.0417vw;
      max-width: 54.2708vw;
      margin: 1.875vw auto 0;
    }
    &-lists{
      max-width: 57.2917vw;
      margin: 3.125vw auto;
      &-in{
        min-width: 0;
        width: calc(100% / 3);
        padding: 0 2.0573vw 4.4271vw;
        &-title{
          min-width: 8.5938vw;
          height: 2.0833vw;
          line-height: 2.0833vw;
          font-size: 1.0417vw;
          &::after{
            bottom: -2.0833vw;
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
  .step {
    padding: 3.1771vw 0 5.1563vw;
    margin-top: 3.6458vw;
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
  .advantage{
    margin-top: 5.1042vw;
    &-in{
      max-width: 64.8958vw;
      margin: 4.0104vw auto 0;
      &-l{
        width: 24.2188vw;
      }
      &-r{
        &>div{
          .name{
            font-size: 1.0417vw;
            margin-top: 1.25vw;
            margin-bottom: .7813vw;
            padding: .4167vw .7813vw;
          }
          .text{    
            font-size: 1.0417vw;
            text-indent: .7813vw;
          }
        }
      }
    }
  }
  .differ{
    margin-top: 7.0833vw;
    &-lists{
      max-width: 65.1563vw;
      margin: 2.8646vw auto 0;
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
    &-btn {
      margin-top: 2.9688vw;
      .btn {
        span {
          box-shadow: 0px 1.74695px 3.4939px 0px rgba(252, 22, 130, 0.38);
          font-size: 1.8229vw;
          border-radius: 2.0833vw;
          padding: .2604vw 4.6875vw;
          &:nth-of-type(2) {
            color: var(--indexColor1);
            box-shadow: 0px 1.74695px 3.4939px 0px rgb(230, 230, 230);
          }
        }
      }
    }
  }
  .care {
    margin-top: 6.1458vw;
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
    &-context{
      max-width: 51.5625vw;
      padding: 1.0417vw 1.5625vw;
      font-size: 1.8229vw;
    }
  }
  .case{
    margin-top: 5.0521vw;
    &-title{
      &-in{
        font-size: 1.5625vw;
        text-indent: 3.3854vw;
        padding-bottom: .2604vw;
        padding-right: .3646vw;
      }
    }
    &-context{
      margin-top: 1.0938vw;
      span{
        font-size: 1.8229vw;
      }
    }
    &-content{
      margin-top: 2.3958vw;
      padding: 3.0208vw 0 3.2292vw;
      &-in{
        max-width: 81.25vw;
        &>div{
          padding: .7292vw 1.5104vw 1.3021vw;
          &:not(:first-child){
            margin-left: .8333vw;
          }
        }
        &-l{
          img{
            width: 9.1146vw;
            border: .4167vw solid #fff;
          }
          span{
            margin-left: .9375vw;
            &:nth-of-type(1){
              font-size: 1.4583vw;
            }
            &:nth-of-type(2){
              font-size: 1.0938vw;
            }
          }
        }
        &-r{
          margin-top: .7813vw;
          font-size: 1.0417vw;
        }
      }
    }
  }
}
//md
@media only screen and (max-width: 768px) {
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
          justify-content: center;
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
            margin-left: 1px;
            &.isArrayType{
              flex-direction: column;
              align-items: flex-start;
              padding: 10px;
              span{
                display: flex;
                width: 100%;
                white-space: initial;
                &:nth-of-type(1){
                  order: 1;
                }
                &:nth-of-type(2){
                  order: 2;
                }
                &:nth-of-type(3){
                  order: 3;
                }
                &:nth-of-type(4){
                  order: 4;
                }
                &::before {  
                  content: "•";  
                  height: 100%;
                }
              }
            }
          }
          &:nth-of-type(3){
            border-radius: 0;
            margin-left: 1px;
            padding: 20px 14px;
            width: calc( (127 / 315) * 100%);
            &.isArrayType{
              flex-direction: column;
              align-items: flex-start;
              padding: 10px;
              span{
                display: flex;
                &::before {  
                  content: "•";  
                  height: 100%;
                }
              }
            }
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
            font-size: 15px;
          }
        }
      }
    }
    &-context{
      font-size: 20px;
      text-align: left;
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
  .case{
    margin-top: 20px;
    padding: 44px 30px 0;
    &-title{
      &-in{
        font-size: 20px;
        text-indent: 45px;
      }
    }
    &-context{
      margin-top: 14px;
      span{
        font-size: 26px;
      }
    }
    &-content{
      background: none;
      margin-top: 0;
      padding: 0;
      &-in{
        flex-direction: column;
        &>div{
          width: 100%;
          padding: 16px 12px;
          &:not(:first-child){
            margin-left: 0px;
            margin-top: 10px;
          }
        }
        &-l{
          align-items: center;
          img{
            width: 125px;
            height: 125px;
            margin-top: 0;
            border: none;
          }
          span{
            margin-left: 15px;
            &:nth-of-type(1){
              font-size: 20px;
            }
            &:nth-of-type(2){
              font-size: 18px;
            }
          }
        }
        &-r{
          margin-top: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
