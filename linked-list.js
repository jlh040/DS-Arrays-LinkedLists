/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let removedVal;

    if (!currentNode) {
      throw Error('List is empty!');
    }
    else if (!currentNode.next) {
      removedVal = currentNode.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedVal;
    }
    else {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      removedVal = currentNode.next.val;
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return removedVal;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let removedVal;

    if (this.length === 0) {
      return;
    }
    else if (this.length === 1) {
      removedVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedVal;
    }
    else {
      removedVal = this.head.val;
      this.head = this.head.next;
      this.length--;
      return removedVal;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      return;
    }
    else {
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return;
    }
    else {
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
      currentNode.val = val;
      return true;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let currentNode = this.head;

    if (this.length === 0) {
      if (idx === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
      }
      else {
        return;
      }
    }
    else if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    else {
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let removedVal;
    let currentNode = this.head;
    if (this.length === 0 || idx >= this.length) return;

    if (idx === 0) {
      removedVal = this.head.val;
      this.head = this.head.next ? this.head.next : null;
      this.tail = this.head === null ? null : this.tail;
      this.length--;
      return removedVal;
    }
    else if (idx === this.length - 1) {
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      removedVal = currentNode.next.val;
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return removedVal;
    }
    else {
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      removedVal = currentNode.next.val;
      let temp = currentNode.next.next;
      currentNode.next.next = null;
      currentNode.next = temp;
      this.length--;
      return removedVal;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let currentNode = this.head;
    let total = currentNode.val;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      total += currentNode.val;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
