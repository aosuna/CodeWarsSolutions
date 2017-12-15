## Build Tower -- buildtower.js

Build Tower by the following given argument:     
**number of floor** (integer and always greater than 0).

Tower block is represented as *

* Python: return a `list`;
* JavaScript: returns an `Array`;
* C#: returns a `string[]`;
* PHP: returns an `array`;
* C++: returns a `vector<string>`;
* Haskell: returns a `[String]`;

for example:
```javascript
[
    '  *  ',
    ' *** ',
    '*****',
]
```

and a tower with six floors looks like:
```javascript
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
```
___

## Find the missing letter -- missingletter.js

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

```javascript
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
```

(Use the English alphabet with 26 letters!)

___

## Array element parity -- arrayparity.js

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

For example,

```javascript
solve[1,-1,2,-2,3] = 3  --> 3 only has a positive ocurrence.
solve([-3,1,2,3,-1,-4,-2]) = -4  --> -4 only has a negative occurence
solve([1,-1,2,-2,3,3]) = 3  --> the integer that is only positive or only negative my appear more than once.

describe("Basic tests", function(){
Test.assertEquals(solve([1,-1,2,-2,3]),3);
Test.assertEquals(solve([-3,1,2,3,-1,-4,-2]),4);
Test.assertEquals(solve([1,-1,2,-2,3,3]),3);
Test.assertEquals(solve([-110,110,-38,-38,-62,62,-38,-38,-38]),-38);
Test.assertEquals(solve([ -9,-105,-9,-9,-9,-9,105]),-9);
});
```
___

## Printer Errors -- printererror.js

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

for example:
```javascript
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
```

___

## Are they the "same"? -- samearray.js

Given two arrays `a` and `b` write a function `comp(a, b)` or `(compSame(a, b)` in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.

For example: 

### Valid Arrays
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:

```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```

### Invalid arrays
If we change the first number to something else, `comp` may not return true anymore:
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a,b)` returns false because in `b` 132 is not the square of any number of `a`.
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```
`comp(a,b)` returns false because in `b` 36100 is not the square of any number of `a`.

### Remarks
`a` or `b` might be `[]` (all languages except R, Shell). `a` or `b` might be `nil` or `null` or `None` (except in Haskell, Elixir, C++, Rust, R, Shell).

If `a` or `b` are `nil` (or `null` or `None`), the problem doesn't make sense so return `false`.

If `a` or `b` are empty the result is evident by itself.

### Note for C

The two arrays have the same size (> 0) given as parameter in function comp.

___

## Triple trouble -- tripledouble 

Write a function

`tripledouble(num1,num2)`
which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
For example:
```javascript
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
```
If this isn't the case, `return 0`


___

## Moving Zeros to End -- zerostoend.js

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
```javascript
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```

___

## Format a string of names -- namesformat.js

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:
```javascript
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

___

## Find the divisors! -- finddivisor.js

Create a function named `divisors`/`Divisors` that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (`null` in C#) (use `Either String a` in Haskell and `Result<Vec<u32>, String>` in Rust).

You can assume that you will only get positive integers as inputs.
___

## Decode the Morse code -- decodemorse.js

In this kata you have to write a simple Morse code decoder. While the [Morse code](https://en.wikipedia.org/wiki/Morse_code "Morse Code Wiki") is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter `A` is coded as `·−`, letter `Q` is coded as `−−·−`, and digit `1` is coded as `·−−−`. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message `HEY JUDE` in Morse code is `···· · −·−−   ·−−− ··− −·· ·`.

**NOTE**: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as `···−−−···`. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.

For example:
```javascript
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```
The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, Go, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: `MORSE_CODE['.--']`, in Java it is `MorseCode.get('.--')`, in C# it is `MorseCode.Get('.--')`, in Haskell the codes are in a `Map String String` and can be accessed like this: `morseCodes ! ".--"`, in Elixir it is `morse_codes` variable.

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

___

## String incrementer -- stringinc.js

Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:
```
foo->foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
```
Attention: If the number has leading zeros the amount of digits should be considered.

___

## Sum of Digits / Digital Root -- digitalroot.js

In this kata, you must create a `digital root` function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Example(s): 

```javascript
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
```

___

## Strings Mix -- strmix.js

Given two strings `s1` and `s2`, we want to visualize how different the two strings are. We will only take into account the *lowercase* letters (a to z). First let us count the frequency of each lowercase letters in `s1` and `s2`.

```
s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'
```

So the maximum for `'a'` in `s1` and `s2` is `4` from `s1`; the maximum for `'b'` is `3` from `s2`. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between `s1` and `s2` in the following string: `"1:aaaa/2:bbb"` where `1` in `1:aaaa` stands for string s1 and `aaaa` because the maximum for a is `4`. In the same manner `2:bbb` stands for string `s2` and `bbb` because the maximum for `b` is `3`.

The task is to produce a string in which each *lowercase letters* of `s1` or `s2` appears as many times as its maximum if this maximum is *strictly* greater than `1`; these letters will be prefixed by the number of the string where they appear with their maximum value and `:`. If the maximum is in `s1` as well as in `s2` the prefix is `=:`.

Examples:
```javascript
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"


s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
```

___