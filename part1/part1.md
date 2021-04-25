# part 1a.

1. result
2. result
3. result
4. Error, because result is declared using ```let``` and cannot be accessed out of the block it was declared in.
5. 0
6. Error, because ```const``` has the same scope as ```let``` and cannot be accessed out of the block it was declared in.

# part 1b.

1. Line 12 will print prices.length since ```i``` was declared using ```var```.
2. Line 13 will print the ```discountedPrice``` since it was declared in the block above using ```var```.
3. Line 14 will print ```finalPrice``` since it was declared using ```var``` and is in the same block.
4. The function will return an array of the discounted prices, stored in ```discounted```.
5. Line 12 will cause an error, because ```i``` was declared in the block for the for loop using ```let```.
6. Line 13 will cause an error, because ```discountedPrice``` was declared in the block for the for loop using ```let```.
7. Line 14 will print ```finalPrice``` since it was declared using ```let``` and is in the same block.
8. The function will return an array of the discounted prices, stored in ```discounted```.
9. Line 11 will cause an error, becuase ```i``` was declared in the block for the for loop using ```let```.
10. Line 12 will print ```length```, which is ```prices.length``` because it was declared as a ```const``` and cannot be changed, and it is also in the same block so it falls in the same scope.
11. The function will return an empty array, as it was declared using ```const``` in the beginning of the function and cannot be changed.
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. Error, types do not match
    B. Error, types do not match
    C. 3, null converts to 0 when added to an int.
    D. Error, cannot add null to ```'3'```
    E. 4, true is converted to 1.
    F. 0, false and null are converted to 0.
    G. 3undefined, adding a string and undefined together concatonates them.
    H. NaN, cannot subtract undefined from a string.
14. A. True, JavaScript converts the string to a number and compares.
    B. True, JavaScript compares strings lexographically.
    C. True, ```==``` compares two variables regardless of datatype.
    D. False, ```===``` compares two variables and takes datatype into account.
    E. False, ```true``` converts to ```1``` and that is not equivalent.
    F. True, the types are the same and ```Boolean(2)``` gives ```true```.
15. ``==`` compares two variables regardless of the datatype, so it returns ```True``` for comparing ```15``` and ```"15"```. ```===```, on the other hand, compares two variables but also checks their datatype. It would return ```False``` for the previous example given.
16. See javascript file.
17. This function returns [2,4,6]. ```modifyArray``` iterates through the entire array that is passed through and then runs the callback function on each value of the array. It pushes the result of the callback function into a new array. So, for the first value or ```array``` (or 1, in this case), ```doSomething``` is the callback function and returns ```1 * 2```. Then, the result is pushed onto the new array. The same thing occurs for the rest of the array.
18. See javascript file.
19. The output is 
    1
    4
    3
    2