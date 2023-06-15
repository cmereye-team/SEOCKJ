import { Md5 } from "ts-md5";
// Md5.hashStr('...')
const _secret = 'ckjhk'
const _timestamp = Date.parse(new Date().toString())
const _signature = Md5.hashStr(Md5.hashStr(_secret + _secret + _timestamp))

// export const requestApi = async (_params:any , _url:string, _method:string) => {
//   let params = {
//     appid: _secret,
//     timestamp: _timestamp,
//     signature: _signature
//   }
//   let _formData = new FormData()
//   let url = `https://admin.ckjhk.com${_url}`
//   const { data, pending, error, refresh }:any = await useFetch(url,{
//     method: _method || 'get',
//     body: _formData
//   })
//   return {
//     data, pending, error, refresh
//   }
// }

