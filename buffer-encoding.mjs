const buffer = Buffer.from("Ucup Surucup", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("VWN1cCBTdXJ1Y3Vw", "base64");
console.info(bufferBase64.toString("utf8"));
