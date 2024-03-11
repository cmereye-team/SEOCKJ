const whatsAppNum = "85269338128"

const phoneNum = "+852 69338128"
const smallPhoneNum = "6933 8128"
const toWhatsApp = () =>{
  location.href = `https://api.whatsapp.com/send/?phone=${whatsAppNum}`
}

const toPhone = ()=>{
  location.href = `tel: ${phoneNum}`
}

export{
  whatsAppNum,
  phoneNum,
  smallPhoneNum,
  toWhatsApp,
  toPhone
}