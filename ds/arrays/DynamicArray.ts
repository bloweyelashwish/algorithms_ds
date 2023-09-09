class DynamicArray<T> {
  private capacity = 2;
  public length = 0;
  private elements: T[] = [];

  constructor(capacity?: number) {
    if (capacity !== undefined) {
      this.capacity = capacity;
    }

    this.elements = new Array<T>(this.capacity);
  }

  pushback(value: T) {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.elements[this.length] = value;
    this.length++;
  }

  resize() {
    // Create new array of double capacity
    this.capacity *= 2;
    const doubledArray = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      doubledArray[i] = this.elements[i];
    }

    this.elements = doubledArray;
  }

  popback() {
    if (this.length > 0) {
      this.length--;
    }
  }

  get(idx: number) {
    if (idx < this.length) {
      return this.elements[idx];
    }

    return undefined;
  }

  insert(idx: number, value: T) {
    if (idx < this.length) {
      this.elements[idx] = value;
      return;
    }

    return;
  }

  print() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += this.elements[i] + ' ';
    }
    console.log(s);
  }
}
