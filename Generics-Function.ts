function LogAndReturn<T>(thing: T): T {
  return thing;
}

console.log(LogAndReturn<string>("Type-Script"));
console.log(LogAndReturn<number>(1));
console.log(LogAndReturn<boolean>(true));

console.log(LogAndReturn("Java-Script"));
console.log(LogAndReturn(0));
console.log(LogAndReturn(false));
