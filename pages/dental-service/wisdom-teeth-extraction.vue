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

const bannerConfig = [
  {
    pcImg: 'https://static.cmereye.com/imgs/2024/05/76485b8792a5142e.png',
    mbImg: 'https://static.cmereye.com/imgs/2024/05/65f9bae568911e27.webp',
  }
]

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
    {
      Q: '拔牙的恢復時間？',
      A: '恢復時間因人而異，一般在幾天至一周內逐漸好轉。在術後初期，應避免劇烈運動及食用過硬或過熱的食物，並按照醫師的指示進行口腔護理。'
    },
    {
      Q: '拔牙後要用飲管飲水？',
      A: '這是錯誤的方法，術後數小時內避免用力漱口或吸管飲料，以免影響血塊的形成。建議在家休息並按醫囑服用藥物，如有異常疼痛或出血應立即聯繫我們。'
    },
  ]
}
const point_solution_requires_tooth_extraction = {
  title: '點解需要拔牙',
  lists: [
    {
      name: ['嚴重蛀牙'],
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg1.svg'
    },
    {
      name: ['牙周病'],
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg2.svg'
    },
    {
      name: ['智慧齒問題'],
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg3.svg'
    },
    {
      name: ['牙齒損傷'],
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg4.svg'
    },
    {
      name: ['牙齒矯正','治療需求'],
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg5.svg'
    },
    {
      name: ['準備假牙'],
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/svg6.svg'
    }
  ],
  bottomText: '拔牙雖然是一個相對直接的手術過程，但只有在無法保存牙齒的情況下才會被考慮。牙科醫生通常會盡一切可能保存自然牙齒，只有在必要時才推薦拔牙。'
}

const wisdom_teeth = {
  title: '智慧齒可能導致的口腔問題',
  lists: [
    {
      name: ['阻生牙齒'],
      text: '智慧齒可能無法完全長出或只部分長出牙齦。這稱為阻生牙。阻生的智慧齒可能長斜或水平長出，對鄰近牙齒造成壓力，導致疼痛或損壞其他牙齒。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector1.jpg'
    },
    {
      name: ['牙齦炎和感染'],
      text: '部分長出的智慧齒可能在牙齒和牙齦之間形成一個小空隙，這類空隙容易積聚食物殘渣和細菌，導致感染或牙齦炎，稱為周圍冠周炎。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector2.jpg'
    },
    {
      name: ['牙齒擁擠'],
      text: '智慧齒的長出可能會對牙弓中的其他牙齒施加壓力，導致原本正常排列的牙齒發生移動或擁擠，這可能使得牙齒矯正的效果受到影響。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector3.jpg'
    },
    {
      name: ['囊腫或腫瘤','的形成'],
      text: '在極少數情況下，未能正常長出的智慧齒可能導致囊腫或腫瘤的形成，這會影響到牙齦組織和周圍的骨結構。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector4.jpg'
    },
    {
      name: ['難以清潔'],
      text: '由於智慧齒位於口腔後部，清潔起來較困難，這可能增加蛀牙和牙周病的風險。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector5.jpg'
    },
    {
      name: ['慢性疼痛和不適'],
      text: '智慧齒可能導致反覆的疼痛，或是由於其位置不當造成的咬合問題，進而引起頜骨、頭部或頸部的疼痛。',
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Vector6.jpg'
    }
  ],
  topText: ['智慧齒通常在16至25歲間萌出。','由於它們是最後長出的牙齒，有時可能','因為空間不足或位置不正確','而導致多種口腔問題：'],
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
const precautions = {
  title: '療程後注意事項',
  lists: [
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Group1.svg',
      text: '一般需咬緊棉花或紗布約三十分鐘至一小時止血，其間可如常吞口水'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Group2.svg',
      text: '避免飲用含酒精飲品'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Group3.svg',
      text: '進食後以溫水或鹽水輕輕漱口，保持傷口清潔'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Group4.svg',
      text: '避免吃過冷或過熱的食物'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Group5.svg',
      text: '避免觸碰傷口上的凝固血塊，引致出血'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Group6.svg',
      text: '避免大力漱口或吐痰'
    },
    {
      img: 'https://static.cmereye.com/static/ckj/imgs/wisdom-teeth-extraction/Group7.svg',
      text: '避免食用堅硬和粗糙的食物'
    }
  ],
  bottomText: '*拔牙後，傷口有機會出現腫脹，一般會數天後消退，可按醫生處方服藥或以冷敷消腫及紓緩不適。如傷口持續或大量出血，需盡快聯絡醫生，或視乎嚴重程度前往就近急症室求診。'
}

