<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('wisdom-teeth-extraction')
useHead({
  title: "拔牙 | 智慧齒",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供拔牙及智慧齒脫除服務，牙齒可能因嚴重蛀壞或崩裂、嚴重牙周病、過度鬆動、不良位置生長導致附近組織受損和感染，或者出現外觀和結構問題，這些情況可能需要進行拔牙治療，並配合進行牙齒矯正。通常情況下，拔牙不需要進行手術，但如果牙齒歪生或非常接近神經，可能需要進行手術式拔牙。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '拔牙 智慧齒脫除 脱智慧齒 拔智齒 智慧齒 拔牙除術 拔牙術 剝智慧齒 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/be6cbd721fed563e.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/fc94e41b3cd98d6b.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/9fd49477afcd2b60.jpg',
  pageName: 'wisdom-teeth-extraction',
  pcText: ['拔牙及智慧齒脫除','專業醫療團隊，照顧每一位客人健康與感受'],
  mbText: ['專業醫療團隊','照顧客人健康']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.wisdom-teeth-extraction.introduce.title',
  content: 'pages.dental-service.wisdom-teeth-extraction.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/9afc2dff4411ce29.webp',
  pcImg: 'https://static.cmereye.com/imgs/2024/05/1c3666b062fda8c9.webp',
  tabNavName: 'pages.dental-service.wisdom-teeth-extraction.introduce.tabNavName',
  pageName: 'wisdom-teeth-extraction'
}

const reasonData = {
  title: 'pages.dental-service.wisdom-teeth-extraction.reason.title',
  text: 'pages.dental-service.wisdom-teeth-extraction.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/44b6fba4b7e68c38.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[2].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[3].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[4].context',
    }
  ],
  pageName: 'wisdom-teeth-extraction'
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
            text: '手術後腫痛的情況會維持兩至三日，醫生會處方止痛藥和抗生素（需要時服用）舒緩情況，一般約一星期後便完全康復。',
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
            title: 'Step 6',
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
  title: 'pages.dental-service.wisdom-teeth-extraction.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[0].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[1].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[2].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[3].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[4].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[5].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[5].A'
    },
  ]
}
const point_solution_requires_tooth_extraction = {
  title: '點解需要拔牙',
  lists: [
    {
      name: '嚴重蛀牙',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg1.svg'
    },
    {
      name: '牙周病',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg2.svg'
    },
    {
      name: '智慧齒問題',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg3.svg'
    },
    {
      name: '牙齒損傷',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg4.svg'
    },
    {
      name: '牙齒矯正治療需求',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg5.svg'
    },
    {
      name: '準備假牙',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg6.svg'
    }
  ],
  bottomText: '拔牙雖然是一個相對直接的手術過程，但只有在無法保存牙齒的情況下才會被考慮。牙科醫生通常會盡一切可能保存自然牙齒，只有在必要時才推薦拔牙。'
}

const wisdom_teeth = {
  title: '點解需要拔牙',
  lists: [
    {
      name: '阻生牙齒',
      text: '智慧齒可能無法完全長出或只部分長出牙齦。這稱為阻生牙。阻生的智慧齒可能長斜或水平長出，對鄰近牙齒造成壓力，導致疼痛或損壞其他牙齒。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector1.jpg'
    },
    {
      name: '牙齦炎和感染',
      text: '部分長出的智慧齒可能在牙齒和牙齦之間形成一個小空隙，這類空隙容易積聚食物殘渣和細菌，導致感染或牙齦炎，稱為周圍冠周炎。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector2.jpg'
    },
    {
      name: '牙齒擁擠',
      text: '智慧齒的長出可能會對牙弓中的其他牙齒施加壓力，導致原本正常排列的牙齒發生移動或擁擠，這可能使得牙齒矯正的效果受到影響。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector3.jpg'
    },
    {
      name: '囊腫或腫瘤的形成',
      text: '在極少數情況下，未能正常長出的智慧齒可能導致囊腫或腫瘤的形成，這會影響到牙齦組織和周圍的骨結構。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector4.jpg'
    },
    {
      name: '難以清潔',
      text: '由於智慧齒位於口腔後部，清潔起來較困難，這可能增加蛀牙和牙周病的風險。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector5.jpg'
    },
    {
      name: '慢性疼痛和不適',
      text: '智慧齒可能導致反覆的疼痛，或是由於其位置不當造成的咬合問題，進而引起頜骨、頭部或頸部的疼痛。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector6.jpg'
    }
  ],
  topText: '智慧齒通常在16至25歲間萌出。由於它們是最後長出的牙齒，有時可能因為空間不足或位置不正確而導致多種口腔問題：',
  bottomText: '因為這些潛在問題，牙醫可能會建議在智慧齒尚未造成嚴重問題之前就將它們拔除，尤其是當預見到將來可能發展成更複雜情況時。拔除智慧齒的決定通常基於X光片的評估，\n以及對患者目前和未來口腔健康的考慮。'
}

