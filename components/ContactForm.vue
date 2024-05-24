<script lang="ts" setup>
import service from '~/assets/js/service'
import type { FormInstance, FormRules } from 'element-plus'
import { useAppState } from '~/stores/appState'
import { smallPhoneNum } from '~/assets/js/common'
const appState = useAppState()

const props = defineProps({
  service: {
    type: String,
    default: '洗牙', //種植牙
  },
})

let form:any = reactive({
  name: '',
  // gender: '',
  phone: '',
  // email: '',
  service: '',
})

const reForm = () =>{
  form.value = {
    name: '',
    // gender: '',
    phone: '',
    service: ''
  }
}

// const timestamp = Date.parse(new Date().toString())

var valiemail = (rule: any, value: any, callback: any) => {
  const mailReg = /^([a-zA-Z0-9_-_._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (!value) {
    return callback(new Error('請填寫您的電郵地址'))
    callback()
  }
  setTimeout(() => {
    if (mailReg.test(value.trim())) {
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
  phone: [
    { required: true, message: '請填寫您的電話', trigger: 'change' },
    { min: 8, max: 11, message: '請填寫正確的電話', trigger: 'change' },
  ],
  service: [{ required: true, message: '請選擇服務', trigger: 'change' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  if (formLoading.value) return
  formLoading.value = true
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      if (
        localStorage.getItem('contactForm') &&
        localStorage.getItem('contactForm') === JSON.stringify(form)
      ) {
        // ElMessageBox.alert(
        //   'If you have any questions or inquiries, please contact us via WhatsApp: +(如果您有任何问题或疑问，请通过WhatsApp与我们联系：+)',
        //   '消息通知',
        //   {
        //     confirmButtonText: '好的',
        //   }
        // )
        formLoading.value = false
        return
      }
      if(!privacyPolicy.value){
        // ElMessage({
        //   showClose: true,
        //   message: '請勾選同意有關私隱政策聲明。',
        //   type: 'warning'
        // })
        formLoading.value = false
        return
      }
      onSubmit()
    } else {
      formLoading.value = false
    }
  })
}

const servicePreferential = [
  {
    name: '洗牙',
    text: `-----\n【备注信息： 洁牙中心诉求 |  告知客人，费用不止88一种，医生视情况确定费用细节，以免与一线人员产生价格误会】\n超聲波洗牙--優惠價：¥88、原價 ¥ -- ；\n菌斑導向專業洗牙（含鹽）--優惠價：¥168、原價 ¥350；\n菌斑導向專業洗牙（無鹽）--價格：¥550；`
  },{
    name: '種植牙',
    text: `春日感謝限定優惠：歐美種植牙 即減￥2,000/顆`
  },{
    name: '矯齒(箍牙)',
    text: `春日感謝限定優惠：即減￥3,000`
  },{
    name: '隱形矯正',
    text: `春日感謝限定優惠：即減￥5,000`
  },{
    name: '兒童牙科',
    text: `-----\n兒童洗牙：¥150；\n兒童補牙：¥500/顆；\n牙齒塗氟：¥200/全口；\n乳齒拔除：¥300/顆；\n窩溝封閉：¥300/顆。`
  }
]

const onSubmit = async () => {
  let _formData = new FormData()
  let _form = form
  _formData.append('contact_name', _form.name)
  _formData.append('phone', `${areaCode.value} ${_form.phone}`)
  _formData.append('service', _form.service)
  _formData.append('formUrl', `${location.href}`)
  let _preferential = servicePreferential.find(item=>item.name === _form.service)
  if(_preferential){
    _formData.append('preferential', _preferential.text)
  }else{
    _formData.append('preferential', `無`)
  }
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
      reForm()
      window.location.href = `/messagePage?c=${res.code}`
    } else {
      ElMessage({
        showClose: true,
        message: res.data,
        type: 'error',
      })
    }
  } else {
    postData(_form,_preferential)
    errorserver(_form,_preferential)
  }
  formLoading.value = false
  appState.setIsShowForm(false)
}

const postData = async (_form,_preferential) => {
  let _message = {
  msgtype: "text",
  text: {
    content: `名称：${_form.name}
联系方式：${areaCode.value} ${_form.phone}
服务：${_form.service}
来源：${location.href}
优惠信息：${_preferential ? _preferential.text : '無'}

提交时间：${new Date().toLocaleString()}
备注信息：服务器离线由备用服务推送`
  }
};
  let { data }:any = await useFetch('/dingtalk/robot/send?access_token=29f5dd6fd3019078bea0734c5dcfdea2e9b1792e238860a907faf486ae17ba55',{
    method: 'post',
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(_message)
  })
  if(data){
    localStorage.setItem('contactForm', JSON.stringify(_form))
    reForm()
    window.location.href = `/messagePage`
  }else{
    ElMessage({
      showClose: true,
      message: '服务异常，请稍后重试',
      type: 'error',
    })
  }
}
const errorserver = async (_form,_preferential) =>{
  let emailLists = [
    'vikim_lee@outlook.com',
    'jamie_chung@cmermedical.com',
    'info@ckjhk.com',
    'joanna.choi@cmermedical.com',
    'hazel.ho@cmermedical.com',
    '1934019260@qq.com'
  ]
  let _EmailformData:any = []
  for(var i = 0;i<emailLists.length;i++){
    let _message = {
      "to": [
        {
          "email": emailLists[i],
        }
      ],
      "from": {
        "email": "MS_mCYizS@trial-pq3enl6ymv5g2vwr.mlsender.net",
        "name": "ckjhk.com"
      },
      "subject": "来自ckjhk.com的預約表單信息-备用服务",
      "html": 
        `<p>名称：${_form.name}</p>
        <p>联系方式：${areaCode.value} ${_form.phone}</p>
        <p>服务：${_form.service}</p>
        <p>来源：${location.href}</p>
        <p>优惠信息：${_preferential?_preferential.text:'無'}</p><br/>
        <p>提交時間：${new Date().toLocaleString()}</p>
        <p>备注信息：服务器离线由备用服务推送</p>`
    }
    _EmailformData.push(_message)
  }
  const { data }: any = await useFetch(
    '/sendmail/v1/bulk-email',
    {
      method: 'post',
      headers: {
        'Authorization': 'Bearer mlsn.af3269665a0933f2eb9ec9cbf7d1aca61448d23387c688190873b6e3fa19274c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_EmailformData),
    }
  )
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
let privacyPolicy = ref(true)
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
              <el-form-item
                :label="`姓名`"
                prop="name"
              >
                <el-input v-model="form.name" name="name" maxlength="30" />
              </el-form-item>
          </div>
          <el-form-item
            :label="`Whatsapp電話`"
            prop="phone"
          >
            <el-select class="areaCode" v-model="areaCode">
              <el-option label="+852" value="852" />
              <el-option label="+853" value="853" />
              <el-option label="+86" value="86" />
            </el-select>
            <el-input v-model="form.phone" maxlength="12" />
          </el-form-item>
          <el-form-item
            :label="`診症服務`"
            prop="service"
            label-width="100%"
          >
            <el-select
              v-model="form.service"
              :placeholder="'請選擇服務'"
              class="selectOption"
            >
              <el-option
                :label="serviceItem"
                v-for="serviceItem in serviceLists"
                :key="serviceItem"
                :value="serviceItem"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="privacyPolicy">
              <div class="privacyPolicy-label">*為必填</div>
              <div class="privacyPolicy-content" @click.stop="privacyPolicy = !privacyPolicy">
                <span>我們將會在10小時內與您聯絡確認預約詳情。</span>
                <span class="radio">
                  <div :class="['radio-in',{'act': privacyPolicy}]"></div>
                  <div><i>*</i>本人已閱讀並同意有關 <nuxt-link to="#" target="_blank">私隱政策</nuxt-link> 聲明。</div>
                </span>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="formBtn contactUsForm">
              <div class="animbtntypetwo contactUsForm" v-loading="formLoading">
                <div class="animbtntypetwo-in contactUsForm" :id="windowWidth > 768 ? 'contactUsForm' : 'navMbContactForm'" @click.stop="submitForm(ruleFormRef)">
                  <span class="contactUsForm">
                    <img class="contactUsForm" src="@/assets/images/icon_36.svg" style="margin-right: 10px;" alt="">
                    提交表格
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
.el-scrollbar__bar.is-vertical{
  width: 15px;
  .el-scrollbar__thumb{
    background-color: var(--indexColor);
  }
}
.el-popper__arrow{
  display: none;
}
.el-select__popper.el-popper{
  border: 2px solid var(--indexColor);
  border-radius: 0;
}
</style>
<style lang="scss" scoped>
li{
  &.el-select-dropdown__item{
    color: var(--indexColor);
    height: 55px;
    line-height: 55px;
    font-size: 28px;
    letter-spacing: 7px;
    &:hover{
      background: #dde2ea;
    }
    &.selected{
      background: #dde2ea;
      font-weight: 500;
    }
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
        font-weight: 600;
        font-size: 35px;
        color: var(--indexColor);
      }
      &:last-child {
        font-weight: 400;
        font-size: 30px;
        color: #808080;
      }
    }
  }
  &-in {
    width: calc(100% - 60px);
    max-width: 800px;
    margin: 50px auto 0;
    .firstFormItem {
      display: flex;
      flex-wrap: wrap;
    }
    :deep(.el-form-item) {
      margin-bottom: 30px;
    }
    :deep(.el-form-item__label) {
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 160% !important;
      color: var(--indexColor);
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
      --el-select-input-focus-border-color: var(--indexColor);
      --el-select-border-color-hover: var(--indexColor);
      .el-input{
        &.is-focus{
          .el-input__wrapper{
            background: var(--indexColor);
            .el-input__inner{
              color: #fff;
            }
          }
        }
      }
    }
    :deep(.el-input) {
      height: 55px;
      font-size: 28px;
      border: 2px solid var(--indexColor);
      --el-input-border-color: var(--indexColor);
      --el-input-focus-border-color: var(--indexColor);
      --el-input-focus-border: var(--indexColor);
      --el-input-hover-border-color: var(--indexColor);
      --el-input-clear-hover-color: var(--indexColor);
      --el-input-border-radius: 0;
      .el-input__wrapper{
        box-shadow: none;
      }
      &.is-focus{
        .el-input__inner{
          &::placeholder{
            color: #fff;
          }
        }
      }
    }
    :deep(.el-input__inner){
      font-size: 28px;
      line-height: 50px;
      height: 50px;
      text-indent: 10px;
      color: var(--indexColor);
      
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
      font-size: 28px;
      color: var(--indexColor);
      height: 55px;
      line-height: 55px;
    }
    :deep(.el-select__wrapper){
      border: 1px solid var(--indexColor);
      color: var(--indexColor);
      height: 55px;
      line-height: 55px;
      font-size: 28px;
      span{
        color: var(--indexColor);
      }
    }
    :deep(.el-select__placeholder){
      color: var(--indexColor);
    }
    :deep(.el-radio-group) {
      width: 100%;
      justify-content: space-between;
    }
    :deep(.el-radio) {
      --el-radio-input-border-color-hover: var(--indexColor);
    }
    :deep(.el-radio__input.is-checked .el-radio__inner) {
      border: 1px solid #cbcbcb;
      background: #fff;
    }
    :deep(.el-radio__inner::after) {
      width: 100%;
      height: 100%;
      background: var(--indexColor);
      border: 1px solid #fff;
    }
    .radio{
      display: flex;
      align-items: center;
      margin-top: 5px;
      cursor: pointer;
      &-in{
        border-radius: 50%;
        border: 2px solid var(--indexColor);
        background: #fff;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-top: -2px;
        position: relative;
        &::before{
          content: '';
          width: 0;
          height: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          background: var(--indexColor);
          transition: all .3s;
          border-radius: 50%;
        }
        &.act{
          &::before{
            width: 12px;
            height: 12px;
          }
        }
      }
    }
    :deep(.el-select .el-input .el-select__caret){
      font-size: 28px;
      color: var(--indexColor);
      &.is-reverse{
        color: #fff;
      }
    }
    .formBtn {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .privacyPolicy{
      width: 100%;
      margin-top: 30px;
      &-label{
        font-size: 16px;
        color: var(--indexColor);
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
        font-size: 16px;
        margin-top: 20px;
        a{
          color: #00AEFF;
          text-decoration-line: underline;
        }
        i{
          font-style: normal;
          color: var(--indexColor);
          font-size: 20px;
        }
        :deep(.el-radio.el-radio--large .el-radio__label){
          font-size: 16px;
          color: #808080;
        }
        :deep(.el-radio.el-radio--large .el-radio__inner){
          width: 26px;
          height: 26px;
        }
        :deep(.el-radio__inner){
          border-width: 2px;
          border-color: var(--indexColor);
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
    height: 2.8646vw;
    line-height: 2.8646vw;
    font-size: 1.4583vw;
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
        font-size: 1.8229vw;
      }
      &:last-child {
        font-size: 1.5625vw;
      }
    }
  }
  &-in {
    width: calc(100% - 3.125vw);
    max-width: 41.6667vw;
    margin: 2.6042vw auto 0;
    :deep(.el-form-item) {
      margin-bottom: 1.5625vw;
    }
    :deep(.el-form-item__label) {
      font-size: 1.4583vw;
      letter-spacing: .2604vw;
    }
    :deep(.el-input) {
      height: 2.8646vw;
      font-size: 1.4583vw;
    }
    :deep(.el-input__inner){
      font-size: 1.4583vw;
      line-height: 2vw;
      height: 2vw;
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
      font-size: 1.4583vw;
      height: 2.8646vw;
      line-height: 2.8646vw;
    }
    :deep(.el-select__wrapper){
      height: 2.8646vw;
      line-height: 2.8646vw;
      font-size: 1.4583vw;
    }
    :deep(.el-select .el-input .el-select__caret){
      font-size: 1.4583vw;
    }
    .privacyPolicy{
      margin-top: 1.5625vw;
      &-label{
        font-size: .8333vw;
      }
      &-content{
        letter-spacing: .2708vw;
        font-size: .8333vw;
        margin-top: 1.0417vw;
        :deep(.el-radio.el-radio--large .el-radio__label){
          font-size: .8333vw;
        }
        :deep(.el-radio.el-radio--large .el-radio__inner){
          width: 1.3542vw;
          height: 1.3542vw;
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
    width: 100%;
    &-bg {
      padding: 70px 0 50px;
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
      padding: 0 30px;
      span{
        letter-spacing: 3px;
        &:first-child{
          font-size: 26px;
          font-weight: 500;
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
        height: 30px;
        font-size: 15px;
        border: 1px solid var(--indexColor);
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

