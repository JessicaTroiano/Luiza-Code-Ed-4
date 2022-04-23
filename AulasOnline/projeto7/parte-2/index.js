//Lista Encadeada
//Testar no pythontutor(site)

class Queue{
    constructor(){
        this.fila = [];
    }
    get length(){
        return this.fila.length;
    }
    isEmpty(){
        return this.fila.length === 0;
    }
    enqueue(item){
        this.fila.push(item);
    }
    dequeue(){
        this.fila.shift();
    }
    peek(){
        return this.fila[0];
    }
}

const queue = new Queue ();
queue.enqueue('Ana');
queue.enqueue('Julia');
queue.enqueue('Pedro');
console.log(queue);
console.log(queue.peek());
queue.dequeue();
console.log(queue);