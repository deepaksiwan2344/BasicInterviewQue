 /*Create a basic singly linked list with append, print, and delete functions.

 the append means To add a new node at the end of the linked list.

 class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  print() {
    let curr = this.head;
    let result = '';
    while (curr) {
      result += curr.value + ' -> ';
      curr = curr.next;
    }
    console.log(result + 'null');
  }
}

// Create a list and append values
const myList = new Linklist();
myList.append(24);
myList.append(47);
myList.print(); // Output: 24 -> 47 -> null


 */

