// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/

// class Node {
//   constructor(element) {
//     this.element = element;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   addNode(element) {
//     var node = new Node(element);
//     var current;
//     if (this.head == null) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

//   removeNode(element) {
//     let current = this.head;
//     let prev = null;
//     while (current != null) {
//       if (current.element === element) {
//         if (prev == null) {
//           this.head = current.next;
//         } else {
//           prev.next = current.next;
//         }
//         this.size--;
//         return current.element;
//       }
//       prev = current;
//       current = current.next;
//     }
//     return -1;
//   }

//   printList() {
//     let curr = this.head;
//     let str = "";
//     while (curr) {
//       str += curr.element + " ";
//       curr = curr.next;
//     }
//     console.log(str);
//   }
// }

// let ll = new LinkedList();
// ll.addNode(100);
// ll.addNode(200);
// ll.addNode(300);
// ll.addNode(400);
// ll.removeNode(100);
// console.log(ll);
// ll.printList();
