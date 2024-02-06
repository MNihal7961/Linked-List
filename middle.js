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
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    findMiddle(){
        if(this.isEmpty()){
            return null
        }else{
            let fast=this.head
            let slow=this.head
            while(fast&&fast.next){
                slow=slow.next
                fast=fast.next.next
            }
            return slow.value
        }
    }
}

const list= new LinkedList()
list.append(4)
list.append(2)
list.append(5)
list.append(6)
console.log(list.findMiddle())