function validBraces(braces) {
    let stack = [];
    let matching = { '(': ')', '[': ']', '{': '}' };
    for (let i = 0; i < braces.length; i++) {
        let offStack;
        if (matching[braces[i]]) {
            stack.push(braces[i])
        } else {
            offStack = stack.pop();
            if (matching[offStack] !== braces[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


console.log(validBraces("()")); // true);
console.log(validBraces("[(])")); // false);
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("(}")); // false
console.log(validBraces("[(])")); // false
console.log(validBraces("[({})](]")) // false;
