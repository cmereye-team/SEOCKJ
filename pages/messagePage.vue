<script lang="ts" setup>
useHead({
  title: "消息提醒 | 口腔專科醫院",
})
const router = useRouter()
let _s = ref(5)
const change_s = () =>{
  clearInterval(_timer)
  var _timer:any = setInterval(()=>{
    if(_s.value>0){
      _s.value--
    }else{
      clearInterval(_timer)
      router.go(-1)
    }
  },1000)
}
onMounted(()=>{
  change_s()
})
</script>

<template>
  <div class="messagePage">
    <!-- <PageHeader />  -->
    <div class="messagePage-in">
      <div class="messagePage-in-context">
        表單提交成功！我們會盡快回覆閣下。
      </div>
      <div class="s">
        <span>{{_s}} </span>秒后返回上一页
      </div>
      <div class="messagePage-in-btn">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院">返回首頁</nuxt-link>
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
      color: #666666;
    }
    .s{
      margin-top: 30px;
      font-size: 26px;
      color: #666666;
      span{
        color: var(--indexColor1);
      }
    }
    &-btn{
      margin-top: 30px;
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: #666666;
      border-bottom: 2px solid #666666;
    }
  }
}
@media only screen and (max-width: 768px) {
  .messagePage{
    &-in{
      &-context{
        font-size: 30px;
        padding: 0 30px;
        text-align: center;
      }
      .s{
        font-size: 20px;
      }
    }
  }
}
</style>