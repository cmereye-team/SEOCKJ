<script lang="ts" setup>
import { setTimeout } from "timers/promises"

useHead({
  title: "最新消息"
})
const activeIndex = 0
const handleNewsItem = (_idx:number) =>{
  newsLists.value[_idx].isShow = true
}
let newsLists = ref([{
  id: '',
  imgUrl: '',
  title: '',
  context: '',
  link: '',
  month: '',
  day: '',
  isShow: false,
  type: ''
}])
const localLists = ref([
  {
    id: '19',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/ea16bdef65414cbc.jpg',
    title: '【我適合植牙嗎？】',
    context: '雖然植牙有好多好處，不過唔係人人都適合做植牙㗎！植牙同其他牙科治療一樣，如果本身患有未受藥物控制的心血管疾病、免疫系統疾病等等，就需要特別作小心評估或者調整治療時間。',
    link: '/service/dentalImplant',
    month: 'JAN',
    day: '16',
    type: '種植牙',
    isShow: false
  },
  {
    id: '20',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/3bfef0469a952097.jpg',
    title: '【杜牙根後就唔會再蛀牙？】',
    context: '以為做完杜牙根救返隻嚴重蛀牙，加埋個牙套包住，隻牙就百毒不侵，唔會再蛀多次？對杜牙根療程有疑問，快啲去諮詢牙科醫生啦！',
    link: '/dental-service/rootCanal',
    month: 'JAN',
    day: '15',
    type: '根管治療',
    isShow: false
  },
  {
    id: '21',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/c83f7c9432a168d3.jpg',
    title: '【「杜牙根」係咩嚟？】',
    context: '杜牙根係專為蛀牙進行修補嘅手術，目的係將受感染/壞死嘅牙髓組織清除。由於根管治療較複雜，建議如患上蛀牙問題便立即就醫，唔好延誤治療時間呢~',
    link: '/dental-service/rootCanal',
    month: 'JAN',
    day: '14',
    type: '根管治療',
    isShow: false
  },
  {
    id: '22',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/ff117a08ad3d03cb.jpg',
    title: '【CKJ愛康健 正式加入FB+IG平台】',
    context: '中心位於深圳市羅湖區，目前已有13間門診，提供超過20種牙科服務，包括：洗牙，補牙，牙齒美白，箍牙，植牙，隱形牙箍，智慧齒手術，3D電腦掃描檢查等🙌',
    link: '',
    month: 'JUN',
    day: '13',
    type: '其他',
    isShow: false
  }
])
let saveLists = ref([
  ...localLists.value
])
const getNewsLists = async () => {
  const { data } = await useFetch('https://admin.ckjhk.com/api.php/list/2/page/1',{
    method: 'post',
    onResponse({ request, response, options }) {
      // console.log('請求結果：response',JSON.parse(response._data))
      let res = JSON.parse(response._data) || null
      if(res){
        if(res.data && res.data.length){
          let ids = localLists.value.map(item=> item.id)
          let _newsLists = res.data.filter(item=> !ids.includes(item.id))
          let _saveLists = _newsLists.map(item=>{
            let _date = new Date(item.ext_news_date)
            return {
              id: item.id,
              title: item.title || '',
              imgUrl: item.pics && `https://admin.ckjhk.com${item.pics}`,
              link: item.ext_banner_link || '',
              context: item.ext_news_context || '',
              month: _date.toDateString().split(" ")[1].toUpperCase() || '',
              day: _date.toDateString().split(" ")[2] || '',
              isShow: false,
              type: item.ext_news_type
            }
          })
          saveLists.value = [
            ..._saveLists,
            ...localLists.value
          ]
          // console.log('saveLists',saveLists.value)
          filterLists()
        }
      }
    }
  });
}

getNewsLists()


let dateCur = ref('0')
let typeCur = ref('所有類別')
const filterLists = () => {
  // console.log(saveLists.value)
  newsLists.value = saveLists.value.filter(item=>{
    if(dateCur.value === '0' && typeCur.value === '所有類別'){
      // console.log('所有月份、所有类型')
      return item
    }else{
      console.log('非所有月份、非所有类型')
      if(dateCur.value === '0'){
        console.log(item)
        if( item.type && item.type.indexOf(typeCur.value) !== -1){
          // console.log('指定类型：',typeCur.value)
          return item
        }
      }else if(typeCur.value === '所有類別'){
        if(item.month === dateCur.value){
          // console.log('指定月份：',dateCur.value)
          return item
        }
      }else{
        if(item.month === dateCur.value && (item.type &&  item.type.indexOf(typeCur.value) !== -1 )){
          // console.log('指定月份、指定类型：',dateCur.value)
          return item
        }
      }
    }
  })
  // console.log(newsLists.value)
}

