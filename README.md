#This is javascript based Blockchain

Under Block class
=================
The index communicates where in the chain the block is located. 
The block’s hash simply holds the block’s own hash derived from a calculateHash function
The nonce is important piece of the block that is critical to building in a mining mechanism for our blockchain.

Under Blockchain Class
=======================
Our Blockchain class needs a few key functionalities, namely the ability to be instantiated, to start, to access the latest block’s information, and to extend itself by adding a new block to it.
