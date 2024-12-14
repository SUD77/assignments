/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
  let largestNo=numbers[0];
  console.log(largestNo);
  
  for(let i=0;i<numbers.length;i++){
    if(largestNo<numbers[i]){
      largestNo=numbers[i];
    }
  }

  return largestNo;
}

module.exports = findLargestElement;