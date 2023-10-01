function mergeSort(arr) {
  if (arr.length === 0) return;
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let k = 0;
  let arr = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k++] = left[i++];
    } else arr[k++] = right[j++];
  }

  while (i < left.length) arr[k++] = left[i++];

  while (j < right.length) arr[k++] = right[j++];
  return arr;
}

console.log(mergeSort([8, 7, 3, 9, 1, 4, 2, 6, 5]));
