const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const NotaryService = await hre.ethers.getContractFactory("NotaryService");
  const notaryService = await NotaryService.deploy();

  console.log("NotaryService contract deployed to address:", notaryService.address);

  const fee = hre.ethers.utils.parseEther("1");
  const tx = await notaryService.connect(deployer).notarizeDocument("0x1234567890123456789012345678901234567890123456789012345678901234", {value: fee});

  console.log("Notarized document with transaction hash:", tx.hash);

  const [hashes, timestamps] = await notaryService.getNotarizedDocuments();
  console.log("Notarized documents:", hashes, timestamps);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
