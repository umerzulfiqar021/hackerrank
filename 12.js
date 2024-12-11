let s = 7; //starting point
let t = 11; //ending point
let a = 5; //location of apple tree
let b = 15; //location of orange tree
const apples = [-2,2,1]  //distances at which each apple falls from tree
const oranges = [5,-6]  //ditances at which each orange falls from tree
const positionApple = []
const positionOrange = []
for (let i = 0; i < apples.length; i++) {
    
    positionApple.push(a+(apples[i]))
    
}
for (let j = 0; j < oranges.length; j++) {
    positionOrange.push(b+(oranges[j]))
    
}
let countapple = 0;
let countorange = 0;
for (let i = 0; i < positionApple.length; i++) {
  if  (positionApple[i]>=s ){
        if(positionApple[i]<= t){
            countapple = countapple +1
        }
    }
    
}
for (let i = 0; i < positionOrange.length; i++) {
    if(positionOrange[i]>=s){
        if(positionOrange[i]<=t){
            countorange++
        }
    }
    
}
console.log(countapple,countorange);
