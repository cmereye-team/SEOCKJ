import { defineStore } from 'pinia'

export interface appState {
  areaTabCurNum: number,
  dentistryService: string,
  areaTabs: any,
}

export const useAppState = defineStore('appData', {
  state: (): appState => ({
    areaTabCurNum: 0,
    dentistryService: 'dentalImplant',
    areaTabs: [
      '羅湖區','福田區','南山區','寶安區','龍華區'
    ]
  }),
  actions: {
    setCurNum(curNum: number){
      this.areaTabCurNum = curNum
    },
    setDentistryService(serviceName: string){
      this.dentistryService = serviceName
    },
    reset() {
      // this.count = 0
    },
  },
})