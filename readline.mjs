import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Nama kamu?: ", (name) => {
  console.info(`Halo ${name}`);
  input.close();
});
