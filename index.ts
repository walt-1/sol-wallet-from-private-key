const { Keypair } = require("@solana/web3.js");
const fs = require("fs");
const bs58 = require("bs58");

function transformAndWriteToFile(
  privateKeyString: string,
  outputFilePath: string
): void {
  // decodes private key string
  const privateKey = bs58.decode(privateKeyString);
  const privateKeyJSON = Buffer.from(privateKey).toJSON().data;

  // Write the transformed string to a file
  fs.writeFile(
    outputFilePath,
    JSON.stringify(privateKeyJSON),
    { flag: "w", encoding: "utf8" },
    (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Successfully wrote private key buffer to file.");
      }
    }
  );
}

// Check if two command-line arguments are provided
if (process.argv.length < 4) {
  console.error('Two string arguments are required: private key and output file name with extension');
} else {
  // Extract the command-line arguments
  const privKeyString = process.argv[2];
  const outputFilePath = process.argv[3];

  // Call the transformAndWriteToFile function with the provided arguments
  transformAndWriteToFile(privKeyString, outputFilePath);
}
