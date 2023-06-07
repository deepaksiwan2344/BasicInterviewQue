//compute the exponent of a number
// power (2,4) =16;  2*2*2*2 = 16
//using resurcive functon
const power = (base, exp)=>{
    if(exp === 0) return 1
    return base * power(base, exp - 1);
}
console.log(power(3,4))