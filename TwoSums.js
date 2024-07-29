// Sum Entry
function twoSum(nums, target) {
    let num= {};
    for (let i = 0; i < nums.length; i++){
        let comp =target- nums[i];
        if (num.hasOwnProperty(comp)){
            return [num[comp], i];
        }
        num[nums[i]] = i;
    }

}

//Example Entry
let nums1 = [2,7,11,15];
let target1 = 9;

console.log(twoSum(nums1, target1));

let nums2 = [3,2,4];
let target2 = 6;
console.log(twoSum(nums2, target2));

let nums3= [3, 3];
let target3 = 6;
console.log(twoSum(nums3, target3))