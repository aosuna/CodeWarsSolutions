function printerError(s) {
    const m = 'm'.charCodeAt(0);
    let isInValid = s.split('').filter(letter => letter.charCodeAt(0) > m );
    return(isInValid.length + '/' + s.length)
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));
console.log(printerError('aaabbbbhaijjjm'));