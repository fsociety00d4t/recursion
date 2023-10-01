function fib(n) {
  let arr = [0, 1];

  if (n === 0) return arr[0];
  if (n === 1) return arr[1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}
console.log(fib(8));

// recursive solution:;
function fibRec(n, arr = [0, 1]) {
  if (n === 1) return 0;
  if (n === 2) return [0, 1];
  arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
  fibRec(n - 1, arr);
  return arr;
}

console.log(fibRec(8));
