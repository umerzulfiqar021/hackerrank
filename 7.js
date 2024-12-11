let n = 6;

function loop () {
    let element = ''
    let starc = '';
    let sapace = '';
    for (let i = 0; i < n; i++) {// i=1
        
// console.log(i)
        for (let j = n-1; j > i; j--) { //j=5

            element += ' ' //"1""2""3""4"
            // sapce -= ('')
            // starc += '#'
            
        //     // console.log(r);
            
        }
        for (let q = 0; q <= i; q++) {
              element += '#';
                                //"1""2""3""4""5""#"
                                //"1""2""3""4""#""#"

            
        }
        // console.log(element);
        
        element+= '\n'
    }
    console.log(element);
    
}

loop();