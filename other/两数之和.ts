// *这种写法还可以，先把nums克隆下来，然后进行排序（升序），然后从两边开始加，如果大于target那么让tail向小的方向移，
// *如果小了就让head向大的方向移，最终找到两个对应的值，然后使用indexOf, lastIndexOf 因为题中说了，必然有结果，
// *而且一个index不会出现多次，所以从两个方向找，必然可以找到  
// *时间复杂度应该是 O(n) 吧 sort: O(n) while: O(n) indexOf: O(n) lastIndexOf: O(n)
function twoSum(nums: number[], target: number): number[] {
  const sort = [...nums];
  sort.sort((a, b) => a - b);
  let head = 0;
  let tail = nums.length - 1;
  while (head !== tail) {
    if (sort[head] + sort[tail] > target) {
      tail -= 1
    } else if (sort[head] + sort[tail] < target) {
      head += 1;
    } else {
      break;
    }
  }

  return [nums.indexOf(sort[head]), nums.lastIndexOf(sort[tail])]
};

console.log(twoSum([3, 2, 4], 6));

// *这是我后面改的一版，我想的是直接查找结果值的index，但是性能太差了，时间太慢了，应该就是查找的性能太慢
// *所以还是像上面那样直接取得对应的值在进行查找。
function iTwoSum(nums: number[], target: number): number[] | undefined {
  let head = 0;
  let index;
  while (1) {
    index = nums.indexOf(target - nums[head], head + 1);
    if (index !== -1) {
      return [head, index]
    };
    head += 1;
  }
};


// *官方推荐是哈希表的做法，也就是Map，我开始其实看到了，但是我理解错误了，性能应该是这个好一些的
// *主要的做法就是，先建立一个Map，然后循环检查Map里面是否有指定的值，如果没有就将该值设置为key，index设置为value
// *因为map的查找非常的简单，时间复杂度为O(n) for: O(n)
function twoSumOfficial(nums: number[], target: number): number[] | undefined {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i]
    else map.set(nums[i], i);
  }
}