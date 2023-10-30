import dns from "dns/promises";

const address = await dns.lookup("www.ptbhaktimingaspapuabaratdaya.com");

console.info(address.address);
console.info(address.family);
