<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setDentistryService('toothtray')
useHead({
  title: "牙托假牙",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙托訂製服務。牙托即活動式假牙，分為局部及全口牙托兩種，可改善缺牙的影響,香港熱線: 6933 8128免費預約掛號,羅湖福田深圳灣口岸分店',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳牙科 深圳愛康健口腔醫院 愛康健齒科集團 美容牙科 高階牙科 醫療券 長者醫療券大灣區試點假牙 金屬牙 缺牙 牙槽骨流失 植牙步驟 微創植牙 傳統植牙 即剝即種 植牙案例 牙醫 牙医 深圳 羅湖 朱咪咪 掛號 親水植體 CT檢查 收費 價目表 線上預約 牙托 全口牙托 局部牙托 活動式假牙 假牙 固定式假牙 牙托 牙橋 假牙托 牙齒修復 牙齒美觀 活動式假牙 可拆卸假牙 便宜',
   },
  ]
})

// const headerConfig = {
//   img: 'https://static.cmereye.com/imgs/2023/06/e421c3bfe25668cf.png',
//   bg: 'https://static.cmereye.com/imgs/2023/06/ac0953834f7561e4.jpg',
//   mbImg: 'https://static.cmereye.com/imgs/2023/06/5659637e703a6559.jpg',
//   pageName: 'toothtray',
//   pcText: ['回歸自然微笑，恢復咀嚼功能','牙齒更加整齊、美觀、自信、舒適'],
//   mbText: ['回歸自然微笑','恢復咀嚼功能']
// }

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.toothtray.introduce.title',
  content: 'pages.dental-service.toothtray.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/97b2cb567b59ccdc.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/eff373fe8976c4f0.jpg',
  tabNavName: 'pages.dental-service.toothtray.introduce.tabNavName',
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/05/ef457266e4cd5f88.png',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/9d9ddc603850f8fe.webp',
  pageName: 'scaling-and-polishing-test',
  pcText: [],
  mbText: [],
}

const reasonData = {
  title: '全口牙托及局部牙托',
  imgUrl: 'https://static.cmereye.com/static/ckj/imgs/toothtray/reasonimg.webp',
  reasonLists:[
    {
      title: 'pages.dental-service.toothtray.reason.lists[0].context',
      context: 'pages.dental-service.toothtray.reason.lists[1].context',
    },
    {
      title: 'pages.dental-service.toothtray.reason.lists[2].context',
      context: 'pages.dental-service.toothtray.reason.lists[3].context',
    }
  ]
}

