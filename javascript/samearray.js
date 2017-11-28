function comp(array1, array2) {
    let count = 0;
    console.log(array1, array2);
    if(array1 === null || array2 === null){
        return false;
    }
    if(array1.length === 0 && array2.length === 0){
        return true;
    }
    for (let i = 0; i < array2.length; i++) {
        let sqRoot = Math.sqrt(array2[i]);
        if (!(array1.includes(sqRoot))) {
            return false
        }
        array1[array1.indexOf(sqRoot)] = null;        
    }
    return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

let a3 = [ 2, 2, 3 ];
let b3 = [ 4, 9, 9 ];

let a4 = [ 47, 44, 81, 17, 89, 81 ];
let b4 = [ 2209, 1936, 6561, 289, 7921, 6562 ];
let a5 = [ 8, 8, 56, 22, 57 ];
let b5 = [ 64, 65, 3136, 484, 3249 ];

// console.log(comp(a1, a2));
// console.log(comp(a, b));
// console.log(comp(a3, b3));
// console.log(comp(a4, b4));
console.log(comp([],null));
console.log(comp(a3, b3));
