let numbers = [1, 522 , 3 , 2 , 721, 364, 15, 6, 23, 4, 8, 9, 164, 5, 13, 19, 7, 26 ]
let numbers2=numbers

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

