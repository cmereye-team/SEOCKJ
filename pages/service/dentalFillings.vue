<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('dentalFillings')
useHead({
  title: "補牙"
})

const orthodonticsIntroduceData = {
  title: '補牙',
  content: '',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/98c2430bfc65c812.jpg',
  tabNavName: '補牙',
}

const reasonData = {
  title: '關於補牙',
  text: '補牙的原因？',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/d053bb08e7c265a0.jpg',
  reasonLists:[
    {
      context: '當牙齒的硬組織（琺瑯質、象牙質）受到破壞後，容易造成小孔，形成蛀牙。為了修復破損的組織及防止蛀牙情況加劇，會以填充物填補牙齒，使牙齒能恢復原來形狀和功能。',
    }
  ]
}

const stepData = {
  title: '補牙過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '清除牙齒蛀壞及脆弱的部分'
      },
      {
        title: 'Step 2',
        text: '用專用的清潔消毒劑清潔牙齒表面，吹乾後，塗上黏固劑'
      },
      {
        title: 'Step 3',
        text: '填補牙洞及修補缺損部分'
      }
    ],
    [
      {
        title: 'Step 4',
        text: '穩固填充物'
      },
      {
        title: 'Step 5',
        text: '牙齒修形及拋光（如蛀牙的程度深，或需要使用麻醉劑）'
      }
    ]
  ]
}

const noteData = {
  title: '補牙後建議',
  lists: [
    {
      name: '避免咬合過硬的食物',
    },
    {
      name: '避免進食過冷或過熱的食物',
    }
  ]
}

const problemData = {
  title: '補牙常見問題',
  lists: [
    {
      Q: '補牙後為何會出現牙齒敏感及酸痛？',
      A: '\t補牙後，牙齒變得敏感或感到酸痛，有以下幾個原因：\n·\t蛀牙位置較深，接近神經。\n·\t填補的範圍較大，當填補的材料聚合時出現收縮\n\t這些情況通常在一至兩週後慢慢消失。'
    },
    {
      Q: '補牙後就不會再蛀牙嗎?',
      A: '補牙會先磨走蛀牙部分，再補上填補材料，但填補材料一樣也會黏附牙菌斑，因此，補牙後不代表一定不會再蛀牙，需要更注重牙齒清潔才是上策。'
    },
    {
      Q: '為何不能一次過處理所有蛀牙?',
      A: '一般醫生會按蛀牙區域進行補牙。補牙時間不單取決於蛀牙的面積大小，還需減低治療後的不適感，以及避免因咀嚼而令影響補牙的穩定性。因此，不同程度的蛀牙需時不同，需要按流程分開完成。'
    },
    {
      Q: '可修補水銀補牙後的效果?',
      A: '醫生可用儀器把舊有的水銀物料磨走，再補上與牙齒顏色相近的補牙物料。'
    }
  ]
}

</script>


<template>
<div>
  <PageHeader />
  <div class="pageIn whitebgColor">
    <div class="index_title pageCon">牙科服務</div>
    <!-- 介绍 -->
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <!-- 原因 -->
    <ServiceReason :reasonData="reasonData" />
    <!-- 过程 -->
    <ServiceStep :stepData="stepData" />
    <!-- 注意事项 -->
    <ServiceNote :noteData="noteData" />
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


@media (min-width: 768px) and (max-width: 1452px) {}

//md
@media only screen and (max-width: 760px) {

}
</style>