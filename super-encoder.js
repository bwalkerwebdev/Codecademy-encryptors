// Import the encryptors functions here.
let encryptors = require("./encryptors");

let { caesarCipher, symbolCipher, reverseCipher } = encryptors;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let encryptor1 = caesarCipher(str, amount = 13);
  let encryptor2 = symbolCipher(encryptor1);
  let encryptor3 = reverseCipher(encryptor2);
  return encryptor3;
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  let decryptor1 = reverseCipher(str);
  let decryptor2 = symbolCipher(decryptor1);
  let decryptor3 = caesarCipher(decryptor2, amount = 13);
  return decryptor3;

};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
