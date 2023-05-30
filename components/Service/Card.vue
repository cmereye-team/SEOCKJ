<script lang="ts" setup>
import { defineProps } from "vue"
defineProps({
  isIndexShow:{
    type: Boolean,
    default: false
  },
  isMenu: {
    type: Boolean,
    default: false
  }
})
const servicesCardLists = [
  {
    name: '植牙',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/dentalImplant'
  },
  {
    name: '矯齒(箍牙)',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/4344be2a0c460ef5.png',
    link: '/service/orthodontics'
  },
  {
    name: '根管治療',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/32034ad5bb8db07a.png',
    link: '/service/rootCanal'
  },
  {
    name: '隱適美',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/6c3e61117d540a66.png',
    link: '/service/invisalign'
  },
  {
    name: '瓷貼片',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/4fe83a037a03391d.png',
    link: '/service/veneers'
  },
  {
    name: '全瓷牙冠',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/81b463bfe0377935.png',
    link: '/service/crown'
  },
  {
    name: '智慧齒脫除',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/84a4d8dea1e93276.png',
    link: '/service/extraction'
  },
  {
    name: '牙周病治療',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/db71b7e766da670e.png',
    link: '/service/periodontal'
  },
  {
    name: '牙托',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/102e8ffea3f3ee05.png',
    link: '/service/dentalTrays'
  },
  {
    name: '牙齒美白',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/201d5535b39b4b5f.png',
    link: '/service/teethWhitening'
  },
  {
    name: '洗牙',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/e4d3795bb2f0397c.png',
    link: '/service/scalingTeeth'
  },
  {
    name: '補牙',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/b94a717160c05e3a.png',
    link: '/service/dentalFillings'
  },
  {
    name: '一般口腔檢查',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/248483fd3f0ca0e2.png',
    link: '/service/oralCheck'
  },
  {
    name: '兒童牙科',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/0c2dfc7b0c54bc01.png',
    link: '/service/pediatric'
  },
]

const servicesCardPageData = {
  title: '牙科服務',
  dentalServicesTitleIn: '其他牙科服務',
  contextIn: '中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、全口修復及各種牙科治療，幫助客人回復自信笑容。'
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
  <div :class="{'index-dentalServices':true,'isMenu': isMenu}">
    <div :class="['index-dentalServices-in', 'pageCon', {'isIndexShow': !isIndexShow,'isMenu': isMenu}]">
      <div class="titile">
        <!-- 牙科服務 -->
        <div class="index_title" v-if="isIndexShow">{{servicesCardPageData.title}}</div>
      </div>
      <div class="dentistryServices-title" v-if="!isIndexShow && !isMenu">
        <!-- 牙科服務 -->
        <div class="dentistryServices-title-in bb">{{servicesCardPageData.dentalServicesTitleIn}}</div>
      </div>
      <div class="context" v-if="!(windowWidth > 768 && !isIndexShow)">
        <!-- 中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、全口修復及各種牙科治療，幫助客人回復自信笑容。 -->
        <div class="context-in">{{servicesCardPageData.contextIn}}</div>
      </div>
      <div :class="{'servicesCard':true,'isMenu': isMenu}">
        <div class="servicesCard-in" v-for="(item,index) in servicesCardLists" :key="index">
          <nuxt-link :to="item.link">
            <div class="servicesCard-in-image">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="servicesCard-in-name">{{item.name}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.index-dentalServices{
  padding: 189px 0 0;
  &-in{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .context{
      margin-top: 35px;
      &-in{
        margin: 0 auto;
        width: 100%;
        max-width: 1000px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #4D4D4D;
        text-align: center;
      }
    }
    .servicesCard{
      display: flex;
      flex-wrap: wrap;
      margin: 46px auto 0;
      width: 100%;
      max-width: 1090px;
      &-in{
        cursor: pointer;
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 45px;
        box-sizing: border-box;
        a{
          width: 100%;
          height: 100%;
        }
        &-image{
          width: 100%;
          height: 0;
          padding-top: 100%;
          position: relative;
          background: #FFF1F0;
          border-radius: 10px;
          img{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            max-width: 90%;
            max-height: 90%;
          }
          &:hover{
            background: #FFCECB;
          }
        }
        &-name{
          height: 64px;
          line-height: 64px;
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          color: #4D4D4D;
          text-align: center;
        }
        &>.router-link-exact-active{
          .servicesCard-in-image{
            background: #FFCECB;
          }
        }
      }
      &.isMenu{
        margin-top: 0;
        padding: 0;
        .servicesCard-in{
          padding: 0 6px;
          &-name{
            font-weight: 600;
            font-size: 16px;
            height: 32px;
            line-height: 32px;
            width: 110%;
          }
        }
      }
    }
  }
  &.isMenu{
    padding: 0px;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-dentalServices{
    padding: 150px 0 0;
    &-in{
      .servicesCard{
        &-in{
          padding: 0 3vw;
           &-image{
            img{
              max-width: 80%;
              max-height: 80%;
            }
            &-name{
              height: 60px;
              line-height: 60px;
            }
          }
        }
      }
      &.isMenu{
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .index-dentalServices{
    padding: 100px 0 0;
    &-in{
      align-items: flex-start;
      &.isIndexShow{
        align-items: center;
      }
      .context{
        margin-top: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        &-in{
          font-weight: 500;
          font-size: 16px;
          text-align: left;
        }
      }
      .servicesCard{
        padding: 0 21.5px;
        box-sizing: border-box;
        &-in{
          width: 50%;
          padding: 0 8.5px;
          &-image{
            img{
              max-width: 70%;
              max-height: 70%;
            }
          }
          &-name{
            height: 56px;
            line-height: 56px;
          }
        }
      }
    }
  }
}
</style>