class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        let removedNode;
        if(index>=this.size){
            console.error('wrong index')
            return null
        }
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
    }

    removevalue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
        }else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
               let removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }else{
                return null
            }
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();

list.append(5);
list.append(6);
list.append(7);
list.append(9);
list.print();
list.removevalue(5);
list.print();