const contrastData = {
  title: {
    span1: '固定式假牙',
    span2: '活動式假牙點揀好？'
  },
  context: '固定式假牙與活動式假牙各有其優缺點及適用的情況，通常會經由牙醫評估口內缺牙的情況及剩下牙齒的狀況，再進一步進行全面的考量及建議。',
  tableRemark: '以下為你分析固定式/活動式假牙的優缺點：',
  table: {
    title: [
      ['類別'],['適用','人士'],['物料'],['優點'],['缺點'],['清潔','方法'],['價錢']
    ],
    data: [
      {
        th: '固定式假牙',
        td: [
          {name: '牙套',bg: 'https://static.cmereye.com/static/ckj/imgs/toothtray/contrast1.jpg'},
          {name: '牙橋',bg: 'https://static.cmereye.com/static/ckj/imgs/toothtray/contrast2.jpg'}
        ],
        content: [
          {
            l: ['牙根健康','牙齒損耗範圍太大','已接受杜牙根治療'],
            r: ['缺牙兩旁尚有健康牙齒','牙齒連牙根被全隻拔起'],
            c: []
          },
          {
            l: ['全金屬、全鋯、全瓷'],
            r: ['全金屬、全鋯、全瓷'],
            c: []
          },
          {
            l: ['保留真牙牙根'],
            r: ['提高假牙穩定度'],
            c: []
          },
          {
            l: ['需修磨牙齒'],
            r: ['需修磨兩側牙齒，若其中一顆牙齒出現問題，需重新製作整組牙橋'],
            c: []
          },
          {
            l:[],
            r:[],
            c: ['日常早晚刷牙','使用牙橋專用牙線']
          },
          {
            l:[],
            r:[],
            c: ['價格比種植牙便宜']
          }
        ]
      },
      {
        th: '活動定式假牙',
        td: [
          {name: '局部牙托',bg: 'https://static.cmereye.com/static/ckj/imgs/toothtray/contrast3.jpg'},
          {name: '全口牙托',bg: 'https://static.cmereye.com/static/ckj/imgs/toothtray/contrast4.jpg'}
        ],
        content: [
          {
            l: ['口腔內尚有健康牙齒'],
            r: ['口腔內已沒有健康牙齒'],
            c: []
          },
          {
            l: ['金屬支架或金屬勾','牙齒部分多由塑膠材料製造'],
            r: ['塑膠支架','牙齒部分多由塑膠製造'],
            c: []
          },
          {
            l: ['自由裝取'],
            r: ['自由裝取'],
            c: []
          },
          {
            l: ['容易磨損口腔內璧，造成潰瘍及疼痛','適應期較長'],
            r: ['咬合感覺與真牙的感覺相差甚大，適應期長','假牙容易晃動及移位'],
            c: []
          },
          {
            l:[],
            r:[],
            c: ['軟毛牙刷輕刷牙托表面','假牙清潔片輔助清潔']
          },
          {
            l:[],
            r:[],
            c: ['是最便宜的重建牙齒方法']
          }
        ]
      }
    ]
  }
}
const contrastItem1 = contrastData.table.data[0]
const contrastItem2 = contrastData.table.data[1]

const problemData = {
  title: 'pages.dental-service.toothtray.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.toothtray.problem.lists[0].Q',
      A: 'pages.dental-service.toothtray.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.toothtray.problem.lists[1].Q',
      A: 'pages.dental-service.toothtray.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.toothtray.problem.lists[2].Q',
      A: 'pages.dental-service.toothtray.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.toothtray.problem.lists[3].Q',
      A: 'pages.dental-service.toothtray.problem.lists[3].A'
    },
  ]
}

