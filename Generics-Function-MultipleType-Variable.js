function MultipleVariable(Language, version) {
    return "Hello ".concat(Language, ". Your score is ").concat(version);
}
console.log(MultipleVariable("Node", 20));
console.log(MultipleVariable("TypeScript", 18));
console.log(MultipleVariable("Node", 20.0));
console.log(MultipleVariable("TypeScript", 18.0));
