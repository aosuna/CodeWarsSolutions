function reverseString(str) {
    /*var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;*/
    return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));


function palindrome(str) {
    let palin = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
    let rpalin = palin.split("").reverse().join("");
    if (palin === rpalin) {
        return true;
    }
    return false;
}

// console.log(palindrome('2_A3*3#A2'));
// console.log(palindrome('almostomla'));

function findLongestWord(str) {
    let lstr = str.split(" ").reduce(function (prev, next) {
        if (prev.length > next.length) {
            return prev;
        }
        return next;
    });
    return lstr.length;
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

function titleCase(str) {
    let words = str.toLowerCase().split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    return words;
}

// console.log(titleCase("I'm a little tea pot"));

function largestOfFour(arr) {
    // You can do this!
    var maxVal = arr.map(function (item) {
        var val = item.reduce(function (prev, curr) {
            return prev > curr ? prev : curr;
        });
        return val;
    });
    return maxVal;
}

/*console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));*/

function confirmEnding(str, target) {
    var re = new RegExp(target + "$", "i");
    return re.test(str);
}

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding(
//  "Walking on water and developing software from a specification are easy if both are frozen", "specification"));

function repeatStringNumTimes(str, num) {
    // repeat after me
    return num > 0 ? str.repeat(num) : "";
}

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num <= 3) {
        return str.slice(0, num) + "...";
    } else if (str.length > num) {
        return str.slice(0, num - 3) + "...";
    }
    return str;
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));


function chunkArrayInGroups(arr, size) {
    let narry = [];
    let i = 0;
    while (i < arr.length) {
        narry.push(arr.slice(i, size + i));
        i += size;
    }
    return narry;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));


function slasher(arr, howMany) {
    return arr.slice(howMany);
}

// slasher([1, 2, 3], 2);


function mutation(arr) {
    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
            return false;
        }
    }
    return true;
}

// console.log(mutation(["Alien", "line"]));
// console.log(mutation(['vooooodooooo', 'no']));

function bouncer(arr) {
    return arr.filter(function (el) {
        if (el) return el;
    });
}

// bouncer([7, "ate", "", false, 9]);

function destroyer(arr) {
    let args = [...arguments];
    let filtered;
    if (args.length > 1) {
        let reVals = args.slice(1);
        filtered = arr.filter(function (el) {
            return this.indexOf(el) < 0;
        }, reVals);
    }
    return filtered;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function getIndexToIns(arr, num) {
    let sarr = arr.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < sarr.length; i++) {
        if (sarr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([5, 3, 20, 3], 5));

function rot13(str) { // LBH QVQ VG!
    let result = str.toUpperCase().split("").map(function (letter) {
        let re = /[^A-Z]/i;
        if (re.test(letter)) {
            return letter;
        }
        return letter < "N" ? String.fromCharCode(letter.charCodeAt(0) + 13) :
            String.fromCharCode(letter.charCodeAt(0) - 13);
    }).join("");
    return result;
}

// console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("SERR CVMMN!"));
