function tripledouble(num1, num2) {
    const n1 = num1.toString();
    const n2 = num2.toString();
    let threepeat = [];
    let repeat = n1[0];

    for (let i = 1; i < n1.length - 1; i++) {
        if (repeat === n1[i] && repeat === n1[i + 1]) {
            threepeat.push(repeat);
        }
        repeat = n1[i];
    }
    for (let i = 0; i < n2.length - 1; i++) {
        if (n2[i] === n2[i + 1] && threepeat.includes(n2[i])) {
            return 1;
        }
    }
    return 0;
}


console.log(tripledouble(795177342999, 531146735));
console.log(tripledouble(1222345, 12345));
console.log(tripledouble(12345, 12345));
console.log(tripledouble(666789, 12345667));
console.log(tripledouble(10560002, 100));