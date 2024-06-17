const bannerApi = async (apiId = '', params = {}) => {
  let result = {
    pcImg: '',
    mbImg: '',
    link: '',
    title: '',
    alt: ''
  }
  try{
    const _res:any = await useFetch(`https://admin.ckjhk.com/api.php/content/${apiId}`,{
      method: 'post',
    });
    let res = JSON.parse(_res.data.value) || null
    if(res){
      let _data = res.data
      result = {
        pcImg: (_data.ext_banner_pc.indexOf('/static/upload/') !== -1 ? `https://admin.ckjhk.com${_data.ext_banner_pc}`:_data.ext_banner_pc) || '',
        mbImg: (_data.ext_banner_mb.indexOf('/static/upload/') !== -1 ? `https://admin.ckjhk.com${_data.ext_banner_mb}`:_data.ext_banner_mb) || '',
        link: _data.ext_banner_link || '',
        title: _data.title || '',
        alt: _data.ext_banner_alt || '',
      }
    }
  }catch(e){
    console.log(e)
  }
  return result
}

export {
  bannerApi
}