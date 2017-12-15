function digital_root(n) {
    return n < 10 ?
        n :
        digital_root(
            n.toString().split('')
            .map(item => parseInt(item))
            .reduce((prev, curr) => prev + curr)
        );

    // if (numToString.length === 1) {
    //     return n
    // } else {
    //     let sum = numToString
    //                 .map(item => parseInt(item))
    //                 .reduce((prev, curr) => prev + curr);
    //     return digital_root(sum);
    // }
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));