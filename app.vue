<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput

useHead({
  title: app.name,
  titleTemplate: "%s | 深圳愛康健口腔醫院",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: '爱康健',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  script:[
    { type: 'text/javascript', src: '/common.js' }
  ]
})
onMounted(()=>{
  // 监听网络是否关闭
  // window.addEventListener('offline',(e)=>{
  //   console.log(e)
  // })

  // 全局弹窗
  // ElMessage({
  //   showClose: true,
  //   message: '表單提交成功！我們會盡快回覆閣下。',
  //   type: 'success',
  //   duration: 0
  // })
  // document.onkeydown = (even:any) =>{
  //   if(even.key === 'F9'){
  //     if(locale.value === 'zh')
  //       locale.value = 'hk'
  //     else
  //       locale.value = 'zh'
  //   }
  // }
  // locale.value = 'hk'
})
</script>

<template>
  <Html lang="zh-hk">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2035768320098958&ev=PageView&noscript=1" /></noscript>
    </Body>
  </Html>
</template>
