const hre = require("hardhat");

async function main() {
  const NotaryService = await hre.ethers.getContractFactory("NotaryService");
  const filecoinTokenAddress = "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153"; 
  const notaryService = await NotaryService.deploy(filecoinTokenAddress);

  await notaryService.deployed();

  console.log("NotaryService deployed to:", notaryService.address);
  
  
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
