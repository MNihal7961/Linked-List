// In a singly linked list prepend means adding new node at first ie, as head.

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    prepend(value){
        const node=new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues)
        }
    }
}

// complexity is constant O(1)

const list=new LinkedList()
list.prepend(100)
list.prepend(200)
list.print()