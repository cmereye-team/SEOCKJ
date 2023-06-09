<script lang="ts" setup>
useHead({
  title: "消息提醒 | 口腔專科醫院",
})


</script>

<template>
  <div class="messagePage">
    <!-- <PageHeader />  -->
    <div class="messagePage-in">
      <div class="messagePage-in-context">
        表單提交成功！我們會盡快回覆閣下。
      </div>
      <div class="messagePage-in-btn">
        <nuxt-link :to="'/'">返回首頁</nuxt-link>
      </div>
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
.messagePage{
  &-in{
    background: #fff;
    min-height: calc(100vh - 400px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-context{
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 160%;
      color: #4D4D4D;
    }
    &-btn{
      margin-top: 100px;
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: #4D4D4D;
      border-bottom: 2px solid #4D4D4D;
    }
  }
}
</style>