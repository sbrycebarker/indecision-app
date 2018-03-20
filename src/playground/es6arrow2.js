const add = (a,b) => {
  // console.log(arguments)
  return a + b
}

console.log(add(10, 5))
// this is not loger bound in es6

const user = {
  name: 'Sergio',
  cities: ['Provo', 'Gaithersburg', 'Rockville'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived())


//challenge

const multiplier = {
  numArray: [3, 5, 8],
  multNum: 3,
  multiply() {
    return this.numArray.map((number)=> number * this.multNum)
  }
}

console.log(multiplier.multiply())
