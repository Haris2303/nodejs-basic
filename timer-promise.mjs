import timers from "timers/promises";

// console.info("Early time at " + new Date());
// const name = await timers.setTimeout(3000, "Otong");
// console.info("Late time at " + new Date());
// console.info("Your name is " + name);

for await (const startTime of timers.setInterval(1000, "ignored")) {
  console.info(`Start time at ${new Date()}`);
}
