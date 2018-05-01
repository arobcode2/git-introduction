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

/*
Prompt Says:
1. Given an array of ingredients (strings) and 1 indgredient (string)  1. ['cheese', 'burger', 'tomato'], 'cheese'
2. Returns number (how far the indgredient is to a bun) 2.  0

Understanding: Given 1 array of ingredients, create counter, iterate through ingredients array, if passed in ingredient is at index 0 or ingredients array.length -1 count is 0, otherwise increment count, return count

if arr length is odd: get index of last item, divide that by 2, if indexOf passed in ingredient is > than midpoint: indexOf last item in arr - indexOf passed in ingredient. if indexOf passed in ingredient is === midpoint: count is indexOf passed ingredient, if indexOf passed in ingredient is < than midpoint: count is indexOf passed in ingredient

if arr length is even: get index of last item, divide that by 2, if indexOf passed in ingredient is > than midpoint: count is indexOf last item in arr - indexOf passed in ingredient. if indexOf passed in ingredient is < than midpoint: count is indexOf passed in ingredient

Transformation:
['cheese', 'burger', 'mayo', tomato'] => 3, 3/2 = 1.5
passed in ingredient: 'mayo' => 2, 2 > 1.5, 3 - 2 = 1
return 1

['cheese', 'burger', 'mayo', tomato'] => 3, 3/2 = 1.5
passed in ingredient: 'burger' => 1, 1 < 1.5, 1
return 1

['cheese', 'burger', 'bacon', 'mayo', 'lettuce', 'tomato'] => 5, 5/2 = 2.5
passed in ingredient: 'mayo' => 3, 3 > 2.5 => 5 - 3 = 2 
return 2

['cheese', 'burger', 'mayo', 'lettuce', 'tomato'] => 4, 4 / 2 = 2
passed in ingredient: 'lettuce' => 3, 3 > 2 => 4 - 3 = 1
retrun 1

['cheese', 'burger', 'tomato'] => 2, 2/2 = 1 
passed in ingredient: 'burger' => 1, 1 === 1
return 1

['cheese', 'burger', 'bacon', 'pickles', 'mayo', 'lettuce', 'tomato'] => 4, 4/2 = 2
passed in ingredient: 'burger' => 1, 1 < 2 => 1
return 1
*/

function distanceToBun(arr, ingredient) {
  //create variable to store distance
  var distance = 0;
  //create midpoint variable
  var midpoint = 0;
  //store index of last item in arr in var
  var lastItemInd = arr.length - 1;
  //store index of ingredient in var
  var ingredientInd = arr.indexOf(ingredient);
  //calculate midpoint: index of last item in arr / 2
  midpoint = lastItemInd / 2;
  //if arr length is odd
  if (arr.length % 2 !== 0) {
    //if index of ingredient is greater than midpoint
    if (ingredientInd > midpoint) {
      //distance is index of last item in arr - index of ingredient
      distance = lastItemInd - ingredientInd;
    }
    //else
    else {
      //distance is index of ingredient
      distance = ingredientInd;
    } 
  }
  //if arr length is even
  if (arr.length % 2 === 0) {
    //if index of ingredient is greater than midpoint
    if (ingredientInd > midpoint) {
      //distance is index of last item in arr - index of ingredient
      distance = lastItemInd - ingredientInd;
    }
    //else
    else {
      //distance is index of ingredient
      distance = ingredientInd;
    }
  }
  //return distance
  return distance;
}

//console.log(distanceToBun(['cheese', 'burger', 'bacon', 'pickles', 'mayo', 'lettuce', 'tomato'], 'pickles'));