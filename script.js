function DomElement() {
  this.selector = prompt("имя класса или id");
  this.height = prompt("высота", 100);
  this.width = prompt("ширина", 100);
  this.bg = prompt("фон", "red");
  this.fontSize = prompt("размер шрифта", 26);

  this.createElem = function () {
    let text = prompt("любой текст", "text");

    const div = document.createElement("div");

    document.body.append(div);

    if (this.selector.trim().split("")[0] === ".") {
      div.classList.add(this.selector.trim().substr(1));
    }

    if (this.selector.trim().split("")[0] === "#") {
      div.id = this.selector.trim().substr(1);
    }

    div.style.height = this.height + "px";
    div.style.width = this.width + "px";
    div.style.background = this.bg;
    div.style.fontSize = this.fontSize + "px";
    div.textContent = text;
  };
}

const elem = new DomElement();

elem.createElem();

/* console.log(elem);
    console.log("новый div", div);
    console.log("textContent", div.textContent);
    console.log("height", div.style.height);
    console.log("width", div.style.width);
    console.log("bg", div.style.background);
    console.log("fontSize", div.style.fontSize); */
