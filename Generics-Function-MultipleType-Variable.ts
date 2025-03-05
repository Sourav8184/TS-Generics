function MultipleVariable<T, U>(Language: T, version: U): string {
  return `Hello ${Language}. Your score is ${version}`;
}

console.log(MultipleVariable<string, number>("Node", 20));
console.log(MultipleVariable<string, number>("TypeScript", 18));

console.log(MultipleVariable("Node", 20.0));
console.log(MultipleVariable("TypeScript", 18.0));
