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
     
    </div>
    <div style="width: 100%;margin-top:100px;">
      <div class="img_err" style="    text-align: center;">
      <img
        src="https://static.cmereye.com/imgs/2024/07/ce0c4dabdd6a15f8.png"
        alt="" style="    margin: auto;"
      />
         <nuxt-link to="/" class="cursor-pointer
  border transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-semibold
 text-white bg-primary-500 hover:bg-primary-400 border-primary-500 h-9 px-4 text-sm rounded"  style="    max-width: 300px;
    margin: 0 auto 30px;" >返回首頁</nuxt-link>
    </div> 
   
      <serviceCard :isIndexShow="true" />
    </div>
  </div>
</template>
