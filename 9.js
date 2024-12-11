const arr = [2,4,3,4]
// const sort = arr.sort((a,b)=>a-b)
const max = Math.max(...arr) //as it takes 2 parameter
const filter = arr.filter((value)=> {
    if(value==max){
        return value
    }
})
const num = filter.length

console.log( num);
