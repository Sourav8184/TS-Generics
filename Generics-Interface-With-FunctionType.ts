interface ElementChecker {
  <T>(item: T[], toBeChecked: T, index: number): boolean;
}

function checkElementAt<T>(item: T[], toBeChecked: T, index: number): boolean {
  return item[index] === toBeChecked;
}

let checker: ElementChecker = checkElementAt;

const result1: boolean = checker<number>([1, 2, 3, 4, 5], 3, 2);
console.log(result1);

const result2: boolean = checker<string>(["a", "b", "c", "d"], "z", 2);
console.log(result2);

/* ----------------------------------------------------------------- */

interface State<R> {
  [key: string]: R;
}

const s1: State<boolean> = { key1: true, key2: false };
console.log(s1);

const s2: State<string> = { key1: "Hello", key2: "World" };
console.log(s2);

/* ----------------------------------------------------------------- */
