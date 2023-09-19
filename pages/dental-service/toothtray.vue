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

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/e421c3bfe25668cf.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/ac0953834f7561e4.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/5659637e703a6559.jpg',
  pageName: 'toothtray',
  pcText: ['回歸自然微笑，恢復咀嚼功能','牙齒更加整齊、美觀、自信、舒適'],
  mbText: ['回歸自然微笑','恢復咀嚼功能']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.toothtray.introduce.title',
  content: 'pages.dental-service.toothtray.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/97b2cb567b59ccdc.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/eff373fe8976c4f0.jpg',
  tabNavName: 'pages.dental-service.toothtray.introduce.tabNavName',
}

const reasonData = {
  title: 'pages.dental-service.toothtray.reason.title',
  text: 'pages.dental-service.toothtray.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/5aaed24997e19f64.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.toothtray.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.toothtray.reason.lists[1].context',
      hideIcon: true,
      isSmallFS: true
    },
    {
      context: 'pages.dental-service.toothtray.reason.lists[2].context',
    },
    {
      context: 'pages.dental-service.toothtray.reason.lists[3].context',
      hideIcon: true,
      isSmallFS: true
    }
  ],
  pageName: 'toothtray'
}

const contrastData = {
  title: {
    span1: '固定式假牙 VS ',
    span2: '活動式假牙 點揀好？'
  },
  context: '固定式假牙與活動式假牙各有其優缺點及適用的情況，通常會經由牙醫評估口內缺牙的情況及剩下牙齒的狀況，再進一步進行全面的考量及建議。',
  tableRemark: '以下為你分析固定式/活動式假牙的優缺點：',
  table: {
    title: [
      ['類別'],['適用','人士'],['物料'],['優點'],['缺點']
    ],
    data: [
      {
        th: '固定式假牙',
        td: ['牙套','牙橋'],
        content: [
          {
            l: ['牙根健康','牙齒損耗範圍太大','已接受杜牙根治療'],
            r: ['缺牙兩旁尚有健康牙齒','牙齒連牙根被全隻拔起']
          },
          {
            l: ['全金屬、全鋯、全瓷'],
            r: ['全金屬、全鋯、全瓷']
          },
          {
            l: ['保留真牙牙根'],
            r: ['提高假牙穩定度']
          },
          {
            l: ['需修磨牙齒'],
            r: ['需修磨兩側牙齒，若其中一顆牙齒出現問題，需重新製作整組牙橋']
          }
        ]
      },
      {
        th: '活動定式假牙',
        td: ['局部牙托','全口牙托'],
        content: [
          {
            l: ['口腔內尚有健康牙齒'],
            r: ['口腔內已沒有健康牙齒']
          },
          {
            l: ['金屬支架或金屬勾','牙齒部分多由塑膠材料製造'],
            r: ['塑膠支架','牙齒部分多由塑膠製造']
          },
          {
            l: ['自由裝取'],
            r: ['自由裝取']
          },
          {
            l: ['容易磨損口腔內璧，造成潰瘍及疼痛','適應期較長'],
            r: ['咬合感覺與真牙的感覺相差甚大，適應期長','假牙容易晃動及移位']
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

</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <ServiceReason :reasonData="reasonData" />
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
                    <span class="td" v-for="(tdItem,tdIndex) in contrastTableItem.td" :key="tdIndex">{{tdItem}}</span>
                  </div>
                </div>
                <div class="content" v-for="(contentItem,contentIndex) in contrastTableItem.content" :key="contentIndex">
                  <div class="content-l">
                    <div v-for="(contentIn,contentInIndex) in contentItem.l" :key="contentInIndex">
                      <span>· </span>
                      <span>{{contentIn}}</span>
                    </div>
                  </div>
                  <div class="content-r">
                    <div v-for="(contentIn,contentInIndex) in contentItem.r" :key="contentInIndex">
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
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.contrast{
  margin-top: 147px;
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
        }
        &:nth-of-type(1){
          height: 138px;
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
          }
          &>div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            .td{
              background: var(--indexColor3);
              font-style: normal;
              font-weight: 700;
              font-size: 28px;
              line-height: 160%;
              color: #505050;
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
              background: #FFFFFF;
              color: var(--indexColor1);
              margin-bottom: 6px;
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

@media (min-width: 768px) and (max-width: 1452px) {
  .contrast{
    margin-top: 120px;
    &-bg{
      padding: 55px 0 70px;
    }
    &-context{
      margin: 25px auto 0;
      font-size: 17px;
    }
    &-tableRemark{
      font-size: 17px;
      margin-top: 18px;
    }
    &-table{
      &-in{
        &>div{
          &.content{
              &>div{
                font-size: 20px;
                padding-left: 15px;
                &>div{
                  span{
                    &:first-child{
                      width: 17px;
                    }
                  }
                }
              }
          }
          &:nth-of-type(1){
            .th{
              font-size: 24px;
            }
            &>div{
              .td{
                font-size: 23px;
              }
              span{
                &:last-child{
                  margin-left: 3.4px;
                }
              }
            }
          }
        }
      }
      .swiper{
        .swiper-slide{
          &:nth-of-type(1){
            .contrast-table-in{
              &>div{
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 760px) {
  .contrast{
    margin-top: 90px;
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
            height: 86.77px;
            margin-bottom: 3.5px;
            .th{
              font-size: 20px;
              margin-bottom: 3.5px;
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