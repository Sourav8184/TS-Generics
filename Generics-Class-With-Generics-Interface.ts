interface Collection<T> {
  add(x: T): void;
  remove(x: T): void;
  getArray(): T[];
}

class ListClass<T> implements Collection<T> {
  list: T[] = [];
  add(value: T): void {
    this.list.push(value);
  }

  //   remove(value: T): void {
  //     this.list = this.list.filter((x) => x !== value);
  //   }

  remove(value: T): void {
    const index = this.list.indexOf(value);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  getArray(): T[] {
    return this.list;
  }
}

const x: Collection<number> = new ListClass<number>();
x.add(10);
x.add(20);
x.add(30);
x.add(40);
x.add(50);

x.remove(30);

console.log(x.getArray());
