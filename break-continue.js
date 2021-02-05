const nums = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    // const element = nums[i];
    if (nums[i]>4) {
        break;
    }
    console.log(nums[i])
}

const num = [1,-2,3,-4,-5,6,-7,8,9];

for (let i = 0; i < num.length; i++) {
    // console.log(num[i]);
    // const element = nums[i];
    if (num[i]<0) {
        continue;
    }
    console.log(num[i])
}