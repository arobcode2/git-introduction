/*
  In babblebots, a player creates various words from tiles
  and earns a certain number of points per word. The words
  are all unique. The game currently records the score in 
  the order the words were played as a nested array of words
  and scores. For example:
  [
    ['pie', 5],
    ['beak', 10],
    ['pig', 6],
    ['bar', 5],
    ['cake', 10]
  ]

  It would be easier to construct the end of game display (where
  all of the words earning the same score are grouped together)
  if the words were stored in an object where each key was a number
  of points and the value was a list of all words scoring that
  number of points. For example:
  {
    5: ['pie', 'bar'],
    6: ['pig'],
    10: ['beak', 'cake']
  }
  
  The order of the keys doesn't matter, but the order of the words
  within the array should match the order in which the words were 
  played.

  Write a function, scoreTransformer, that takes the nested array
  version of the scores and returns the object version of the scores.
*/