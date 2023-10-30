import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("halo", (name) => {
  console.info(`Halo ${name}`);
});

emitter.addListener("halo", (name) => {
  console.info(`Halo ${name} Tamvan`);
});

emitter.emit("halo", "Otong");
