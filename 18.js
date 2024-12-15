const arr = [1,4,4,4,5,5,5,3]
const arr2 = [...new Set(arr)]
let obj = {}
const dou = arr2.forEach((val)=>{
  const count =  arr.filter((value) => value == val).length
  obj[`${val}`] = count
})

const result = Object.values(obj).map((val)=> val)
const max = Math.max(...result)

// console.log(max,obj);
// const maximum = Object.values(obj).map((key,val)=> {
//    return key
// })
let r = []
for (let [k,v] of Object.entries(obj)){
    if(v == max){
        r.push(k)
    }
}
let final = Math.min(...r)
console.log(final);

