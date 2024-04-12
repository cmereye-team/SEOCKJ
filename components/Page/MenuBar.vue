<script lang="ts" setup>
import { defineProps } from "vue";
import { useElementBounding } from '@vueuse/core'
const menuBar = ref(null)
const { x, y, top, right, bottom, left, width, height } = useElementBounding(menuBar)
defineProps({
  str:{
    type: String,
    default: ''
  }
})

</script>

<template>
  <div class="menuBar" ref="menuBar">
    {{top}}
  </div>
</template>


<style lang="scss" scoped>
.menuBar{
  width: 100%;
  height: 67px;
  // position: fixed;
  // top: 0;
  // left: 0;
  background: var(--indexColor1);
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>