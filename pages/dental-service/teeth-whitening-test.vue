 <script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setDentistryService('teeth-whitening')
useHead({
  title: '牙齒美白 ｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙齒美白服務，包括激光牙齒美白及藍光美白牙齒。美白牙齒療程可以有效去除外部和內部的污漬，讓牙齒更加明亮，多年科學研究已經證明美白牙齒是安全的療程。在進行療程之前，牙醫會先檢查牙齒和口腔狀況，確定患者適合進行牙齒美白療程。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '美白牙齒 牙齒美白 激光牙齒美白 藍光牙齒美白 牙齒美白療程 美白牙齒服務 藍光美白牙齒 激光美白牙齒 藍光漂牙 激光漂牙 美白牙齒方法 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/05/56ed1adf64868f0a.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/c85b910b79d8c36c.jpg',
  pageName: 'scaling-and-polishing-test',
  pcText: [],
  mbText: []
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.teeth-whitening.introduce.title',
  content: '提供醫療級先進的牙齒美白技術，安全有效地提升牙齒亮白度。無論是因飲食習慣、生活方式還是年齡因素造成的牙齒黯淡或變色，我們牙齒美白療程讓您展現亮白閃耀笑容。',
  mbImg: 'https://static.cmereye.com/imgs/2024/05/3ceb79b179d0c8a1.png',
  pcImg: 'https://static.cmereye.com/imgs/2024/05/90a39579b63baf8f.webp',
  tabNavName: 'pages.dental-service.teeth-whitening.introduce.tabNavName',
  pageName: 'teeth-whitening',
}

const noticeData = {
  title: '藍光美白技術',
  text: [
    [
      '採用高科技冷光技術，結合美白劑，',
      '對不同牙齒特質進行納米冷光護齒美白'
    ],
    [
      '這種技術可以將牙齒內部的大分子染色劑（深色）',
      '分解為小分子（淺色或無色），從而實現美白效果'
    ]
  ],
  lists: [
    {
      name: '滲透美白',
      text: '30分鐘滲透美白因子，能快速滲透到牙齒各個部位。'
    },
    {
      name: '舒適美白',
      text: '低溫藍光照射，舒適治療，避免紫外線和紅外線對牙齒的傷害。'
    },
    {
      name: '健康美白',
      text: '美白分子能快速分解，促進牙釉質再生，保護牙齒，實現健康美白。'
    },
    {
      name: '輕鬆美白',
      text: '一次治療即可提升3-8個VITA色階，輕鬆實現美白效果。'
    }
  ]
}

const stepData = {
  title: '藍光牙齒美白過程',
  stepLists: [
    {
      text: '醫生評估病人口腔及牙齦狀況，了解病人需求，解釋漂牙的程序及風險等',
      img: 'https://static.cmereye.com/imgs/2024/05/ae767977839ee26a.png'
    },
    {
      text: '進行簡單清潔',
      img: 'https://static.cmereye.com/imgs/2024/05/c531e03cb80ea50d.png'
    },
    {
      text: '以牙齒專用色階進行對色，記錄療程前牙齒顏色的色號',
      img: 'https://static.cmereye.com/imgs/2024/05/37de76b35e4f7c05.png'
    },
    {
      text: '套上口腔張口器及保護眼罩',
      img: 'https://static.cmereye.com/imgs/2024/05/c6c0d7aaa66b6be2.png'
    },
    {
      text: '在牙齦塗上牙齦保護劑，以免激光及美白劑刺激牙齦',
      img: 'https://static.cmereye.com/imgs/2024/05/5558682c63a617bb.png'
    },
    {
      text: '在牙齒表面均勻塗上激光專用美白劑',
      img: 'https://static.cmereye.com/imgs/2024/05/36dca9a27154b9a0.png'
    },
    {
      text: '以藍光燈開始照射牙齒，整個過程大概需要照射2-3次',
      img: 'https://static.cmereye.com/imgs/2024/05/6616d68648ef68f2.png'
    },
    {
      text: '療程完成後，清除美白劑與牙齦保護劑',
      img: 'https://static.cmereye.com/imgs/2024/05/1c6a9105fdffd162.png'
    },
    {
      text: '以牙齒專用色階進行對色，比對療程前後效果',
      img: 'https://static.cmereye.com/imgs/2024/05/51acda8398aab84e.png'
    } 
  ],
  infoLists: [
    {
      name: '專業牙科團隊',
      text: '30分鐘滲透美白因子，能快速滲透到牙齒各個部位。'
    },
    {
      name: '舒適療程體驗',
      text: '在舒適無痛的環境中進行，讓您在安心放心地完成整個美白過程。'
    },
    {
      name: '顯著美白效果',
      text: '快速有效地改善牙齒色澤，讓您的笑容更加耀眼。'
    },
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2024/05/401ce9c8b574dbad.png',
      name: '1星期內避免進食刺激性食物及飲品',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/05/2d20d0b011dc3b29.png',
      name: '3星期內避免進食色素較多的食物及飲品',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/05/363e15080a426f39.png',
      name: '養成健康生活習慣，盡量避免吸煙',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/05/8ec4036d4443acab.png',
      name: '早晚刷牙，進食後清潔口腔，保持口腔清潔衛生',
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.teeth-whitening.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[0].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[1].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[2].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[3].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[4].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[5].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[5].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[6].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[6].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[7].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[7].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[8].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[8].A'
    },
  ]
}

