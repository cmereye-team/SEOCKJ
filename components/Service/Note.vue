<script lang="ts" setup>
defineProps({
  noteData:{
    type: Object,
    default(){
      return {
        title: '',
        lists: [],
        pageName: ''
      }
    }
  }
})
</script>

<template>
    <div :class="['note',noteData.pageName]">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{noteData.title}}</div>
      </div>
      <div class="note-in">
        <div class="note-in-lists">
          <div class="note-in-lists-item" v-for="(item,index) in noteData.lists" :key="index">
            <div>·</div>
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
.note{
  padding: 96px 0 0;
  &.children-dentistry{
    padding: 143px 0 0;
  }
  &-in{
    width: 100%;
    max-width: 1200px;
    margin: 35px auto;
    padding: 60px 0;
    background: var(--indexColor2);
    box-shadow: 0px 4px 8px var(--indexColor3);
    display: flex;
    justify-content: center;
    align-items: center;
    &-lists{
      width: 100%;
      max-width: 1000px;
      &-item{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 160%;
        color: #666666;
        display: flex;
        &>div:first-child{
          width: 20px;
        }
        &>div:last-child{
          flex: 1;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1920px) {
  .note{
    padding: 5vw 0 0;
    &.children-dentistry{
      padding: 7.4479vw 0 0;
    }
    &-in{
      max-width: 62.5vw;
      margin: 1.8229vw auto;
      padding: 3.125vw 0;
      box-shadow: 0px .2083vw .4167vw var(--indexColor3);
      &-lists{
        max-width: 52.0833vw;
        &-item{
          font-size: 1.25vw;
          &>div:first-child{
            width: 1.0417vw;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .note{
    padding: 96px 30px 0;
    box-sizing: border-box;
    &.children-dentistry{
      padding: 96px 30px 0;
    }
    &-in{
      padding: 23px 15px;
      box-sizing: border-box;
      min-height: 0;
      &-lists{
        &-item{
          font-weight: 500;
          font-size: 16px;
          margin-top: 5px;
          &>div:first-child{
            width: 15px;
          }
        }
      }
    }
  }
}
</style>