var pair1 = { First: "10K", Second: 1000 };
var pair2 = { First: "10K", Second: "1000" };
var c = {
    id: Math.random().toString(),
    run: function () {
        return 10;
    },
};
console.log(c.id);
console.log(c.run());
