const arr = [338, 65, 713, 595, 428, 610, 728, 573, 871, 868];
function sum(array) {
    
    console.log( array.reduce((result,value) => result + value));
    
}
// sum(arr)
const array = [1,2,3,5];
const array2 = [0,3,4,5];
function compareTriplets() {
    let result = [0,0];


// console.log(result);

    for (let index = 0; index < array.length; index++) {

        if (array[index]>array2[index]) {
          result[0] += 1;
        } 
        else if (array2[index]> array[index])  {
         result[1] += 1;}
        // } else{
        //         return result;
        // }
        
    }
       console.log(result);
       
}
compareTriplets();
const ar = [1];
ar[0] += 1 

// console.log(ar);

