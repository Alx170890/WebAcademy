// 1.
let hamster = {
    eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};
let lazy = {
  __proto__: hamster,
  stomach: []
};

speedy.eat("apple");
alert( speedy.stomach );
alert( lazy.stomach );

// 2. 
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name);