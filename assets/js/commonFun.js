import doctorLists from '~/assets/js/doctor'
import addressLists from '~/assets/js/address'
export const getDoctorDetail = (id) => {
  let _y = false
  let _detail = {}
  for(let i = 0; i < doctorLists.length; i++){
    if (!_y) {
      let _a = doctorLists[i].find((item) => item.id == id)
      if(_a){
        _detail = _a
        _y = true
      }
    }
  }
  return _detail
}

export const getAddressDetail = (id) => {
  let _y = false
  let _detail = {}
  for(let i = 0; i < addressLists.length; i++){
    if (!_y) {
      let _a = addressLists[i].find((item) => item.id == id)
      if(_a){
        _detail = _a
        _y = true
      }
    }
  }
  return _detail
}