const caseLists = [
  {
    img: 'https://static.cmereye.com/imgs/2024/05/3d2e0abc72e453d0.png',
    name: 'James',
    jos: '大學生',
    context: '隻智慧齒成日發炎經常疼痛難眠，聽媽咪話決定係愛康健拔咗智齒，舒服咗好多，之後都會介紹同學去愛康健睇牙。'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/b8a318249a98be4c.png',
    name: '小花',
    jos: '小說作家',
    context: '為咗箍牙要拔牙，最初都好驚，但為咗靚無辦法。醫生好溫柔，拔完唔痛。期待一年後牙齒變得整齊。'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/05/a0c9ad1562da6a8e.png',
    name: '陳伯伯',
    jos: '醫療券使用者',
    context: '隻牙已經好鬆就甩，擔心到幾晚訓唔著。呀女帶我睇上深圳睇愛康健，醫生幫我拔牙仲種咗牙，依家安心晒！'
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
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <div class="point_solution_requires_tooth_extraction">
      <div class="point_solution_requires_tooth_extraction-title dentistryServices-title">
        <div class="point_solution_requires_tooth_extraction-title-in dentistryServices-title-in bb">{{point_solution_requires_tooth_extraction.title}}</div>
      </div>
      <div class="point_solution_requires_tooth_extraction-in">
        <div class="list-in" v-for="(item,index) in point_solution_requires_tooth_extraction.lists" :key="index">
          <div>
            <img :src="item.img" :alt="item.name.join()" :title="item.name.join()">
            <p>
              <span v-for="(nameItem,nameIndex) in item.name" :key="nameIndex">{{nameItem}}</span>
            </p>
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
        <!-- {{wisdom_teeth.topText}} -->
        <span v-for="(textItem,textIndex) in wisdom_teeth.topText" :key="textIndex">{{textItem}}</span>
      </div>
      <div class="wisdom_teeth-in">
        <div class="list-in" v-for="(item,index) in wisdom_teeth.lists" :key="index">
          <div>
            <img :src="item.img" :alt="item.name.join()" :title="item.name.join()">
            <h3><span v-for="(nameItem,nameIndex) in item.name" :key="nameIndex">{{nameItem}}</span></h3>
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
          {{process.title}}
        </div>
      </div>
      <div class="process-topText">
        {{process.topText}}
      </div>
      <div class="process-in">
        <div class="list-in" v-for="(item,index) in process.lists" :key="index">
          <div class="list-in-l">
            <img :src="item.img" :alt="item.name" :title="item.name">
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
    <div class="precautions">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{precautions.title}}</div>
      </div>
      <div class="precautions-in">
        <div class="lists-in" v-for="(item,index) in precautions.lists" :key="index">
          <div class="lists-in-img">
            <img :src="item.img" :alt="item.text" :title="item.text">
          </div>
          <div class="lists-in-text">
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
      <div class="precautions-bottomText">
        {{precautions.bottomText}}
      </div>
    </div>
    <ServiceProblem :problemData="problemData" />
    <div class="case">
      <div class="case-title">
        <div class="case-title-in">個案分享</div>
      </div>
      <div class="case-context">
        <span>
          29年專科專業為港人服務
        </span>
        <span>
          北上睇牙首選愛康健
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
    <serviceCard />
    <NewAddress />
  </div>
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
    position: relative;
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
              max-width: 210px;
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
      &:last-child{
        .list-in-r{
          .content{
            &-in{
              max-width: 72px;
              min-width: 72px;
              &:not(:last-child){
                max-width: 148px;
                min-width: 148px;
              }
            }
          }
        }
      }
      &:not(:last-child){
        margin-bottom: 27px;
      }
    }
    &::after{
      content: '';
      position: absolute;
      bottom: -65px;
      right: 290px;
      width: 275px;
      height: 287px;
      background: url(https://static.cmereye.com/imgs/2024/05/6b4b515fe0fdf8e8.png) no-repeat;
      background-size: 100% 100%;
    }
  }
}
.precautions{
  max-width: 1024px;
  width: 100%;
  margin: 100px auto 0;
  &-in{
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(4,1fr);
    grid-template-columns: repeat(2,1fr);
    gap: 58px 117px;
    padding: 35px 0;
    .lists-in{
      display: flex;
      align-items: center;
      &-img{
        width: 148px;
        height: 148px;
        background: #FFF1F0;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          max-width: 80%;
          max-height: 80%;
        }
      }
      &-text{
        flex: 1;
        padding-left: 30px;
        font-size: 18px;
        font-weight: 400;
        line-height: 160%;
        color: var(--textColor);
      }
      &:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(6),&:nth-of-type(7){
        .lists-in-img{
          background: #FEE6F1;
        }
      }
    }
  }
  &-bottomText{
    color: var(--indexColor1);
    font-size: 19px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 3.8px;
    text-align: center;
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
      font-size: 24px;
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
.point_solution_requires_tooth_extraction{
  max-width: 53.3333vw;
  margin: 4.1667vw auto 0;
  &-in{
    gap: 3.125vw 0;
    padding: 1.8229vw 4.6875vw;
    .list-in{
      p{
        font-size: 1.1979vw;
        margin-top: 1.5625vw;
      }
    }
  }
  &-bottomText{
    font-size: .9896vw;
    letter-spacing: .1979vw;
  }
}
.wisdom_teeth{
  max-width: 53.3333vw;
  margin: 4.1667vw auto 0;
  &-in{
    gap: 3.125vw 7.2917vw;
    padding: 1.8229vw 0;
    .list-in{
      h3{
        font-size: 1.1979vw;
        margin-top: 1.5625vw;
      }
      p{
        font-size: .9375vw;
        letter-spacing: .1875vw;
        margin-top: .2604vw;
      }
    }
  }
  &-topText,&-bottomText{
    font-size: .9896vw;
    letter-spacing: .1979vw;
  }
  &-topText{
    margin-top: 1.8229vw;
  }
}
.process{
  margin: 4.1667vw auto 0;
  max-width: 84.1667vw;
  &-topText{
    font-size: .9896vw;
    letter-spacing: .1979vw;
    margin: 1.8229vw 0 2.6042vw;
  }
  &-in{
    .list-in{
      height: 25.8333vw;
      border-radius: 12.9167vw;
      padding: 0 6.7708vw;
      &-l{
        width: 18.75vw;
        margin-right: 2.3438vw;
      }
      &-r{
        .title{
          margin-bottom: 3.0208vw;
          span{
            width: 18.9063vw;
            height: 2.9167vw;
            border-radius: 1.4583vw;
            font-size: 1.8229vw;
            letter-spacing: .3646vw;
          }
        }
        .content{
          &-in{
            max-width: 7.7083vw;
            min-width: 3.75vw;
            &>div{
              font-size: .9375vw;
              &:nth-of-type(1){
                margin-bottom: .4167vw;
              }
            }
            &:not(:last-child){
              max-width: 10.9375vw;
              padding-right: 3.3854vw;
              min-width: 7.6563vw;
              &::after{
                width: .5208vw;
                height: .9375vw;
                right: 1.5625vw;
                top: .2604vw;
              }
            }
          }
        }
      }
      &:last-child{
        .list-in-r{
          .content{
            &-in{
              max-width: 3.75vw;
              min-width: 3.75vw;
              &:not(:last-child){
                max-width: 7.7083vw;
                min-width: 7.7083vw;
              }
            }
          }
        }
      }
      &:not(:last-child){
        margin-bottom: 1.4063vw;
      }
    }
    &::after{
      bottom: -3.3854vw;
      right: 15.1042vw;
      width: 14.3229vw;
      height: 14.9479vw;
    }
  }
}
.precautions{
  max-width: 53.3333vw;
  margin: 5.2083vw auto 0;
  &-in{
    gap: 3.0208vw 6.0938vw;
    padding: 1.8229vw 0;
    .lists-in{
      &-img{
        width: 7.7083vw;
        height: 7.7083vw;
        border-radius: .5208vw;
      }
      &-text{
        padding-left: 1.5625vw;
        font-size: .9375vw;
      }
    }
  }
  &-bottomText{
    font-size: .9896vw;
    letter-spacing: .1979vw;
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
        font-size: 1.25vw;
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
  .point_solution_requires_tooth_extraction{
    margin: 40px auto 0;
    &-in{
      grid-template-rows: repeat(3,1fr);
      grid-template-columns: repeat(2,1fr);
      gap: 10px 47px;
      padding: 35px 30px;
      .list-in{
        p{
          font-size: 20px;
          margin-top: 20px;
          height: 45px;
          span{
            display: block;
          }
        }

      }
    }
    &-bottomText{
      padding: 0 30px;
      font-size: 16px;
      line-height: 200%;
      letter-spacing: 1.6px;
      text-align: justify;
    }
  }
  .wisdom_teeth{
    margin: 80px auto 0;
    &-in{
      display: grid;
      justify-content: center;
      grid-template-rows: repeat(3,1fr);
      grid-template-columns: repeat(2,1fr);
      gap: 30px 30px;
      padding: 35px 30px 0;
      .list-in{
        h3{
          font-size: 20px;
          line-height: 130%;
          margin-top: 20px;
          span{
            display: block;
          }
        }
        p{
          font-size: 15px;
          line-height: 160%;
          letter-spacing: 3px;
          text-align: justify;
          margin-top: 5px;
        }
      }
    }
    &-topText,&-bottomText{
      font-size: 16px;
      line-height: 200%;
      letter-spacing: 1.6px;
      padding: 0 30px;
      white-space: initial;
    }
    &-topText{
      margin-top: 35px;
      span{
        display: block;
      }
    }
  }
  .process{
    margin: 60px auto 0;
    &-topText{
      font-size: 16px;
      line-height: 200%;
      padding: 0 30px;
      letter-spacing: 1.6px;
    }
    &-in{
      padding: 0 30px;
      .list-in{
        height: auto;
        padding: 45px 20px;
        border-radius: 20px;
        flex-direction: column;
        &-l{
          width: 100%;
          margin-right: 0;
          margin-bottom: 30px;
        }
        &-r{
          width: 100%;
          .title{
            width: 100%;
            margin-bottom: 30px;
            span{
              width: 100%;
              height: auto;
              font-size: 20px;
              letter-spacing: 4px;
            }
          }
          .content{
            flex-direction: column;
            &-in{
              width: 100%;
              max-width: 100%;
              &>div{
                text-align: center;
                font-size: 19px;
                &:nth-of-type(1){
                  font-size: 23px;
                  margin-bottom: 0;
                }
              }
              &:not(:last-child){
                max-width: 100%;
                padding-right: 0;
                padding-bottom: 58px;
                &::after{
                  top: auto;
                  bottom: 20px;
                  right: 50%;
                  transform: translateX(50%) rotate(90deg);
                }
              }
            }
          }
        }
        &:last-child{
          .list-in-r{
            .content{
              &-in{
                min-width: 0;
                max-width: 100%;
                &:not(:last-child){
                  max-width: 100%;
                  min-width: 0;
                }
              }
            }
          }
        }
      }
      &::after{
        width: 120px;
        height: 130px;
        right: 10px;
        bottom: -60px;
      }
    }
  }
  .precautions{
    padding: 0 30px;
    &-in{
      grid-template-rows: repeat(7,1fr);
      grid-template-columns: repeat(1,1fr);
      gap: 20px;
      padding: 35px 0 30px;
      .lists-in{
        &-img{
          width: 105px;
          height: 105px;
          border-radius: 7px;
        }
        &-text{
          padding-left: 20px;
          font-size: 16px;
        }
        &:nth-of-type(even){
          .lists-in-img{
            background: #FEE6F1;
          }
        }
        &:nth-of-type(odd){
          .lists-in-img{
            background: #FFF1F0;
          }
        }
      }
    }
    &-bottomText{
      font-size: 15px;
      letter-spacing: 3px;
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