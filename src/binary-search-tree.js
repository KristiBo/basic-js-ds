const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currNode = this.head;

    while (currNode) {
      if (newNode.data < currNode.data) {
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }
        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }

  has(data) {
    let currNode = this.head;

    while (currNode) {
      if (data === currNode.data) return true;
      
      if (data < currNode.data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currNode = this.head;

    if (!currNode) return;
    

    while (data !== currNode.data) {
      if (data < currNode.data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return currNode;
  }

  remove(data) {
    this.head = removeData (this.head, data);
    
    function removeData (currNode, data) {
      if (!currNode) return;

      if (data === currNode.data) {
        if (!currNode.left && !currNode.right) return;
        if (!currNode.left) return currNode.right;
        if (!currNode.right) return currNode.left;
      } else if (data < currNode.data) {
        currNode.left = removeData(currNode.left, data);
        return currNode;
      } else {
        currNode.right = removeData(currNode.right, data);
        return currNode;
      }

      let minRight = currNode.right;

      while (minRight.left) {
        minRight = minRight.left;
      }

      currNode.data = minRight.data;
      currNode.right = removeData(currNode.right, minRight.data);
      return currNode;
    }
  }

  min() {
    let currNode = this.head;

    if (!currNode.left) return;

    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    let currNode = this.head;

    if (!currNode.right) return;

    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree
};