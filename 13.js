let x1 = 1571; //kangroo start location
let v1 = 4240; //meter per jump 
let x2 = 9023; //second kangroo start position
let v2 = 4234; //meter per jump
//after 1 jump x1 + v2 = 3 and x2 + v2 = 3 so both at same position

// let diff1 = Math.max(x1,v1) - Math.min(x1,v1)
// console.log(diff1);

// let diff2 = Math.max(x2,v2) - Math.min(x2,v2)
let bool = 'NO'
for (let i = 0; i <= 10000 ; i++) {

   
    if(x1 == x2) {
       bool = 'YES'
    
    }
    // } else if(x1!==x2){
    //      bool = 'Yes'
    // }
    x1 = x1 + v1;  ///time for diiff1
    x2 = x2 + v2;
}


console.log( bool);
