import { defineStore } from 'pinia'

export interface appState {
  areaTabCurNum: number,
  dentistryService: string,
  brand: string,
  areaTabs: any,
  isShowForm: boolean
}

export const useAppState = defineStore('appData', {
  state: (): appState => ({
    areaTabCurNum: 0,
    dentistryService: 'implant',
    brand: 'course',
    areaTabs: [
      '羅湖區','福田區','南山區','寶安區','龍華區'
    ],
    isShowForm: false
  }),
  actions: {
    setCurNum(curNum: number){
      // if(this.areaTabCurNum === curNum) return
      this.areaTabCurNum = curNum
      
    },
    setDentistryService(serviceName: string){
      this.dentistryService = serviceName
    },
    setBrand(brandName: string){
      this.brand = brandName
    },
    setIsShowForm(isShowForm: boolean){
      this.isShowForm = isShowForm
    },
    reset() {
      // this.count = 0
    },
  },
})