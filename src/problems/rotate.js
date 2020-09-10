function rotate(nums, times) {
  for(let i=0; i<times; i++){
    const item = nums.pop();
    nums.unshift(item);
  }
  return nums;
}
