<script lang="ts" setup>
import { defineProps } from 'vue'
import service from '~/assets/js/service'
// import { Md5 } from "ts-md5";
// Md5.hashStr('...')
import type { FormInstance, FormRules } from 'element-plus'

const props = defineProps({
  service: {
    type: String,
    default: '', //種植牙
  },
})

const form = reactive({
  name: '',
  gender: '',
  phone: '',
  email: '',
  service: '',
})


const timestamp = Date.parse(new Date().toString())

var valiemail = (rule:any, value:any, callback:any) => {
  const mailReg = /^([a-zA-Z0-9_-_._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (!value) {
    return callback(new Error('請填寫您的電郵地址'));
    callback();
  }
  setTimeout(() => {
    if (mailReg.test(value.trim())) {
      // this.$refs.ruleForm.validateField('checkemail');
      callback();
    } else {
      callback(new Error('請填寫正確的電郵地址'));
    }
  }, 100);
};
const formLoading = ref(false)
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [{ required: true, message: '請填寫您的姓名', trigger: 'blur' }],
  gender: [{ required: true, message: '請選擇稱呼', trigger: 'change' }],
  phone: [{ required: true, message: '請填寫您的電話號碼', trigger: 'blur' }, { min: 8, max: 11, message: '請填寫正確的電話號碼', trigger: 'blur' }],
  email: [{ type: 'email', required: true, validator: valiemail, trigger: 'blur' }],
  service: [{ required: true, message: '請選擇服務', trigger: 'change' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formLoading.value = true
  await formEl.validate((valid: any, fields:any) => {
    if (valid) {
      // console.log('submit!')
      onSubmit()
    } else {
      // console.log('error submit!', fields)
      formLoading.value = false
    }
  })
}

// interface contactUs {
//   value: string
// }

const onSubmit = async () => {
  // console.log('submit!', form)
  let _formData = new FormData()
  let _form = form
  _formData.append('contact_name',_form.name)
  _formData.append('gender',_form.gender)
  _formData.append('phone',_form.phone)
  _formData.append('email',_form.email)
  _formData.append('service',_form.service)
  const { data }:any = await useFetch('https://admin.ckjhk.com/api.php/cms/addform/fcode/3',{
    method: 'post',
    body: _formData
  });
  // console.log(JSON.parse(data.value))
  let res = JSON.parse(data.value)
  if (res) {
    if(res.code){
      ElMessage({
        showClose: true,
        message: res.data,
        type: 'success',
      })
    }else{
      ElMessage({
        showClose: true,
        message: res.data,
        type: 'error',
      })
    }
  }else{
    ElMessage({
      showClose: true,
      message: '表单异常',
      type: 'error',
    })
  }
  formLoading.value = false
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
  <div class="contactForm" id="contactUsFormNav">
    <div class="contactForm-bg">
      <div class="contactForm-title">
        <span>立即預約，填寫你的資料</span>
        <span>展開你的健康微笑之旅</span>
      </div>
      <div class="contactForm-in">
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
          label-width="120px"
          label-position="top"
          action="https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/CKJ"
          method="post"
        >
          <div class="firstFormItem">
            <el-col :span="windowWidth>768 ? 12:24">
              <el-form-item label="姓名：" prop="name">
                <el-input v-model="form.name" name="name" />
              </el-form-item>
            </el-col>
            <el-col :span="3"></el-col>
            <el-col :span="windowWidth>768 ? 9:24">
              <el-form-item label="稱呼：" prop="gender">
                <el-radio-group v-model="form.gender">
                  <el-radio label="先生" />
                  <el-radio label="女士" />
                  <el-radio label="小姐" />
                </el-radio-group>
              </el-form-item>
            </el-col>
          </div>
          <el-form-item label="電話號碼：" prop="phone">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="電郵地址：" prop="email">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="服務選擇：" prop="service" label-width="100%">
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
            <el-button  id="contactUsForm" :loading="formLoading" @click="submitForm(ruleFormRef)" >提交表格</el-button>
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