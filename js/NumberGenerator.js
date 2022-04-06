function GetRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}
function mathStuff(value,times,maxValue){
    let total = 0;
    for(let i = 1; i<times;i++){
        let tmp = value * i;
        if(tmp > maxValue)
            tmp = maxValue;
        total += tmp;
    }
    return total/times;
}