import { stringify } from "querystring";
import util from "util";

const firstname = "Otong";
const lastname = "Surotong";

console.info(`Hello ${firstname} ${lastname}`);
console.info(util.format("Hello %s %s", firstname, lastname));

const person = {
  firstname: "Ucup",
  lastname: "Surucup",
};

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person));
