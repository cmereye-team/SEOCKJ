<script lang="ts" setup>

defineProps({
  introduceData: {
    type: Object,
    default() {
      return {
        title: '',
        content: '',
        mbImg: '',
        pcImg: '',
        tabNavName: '',
        pageName: '',
      }
    },
  },
})
</script>

<template>
  <div class="introduce bigPageCon">
    <div
      :class="['introduce-in', { noTitle: !introduceData.title }]"
      :style="{
        background: `url(${introduceData.pcImg}) no-repeat`,
        backgroundPosition: 'right top',
        backgroundSize: 'auto 100%',
      }"
    >
      <div class="tabNav noTitle pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院"
          ><span>{{ $t('pages.index.title') }}</span></nuxt-link
        >
        <nuxt-link :to="'/dental-service'" :title="$t('pages.dental-service.title')" :alt="('pages.dental-service.title')"
          ><span>{{ $t('pages.dental-service.title') }}</span></nuxt-link
        >
        <span :title="$t(introduceData.tabNavName)">{{ $t(introduceData.tabNavName) }}</span>
      </div>
      <div class="introduce-in-t mbBox">
        <img :src="introduceData.mbImg" alt="" />
      </div>
      <div class="introduce-in-l pageCon">
        <div :class="['title', introduceData.pageName]">
          {{ $t(introduceData.title) }}
        </div>
        <div :class="['content', introduceData.pageName]">
          {{ $t(introduceData.content) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce {
  &-in {
    margin-top: 45px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #666666;
      padding-bottom: 90px;
      .title {
        font-weight: 700;
        font-size: 30px;
        margin-top: 150px;
        &.teeth-whitening {
          margin-top: 10%;
        }
        &.rootCanal-test {
          margin-top: 96px;
          font-size: 50px;
        }
        &.periodontal-test{
          margin-top: 96px;
          font-size: 50px;
        }
        &.scaling-and-polishing-test ,&.orthodontics-test,&.veneers-test{
          margin-top: 96px;
          font-size: 50px;
        }
      }
      .content {
        font-weight: 600;
        font-size: 20px;
        max-width: 650px;
        width: 650px;
        margin-top: 68px;
        &.orthodontics {
          width: 409px;
        }
        &.periodontal-test{
          font-size: 28px;
        }
        &.rootCanal-test ,&.orthodontics-test,&.veneers-test{
          font-size: 28px;
        }
        &.teeth-whitening {
          white-space: pre-wrap;
        }
        &.scaling-and-polishing-test {
          white-space: pre-wrap;
        }
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 83px;
  &.noTitle {
    margin-top: 0;
  }
  a {
    &:not(:last-child)::after {
      content: '';
      width: 20px;
      height: 2px;
      margin: 0 10px;
      background: #cbcbcb;
      display: inline-block;
      vertical-align: middle;
      margin-top: -4px;
    }
  }
  & > span {
    cursor: pointer;
    color: var(--indexColor1);
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .introduce {
    &-in {
      margin-top: 2.3438vw;
      height: 32.709vw;
      max-height: 32.7083vw;
      &-l {
        padding-bottom: 4.6875vw;
        .title {
          font-size: 1.5625vw;
          margin-top: 7.8125vw;
          &.rootCanal-test {
            margin-top: 5vw;
            font-size: 2.6042vw;
          }
          &.periodontal-test{
            margin-top: 5vw;
            font-size: 2.6042vw;
          }
          &.scaling-and-polishing-test ,&.orthodontics-test,&.veneers-test{
            margin-top: 5vw;
            font-size: 2.6042vw;
          }
        }
        .content {
          font-size: 1.0417vw;
          max-width: 33.8542vw;
          width: 33.8542vw;
          margin-top: 3.5417vw;
          &.orthodontics {
            width: 21.3021vw;
          }
          &.periodontal-test{
            font-size: 1.4583vw;
          }
          &.rootCanal-test ,&.orthodontics-test,&.veneers-test{
            font-size: 1.4583vw;
          }
        }
      }
    }
  }
  .tabNav {
    font-size: 1.0417vw;
    margin-top: 4.3229vw;
    a {
      &:not(:last-child)::after {
        width: 1.0417vw;
        height: .1042vw;
        margin: 0 .5208vw;
        margin-top: -0.2083vw;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .introduce {
    &-in {
      height: auto;
      max-height: 300%;
      background: none !important;
      margin-top: 0;
      &.noTitle {
        margin-top: 0;
      }
      &-t {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &-l {
        padding-bottom: 0;
        .title {
          padding: 0 30px;
          font-weight: 700;
          font-size: 26px;
          margin-top: 0;
          &.teeth-whitening {
            margin-top: 0;
          }
          &.rootCanal-test,&.periodontal-test {
            margin-top: 0;
            font-size: 26px;
          }
          &.scaling-and-polishing-test, &.orthodontics-test,&.veneers-test{
            margin-top: 0;
            font-size: 26px;
          }
        }
        .content {
          font-size: 1rem;
          width: 95%;
          padding: 0 30px;
          margin-top: 30px;
          &.orthodontics {
            width: 95%;
          }
          &.rootCanal-test,&.periodontal-test,&.orthodontics-test,&.veneers-test {
            width: 100%;
            font-size: 16px;
          }
          &.scaling-and-polishing-test {
            white-space: pre-wrap;
            width: 100%;
            font-size: 16px;
          }
        }
      }
    }
  }
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 20px;
  }
}
</style>
