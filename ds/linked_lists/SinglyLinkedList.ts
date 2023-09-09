class ListNode<T> {
  value: T | -1;
  next: ListNode<T> | null = null;

  constructor(value: T | -1) {
    this.value = value;
  }
}

class SinglyLinkedList<T> {
  private head: ListNode<T>;
  private tail: ListNode<T>;

  constructor() {
    /*
      Init the list with a 'dummy' node which makes
      removing a node from the beginning of list easier.
    */

    this.head = new ListNode<T>(-1);
    this.tail = this.head;
  }

  insertEnd(value: T) {
    this.tail.next = new ListNode<T>(value);
    this.tail = this.tail.next;
  }

  remove(idx: number) {
    let i = 0;
    let curr: ListNode<T> | null = this.head;

    while (i < idx && curr !== null) {
      i++;
      curr = curr.next;
    }

    if (curr && curr.next) {
      curr.next = curr.next.next;
    }
  }

  print() {
    let curr = this.head.next;
    let s = '';

    while (curr !== null) {
      s += curr.value + ' -> ';
      curr = curr.next;
    }

    s += 'null';
    console.log(s);
  }
}

const list = new SinglyLinkedList<number>();
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.remove(2);
list.print();
