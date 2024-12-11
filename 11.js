let count = [73,67,38,33];

let result = count.map((value)=>Math.ceil((value/5))*5)
const final = [];
for (let i = 0; i < count.length; i++) {
    if(result[i]-count[i]<3  ){
        if(result[i]>=40){
            final.push(result[i])
            
        }
        else{
            final.push(count[i]) //$
        }
    }else {
                final.push(count[i])
    }
    
    
}
console.log(final);
