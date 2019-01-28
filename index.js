function produceDrivingRange(range){
  return function(start, end){
    start = parseInt(start.slice(0, -2))
    end = parseInt(end.slice(0, -2))
    let distance = Math.abs(start - end)
    if (distance < range) {
      return `within range by ${Math.abs(range - distance)}`
    } else {
      return `${Math.abs(range - distance)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(total){
    return total * percent
  }
}

function createDriver(){
  let id = 0
  return class{
    constructor(name){
      this.name = name
      this.id = id++
    }
  }
}
