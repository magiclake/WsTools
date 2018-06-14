/**
 * Created by m on 2018/6/14.
 */
import Bus from './Bus'
export default class MockBus {
    
    construct(){
        this.Buses = [

        ]
    }

    buildValidData(){
       this.bus_list =[
           {
            "name":"新1号车",
                "toWork":"7:50 梅溪湖文化艺术中心广场地铁口发车—麓云路地铁口—罗马广场—天元三彩—科技园",
               "offWork":"17:40 科技园—天元三彩—罗马广场—麓云路地铁口—梅溪湖文化艺术中心广场地铁口"
            },
           {
               "name":"新2号车",
               "toWork":"7:40 金麓小区—石岭塘—八方小区—金峰小区—科技园",
               "offWork":"17:40 科技园发车—金峰小区—八方小区—石岭塘—金麓小区"
           },
           {
               "name":"新3号车",
               "toWork":"7:30 恒大华府发车—玫瑰园—南山苏迪亚诺—恒大名都—润和紫郡—金科—科技园",
               "offWork":"17:40 科技园发车—金科—润和紫郡—恒大名都—南山苏迪亚诺—玫瑰园—恒大华府"
           },
           {
               "name":"新4号车",
               "toWork":"7:20 王家湾（二环线桥下）发车—矿冶研究院—天马山东公交站—西湖丽景—科技园",
               "offWork":"17:40 科技园发车—西湖丽景—天马山东公交站—矿冶研究院—王家湾"
           },
           {
               "name":"新5号车",
               "toWork":"7:15 东塘发车—梓园路—天心阁—人民医院柑子园—武警医院—西湖公园地铁口—航天—科技园",
               "offWork":"17:40 科技园发车—航天—西湖公园地铁口—武警医院—步行街中心广场—天心阁—梓园路—东塘"
           },
           {
               "name":"新6号车",
               "toWork":"7:15 井湾子北发车—中心医院—含浦—科技园",
               "offWork":"17:40 科技园发车—含浦—竹塘路—中心医院—井湾子北"
           },
           {
               "name":"新7号车",
               "toWork":"7:15 侯家塘发车—涂家冲—浦沅—南郊公园—阳光100—科技园",
               "offWork":"17:40 科技园发车—阳光100—南郊公园—浦沅—涂家冲—候家塘"
           },
           {
               "name":"新8号车",
               "toWork":"7:10 树木岭发车—高桥—杨家山—晚报—南航—科技园",
               "offWork":"17:40 科技园发车—南航—晚报—杨家山—高桥—树木岭"
           },
           {
               "name":"新9号车",
               "toWork":"7:15 星沙通城发车—中南汽车城二手车市场—中南汽车城南—四方坪—科技园",
               "offWork":"17:40 科技园发车—四方坪—中南汽车城南—中南汽车城二手车市场—星沙通城"
           },
           {
               "name":"新10号车",
               "toWork":"7:30 丽都苑发车—陈家湖—马厂—开福区政府—科技园",
               "offWork":"17:40 科技园发车—星蓝湾—开福区政府—马厂—陈家湖—丽都苑"
           },
           {
               "name":"湘潭一线",
               "toWork":"7:50 梅溪湖文化艺术中心广场地铁口发车—麓云路地铁口—罗马广场—天元三彩—科技园",
               "offWork":"17:40 科技园—天元三彩—罗马广场—麓云路地铁口—梅溪湖文化艺术中心广场地铁口"
           },
           {
               "name":"湘潭二线",
               "toWork":"7:25 恒大华府发车—双语中学—咸嘉新村—肿瘤医院—玛利亚—湘江一桥—湖南大学—后湖—阳光100—中海国际人行桥—电气产业园",
               "offWork":"17:10 从产业园发车—中海国际人行桥—后湖—湖南大学—湘江一桥—玛利亚—肿瘤医院—咸嘉新村—双语中学—恒大华府"
           }
       ]

        this.Buses = []

        for(let i=0;i<this.bus_list.length;i++){
            let o = this.bus_list[i]
            let bus = new Bus(o.name)
            bus.buildStations(o.toWork,o.offWork)
            this.Buses.push(bus)
        }
    }


    buildTestData(){
        let bs = []
        for(var i=1;i<12;i++){
            let b = new Bus("新"+i+"线")
            b.buildTest()
            bs.push(b)
        }
        console.log(bs)
        this.Buses = bs
    }

    FindBusByName(name){
        for(let i=0;i<this.Buses.length;i++){
            if(this.Buses[i].name == name){
                return this.Buses[i]
            }
        }
        console.log( "not  find" + name)
        return null
    }

    /**
     * find the buses which include station, and flag the others to hidden
     * @param station
     * @constructor
     */
    ShowExistStationBuses(stationName){
        for(let i=0;i<this.Buses.length;i++){ 
            if(this.Buses[i].findStation(stationName) !== null){
                this.Buses[i].hidden = false
                console.log(this.Buses[i])
            }
            else{
                console.log("find")
                this.Buses[i].hidden = true
            }
        }
        console.log(this)
    }
    
    ShowAllBus(){
        console.log("showAll")
        for(let i=0;i<this.Buses.length;i++){
            this.Buses[i].hidden = false
        }
    }

  static Instance = null
    
  static GetInstance(){
      if(MockBus.Instance == null){
         MockBus.Instance = new MockBus()
          //MockBus.Instance.buildTestData()
          MockBus.Instance.buildValidData()
          console.log(MockBus.Instance)
      }
      return MockBus.Instance
  }
}