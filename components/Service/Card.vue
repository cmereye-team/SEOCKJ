<script lang="ts" setup>
import { defineProps } from "vue"
import serviceLists from '~/assets/js/service'
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
const servicesCardLists = serviceLists

const servicesCardPageData = {
  title: '牙科服務',
  dentalServicesTitleIn: '其他牙科服務',
  contextIn: '中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、全口修復及各種牙科治療，幫助客人回復自信笑容。'
}

// let windowWidth = ref(1920)

// onMounted(()=>{
//   getWindowWidth()
//   window.addEventListener('resize',getWindowWidth)
// })

// const getWindowWidth = () => {
//   windowWidth.value = window.innerWidth
//   // console.log(windowWidth)
// }

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
      <div class="context" v-if="!isMenu">
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