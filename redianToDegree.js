const redianValue = 10;

function redianToDegree(redian){
    const degree = (redian * 180) / Math.PI;
    return degree.toFixed(2);
}

const degree = redianToDegree(redianValue);
console.log(degree);