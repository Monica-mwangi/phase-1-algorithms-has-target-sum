function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    // Iterate through each subsequent number in the array//looping
    for (let j = i + 1; j < array.length; j++) {
      // Check if the sum of the current number and the new number equals the target
      if (array[i] + array[j] === target) {
        return true;
         // Return true if a pair is found that adds up to the target and false if no pair is found
      }
    }
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Time complexity: O(n)
    The outer loop iterates through each element in the array, which requires O(n) time, 
    and the inner loop iterates through each subsequent element in the array, which takes O(n) time. 
    Therefore, the overall time complexity is O(n) * O(n) = O(n).
*/

/* 

/* 
  Add your pseudocode here
  
  1. loop through each number in the array
  2. For each number, iterate through each subsequent number in the array.
  3. Check if the sum of the current number and the subsequent number equals the target.
  4. If a pair is found that looks like the target, return true.
  5. If no pair is found return false
*/

/*
  Add written explanation of your solution here
  
  The function loops through each number in the array and for each number, 
  it loops through each subsequent number in the array to check if their sum is equal to the target number. 
  If a pair is found that adds up to the target, the function returns true. 
  If no pair is found, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
