const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  tree = null;
  root() {
    return this.tree;
  }

  addRecource(node, data) {
    if (node.data == data) return;
    if (node.data > data) {
      if (node.left == null) {
        node.left = new Node(data);
        return;
      } else {
        this.addRecource(node.left, data);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(data);
        return;
      } else {
        this.addRecource(node.right, data);
      }
    }
  }

  hasRecource(node, data) {
    if (node.data == data) return true;
    if (node.data > data) {
      if (node.left == null) {
        return false;
      } else {
        return this.hasRecource(node.left, data);
      }
    } else {
      if (node.right == null) {
        return false;
      } else {
        return this.hasRecource(node.right, data);
      }
    }
  }
  findRecource(node, data) {
    if (node.data == data) return node;
    if (node.data > data) {
      if (node.left == null) {
        return null;
      } else {
        return this.findRecource(node.left, data);
      }
    } else {
      if (node.right == null) {
        return null;
      } else {
        return this.findRecource(node.right, data);
      }
    }
  }
  removeRecource(node, data, prevNode) {
    if (node.data == data) {
      if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        let min = this.minNode(node.right);
        min.left = node.left;
        node = node.right;
        // if (prevNode.left != null && prevNode.left == node) {
        //   prevNode.left = node.right;
        // } else {
        //   prevNode.right = node.right;
        // }
      }
    }
    if (node.data > data) {
      if (node.left == null) {
        return null;
      } else {
        return this.removeRecource(node.left, data, node);
      }
    } else {
      if (node.right == null) {
        return null;
      } else {
        return this.removeRecource(node.right, data, node);
      }
    }
  }
  minRecource(node) {
    if (node.left == null) {
      return node.data;
    } else {
      return this.minRecource(node.left);
    }
  }
  maxRecource(node) {
    if (node.right == null) {
      return node.data;
    } else {
      return this.maxRecource(node.right);
    }
  }
  minNode(node) {
    if (node.left == null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }
  add(data) {
    if (this.tree !== null) {
      this.addRecource(this.tree, data);
    } else {
      this.tree = new Node(data);
    }
  }

  has(data) {
    return this.hasRecource(this.tree, data);
  }

  find(data) {
    return this.findRecource(this.tree, data);
  }

  remove(data) {
    if (this.tree !== null) {
      this.removeRecource(this.tree, data);
    }
  }

  min() {
    if (this.tree !== null) {
      return this.minRecource(this.tree);
    } else {
      return null;
    }
  }

  max() {
    if (this.tree !== null) {
      return this.maxRecource(this.tree);
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
