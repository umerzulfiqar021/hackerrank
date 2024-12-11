arr = [1,5,0,-1,-1]
const length = arr.length
const zero = arr.filter((value) => value == 0 ) 
const zerlenght = zero.length
const zeroRatio = (zerlenght/length).toFixed(6)
// console.log(zeroRatio);
const positve = arr.filter((value)=>{
    if(value > 0){
        return value
    }
})
const positiveLenght = positve.length
const positiveRatio = (positiveLenght/length).toFixed(6)
// console.log(positiveRatio);
const negative = arr.filter((value)=>{
    if(value<0){ //Math.sign()
        return value
    }
})
const negativeLenght = negative.length
const negativeRatio = (negativeLenght/length).toFixed(6)
// console.log(negativeRatio);
const result = [positiveRatio,negativeRatio,zeroRatio]
console.log(result.join('\n'));
