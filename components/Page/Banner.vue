<script lang="ts" setup>
// import { defineProps } from "vue";
defineProps({
  config:{
    type: Object,
    default(){
        return {
            pc: 'https://static.cmereye.com/imgs/2024/05/0b20ccceba0bd119.webp',
            mb: ''
        }
    }
  },
  btn: {
    type: String,
    default: '掛號'
  }
})
</script>

<template>
    <div class="pagebanner">
        <div class="pagebanner-in"><img :src="config.pc" alt=""></div>
        <div class="pagebanner-btn">
            <!-- <PageAnimBtnTypeTwo :str="btn" /> -->
        </div>
    </div>
</template>


<style lang="scss" scoped>
.pagebanner{
  width: 100%;
  &-in{
    width: 100%;
    background: url(https://static.cmereye.com/imgs/2024/05/0b20ccceba0bd119.webp) no-repeat;
    background-size: 100% auto;
    background-attachment: fixed;
  }
  img{
    width: 100%;
    opacity: 0;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>