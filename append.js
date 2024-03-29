// In a singly linked list append means adding new node at last ie, as tail.

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
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while (prev.next) {
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
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

// Complexity is linear O(n)

const list=new LinkedList()
list.append(100)
list.append(200)
list.append(300)
list.print()
