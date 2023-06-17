function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

let linkedList = {
  head: null,
  tail: null,
};

linkedList.add = function (val) {
  let node = new LinkedListNode(val);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

linkedList.remove = function(val){
    if(this.head==null){
        return;
    }
    if(this.head.value==val){
        this.head=this.head.next;
        if(this.head==null){
            this.tail=null;
        }
        return
    }

    let temp = this.head;
    let prev = null;

    while (temp !== null) {
        if (temp.value === value) {
         
            prev.next = temp.next;
    
          if (temp === this.tail) {
           
            this.tail = prev;
          }
    
          return;
        }
    
        prev = temp;
        temp = temp.next;
      }

}

linkedList.print = function () {
  let node = this.head;
  let values = [];

  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }
  console.log("LinkedList{" + values.join(",") + "}");
};

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

linkedList.remove(1);

linkedList.print();

console.log(linkedList);
