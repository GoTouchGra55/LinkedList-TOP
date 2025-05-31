class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  getSize() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  pop() {
    let current = this.head;

    if (!current) {
      return null;
    } else if (!current.next) {
      const value = current.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    } else {
      while (current.next !== this.tail) {
        current = current.next;
      }
      const value = this.tail.value;
      current.next = null;
      this.tail = current;
      this.length--;
      return value;
    }
  }

  contains(value) {
    let index = 0;
    let current = this.head;
    while (index < this.length) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  find(value) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }
    string += 'null';
    console.log(string);
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return -1;
    } else if (index === 0 || index === this.length) {
      this.append(value);
    } else {
      let current = this.head;
      let count = 0;
      while (count < index - 1) {
        current = current.next;
        count++;
      }
      const node = new Node(value);
      node.next = current.next;
      current.next = node;
      this.length++;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let removedValue;

    if (index === 0) {
      removedValue = this.head.value;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let count = 0;
      while (count < index - 1) {
        current = current.next;
        count++;
      }
      removedValue = current.next.value;
      current.next = current.next.next;

      if (index === this.length - 1) {
        this.tail = current;
      }
    }

    this.length--;
    return removedValue;
  }
}

export { Node, LinkedList };
