// scripts/SERToken.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const SERToken = await ethers.getContractFactory("SERToken");
  const serToken = await SERToken.deploy();

  // Чекаємо на майнінг транзакції розгортання
 // await serToken.deployTransaction.wait();

  console.log("SERToken deployed to:", serToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
