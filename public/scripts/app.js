'use strict';

var add = function add(a, b) {
  // console.log(arguments)
  return a + b;
};

console.log(add(10, 5));
// this is not loger bound in es6

var user = {
  name: 'Sergio',
  cities: ['Provo', 'Gaithersburg', 'Rockville'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();
