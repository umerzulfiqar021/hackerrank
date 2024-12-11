const arr = [
   [ 1,2,5],
    [4,5,6],
    [7,8,9]
]

function myarray () {
let element = [];
let right = [];

for (let i = 0; i < arr.length; i++) {
    
      element.push(arr[i][i]);   
    //  console.log(element);
    //  return element
    }
    0//2==>3      1//1====>5      2///0====>7
    for (let r =0; r < arr.length; r++) {
        const l = arr.length-1
        right.push(arr[r][l-r]) ///$
        //0                     2-0=2
        //1                     2-1= 1
        //2                     2-2 = 0
        console.log(right);
        
    }
    const diagonal1 = element.reduce((result,value) => result + value)
    const diagonal2 = right.reduce((result,value) => result + value)
    const finalResult = diagonal1 - diagonal2;
    // console.log(Math.abs(finalResult));
      //this library has converted final result vlaue to positive if it give anaswer innegative
    // console.log(finalResult);
}

myarray()


    // console.log(element,right);
    
    
