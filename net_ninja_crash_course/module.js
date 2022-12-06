// destructuring
const { people, ages } = require("./people.js");

console.log(people, ages);

// built into node itself
const os = require("os");
console.log(os.platform(), os.homedir()); // win32 C:\Users\chris
