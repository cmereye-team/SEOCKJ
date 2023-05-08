import { defineStore } from 'pinia'

export interface appState {
  areaTabCurNum: number,
  dentistryService: string,
}

export const useAppState = defineStore('appData', {
  state: (): appState => ({
    areaTabCurNum: 0,
    dentistryService: 'dentalImplant'
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