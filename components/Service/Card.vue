<script lang="ts" setup>
import serviceLists from '~/assets/js/service'
defineProps({
  isIndexShow: {
    type: Boolean,
    default: false,
  },
  isMenu: {
    type: Boolean,
    default: false,
  },
})
const servicesCardLists = serviceLists

const servicesCardPageData = {
  title: 'components.service.card.title',
  dentalServicesTitleIn: 'components.service.card.dentalServicesTitleIn',
  contextIn: 'components.service.card.contextIn',
}
</script>


<template>
  <div
    :class="[
      { 'index-dentalServices': true, isMenu: isMenu },
      { 'index-dentalServices-indexshow': isIndexShow },
    ]"
  >
    <div
      :class="[
        'index-dentalServices-in',
        'smallPageCon',
        { isIndexShow: !isIndexShow, isMenu: isMenu },
      ]"
    >
      <div class="title">
        <div class="index_title" v-if="isIndexShow">診療項目</div>
      </div>
      <div
        class="index-dentistryServices-in-title"
        v-if="!isIndexShow && !isMenu"
      >
        <div class="services_title">
          {{ $t(servicesCardPageData.dentalServicesTitleIn) }}
        </div>
      </div>
      <div class="context" v-if="!isMenu">
        <div class="context-in" v-if="!isIndexShow">
          {{ $t(servicesCardPageData.contextIn) }}
        </div>
        <div class="context-in isIndex" v-else>
          愛康健集團是大灣區專業牙科連鎖機構，其愛康健口腔醫院為香港政府納入長者醫療券大灣區試點。14間門診有超過20種牙科治療項目，專注為港服務超過29年。
        </div>
      </div>

      <div :class="{ servicesCard: true, isMenu: isMenu }">
        <div
          class="servicesCard-in"
          :class="{
            hot: item.isHot,
            cardName: $t(item.name) == '兒童牙科',
          }"
          v-for="(item, index) in servicesCardLists"
          :key="index"
        >
          <nuxt-link :to="item.link">
            <div class="servicesCard-in-image">
              <img :src="item.imgUrl" alt="" />
            </div>
            <div class="servicesCard-in-name">{{ $t(item.name) }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-dentistryServices-in-title {
  width: 100%;
  display: flex;
  justify-content: center;
}
.services_title {
  font-style: normal;
  position: relative;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  text-indent: 45px;
  color: #666666;
  background: url(@/assets/images/indexTitle_bg_3.png) no-repeat;
  background-size: auto 80%;
  padding-bottom: 15px;
}
.index-dentalServices {
  padding: 189px 0 0;
  &-indexshow {
    padding: 100px 0 0;
  }
  &-in {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .context {
      margin-top: 35px;
      &-in {
        margin: 0 auto;
        width: 100%;
        max-width: 700px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        text-align: center;
        &.isIndex {
          max-width: 760px;
        }
      }
    }
    .servicesCard {
      display: flex;
      flex-wrap: wrap;
      margin: 46px auto 0;
      width: 100%;
      max-width: 1330px;
      &-in {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 35px;
        box-sizing: border-box;
        a {
          width: 100%;
          height: 100%;
          padding: 0 10px;
          cursor: pointer;
        }
        &-image {
          width: 100%;
          height: 0;
          padding-top: 100%;
          position: relative;
          background: #fff1f0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
          border-radius: 50%;
          transition: all 0.3s;
          box-sizing: border-box;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: 70%;
            max-height: 70%;
          }
          &:hover {
            background: #fee6f1;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.45);
            transform: translateY(-5px);
          }
        }
        &.hot {
          .servicesCard-in-image {
            &::before {
              content: '熱門';
              position: absolute;
              width: 80px;
              height: 80px;
              left: -20px;
              top: -10px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              font-size: 30px;
              color: #fff620;
              background: url(@/assets/images/icon_70bg.svg) no-repeat;
              background-size: 100% 100%;
              z-index: 1;
            }
          }
        }
        &-name {
          padding: 10px 0 40px;
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          color: #666666;
          text-align: center;
          white-space: nowrap;
        }
        & > .router-link-exact-active {
          .servicesCard-in-image {
            background: #fee6f1;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.45);
            transform: translateY(-5px);
          }
        }
      }
      &.isMenu {
        margin-top: 0;
        padding: 0;
        .servicesCard-in {
          padding: 0 6px;
          &-name {
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
  &.isMenu {
    padding: 0px;
  }
}
.cardName {
  & > a {
    & > div:nth-child(1) {
      & > img {
        left: 45%;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1920px) {
  .services_title {
    font-size: 1.0417vw;
    text-indent: 2.3438vw;
    padding-bottom: 0.7813vw;
  }
  .index-dentalServices {
    padding: 9.8438vw 0 0;
    &-indexshow {
      padding: 5.2083vw 0 0;
    }
    &-in {
      .context {
        margin-top: 1.8229vw;
        &-in {
          font-size: 1.0417vw;
          &.isIndex {
            max-width: 39.5833vw;
          }
        }
      }
      .servicesCard {
        margin: 2.3958vw auto 0;
        max-width: 69.2708vw;
        &-in {
          padding: 0 1.8229vw;
          a {
            padding: 0 0.5208vw;
          }
          &-image {
            box-shadow: 0 0.1042vw 0.2083vw rgba(0, 0, 0, 0.25);
          }
          &.hot {
            .servicesCard-in-image {
              &::before {
                width: 4.1667vw;
                height: 4.1667vw;
                left: -1.0417vw;
                top: -0.5208vw;
                font-size: 1.5625vw;
              }
            }
          }
          &-name {
            padding: 0.5208vw 0 2.0833vw;
            font-size: 1.3542vw;
          }
        }
        &.isMenu {
          .servicesCard-in {
            padding: 0 0.3125vw;
            &-name {
              font-size: 0.7813vw;
              padding: 0.4167vw 0;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .index-dentistryServices-in-title {
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
  .index-dentalServices {
    padding: 100px 0 0;
    .title {
      justify-content: flex-start;
      padding: 0 20px;
    }
    &-indexshow {
      padding: 0;
    }
    &-in {
      align-items: flex-start;
      &.isIndexShow {
        align-items: center;
      }
      .context {
        margin-top: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        display: none;
        &-in {
          font-weight: 500;
          font-size: 16px;
          text-align: left;
          &.isIndex {
            display: none;
          }
        }
      }
      .servicesCard {
        padding: 0 15px;
        margin: 20px auto 0;
        box-sizing: border-box;
        &-in {
          width: calc(100% / 4);
          padding: 0 5px;
          a {
            padding: 0 7px;
          }
          &-image {
            img {
              max-width: 70%;
              max-height: 70%;
            }
          }
          &.hot {
            .servicesCard-in-image {
              &::before {
                font-size: 10px;
                width: 27px;
                height: 27px;
                left: -5px;
                top: -5px;
              }
            }
          }
          &-name {
            font-size: 14px;
            padding: 10px 0;
            // white-space: pre-wrap;
          }
          &:nth-of-type(13) {
            .servicesCard-in-name {
              white-space: pre-wrap;
            }
          }
        }
      }
    }
  }
}
</style>