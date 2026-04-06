class CircularQue {
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.size = 0;
        this.arr = new Array(5);
    }

    length(){
        return console.log(this.size);
    }
    
    add(val){
        if (this.size==this.arr.length) {
            return console.log("Size is fulled");
        } else if(this.size==0){
            this.front = this.rear = 0; 
            this.arr[0] = val;
        }else if (this.rear< this.arr.length-1) {
            this.arr[++this.rear] = val;
        }else if (this.rear== this.arr.length-1) {
            this.arr[0] = val;
        }
        this.size++;
    }

    remove(){
        if (this.size==0) {
            return console.log("Already khali bawa🤦‍♂️🤦‍♂️")
        } else {
            let x = this.front;
            if (this.front==this.arr.length-1) {
                this.front=0;
            }else{
                this.front++;
            }
            this.size--;
            return console.log('remove-indx:', x);
        }
    }

    peek(){
        if (this.size==0) {
            return console.log("peek khali hai mittar");
        } else {
            return console.log(this.arr[this.front]);
        }
    }

    display(){
        let res = "";
        if (this.size==0) {
            return console.log("display khali hai mittar");
        }else if(this.front<=this.rear){
            for (let i = 0; i <= this.rear; i++) {
                res += this.arr[i] + ", ";
            }
        }else{
            for (let i = this.front; i < this.arr.length; i++) {
                res += this.arr[i] + ", ";
            }
            for (let i = 0; i < this.rear; i++) {
                res += this.arr[i] + ", ";
            }
        }
        return console.log(res);
    }

    isEmpty(){
        return console.log(this.size==0);
    }

}

let cirq = new CircularQue();
cirq.add(12);
cirq.add(24);
cirq.add(36);
cirq.add(48);
cirq.add(48);
cirq.add(48);
cirq.add(48);
cirq.length();
cirq.remove();
cirq.add(48);
cirq.isEmpty();
cirq.display();
cirq.peek();
