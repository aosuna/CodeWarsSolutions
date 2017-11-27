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
```
[
    '  *  ',
    ' *** ',
    '*****',
]
```

and a tower with six floors looks like:
```
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

```
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
```

(Use the English alphabet with 26 letters!)

___

## Array element parity -- arrayparity.js

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

For example,

```
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
```
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
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:

```
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```

### Invalid arrays
If we change the first number to something else, `comp` may not return true anymore:
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a,b)` returns false because in `b` 132 is not the square of any number of `a`.
```
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