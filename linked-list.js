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
      return;
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

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
