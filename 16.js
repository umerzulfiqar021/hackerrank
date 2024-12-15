const s = [1,4]
const d = 4;
const m = 1;
let count = 0;
let result = 0;

for (let i = 0; i < s.length; i++) { //s.lenght - m 
    result = s[i]
    for (let j = 1; j < m; j++) {
            result += s[j+i]

    }
    if(result == d){
        count ++
    }
    
    
}


console.log(count);







// for (let j = 0; j < m; j++) {
//    result += s[j] 
    
// }

//     if( result == d) {
//         count++
//     }
    
    
// for (let i = m; i < s.length; i++) {
    // let r = s[i+1] * m(s[i+1])
//     let arr1 = []
//    if (arr1.length < m)  {
//     arr1.push(s[i+j])
//    }
    

// console.log(arr1);

    
// }
// console.log(count);
// let arr =   []
//  let arrlenght = arr.length
// let r = s.map((value)=> {
//     if (arrlenght < m ) {
//          arr.push(value)
//     }
   
    
    
//     // let r = if (arrlenght > m) {
//     //     arr.push(s[i+1])
//     // }
// })
// console.log(arr);
// console.log(arr1);
