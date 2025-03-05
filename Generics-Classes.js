var GenericsClass = /** @class */ (function () {
    function GenericsClass() {
    }
    return GenericsClass;
}());
var obj1 = new GenericsClass();
obj1.value = 1020;
obj1.add = function (x, y) { return x + y; };
console.log(obj1);
console.log(obj1.value);
console.log(obj1.add(10, 20));
var obj2 = new GenericsClass();
obj2.value = "Classes";
obj2.add = function (x, y) { return x + " " + y; };
console.log(obj2);
console.log(obj2.value);
console.log(obj2.add("Hello", "world"));
