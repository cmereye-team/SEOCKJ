<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
AppSetup()
const app = useAppConfig() as AppConfigInput
useHead({
  title: app.name,
  titleTemplate: "%s | 深圳愛康健口腔醫院 | 香港官方網站",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: '愛康健集團是大灣區牙科連鎖機構，其口腔醫院為香港政府指定長者醫療券大灣區試點。（香港熱線: 3892 5049）14間門診有超過20種牙科治療項目，專注為港服務超過29年，可線上預約。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳愛康健口腔醫院 愛康健齒科集團 基楚牙科 美容牙科 深圳牙科 醫療券 長者醫療券大灣區試點 深圳睇牙 深圳整牙 種植牙 假牙 洗牙 補牙 拔牙 智慧齒 杜牙根 根管治療 兒童牙科 牙齒美白 牙齒檢查 矯齒 箍牙 牙醫 牙医 深圳 羅湖 朱咪咪 掛號收費 牙科價目表 線上預約 愛康健齒科,深圳爱康健口腔医院,深圳市口腔医院,深圳牙齿矫正多少钱,愛康健口腔醫院,希玛爱康健,深圳口腔医院,深圳牙科医院,深圳种植牙,深圳植牙價錢,愛康健,香港長者醫療券,愛康健牙科,愛康健牙科中心,愛康健牙科診所',
    },
    {
      name: 'author',
      content: '愛康健口腔醫院',
    },
    { property: 'og:image', content: 'https://www.ckjofficial.com/favicon.ico' }
  ],
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/x-icon', href: 'https://www.ckjofficial.com/favicon.ico' },
    { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://www.ckjofficial.com/favicon.ico' },
  ],
  script:[
    { type: 'text/javascript', src: '/common.js' },
  ]
})

</script>

<template>
  <Html lang="zh-hk">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
    >
      <NuxtLayout>
        <PageMenuBar />
        <PageMenu />
        <NuxtPage />
        <ContactForm-new />
        <PageFooter />
        <PageNavbar />
      </NuxtLayout>
      <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2035768320098958&ev=PageView&noscript=1" /></noscript>
    </Body>
  </Html>
</template>
