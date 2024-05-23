import { defineStore } from 'pinia'

export interface appState {
  areaTabCurNum: number,
  dentistryService: string,
  brand: string,
  areaTabs: any,
  isShowForm: boolean,
  langs: String,
  areaTabs_url: Array<String>,
}

export const useAppState = defineStore('appData', {
  state: (): appState => ({
    areaTabCurNum: 0,
    dentistryService: 'implant',
    brand: 'course',
    areaTabs: [
      '羅湖區',
      '福田區',
      '南山區',
      '寶安區',
      '龍華區'
    ],
    isShowForm: false,
    langs: 't',
    areaTabs_url: [
      'lo_wu',
      'fu_tian',
      'nan_shan',
      'po_on',
      'long_hua'
    ]
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
    setLangs(_langs: string){
      this.langs = _langs
    },
    reset() {
      // this.count = 0
    },
  },
})