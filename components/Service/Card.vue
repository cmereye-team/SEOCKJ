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

</script>


<template>
  <div :class="[{'index-dentalServices':true,'isMenu': isMenu},{'index-dentalServices-indexshow': isIndexShow}]">
    <div :class="['index-dentalServices-in', 'smallPageCon', {'isIndexShow': !isIndexShow,'isMenu': isMenu}]">
      <div class="titile">
        <div class="index_title" v-if="isIndexShow">牙科服務</div>
      </div>
      <div class="index-dentistryServices-in-title" v-if="!isIndexShow && !isMenu">
        <div class="index_title">其他牙科服務</div>
      </div>
      <div class="context" v-if="!isMenu">
        <div class="context-in" v-if="!isIndexShow">醫院提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，到牙齒美白、全口修復及各種牙科治療，幫助客人回復自信笑容。</div>
        <div class="context-in isIndex" v-else>愛康健集團是大灣區專業牙科連鎖機構，其愛康健口腔醫院為香港政府納入長者醫療券大灣區試點。14間門診有超過20種牙科治療項目，專注為港服務超過29年。</div>
      </div>
      <div :class="{'servicesCard':true,'isMenu': isMenu}">
        <div class="servicesCard-in" :class="{hot:item.isHot}" v-for="(item,index) in servicesCardLists" :key="index">
          <nuxt-link :to="'#'">
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
.index-dentistryServices-in-title{
  width: 100%;
  display: flex;
  justify-content: center;
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
        max-width: 700px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        text-align: center;
        &.isIndex{
          max-width: 760px;
        }
      }
    }
    .servicesCard{
      display: flex;
      flex-wrap: wrap;
      margin: 46px auto 0;
      width: 100%;
      max-width: 760px;
      &-in{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        a{
          width: 100%;
          height: 100%;
          padding: 0 10px;
          cursor: pointer;
        }
        &-image{
          width: 100%;
          height: 0;
          padding-top: 100%;
          position: relative;
          background: #FFF1F0;
          box-shadow: 0 2px 4px rgba(0,0,0,.25);
          border-radius: 50%;
          transition: all .3s;
          box-sizing: border-box;
          // border: 2px solid #FFF1F0;
          img{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            max-width: 70%;
            max-height: 70%;
          }
          &:hover{
            background: var(--indexColor_2);
            box-shadow: 0 5px 5px rgba(0,0,0,.45);
            transform: translateY(-5px);
          }
        }
        &.hot{
          .servicesCard-in-image{
            // background: #F8CDCD;
            // border: 2px solid #F8CDCD;
            overflow: hidden;
            &::before{
              content: '熱門';
              // background: var(--indexColor);
              // padding: 20px 30px 0;
              position: absolute;
              width: 80px;
              height: 80px;
              left: 0;
              top: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              font-size: 26px;
              color: #FFF620;
              background: url(@/assets/images/icon_70bg.svg);
            }
          }
        }
        &-name{
          padding: 10px 0 40px;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          color: #666666;
          text-align: center;
          white-space: nowrap;
        }
        &>.router-link-exact-active{
          .servicesCard-in-image{
            // background: var(--indexColor_2);
            box-shadow: 0 5px 5px rgba(0,0,0,.45);
            transform: translateY(-5px);
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
@media (min-width: 769px) and (max-width: 1920px) {
 
  .index-dentalServices{
    padding: 9.8438vw 0 0;
    &-indexshow{
      padding: 5.2083vw 0 0;
    }
    &-in{
      .context{
        margin-top: 1.8229vw;
        &-in{
          max-width: 36.4583vw;
          font-size: 1.0417vw;
          &.isIndex{
            max-width: 39.5833vw;
          }
        }
      }
      .servicesCard{
        margin: 2.3958vw auto 0;
        max-width: 39.5833vw;
        &-in{
          padding: 0 1.0417vw;
          a{
            padding: 0 .5208vw;
          }
          &-image{
            box-shadow: 0 .1042vw .2083vw rgba(0,0,0,.25);
            &:hover{
              box-shadow: 0 .2604vw .2604vw rgba(0,0,0,.45);
              transform: translateY(-0.2604vw);
            }
          }
          &.hot{
            .servicesCard-in-image{
              &::before{
                // padding: 1.0417vw 1.5625vw 0;
                // font-size: .625vw;
              }
            }
          }
          &-name{
            padding: .5208vw 0 2.0833vw;
            font-size: .8333vw;
          }
          &>.router-link-exact-active{
            .servicesCard-in-image{
              box-shadow: 0 .2604vw .2604vw rgba(0,0,0,.45);
              transform: translateY(-0.2604vw);
            }
          }
        }
        &.isMenu{
          .servicesCard-in{
            padding: 0 .3125vw;
            &-name{
              font-size: .7813vw;
              padding: .4167vw 0;
            }
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
  .index-dentalServices{
    padding: 100px 0 0;
    &-indexshow{
      padding: 0;
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
        margin: 30px auto 0;
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
          &.hot{
            .servicesCard-in-image{
              &::before{
                padding: 30px 0 0;
                left: -20px;
                top: -25px;
                width: 90px;
                text-align: center;
              }
            }
          }
          &-name{
            font-size: 16px;
            padding: 10px 0 30px;
          }
        }
      }
    }
  }
}
</style>