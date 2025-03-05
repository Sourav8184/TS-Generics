interface Pair<T, U> {
  First: T;
  Second: U;
}

const pair1: Pair<string, number> = { First: "10K", Second: 1000 };
const pair2: Pair<string, string> = { First: "10K", Second: "1000" };

interface Command<T, R> {
  id: T;
  run(): R;
}

const c: Command<string, number> = {
  id: Math.random().toString(),
  run: function () {
    return 10;
  },
};

console.log(c.id);
console.log(c.run());
