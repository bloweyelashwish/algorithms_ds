class StaticArray<T> {
  private capacity: number = 3;
  private elements: (T | undefined)[] = [];
  public length: number = 0;

  constructor(capacity?: number) {
    if (capacity !== undefined) {
      this.capacity = capacity;
      this.elements = new Array(this.capacity).fill(undefined);
    }
  }

  insertEnd(newElement: T) {
    if (this.length < this.capacity) {
      this.elements[this.length] = newElement;
      this.length++;
    }
  }

  removeEnd() {
    if (this.length > 0) {
      this.elements[this.length - 1] = undefined;
      this.length--;
    }
  }

  // Assuming idx is a valid index and array is not full.
  insertAt(idx: number, newElement: T) {
    for (let i = this.length - 1; i > idx - 1; i--) {
      // Shift elements to the right starting from the end to insertion index.
      this.elements[i + 1] = this.elements[i];
      this.length++;
    }

    this.elements[idx] = newElement;
  }

  // Assuming idx is a valid index.
  removeAt(idx: number) {
    // Remove value at index idx before shifting elements to the left.
    for (let i = idx + 1; i < this.length; i++) {
      this.elements[i - 1] = this.elements[i];
    }

    this.elements[this.length - 1] = undefined;
    this.length--;
  }

  print() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += this.elements[i] + ' ';
    }

    console.log(s);
  }

  getValues() {
    return this.elements.filter(Boolean);
  }
}
