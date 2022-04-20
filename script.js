class First {
  constructor() {}
  hello() {
    console.log("Привет, я метод родителя");
  }
}

const newFirst = new First();

class Second extends First {
  constructor() {
    super();
  }
  hello() {
    newFirst.hello();
    console.log("А я наследуемый метод!");
  }
}

const newSecond = new Second();
newSecond.hello();
