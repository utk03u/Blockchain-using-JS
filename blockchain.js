function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];

}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
        const newBlock = {
            index: this.chain.length+1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce, 
            hash: hash,
            previousBlockHash: previousBlockHash
        };

    this.pendingTransactions = [];
    this.chain.push(newBlock); //value of chain
    return newBlock;
}

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };
    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index'] +1;// in which transaction the block will be added to
}

module.exports =Blockchain;