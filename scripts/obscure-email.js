import { webcrypto } from "node:crypto";

function generate(email) {
  const emailBytes = new TextEncoder().encode(email);
  const keyBytes = webcrypto.getRandomValues(new Uint8Array(emailBytes.length));
  const cipherBytes = emailBytes.map((byte, i) => byte ^ keyBytes[i]);
  const toB64 = (bytes) => btoa(String.fromCharCode(...bytes))
  console.log("--- FOR script BLOCK IN +layout.svelte ---");
  console.log(`const encodedCiphertext = "${toB64(cipherBytes)}";`);
  console.log(`const encodedKey = "${toB64(keyBytes)}";`);
}

const email = ""; // TODO put email here when need to regenerate
generate(email);