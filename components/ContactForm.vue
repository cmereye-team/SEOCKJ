<script lang="ts" setup>
import { defineProps } from 'vue'
import service from '~/assets/js/service'
import { Body } from '../.nuxt/components'
import { Md5 } from "ts-md5";

const props = defineProps({
  service: {
    type: String,
    default: '種植牙',
  },
})

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  gender: '',
})

// Md5.hashStr('...')
const timestamp = Date.parse(new Date().toString())

const onSubmit = () => {
  // console.log('submit!', form)
  const { data: form } = useFetch('https://admin.ckjhk.com/api.php/cms/addform/fcode/3',{
    method: 'post',
    query:{
      // appid:'ckjhk',
      // timestamp: timestamp,
      // signature: Md5.hashStr(Md5.hashStr('ckjhk'+'ckjhk'+timestamp)),
      contact_name: 'test',
      // phone: 'test',
      // service: 'test',
      // email: 'test',
      // gender: 'test',
    },
    params:{
      // name: 'test',
      // phone: 'test',
      // service: 'test',
      // email: 'test',
      // gender: 'test',
    }
  });
  // console.log(data)
  // const { data: form } = useFetch('https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/CKJ');
}

const serviceLists = service.map(item=>item.name)

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

onMounted(() => {
  form.service = props.service
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})
</script>

<template>
  <div class="contactForm">
    <div class="contactForm-bg">
      <div class="contactForm-title">
        <span>立即預約，填寫你的資料</span>
        <span>展開你的健康微笑之旅</span>
      </div>
      <div class="contactForm-in">
        <el-form
          :model="form"
          label-width="120px"
          label-position="top"
          action="https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/CKJ"
          method="post"
        >
          <div class="firstFormItem">
            <el-col :span="windowWidth>768 ? 12:24">
              <el-form-item label="姓名：">
                <el-input v-model="form.name" name="name" />
              </el-form-item>
            </el-col>
            <el-col :span="3"></el-col>
            <el-col :span="windowWidth>768 ? 9:24">
              <el-form-item label="稱呼：">
                <el-radio-group v-model="form.gender">
                  <el-radio label="先生" />
                  <el-radio label="女士" />
                  <el-radio label="小姐" />
                </el-radio-group>
              </el-form-item>
            </el-col>
          </div>
          <el-form-item label="電話號碼：">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="電郵地址：">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="服務選擇：" label-width="100%">
            <el-select v-model="form.service" placeholder="请选择服務">
              <el-option
                :label="serviceItem"
                v-for="serviceItem in serviceLists"
                :key="serviceItem"
                :value="serviceItem"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit">提交表格</el-button>
            <!-- <button type="submit">提交表格</button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.contactForm {
  margin-top: 54px;
  &-bg {
    padding: 71px 0 75px;
    background: linear-gradient(
      270deg,
      rgba(255, 241, 240, 0) 2.6%,
      rgba(255, 241, 240, 0.7) 23.89%,
      rgba(255, 241, 240, 0.7) 75.33%,
      rgba(255, 241, 240, 0) 97.4%
    );
  }
  &-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      font-style: normal;
      line-height: 160%;
      &:first-child {
        font-weight: 500;
        font-size: 20px;
        color: #4d4d4d;
      }
      &:last-child {
        font-weight: 700;
        font-size: 26px;
        color: #ffa09e;
      }
    }
  }
  &-in {
    width: calc(100% - 60px);
    max-width: 840px;
    margin: 61px auto 0;
    .firstFormItem{
      display: flex;
      flex-wrap: wrap;
    }
    :deep(.el-form-item) {
      margin-bottom: 28px;
    }
    :deep(.el-form-item__label) {
      font-family: 'Noto Serif HK';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      color: #4d4d4d;
    }
    :deep(.el-select) {
      width: 100%;
    }
    :deep(.el-input) {
      height: 35px;
    }
    :deep(.el-radio-group) {
      width: 100%;
      justify-content: space-between;
    }
    :deep(.el-radio__label) {
      font-family: 'Noto Serif HK';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      color: #4d4d4d;
    }
    :deep(.el-radio){
      --el-radio-input-border-color-hover: #FFA09E;
    }
    :deep(.el-radio__input.is-checked .el-radio__inner){
      border: 1px solid #CBCBCB;
      background: #fff;
    }
    :deep(.el-radio__inner::after){
      width: 100%;
      height: 100%;
      background: #FFA09E;
      border: 1px solid #fff;
    }
    :deep(.el-button) {
      font-family: 'Noto Serif HK';
      margin: 52px auto 0;
      width: 350px;
      height: 60px;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      color: #ffa09e;
      background-color: transparent;
      border-color: #cbcbcb;
      &:hover {
        color: #fff;
        background-color: #ffa09e;
      }
      &:active {
        color: #fff;
        background-color: #ffa09e;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (max-width: 768px) {
  .contactForm {
    &-bg {
      padding: 50px 0;
      background: #fff;
    }
    span {
      &:first-child {
        font-size: 16px;
      }
      &:last-child {
        font-weight: 500;
        font-size: 20px;
      }
    }
    &-in {
      margin: 41px auto 0;
      :deep(.el-form-item) {
        margin-bottom: 24px;
      }
      :deep(.el-form-item__label) {
        font-size: 16px;
      }
      :deep(.el-radio__label) {
        font-size: 16px;
      }
      :deep(.el-button) {
        width: 137px;
        height: 40px;
        font-size: 16px;
        margin: 30px auto 0;
      }
    }
  }
}
</style>