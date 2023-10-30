import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello Otong");
log.error("Failed");

const person = {
  firstname: "Otong",
  lastname: "Surotong",
};

log.table(person);
