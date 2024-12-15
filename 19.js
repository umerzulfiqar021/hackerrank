
// const minusleap = 244
const minus = 243
const year = 1918
const dayofp = 256
let d = 0;
if (year == 1918){
    d = (dayofp - minus) + 13
}
if(year < 1918 ){
    if (year % 4 == 0){
            d = 12
    } else {
                d = dayofp - minusleap
    }
}
if(year>1918){
    if((year % 400 == 0) || ( (year % 4 == 0 ) && (year % 100 !== 0))){
            d = 12
    }
    else{
        d = dayofp - minus
    }
}

const date = `${d}.09.${year}`

console.log(date);


// const date = new Date(`${d}.09.${year} `).toLocaleDateString()
// const date = new Date();
// const dateee = date.
// const final = date.replaceAll('/', '.')

// console.log(date);
