function longestPalindrome(s){
    let longPal = 0;
    if(s === undefined || s === '') {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }

    for(let i = 0; i < s.length; i++) {
        let foward, backward;
        for(let j = s.length-1; j > i; j--) {
            if(i === j) {
                break;
            }
            forward = s.substring(i,j+1);
            backward = forward.split('').reverse().join('');

            if(forward === backward) {
                if(forward.length > longPal) {
                    longPal = forward.length;
                }
            }
        }
    }
    return longPal > 0 ? longPal : 1;
}

console.log(longestPalindrome("a")) // , 1)
console.log(longestPalindrome("aa")) // , 2)
console.log(longestPalindrome("baa")) // , 2)
console.log(longestPalindrome("aab"))// , 2)
console.log(longestPalindrome("zyabyz")) // , 6, "Are you sure that is a palindrome?")
console.log(longestPalindrome("baabcd")) // , 4)
console.log(longestPalindrome("baablkj12345432133d")) // , 9)
console.log(longestPalindrome("aaaajasdlfjadaaaaaa")) // 6;