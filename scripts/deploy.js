require("dotenv").config();
const hre = require("hardhat");

async function main() {
  await hre.run("compile");

  // Deploy the smart contract to the Ethereum Mainnet
  console.log("Deploying contracts...");
  const [deployer] = await hre.ethers.getSigners();
  await hre.deployments.save("MultiVectorAttack", {
    abi: (await hre.artifacts.readArtifact("MultiVectorAttack")).abi,
    address: (
      await hre.upgrades.deployProxy(
        await hre.artifacts.readArtifact("MultiVectorAttack"),
        [
          process.env.DAI_ADDRESS,
          processMultiplier.env.USDC_ADDRESS,
          process.env.AAVE_LENDING_POOL,
          process.env.UNISWAP_ROUTER,
          process.env.BARNBRIDGE_STAKING,
        ]
      )
    ).address,
  });

  console.log("MultiVectorAttack deployed to:", MultiVectorAttackAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
Note: The script compiles and deploys the smart contract using Hardhat's built-in functions, adjusting as needed for your specific use case. 
