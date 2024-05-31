<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  bannerConfig:{
    type: Array,
    default(){
      return []
    }
  }
})
</script>

<template>
  <div class="pageBanner">
    <div class="pageBanner-image">
      <Swiper>
        <Swiper-silde v-for="(item,index) in bannerConfig" :key="index">
          <nuxtLink :to="[null,undefined,''].includes(item.link) ? '#' : item.link">
            <img :srcset="`${item.mbImg} 768w, ${item.pcImg}`" :src="item.pcImg" :alt="item.alt && item.alt" :title="item.title && item.title">
          </nuxtLink>
        </Swiper-silde>
      </Swiper>
    </div>
    <div class="pageBanner-line"></div>
    <div class="pageBanner-btn">
      <span>掛號</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@media (min-width: 768px) and (max-width: 1920px) {}
@media screen and (max-width: 768px) {}
</style>