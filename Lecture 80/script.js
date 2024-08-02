// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj);

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }


// rabbit.__proto__ = animal; 

// console.log(rabbit);

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...");
     
    }

    eats(){
        console.log('Animal is eating');
        
    }

    jumps(){
        console.log('Animal is jumping');
    }

}

class Lion extends Animal {
    constructor(name){
        super(name);
        console.log('Lion object has been created');
        
    }

    eats(){
        super.eats();
        console.log('Lion is eating');
        
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

