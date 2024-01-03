<script lang="ts" setup>

import service from '~/assets/js/service'
import type { FormInstance, FormRules } from 'element-plus'
import { useAppState } from '~/stores/appState'
const appState = useAppState()

const props = defineProps({
  service: {
    type: String,
    default: '', //種植牙
  }
})

let form = reactive({
  name: '',
  gender: '',
  phone: '',
  email: '',
  service: '',
})


// const timestamp = Date.parse(new Date().toString())

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
  if(formLoading.value) return 
  formLoading.value = true
  await formEl.validate((valid: any, fields:any) => {
    if (valid) {
      // console.log('submit!')
      if(localStorage.getItem('contactForm') && localStorage.getItem('contactForm') === JSON.stringify(form)){
        ElMessageBox.alert('If you have any questions or inquiries, please contact us via WhatsApp: +(如果您有任何问题或疑问，请通过WhatsApp与我们联系：+)', '消息通知', {
          confirmButtonText: '好的',
        })
        return
      }
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

let messageText = ref('服务异常，请稍后重试')
let messageShow = ref(false)

const onSubmit = async () => {
  let _formData = new FormData()
  let _form = form
  _formData.append('contact_name',_form.name)
  _formData.append('gender',_form.gender)
  _formData.append('phone',_form.phone)
  _formData.append('email',_form.email)
  _formData.append('service',_form.service)
  _formData.append('formUrl', `${location.href}`)
  const { data }:any = await useFetch('https://admin.ckjhk.com/api.php/cms/addform/fcode/3',{
    method: 'post',
    body: _formData
  });
  let res = JSON.parse(data.value)
  if (res) {
    if(res.code){
      ElMessage({
        showClose: true,
        message: '表單提交成功！我們會盡快回覆閣下。',
        type: 'success',
        duration: 0
      })
      localStorage.setItem('contactForm',JSON.stringify(_form))
      window.location.href = `/messagePage?c=${res.code}`
    }else{
      ElMessage({
        showClose: true,
        message: res.data,
        type: 'error'
      })
    }
  }else{
    ElMessage({
      showClose: true,
      message: '服务异常，请稍后重试',
      type: 'error',
    })
  }
  formLoading.value = false
  appState.setIsShowForm(false)
}

const serviceLists = service.map(item=>item.name)

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
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
        <span>{{$t('contactUs.contact_form.title.span1')}}</span>
        <span>{{$t('contactUs.contact_form.title.span2')}}</span>
      </div>
      <div class="contactForm-in">
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
          label-width="120px"
          label-position="top"
        >
          <div class="firstFormItem">
            <el-col :span="windowWidth>768 ? 12:24">
              <el-form-item :label="`${$t('contactUs.contact_form.formItem.name')}：`" prop="name">
                <el-input v-model="form.name" name="name" />
              </el-form-item>
            </el-col>
            <el-col :span="3"></el-col>
            <el-col :span="windowWidth>768 ? 9:24">
              <el-form-item :label="`${$t('contactUs.contact_form.formItem.gender')}：`" prop="gender">
                <el-radio-group v-model="form.gender">
                  <el-radio label="先生" />
                  <el-radio label="女士" />
                  <el-radio label="小姐" />
                </el-radio-group>
              </el-form-item>
            </el-col>
          </div>
          <el-form-item :label="`${$t('contactUs.contact_form.formItem.telephone_number')}：`" prop="phone">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item :label="`${$t('contactUs.contact_form.formItem.email_address')}：`" prop="email">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item :label="`${$t('contactUs.contact_form.formItem.service_selection')}：`" prop="service" label-width="100%">
            <el-select v-model="form.service" :placeholder="$t('contactUs.contact_form.formItem.please_select_service')">
              <el-option
                :label="$t(serviceItem)"
                v-for="serviceItem in serviceLists"
                :key="$t(serviceItem)"
                :value="$t(serviceItem)"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <button :id="windowWidth>768?'contactUsForm':'navMbContactForm'" type="button" class="formBtn" v-loading="formLoading" @click.stop="submitForm(ruleFormRef)">{{$t('contactUs.contact_form.formItem.submit_the_form')}}</button>
          </el-form-item>
        </el-form>
      </div>
      <div class="contactForm-message" v-if="messageShow">
        <div class="contactForm-message-close" @click="messageShow = false">
          <img src="@/assets/images/icon_7.png" alt="">
        </div>
        <div class="contactForm-message-in">
          <div class="text">{{messageText}}</div>
          <div class="linkBox">
            <div class="linkBox-in">
              <img src="@/assets/images/navIcon_1.png" alt="" />
              <span>3892 5049</span>
            </div>
            <div class="linkBox-in">
              <img src="@/assets/images/navIcon_2.png" alt="" />
            </div>
            <div class="linkBox-in">
              <img src="@/assets/images/navIcon_3.png" alt="" />
              <img class="qdCode" src="" alt="微信二维码" />
            </div>
            <div class="linkBox-in">
              <img src="@/assets/images/navIcon_6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.contactForm {
  margin-top: 54px;
  &-bg {
    position: relative;
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
        color: #666666;
      }
      &:last-child {
        font-weight: 700;
        font-size: 26px;
        color: var(--indexColor1);
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
      color: #666666;
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
      color: #666666;
    }
    :deep(.el-radio){
      --el-radio-input-border-color-hover: var(--indexColor1);
    }
    :deep(.el-radio__input.is-checked .el-radio__inner){
      border: 1px solid #CBCBCB;
      background: #fff;
    }
    :deep(.el-radio__inner::after){
      width: 100%;
      height: 100%;
      background: var(--indexColor1);
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
      color: var(--indexColor1);
      background-color: transparent;
      border-color: #cbcbcb;
      &:hover {
        color: #fff;
        background-color: var(--indexColor1);
      }
      &:active {
        color: #fff;
        background-color: var(--indexColor1);
      }
    }
    .formBtn{
      font-family: 'Noto Serif HK';
      margin: 52px auto 0;
      width: 350px;
      height: 60px;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      color: var(--indexColor1);
      background-color: transparent;
      border: 1px solid #CBCBCB;
      &:hover {
        color: #fff;
        background-color: var(--indexColor1);
      }
      &:active {
        color: #fff;
        background-color: var(--indexColor1);
      }
    }
  }
  &-message{
    position: absolute;
    width: 50%;
    height: 80%;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 28px;
    font-weight: 700px;
    transition: all .5s;
    box-shadow: 0px 4px 8px var(--indexColor3);
    border-radius: 10px;
    &-close{
      position: absolute;
      top: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      cursor: pointer;
      img{
        width: 100%;
        transition: all 3s;
      }
      &:hover{
        img{
          transform: rotate(360deg);
        }
      }
    }
    &-in{
      .text{
        text-align: center;
      }
      .linkBox{
        display: flex;
        align-items: center;
        height: 200px;
        margin-top: 20%;
        &-in{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--indexColor3);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          transition: all 1s;
          img{
            width: 60%;
            transition: all 3s;
          }
          span{
            color: #fff;
            display: none;
            text-align: center;
            text-shadow: 0px 0px 8px rgba(179, 54, 54, 0.55);
            font-size: 30px;
            font-weight: 600;
          }
          .qdCode{
            display: none;
            margin: 5% auto;
            background: #ccc;
          }
          &:not(:last-child){
            margin-right: 30px;
          }
          &:first-child{
            &:hover{
              width: 200px;
              border-radius: 10px;
              img{
                display: none;
              }
              span{
                display: block;
              }
            }
          }
          &:nth-of-type(2){
            &:hover{
              transition: all 3s;
              transform: rotate(360deg);
            }
          }
          &:nth-of-type(3){
            &:hover{
              width: 200px;
              height: 200px;
              border-radius: 10px;
              img{
                display: none;
              }
              .qdCode{
                width: 90%;
                height: 90%;
                display: block;
              }
            }
          }
          &:nth-of-type(4){
            img{
              width: 80%;
            }
            &:hover{
              transition: all 3s;
              transform: rotate(360deg);
            }
          }
        }
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
      .formBtn{
        width: 137px;
        height: 40px;
        font-size: 16px;
        margin: 30px auto 0;
      }
    }
    &-message{
      width: 80%;
      font-size: 20px;
      font-weight: 700px;
      &-close{
        width: 40px;
        height: 40px;
        top: 15px;
        right: 15px;
      }
      &-in{
        .linkBox{
          flex-wrap: wrap;
        }
      }
    }
  }
}
</style>