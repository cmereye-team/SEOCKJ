<script lang="ts" setup>
useHead({
  title: "品牌理念"
})
//     
const posts = queryContent('blog')
console.log(posts)
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

export { }
</style>