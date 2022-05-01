const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {    
    this.head = null;
    this.index = 0;
  }

  getUnderlyingList() {    
    return this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);    
    if (this.head === null) {
      this.head = newNode;
    } else {
      let elem = this.head;
      while (elem.next) {
        elem = elem.next;
      }
      elem.next = newNode;
    }
    this.index += 1;
  }

  dequeue() {
    let el = this.head.value;
    this.head = this.head.next;
    this.index -= 1;
    return el;
  }
}

module.exports = {
  Queue
};
