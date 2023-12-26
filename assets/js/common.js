const whatsAppNum = "85269338128"

const phoneNum = "+852 38925049"

const toWhatsApp = () =>{
  location.href = `https://api.whatsapp.com/send/?phone=${whatsAppNum}`
}

const toPhone = ()=>{
  location.href = `tel: ${phoneNum}`
}

export{
  whatsAppNum,
  phoneNum,
  toWhatsApp,
  toPhone
}