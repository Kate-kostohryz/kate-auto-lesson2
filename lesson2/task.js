import chalk from "chalk";
let name = "Kate";
let profession = "QA";
let age = 28;
let hearts = "\u2764\uFE0F \u2764\uFE0F \u2764\uFE0F" 

let intro = chalk.magentaBright("Hello, " + "myname is " + name) + chalk.red (" I'm " +age + " years old! ")  + chalk.green ("I'm " + profession + ".");
console.log(hearts)
console.log(intro)
console.log(hearts)
