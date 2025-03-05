function GenericsArray<T>(items: T[]): T[] {
  return items;
}

console.log(GenericsArray<number>([1, 2, 3, 4, 5]));
console.log(GenericsArray<string>(["A", "B", "C", "D", "E"]));

console.log(GenericsArray([1, 2, 3, 4, 5]));
console.log(GenericsArray(["A", "B", "C", "D", "E"]));
