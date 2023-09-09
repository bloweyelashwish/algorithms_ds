class DoublyListNode<T> {
  value: T | -1;
  prev: DoublyListNode<T> | null = null;
  next: DoublyListNode<T> | null = null;

  constructor(value: T | -1) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  private head: DoublyListNode<T>;
  private tail: DoublyListNode<T>;

  constructor() {
    this.head = new DoublyListNode<T>(-1);
    this.tail = new DoublyListNode<T>(-1);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertFront(value: T) {
    const newNode = new DoublyListNode(value);

    newNode.prev = this.head;
    newNode.next = this.head.next;

    if (this.head.next) {
      this.head.next.prev = newNode;
      this.head.next = newNode;
    }
  }

  insertEnd(value: T) {
    const newNode = new DoublyListNode(value);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;

    if (this.tail.prev) {
      this.tail.prev.next = newNode;
      this.tail.prev = newNode;
    }
  }

  removeFront() {
    // Remove first node after dummy head (assume it exists)
    if (this.head.next?.next) {
      this.head.next.next.prev = this.head;
      this.head.next = this.head.next.next;
    }
  }

  removeEnd() {
    if (this.tail.prev?.prev) {
      this.tail.prev.prev.next = this.tail;
      this.tail.prev = this.tail.prev.prev;
    }
  }

  print() {
    let curr = this.head.next;
    let s = '';

    while (curr && curr !== this.tail) {
      s += curr.value + ' -> ';
      curr = curr.next;
    }

    s += 'null';
    console.log(s);
  }
}

const doublyLinkedList = new DoublyLinkedList<number>();
doublyLinkedList.insertEnd(1);
doublyLinkedList.insertEnd(2);
doublyLinkedList.insertEnd(3);
doublyLinkedList.insertFront(0);
doublyLinkedList.removeFront();
doublyLinkedList.removeEnd();
doublyLinkedList.print();
