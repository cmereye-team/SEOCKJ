export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  router.beforeEach((to, from, next) => {
    let _arr = ['404','test','/news-tooth-wiki','/news-information','/article']
    if(!_arr.some(str => to.path?.indexOf(str) !== -1)) {
      let _tostr = to.path.slice(0,3)
      if(!['/hk','/cn'].includes(_tostr)){
        let _fromstr = from.path.slice(0,3)
        if(['/hk','/cn'].includes(_fromstr)){
          let _url = to.path
          let _url_new = _fromstr + _url
          next(_url_new)
        }
      }
    }
    if(typeof to.name === 'string' && ['slug'].includes(to.name)){
      next('/404')
    }
    next()
  })
})