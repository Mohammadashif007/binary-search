function findDescendingArray(arr, key){
    let s = 0;
    let e = arr.length;
    let mid;
    for(let i = 0; i < e; i++){
        mid = Math.floor(s + (e - s)/2);
        if(arr[mid] === key){
            return mid;
        }
        else if(arr[mid] > key){
            s = mid + 1;
        }
        else {
            e = mid - 1;
        }
    }
    return -1;
}

console.log(findDescendingArray([9, 8, 7, 5, 3, 2, 1, 0], 0));