const processData:any = {
  title: '定製流程',
  lists: [
    {
      type: 'h2',
      data: [
        {
          text: '牙橋及牙套'
        },
        {
          text: '活動式牙托'
        }
      ]
    },
    {
      type: 'h3',
      data: [
        {
          text: '步驟一：初診與評估'
        }
      ]
    },
    {
      type: 'text',
      data: [
        {
          context: [
            {
              name: '諮詢與診斷：',
              text: '醫生將詳細評估患者的口腔健康狀況，了解具體需求、預算和期望效果。'
            },
            {
              name: '牙齒準備：',
              text: '醫生會對牙齒進行磨削，以便為牙橋及牙套提供足夠空間。'
            }
          ]
        },
        {
          context: [
            {
              name: '需求評估：',
              text: '在您的首次來訪時，我們的牙醫將與您進行深入的交談，了解具體需求及預算。'
            },
            {
              name: '口腔檢查：',
              text: '進行全面的口腔檢查，評估您的牙齦、牙齒狀態及任何可能影響牙托設計的問題。'
            }
          ]
        },
      ]
    },
    {
      type: 'h3',
      data: [
        {
          text: '步驟二：牙齒印模'
        }
      ]
    },
    {
      type: 'text',
      data: [
        {
          context: [
            {
              name: '製作印模：',
              text: '使用專業材料對磨削後的牙齒及相鄰牙齒進行精確印模，以用於牙套的製作。'
            },
            {
              name: '咬合記錄：',
              text: '記錄您的咬合方式，以確保牙托在您咬合時能提供適當的支持和保護。'
            },
            {
              name: '製作臨時牙套：',
              text: '在牙套製作期間，牙醫會安裝臨時牙套以保護磨削過的牙齒。'
            }
          ]
        },
        {
          context: [
            {
              name: '牙齒印模：',
              text: '使用先進的牙齒印模材料，為您的牙齒製作精確的模型，確保牙托能夠完美契合您的牙齒。'
            },
            {
              name: '咬合記錄：',
              text: '記錄您的咬合方式，以確保牙托在您咬合時能提供適當的支持和保護。'
            }
          ]
        },
      ]
    },
    {
      type: 'h3',
      data: [
        {
          text: '步驟三：牙橋及牙套製作'
        }
      ]
    },
    {
      type: 'text',
      data: [
        {
          context: [
            {
              name: '專業製作：',
              text: '根據患者選擇的材料精準製作牙橋及牙套。'
            }
          ]
        },
        {
          context: [
            {
              name: '專業製作：',
              text: '使用高品質的材料製作牙托，以確保牙托的耐用性、安全性和舒適性。'
            },
            {
              name: '個性化調整：',
              text: '根據需要，牙托可以進行個性化的調整，如顏色選擇、厚度調整等，以適應不同的需求或個人偏好。'
            }
          ]
        },
      ]
    },
    {
      type: 'h3',
      data: [
        {
          text: '步驟四：牙橋及牙套安裝及指導'
        }
      ]
    },
    {
      type: 'text',
      data: [
        {
          context: [
            {
              name: '試戴及安裝：',
              text: '製作完成後，患者需要進行試戴及安裝，確保其貼合性、美觀效果和舒適度。'
            }
          ]
        },
        {
          context: [
            {
              name: '試戴：',
              text: '牙托製作完成後，患者需要進行試戴，確保牙托的舒適度和功能性。'
            },
            {
              name: '細節調整：',
              text: '根據試戴結果進行調整，以確保牙托能最佳貼合和舒適。'
            }
          ]
        },
      ]
    },
    {
      type: 'h3',
      data: [
        {
          text: '步驟五：使用指導與後續跟進'
        }
      ]
    },
    {
      type: 'text',
      data: [
        {
          context: [
            {
              name: '護理指導：',
              text: '提供牙橋及牙套使用指導，以確保正常使用壽命。'
            },
            {
              name: '後續跟進：',
              text: '定期安排回診，檢查牙橋及牙套的狀態和口腔健康，及時調整或保養。'
            }
          ]
        },
        {
          context: [
            {
              name: '使用指導：',
              text: '提供如何正確佩戴和保養牙托的指導，確保患者獲得最佳使用效果。'
            },
            {
              name: '後續跟進：',
              text: '定期安排回診，檢查牙托的狀態和口腔健康，及時調整或保養牙·托。'
            }
          ]
        },
      ]
    },
  ]
}
const advantageData = {
  title: '為什麼選擇愛康健的定製牙托？',
  lists: [
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/toothtray/advantage1.svg',
      name: '專業製作',
      text: '我們的牙托由資深矯正科醫生根據患者的牙齒模型精確製作，確保每一個牙托都能完美貼合。'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/toothtray/advantage2.svg',
      name: '高品質材料',
      text: '愛康健使用高品質材料製作牙托，確保牙托耐用且對身體安全無害。'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/toothtray/advantage3.svg',
      name: '個性化設計',
      text: '醫生根據個人口腔狀況和需求獨立定製，更符合患者個人的使用習慣和舒適度。'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/toothtray/advantage4.svg',
      name: '專業保養\n及緊急維修服務',
      text: '我們提供專業牙托保養及緊急維修服務，讓牙托延長其使用壽命。'
    },
  ]
}
const caseLists = [
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/toothtray/Ellipse203.png',
    name: '明叔',
    jos: '小巴司機',
    context: '年紀大有幾隻牙磨損特別嚴重。選擇咗全瓷牙套，現在笑口常開，食嘢無難度。'
  },
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/toothtray/Ellipse202.png',
    name: 'May',
    jos: '準奶奶',
    context: '屋企辦喜事，補返隻缺牙見親戚朋友都有體面啲，影相都靚啲。'
  },
  {
    img: 'https://static.cmereye.com/static/ckj/imgs/toothtray/Ellipse204.png',
    name: '黃伯伯',
    jos: '長壽長者',
    context: '以前都整過假牙，但戴到好唔舒服。愛康健醫生手勢好好多，排牙好貼服，掂呀。'
  },
]
</script>