const process = {
  title: '拔牙及智慧齒脫除過程',
  topText: '拔牙一般不需要進行手術，但若牙齒歪生或非常接近神經，則有機會需要進行手術式脫牙。',
  lists: [
    {
      name: '智慧齒脫除',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/process1.webp',
      list: [
        {
          text: '透過口腔檢查及口腔全景X光片，了解智慧齒生長的狀況及準確位置'
        },
        {
          text: '注射局部麻醉藥'
        },
        {
          text: '如智慧齒出現阻生，需把牙齦割開、翻起，將智慧齒切成數個部分再逐一移除'
        },
        {
          text: '清潔及縫合傷口'
        },
        {
          text: '手術後腫痛的情況會維持兩至三日，醫生會處方止痛藥和抗生素（需要時服用）舒緩情況，一般約一星期後便完全康復。'
        }
      ]
    },
    {
      name: '手術性脫牙',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/process2.webp',
      list: [
        {
          text: '注射局部麻醉或全身麻醉藥（特殊情況下）'
        },
        {
          text: '翻起牙齦'
        },
        {
          text: '除去部分覆蓋牙齒的牙槽骨，使牙根外露',
        },
        {
          text: '把牙齒搖鬆或分割成幾部分取出'
        },
        {
          text: '縫合傷口'
        },
        {
          text: '咬緊棉花或紗布止血'
        }
      ]
    },
    {
      name: '非手術性脫牙',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/process3.webp',
      list: [
        {
          text: '局部麻醉'
        },
        {
          text: '把牙齒搖鬆，拔掉'
        },
        {
          text: '咬緊棉花或紗布止血'
        }
      ]
    }
  ]
}
</script>

