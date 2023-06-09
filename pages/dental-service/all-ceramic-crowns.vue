<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('all-ceramic-crowns')
useHead({
  title: "全瓷牙冠 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供全瓷牙冠（牙套）服務，全瓷冠又稱全瓷牙冠、全瓷冠假牙、陶瓷假牙，而牙冠（牙套）是修復牙齒的方法，用於覆蓋形狀參差不齊或變色的牙齒。當牙齒因各種原因損壞時、需要修復裂縫或保護脆弱的牙齒時，會建議使用牙冠（牙套）進行修復。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙套 全瓷冠全瓷牙冠 全瓷冠假牙 陶瓷假牙 假牙 牙冠 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/5d98a050a1163042.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/1bd88089085e1d68.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/cb2cff6cdf17d72b.jpg',
  pageName: 'veneers',
  pcText: ['自然、耐久、性價比首選','讓您恢復美麗微笑，重拾自信'],
  mbText: ['讓您恢復美麗微笑','重拾自信']
}

const orthodonticsIntroduceData = {
  title: '全瓷牙冠',
  content: '牙冠（牙套）是一種修復牙齒的方法，用於覆蓋形狀參差不齊或變色的牙齒。當牙齒因不同情況受到損壞，例如沒有足夠的牙齒結構進行補牙或需要修復裂縫的牙齒或保護脆弱的牙齒時，牙醫便會建議使用牙冠（牙套）。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/9fc2655c5c081f7d.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/cafd36416517ada2.jpg',
  tabNavName: '全瓷牙冠及全鋯牙冠',
}

const foiblesData = {
  title: '全瓷牙冠及全鋯牙冠點揀好？',
  context: {
    span1: '有多種製作牙冠的物料，包括：',
    span2: '金屬、全鋯及全瓷。每種物料各有優點，可讓患者按需要選擇。',
    span3: '以下為你分析全瓷牙冠及全鋯牙冠的優缺點：'
  },
  foiblesLists: [
    {
      title: '金屬牙冠',
      meritLists: [
        '耐用度高，適合需要咬合力較強的後牙',
        '損耗度與真牙非常接近',
        '堅固穩定，不用大幅度磨小牙齒，可保留大部分原牙'
      ],
      shortcomingLists: [
        '金屬顏色，不適合用於前牙，影響外觀',
        '價格較為昂貴',
        '有致癌疑慮',
        '較容易發炎或出現過敏'
      ]
    },
    {
      title: '烤瓷合金牙冠',
      meritLists: [
        '內層金屬，外層陶瓷，可以選擇外層顏色，較為美觀'
      ],
      shortcomingLists: [
        '由於有內外兩層，相對較厚，需磨掉較多牙齒',
        '牙套顏色不夠自然',
        '牙套邊緣會顯出金屬黑影，影響外觀',
        '表層陶瓷較金屬容易剝落或斷裂'
      ]
    },
    {
      title: '全瓷牙冠',
      meritLists: [
        '仿真度最高，透光度高，顏色相似，自然',
        '適合用於前牙，外觀與真牙相似，不影響美觀',
        '可根據需要的堅固度，選擇不同強度的物料'
      ],
      shortcomingLists: [
        '比金屬牙套的強度較低'
      ]
    }
  ]
}

</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 全瓷牙冠及全鋯牙冠點揀好 -->
    <div class="foibles">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{foiblesData.title}}</div>
      </div>
      <div class="foibles-context">
        <div>
          <span>{{foiblesData.context.span1}}</span>
          <span>{{foiblesData.context.span2}}</span>
        </div>
        <span>{{foiblesData.context.span3}}</span>
      </div>
      <div class="foibles-in">
        <div class="foibles-in-box">
          <div class="foibles-in-box-th">
            <div class="title"></div>
            <div class="listsTh">優點</div>
            <div class="listsTh">缺點</div>
          </div>
          <div class="foibles-in-box-item" v-for="(foiblesItem,foiblesIndex) in foiblesData.foiblesLists" :key="foiblesIndex">
            <div class="title">{{foiblesItem.title}}</div>
            <div class="merit listsBox">
              <div class="listsBox-in" v-for="(meritItem,meritIndex) in foiblesItem.meritLists" :key="meritIndex">
                <div>· </div>
                <div>{{meritItem}}</div>
              </div>
            </div>
            <div class="shortcoming listsBox">
              <div class="listsBox-in" v-for="(shortcomingItem,shortcomingIndex) in foiblesItem.shortcomingLists" :key="shortcomingIndex">
                <div>. </div>
                <div>{{shortcomingItem}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.foibles{
  margin-top: 134px;
  &-context{
    margin-top: 35px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #4D4D4D;
    div{
      display: flex;
      justify-content: center;
    }
    &>span{
      &:last-child{
        display: block;
        color: #FFA09E;
      }
    }
  }
  &-in{
    margin-top: 54px;
    overflow: hidden;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none
    }
    &-box{
      display: flex;
      width: 100%;
      margin: 0 auto;
      max-width: 1394px;
      min-width: 778px;
      &-th{
        width: 150px;
        text-align: center;
        .title{
          height: 69px;
        }
        .listsTh{
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          color: #4D4D4D;
          &:nth-of-type(2){
            height: 239px;
            line-height: 239px;
          }
          &:last-child{
            height: 271px;
            line-height: 271px;
          }
        }
      }
      &-item{
        flex: 1;
        .title{
          text-align: center;
          height: 69px;
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 69px;
          color: #FFFFFF;
        }
        .listsBox{
          background: #FFF1F0;
          display: flex;
          padding: 22px 52px 0 28px;
          flex-direction: column;
          &-in{
            display: flex;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 160%;
            color: #4D4D4D;
            justify-content: center;
            div:first-child{
              width: 20px;
            }
            div:last-child{
              flex: 1;
            }
          }
        }
        .merit{
          height: 239px;
        }
        .shortcoming{
          height: 271px;
          margin-top: 15px;
        }
        &:not(:last-child){
          margin-right: 3px;
        }
        &:last-child{
          border-radius: 0 60px 60px 0;
          overflow: hidden;
          .title{
            background: #FFCECB;
          }
        }
        &:nth-of-type(2){
          border-radius: 60px 0 0 60px;
          overflow: hidden;
          .title{
            background: #FFA09E;
          }
        }
        &:nth-of-type(3){
          .title{
            background: #FFCECB;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  .foibles{
    &-context{
      font-size: 18px;
      &>span{
        font-size: 18px;
      }
    }
    &-in{
      margin-top: 49px;
      &-box{
        &-th{
          .listsTh{
            font-weight: 600;
            font-size: 20px;
          }
        }
        &-item{
          .listsBox{
            padding: 0 23px 0 16px;
            padding: 10px 2.5vw 0 22px;
            &-in{
              font-weight: 500;
              font-size: 17px;
              div:first-child{
                width: 15px;
              }
            }
          }
        }
      }
    }
  }
}


//md
@media only screen and (max-width: 760px) {
  .foibles{
    &-context{
      font-size: 16px;
      div{
        flex-direction: column;
        align-items: center;
        &>span{
          width: 70%;
        }
      }
      &>span{
        margin: 0 auto;
        font-weight: 500;
        font-size: 16px;
        width: 70%;
        width: 60%;
      }
    }
    &-in{
      margin-top: 44px;
      &-box{
        margin: 0 30px;
        &-th{
          width: 64px;
          text-align: left;
          .title{
            height: 40px;
          }
          .listsTh{
            font-weight: 600;
            font-size: 20px;
            &:nth-of-type(2){
              height: 174px;
              line-height: 174px;
            }
            &:last-child{
              height: 197px;
              line-height: 197px;
            }
          }
        }
        &-item{
          .title{
            font-weight: 600;
            font-size: 20px;
            height: 40px;
            line-height: 40px;
          }
          .listsBox{
            padding: 0 23px 0 16px;
            justify-content: center;
            &-in{
              font-weight: 500;
              font-size: 15px;
              div:first-child{
                width: 10px;
              }
            }
          }
          .merit{
            height: 174px;
          }
          .shortcoming{
            height: 197px;
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>