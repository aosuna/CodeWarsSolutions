// solution using recursion to find answer
function solveRecursive(arr) {
    let inverse = false;
    for(let i = 0; i < arr.length-1; i++ ) {
        for(let j = 1; j < arr.length; j++) {
            if((-1*arr[i]) === arr[j]) {
                inverse = true;
                arr.splice(i, 1);
                arr.splice(j-1, 1);
                solve(arr)
            }
        }
        if(!inverse) {
            console.log(arr[0])
            break;
        }
    }
    return arr[0]
}

// solution using .includes
function solve(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(!(arr.includes(-arr[i]))) {
            return arr[i];
        }
    }
}

console.log(solve([1,-1,2,-2,3]));
console.log(solve([-3,1,2,3,-1,-4,-2]));
console.log(solve([1,-1,2,-2,3,3]));
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]));
console.log(solve([ -105, -9, -9,-9,-9,-9,105]));