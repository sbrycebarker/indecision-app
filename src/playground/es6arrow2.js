const add = (a,b) => {
  // console.log(arguments)
  return a + b
}

console.log(add(10, 5))
// this is not loger bound in es6

const user = {
  name: 'Sergio',
  cities: ['Provo', 'Gaithersburg', 'Rockville'],
  printPlacesLived: function() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city)
    });
  }
}

user.printPlacesLived()
