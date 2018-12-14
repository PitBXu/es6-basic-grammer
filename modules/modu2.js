import {a,b} from './modu3.js';


const sum = ()=>{
    return a+b;
}

const show = ()=>{
    console.log(`执行了 a = ${a} , b = ${b}`);
}

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        return `my name is ${this.name}`;
    }
}


export{
    a,b,sum,show
}

export default{
    Person
}