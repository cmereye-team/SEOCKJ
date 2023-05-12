<script lang="ts" setup>
import { defineProps } from "vue"
defineProps({
  isIndexShow:{
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
    name: '矯齒',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/4344be2a0c460ef5.png',
    link: '/service/orthodontics'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/32034ad5bb8db07a.png',
    link: '/service/rootCanal'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
  },
  {
    name: '杜牙根',
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/5e129af0339856f0.png',
    link: '/service/healthcare'
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
  <div class="index-dentalServices">
    <div class="index-dentalServices-in pageCon">
      <div class="titile">
        <!-- 牙科服務 -->
        <div class="index_title" v-if="isIndexShow">{{servicesCardPageData.title}}</div>
      </div>
      <div class="dentalServices-title" v-if="!isIndexShow">
        <!-- 牙科服務 -->
        <div class="dentalServices-title-in">{{servicesCardPageData.dentalServicesTitleIn}}</div>
        <div class="dentalServices-title-line"></div>
      </div>
      <div class="context" v-if="!(windowWidth > 768 && !isIndexShow)">
        <!-- 中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、全口修復及各種牙科治療，幫助客人回復自信笑容。 -->
        <div class="context-in">{{servicesCardPageData.contextIn}}</div>
      </div>
      <div class="servicesCard">
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
    }
  }
}
.dentalServices-title{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &-in{
    font-weight: 700;
    font-size: 50px;
    line-height: 160%;
    color: #4D4D4D;
  }
  &-line{
    width: 100px;
    height: 5px;
    background: #FFA09E;
    border-radius: 2px;
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
    }
  }
  .dentalServices-title{
    &-in{
      font-size: 3.4vw;
    }
    &-line{
      width: 7vw;
      height: 5px;
    }
  }
}
@media screen and (max-width: 768px) {
  .index-dentalServices{
    padding: 100px 0 0;
    &-in{
      align-items: flex-start;
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
  .dentalServices-title{
    &-in{
      font-weight: 600;
      font-size: 1.625rem;
    }
    &-line{
      width: 50px;
      height: 3px;
    }
  }
}
</style>