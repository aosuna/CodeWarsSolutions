function divisors(integer) {
    let divisor = [];
    
    for(let i = 2; i < integer-1; i++) {
        if(integer%i === 0){
            divisor.push(i);
        }
    }
    return divisor.length ? divisor : `${integer} is prime`;
};

console.log(divisors(15)); // [3, 5]
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(13)); // "13 is prime"