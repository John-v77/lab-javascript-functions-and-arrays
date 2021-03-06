// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2){
  if (num1 > num2){
    return num1
  }else{
    return num2
  }
}





// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(list1){

  // checks if the list is empty

  if(list1.length === 0){
    return null
  }
  // getting the length of the array for optimizing the loop
  let lenList = list1.length
  let longestWord = ""

  // loop that checks through the list and compares length of word
  // with the longest word previously found

  for(let i=0;i<lenList;i++){
    if(list1[i].length >longestWord.length){
      longestWord = list1[i]  
    }

  }

  return longestWord
}




// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(list1){

  // checks if the list is empty
  if(list1.length === 0){
    return 0
  }

  
  // getting the length of the array for optimizing the loop
  let listSize = list1.length
  let totalSum = 0;


  // loop that adds the numbers to the total
  for(let i=0;i<listSize;i++){
    totalSum +=list1[i]
  }
  return totalSum
}

function sum(listTobeReduced){

  // checks if the list is empty
  if(listTobeReduced.length === 0){
    return 0
  }

  let totalSumToBeReturned = 0;
  // getting the length of the array for optimizing the loop and asigns a value
  //  to the variable to be added to the total
  let listSize = listTobeReduced.length
  let itemToBeAdded =0

  // loops throuh each element of the list
  for(let i=0;i<listSize;i++){

    // if the element is type boolean - 
    // transforms false in no.: 0 and true in no: 1


      if(typeof(listTobeReduced[i]) === 'boolean'){
          if(listTobeReduced[i] === false){
            itemToBeAdded = 0
          }else{
            itemToBeAdded = 1
          }


          // if the the element is a string gets length of the string
      }else if(typeof(listTobeReduced[i]) === 'string'){
        itemToBeAdded = listTobeReduced[i].length

        // if the the element is a number is left unchanged
      }else if(typeof(listTobeReduced[i]) === 'number'){
        itemToBeAdded = listTobeReduced[i]

         // if the the element is an object throw an error
      }else if(typeof(listTobeReduced[i]) === 'object'){
        // itemToBeAdded = Object.keys(list1[i]).length
        throw new Error("Unsupported data type sir or ma'am")
      }
    totalSumToBeReturned +=itemToBeAdded
  }
   return totalSumToBeReturned
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(ArrayTobeAveraged){

  // checks if the list is empty
  if(ArrayTobeAveraged.length ===0){
    return null
  }

  // gets the total sum of the array
  let totalArray = sumNumbers(ArrayTobeAveraged)
  
  // gets the number of elements in the array
  let lenArray = ArrayTobeAveraged.length
  
  // returns the average
  return totalArray/lenArray
}


function avg(arr){
  // checks if the list is empty
  if(arr.length === 0){
    return null
  }
  // gets the total sum of mixed array
  let sumMixedArray = sum(arr)

  // gets the number of elements in the array
  let lenMixedArray = arr.length

  // returns the average
  let avgArr = parseFloat((sumMixedArray/lenMixedArray).toFixed(2))
  return avgArr
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(ArrayOfWords){
  // checks if the list is empty
  if(ArrayOfWords.length===0){
    return null
  }
  let lenArray = ArrayOfWords.length
  let totalWordsCount = 0
  for(let i=0; i<lenArray; i++){
    totalWordsCount += ArrayOfWords[i].length
  }
  return totalWordsCount/lenArray
}



// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


function uniquifyArray(wordsUnique){
  // checks if the list is empty
  if (wordsUnique.length === 0){
    return null
  }
  let newArr = []
  let lenWordsUnique = wordsUnique.length
  for(let i = 0; i < lenWordsUnique; i++){
    if(newArr.indexOf(wordsUnique[i]) === -1){
      newArr.push(wordsUnique[i])
      
    }
  }
  return newArr
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


function doesWordExist(arrayOfWords,wordToFind){
  // checks if the list is empty
  if(arrayOfWords.length === 0){
    return null
  }
   if(arrayOfWords.includes(wordToFind)){
    return true
  }else{
   return false}
}

// // Iteration #7: Count repetition

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArr, wordSearch){
  let count = 0
  for(let i=0; i<wordsArr.length; i++){
    if (wordSearch ==wordsArr[i]){
      count +=1
    }
  }
  return count
}

// Iteration #8: Bonus



const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];


function greatestProduct(matrix){

  let arr = matrix
  let newArr = matrix.length

  let newArr1 = matrix.length*2
}
//   let max=0
//   for(let i= 0; i<matrix.length;i++){
//     let rowProd = 1
//     let colProd = 1
//     for(let j= 0; j<matrix.length;j++){
//       for(let k= 0; k<4 ;j++){
//           rowProd *= mat[y][x] || 0
//           colProd *= mat[y+1][x] || 0
//       }
//         max = Math.max(max,rowProd,colProd)
//     }
//   }
// }


