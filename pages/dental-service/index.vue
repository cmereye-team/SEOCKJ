<script lang="ts" setup>
useHead({
  title: "牙科服務"
})
</script>

<template>
  <div>
    <div class="service">
      <serviceCard :isIndexShow="true" />
      <NewAddress />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .service{
    background: #fff;
    padding-bottom: 143px;
  }
  @media screen and (max-width: 768px) {
    .service{
      padding-bottom: 90px;
    }
  }
</style>
