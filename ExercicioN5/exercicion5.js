let str = "Hello World!";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}

console.log(newStr); // output: "!dlroW olleH"
