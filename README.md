# Two Sum Problem

This is a JavaScript implementation of the Two Sum problem.

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to the target.

## Example Usage

```javascript
function twoSum(nums, target) {
    let numMap = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
}

// Example usage:
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1));  // Output: [0, 1]

let nums2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(nums2, target2));  // Output: [1, 2]

let nums3 = [3, 3];
let target3 = 6;
console.log(twoSum(nums3, target3));  // Output: [0, 1]
