class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode | null = null;

  while (head) {
    prevNode = new ListNode(head.val, prevNode);
    head = head.next;
  }
  
  return prevNode;
}
