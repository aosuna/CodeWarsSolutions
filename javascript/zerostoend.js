function moveZeros(arr) {
    let zeros = arr.filter(x => x === 0);
    let newArry = arr.filter(x => x !== 0);
    return newArry.concat(zeros);
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));