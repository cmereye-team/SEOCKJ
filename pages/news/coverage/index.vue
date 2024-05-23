<script lang="ts" setup>
let lists = ref([])
const getData = () =>{
    // for(var i = 0;i<10000;i++){
    //     lists.value.push(i)
    // }
}
onMounted(() => {
    getData()
})
if(process.server){
    getData()
}
</script>

<template> 
<div>
    <nuxt-link :to="`/news/article/${item}`" v-for="item in lists" :key="item">
    <p>{{item}}</p>
    </nuxt-link>
</div>

</template>


<style scoped>
    a:hover{
        background: #ccc;
    }
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>