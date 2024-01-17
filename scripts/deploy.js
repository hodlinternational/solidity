// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const value = hre.ethers.parseEther("0.001");
  const admin = "0x140c709b25B05955a369F5C244a0B51136D14B1B";
  const router = "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8";
  const routereth = "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8";
  const HODLDEX = await hre.ethers.deployContract("HODLDEX", [admin, router, routereth], {
  });

  await HODLDEX.waitForDeployment();

  console.log(
    ` deployed to ${HODLDEX.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
