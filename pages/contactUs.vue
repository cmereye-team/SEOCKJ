<script lang="ts" setup>
useHead({
  title: "聯絡我們"
})
</script>

<template>
  <div class="bigPageCon">
  <!-- <div> -->
    <PageHeader
      :headerBg="'https://static.cmereye.com/imgs/2023/04/b398478bdd2d7847.jpg'"
      :mbBg="'https://static.cmereye.com/imgs/2023/04/aa3a789ff99a6ba3.jpg'"
    />
    <div class="contactUs">
      <ContactUs />
      <AboutUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .contactUs{
    background: #fff;
    padding-bottom: 143px;
  }
  @media screen and (max-width: 768px) {
    .contactUs{
      padding-bottom: 90px;
    }
  }
</style>

