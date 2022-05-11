const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('ArtNFTGame');
    const gameContract = await gameContractFactory.deploy(                        
        ["The Kiss", "Les Amants", "Life and Death"],
        ["QmNQDBfeLcHHQReTven5ThjKQRgpSLKWtwURHRgf7pawzK", 
        "QmSohCzZ1rcvUjQJGVuKCspHwEnzwxVWXq43XTBCiL1yMX", 
        "QmcpzXRFRmMyERUhnNvDnpkPZRFVqUWcQrSDkfqpdHHiyX"],
        [100, 200, 300],                    
        [100, 50, 25],
        "The Scream", // Boss name
        "Qmf1Pdp2wKzY1jogYfSa2NejXerSNM6U7ZxWqkuA1PzL4a", // Boss image
        500, // Boss hp
        50, // Boss attack damage
        40 // Player critical attack chance percentage
      );    

          
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
  
    // txn = await gameContract.attackBoss();
    // await txn.wait();
  
    // txn = await gameContract.attackBoss();
    // await txn.wait();
  
    console.log("Done!");
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();