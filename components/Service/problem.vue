<script lang="ts" setup>

defineProps({
  problemData: {
    type: Object,
    default() {
      return {
        title: '',
        lists: [],
      }
    },
  },
})
const activeNames = ref(0)
</script>

<template>
  <div class="problem">
    <div class="dentistryServices-title problem-title">
      <div class="dentistryServices-title-in bb problem-title-in">
        {{ $t(problemData.title) }}
      </div>
    </div>
    <div class="problem-in smallPageCon">
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item
          v-for="(problemItem, problemIndex) in problemData.lists"
          :key="problemIndex"
          :name="problemIndex"
        >
          <template #title>
            <div class="problem-in-title">
              <div>Q</div>
              <div>{{ $t(problemItem.Q) }}</div>
              <div>
                <img src="@/assets/images/icon_91.png" alt="" />
              </div>
            </div>
          </template>
          <div class="problem-in-context">
            <span>A</span>
            <span>{{ $t(problemItem.A) }}</span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.problem {
  margin-top: 98px;
  &-in {
    margin-top: 35px;
    width: 100%;
    max-width: 1224px;
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & > div:nth-of-type(1) {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        color: var(--indexColor1);
        margin-left: 32px;
        margin-top: -6px;
      }
      & > div:nth-of-type(2) {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #505050;
        max-width: calc(100% - 70px);
        flex: 1;
        margin-left: 20px;
        text-align: center;
      }
      & > div:nth-of-type(3) {
        margin-right: 32px;
      }
    }
    &-context {
      display: flex;
      & > span:first-child {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 160%;
        color: var(--indexColor1);
        margin-left: 32px;
        margin-top: 20px;
      }
      & > span:last-child {
        flex: 1;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 45px 82px 26px 19px;
        white-space: pre-wrap;
      }
    }
  }
}
:deep(.el-collapse) {
  border: none;
}
:deep(.el-collapse-item) {
  margin-bottom: 4px;
  border: none;
}
:deep(.el-collapse-item__wrap) {
  border: none;
}
:deep(.el-collapse-item__header) {
  padding: 12px 0;
  background: var(--indexColor2);
  border: none;
  box-sizing: initial;
  line-height: 160%;
  height: auto;
  min-height: 45px;
}
:deep(.el-collapse-item__header.is-active) {
  background: var(--indexColor1);
  .problem-in-title > div:nth-of-type(1) {
    color: var(--indexColor2);
  }
  .problem-in-title > div:nth-of-type(2) {
    color: #ffffff;
  }
}
:deep(.el-icon) {
  display: none;
}
@media (min-width: 768px) and (max-width: 1920px) {
  .problem {
    margin-top: 5.1042vw;
    &-in {
      margin-top: 1.8229vw;
      max-width: 63.75vw;
      &-title {
        & > div:nth-of-type(1) {
          font-size: 2.0833vw;
          margin-left: 1.6667vw;
          margin-top: -0.3125vw;
        }
        & > div:nth-of-type(2) {
          font-size: 1.25vw;
          max-width: calc(100% - 3.6458vw);
          margin-left: 1.0417vw;
        }
        & > div:nth-of-type(3) {
          margin-right: 1.6667vw;
        }
      }
      &-context {
        & > span:first-child {
          font-size: 2.0833vw;
          margin-left: 1.6667vw;
          margin-top: 1.0417vw;
        }
        & > span:last-child {
          font-size: 1.0417vw;
          padding: 2.3438vw 4.2708vw 1.3542vw .9896vw;
        }
      }
    }
  }
  :deep(.el-collapse-item__header) {
    padding: .625vw 0;
    min-height: 2.3438vw;
  }
}
@media screen and (max-width: 768px) {
  .problem {
    margin-top: 90px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-in {
      margin-top: 30px;
      width: calc(100% - 60px);
      &-title {
        & > div:nth-of-type(1) {
          font-size: 26px;
          margin-left: 3px;
        }
        & > div:nth-of-type(2) {
          font-size: 16px;
          margin-left: 0px;
          text-align: left;
        }
        & > div:nth-of-type(3) {
          width: 13px;
          margin-right: 8px;
        }
      }
      &-context {
        & > span:first-child {
          margin-left: 3px;
          font-size: 26px;
        }
        & > span:last-child {
          padding: 20px 17px 1px 14px;
          font-size: 14px;
        }
      }
    }
  }
  :deep(.el-collapse-item__header) {
    // height: 43px;
    min-height: 43px;
    box-sizing: border-box;
  }
}
</style>
