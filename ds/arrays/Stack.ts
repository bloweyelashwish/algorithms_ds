class Stack<T> {
  stack: T[] = new Array();

  push(value: T) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }
}
