function checkElementAt(item, toBeChecked, index) {
    return item[index] === toBeChecked;
}
var checker = checkElementAt;
var result1 = checker([1, 2, 3, 4, 5], 3, 2);
console.log(result1);
var result2 = checker(["a", "b", "c", "d"], "z", 2);
console.log(result2);
