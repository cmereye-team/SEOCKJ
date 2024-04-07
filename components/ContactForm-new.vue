<script lang="ts" setup>
import service from '~/assets/js/service'
import type { FormInstance, FormRules } from 'element-plus'
import { useAppState } from '~/stores/appState'
import { smallPhoneNum } from '~/assets/js/common'
const appState = useAppState()

const props = defineProps({
  service: {
    type: String,
    default: '', //種植牙
  },
})

let form = reactive({
  name: '',
  gender: '',
  phone: '',
  // email: '',
  service: '',
})

// const timestamp = Date.parse(new Date().toString())

var valiemail = (rule: any, value: any, callback: any) => {
  const mailReg = /^([a-zA-Z0-9_-_._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (!value) {
    return callback(new Error('請填寫您的電郵地址'))
    callback()
  }
  setTimeout(() => {
    if (mailReg.test(value.trim())) {
      // this.$refs.ruleForm.validateField('checkemail');
      callback()
    } else {
      callback(new Error('請填寫正確的電郵地址'))
    }
  }, 100)
}
const formLoading = ref(false)
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [{ required: true, message: '請填寫您的姓名', trigger: 'change' }],
  gender: [{ required: true, message: '請選擇稱呼', trigger: 'change' }],
  phone: [
    { required: true, message: '請填寫您的電話', trigger: 'change' },
    { min: 8, max: 11, message: '請填寫正確的電話', trigger: 'change' },
  ],
  // email: [{ type: 'email', required: true, validator: valiemail, trigger: 'blur' }],
  service: [{ required: true, message: '請選擇服務', trigger: 'change' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  if (formLoading.value) return
  formLoading.value = true
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      // console.log('submit!')
      if (
        localStorage.getItem('contactForm') &&
        localStorage.getItem('contactForm') === JSON.stringify(form)
      ) {
        ElMessageBox.alert(
          'If you have any questions or inquiries, please contact us via WhatsApp: +(如果您有任何问题或疑问，请通过WhatsApp与我们联系：+)',
          '消息通知',
          {
            confirmButtonText: '好的',
          }
        )
        formLoading.value = false
        return
      }
      if(privacyPolicy.value === '0'){
        ElMessage({
          showClose: true,
          message: '請勾選同意有關私隱政策聲明。',
          type: 'warning'
        })
        formLoading.value = false
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

const onSubmit = async () => {
  let _formData = new FormData()
  let _form = form
  _formData.append('contact_name', _form.name)
  _formData.append('gender', _form.gender)
  _formData.append('phone', `${areaCode.value} ${_form.phone}`)
  // _formData.append('email',_form.email)
  _formData.append('service', _form.service)
  _formData.append('formUrl', `${location.href}`)
  const { data }: any = await useFetch(
    'https://admin.ckjhk.com/api.php/cms/addform/fcode/3',
    {
      method: 'post',
      body: _formData,
    }
  )
  let res = JSON.parse(data.value)
  if (res) {
    if (res.code) {
      ElMessage({
        showClose: true,
        message: '表單提交成功！我們會盡快回覆閣下。',
        type: 'success',
        duration: 0,
      })
      localStorage.setItem('contactForm', JSON.stringify(_form))
      window.location.href = `/messagePage?c=${res.code}`
    } else {
      ElMessage({
        showClose: true,
        message: res.data,
        type: 'error',
      })
    }
  } else {
    ElMessage({
      showClose: true,
      message: '服务异常，请稍后重试',
      type: 'error',
    })
  }
  formLoading.value = false
  appState.setIsShowForm(false)
}

const serviceLists = service.map((item) => item.name)

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  form.service = props.service
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})


let areaCode = ref('+852')
let privacyPolicy = ref('0')
</script>

<template>
  <div class="contactForm">
    <div id="contactUsFormNav"></div>
    <div class="contactForm-bg">
      <div class="contactForm-title">
        <span>立即預約牙科診症</span>
        <span>（星期一至日 9:00am – 5:30pm）</span>
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
            <el-col :span="13">
              <el-form-item
                :label="`${$t('contactUs.contact_form.formItem.name')}`"
                prop="name"
              >
                <el-input v-model="form.name" name="name" maxlength="30" />
              </el-form-item>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="9">
              <el-form-item
                :label="`${$t('contactUs.contact_form.formItem.gender')}`"
                prop="gender"
              >
                <el-select
                  v-model="form.gender"
                  :placeholder="'請選擇'"
                >
                  <el-option label="先生" value="先生" />
                  <el-option label="女士" value="女士" />
                  <el-option label="小姐" value="小姐" />
                </el-select>
              </el-form-item>
            </el-col>
          </div>
          <el-form-item
            :label="`${$t(
              'contactUs.contact_form.formItem.telephone_number'
            )}`"
            prop="phone"
          >
            <el-select class="areaCode" v-model="areaCode">
              <el-option label="+852" value="852" />
              <el-option label="+853" value="853" />
              <el-option label="+86" value="86" />
            </el-select>
            <el-input v-model="form.phone" maxlength="12" />
          </el-form-item>
          <!-- <el-form-item :label="`${$t('contactUs.contact_form.formItem.email_address')}：`" prop="email">
            <el-input v-model="form.email" />
          </el-form-item> -->
          <el-form-item
            :label="`診症服務`"
            prop="service"
            label-width="100%"
          >
            <el-select
              v-model="form.service"
              :placeholder="
                $t('contactUs.contact_form.formItem.please_select_service')
              "
              class="selectOption"
            >
              <el-option
                :label="$t(serviceItem)"
                v-for="serviceItem in serviceLists"
                :key="$t(serviceItem)"
                :value="$t(serviceItem)"
                
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="privacyPolicy">
              <div class="privacyPolicy-label">*為必填</div>
              <div class="privacyPolicy-content">
                <span>我們將會在10小時內與您聯絡確認預約詳情。</span>
                <span>
                  <el-radio-group v-model="privacyPolicy">
                    <el-radio label="1" size="large"><i>*</i>本人已閱讀並同意有關 <nuxt-link to="/privacyPolicy" target="_blank">私隱政策</nuxt-link> 聲明。</el-radio>
                  </el-radio-group>
                </span>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <!-- <button
              :id="windowWidth > 768 ? 'contactUsForm' : 'navMbContactForm'"
              type="button"
              class="formBtn"
              v-loading="formLoading"
              @click.stop="submitForm(ruleFormRef)"
            >
              {{ $t('contactUs.contact_form.formItem.submit_the_form') }}
            </button> -->
            <div class="formBtn contactUsForm">
              <div class="animbtntypetwo contactUsForm" v-loading="formLoading">
                <div class="animbtntypetwo-in contactUsForm" :id="windowWidth > 768 ? 'contactUsForm' : 'navMbContactForm'" @click.stop="submitForm(ruleFormRef)">
                  <span class="contactUsForm">
                    <img class="contactUsForm" src="@/assets/images/icon_36.svg" style="margin-right: 10px;" alt="">
                    {{ $t('contactUs.contact_form.formItem.submit_the_form') }}
                  </span>
                </div>
              </div>
            </div>
            
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
ul{
  &.el-select-dropdown__list{
    padding: 0;
  }
}
.el-popper__arrow{
  display: none;
}
.el-select__popper.el-popper{
  border: 2px solid var(--indexColor1);
  border-radius: 0;
}
</style>
<style lang="scss" scoped>
li{
  &.el-select-dropdown__item{
    color: var(--indexColor1);
    height: 64px;
    line-height: 64px;
    font-size: 35px;
    letter-spacing: 7px;
  }
}
.contactForm {
  position: relative;
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
      &:first-child {
        font-weight: 500;
        font-size: 60px;
        color: var(--indexColor1);
      }
      &:last-child {
        font-weight: 400;
        font-size: 34px;
        color: #808080;
      }
    }
  }
  &-in {
    width: calc(100% - 60px);
    max-width: 800px;
    margin: 61px auto 0;
    .firstFormItem {
      display: flex;
      flex-wrap: wrap;
    }
    :deep(.el-form-item) {
      margin-bottom: 36px;
    }
    :deep(.el-form-item__label) {
      font-family: var(--contextFamily);
      font-style: normal;
      font-weight: 500;
      font-size: 35px;
      line-height: 160% !important;
      color: var(--indexColor1);
      letter-spacing: 5px;
      &::before{
        display: none;
      }
      &::after{
        content: '*';
      }
    }
    :deep(.el-select) {
      width: 100%;
      --el-select-input-focus-border-color: var(--indexColor1);
      --el-select-border-color-hover: var(--indexColor1);
      .el-input{
        &.is-focus{
          .el-input__wrapper{
            background: var(--indexColor1);
            .el-input__inner{
              color: #fff;
            }
          }
        }
      }
    }
    :deep(.el-input) {
      height: 64px;
      font-size: 35px;
      border: 2px solid var(--indexColor1);
      --el-input-border-color: var(--indexColor1);
      --el-input-focus-border-color: var(--indexColor1);
      --el-input-focus-border: var(--indexColor1);
      --el-input-hover-border-color: var(--indexColor1);
      --el-input-clear-hover-color: var(--indexColor1);
      --el-input-border-radius: 0;
      .el-input__wrapper{
        box-shadow: none;
      }
    }
    :deep(.el-input__inner){
      font-size: 35px;
      line-height: 55px;
      height: 55px;
      text-indent: 10px;
      color: var(--indexColor1);
    }
    :deep(.el-form-item__content){
      display: flex;
      flex-wrap: nowrap;
      &>.areaCode{
        width: 210px;
        margin-right: 30px;
      }
    }
    :deep(.el-form-item__error){
      font-size: 20px;
    }
    :deep(.el-select-dropdown__item){
      font-size: 35px;
      color: var(--indexColor1);
      height: 64px;
      line-height: 64px;
    }
    :deep(.el-radio-group) {
      width: 100%;
      justify-content: space-between;
    }
    :deep(.el-radio) {
      --el-radio-input-border-color-hover: var(--indexColor1);
    }
    :deep(.el-radio__input.is-checked .el-radio__inner) {
      border: 1px solid #cbcbcb;
      background: #fff;
    }
    :deep(.el-radio__inner::after) {
      width: 100%;
      height: 100%;
      background: var(--indexColor1);
      border: 1px solid #fff;
    }
    :deep(.el-select .el-input .el-select__caret){
      font-size: 35px;
      color: var(--indexColor1);
      &.is-reverse{
        color: #fff;
      }
    }
    .formBtn {
      width: 100%;
      display: flex;
      justify-content: center;
      // font-family: var(--contextFamily);
      // margin: 52px auto 0;
      // width: 350px;
      // height: 60px;
      // font-weight: 500;
      // font-size: 20px;
      // line-height: 160%;
      // color: var(--indexColor1);
      // background-color: transparent;
      // border: 1px solid #cbcbcb;
      // transition: all 0.3s;
      // &:hover {
      //   color: #fff;
      //   background-color: var(--indexColor1);
      // }
      // &:active {
      //   color: #fff;
      //   background-color: var(--indexColor1);
      // }
    }
    .privacyPolicy{
      width: 100%;
      margin-top: 52px;
      &-label{
        font-size: 26px;
        color: var(--indexColor1);
      }
      &-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #808080;
        font-weight: 400;
        line-height: 160%; /* 41.6px */
        letter-spacing: 5.2px;
        font-size: 26px;
        margin-top: 45px;
        a{
          color: #00AEFF;
          text-decoration-line: underline;
        }
        i{
          font-style: normal;
          color: var(--indexColor1);
        }
        :deep(.el-radio.el-radio--large .el-radio__label){
          font-size: 26px;
          color: #808080;
        }
        :deep(.el-radio.el-radio--large .el-radio__inner){
          width: 34px;
          height: 34px;
        }
        :deep(.el-radio__inner){
          border-width: 2px;
          border-color: var(--indexColor1);
        }
      }
    }
  }
}
#contactUsFormNav {
  position: absolute;
  top: -30vh;
}
@media (min-width: 768px) and (max-width: 1920px) {
  li{
  &.el-select-dropdown__item{
    height: 3.3333vw;
    line-height: 3.3333vw;
    font-size: 1.8229vw;
    letter-spacing: .3646vw;
  }
}
.contactForm {
  margin-top: 2.8125vw;
  &-bg {
    padding: 3.6979vw 0 3.9063vw;
  }
  &-title {
    span {
      &:first-child {
        font-size: 3.125vw;
      }
      &:last-child {
        font-size: 1.7708vw;
      }
    }
  }
  &-in {
    width: calc(100% - 3.125vw);
    max-width: 41.6667vw;
    margin: 3.1771vw auto 0;
    :deep(.el-form-item) {
      margin-bottom: 1.875vw;
    }
    :deep(.el-form-item__label) {
      font-size: 1.6vw;
      letter-spacing: .2604vw;
    }
    :deep(.el-input) {
      height: 3.3333vw;
      font-size: 1.6vw;
    }
    :deep(.el-input__inner){
      font-size: 1.6vw;
      line-height: 2.8646vw;
      height: 2.8646vw;
      text-indent: .5208vw;
    }
    :deep(.el-form-item__content){
      &>.areaCode{
        width: 12vw;
        margin-right: 1.5625vw;
      }
    }
    :deep(.el-form-item__error){
      font-size: 1.0417vw;
    }
    :deep(.el-select-dropdown__item){
      font-size: 1.8229vw;
      height: 3.3333vw;
      line-height: 3.3333vw;
    }
    :deep(.el-select .el-input .el-select__caret){
      font-size: 1.6vw;
    }
    .privacyPolicy{
      margin-top: 2.7083vw;
      &-label{
        font-size: 1.3542vw;
      }
      &-content{
        letter-spacing: .2708vw;
        font-size: 1.3542vw;
        margin-top: 2.3438vw;
        :deep(.el-radio.el-radio--large .el-radio__label){
          font-size: 1.3542vw;
        }
        :deep(.el-radio.el-radio--large .el-radio__inner){
          width: 1.7708vw;
          height: 1.7708vw;
        }
      }
    }
  }
}
}
@media screen and (max-width: 768px) {
  li{
    &.el-select-dropdown__item{
      height: 26px;
      line-height: 26px;
      font-size: 15px;
      letter-spacing: 3px;
    }
  }
  .contactForm {
    &-bg {
      padding: 50px 0;
      background: #fff;
    }
    span {
      // &:first-child {
      //   font-size: 16px;
      // }
      // &:last-child {
      //   font-weight: 500;
      //   font-size: 20px;
      // }
    }
    &-title{
      span{
        letter-spacing: 3px;
        &:first-child{
          font-size: 26px;
        }
        &:last-child{
          font-size: 15px;
        }
      }
    }
    &-in {
      margin: 41px auto 0;
      :deep(.el-form-item__error){
        font-size: 12px;
      }
      :deep(.el-input) {
        height: 26px;
        font-size: 15px;
        border: 1px solid var(--indexColor1);
      }
      :deep(.el-input__inner){
        font-size: 15px;
        height: 24px;
        line-height: 24px;
        text-indent: 0;
      }
      :deep(.el-form-item__content){
        &>.areaCode{
          width: 120px;
          margin-right: 10px;
        }
      }
      :deep(.el-select .el-input .el-select__caret){
        font-size: 15px;
      }
      :deep(.el-form-item) {
        margin-bottom: 20px;
      }
      :deep(.el-form-item__label) {
        font-size: 16px;
        letter-spacing: 3px;
      }
      :deep(.el-radio__label) {
        font-size: 16px;
      }
      .formBtn {
        // width: 137px;
        // height: 40px;
        // font-size: 16px;
        margin: 30px auto 0;
      }
      .privacyPolicy{
        margin-top: 0px;
        &-label{
          font-size: 12px;
        }
        &-content{
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 2.4px;
          margin-top: 20px;
          i{
            font-size: 16px;
          }
          :deep(.el-radio.el-radio--large .el-radio__label){
            font-size: 12px;
          }
          :deep(.el-radio.el-radio--large .el-radio__inner){
            width: 16px;
            height: 16px;
          }
          :deep(.el-radio.el-radio--large){
            height: 20px;
          }
        }
      }
    }
  }
}


.animbtntypetwo{
  position: relative;
  display: flex;
  &-in{
    position: relative;
    display: inline-block;
    &>span{
      padding: 20px 50px;
      color: #fff;
      background: #00AEFF;
      position: relative;
      z-index: 1;
      border-radius: 50px;
      display: inline-block;
      animation: btntestAnima 5.6s infinite;
      box-shadow: 10px 10px 20px rgba(103, 214, 239, .75);
      cursor: pointer;
      transition: all .5s;
      font-size: 30px;
      display: flex;
      align-items: center;
    }
    &::after{
      content: '';
      position: absolute;
      display: inline-block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border: 10px solid #B9D9FC;
      z-index: 0;
      border-radius: 70px;
      animation: btntestafterAnima 5.6s infinite;
      transition: all .5s;
    }
    &:hover{
      &>span{
        background: #FF9900;
        box-shadow: 10px 10px 20px rgba(239, 176, 103, .75);
        animation: btntesthoverAnima 5.6s infinite;
      }
      &::after{
        border: 10px solid #FCD1B9;
        animation: btntestafterhoverAnima 5.6s infinite;
      }
    }
  }
}
@keyframes btntestAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntesthoverAnima{
  5%{
    transform: scale(.95);
    -webkit-transform: scale(.95);
  }
  8%{
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntestafterAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #B9D9FC;
  }
  19%{
    border: 10px solid rgba(185, 217, 252, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes btntestafterhoverAnima {
  0%{
    width: 90%;
    height: 90%;
    border: 10px solid #FCD1B9;
  }
  19%{
    border: 10px solid rgba(252, 209, 185, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24%{
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100%{
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@media (min-width: 768px) and (max-width: 1600px) {
  .animbtntypetwo{
    &-in{
      &>span{
        font-size: 2vw;
        padding: 1vw 2.5vw;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .animbtntypetwo{
    &-in{
      &>span{
        font-size: 20px;
        padding: 8px 30px;
        img{
          width: 20px;
        }
      }
      &::after{
        border: 7px solid #B9D9FC;
      }
      &.smallmb{
        &>span{
          font-size: 16px;
          padding: 5px 20px;
        }
      }
    }
  }
  @keyframes btntestafterAnima {
    0%{
      width: 90%;
      height: 90%;
      border: 7px solid #B9D9FC;
    }
    19%{
      border: 7px solid rgba(185, 217, 252, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24%{
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29%{
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100%{
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
  @keyframes btntestafterhoverAnima {
    0%{
      width: 90%;
      height: 90%;
      border: 7px solid #FCD1B9;
    }
    19%{
      border: 7px solid rgba(252, 209, 185, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24%{
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29%{
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100%{
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
}

</style>

