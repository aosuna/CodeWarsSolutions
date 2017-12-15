function mix(s1, s2) {
    let re = /[^a-z]/g;
    let first = s1.replace(re, '');
    let second = s2.replace(re, '');
    let sortedStr = [];
    while (first.length > 0 || second.length > 0) {
        let matchF = '',
            matchS = '';
        let getMatch = first.length > second.length ?
            new RegExp(first[0], 'g') : new RegExp(second[0], 'g');
        let letter = first.length > second.length ? first[0] : second[0];

        if (first.length > 0) {
            matchF = first.match(getMatch) || '';
            first = first.split('').filter(match => match != letter).join('');
        }
        if (second.length > 0) {
            matchS = second.match(getMatch) || '';
            second = second.split('').filter(match => match != letter).join('');
        }

        if (matchF.length > 1 || matchS.length > 1) {
            let obj = {};
            if (matchF.length > matchS.length) {
                obj['letter'] = matchF[0];
                obj['size'] = matchF.length;
                obj['str'] = '1:' + matchF.join('');
            } else if (matchF.length === matchS.length) {
                obj['letter'] = matchF[0];
                obj['size'] = matchF.length;
                obj['str'] = '=:' + matchF.join('');
            } else {
                obj['letter'] = matchS[0];
                obj['size'] = matchS.length;
                obj['str'] = '2:' + matchS.join('');
            }
            sortedStr.push(obj);
        }
    }
    let result = sortedStr
        .sort((a, b) => cmp(a.size, b.size) || cmp(b.str, a.str))
        .map(res => res.str)
        .reverse()
        .join('/');
    console.log(result)
}

let cmp = function (a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
}

let s1 = 'my&friend&Paul has heavy hats! &'
let s2 = 'my friend John has many many friends &'
mix(s1, s2) // --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

let s7 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
let s8 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s7, s8) // --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

"A generation must confront the looming "
let s9 = "A generation must confront the looming ";
let s10 = "codewarrs"
mix(s9, s10) // "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")