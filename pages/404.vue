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
      <serviceCard :isIndexShow="true" />
    </div>
  </div>
</template>
