/**
문제
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

예제 입력 1 
15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front

예제 출력 1 
1
2
2
0
1
2
-1
0
1
-1
0
3
*/

let data = `15\npush 1\npush 2\nfront\nback\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\nfront`.split('\n');

let cmdLength = +data.shift();
let queue = [];
let answer = [];

class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedListQueue {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    push (number) {
        if (this.length === 0) {
            let newNode = new Node(number);
            this.head = newNode;
            this.length++;   
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = new Node(number);
            this.length++;               
        }
    } 
    
    pop () {
        if (this.length) {
            let current = this.head
            console.log(current.value);
            this.head = this.head.next;
            this.length--;
        } else {
            console.log(-1);
        }
    }

    size () {
        console.log(this.length);
    }
    
    empty () {
        if (this.length === 0) {
            console.log(1);
        } else {
            console.log(0);
        }
    }
    
    front () {
        console.log(this.head.value)
    }
    
    back () {
        if (this.length === 0) {
            console.log(-1);
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            console.log(current.value);
        }
    }
    
}

let ll = new LinkedListQueue();

for (let i = 0; i < cmdLength; i++) {
    const [cmd, value] = data[i].split(' ');
    switch (cmd) {
        case 'push':
            ll.push(+value);
            break;
        case 'pop':
            ll.pop(+value);
            break;
        case 'size':
            ll.size();
            break;
        case 'empty':
            ll.empty();
            break;
        case 'front':
            ll.front();
            break;
        case 'back':
            ll.back();
            break;
        default:
            break;
    }
}