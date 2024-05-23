<script lang="ts" setup>
// import { defineProps } from "vue";
// defineProps({
//   str:{
//     type: String,
//     default: ''
//   }
// })
</script>

<template>
    <div class="container">
        <slot name="banner"></slot>
        <PageMenu />
        <slot name="pageIn" ></slot>
        <PageFooter />
    </div>
</template>


<style lang="scss" scoped>
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>