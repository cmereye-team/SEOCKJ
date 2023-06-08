<script lang="ts" setup>
useHead({
  title: "牙科服務"
})
</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader
      :headerBg="'https://static.cmereye.com/imgs/2023/04/b398478bdd2d7847.jpg'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/aa3a789ff99a6ba3.jpg'"
    />
    <div class="service">
      <serviceCard :isIndexShow="true" />
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
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
