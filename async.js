function samplePromise() {
  return Promise.resolve("Otong");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
