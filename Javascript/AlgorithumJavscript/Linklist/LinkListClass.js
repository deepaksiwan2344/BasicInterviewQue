class Node {
    constructor(value){
        this.vlaue = value
        this.node = null
    }
}


class Linklist{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
      return  this.size === 0;
    }
    getSize(){
      return this.size
    }
}

const list = new Linklist();
console.log("is LinkList is Empty", list.isEmpty());
console.log("is LinkList size",  list.getSize() )
