function shuffle(nums: number[], n: number): number[] {
    let res: number[] = []

    for (let idx = 0; idx < n; idx++) {
        res.push(nums[idx]);
        res.push(nums[idx + n]);
    }

    return res;
}
