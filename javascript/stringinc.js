function incrementString (strng) {
    let re  = /\d+$/
    let leftSide, rightSide, rightLength;
    let repeated = '';

    if (strng === undefined || strng === '' || strng === null) {
        return 1
    }
    if (strng.match(re)) {
        leftSide = strng.slice(0,strng.match(re).index);
        rightSide = (parseInt(strng.slice(strng.match(re).index)) + 1);
        rightLength = strng.slice(strng.match(re).index).length;

        if(rightLength > rightSide.toString().length) {
            repeated = '0'.repeat(Math.abs(rightSide.toString().length - rightLength));
        }
        return leftSide + repeated + rightSide;
    }
    return strng + '1';
}

console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar099"));
console.log(incrementString("foobar999"));
console.log(incrementString(""));