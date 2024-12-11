let s = '12:40:03AM';
let [hours,mint,sec] = s.slice(0,8).split(':')
let hour = Number(hours)
 if (s.includes('PM')) {

    hour == 12 ? hour : hour+=12
    
} else if(s.includes('AM')) {
    hour == 12 ? hour = Number('00')  : hour //> 11 ? 0+=hour : hour

}
    let h = hour < 10 ? 0+ `${hour}` : hour
    let str = ( `${h}:${mint}:${sec}`).toString()
console.log( h );
