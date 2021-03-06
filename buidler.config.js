usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-waffle");
usePlugin("buidler-spdx-license-identifier");
usePlugin("buidler-deploy");
// usePlugin("buidler-gas-reporter");

require("dotenv/config");

task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners();
    for (const account of accounts) {
        console.log(await account.getAddress());
    }
});

module.exports = {
    defaultNetwork: "buidlerevm",
    networks: {
        buidlerevm: {
            gas: 12000000,
            blockGasLimit: 12000000,
            allowUnlimitedContractSize: true
        },
        kovan: {
            url:
                "https://eth-kovan.alchemyapi.io/v2/PMRs9b7XcmbELUeDN8zF_ZbKY5W4ktW2",
            accounts: [
                process.env.PRIVATE_KEY
            ]
        },
        rinkeby: {
            url:
                "https://eth-rinkeby.alchemyapi.io/v2/OJZiZG5_0djOzypR6uz3tlam1dlIgvBS",
            accounts: [
                process.env.PRIVATE_KEY
            ]
        },
        mainnet: {
            url:
                "https://eth-mainnet.alchemyapi.io/v2/XJnOcVECGudg6TXd78CsRXl-cFpuunzZ",
            accounts: [
                process.env.PRIVATE_KEY
            ]
        }
    },
    namedAccounts: {
        deployer: 0,
        relayer: 1,
        user: 2
    },
    solc: {
        version: "0.6.12",
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};
