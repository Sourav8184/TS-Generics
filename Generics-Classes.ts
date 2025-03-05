class GenericsClass<T> {
  value: T;
  add: (x: T, y: T) => T;
}

const obj1 = new GenericsClass<number>();
obj1.value = 1020;
obj1.add = (x, y) => x + y;
console.log(obj1);
console.log(obj1.value);
console.log(obj1.add(10, 20));

const obj2 = new GenericsClass<string>();
obj2.value = "Classes";
obj2.add = (x, y) => x + " " + y;
console.log(obj2);
console.log(obj2.value);
console.log(obj2.add("Hello", "world"));
