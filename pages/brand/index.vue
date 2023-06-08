<script lang="ts" setup>
useHead({
  title: "品牌理念 | 口腔專科醫院",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '希瑪愛康健作為深圳口腔專科醫院，秉承著“專科·專業”的服務宗旨，對醫療資源進行了科學、合理的整合。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '希瑪愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 希瑪愛康健',
    },
  ]
})
//     
// const posts = queryContent('blog')
// console.log(posts)
</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader />
    <div class="brandMind">
      <div>
        <!-- posts: {{ posts.params }} -->
      </div>
      <div>
        <!-- <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
        </li> -->
      </div>
      <brandConcept />
      <AboutUs />
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .brandMind{
    background: #fff;
    overflow: hidden;
    padding-bottom: 143px;
  }
  @media screen and (max-width: 768px) {
    .brandMind{
      padding-bottom: 90px;
    }
  }

</style>