// core module for files system in node
const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(error);
  }
  // console.log(data) buffer is logged, to see string need to use toString method
  console.log(data.toString());
});

console.log("last line"); // this is logged before our readFile b/c the fs methods are a-sync

// writing files
fs.writeFile("./docs/blog2.txt", "hello world", () => {
  console.log("file was written");
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
