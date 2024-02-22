<script lang="ts" setup>
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
  title: 'components.service.card.title',
  dentalServicesTitleIn: 'components.service.card.dentalServicesTitleIn',
  contextIn: 'components.service.card.contextIn'
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
  <div :class="[{'index-dentalServices':true,'isMenu': isMenu},{'index-dentalServices-indexshow': isIndexShow}]">
    <div :class="['index-dentalServices-in', 'pageCon', {'isIndexShow': !isIndexShow,'isMenu': isMenu}]">
      <div class="titile">
        <!-- 牙科服務 -->
        <div class="index_title" v-if="isIndexShow">{{$t(servicesCardPageData.title)}}</div>
      </div>
      <div class="index-dentistryServices-in-title" v-if="!isIndexShow && !isMenu">
        <!-- 牙科服務 -->
        <div class="services_title">{{$t(servicesCardPageData.dentalServicesTitleIn)}}</div>
      </div>
      <div class="context" v-if="!isMenu">
        <!-- 中心提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、全口修復及各種牙科治療，幫助客人回復自信笑容。 -->
        <div class="context-in">{{$t(servicesCardPageData.contextIn)}}</div>
      </div>
      <div :class="{'servicesCard':true,'isMenu': isMenu}">
        <div class="servicesCard-in" v-for="(item,index) in servicesCardLists" :key="index">
          <nuxt-link :to="item.link">
            <div class="servicesCard-in-image">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="servicesCard-in-name">{{$t(item.name)}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-dentistryServices-in-title{
  width: 100%;
  display: flex;
  justify-content: center;
}
.services_title{
  font-style: normal;
  position: relative;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  text-indent: 45px;
  color: #666666;
  background: url(@/assets/images/indexTitle_bg_3.png) no-repeat;
  background-size: auto 80%;
  padding-bottom: 15px;
}
.index-dentalServices{
  padding: 189px 0 0;
  &-indexshow{
    padding: 100px 0 0;
  }
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
        color: #666666;
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
          background: var(--indexColor2);
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
            background: #FFA8C6;
          }
        }
        &-name{
          height: 64px;
          line-height: 64px;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          color: #666666;
          text-align: center;
          white-space: nowrap;
        }
        &>.router-link-exact-active{
          .servicesCard-in-image{
            background: #FFA8C6;
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
            font-size: 15px;
            // height: 32px;
            // line-height: 32px;
            line-height: 160%;
            padding: 8px 0;
            height: auto;
            white-space: pre-wrap;
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
@media (min-width: 769px) and (max-width: 1452px) {
  .index-dentalServices{
    padding: 150px 0 0;
    &-in{
      .servicesCard{
        width: 70%;
        &-in{
          padding: 0 2vw;
          width: 20%;
           &-image{
            img{
              max-width: 80%;
              max-height: 80%;
            }
          }
          &-name{
            height: 50px;
            line-height: 50px;
            font-size: 16px;
          }
        }
      }
      &.isMenu{
        width: 100%;
        .servicesCard{
          width: 100%;
          &-in{
            width: 25%;
          }
        } 
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .index-dentistryServices-in-title{
    justify-content: flex-start;
  }
  .services_title {
    width: calc(100% - 30px);
    font-size: 18px;
    background-size: auto 85%;
    text-indent: 35px;
    margin-left: 30px;
    background-position: 0px 3px;
    padding-bottom: 5px;
    line-height: 160%;
  }
  .index-dentalServices{
    padding: 100px 0 0;
    &-indexshow{
      padding: 50px 0 0;
    }
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
        padding: 0 15px;
        box-sizing: border-box;
        &-in{
          width: calc(100% / 3);
          padding: 0 5px;
          &-image{
            img{
              max-width: 70%;
              max-height: 70%;
            }
          }
          &-name{
            font-size: 15px;
            height: 50px;
            line-height: 30px;
            padding-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>