<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <div class="reason">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          {{reasonData.title}}
        </div>
      </div>
      <div class="reason-in">
        <div class="reason-in-l">
          <img :src="reasonData.imgUrl" alt="">
        </div>
        <div class="reason-in-r">
          <div class="item" v-for="(reasonItem,reasonIndex) in reasonData.reasonLists" :key="reasonIndex">
            <div class="item-r">
              <h3>{{$t(reasonItem.title)}}</h3>
              <p>{{$t(reasonItem.context)}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contrast">
      <div class="contrast-bg">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{contrastData.title.span1}}</span>
            <span>{{contrastData.title.span2}}</span>
          </div>
        </div>
        <div class="contrast-context">
          {{contrastData.context}}
        </div>
        <div class="contrast-tableRemark">
          {{contrastData.tableRemark}}
        </div>
        <div class="contrast-table">
          <div class="tableBox tableTab">
            <div class="contrast-table-in">
              <div v-for="(tableTitleItem,tableTitleIndex) in contrastData.table.title" :key="tableTitleIndex">
                <span v-for="item in tableTitleItem" :key="item">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="tableBox">
            <div class="contrast-table-in">
              <div>
                <div class="th">{{contrastItem1.th}}</div>
                <div>
                  <span class="td" v-for="(tdItem,tdIndex) in contrastItem1.td" :key="tdIndex" :style="{background: `url(${tdItem.bg})`,'background-size': '100% 100%'}">{{tdItem.name}}</span>
                </div>
              </div>
              <div class="content" v-for="(contentItem,contentIndex) in contrastItem1.content" :key="contentIndex">
                <div class="content-l" v-if="contentItem.l.length">
                  <div v-for="(contentIn,contentInIndex) in contentItem.l" :key="contentInIndex">
                    <span>· </span>
                    <span>{{contentIn}}</span>
                  </div>
                </div>
                <div class="content-r" v-if="contentItem.r.length">
                  <div v-for="(contentIn,contentInIndex) in contentItem.r" :key="contentInIndex">
                    <span>· </span>
                    <span>{{contentIn}}</span>
                  </div>
                </div>
                <div class="content-c" v-if="contentItem.c.length">
                  <div v-for="(contentIn,contentInIndex) in contentItem.c" :key="contentInIndex">
                    <span>· </span>
                    <span>{{contentIn}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tableBox tableTab tabletab-mb">
            <div class="contrast-table-in">
              <div v-for="(tableTitleItem,tableTitleIndex) in contrastData.table.title" :key="tableTitleIndex">
                <span v-for="item in tableTitleItem" :key="item">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="tableBox">
            <div class="contrast-table-in">
              <div>
                <div class="th">{{contrastItem2.th}}</div>
                <div>
                  <span class="td" v-for="(tdItem,tdIndex) in contrastItem2.td" :key="tdIndex" :style="{background: `url(${tdItem.bg})`,'background-size': '100% 100%'}">{{tdItem.name}}</span>
                </div>
              </div>
              <div class="content" v-for="(contentItem,contentIndex) in contrastItem2.content" :key="contentIndex">
                <div class="content-l" v-if="contentItem.l.length">
                  <div v-for="(contentIn,contentInIndex) in contentItem.l" :key="contentInIndex">
                    <span>· </span>
                    <span>{{contentIn}}</span>
                  </div>
                </div>
                <div class="content-r" v-if="contentItem.r.length">
                  <div v-for="(contentIn,contentInIndex) in contentItem.r" :key="contentInIndex">
                    <span>· </span>
                    <span>{{contentIn}}</span>
                  </div>
                </div>
                <div class="content-c" v-if="contentItem.c.length">
                  <div v-for="(contentIn,contentInIndex) in contentItem.c" :key="contentInIndex">
                    <span>· </span>
                    <span>{{contentIn}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="process">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          定製流程
        </div>
      </div>
      <div class="process-in">
        <div class="table" v-for="(item,index) in processData.lists" :key="index">
          <div :class="['table-in', item.type]" v-for="(dataItem,dataIndex) in item.data" :key="dataIndex">
            <div :class="item.type" v-if="item.type === 'text'">
              <div class="context" v-for="(contextItem,contextIndex) in dataItem.context" :key="contextIndex">
                <p :data-name="contextItem.name">
                  {{contextItem.text}}
                </p>
              </div>
            </div>
            <h3 v-else>{{dataItem.text}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="advantage-title dentistryServices-title">
        <div class="dentistryServices-title-in bb">隱形牙箍四大優點</div>
      </div>
      <div class="advantage-lists">
        <div class="advantage-lists-in" v-for="(advantageItem,advantageIndex) in advantageData.lists" :key="advantageIndex">
          <div class="advantage-lists-in-image">
            <img :src="advantageItem.img" :alt="advantageItem.name" :title="advantageItem.name">
          </div>
          <div class="advantage-lists-in-name">{{advantageItem.name}}</div>
          <div class="advantage-lists-in-text">{{advantageItem.text}}</div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="case-title">
        <div class="case-title-in">個案分享</div>
      </div>
      <div class="case-context">
        <span>
          解決缺牙問題
        </span>
        <span>
          我揀愛康健！
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
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <NewAddress />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.reason{
  width: 100%;
  max-width: 894px;
  margin: 80px auto 0;
  &-in{
    margin-top: 40px;
    display: flex;
    align-items: center;
    &-l{
      width: 460px;
      margin-right: 48px;
      img{
        width: 100%;
      }
    }
    &-r{
      flex: 1;
      .item{
        font-size: 19px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 30.4px */
        letter-spacing: 5.7px;
        color: var(--textColor);
        display: flex;
        &:not(:last-child){
          margin-bottom: 20px;
        }
        &::before{
          content: '·';
          font-size: 36px;
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }
}
.contrast{
  margin-top: 100px;
  &-bg{
    padding: 76px 0 103px;
    background: linear-gradient(270deg, rgba(255, 241, 240, 0) 2.6%, rgba(255, 241, 240, 0.7) 23.89%, rgba(255, 241, 240, 0.7) 75.33%, rgba(255, 241, 240, 0) 97.4%);
  }
  &-context{
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
    max-width: 820px;
    margin: 35px auto 0;
  }
  &-tableRemark{
    margin-top: 28px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: var(--indexColor1);
    text-align: center;
  }
  &-table{
    margin: 20px auto 0;
    max-width: 1452px;
    width: 100%;
    display: flex;
    &-in{
      display: flex;
      flex-direction: column;
      &>div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &.content{
          flex-direction: row;
          &>div{
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 160%;
            color: #666666;
            padding: 0 18px;
            background: #FFFFFF;
            &>div{
              display: flex;
              span{
                &:first-child{
                  width: 20px;
                }
                &:last-child{
                  flex: 1;
                }
              }
            }
          }
          &:not(:last-child){
            margin-bottom: 6px;
          }
          .content-l{
            margin-right: 4px;
          }
          .content-c{
            align-items: center;
          }
        }
        &:nth-of-type(1){
          height: 271px;
          display: flex;
          margin-bottom: 6px;
          .th{
            background: var(--indexColor1);
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 160%;
            color: #FFFFFF;
            margin-bottom: 6px;
            height: 69px;
            flex: initial;
          }
          &>div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            .td{
              font-style: normal;
              font-weight: 500;
              font-size: 24px;
              line-height: 160%;
              color: var(--indexColor1);
              text-shadow:
                  -1px -1px 0 #fff,
                   1px -1px 0 #fff,
                  -1px  1px 0 #fff,
                   1px  1px 0 #fff;
            }
            span{
              flex: 1;
              height: 100%;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              &:last-child{
                margin-left: 4px;
              }
            }
          }
        } 
        &:nth-of-type(2){
          height: 140px;
        } 
        &:nth-of-type(3){
          height: 125px;
        } 
        &:nth-of-type(4){
          height: 69px;
        } 
        &:nth-of-type(5){
          height: 140px;
        }
        &:nth-of-type(6){
          height: 105px;
        }
        &:nth-of-type(7){
          height: 87px;
        }
      }
    }
    .tableBox{
      width: 43.1%;
      margin-right: 4px;
      &.tableTab{
        width: 13.5%;
        border-radius: 60px 0 0 60px;
        overflow: hidden;
        .contrast-table-in{
          &>div{
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 160%;
            background: var(--indexColor2);
            color: #505050;
            margin-bottom: 6px;
            &:last-child{
              margin-bottom: 0;
            }
          }
        }
      }
      &:last-child{
        border-radius: 0 60px 60px 0;
        overflow: hidden;
        margin-right: 0px;
      }
      &.tabletab-mb{
        display: none;
      }
    }
  }
}
.process{
  margin-top: 80px;
  &-in{
    width: 100%;
    max-width: 1091px;
    margin: 38px auto 0;
    overflow: hidden;
    border-radius: 65px;
  }
  .table{
    display: flex;
    &-in{
      background: var(--indexColor2);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      flex: 1;
      min-height: 71px;
      .context{
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: var(--textColor);
        &:not(:last-child){
          margin-bottom: 10px;
        }
        &>p{
          &::before{
            content: attr(data-name);
            color: var(--indexColor1);
          }
        }
      }
      h3{
        color: #FFF;
        text-align: center;
        font-size: 23px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        width: 100%;
      }
      &.text{
        padding: 30px 55px;
        align-items: flex-start;
      }
      &.h2{
        background: var(--indexColor1);
      }
      &.h3{
        background: #FFA8C6;
      }
      &:not(:last-child){
        margin-right: 8px;
      }
    }
    &:not(:last-child){
      margin-bottom: 8px;
    }
  }
}
.advantage{
  margin-top: 117px;
  &-title{
    margin-bottom: 54px;
  }
  &-lists{
    width: 100%;
    max-width: 1325px;
    margin: 0 auto;
    display: flex;
    &-in{
      flex: 1;
      margin: 0 calc((40 / 1325) * 100%);
      &-image{
        width: auto;
        margin: 0 calc((22 / 230) * 100%);
        border-radius: 10px;
        height: 0;
        padding-bottom: calc((186 / 230) * 100%);
        position: relative;
        img{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          max-width: 90%;
          max-height: 75%;
        }
      }
      &-name{
        color: var(--indexColor1);
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        margin: 10px 0;
      }
      &-text{
        color: var(--textColor);
        text-align: justify;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
        padding: 0 10px;
        letter-spacing: 3.8px;
      }
    }
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
      font-weight: 600;
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
            font-weight: 600;
            line-height: 160%;
          }
          &:nth-of-type(2){
            color: #FC1682;
            font-size: 21px;
            font-style: normal;
            font-weight: 500;
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
@media (min-width: 768px) and (max-width: 1920px) {
  .reason{
    max-width: 46.5625vw;
    margin: 4.1667vw auto 0;
    &-in{
      margin-top: 2.0833vw;
      &-l{
        width: 23.9583vw;
        margin-right: 2.5vw;
      }
      &-r{
        .item{
          font-size: .9896vw;
          letter-spacing: .2969vw;
          &:not(:last-child){
            margin-bottom: 1.0417vw;
          }
          &::before{
            font-size: 1.875vw;
            margin-right: .2604vw;
          }
        }
      }
    }
  }
  .contrast{
    margin-top: 5.2083vw;
    &-bg{
      padding: 3.9583vw 0 5.3646vw;
    }
    &-context{
      font-size: 1.0417vw;
      max-width: 42.7083vw;
      margin: 1.8229vw auto 0;
    }
    &-tableRemark{
      margin-top: 1.4583vw;
      font-size: 1.0417vw;
    }
    &-table{
      margin: 1.0417vw auto 0;
      max-width: 75.625vw;
      &-in{
        &>div{
          &.content{
            &>div{
              font-size: 1.0417vw;
              padding: 0 .9375vw;
              &>div{
                span{
                  &:first-child{
                    width: 1.0417vw;
                  }
                }
              }
            }
            &:not(:last-child){
              margin-bottom: .3125vw;
            }
            .content-l{
              margin-right: .2083vw;
            }
          }
          &:nth-of-type(1){
            height: 14.1146vw;
            margin-bottom: .3125vw;
            .th{
              font-size: 1.25vw;
              margin-bottom: .3125vw;
              height: 3.5938vw;
            }
            &>div{
              .td{
                font-size: 1.25vw;
              }
              span{
                &:last-child{
                  margin-left: .2083vw;
                }
              }
            }
          } 
          &:nth-of-type(2){
            height: 7.2917vw;
          } 
          &:nth-of-type(3){
            height: 6.5104vw;
          } 
          &:nth-of-type(4){
            height: 3.5938vw;
          } 
          &:nth-of-type(5){
            height: 7.2917vw;
          }
          &:nth-of-type(6){
            height: 5.4688vw;
          }
          &:nth-of-type(7){
            height: 4.5313vw;
          }
        }
      }
      .tableBox{
        margin-right: .2083vw;
        &.tableTab{
          border-radius: 3.125vw 0 0 3.125vw;
          .contrast-table-in{
            &>div{
              font-size: 1.25vw;
              margin-bottom: .3125vw;
            }
          }
        }
        &:last-child{
          border-radius: 0 3.125vw 3.125vw 0;
          margin-right: 0px;
        }
      }
    }
  }
  .process{
    margin-top: 4.1667vw;
    &-in{
      max-width: 56.8229vw;
      margin: 1.9792vw auto 0;
      border-radius: 3.3854vw;
    }
    .table{
      &-in{
        min-height: 3.6979vw;
        .context{
          font-size: .9896vw;
          &:not(:last-child){
            margin-bottom: .5208vw;
          }
        }
        h3{
          font-size: 1.1979vw;
        }
        &.text{
          padding: 1.5625vw 2.8646vw;
        }
        &:not(:last-child){
          margin-right: .4167vw;
        }
      }
      &:not(:last-child){
        margin-bottom: .4167vw;
      }
    }
  }
  .advantage{
    margin-top: 6.0938vw;
    &-title{
      margin-bottom: 2.8125vw;
    }
    &-lists{
      max-width: 69.0104vw;
      &-in{
        &-image{
          border-radius: .5208vw;
        }
        &-name{
          font-size: 1.1458vw;
          margin: .5208vw 0;
        }
        &-text{
          font-size: .9375vw;
          padding: 0 .5208vw;
          letter-spacing: .1979vw;
        }
      }
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

@media only screen and (max-width: 768px) {
  .reason{
    padding: 0 30px;
    &-in{
      flex-direction: column;
      &-l{
        width: 100%;
        margin-right: 0;
      }
      &-r{
        margin-top: 40px;
        .item{
          font-size: 15px;
          letter-spacing: 4.5px;
        }
      }
    }
  }
  .contrast{
    margin-top: 30px;
    &-bg{
      padding: 44px 0 10px;
      background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
    }
    &-context{
      margin: 15px 30px 0;
      font-weight: 500;
      font-size: 14px;
    }
    &-tableRemark{
      font-weight: 500;
      font-size: 14px;
      margin-top: 8px;
    }
    &-table{
      padding: 0 30px;
      margin: 35px auto 0;
      flex-wrap: wrap;
      &-in{
        &>div{
          &.content{
            &>div{
              font-size: 12px;
              padding: 0 11px;
              &>div{
                span{
                  &:first-child{
                    width: 10px;
                    font-size: 20px;
                  }
                }
              }
            }
            .content-l{
              margin-right: 2px;
            }
            &:not(:last-child){
              margin-bottom: 2px;
            }
          }
          &:nth-of-type(1){
            height: 120px;
            margin-bottom: 2px;
            .th{
              font-size: 15px;
              margin-bottom: 2px;
              height: 40px;
            }
            &>div{
              .td{
                font-size: 15px;
              }
              span{
                &:last-child{
                  margin-left: 2.5px;
                }
              }
            }
          } 
          &:nth-of-type(2){
            height: 115.07px;
          } 
          &:nth-of-type(3){
            height: 78px;
          } 
          &:nth-of-type(4){
            height: 78px;
          } 
          &:nth-of-type(5){
            height: 135px;
          } 
          &:nth-of-type(6){
            height: 88px;
          }
          &:nth-of-type(7){
            height: 64px;
          }
        }
      }
      .tableBox{
        width: calc(100% - 64px);
        margin-right: 0;
        border-radius: 0 20px 0 0;
        overflow: hidden;
        margin-bottom: 30px;
        &.tableTab{
          width: 60px;
          margin-right: 2px;
          border-radius: 20px 0 0 20px;
          .contrast-table-in{
            &>div{
              font-size: 15px;
              margin-bottom: 2px;
            }
          }
        }
        &:last-child{
          border-radius: 0 20px 0px 0;
        }
        &.tabletab-mb{
          display: block;
        }
      }
      
    }
  }
  .process{
    margin-top: 50px;
    padding: 0 30px;
    &-in{
      margin-top: 30px;
      border-radius: 20px;
    }
    .table{
      &-in{
        min-height: 34px;
        .context{
          font-size: 12px;
        }
        &.text{
          padding: 20px 12px;
        }
        &.h2{
          // border-radius: 25px 25px 0 0;
        }
        h3{
          font-size: 16px;
        }
        &:not(:last-child){
          margin-right: 4px;
        }
      }
      &:not(:last-child){
        margin-bottom: 4px;
      }
    }
  }
  .advantage{
    margin-top: 60px;
    &-title{
      margin-bottom: 0;
    }
    &-lists{
      max-width: 390px;
      padding: 0 15px;
      box-sizing: border-box;
      flex-wrap: wrap;
      &-in{
        width: 50%;
        flex: initial;
        width: calc((100% - 60px) / 2);
        margin: 30px 15px 0;
        &-image{
          margin: 0 10px;
          padding-bottom: calc(100% - 20px);
          span{
            top: 14px;
            left: 18px;
          }
          img{
            width: 100%;
          }
        }
        &-name{
          margin: 0 0 10px;
          font-size: 20px;
          white-space: pre-wrap;
        }
        &-text{
          font-size: 15px;
          padding: 0;
          letter-spacing: 3px;
        }
        &:nth-child(n+3){
          .advantage-lists-in-name{
            min-height: 64px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
        }
      }
    }
  }
  .case{
    margin-top: 60px;
    background: linear-gradient(279deg, rgba(252, 22, 130, 0.40) -0.55%, rgba(252, 22, 130, 0.28) -0.54%, rgba(255, 168, 198, 0.00) 99.3%);
    padding: 44px 30px;
    &-title{
      &-in{
        font-size: 20px;
        text-indent: 45px;
      }
    }
    &-context{
      margin-top: 30px;
      span{
        font-size: 16px;
      }
    }
    &-content{
      background: none;
      margin-top: 70px;
      padding: 0;
      &-in{
        flex-direction: column;
        &>div{
          width: 100%;
          padding: 16px 12px;
          &:not(:first-child){
            margin-left: 0px;
            margin-top: 70px;
          }
        }
        &-l{
          align-items: flex-end;
          margin-top: -70px;
          img{
            width: 125px;
            height: 125px;
            margin-top: 5px;
            border: 4px solid #fff;
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
