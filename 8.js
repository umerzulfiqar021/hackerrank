const arr = [1,5,9,6,8];

const min = arr.sort((a,b)=> a-b)
let element = 0
for (let i = 0; i < arr.length-1; i++) {
   element += min[i]
    
}
let max = 0;
for (let i = 1; i < arr.length ; i++){
    max += min[i]
1   
}
console.log(element, max);
