let nameVar = 'Sergio'
nameVar = 'Mike'
console.log('name-Var', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('name-Let', nameLet)


// const nameConst = 'Frank';
// nameConst = 'Gunther'
// console.log('nameConst', nameConst)

// function getPetName() {
//   const petName = 'Hal';
//   return petName;
// }
//
// const petName = getPetName();
// console.log(petName)

//Block scoping

const fullName = 'Sergio Barker';
let firstName;

if (fullName) {
  const firstName = fullName.split(' ')[1];
  console.log(firstName)
}

console.log(firstName)
