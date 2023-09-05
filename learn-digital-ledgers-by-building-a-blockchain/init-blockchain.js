import { writeBlockchain } from "./blockchain-helpers.js"; 

const genesisBlock = {

    hash : "1",
    previousHash : null

};

const blockchain = [genesisBlock];


writeBlockchain(blockchain);