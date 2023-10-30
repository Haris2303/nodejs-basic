function samplePromise() {
  return Promise.resolve("Otong");
}

const name = await samplePromise();
console.info(name);
