const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
// class Queue extends ListNode {
//   constructor() {
//     super();
//   }
//   arr = [];
//   getUnderlyingList() {
//     let next = this.arr.length > 1 ? this.arr[1] : null;
//     let obj = {};
//     let prev = null;
//     this.arr.forEach((el) => {
//       let tmp = { value: el, next: null };
//       if (obj.value == null) {
//         obj = tmp;
//       } else {
//         prev.next = tmp;
//       }
//       prev = tmp;
//     });
//     return obj;
//   }
//   s;
//   enqueue(value) {
//     this.arr.push(value);
//   }

//   dequeue() {
//     let tmp = this.arr[0];
//     this.arr.shift();
//     return tmp;
//   }
// }

class Queue {
  list = {};
  getUnderlyingList() {
    return this.list;
  }
  s;
  enqueue(value) {
    const obj = new ListNode(value);
    if ("value" in this.list) {
      let tmp = this.list;
      while (tmp.next != null) {
        tmp = tmp.next;
      }
      tmp.next = obj;
    } else {
      this.list = obj;
    }
  }

  dequeue() {
    let tmp = this.list.value;
    this.list = this.list.next;
    return tmp;
  }
}

module.exports = {
  Queue,
};
