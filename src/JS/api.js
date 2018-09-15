export default {
  install (Vue, options) {
    Vue.prototype.API_URL = MOCK_API
  }
}

const MOCK_API = {
  getPersonalScheduleInfo: 'mwp/arrangeSchedual/api/cloudSchedule/findPersonalScheduleInfo'
}
