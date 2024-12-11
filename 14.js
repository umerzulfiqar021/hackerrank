const a = [2,4]
const b = [16,32,96]
const loop = Math.max(...a) - Math.min(...a)
let result = 0;
for (let i =  0; i <=100; i++ ) {

    if((a.every((value)=> i % value == 0 ))&& (b.every((val)=> val % i == 0))){
        result = result + 1
    }
   
    
}
console.log(result);

 // if((i % a == 0) && (b%i==0)){
    //     result++
    // }