<template>
<div>
  <PageHeader :headerConfig="headerConfig" />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <div class="point_solution_requires_tooth_extraction">
      <div class="point_solution_requires_tooth_extraction-title dentistryServices-title">
        <div class="point_solution_requires_tooth_extraction-title-in dentistryServices-title-in bb">{{point_solution_requires_tooth_extraction.title}}</div>
      </div>
      <div class="point_solution_requires_tooth_extraction-in">
        <div class="list-in" v-for="(item,index) in point_solution_requires_tooth_extraction.lists" :key="index">
          <div>
            <img :src="item.img" :alt="item.name" :title="item.name">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <div class="point_solution_requires_tooth_extraction-bottomText">
        {{point_solution_requires_tooth_extraction.bottomText}}
      </div>
    </div>
    <div class="wisdom_teeth">
      <div class="wisdom_teeth-title dentistryServices-title">
        <div class="wisdom_teeth-title-in dentistryServices-title-in bb">{{wisdom_teeth.title}}</div>
      </div>
      <div class="wisdom_teeth-topText">
        {{wisdom_teeth.topText}}
      </div>
      <div class="wisdom_teeth-in">
        <div class="list-in" v-for="(item,index) in wisdom_teeth.lists" :key="index">
          <div>
            <img :src="item.img" :alt="item.name" :title="item.name">
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="wisdom_teeth-bottomText">
        {{wisdom_teeth.bottomText}}
      </div>
    </div>
    <div class="process">
      <div class="process-title dentistryServices-title">
        <div class="process-title-in dentistryServices-title-in bb">
          拔牙及智慧齒脫除過程
        </div>
      </div>
      <div class="process-topText">
        拔牙一般不需要進行手術，但若牙齒歪生或非常接近神經，則有機會需要進行手術式脫牙。
      </div>
      <div class="process-in">
        <div class="list-in" v-for="(item,index) in process.lists" :key="index">
          <div class="list-in-l">
            <img :src="item.img" alt="">
          </div>
          <div class="list-in-r">
            <div class="title">
              <span>{{item.name}}</span>
            </div>
            <div class="content">
              <div class="content-in" v-for="(contentIn,contentIndex) in item.list" :key="contentIndex">
                <div>Step{{contentIndex + 1}}</div>
                <div>{{contentIn.text}}</div>
              </div>
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
.point_solution_requires_tooth_extraction{
  width: 100%;
  max-width: 1024px;
  margin: 80px auto 0;
  &-in{
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(3,1fr);
    gap: 60px 0;
    padding: 35px 90px;
    .list-in{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      p{
        font-size: 23px;
        color: var(--indexColor);
        font-weight: 500;
        line-height: 130%;
        text-align: center;
        margin-top: 30px;
      }
    }
  }
  &-bottomText{
    color: var(--textColor);
    text-align: center;
    font-size: 19px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 3.8px;
  }
}
.wisdom_teeth{
  width: 100%;
  max-width: 1024px;
  margin: 80px auto 0;
  &-in{
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(3,1fr);
    gap: 60px 140px;
    padding: 35px 0; 
    .list-in{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h3{
        font-size: 23px;
        color: var(--indexColor);
        font-weight: 500;
        line-height: 130%;
        text-align: center;
        margin-top: 30px;
      }
      p{
        font-size: 18px;
        font-weight: 400;
        line-height: 160%; /* 28.8px */
        letter-spacing: 3.6px;
        text-align: justify;
        margin-top: 5px;
      }
    }
  }
  &-topText,&-bottomText{
    color: var(--textColor);
    text-align: center;
    font-size: 19px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 3.8px;
    white-space: pre-wrap;
  }
  &-topText{
    margin-top: 35px;
  }
}
.process{
  margin: 80px auto 0;
  width: 100%;
  max-width: 1616px;
  &-topText{
    color: var(--textColor);
    text-align: center;
    font-size: 19px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 3.8px;
    margin: 35px 0 50px;
  }
  &-in{
    .list-in{
      display: flex;
      height: 496px;
      background: #FFF1F0;
      border-radius: 248px;
      align-items: center;
      justify-content: center;
      padding: 0 130px;
      &-l{
        width: 360px;
        margin-right: 45px;
        img{
          width: 100%;
        }
      }
      &-r{
        flex: 1;
        .title{
          margin-bottom: 58px;
          span{
            width: 363px;
            height: 56px;
            border-radius: 28px;
            background: var(--indexColor1);
            color: #fff;
            font-size: 35px;
            font-weight: 400;
            line-height: 160%; /* 56px */
            letter-spacing: 7px;
            display: inline-block;
            text-align: center;
          }
        }
        .content{
          display: flex;
          &-in{
            max-width: 148px;
            min-width: 72px;
            position: relative;
            &>div{
              font-size: 18px;
              color: var(--textColor);
              font-weight: 400;
              line-height: 160%;
              &:nth-of-type(1){
                text-align: center;
                color: var(--indexColor1);
                margin-bottom: 8px;
              }
            }
            &:not(:last-child){
              max-width: 217px;
              padding-right: 65px;
              min-width: 147px;
              &::after{
                content: '';
                position: absolute;
                width: 10px;
                height: 18px;
                right: 30px;
                top: 5px;
                background: url(@/assets/images/icon_12.png) no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
      &:not(:last-child){
        margin-bottom: 27px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
 
}
@media only screen and (max-width: 768px) {
  
}
</style>