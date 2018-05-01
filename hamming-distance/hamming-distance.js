/*
  Write a function, hammingDistance, that takes two strings of
  the same length (representing two DNA strands) and returns the
  hamming distance between the two strings. 

  The hamming distance is found by comparing two DNA strands and
  counting how many of the nucleotides are different from their 
  equivalent positions in the other string.

  The hamming distance of the following two strands of DNA is 7.

  GAGCCTACTAACGGGAT
  CATCGTAATGACGGCCT
  ^ ^ ^  ^ ^    ^^
*/


/*
Prompt Says: 
1. Given two strings of same length  1. GAGCCTACTAACGGGAT
                                        CATCGTAATGACGGCCT
2. Return number (count of differences in strings)  2. 7

Understanding: create counter, iterate through both strings, compare each element in string 1 to element in string 2, if both elements are not identical- incremenet count, return count

Transformation: 
iterator on string 1 | iterator on string 2 |  Are elements identical | count 
1. 'G'               |  'C'                 |   No                    | 1
2. 'A'               |  'A'                 |   Yes                   | 1
3. 'G'               |  'T'                 |   No                    | 2
4. 'C'               |  'C'                 |   Yes                   | 2
5. 'C'               |  'G'                 |   No                    | 3
6. 'T'               |  'T'                 |   Yes                   | 3
7. 'A'               |  'A'                 |   Yes                   | 3
8. 'C'               |  'A'                 |   No                    | 4
9. 'T'               |  'T'                 |   Yes                   | 4
10. 'A'              |  'G'                 |   No                    | 5
11. 'A'              |  'A'                 |   Yes                   | 5
12. 'C'              |  'C'                 |   Yes                   | 5
13. 'G'              |  'G'                 |   Yes                   | 5
14. 'G'              |  'G'                 |   Yes                   | 5
15. 'G'              |  'C'                 |   No                    | 6
16. 'A'              |  'C'                 |   No                    | 7
17. 'T'              |  'T'                 |   Yes                   | 7
Return count (7)
*/

function hammingDistance(dNA1, dNA2) {
  //create counter
  var count = 0;
  //split dNA1 into an array of chars
  var dNA1Chars = dNA1.split('');
  //split dNA2 into an array of chars
  var dNA2Chars = dNA2.split('');
  //iterate through dNA1 chars and dNA2 chars
  for (var i = 0; i < dNA1.length; i++) {
    //if element at index of dNA1 is not equal to element at index of dNA2
    if (dNA1[i] !== dNA2[i]) {
      //increment count
      count++;
    }
  }
  //return count
  return count;
}

//console.log(hammingDistance('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'));
