let x = [[2, 3], [4, 5], [6, 7], [1, 2]]

function isNestedArrayInArray(arr, target) {
    return arr.some(subArray => subArray.length === target.length && subArray.every((value, index) => value === target[index]));
}
