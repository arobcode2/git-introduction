/*
  Write a function, distanceToBun, that takes an array of ingredients
  and a single ingredient and determines the ingredient-to-bun distance.

  The burger is built bun-ingredients-bun, where the first ingredient
  in the array is placed on the bottom bun, and the second ingredient
  is placed on top of the first ingredient, and so on, until there are
  no more ingredients and a final bun is placed on top.

  For example, the array ['cheese', 'burger', 'tomato'] represents the
  following burger:

  bun
  tomato
  burger
  cheese
  bun

  var burger = ['cheese', 'burger', 'tomato']
  distanceToBun(burger, 'cheese') // returns 0
  distanceToBun(burger, 'burger') // returns 1
  distanceToBun(burger, 'tomato') // returns 0

  Note: the above burger should *NOT* be attempted in real life!

  (adapted from a codejam 2018 problem)
*/