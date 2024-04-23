<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setDentistryService('toothtray')
useHead({
  title: "牙托 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙托即活動式假牙，牙托即活動式假牙，分為局部及全口牙托兩種，可改善缺牙的影響。局部牙托適用於口腔內還有健康牙齒的人士，以金屬支架或金屬勾設計，方便自行配戴。全口牙托適用於所有牙齒已脫落的人士，利用口中黏膜和齒槽骨脊固定，也可自行配戴。牙托底部有金屬鉤讓牙托能固定在真牙上，代替缺去的牙齒。活動式假牙可自行配戴，適合缺齒較多的人士使用。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙托 假牙 全口牙托 局部牙托 活動式假牙 假牙 固定式假牙 牙托 牙橋 假牙托 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
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
  img: 'https://static.cmereye.com/imgs/2024/03/6fcd8f2992e9550b.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/03/98983f4c7178e454.jpg',
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
      ['類別'],['適用','人士'],['物料'],['優點'],['缺點'],['清潔方法'],['價錢']
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
          <swiper
            slidesPerView="auto"
            :scrollbar="{
              hide: true,
            }"
            :modules="[Scrollbar]"
            class="swiper"
          >
            <swiper-slide class="swiper-slide">
              <div class="contrast-table-in">
                <div v-for="(tableTitleItem,tableTitleIndex) in contrastData.table.title" :key="tableTitleIndex">
                  <span v-for="item in tableTitleItem" :key="item">{{item}}</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" v-for="(contrastTableItem,contrastTableIndex) in contrastData.table.data" :key="contrastTableIndex">
              <div class="contrast-table-in">
                <div>
                  <div class="th">{{contrastTableItem.th}}</div>
                  <div>
                    <span class="td" v-for="(tdItem,tdIndex) in contrastTableItem.td" :key="tdIndex" :style="{background: `url(${tdItem.bg})`,'background-size': '100% 100%'}">{{tdItem.name}}</span>
                  </div>
                </div>
                <div class="content" v-for="(contentItem,contentIndex) in contrastTableItem.content" :key="contentIndex">
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
            </swiper-slide>
          </swiper>
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
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
    max-width: 820px;
    margin: 35px auto 0;
  }
  &-tableRemark{
    margin-top: 28px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: var(--indexColor1);
    text-align: center;
  }
  &-table{
    margin: 40px auto 0;
    max-width: 1452px;
    width: 100%;
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
          margin-bottom: 6px;
          &>div{
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
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
            font-weight: 700;
            font-size: 28px;
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
              font-weight: 700;
              font-size: 28px;
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
          height: 183px;
        } 
        &:nth-of-type(3){
          height: 144px;
        } 
        &:nth-of-type(4){
          height: 109px;
        } 
        &:nth-of-type(5){
          height: 182px;
        }
        &:nth-of-type(6){
          height: 105px;
        }
        &:nth-of-type(7){
          height: 87px;
        }
      }
    }
    .swiper{
      .swiper-slide{
        width: 43.1%;
        &:nth-of-type(1){
          width: 13.5%;
          border-radius: 60px 0 0 60px;
          margin-right: 4px;
          overflow: hidden;
          .contrast-table-in{
            &>div{
              font-style: normal;
              font-weight: 700;
              font-size: 28px;
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
        &:nth-of-type(3){
          padding-left: 4px;
          border-radius: 0 60px 60px 0;
          overflow: hidden;
          .contrast-table-in{
            &>div{
              border-right: none;
            }
          }
        } 
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
      margin: 2.0833vw auto 0;
      max-width: 75.625vw;
      &-in{
        &>div{
          &.content{
            margin-bottom: .3125vw;
            &>div{
              font-size: 1.25vw;
              padding: 0 .9375vw;
              &>div{
                span{
                  &:first-child{
                    width: 1.0417vw;
                  }
                }
              }
            }
            .content-l{
              margin-right: .2083vw;
            }
          }
          &:nth-of-type(1){
            height: 14.1146vw;
            margin-bottom: .3125vw;
            .th{
              font-size: 1.4583vw;
              margin-bottom: .3125vw;
              height: 3.5938vw;
            }
            &>div{
              .td{
                font-size: 1.4583vw;
              }
              span{
                &:last-child{
                  margin-left: .2083vw;
                }
              }
            }
          } 
          &:nth-of-type(2){
            height: 9.5313vw;
          } 
          &:nth-of-type(3){
            height: 7.5vw;
          } 
          &:nth-of-type(4){
            height: 5.6771vw;
          } 
          &:nth-of-type(5){
            height: 9.4792vw;
          }
          &:nth-of-type(6){
            height: 5.4688vw;
          }
          &:nth-of-type(7){
            height: 4.5313vw;
          }
        }
      }
      .swiper{
        .swiper-slide{
          &:nth-of-type(1){
            border-radius: 3.125vw 0 0 3.125vw;
            margin-right: .2083vw;
            .contrast-table-in{
              &>div{
                font-size: 1.4583vw;
                margin-bottom: .3125vw;
              }
            }
          }
          &:nth-of-type(3){
            padding-left: .2083vw;
            border-radius: 0 3.125vw 3.125vw 0;
          } 
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
      padding: 44px 0 40px;
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
      margin: 35px auto 0;
      &-in{
        &>div{
          &.content{
            margin-bottom: 3.5px;
              &>div{
                font-size: 15px;
                padding: 0 11px;
                &>div{
                  span{
                    &:first-child{
                      width: 15px;
                    }
                  }
                }
              }
              .content-l{
                margin-right: 2px;
              }
          }
          &:nth-of-type(1){
            height: 178px;
            margin-bottom: 3.5px;
            .th{
              font-size: 20px;
              margin-bottom: 3.5px;
              height: 46px;
            }
            &>div{
              .td{
                font-size: 18px;
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
            height: 90.55px;
          } 
          &:nth-of-type(4){
            height: 68.54px;
          } 
          &:nth-of-type(5){
            height: 109.08px;
          } 
        }
      }
      .swiper{
        padding: 0 30px 40px;
        .swiper-slide{
          width: 109.86%;
          &:nth-of-type(1){
            width: 102px;
            margin-left: 2px;
            .contrast-table-in{
              &>div{
                font-size: 18px;
                margin-bottom: 3.5px;
              }
            }
          }
        }
      }
      :deep(.swiper-scrollbar){
        opacity: 1 !important;
        width: calc(100% - 60px);
        margin: 0 30px;
        background: var(--indexColor2);
      }
      :deep(.swiper-scrollbar-drag){
        background: var(--indexColor1);
      }
    }
  }
}
</style>