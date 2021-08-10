let arr = [0,1,2,3,4,5];

function oblicz(tablica){
let zero = 0;

tablica.forEach(function(el){
let pow = Math.pow(el,2);
zero = pow + zero; //zero += pow

});

return zero;
}
console.log(oblicz(arr));















