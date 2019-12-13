/* eslint-disable strict */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.stack = new Stack();
  }

  enqueue(val) {
    this.stack.push(val);
    this.last = this.stack.top;
  }

  dequeue() {
    let dequeueStack = new Stack();
    while (!this.isEmpty(this.stack)) {
      dequeueStack.push(this.stack.pop());
    }
    //displayStack(dequeueStack);
    let returnVal = dequeueStack.pop();
    this.first = dequeueStack.top;
    while (dequeueStack.top !== null) {
      this.stack.push(dequeueStack.pop());
    }
    //displayStack(this.stack);
    return returnVal;
  }

  isEmpty(stack) {
    return !stack.top;
  }
}

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
           top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
    const node = this.top;
    this.top = node.next;
    if (!node) return undefined;
    return node.data;
  }
}

function main() {
  let starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  display(starTrekQ);
}

function peek(q) {
  if (q.first === null) return null;
  return q.first.data;
}

function isEmpty(q) {
  return !q.first;
}

function display(q) {
  let currNode = q.first;

  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

function displayStack(stack) {
  let currNode = stack.top;

  console.log('____Stack____');
  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

main();
