function removeElement(nums: number[], val: number): number {
  let left = 0,
    right = 0;

  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }

  return left;
}
