<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
// definePageMeta({
//   layout: 'page',
// })
useHead(() => ({
  title: capitalize(t('pages.404.title')),
}))
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <Error :code="404" />
    </div>
    <div style="width: 100%;margin-top:100px;">
      <div class="img_err">
      <img
        src="https://static.cmereye.com/imgs/2024/07/ce0c4dabdd6a15f8.png"
        alt=""
      />
    </div>
    <nuxt-link to="/" class="black">返回首頁</nuxt-link>
      <serviceCard :isIndexShow="true" />
    </div>
  </div>
</template>
