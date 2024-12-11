const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
const arr2 = [];
arr2.push(scores[0])
let max = 0;
let min = 0;



for (let i = 1; i < scores.length; i++) {

  
  
if((arr2.every((val)=> val < scores[i] ))){
  max ++
}
 
if((arr2.every((val) => val > scores[i] ))){
  min ++
}




arr2.push(scores[i])
}
  
    console.log(max,min);
    