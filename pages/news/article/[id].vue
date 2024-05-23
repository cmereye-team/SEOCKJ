<script lang="ts" setup>
const route = useRoute()
let num = ref('')
num.value = route.params.id

</script>

<template>
    <div>
        <p>页面Id为：{{num}}</p>
    </div>
</template>


<style scoped>
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>