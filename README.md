## Generate Solana File System Wallet from Existing Private Key

## To start
1. Make sure you have Node.js and npm installed on your system.
2. Get deps via `npm install`

### To build
`npx tsc index.ts`

### To run
`node index.js <private-key> </file/path.json>`

### To verify
Make sure you have [installed the Solana Command Line Tools](https://docs.solana.com/cli/install-solana-cli-tools)
`solana-keygen verify <PUBKEY> </file/path.json>`