const changeMonthCur = (_data:any) =>{
  dateCur.value = _data.date
  typeCur.value = _data.type
  filterLists()
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    
      <!-- :headerBg="'https://static.cmereye.com/imgs/2023/04/fbca451e1a8a9ba4.jpg'"
      :headerImg="'https://static.cmereye.com/imgs/2023/05/c46fcc590da0ffdd.png'"
      :headerBgImg="'https://static.cmereye.com/imgs/2023/05/de7105389a7f04b2.png'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/65b135487a85f4f0.jpg'"
      :titlePosition="'left'" -->
    <PageHeader /> 
    <div class="newsPage">
      <LatestNews />
      <div class="newsBox pageCon">
        <div class="newsBox-title">
          <div class="index_title">最新消息</div>
          <div>
           <dropdownCon @changeCur="changeMonthCur" />
          </div>
        </div>
        <div class="newsBox-in">
          <div class="newsItem" v-for="(newItem,newIndex) in newsLists" :key="newIndex" @click="handleNewsItem(newIndex)">
            <div class="newsItem-in">
              <div class="newsItem-in-l">
                <img :src="newItem.imgUrl" alt="" />
              </div>
              <div class="newsItem-in-c">
                <div class="title">{{newItem.title}}</div>
                <svg v-show="!newItem.isShow" class="mbBox" width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 0H0L6.25 10L12.5 0Z" fill="#FFA09E"/>
                  <path d="M12.5 13H0L6.25 23L12.5 13Z" fill="#FFA09E"/>
                </svg>
                <!-- <div class="pcShow" v-show="true"> -->
                  <div :class="'content'" v-show="windowWidth > 768 ? true : newItem.isShow">
                    <!-- <span>農曆新年期間，我們的門店會繼續營業，</span> -->
                    <!-- <span>但營業時間將有以下更改： 不便之處, 敬請原諒</span> -->
                    <span>{{newItem.context}}</span>
                  </div>
                  <div class="time" v-show="windowWidth > 768 ? true : newItem.isShow">
                    <!-- <span>年三十晚 (24/1)：11:00am – 7:00pm</span> -->
                    <!-- <span>年初一、初二 (25-26/1)：11:00am-6:00pm</span> -->
                    <!-- <span>年初三、初四 (27-28/1)：照常營業 (11:00am-9:30pm)</span> -->
                    <span>有任何有關牙齒既問題？愛康健幫到你！</span>
                  </div>
                  <div class="btn" v-show="windowWidth > 768 ? true : newItem.isShow">了解詳情</div>
                </div>
              <!-- </div> -->
              <div class="newsItem-in-r">
                <span>{{newItem.day}}</span>
                <span>{{newItem.month}}</span>
              </div>
            </div>
          </div>
          <div class="newsBox-in-noData" v-if="!newsLists.length">
            到底啦~沒有更多數據
          </div>
        </div>
      </div>
      <div class="tidbits">
        <div class="tidbits-title">
          <div class="index_title">製作花絮</div>
        </div>
        <div class="tidbits-in">
          <img src="https://static.cmereye.com/imgs/2023/06/e6e8971d6925c37f.jpg" alt="" />
        </div>
      </div>
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .newsPage{
    background: #fff;
    padding-bottom: 140px;
  }
  .newsBox{
    margin-top: 80px;
    &-title{
      display: flex;
      justify-content: space-between;
    }
    &-in{
      &-noData{
        height: 300px;
        line-height: 300px;
        font-size: 28px;
        text-align: center; 
        color: #ccc;
      }
    }
  }
  .newsItem{
    width: 100%;
    height: 550px;
    background: #FFF1F0;
    border-radius: 15px;
    margin-top: 76px;
    padding: 43px;
    box-sizing: border-box;
    &-in{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;
      &-l{
        width: 464px;
        height: 100%;
        background: #FFDDDA;
      }
      &-c{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 25px;
        box-sizing: border-box;
        font-family: 'Arial';
        font-weight: 400;
        color: #FFA09E;
        justify-content: space-between;
        svg{
          margin: 10px auto 0;
        }
        .title{
          height: 60px;
          font-size: 3.125rem;
          line-height: 110%;
          border-left: 20px solid #FFCECB;
        }
        .content{
          font-size: 1.75rem;
          line-height: 160%;
          // margin-top: 24px;
          span{
            width: 100%;
            display: inline-block;
          }
        }
        .time{
          font-size: 1.75rem;
          line-height: 160%;
          // margin-top: 36px;
          span{
            width: 100%;
            display: inline-block;
            &::before{
              content: '';
              width: 7px;
              height: 7px;
              display: inline-block;
              background: #FFA09E;
              border-radius: 50%;
              vertical-align: middle;
              margin-top: -5px;
              margin-right: 10px;
            }
          }
        }
        .btn{
          background: #fff;
          display: inline-block;
          width: 240px;
          height: 70px;
          line-height: 70px;
          font-size: 2rem;
          color: #FFA09E;
          text-align: center;
          // margin-top: 46px;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          border-radius: 40px;
          cursor: pointer;
          transition: all .3s;
          &:hover{
            box-shadow: 1px 5px 10px rgba(255, 163, 158, 0.45);
          }
        }
      }
      &-r{
        width: 150px;
        height: 150px;
        background: #FFCECB;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        right: 0;
        span{
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 160%;
          text-align: center;
          color: #FFFFFF;
          width: 100px;
          display: block;
          &:first-child{
            border-bottom: 4px solid #fff;
          }
        }
      }
    }
    &:hover{
      .newsItem-in-r{
        transition: all .3s;
        box-shadow: 0px 0px 10px rgba(255, 163, 158, 0.45);
        animation: revolveAnima 10s linear infinite;
      }
    }
    &:first-child{
      margin-top: 58px;
    }
  }
  .tidbits{
    margin-top: 86.5px;
    &-title{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-in{
      width: 100%;
      max-width: 1043px;
      margin: 58.5px auto 0;
      img{
        width: 100%;
      }
    }
  }
  @keyframes revolveAnima {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  @media (min-width: 768px) and (max-width: 1452px) {
    .newsItem{
      height: calc(30vw + 60px);
      padding: 30px;
      &-in{
        &-l{
          width: 30vw;
        }
        &-c{
          .title{
            height: 50px;
            font-size: 2.5rem;
            line-height: 130%;
            border-left: 15px solid #FFCECB;
          }
          .content{
            font-size: 1.4rem;
          }
          .time{
            font-size: 1.4rem;
          }
          .btn{
            width: 30%;
            font-size: 1.5rem;
            height: 60px;
            line-height: 60px;
          }
        }
        &-r{
          width: 10vw;
          height: 10vw;
          span{
            font-size: 30px;
            width: 70%;
            &:first-child{
              border-bottom: 3px solid #fff;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    .newsItem{
      height: calc(30vw + 60px);
      padding: 30px;
      &-in{
        &-l{
          width: 30vw;
        }
        &-c{
          .title{
            height: 3.5vw;
            font-size: 3vw;
            border-left: 10px solid #FFCECB;
          }
          .content{
            font-size: 1rem;
          }
          .time{
            font-size: 1rem;
          }
          .btn{
            font-size: 2vw;
            height: 5vw;
            line-height: 5vw;
          }
        }
        &-r{
          span{
            font-size: 20px;
            &:first-child{
              border-bottom: 2px solid #fff;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    .newsItem{
      &-in{
        &-c{
          .title{
            font-size: 2.5vw;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .newsPage{
      padding-bottom: 90px;
    }
    .newsBox{
      padding: 30px;
      box-sizing: border-box;
      &-title{
        flex-direction: column;
      }
    }
    .newsItem{
      padding: 24px 24px 22px;
      height: auto;
      position: all .3s;
      margin-top: 17px;
      &:first-child{
        margin-top: 0;
      }
      &-in{
        flex-direction: column;
        position: relative;
        &-l{
          width: 100%;
          img{
            width: 100%;
          }
        }
        &-c{
          width: 100%;
          text-align: center;
          padding-left: 0;
          margin-top: 60px;
          .title{
            height: auto;
            width: 120%;
            margin-left: -10%;
            font-size: 1.125rem;
            border-left: none;
          }
          .content{
            font-size: .875rem;
            text-align: left;
            margin-top: 12px;
          }
          .time{
            font-size: .875rem;
            text-align: left;
            margin-top: 12px;
            margin-left: 10px;
            span{
              display: block;
              &::before{
                content: '';
                width: 4px;
                height: 4px;
                margin-top: -4px;
                margin-left: -10px;
              }
            }
            
          }
          .btn{
            width: 158px;
            height: 46px;
            line-height: 46px;
            font-size: 1.125rem;
            margin: 20px auto 0;
          }
        }
        &-r{
          width: 26.66vw;
          height: 26.66vw;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 58vw;
          span{
            font-weight: 400;
            font-size: 2.4rem;
            width: 70px;
            line-height: 130%;
            &:last-child{
              font-size: 1.67rem;
              line-height: 160%;
            }
          }
        }
      }
      // &:hover{
      //   .newsItem-in-r{
      //     transition: all .3s;
      //     box-shadow: 0px 0px 10px rgba(255, 163, 158, 0.45);
      //     animation: revolveAnima 10s linear infinite;
      //   }
      // }
    }
    @keyframes revolveAnima {
      0%{
        transform: translateX(-50%) rotate(0);
      }
      100%{
        transform: translateX(-50%) rotate(360deg);
      }
    }
    .tidbits{
      justify-content: flex-start;
      margin-top: 60px;
      &-in{
        margin: 34px auto 0;
      }
    }
  }
</style>