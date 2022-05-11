# 🎨NFT Art Game🎨

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

This project demonstrates a turn-based NFT game with famous art works.

## Game Objective

Do you know the famous art painting called "The Scream" created by Edvard Munch? 

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/387px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg" width="300" >
</p>

So your objective is to fight against this monster with your chosen art painting.

You can choose your character among three paintings available: 

- The Kiss [Gustav Klimt]
- The Lovers [Rene Magritte]
- Death and Live [Gustav Klimt]

Since our boss has much more HP and Damage than you, in order to compensate that, you have 40% chance of landing a critical attack on monster (doubling it's attack damage).
Random Number is generated in solidity using `block.difficulty` and `block.timestamp`.


---
## Showcase Running App
You can check the Demo game running on [Demo](https://nft-game-starter-project-1.yunixlee.repl.co/)
## Setup
- `yarn`
- `yarn global add hardhat-shorthand`

## Environment File (.env)
- PROVIDER_URL: Alchemy or any other Provider endpoint (Default: Rinkeby)
- PRIVATE_KEY: Private key for the deployer account

## Compile & migrate (Deploy) Contracts
- `yarn deploy` (Default network: Rinkeby Ethereum Testnet)

## TODO: Frontend
---
## Watch the collection on OpenSea.io 
Example: 
- [https://testnets.opensea.io/collection/arts-lksdbi7ryw](https://testnets.opensea.io/collection/arts-lksdbi7ryw)

## View the contract on the public explorer
Example:[https://rinkeby.etherscan.io/address/0xC1641A2C9E6158907e6aE11BAcA9ef3e85b102E8](https://rinkeby.etherscan.io/address/0xC1641A2C9E6158907e6aE11BAcA9ef3e85b102E8)

## Production Build
- `yarn build`

## Start the Dapp
- `yarn start`

## Screenshots

- Connect to MetaMask to Begin
- Click on one of your favorite art painting to fight against "The Scream".
<p align="center">
<img src="./imgs/choose_hero.png" width="300" >
</p>

- Choose your wallet on Rinkeby and confirm the minting transaction. 
<p align="center">
<img src="./imgs/minting_transaction_metamask.png" width="300" >
</p>


- Once your HERO painting is minted to your wallet address, now you can click on "Attack The Scream" to fight againt the monster! You can see that the monster has more HP than you! Once again, the metamask window will pop up and you need to confirm the transaction! And also you can view your NFT on Opensea or Rarible, etc

<p align="center">
<img src="./imgs/arena.png" width="300" >
</p>

- Ohh.. it seems like you need to team up with others to defeat this monster. It has more damage and hp than you! 

<p align="center">
    <img src="./imgs/arena_after_attack.png" width="300">
</p>



## Features
- 📦 [Hardhat](https://hardhat.org/) - Ethereum development environment for professionals
- 🦾 [TypeChain Hardhat plugin](https://github.com/ethereum-ts/TypeChain/tree/master/packages/hardhat) - Automatically generate TypeScript bindings for smartcontracts while using Hardhat.
- 🎨 [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/) - standard for secure blockchain applications

## Author

👤 **MaterializerX**

- Github: [@materializerx](https://github.com/materializerx)

## Show your support

Give a ⭐️ if you liked this project and ☕ for me if you loved it!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](ko-fi.com/materializerx)
