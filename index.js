var Keypair = require("@solana/web3.js").Keypair;
var fs = require("fs");
var bs58 = require("bs58");
function transformAndWriteToFile(privateKeyString, outputFilePath) {
    // decodes private key string
    var privateKey = bs58.decode(privateKeyString);
    var privateKeyJSON = Buffer.from(privateKey).toJSON();
    console.log(JSON.stringify(privateKeyJSON.data));
    // Write the transformed string to a file
    fs.writeFile(outputFilePath, JSON.stringify(privateKeyJSON.data), { flag: "w", encoding: "utf8" }, function (err) {
        if (err) {
            console.error("Error writing to file:", err);
        }
        else {
            console.log("Successfully wrote to file.");
        }
    });
}
// Check if two command-line arguments are provided
if (process.argv.length < 4) {
    console.error('Two string arguments are required: private key and output file name with extension');
}
else {
    // Extract the command-line arguments
    var privKeyString = process.argv[2];
    var outputFilePath = process.argv[3];
    // Call the transformAndWriteToFile function with the provided arguments
    transformAndWriteToFile(privKeyString, outputFilePath);
}
