// 1. a) sa se returneze daca exista un numar in array

let arr = [1, 5, 8, 9, 11, 14, 17, 25, 64, 89];

let findNumber = (val) => {
  let findedNumber = [];
  arr.forEach(function (num) {
    if (val === num) {
      findedNumber.push(val);
    }
  });
  console.log(findedNumber);
};
findNumber(8);

// 1. b) sa se returneze pozitia unui numar in array

console.log(arr.indexOf(11));

// 2. - create a balanced tree from an array [1, 8, 52, 17, 4, 78, 6, 11, 91]
// https://medium.com/confessions-of-a-bootcamp-grad/how-to-solve-leetcodes-convert-sorted-array-to-binary-search-tree-problem-with-javascript-a61e6d6d6c36

function TreeNode(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

let sortedArrayToBST = function (nums) {
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  } else if (nums.length === 0) {
    return null;
  }

  let centerIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[centerIdx]);

  let leftSubTree = nums.slice(0, centerIdx);
  root.left = sortedArrayToBST(leftSubTree);

  let rightSubTree = nums.slice(centerIdx + 1, nums.length);
  root.right = sortedArrayToBST(rightSubTree);

  return root;
};

console.log(sortedArrayToBST([1, 8, 52, 17, 4, 78, 6, 11, 91]));

// - sa se tipareasca suma valorilor de pe fiecare nivel dintr-un arbore
