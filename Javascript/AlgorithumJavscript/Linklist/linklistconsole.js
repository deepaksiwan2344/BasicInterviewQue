class Node {
    constructor(value){
        this.value = value
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
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
        
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr = this.head
            console.log("curr",curr)
            let listvalue = ''
            while(curr){
                listvalue += `${curr.value}`
                curr = curr.next
            }
            console.log(listvalue)
        }
    }
}

const list = new Linklist();
console.log("is LinkList is Empty", list.isEmpty());
console.log("is LinkList size",  list.getSize() )
list.print();
list.prepend(23);
list.print();
list.prepend(24);
list.print();
list.prepend(48)
list.print()

