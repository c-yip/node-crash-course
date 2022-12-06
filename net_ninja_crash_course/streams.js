const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// this is an event listener listening to a data event
// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   console.log(chunk.toString());

//   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });

// pipe, essentially shorter way to do above
readStream.pipe(writeStream);
