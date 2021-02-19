
import {nodes, params} from "./objects";

/*
/ GLOBAL DEFINITIONS
*/


let scaleAll = 1; // Standard
let objects = [];
let objType = "octagon"; // Standard
let slider;
let scaleTxt;
let button = [];


// p5 instantiiert, um einbindbar zu sein.
// allen p5-Funktionen muss "p." vorangestellt werden!

// let sketch = new p5((p) => {
function sketch (p) {

/*
/ SETUP SECTION
*/

  p.setup = () => {
    let can = p.createCanvas(800, 800);
    can.position(10, 250); // Canvas etwas abrücken

    can.mouseClicked(addObject); // feuert nur auf dem Canvas

    // Scaling Slider
    slider = p.createSlider(1, 3, 2, 0.2);
    slider.position(10, 210);
    slider.style("width", "80px");

    scaleTxt = p.createP();
    scaleTxt.position(110, 200);
    scaleTxt.id("scaleTxt");

    // Display Type Selection Buttons
    // Hinweis: "let objTypes = Object.keys(params).length;"
    // ... ermittelt die "Länge" des Objektes
    let i = 0;
    for (let tp in params) {
      button[i] = p.createButton(params[tp].button_de);
      button[i].style("background-color", "#89bde8");
      button[i].position(220 + i * 60, 210);
      button[i].mouseClicked(function () { objType = tp;});
      i++;
    }
  };

/*
/ DRAW LOOP
*/

  p.draw = () => {
    p.background(240);
    p.stroke(0);

    scaleAll = p.floor(Math.pow(10, slider.value())) / 100;
    document.getElementById("scaleTxt").innerHTML = scaleAll;

    // alle Objekte anzeigen
    for (let i = 0; i < objects.length; i++) {
      objects[i].draw(objects[i].type);
    }
  };

/*
/   INDIVIDUAL CODE AREA
*/

  // Adds the selected object type to the array at the mouse position
  function addObject() {
    let obj = new object(objType);
    objects.push(obj);
  }

  // Class for all objects to draw
  class object {
    constructor(type) {
      this.type = type;
      this.x = p.mouseX;
      this.y = p.mouseY;
      this.scale = scaleAll;
      this.color = params[type].color_stroke;
      this.fill = params[type].color_fill;
    }

    // draw() generates the output for all objects
    // with fill and stroke
    draw(type) {
      p.push();
      this.fill ? p.fill(this.fill) : p.noFill(); // wenn wahr ? ja : nein;
      p.stroke(this.color);

      p.beginShape();

      for (let i = 0; i < nodes[type].length; i++) {
        let x = nodes[type][i].x * scaleAll + this.x;
        let y = nodes[type][i].y * scaleAll + this.y;
        p.vertex(x, y);
      }

      p.endShape(p.CLOSE);
      p.pop();
    }
  }
}


// , "one");
export default sketch;