/* eslint-disable strict */
// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
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
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

let mQueue = new Queue;
let fQueue = new Queue;


const dancer = (gender, name) => {

  if (gender === 'M') {
    mQueue.enqueue(name);
  }
  else if (gender === 'F') {
    fQueue.enqueue(name);
  }
  if (!isEmpty(mQueue) && !isEmpty(fQueue)) {
    console.log(`${mQueue.dequeue()} and ${fQueue.dequeue()}`);
  }
};

// dancer('F', 'Jane');
// dancer('M', 'Frank');
// dancer('M', 'John');
// dancer('M', 'Sherlock');
// dancer('F', 'Madonna');
// dancer('M', 'David');
// dancer('M', 'Christopher');
// dancer('F', 'Beyonce');


let OBL = new Queue();

const bankLine = (OBL) => {
  if (isEmpty(OBL)) {
    console.log('Line is empty');
    return;
  }
  const randomNum = Math.random();
  let person = OBL.dequeue();
  console.log(randomNum);
  if (randomNum <= .25) {
    OBL.enqueue(person);
  }
  display(OBL);
  console.log('separate');

};

// setTimeout(() => bankLine(OBL), 3000);
OBL.enqueue('Kirk');
OBL.enqueue('Spock');
OBL.enqueue('Uhura');
OBL.enqueue('Sulu');
OBL.enqueue('Checkov');
OBL.enqueue('Andrea');
OBL.enqueue('Dan');
OBL.enqueue('Tauhida');
OBL.enqueue('Mike');
OBL.enqueue('Chris');

while (!isEmpty(OBL)) {
  bankLine(OBL);
}
display(OBL);






main();
