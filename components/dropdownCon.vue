<script lang="ts" setup>
import service from '~/assets/js/service'
import { defineEmits } from 'vue'
let dropdownCategoryText = ref('所有類別')

// 所有类别枚举
const serviceLists = service.map(item=>{
    return {
      name: item.name
    }
  })
const dropdownCategoryLists = [
  {
    name: 'components.dropdownCon.dropdownCategoryLists_1'
  },
  ...serviceLists
]
let dropdownCategory = ref(false)
const handleDropdownCategory = (_data: any) =>{
  // console.log(_data)
  dropdownCategoryText.value = _data
  emits('changeCur', {
    type: dropdownCategoryText.value,
    date: dropdownMonthLable.value,
  })
  dropdownCategory.value = false
  // console.log('执行了下拉框事件handleDropdownCategory')
}


let dropdownMonthText = ref('所有月份')
let dropdownMonthLable = ref('0')

// 所有月份枚举
const dropdownMonthLists = [
  {
    name: '所有月份',
    label: '0',
  },
  {
    name: '一月份',
    label: 'JAN',
  },
  {
    name: '二月份',
    label: 'FWB',
  },
  {
    name: '三月份',
    label: 'MAR',
  },
  {
    name: '四月份',
    label: 'APR',
  },
  {
    name: '五月份',
    label: 'MAY',
  },
  {
    name: '六月份',
    label: 'JUN',
  },
  {
    name: '七月份',
    label: 'JUL',
  },
  {
    name: '八月份',
    label: 'AUG',
  },
  {
    name: '九月份',
    label: 'SPT',
  },
  {
    name: '十月份',
    label: 'OCT',
  },
  {
    name: '十一月份',
    label: 'NOV',
  },
  {
    name: '十二月份',
    label: 'DEC',
  }
]

const emits = defineEmits(['changeCur'])

let dropdownMonth = ref(false)
const handleDropdownMonth = (_data: any) =>{
  // console.log('执行了下拉框事件handleDropdownMonth')
  dropdownMonthText.value = _data.name
  dropdownMonthLable.value = _data.label
  emits('changeCur', {
    type: dropdownCategoryText.value,
    date: _data.label
  })
  dropdownMonth.value = false
}

const aa = () => {
  // console.log('点击了下拉框')
  dropdownCategory.value = !dropdownCategory.value
}

onMounted(()=>{
  document.addEventListener('mouseup',(e:any)=>{
    // console.log('点击页面',e)
    if(window.innerWidth>768){
      if(dropdownCategory.value){
        let _con_1 = document.getElementById('category')
        if(_con_1){
          if(!_con_1.contains(e.target)){
            dropdownCategory.value = false
          }
        }
      }
      if(dropdownMonth.value){
        let _con_2 = document.getElementById('month')
        if(_con_2){
          if(!_con_2.contains(e.target)){
            dropdownMonth.value = false
          }
        }
      }
    }
  })
})
</script>


<template>
  <div class="dropdown">
    <div class="dropdown-in">
      <div class="dropdown-in-content" id="category" @click="aa">
        <div class="dropdown-in-title">{{dropdownCategoryText}}</div>
        <div class="dropdown-in-icon"></div>
      </div>
      <div class="dropdown-in-itemBox" v-show="dropdownCategory">
        <ul>
          <li v-for="(categoryItem,categoryIndex) in dropdownCategoryLists" :key="categoryIndex" @click="handleDropdownCategory($t(categoryItem.name))">
            {{$t(categoryItem.name)}}
          </li>
        </ul>
      </div>
    </div>
    <div class="dropdown-in">
      <div class="dropdown-in-content" id="month" @click="dropdownMonth = !dropdownMonth">
        <div class="dropdown-in-title">{{dropdownMonthText}}</div>
        <div class="dropdown-in-icon"></div>
      </div>
      <div class="dropdown-in-itemBox" v-show="dropdownMonth">
        <ul>
          <li v-for="(monthItem,monthIndex) in dropdownMonthLists" :key="monthIndex" @click="handleDropdownMonth(monthItem)">
            {{monthItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown{
  display: flex;
  align-items: flex-end;
  &-in{
    width: 225px;
    height: 39px;
    line-height: 39px;
    border: 1px solid #CBCBCB;
    border-radius: 5px;
    margin-left: 20px;
    padding: 0 13px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &-content{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-title{
      font-family: 'Arial';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
    }
    &-icon{
      width: 10px;
      height: 10px;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      transform: rotate(-45deg);
      margin-bottom: 5px;
    }
    &-itemBox{
      position: absolute;
      top: 39px;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 15px;
      z-index: 5;
      ul{
        width: 225px;
        background: #FFFFFF;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
        padding: 0 15px;
        box-sizing: border-box;
        border-radius: 5px;
        li{
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 160%;
          color: #666666;
          padding: 5px 0;
          &:not(:last-child){
            border-bottom: 1px solid var(--indexColor2);
          }
          &:hover{
            color: var(--indexColor1);
          }
        }
        &::before{
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: transparent transparent #fff transparent;
          position: absolute;
          top: -5px;
          left: 30%;
          filter: drop-shadow(0px -3px 3px rgba(0, 0, 0, 0.15));
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .dropdown{
    flex-direction: column;
    margin-top: 30px;
    &-in{
      width: 100%;
      border-left: none;
      border-right: none;
      border-radius: 0;
      display: block;
      padding: 0 30px;
      height: auto;
      &:last-child{
        border-top: none;
      }
      &-content{
        justify-content: flex-start;
      }
      &-title{
        margin-right: 10px;
        font-size: 1rem;
        font-weight: 400;
      }
      &-itemBox{
        position: static;
        width: 100%;
        transform: none;
        padding-top: 0;
        ul{
          width: 100%;
          border-radius: 0;
          display: block;
          background: none;
          box-shadow: none;
          padding: 0;
          li{
            width: 100%;
            font-size: 1rem;
            font-weight: 400;
            &:not(:last-child){
              border-bottom: none;
            }
          }
          &::before{
            content: '';
            width: 0px;
            height: 0px;
            border: 0;
            position: absolute;
            top: 0;
            left: 0;
            filter: none;
          }
        }
      }
    }
  }
}
</style>