class ListNode2 {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode2 | null,
  list2: ListNode2 | null
): ListNode2 | null {
  const dummyNode = new ListNode2();
  let tail = dummyNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (!list1) {
    tail.next = list2;
  } else {
    tail.next = list1;
  }

  return dummyNode.next;
}
