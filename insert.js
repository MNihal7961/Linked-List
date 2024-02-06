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
    insert(value,index){
        if(index<0||index>this.size){ //for invalid index
            return 
        }
        if(index===0){ //for at biginng of the list
            this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
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

const list=new LinkedList()

list.insert(10,0)
list.insert(20,0)
list.insert(25,1)
list.insert(2,1)
list.print()
