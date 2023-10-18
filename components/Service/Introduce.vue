<script lang="ts" setup>
import { defineProps } from 'vue'
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
        <nuxt-link :to="'/'"
          ><span>{{ $t('pages.index.title') }}</span></nuxt-link
        >
        <nuxt-link :to="'/dental-service'"
          ><span>{{ $t('pages.dental-service.title') }}</span></nuxt-link
        >
        <span>{{ $t(introduceData.tabNavName) }}</span>
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
        &.scaling-and-polishing-test {
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
        &.rootCanal-test {
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
@media (min-width: 768px) and (max-width: 1452px) {
  .introduce {
    &-in {
      margin-top: 3.5vw;
      &-l {
        padding-bottom: 7vw;
        .title {
          font-size: 2.2vw;
          margin-top: 6vw;
          &.rootCanal-test {
            margin-top: 5vw;
            font-size: 3.5vw;
          }
          &.scaling-and-polishing-test {
            margin-top: 5vw;
            font-size: 3.5vw;
          }
        }
        .content {
          font-size: 1.7vw;
          width: 33.85vw;
          margin-top: 4vw;
          &.orthodontics {
            width: 25vw;
          }
          &.rootCanal-test {
            width: 43vw;
            font-size: 1.8vw;
          }
          &.scaling-and-polishing-test {
            font-size: 1.4vw;
          }
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 6vw;
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
          &.rootCanal-test {
            margin-top: 0;
            font-size: 26px;
          }
          &.scaling-and-polishing-test {
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
          &.rootCanal-test {
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
