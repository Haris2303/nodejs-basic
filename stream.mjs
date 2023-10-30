import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Ucup\n");
writer.write("Surucup\n");
writer.write("dan\n");
writer.write("Otong\n");
writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
  console.info(data.toString("utf8"));
});
