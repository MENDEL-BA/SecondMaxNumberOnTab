/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    
    var max = Math.max.apply(null, nums);  
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === max) {
            nums.splice(i,1);
            i--;
        }
    }
    return Math.max.apply(null, nums); 
  
}

console.log(getSecondLargest([1,78,908,89,13,6,7]))