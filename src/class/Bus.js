import Station from './Station'

export default class Bus {
  constructor(name) {
    this.name = name
    this.stations = []
    this.hidden = false
  }
  
  /* 
   "toWork":"7:25 恒大华府发车—双语中学—咸嘉新村—肿瘤医院—玛利亚—湘江一桥—湖南大学—后湖—阳光100—中海国际人行桥—电气产业园",
   "offWork":"17:10 从产业园发车—中海国际人行桥—后湖—湖南大学—湘江一桥—玛利亚—肿瘤医院—咸嘉新村—双语中学—恒大华府" 
   */
  buildStations(toWorkStationString,offWorkStationString){
    let s = toWorkStationString.trim()
    let t = s.split(" ")
    console.log(t)
    this.ToWorkStartTime = t[0]
    this.ToWorkStations = t[1].split("—")
    this.ToWorkStation = this.ToWorkStations[0]

     s = offWorkStationString.trim()
     t = s.split(" ")
    this.OffWorkStartTime = t[0]
    this.OffWorkStations = t[1].split("—")

    this.addStationStringList(this.ToWorkStations)
  }

  //
  addStationStringList(stationList){
    for(let i=0;i<stationList.length;i++)
    this.stations.push(new Station(stationList[i]))
  }
  
  addStation(station){
    this.stations.push(station)
  }

  findStation(stationName){
    for(let i=0;i<this.stations.length;i++){
      if(this.stations[i].name.indexOf(stationName.trim())>=0){
        return this.stations[i]
      }
    }
    return null
  }

  initDemoData() {
  }

  buildTest(){
    for(var i=0; i<10;i++){
      this.addStation(
          new Station("站点"+i , 0, 0, "7:2"+i,  "18:1"+i)
      )
    }
  }


}