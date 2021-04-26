# part 1a.

1. values added: 20
2. final result: 20
3. values added: 20
4. Error, because result is declared using ```let``` and cannot be accessed out of the block it was declared in.
5. Error, because the ```const``` cannot be reassigned.
6. Error, because ```const``` has the same scope as ```let``` and cannot be accessed out of the block it was declared in.

# part 1b.

1. Line 12 will print 3 since ```i``` was declared using ```var``` and 3 is the length of the array.
2. Line 13 will print 150, since it's the last ```discountedPrice``` since it was declared in the block above using ```var```.
3. Line 14 will print 150, the last ```finalPrice``` since it was declared using ```var``` and is in the same block.
4. The function will return an array of the discounted prices, stored in ```discounted```. In this case, it's [50, 100, 150].
5. Line 12 will cause an error, because ```i``` was declared in the block for the for loop using ```let```.
6. Line 13 will cause an error, because ```discountedPrice``` was declared in the block for the for loop using ```let```.
7. Line 14 will print 150, the last ```finalPrice``` since it was declared using ```let``` and is in the same block.
8. The function will return an array of the discounted prices, stored in ```discounted```. In this case, it's [50, 100, 150].
9. Line 11 will cause an error, becuase ```i``` was declared in the block for the for loop using ```let```.
10. Line 12 will print 3, ```length``` in this case, which is ```prices.length``` because it was declared as a ```const``` and cannot be changed, and it is also in the same block so it falls in the same scope.
11. The function returns the array of discounted prices, stored in ```discounted```. In this case, it's [50, 100, 150].
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. 32, since the 2 becomes a string (matches the "3", the first entry) and the plus operation concatonates strings.
    B. 1, the 3 is converted to a number since subtraction is only an integer operation.
    C. 3, null converts to 0 when added to an int.
    D. 3null, null is concatonated to "3", a string.
    E. 4, true is converted to 1.
    F. 0, false and null are converted to 0.
    G. 3undefined, adding a string and undefined together concatonates them.
    H. NaN, cannot subtract undefined from a string.
14. A. True, JavaScript converts the string to a number and compares.
    B. False, JavaScript compares strings lexographically.
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