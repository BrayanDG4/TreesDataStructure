class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
    this.inOrderArray = [];
    this.preOrderArray = [];
    this.postOrderArray = [];
  }

  //ver arbol en consola
  showTree() {
    return this.root;
  }

  //Funcion inicializadora
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertTree(this.root, value);
    }
  }

  insertTree(node, value) {
    //CASO BASE
    if (node === null) {
      return console.log("terminado");
    }

    //LOGICA
    if (value < node.value) {
      if (node.left === null) {
        const newNode = new Node(value);
        node.left = newNode;
        return true;
      }
      this.insertTree(node.left, value);
    } else {
      if (node.right === null) {
        const newNode = new Node(value);
        node.right = newNode;
        return true;
      }
      this.insertTree(node.right, value);
    }
  }
  //Funcion inicializadora
  search(value) {
    const result = this.searchTree(this.root, value);
    return result;
  }

  searchTree(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      return this.searchTree(node.left, value);
    } else if (value > node.value) {
      return this.searchTree(node.right, value);
    } else {
      return node;
    }
  }
  
  //BUSQUEDAS

  //Funcion inicializadora
  inOrder() {
    this.inOrderTree(this.root);
  }
  //ORDEN: IZQUIERDA - RAIZ - DERECHA
  inOrderTree(node) {
    //caso base
    if (node === null) {
      return null;
    }

    if (node.left) {
      this.inOrderTree(node.left);
    }
    this.inOrderArray.push(node.value);
    if (node.right) {
      this.inOrderTree(node.right);
    }
  }
  //Funcion inicializadora
  preOrder() {
    this.preOrderTree(this.root);
  }

  //ORDEN: RAIZ - IZQUIERDA - DERECHA
  preOrderTree(node) {
    //caso base
    if (node === null) {
      return null;
    }

    this.preOrderArray.push(node.value);

    if (node.left) {
      this.preOrderTree(node.left);
    }
    if (node.right) {
      this.preOrderTree(node.right);
    }
  }

  //Funcion inicializadora
  postOrder() {
    this.postOrderTree(this.root);
  }

  //ORDEN: IZQUIERDA - DERECHA - RAIZ
  postOrderTree(node) {
    //caso base
    if (node === null) {
      return null;
    }

    if (node.left) {
      this.postOrderTree(node.left);
    }
    if (node.right) {
      this.postOrderTree(node.right);
    }

    this.postOrderArray.push(node.value);
  }
}

const tree = new BinarySeachTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(30);
tree.insert(3);
tree.insert(8);
tree.insert(15);