const conditionData = {
  title: '',
  text: '',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/05/d05fe8eda833bc15.webp',
      title: '經常吸煙',
      text: '令牙齒變啡黑'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/05/e5e00b9a3e11c57e.webp',
      title: '飲用深色飲品',
      text: '令牙齒變啡黑'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/05/1ba0534c2fe3584c.webp',
      title: '年齡增長',
      text: '牙齒老化牙齒自然變黃'
    }
  ]
}
const newnoteData = {
  title: '大家做美白牙齒的原因',
  lists: [
    {
      name: '想擁有更亮白的牙齒，可以考慮進行美白牙齒療程。'
    },
    {
      name: '美白牙齒療程能夠有效地把外在和內在的牙漬清除，令牙齒更加亮白。',
    },
    {
      name: '診所提供藍光美白牙齒及激光美白牙齒服務，助你建立閃亮笑容。',
    }
  ]
}
const maintainData = {
  title: '藍光美白可以保持多久？',
  text: ['藍光美白牙齒的效果通常可以','持續兩年左右，但具體的時間長短','取決於患者的飲食和衛生習慣。','如果患者平時注意牙齒保養，','少食用深色食物，','並保持良好口腔衛生習慣，','如按時刷牙和飯後漱口，','那麼美白效果的持續時間相對會更長。'],
}
const Blue_light_whitening_technology = {
  title: '藍光美白技術',
  lists: [
    {
      name: '滲透美白',
      text: '30分鐘滲透美白因子，能快速滲透到牙齒各個部位。'
    },
    {
      name: '舒適美白',
      text: '低溫藍光照射，舒適治療，避免紫外線和紅外線對牙齒的傷害。'
    },
    {
      name: '健康美白',
      text: '美白分子能快速分解，促進牙釉質再生，保護牙齒，實現健康美白。'
    },
    {
      name: '健康美白',
      text: '一次治療即可提升3-8個VITA色階，輕鬆實現美白效果。'
    }
  ],
  topText: [
    '採用高科技冷光技術，結合美白劑，對不同牙齒特質進行納米冷光護齒美白',
    '這種技術可以將牙齒內部的',
    '大分子染色劑（深色）分解為小分子（淺色或無色），從而實現美白效果'
  ]
}
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
      <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      <div class="note">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{newnoteData.title}}
          </div>
        </div>
        <div class="note-content">
          <div class="note-content-l">
            <img
              src="https://static.cmereye.com/imgs/2024/05/a0567b485d4d93be.webp"
              alt=""
            />
          </div>
          <div class="note-content-r">
            <div
              v-for="(noteItem, noteIndex) in newnoteData.lists"
              :key="noteIndex"
            >
              <span>·</span>
              <span>{{ $t(noteItem.name) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="condition">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            你有以下情況嗎？
          </div>
        </div>
        <div class="condition-text">
          牙齒美白可解決以下情況所致的<span>牙齒變色問題</span>
        </div>
        <div class="condition-lists pageCon">
          <div class="condition-lists-in" v-for="(conditionItme,conditionIndex) in conditionData.lists" :key="conditionIndex">
            <div>
              <img :src="conditionItme.imgUrl" alt="">
            </div>
            <div>
              <span>{{conditionItme.title}}</span>
              <span>{{conditionItme.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Blue_light_whitening_technology">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{Blue_light_whitening_technology.title}}
          </div>
        </div>
        <div class="Blue_light_whitening_technology-topText">
          <p v-for="(item,index) in Blue_light_whitening_technology.topText" :key="index">{{item}}</p>
        </div>
        <div class="Blue_light_whitening_technology-content">
          <div class="lists-in" v-for="(item,index) in Blue_light_whitening_technology.lists" :key="index">
            <div class="image">
            </div>
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{stepData.title}}
          </div>
        </div>
        <div class="step-in">
          <div class="step-in-list">
            <div class="lists-in" v-for="(item,index) in stepData.stepLists.slice(0, 5)" :key="index">
              <img :src="item.img" :alt="item.text" :title="item.text">
              <p>{{item.text}}</p>
            </div>
            <div class="line"></div>
          </div>
          <div class="step-in-list">
            <div class="lists-in" v-for="(item,index) in stepData.stepLists.slice(5, 10)" :key="index">
              <img :src="item.img" :alt="item.text" :title="item.text">
              <p>{{item.text}}</p>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="step-info">
          <div class="infobg">
            <img src="https://static.cmereye.com/imgs/2024/05/c1fd7f501e059f40.webp" alt="">
            <div>
              <p>牙齒美白不僅是對的投資，更是對<span>自我信心</span>的提升。</p>
              <p>讓我們幫助您擁有一個<span>閃耀的笑容</span>，展現出最好的自己。</p>
            </div>
          </div>
          <div class="lists">
            <div class="lists-in" v-for="(item,index) in stepData.infoLists" :key="index">
              <div class="centerBox">
                <h3>{{item.name}}</h3>
                <p>{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="effect">
        <div class="effect-l">
          <div class="dentistryServices-title">
            <div class="dentistryServices-title-in bb">
              藍光美白效果
            </div>
          </div>
          <div class="context">
            <p>使用<span>VITA比色板</span>作為標準，</p>
            <p>藍光美白一般都能讓牙齒提升少則<span>3-5個</span>色階，多則可能<span>10-14個</span>色階</p>
          </div>
          <div class="image">
            <img src="https://static.cmereye.com/imgs/2024/05/4459f188130c0cce.png" alt="藍光美白效果" title="藍光美白效果">
          </div>
        </div>
        <div class="effect-r">

        </div>
      </div>
      <div class="maintain">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{maintainData.title}}
          </div>
        </div>
        <div class="maintain-in">
          <div class="maintain-in-l">
            <svg xmlns="http://www.w3.org/2000/svg" width="197" height="197" viewBox="0 0 197 197" fill="none">
            <g clip-path="url(#clip0_5330_34760)">
            <path d="M98.5328 195.834C75.9536 195.834 53.8337 187.812 36.2375 173.239C18.3999 158.471 6.45624 137.899 2.60219 115.311C-1.48543 91.3776 3.25621 67.0395 15.9551 46.7785C28.6462 26.5253 48.477 11.6564 71.8037 4.90271C80.376 2.42066 89.2131 1.16797 98.0735 1.16797C101.935 1.16797 105.875 1.40917 109.784 1.87601C110.57 1.96938 111.87 2.31952 111.73 3.60333C111.605 4.73932 110.624 4.98052 109.83 4.98052C109.675 4.98052 109.511 4.97274 109.34 4.9494C105.704 4.51368 102.005 4.28804 98.3538 4.28804C54.6512 4.28804 16.0875 35.0608 6.65089 77.4579C-2.24845 117.451 14.5692 157.257 49.4892 178.872C64.0177 187.859 80.9132 192.613 98.3538 192.613C121.283 192.613 143.201 184.466 160.065 169.667C177.833 154.082 188.476 134.638 191.723 111.856C195.195 87.4328 189.691 64.6042 175.357 44.0164C175.108 43.6663 174.858 43.3706 174.531 42.9971C174.368 42.8104 174.181 42.5925 173.948 42.3124L169.821 37.3872V43.8141C169.821 44.3743 169.821 44.8645 169.821 45.3158C169.821 46.1327 169.829 46.7941 169.813 47.4555C169.798 48.0468 169.619 49.4084 168.287 49.4162C167.15 49.4162 166.73 48.3736 166.707 47.4866C166.66 45.6036 166.675 43.6663 166.683 41.7911C166.683 40.9819 166.691 40.1727 166.691 39.3713C166.691 38.7644 166.691 38.1575 166.683 37.5584C166.675 36.1968 166.66 34.7807 166.707 33.4268C166.753 32.073 167.259 31.5595 168.567 31.5517C170.888 31.5283 173.2 31.5205 175.52 31.5205C177.84 31.5205 180.332 31.5283 182.738 31.5517C183.968 31.5595 184.591 32.0808 184.583 33.1C184.583 34.1037 183.929 34.6251 182.668 34.6562C182.006 34.6717 181.336 34.6717 180.659 34.6717C180.114 34.6717 177.716 34.6562 177.031 34.6562H172.507L175.131 38.3442C175.59 38.99 176.034 39.5969 176.455 40.1883C177.303 41.3709 178.105 42.4836 178.86 43.5962C191.59 62.4645 197.204 83.3324 195.546 105.624C193.957 126.943 185.72 146.66 171.736 162.633C157.761 178.592 139.331 189.352 118.441 193.756C111.886 195.133 105.19 195.834 98.525 195.834H98.5328Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M98.5252 170.381C63.8077 170.381 34.0264 145.654 27.7198 111.582C24.4341 93.819 27.5875 76.7714 37.0941 60.8987C37.6858 59.9028 38.3866 59.3115 38.9627 59.3115C39.1807 59.3115 39.4299 59.3893 39.7024 59.5449C40.2863 59.8872 40.3642 60.1907 40.3876 60.2918C40.5199 60.8054 40.2785 61.6379 39.718 62.5794C32.041 75.5109 28.6619 90.0764 29.9622 104.681C31.2624 119.34 37.172 132.979 47.0445 144.137C59.2763 157.948 74.8404 165.635 93.3086 166.997C95.0682 167.129 96.8434 167.191 98.5953 167.191C130.214 167.191 156.967 146.471 165.15 115.621C169.977 97.4292 166.816 77.6818 156.468 61.4512C146.152 45.2673 129.653 34.0942 111.201 30.7874C108.336 30.2738 105.424 29.9782 102.613 29.6903C101.32 29.558 100.028 29.4257 98.7354 29.2701L98.5641 29.2468H98.3929C85.9198 29.6125 74.2486 32.9115 63.6987 39.0583C63.4573 39.1983 63.2237 39.3462 62.9824 39.494C62.5775 39.743 62.196 39.9764 61.8301 40.1631C61.5108 40.3187 61.1994 40.3966 60.8957 40.3966C60.3585 40.3966 59.9303 40.1398 59.6422 39.6496C59.4086 39.245 59.3385 38.7859 59.4475 38.3891C59.541 38.0701 59.7512 37.8211 60.0782 37.65C60.9502 37.1987 61.8145 36.7318 62.6865 36.265C66.3303 34.3198 70.0987 32.3124 73.9216 30.9196C81.9412 28.0174 90.2643 26.5469 98.6654 26.5469C127.45 26.5469 153.424 43.8045 164.83 70.5157C173.395 90.5666 172.266 113.209 161.739 132.653C151.213 152.097 132.861 165.425 111.38 169.222C107.121 169.977 102.792 170.358 98.5096 170.358L98.5252 170.381Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M135.278 61.7403C134.983 61.4446 134.632 61.2812 134.251 61.2812C133.869 61.2812 133.48 61.4369 133.114 61.7248C132.803 61.9737 132.483 62.2927 132.141 62.6351L127.321 67.4436C120.874 73.8782 114.21 80.5307 107.685 87.0977C107.031 87.7513 105.988 88.6227 104.423 88.6227C103.8 88.6227 103.161 88.4826 102.461 88.1947C101.129 87.6501 99.7901 87.3778 98.4665 87.3778C97.1429 87.3778 95.8505 87.6501 94.5891 88.187C93.8884 88.4826 93.2344 88.6305 92.5959 88.6305C90.8052 88.6305 89.6684 87.4711 89.1857 86.981C85.9078 83.6508 82.0226 79.7215 78.0596 75.8857C77.4523 75.2943 76.7515 74.8508 76.2377 74.7341C76.1209 74.703 76.0041 74.6952 75.9029 74.6952C75.7471 74.6952 75.2878 74.6952 74.8673 75.5511C74.6026 76.0957 74.4391 76.6637 75.4124 77.6363L78.1919 80.4218C80.9715 83.2073 83.8445 86.0862 86.702 88.8717C87.9477 90.0777 89.2246 91.8517 88.119 94.8317C86.8655 98.193 87.3249 101.811 89.3803 104.76C91.4748 107.771 94.7916 109.506 98.4821 109.506H98.5444C102.227 109.491 105.528 107.755 107.599 104.752C109.655 101.78 110.099 98.1152 108.822 94.7072C107.989 92.4897 108.378 90.7468 110.083 89.0662C116.452 82.7794 122.883 76.3447 129.104 70.1201L134.259 64.9615C134.656 64.5647 135.029 64.199 135.31 63.8333C135.847 63.1331 135.831 62.3161 135.271 61.7403H135.278ZM104.111 104.06C102.624 105.554 100.623 106.378 98.4821 106.378H98.342C93.9585 106.3 90.556 102.799 90.5949 98.4031C90.6339 94.0225 94.0986 90.599 98.4821 90.599C102.897 90.6068 106.361 94.0458 106.393 98.4264C106.408 100.566 105.591 102.566 104.111 104.06Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M98.5589 49.4543C97.8815 49.4543 97.1185 49.0419 97.0406 48.1238C96.8927 46.3887 96.8927 44.638 97.0406 42.9107C97.1263 41.9537 97.8815 41.6113 98.5589 41.6113C99.8124 41.6502 100.046 42.5917 100.077 43.1441C100.108 43.6343 100.101 44.1556 100.093 44.7081C100.093 44.9804 100.085 45.2527 100.085 45.525C100.085 45.8051 100.085 46.0852 100.093 46.3653C100.101 46.91 100.108 47.4235 100.077 47.9059C100.015 48.8474 99.4699 49.431 98.6212 49.4543H98.5589Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M149.931 100.075C149.658 100.075 149.394 100.075 149.121 100.059C148.179 100.005 147.587 99.4681 147.548 98.62C147.517 97.9042 147.953 97.1105 148.833 97.0327C149.744 96.9549 150.647 96.916 151.519 96.916C152.446 96.916 153.357 96.9627 154.213 97.0483C155.093 97.1417 155.436 97.9353 155.389 98.6822C155.334 99.4992 154.789 99.9972 153.894 100.052C153.629 100.067 153.365 100.075 153.092 100.075C152.851 100.075 152.602 100.075 152.36 100.075C152.095 100.075 151.823 100.067 151.558 100.067C151.247 100.067 150.974 100.067 150.71 100.075C150.453 100.075 150.188 100.083 149.931 100.083V100.075Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M98.2679 155.327C97.1234 155.242 96.9443 154.223 96.921 153.795C96.8898 153.304 96.8976 152.783 96.9054 152.238C96.9054 151.966 96.9132 151.694 96.9132 151.414C96.9132 151.134 96.9132 150.861 96.9054 150.581C96.8976 150.036 96.8898 149.515 96.921 149.033C96.9755 148.138 97.4893 147.562 98.2991 147.492C98.3458 147.492 98.3925 147.492 98.447 147.492C99.1244 147.492 99.8485 147.897 99.9263 148.675C100.113 150.527 100.113 152.386 99.9263 154.184C99.8329 155.032 99.0699 155.335 98.447 155.335C98.3925 155.335 98.338 155.335 98.2835 155.335L98.2679 155.327Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M45.5112 100.036C44.6314 100.036 43.7438 99.997 42.8874 99.9192C41.8986 99.8336 41.5715 99.0088 41.5949 98.3241C41.6261 97.4683 42.1866 96.9392 43.1365 96.8847C43.4012 96.8691 43.6738 96.8691 43.9385 96.8691C44.2032 96.8691 44.4601 96.8691 44.7249 96.8769C44.9896 96.8769 45.5268 96.8847 45.5268 96.8847C45.8382 96.8847 46.103 96.8847 46.3677 96.8847C46.6091 96.8847 46.8504 96.8847 47.0996 96.8847C47.3721 96.8847 47.6368 96.8847 47.9093 96.908C48.8358 96.9625 49.4198 97.5227 49.4431 98.363C49.4665 99.0633 49.0538 99.8569 48.1117 99.9347C47.2475 100.005 46.3755 100.044 45.5112 100.044V100.036Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M125.456 8.16118C125.074 8.16118 124.677 7.97444 124.358 7.65543C124.047 7.33642 123.875 6.94739 123.883 6.57391C123.899 5.75694 124.631 5.06445 125.464 5.06445C126.375 5.09558 126.982 5.75694 126.966 6.6206C126.951 7.46091 126.273 8.14562 125.456 8.1534H125.448L125.456 8.16118Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M48.6823 50.2393C48.2697 50.2393 47.8726 50.0682 47.5689 49.7647C47.3976 49.5935 47.1096 49.2278 47.1173 48.7065C47.1173 47.9285 47.8648 47.1737 48.6512 47.1504C49.4609 47.1504 50.1772 47.8429 50.2161 48.6287C50.2317 49.0489 50.0916 49.4535 49.8035 49.7569C49.5232 50.0604 49.1339 50.2316 48.7135 50.2393H48.6823Z" fill="#FC1682" stroke="#FC1682" stroke-width="3" stroke-miterlimit="10"/>
            </g>
            <defs>
            <clipPath id="clip0_5330_34760">
            <rect width="197" height="197" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div class="maintain-in-r">
            <span v-for="(item,index) in maintainData.text" :key="index">
              {{item}}
            </span>
          </div>
        </div>
      </div>
      <div class="note2">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{noteData.title}}
          </div>
        </div>
        <div class="note2-lists">
          <div class="list-in" v-for="(item,index) in noteData.lists" :key="index">
            <div class="image">
              <img :src="item.img" :alt="item.name" :title="item.name">
            </div>
            <div class="text">
              {{item.name}}
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
.notice {
  width: 100%;
  max-width: 1450px;
  margin: 153px auto 0;
  &-text{
    margin-top: 35px;
    &>div{
      text-align: center;
      span{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
      }
    }
  }
  &-in {
    width: 100%;
    margin: 56px auto 0;
    .box {
      &>div {
        height: 187px;
        margin-top: 15px;
        display: flex;
        background: var(--indexColor2);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 0 70px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        &:first-child {
          background: var(--indexColor1);
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
          align-items: center;
        }
        &:nth-of-type(2) {
          margin-top: 0;
          padding-top: 40px;
        }
      }
    }
    .swiper-slide:not(:last-child){
      padding-right: 3px;
    }
    .swiper-slide:nth-of-type(1){
      .box{
        border-radius: 60px 0 0 60px;
        overflow: hidden;
      }
    }
    .swiper-slide:nth-of-type(4){
      .box{
        border-radius: 0 60px 60px 0;
        overflow: hidden;
      }
    }
  }
  &-line {
    width: 83px;
    margin: 22px auto;
  }
}
.condition{
  margin-top: 147px;
  &-text{
    margin-top: 35px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #666666;
    span{
      color: var(--indexColor1);
    }
  }
  &-lists{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    max-width: 1174px;
    &-in{
      display: flex;
      flex-direction: column;
      flex: 1;
      max-width: 326px;
      &>div:last-child{
        margin-top: 30px;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 160%;
        text-align: center;
        color: #666666;
        span{
          display: inline-block;
          width: 100%;
          text-align: center;
          &:last-child{
            color: var(--indexColor1);
          }
        }
      }
    }
  }
}
.maintain{
  margin-top: 98px;
  &-in{
    width: calc(100% - 60px);
    max-width: 651px;
    margin: 57px auto 0;
    padding: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 160%;
    color: #666666;
    display: flex;
    letter-spacing: 5.7px;
    &-l{
      margin-right: 71px;
      position: relative;
      svg{
        position: relative;
        z-index: 1;
      }
      &::after{
        content: '';
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 92%;
        background: #FFF1F0;
        border-radius: 50%;
        left: 17px;
        top: 14px;
      }
    }
  }
}
.note {
  margin-top: 100px;
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 893px;
    margin: 80px auto 0;
    position: relative;
    &-l {
      width: calc((462 / 893) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      margin-left: calc((48 / 893) * 100%);
      flex: 1;
      & > div {
        display: flex;
        &:not(:last-child){
          margin-bottom: 20px;
        }
        span {
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 193%; /* 38.6px */
          letter-spacing: 3.2px;
          color: var(--textColor);
          &:nth-of-type(1) {
            min-width: 20px;
            font-size: 26px;
            line-height: 1.5;
          }
        }
      }
    }
  }
}
.note2{
  margin: 120px auto 0;
  max-width: 1014px;
  width: 100%;
  &-lists{
    margin-top: 57px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 35px 114px;
    .list-in{
      display: flex;
      align-items: center;
      gap: 31.5px;
      .image{
        width: 148.5px;
        img{
          width: 100%;
        }
      }
      .text{
        flex: 1;
        line-height: 1.6;
        font-size: 18px;
      }
    }
  }
}
.Blue_light_whitening_technology{
  margin-top: 106px;
  &-topText{
    max-width: 1300px;
    margin: 57px auto 0;
    text-align: center;
    p{
      line-height: 160%; /* 30.4px */
      letter-spacing: 3.8px;
      font-size: 19px;
      text-align: center;
      &:nth-of-type(2){
        display: inline;
      }
      &:nth-of-type(3){
        display: inline;
      }
    }
  }
  &-content{
    max-width: 1164px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    .lists-in{
      display: flex;
      flex-direction: column;
      align-items: center;
      .image{
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        background: radial-gradient(53.85% 53.85% at 50% 50%, rgba(0, 174, 255, 0.14) 28.5%, rgba(255, 255, 255, 0.00) 100%);
      }
      h3{
        font-size: 23px;
        color: #00AEFF;
        text-align: center;
        margin-bottom: 10px;
      }
      p{
        max-width: 190px;
        font-size: 19px;
        line-height: 160%; /* 30.4px */
        letter-spacing: 3.8px;
        text-align: justify;
      }
    }
  }
}
.step{
  margin-top: 106px;
  &-in{
    width: 100%;
    margin-top: 7px;
    &-list{
      max-width: 1350px;
      margin: 50px auto;
      display: grid;
      gap: 70px;
      grid-template-columns: repeat(5,1fr);
      position: relative;
      .lists-in{
        width: auto;
        img{
          width: 100%;
        }
        p{
          margin-top: 10px;
          color: var(--textColor);
          line-height: 160%; /* 30.4px */
          letter-spacing: 3.8px;
          font-size: 19px;
          text-align: center;
        }
      }
      &:nth-of-type(2){
        max-width: 1080px;
        grid-template-columns: repeat(4,1fr);
      }
      .line{
        width: 100vw;
        height: 0;
        position: absolute;
        left: 50%;
        top: 32%;
        transform: translateX(-50%);
        border-bottom: 1px solid var(--indexColor1);
        z-index: -1;
      }
      &::before{
        content: '';
        position: absolute;
        background: url(https://static.cmereye.com/imgs/2024/05/0245d98d5d39cd83.png) no-repeat;
        background-size: 100% 100%;
        width: 14px;
        height: 21px;
        top: 32%;
        left: -50px;
        transform: translateY(-50%);
      }
      &::after{
        content: '';
        position: absolute;
        background: url(https://static.cmereye.com/imgs/2024/05/0245d98d5d39cd83.png) no-repeat;
        background-size: 100% 100%;
        width: 14px;
        height: 21px;
        top: 32%;
        right: -50px;
        transform: translateY(-50%);
      }
    }
  }
  &-info{
    .infobg{
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;
      position: relative;
      img{
        width: 100%;
      }
      &>div{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        max-width: 1280px;
        transform: translate(-50%,-50%);
        p{
          font-size: 23px;
          font-weight: 500;
          line-height: 160%;
          color: var(--textColor);
          max-width: 50%;
          text-align: center;
          span{
            color: var(--indexColor1);
          }
        }
      }
    }
    .lists{
      max-width: 1104px;
      margin: -180px auto 0;
      display: grid;
      gap: 60px;
      grid-template-columns: repeat(3,1fr);
      &-in{
        position: relative;
        width: auto;
        height: 0;
        padding-bottom: 100%;
        background: url(https://static.cmereye.com/imgs/2024/05/df2265fcfa7c6616.webp) no-repeat;
        background-size: 100% 100%;
        .centerBox{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          h3{
            color: #00AEFF;
            text-align: center;
            font-size: 23px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
            margin-bottom: 5px;
            margin-top: 85px;
            text-shadow: 1px 1px 0 #fff,
            -1px -1px 0 #fff,
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            2px 2px 0 #fff,
            2px -2px 0 #fff,
            -2px 2px 0 #fff,
            -2px -2px 0 #fff;
          }
          p{
            color: var(--textColor);
            font-size: 19px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 30.4px */
            letter-spacing: 2px;
            max-width: 181px;
            text-align: justify;
          }
        }
      }
    }
  }
}
.effect{
  width: 100%;
  margin-top: 140px;
  &-l{
    max-width: 1000px;
    .context{
      width: 100%;
      text-align: center;
      margin: 35px 0 10px;
      p{
        font-size: 19px;
        letter-spacing: 3.8px;
        line-height: 1.6;
        span{
          color: var(--indexColor1);
        }
      }
    }
  }
  &-r{
    
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .condition{
    margin-top: 7.6563vw;
    &-text{
      margin-top: 1.8229vw;
      font-size: 1.0417vw;
    }
    &-lists{
      margin-top: 2.0833vw;
      &-in{
        max-width: 22.9167vw;
        &>div:last-child{
          margin-top: 1.5625vw;
          font-size: 1.1458vw;
        }
      }
    }
  }
  .notice {
    max-width: 75.5208vw;
    margin: 7.9688vw auto 0;
    &-text{
      margin-top: 1.8229vw;
      &>div{
        span{
          font-size: 1.0417vw;
        }
      }
    }
    &-in {
      margin: 2.9167vw auto 0;
      .box {
        &>div {
          height: 9.7396vw;
          margin-top: .7813vw;
          font-size: 1.0417vw;
          padding: 0 3.6458vw;
          &:first-child {
            height: 3.5938vw;
            font-size: 1.4583vw;
          }
          &:nth-of-type(2) {
            padding-top: 2.0833vw;
          }
        }
      }
      .swiper-slide:not(:last-child){
        padding-right: .1563vw;
      }
      .swiper-slide:nth-of-type(1){
        .box{
          border-radius: 3.125vw 0 0 3.125vw;
        }
      }
      .swiper-slide:nth-of-type(4){
        .box{
          border-radius: 0 3.125vw 3.125vw 0;
        }
      }
    }
    &-line {
      width: 4.3229vw;
      margin: 1.1458vw auto;
    }
  }
  .maintain{
    margin-top: 5.1042vw;
    &-in{
    width: calc(100% - 3.125vw);
    max-width: 33.9063vw;
    margin: 2.9688vw auto 0;
    font-size: .9896vw;
    letter-spacing: .2969vw;
    &-l{
      margin-right: 3.6979vw;
      &::after{
        left: .8854vw;
        top: .7292vw;
      }
    }
  }
  }
  .note {
    margin-top: 5.2083vw;
    &-content {
      max-width: 46.5104vw;
      margin: 4.1667vw auto 0;
      &-r {
        & > div {
          span {
            font-size: 1.0417vw;
            letter-spacing: .1667vw;
            &:nth-of-type(1) {
              min-width: 1.0417vw;
              font-size: 1.3542vw;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .notice {
    margin: 90px auto 0;
    &-text{
      margin-top: 26px;
      &>div{
        span{
          font-size: 14px;
          display: inline-block;
        }
      }
    }
    &-in {
      width: 100%;
      margin: 35px auto 0;
      .box {
        &>div{
          font-weight: 600;
          font-size: 14px;
          height: 131px;
          margin-top: 9px;
          padding: 0 23px;
          &:first-child {
            height: 48px;
            font-weight: 700;
            font-size: 20px;
          }
          &:nth-of-type(2){
            padding-top: 28px;
          }
        }
      }
      .swiper-wrapper{
        padding: 0 30px 30px;
        box-sizing: border-box;
      }
      :deep(.swiper-scrollbar){
        width: calc(100% - 60px);
        opacity: 1 !important;
        left: 30px;
        background: var(--indexColor2);
      }
      :deep(.swiper-scrollbar-drag){
        background: var(--indexColor1);
      }
    }
  }
  .condition{
    margin-top: 80px;
    &-text{
      margin-top: 35px;
      font-size: 14px;
      span{
        width: 100%;
        display: block;
        text-align: center;
      }
    }
    &-lists{
      margin-top: 5px;
      flex-direction: column;
      padding: 0 30px;
      &-in{
        margin-top: 30px;
        max-width: 100%;
        &>div:last-child{
          font-size: 16px;
        }
      }
    }
  }
  .maintain{
    margin-top: 80px;
    &-in{
      margin: 0 auto;
      padding: 31px 0 0;
      font-size: 16px;
      text-align: justify;
      flex-direction: column;
      letter-spacing: 1.6px;
      line-height: 2;
      font-size: 16px;
      &-l{
        margin: 0 auto 20px;
        width: 131px;
        height: 130px;
        svg{
          width: 100%;
          height: 100%;
        }
        &::after{
          content: '';
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          background: #FFF1F0;
          border-radius: 50%;
          left: 10px;
          top: 10px;
        }
      }
      &-r{
        span{
          display: block;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  .note {
    max-width: 390px;
    margin: 60px auto 0;
    &-content{
      padding: 0 30px;
      margin: 45px auto 0;
      display: flex;
      flex-direction: column;
      &-l {
        width: 100%;
      }
      &-r{
        width: 100%;
        margin-top: 45px;
        padding-right: 10px;
        &>div{
          span{
            font-size: 15px;
            letter-spacing: 2.4px;
            &:nth-of-type(1) {
              font-size: 20px;
              min-width: 15px;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }
  .note2{
    margin-top: 80px;
    padding: 0 30px;
    &-lists{
      grid-template-columns: repeat(1,1fr);
      gap: 20px;
      margin-top: 35px;
      .list-in{
        gap: 20px;
        .image{
          width: 105px;
        }
        .text{
          font-size: 16px;
          line-height: 2;
        }
        &:nth-of-type(2){
          order: 1;
        }
        &:nth-of-type(4){
          order: 2;
        }
      }
    }
  }
  .Blue_light_whitening_technology{
    margin-top: 80px;
    padding: 0 30px;
    &-topText{
      margin-top: 35px;
      p{
        line-height: 200%; /* 32px */
        letter-spacing: 1.6px;
        font-size: 16px;
        padding: 0 15px;
        &:nth-of-type(2){
          display: block;
        }
      }
    }
    &-content{
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 38px;
      margin-top: 45px;
      .lists-in{
        h3{
          font-size: 16px;
        }
        p{
          font-size: 12px;
          letter-spacing: 1.2px;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>