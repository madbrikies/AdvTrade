const MultiVectorAttack = artifacts.require("MultiVectorAttack");
const DaiToken = artifacts.require("DaiToken");
const UsdcToken = artifacts.require("UsdcToken");

module.exports = async function (deployer, network) {
  if (network.name !== "mainnet") {
    console.warn(
      "You are not deploying to mainnet; double-check the correct network is selected."
    );
  }

  const daiAddress = process.env.DAI_ADDRESS;
  const usdcAddress = process.env.USDC_ADDRESS;
  const aaveLendingPool = process.env.AAVE_LENDING_POOL;
  const uniswapRouter = process.env.UNISWAP_ROUTER;
  const barnBridgeStaking = process.env.BARNBRIDGE_STAKING;

  await deployer.deploy(
    MultiVectorAttack,
    daiAddress,
    usdcAddress,
    aaveLendingPool,
    uniswapRouter,
    barnBridgeStaking
  );
};
Note: The addresses of the required contracts are loaded from environment variables for flexibility and security. 
