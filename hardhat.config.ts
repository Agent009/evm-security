import { task, type HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import { constants } from "./lib/constants";

const config: HardhatUserConfig = {
  solidity: "0.5.16",
  networks: {
    sepolia: {
      // url: "https://ethereum-sepolia-rpc.publicnode.com",
      url: constants.integrations.alchemy.sepolia,
      accounts: [constants.account.deployerPrivateKey],
    }
  },
};

// @ts-expect-error ignore
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.viem.getWalletClients();
  for (const account of accounts) {
    console.log(account.account.address);
  }
});

export default config;
