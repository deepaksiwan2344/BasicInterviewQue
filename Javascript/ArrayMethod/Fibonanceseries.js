//Fibonance sereis

function FibonanceSeries (n){
    let series = [0,1];
    if(n == 0){
        return [];
        
    }else if(n == 1){
        return [0]
    }else if(n == 2 ){
        return series
    }else{
        for(let i = 2;  i < n; i++){
             let nextNumber = series[i - 1] + series[i - 2];
             series.push(nextNumber)
        }
        return series
    }
    
}
var n = 10
console.log(FibonanceSeries(6))