var ListClass = /** @class */ (function () {
    function ListClass() {
        this.list = [];
    }
    ListClass.prototype.add = function (value) {
        this.list.push(value);
    };
    //   remove(value: T): void {
    //     this.list = this.list.filter((x) => x !== value);
    //   }
    ListClass.prototype.remove = function (value) {
        var index = this.list.indexOf(value);
        if (index > -1) {
            this.list.splice(index, 1);
        }
    };
    ListClass.prototype.getArray = function () {
        return this.list;
    };
    return ListClass;
}());
var x = new ListClass();
x.add(10);
x.add(20);
x.add(30);
x.add(40);
x.add(50);
x.remove(30);
console.log(x.getArray());
