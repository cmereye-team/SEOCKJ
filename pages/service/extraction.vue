<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('extraction')
useHead({
  title: "拔牙 | 智慧齒",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '希瑪愛康健提供拔牙及智慧齒脫除服務，牙齒可能因嚴重蛀壞或崩裂、嚴重牙周病、過度鬆動、不良位置生長導致附近組織受損和感染，或者出現外觀和結構問題，這些情況可能需要進行拔牙治療，並配合進行牙齒矯正。通常情況下，拔牙不需要進行手術，但如果牙齒歪生或非常接近神經，可能需要進行手術式拔牙。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '拔牙 智慧齒脫除 脱智慧齒 拔智齒 智慧齒 拔牙除術 拔牙術 剝智慧齒 希瑪愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const orthodonticsIntroduceData = {
  title: '拔牙及智慧齒脫除',
  content: '',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/58299d97d5204cdd.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/06/70059336eaad4630.jpg',
  tabNavName: '拔牙及智慧齒脫除',
  pageName: 'extraction'
}

const reasonData = {
  title: '關於拔牙',
  text: '一般需要拔牙的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/44b6fba4b7e68c38.jpg',
  reasonLists:[
    {
      context: '牙齒嚴重蛀壞或崩裂，無法修補',
    },
    {
      context: '嚴重牙周病，牙齒變得十分鬆動',
    },
    {
      context: '牙齒生長於不理想位置，令附近組織受損及感染',
    },
    {
      context: '牙齒外觀及結構出現問題',
    },
    {
      context: '配合牙齒矯正治療',
    }
  ],
  pageName: 'extraction'
}

const issueData = {
  title: ['智慧齒可能','導致的口腔問題：'],
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/c99ca0ddf73edcbc.jpg',
  issueLists: [
    '由於智慧齒生長位置較後，難以清潔，容易積聚牙菌膜，引致蛀牙',
    '當智慧齒出現橫生或斜生情況，鄰近的牙齒會受到壓力，嚴重更會令牙槽骨萎縮，甚至鬆脫',
    '如出現智慧齒阻生情況，牙齒會被牙齦覆蓋，因而令食物渣滓和細菌藏在牙齦和牙冠之間，造成牙齦發炎和腫脹。嚴重更會使整個面頰出現腫脹，進食時亦會感到痛楚，阻生的智慧齒一般需要進行手術方可拔除'
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '一般需咬緊棉花或紗布約三十分鐘至一小時止血，其間可如常吞口水',
    },
    {
      name: '進食後以溫水或鹽水輕輕漱口，保持傷口清潔',
    },
    {
      name: '避免觸碰傷口上的凝固血塊，引致出血',
    },
    {
      name: '避免食用堅硬和粗糙的食物',
    },
    {
      name: '避免飲用含酒精飲品',
    },
    {
      name: '避免吃過冷或過熱的食物',
    },
    {
      name: '避免大力漱口或吐痰'
    }
  ],
  text: '*拔牙後，傷口有機會出現腫脹，一般會數天後消退，可按醫生處方服藥或以冷敷消腫及紓緩不適。如傷口持續或大量出血，需盡快聯絡醫生，或視乎嚴重程度前往就近急症室求診。'
}

const processData = {
  title: '拔牙及智慧齒脫除過程',
  tabs: ['智慧齒脫除','手術性脫牙','非手術性脫牙'],
  context: ['* 拔牙一般不需要進行手術，','但若牙齒歪生或非常接近神經，則有機會需','要進行手術式脫牙。'],
  lists: [
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '透過口腔檢查及口腔全景X光片，了解智慧齒生長的狀況及準確位置',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '注射局部麻醉藥',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '如智慧齒出現阻生，需把牙齦割開、翻起，將智慧齒切成數個部分再逐一移除',
            textIn: ''
          }
        ],
        [
          {
            title: 'Step 4',
            text: '清潔及縫合傷口',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '預約覆診',
            textIn: '手術後腫痛的情況會維持兩至三日，醫生會處方止痛藥和抗生素（需要時服用）舒緩情況，一般約一星期後便完全康復。'
          },
        ]
      ]
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '注射局部麻醉或全身麻醉藥（特殊情況下）',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '翻起牙齦',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '除去部分覆蓋牙齒的牙槽骨，使牙根外露',
            textIn: ''
          }
        ],
        [
          {
            title: 'Step 4',
            text: '把牙齒搖鬆或分割成幾部分取出',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '縫合傷口',
            textIn: ''
          },
          {
            title: 'Step 5',
            text: '咬緊棉花或紗布止血',
            textIn: ''
          },
        ]
      ]
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '局部麻醉',
            textIn: ''
          },
          {
            title: 'Step 2',
            text: '把牙齒搖鬆，拔掉',
            textIn: ''
          },
          {
            title: 'Step 3',
            text: '咬緊棉花或紗布止血',
            textIn: ''
          }
        ]
      ]
    },
  ]
}

