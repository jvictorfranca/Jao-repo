let tentativas = 100
let numbers = [];

for (let indice = 0; indice<=tentativas ; indice+=1 ) {
  let adicao = 0;
  adicao = Math.floor(Math.random()*60+1)
  numbers.push(adicao)

}
console.log(numbers)



for(index=0 ; index<numbers.length; index+=1) {
  for(indice=0; indice<numbers.length-1; indice+=1){
    let position;
    if(numbers[indice]>numbers[indice+1]){
    position = numbers[indice]
    numbers[indice]=numbers[indice+1]
    numbers[indice+1]=position
    }
    else {numbers[indice] = numbers[indice]}
  }}
console.log(numbers)