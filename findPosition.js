function findPosition(arr, key) {
  let s = 0;
  let e = arr.length;
  let mid;
  for (let i = 0; i <= arr.length; i++) {
    mid = s + (e - s) / 2;
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return -1;
}

const arr = [1, 3, 4, 6, 7, 13];

console.log(findPosition(arr, 13));