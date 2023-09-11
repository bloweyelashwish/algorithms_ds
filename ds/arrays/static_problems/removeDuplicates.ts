function removeDuplicates(nums: number[]): number {
  let left = 1,
    right = 1;

  console.log(left, right);

  while (right < nums.length) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }

    right++;
  }

  return left;
}
