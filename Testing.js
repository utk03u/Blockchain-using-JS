  const Blockchain = require('./blockchain');
  const bitcoin = new Blockchain();
  bitcoin.createNewBlock(2982, 'PreviousBlockHash', 'hashofthisblockA');
  bitcoin.createNewTransaction(100, 'senderofbitcoin', 'recipientofbitcoin' );
  bitcoin.createNewBlock(24565982, 'hashofthisblockA', 'hashofthisblockB');
  bitcoin.createNewTransaction(20, 'senderofbitcoin', 'recipientofbitcoin' );
  bitcoin.createNewTransaction(50, 'senderofbitcoin', 'recipientofbitcoin' );
  bitcoin.createNewTransaction(2000, 'senderofbitcoin', 'recipientofbitcoin' );
  bitcoin.createNewBlock(12234444, 'hashofthisblockA', 'hashofthisblockB');

  console.log(bitcoin.chain[2]);