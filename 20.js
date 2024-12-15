const bill = [3,10,2,9]

let k = 1;
const b = 12;

const r = []

for (let i = 0; i < bill.length; i++) {
    
    if(bill[i]== bill[k]){
        
    }else{
        r.push(bill[i])
    }
    
}
let result = 'Bon Appetit'
const check = r.reduce((reducce,val)=>  reducce +val)
const half = check / 2
if((check-b == half) ? result : (result = b - half))
console.log(result);
