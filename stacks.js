/* eslint-disable indent */
/* eslint-disable strict */
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function peek(stack) {
    if (stack.top === null) return null;
    return stack.top.data;
}

function isEmpty(stack) {
    return !stack.top;
}

function display(stack) {
    let currNode = stack.top;

    while (currNode !== null) {
        console.log(currNode.data);
        currNode = currNode.next;
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
        return node.data;
    }
}

let starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

display(starTrek);
console.log(isEmpty(starTrek));

//first item added would be Kirk
//first from top would be Scotty

starTrek.pop();
starTrek.pop();

display(starTrek);
//to remove McCoy we would need to pop() twice because it removes from the top of the stack

function is_palindrome(s) {
    let newStack = new Stack();
    let newString = '';
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0; i < s.length; i++) {
        newStack.push(s[i]);
    }
    while (!isEmpty(newStack)) {
        newString += newStack.pop();
    }
    return newString === s;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function matchingParantheses(str) {
    let newStack = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            newStack.push(str[i]);
        }
        else if (str[i] === ')') {
            newStack.pop();
        }
    }
    return isEmpty(newStack);

}

console.log(matchingParantheses('(())'));
console.log(matchingParantheses('(()'));