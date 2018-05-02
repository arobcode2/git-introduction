/*
  Write a function, greatestCommonFactor, that takes two integers
  and returns the largest number that is a factor of both integers.
  A factor is a number that divides evenly into another number.
*/

/*
inputs: 2 numbers
outputs: 1 number

process: ex. num1 = 8, num2 = 6, greatest common factor is 2
factors of 8: 1, 2, 4, 8
factors of 6: 1, 2, 3, 6

ex. num1 = 17, num2 = 15, greatest common factor is 1
factors of 17: 1, 17
factors of 15: 1, 3, 5, 15

ex. num1 = 100, num2 = 350, greatest common factor is 50
factors of 100: 1, 2, 4, 5, 10, 20, 25, 50, 100
factors of 350: 1, 2, 5, 7, 10, 14, 25, 35, 50, 70, 175, 350


understanding: find all factors of num1 and store in arr1, find all factors of num2 and store in arr2, iterate through arr1, if element at index in arr1 is === to element at index in arr2- push element into commonFactors arr, return the max number from commonFactors arr

additional notes: to find factors- iterate from 1 to number and if number is divisible by element evenly, push into arr

transformation:
num1 = 17, num2 = 15
num|iterator|is num divisible by element evenly|arr2						
15 |1. 1		| Yes														   |[1]
	 |2. 2		| No 														   |[1]
	 |3. 3		| Yes														   |[1, 3]
	 |4. 4		| No 															 |[1, 3]
	 |5. 5		| Yes															 |[1, 3, 5]
	 |6. 6		| No 															 |[1, 3, 5]
	 |7. 7		| No 															 |[1, 3, 5]
	 |8. 8		| No 															 |[1, 3, 5]
	 |9. 9		| No 															 |[1, 3, 5]
	 |10. 10	| No 															 |[1, 3, 5]
	 |11. 11  | No 															 |[1, 3, 5]
	 |12. 12  | No 															 |[1, 3, 5]
	 |13. 13 	| No 															 |[1, 3, 5]
	 |14. 14	| No 															 |[1, 3, 5]
	 |15. 15	| Yes															 |[1, 3, 5, 15]

num|iterator|is num divisible by element evenly|arr
17 |1. 1		| Yes														   |[1]
	 |2. 2		| No 														   |[1]
	 |3. 3		| No														   |[1, 3]
	 |4. 4		| No 															 |[1, 3]
	 |5. 5		| No															 |[1, 3, 5]
	 |6. 6		| No 															 |[1, 3, 5]
	 |7. 7		| No 															 |[1, 3, 5]
	 |8. 8		| No 															 |
	 |9. 9		| No 															 |
	 |10. 10	| No 															 |
	 |11. 11  | No 															 |
	 |12. 12  | No 															 |
	 |13. 13 	| No 															 |
	 |14. 14	| No 															 |
	 |15. 15	| No															 |
*/