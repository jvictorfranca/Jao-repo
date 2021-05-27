let tentativas = 100000000;
let n = 40
let numbers = [];

for (let indice = 0; indice<=tentativas ; indice+=1 ) {
  let adicao = 0;
  adicao = Math.ceil(Math.random()*n)
  numbers.push(adicao)

}
console.log(numbers)


for ( let index = 0; index <=n ; index+=1){
  let conta = 0;
  for(let index2=0 ; index2<numbers.length; index2+=1){
    if(numbers[index2]==index){conta = conta+1}
    else {conta = conta}
    }
    console.log('numero de '+ index + ': ' + conta + ' , isso da ' + (conta/numbers.length) * 100 + '%')
}
console.log ('O esperado é '+ tentativas/n + ' , isso dá ' + (1/n)*100 + '%')
