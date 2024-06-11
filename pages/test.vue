<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
let _num = ref(0)
interface listType {
  height: number,
  id: number
}
let _columns = ref(4)
let _gap = ref(20)
let _lists = ref([] as Array<listType>)
let newLists:any = ref([])

let newsSaveData:any = ref([])

for(var _i = 0; _i<_columns.value; _i++){
  newsSaveData.value[_i] = {
    totalHeight: 0,
    lists: []
  }
}
const handleClick = () =>{
  _lists.value = []
  for(var i = 0;i < _num.value;i++){
    let h = Math.floor(Math.random()*100 + 100)
    let _obj = {
      height: h,
      id: i+1
    }
    _lists.value.push(_obj)
  }
  newLists.value = [
    ...newLists.value,
    ..._lists.value
  ]
  changeListsSaveDate(_lists)
}

const resetData = () =>{
  newsSaveData.value = []
  for(var _i = 0; _i<_columns.value; _i++){
    newsSaveData.value[_i] = {
      totalHeight: 0,
      lists: []
    }
  }
  changeListsSaveDate(newLists)
}

const changeListsSaveDate = (lists) =>{
  lists.value.forEach((item,index) => {
    let minValue = Math.min(...newsSaveData.value.map(obj => obj.totalHeight));
    let _index = newsSaveData.value.findIndex(obj=>obj.totalHeight === minValue)
    newsSaveData.value[_index].totalHeight += item.height
    newsSaveData.value[_index].lists.push(item)
  });
}

watch(width,(n,o)=>{
  if(n<680 && _columns.value !== 2){
    _columns.value = 2
    resetData()
  }else if((n>=680 && n<1200)  && _columns.value !== 3){
    _columns.value = 3
    resetData()
  }else if(n>=1200 && _columns.value !== 4){
    _columns.value = 4
    resetData()
  }
})

//------------------------------------------
let cur = ref('')

const handleccc = (idx) =>{
  cur.value = String(idx+1)
  changeContextOrder()
}

const contextOrder = ref(5)
let isPc = ref(false)
const changeContextOrder = () =>{
  if(isPc.value){
    if(Number(cur.value) <= 5 ){
      contextOrder.value = 5
    }else if(Number(cur.value) > 5 && Number(cur.value)<=10){
      contextOrder.value = 10
    }else{
      contextOrder.value = 14
    }
  }else{
    if(Number(cur.value) <= 3 ){
      contextOrder.value = 3
    }else if(Number(cur.value) > 3 && Number(cur.value)<=6){
      contextOrder.value = 6
    }else if(Number(cur.value) > 6 && Number(cur.value)<=9){
      contextOrder.value = 9
    }else if(Number(cur.value) > 9 && Number(cur.value)<=12){
      contextOrder.value = 12
    }else{
      contextOrder.value = 14
    }
  }
  
}

let _lists_2:any = ref([])
onMounted(()=>{
  for(var i = 0;i < 13;i++){
    _lists_2.value.push({idx: i})
  }
})

</script>

<template>
  <div class="test pageCon">
    <div class="test-t">
      <input type="text" v-model="_num">
      <button @click="handleClick">生成</button>
    </div>
    <div class="test-b" :style="{'grid-template-columns':`repeat(${_columns},1fr)`}">
      <div class="list" v-for="(item,index) in newsSaveData" :key="index">
        <div class="list-in" :style="{
          height: `${listsItem.height}px`
        }" v-for="(listsItem,listsIndex) in item.lists" :key="listsIndex">
          id:{{listsItem.id}}<br>
          h:{{listsItem.height}}
        </div>
      </div>
    </div>
    <div class="test-2">
      <div class="test-2-in" v-for="(item,index) in _lists_2" :style="{order:index+1}" :key="index" @click="handleccc(index)">
        {{index+1}}
      </div>
      <div class="test-2-in context" v-if="cur !== ''" :style="{order: contextOrder}" @click="cur = ''">
        {{cur}}
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.test{
  padding: 100px 0;
  &-t{
    display: flex;
    max-width: 580px;
    margin: 100px auto;
  }
  &-b{
    max-width: 580px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    position: relative;
    gap: 20px;
    .list{
      width: 100%;
      &-in{
        // height: 100px;
        background: #ccc;
        margin-bottom: 20px;
      } 
    }
  }
}
.test-2{
  // display: grid;
  display: none;
  grid-template-columns: repeat(5,1fr);
  gap:20px;
  max-width: 580px;
  margin: 100px auto;
  &-in{
    height: 100px;
    width: 100%;
    background: #ccc;
    &.context{
      width: 100%;
      grid-column: span 5;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .test-2{
    grid-template-columns: repeat(3,1fr);
    &-in{
      &.context{
        grid-column: span 3;
      }
    }
  }
}
</style>