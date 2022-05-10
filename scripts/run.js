const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
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
        50 // Boss attack damage
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();

    const result = await gameContract.tokenURI(1);
    console.log("token URI:", result);
  
    txn = await gameContract.attackBoss();
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();

    
    // let txn;
    // txn = await gameContract.mintCharacterNFT(0);
    // await txn.wait();
    // console.log("Minted NFT #1");
  
    // txn = await gameContract.mintCharacterNFT(1);
    // await txn.wait();
    // console.log("Minted NFT #2");
  
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
    // console.log("Minted NFT #3");
  
    // txn = await gameContract.mintCharacterNFT(1);
    // await txn.wait();
    // console.log("Minted NFT #4");
  
    console.log("Done deploying and minting!");
  
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