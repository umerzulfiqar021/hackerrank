const ar = [1,3,2,6,1,2]
const k = 3;
// ar.sort();

let count = 0;
for (let i = 0; i < ar.length; i++) {
    
    for (let j = [i+1]; j < ar.length; j++) {
        // console.log(j);
        
        
        if(   ((ar[i] + ar[j]) % k == 0 )){
            // array.push(ar[i],ar[j])
              count++
        }
        
    }
    
}


console.log(count);

