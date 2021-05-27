
let medals = { golden: 2, silver: 3 };



let player = {
  name : 'Marta',
  lastName : 'Silva',
  age : 34
}
player['medals']=medals

console.log('A jogadora possui ' + medals.golden + ' medalhas e ouro e ' + medals['silver'] + ' medalhas de prata')