const problemData = {
  title: '拔牙及智慧齒脫除常見問題',
  lists: [
    {
      Q: '拔牙後多久才能進食？',
      A: '需確保麻醉藥的藥力完全散退，以及傷口完全止血，一般建議拔牙後４小時後才可開始進食'
    },
    {
      Q: '拔牙後可以刷牙嗎？',
      A: '拔牙當天可暫停刷牙，第二天可恢復刷牙程序，但應注意力度，避免觸碰到傷口，造成滲血。'
    },
    {
      Q: '甚麼情況下需拔掉智慧齒？',
      A: '一般在智慧齒有機會引起其他口腔及牙齒問題，才會建議進行拔牙手術：\n1. 智慧齒旁的牙肉經常發炎腫痛\n2. 智慧齒橫生或斜生\n3. 智慧齒或附近牙齒出現蛀牙或裂縫'
    },
    {
      Q: '拔智慧齒痛嗎？',
      A: '進行手術時，醫生會先在拔牙位置注射局部麻醉藥，大大減低不適感。手術後應按時服用醫生處方的止痛藥，處理手術後的腫痛不適。'
    },
    {
      Q: '拔智慧齒需要照x光嗎？',
      A: '拔智慧齒前必須先照X光，必要時或要額外進行電腦掃瞄，了解牙根及神經線的位置，衡量風險，計劃拔智慧齒的方式。'
    },
    {
      Q: '為何拔智慧齒會比一般拔牙程序複雜？',
      A: '智慧齒生長於口腔內最後的位置，更有橫生、斜生的情況，拔除時有可能要翻起牙齦。為避免神經線受損，醫生亦有可能將智慧齒分成數個部分，再逐一清除，因此比一般拔牙程序複雜。'
    }
  ]
}

</script>


<template>
<div>
  <PageHeader
    :mbBg="'https://static.cmereye.com/imgs/2023/06/9fd49477afcd2b60.jpg'"
    :headerImg="'https://static.cmereye.com/imgs/2023/06/be6cbd721fed563e.png'"
    :headerBgImg="'https://static.cmereye.com/imgs/2023/06/fc94e41b3cd98d6b.jpg'"
    :titlePosition="'left'" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <!-- 智慧齒可能導致的口腔問題 -->
    <div class="issue pageCon">
      <div class="issue-top">
        <span v-for="(titleItem,titleIndex) in issueData.title" :key="titleIndex">{{titleItem}}</span>
      </div>
      <div class="issue-bottom">
        <div class="issue-bottom-img">
          <img :src="issueData.imgUrl" alt="">
        </div>
        <div class="issue-bottom-lists">
          <div class="issue-bottom-lists-in" v-for="(issueItem,issueIndex) in issueData.issueLists" :key="issueIndex">
            <div>· </div>
            <div>{{issueItem}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 拔牙及智慧齒脫除過程 -->
    <ServiceProcess :processData="processData" />
    <!-- 療程後注意事項 -->
    <div class="note">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{noteData.title}}</div>
      </div>
      <div class="note-in">
        <div class="note-in-lists">
          <div class="note-in-lists-item" v-for="(item,index) in noteData.lists" :key="index">
            <div>·</div>
            <div>{{item.name}}</div>
          </div>
        </div>
        <div class="note-in-text">
          {{noteData.text}}
        </div>
      </div>
    </div>
    <!-- 问题 -->
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.note{
  padding: 96px 0 0;
  &-in{
    width: 100%;
    max-width: 1200px;
    margin: 35px auto;
    padding: 60px 0;
    background: #FFF1F0;
    box-shadow: 0px 4px 8px #FFDDDA;
    min-height: 378px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-lists{
      width: 80%;
      max-width: 1000px;
      &-item{
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 160%;
        color: #4D4D4D;
        display: flex;
        &>div:first-child{
          width: 20px;
        }
        &>div:last-child{
          flex: 1;
        }
      }
    }
    &-text{
      margin-top: 32px;
      width: 80%;
      max-width: 1000px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      color: #FFA09E;
    }
  }
}

.issue{
  margin-top: 126px;
  &-top{
    margin-left: 203px;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 160%;
    color: #4D4D4D;
    display: flex;
    align-items: center;
  }
  &-bottom{
    margin-top: 37px;
    margin-left: 203px;
    display: flex;
    &-img{
      width: 360px;
      height: 360px;
      margin-right: 49px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-lists{
      flex: 1;
      max-width: 750px;
      &-in{
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 160%;
        color: #4D4D4D;
        display: flex;
        &>div:first-child{
          width: 20px;
        }
        &>div:last-child{
          flex: 1;
        }
      }
    }
  }
}



@media (min-width: 768px) and (max-width: 1452px) {
  .issue{
    margin-top: 10vw;
    &-top{
      margin-left: 13vw;
      font-size: 3vw;
    }
    &-bottom{
      margin-left: 13vw;
      margin-top: 2vw;
      &-img{
        width: 23vw;
        height: 23vw;
        margin-right: 2vw;
      }
      &-lists{
        max-width: 45vw;
        &-in{
          font-size: 1.7vw;
        }
      }
    }
  }
}

//md
@media only screen and (max-width: 760px) {
  .note{
    padding: 96px 30px 0;
    box-sizing: border-box;
    &-in{
      padding: 23px 15px;
      box-sizing: border-box;
      min-height: 0;
      &-lists{
        width: 100%;
        &-item{
          font-weight: 500;
          font-size: 16px;
          margin-top: 5px;
          &>div:first-child{
            width: 15px;
          }
        }
      }
      &-text{
        width: 100%;
        margin-top: 13px;
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
  .issue{
    margin-top: 69px;
    padding: 30px;
    &-top{
      margin-left: 0;
      font-weight: 700;
      font-size: 26px;
      display: flex;
      flex-direction: column;
    }
    &-bottom{
      margin-left: 0;
      margin-top: 34px;
      flex-direction: column;
      &-img{
        width: 100%;
        height: 100%;
        padding: 0 20px;
        margin-right: 0;
      }
      &-lists{
        width: 100%;
        max-width: 100%;
        margin-top: 15px;
        padding-right: 20px;
        &-in{
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }

  
}
</style>