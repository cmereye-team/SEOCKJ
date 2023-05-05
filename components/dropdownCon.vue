<script lang="ts" setup>
const dropdownCategoryText = ref('所有類別')

// 所有类别枚举
const dropdownCategoryLists = [
  {
    name: '所有類別'
  },
  {
    name: '全科牙科'
  },
  {
    name: '種植牙科'
  },
  {
    name: '矯齒牙科'
  },
  {
    name: '美容牙科'
  },
  {
    name: '兒童牙科'
  }
]
let dropdownCategory = ref(false)
const handleDropdownCategory = (_data: any) =>{
  // console.log(_data)
  dropdownCategoryText.value = _data.name
  dropdownCategory.value = false
  // console.log('执行了下拉框事件handleDropdownCategory')
}


const dropdownMonthText = ref('所有月份')

// 所有月份枚举
const dropdownMonthLists = [
  {
    name: '所有月份'
  },
  {
    name: '一月份'
  },
  {
    name: '二月份'
  },
  {
    name: '三月份'
  },
  {
    name: '四月份'
  },
  {
    name: '五月份'
  },
  {
    name: '六月份'
  },
  {
    name: '七月份'
  },
  {
    name: '八月份'
  },
  {
    name: '九月份'
  },
  {
    name: '十月份'
  },
  {
    name: '十一月份'
  },
  {
    name: '十二月份'
  }
]
let dropdownMonth = ref(false)
const handleDropdownMonth = (_data: any) =>{
  // console.log('执行了下拉框事件handleDropdownMonth')
  dropdownMonthText.value = _data.name
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
          <li v-for="(categoryItem,categoryIndex) in dropdownCategoryLists" :key="categoryIndex" @click="handleDropdownCategory(categoryItem)">
            {{categoryItem.name}}
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
          color: #4D4D4D;
          padding: 5px 0;
          &:not(:last-child){
            border-bottom: 1px solid #FFF1F0;
          }
          &:hover{
            color: #FFA09E;
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