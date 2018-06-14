export default class Station {
  constructor(name,lng="", lat="" , to_work_time="", off_work_time = "") {
    this.name = name
    this.lng = lng
    this.lat = lat
    this.to_work_time = to_work_time
    this.off_work_time = off_work_time
   // this.initDemoData()
  }

  initDemoData() {
    for (var i = 0; i < 20; i++) {
      this.historyData.push({
        time: this.CurentTime(),
      })
    }
  }

  CurentTime() {
    var now = new Date()

    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var day = now.getDate()

    var hh = now.getHours()
    var mm = now.getMinutes()
    var ss = now.getSeconds()

    var clock = year + '-'

    if (month < 10)
      clock += '0'

    clock += month + '-'

    if (day < 10)
      clock += '0'

    clock += day + ' '

    if (hh < 10)
      clock += '0'

    clock += hh + ':'
    if (mm < 10) clock += '0'
    clock += mm + ':'

    if (ss < 10) clock += '0'
    clock += ss
    return (clock)
  }
}