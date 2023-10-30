import { URL } from "url";

const url = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

url.host = "www.nodejs.com";
url.searchParams.append("status", "premium");

console.info(url.toString());
console.info(url.href);
console.info(url.protocol);
console.info(url.host);
console.info(url.pathname);
console.info(url.searchParams);
