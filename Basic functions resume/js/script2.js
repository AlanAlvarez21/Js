/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums = [1,2,3,4]) {
    
   
    var product = [(((nums[0]*nums[1])*nums[2])*nums[3]),(nums[3]*nums[1]),(nums[3]*nums[2]),(nums[2]*nums[1])];

    return product;

};


console.log(productExceptSelf());