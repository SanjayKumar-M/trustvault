import React, { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@material-ui/core";

const Connect = () => {
const [connectedWallet, setConnectedWallet] = useState(null);

const connectToMetamask = async () => {
if (window.ethereum) {
try {
await window.ethereum.enable();
const provider = new ethers.providers.Web3Provider(window.ethereum);
const wallet = provider.getSigner();
const address = await wallet.getAddress();
setConnectedWallet(address);
} catch (error) {
console.error(error);
}
} else {
console.error("Metamask is not installed");
}
};


return connectedWallet ? (
<Button variant="contained" color="primary">
{connectedWallet}
</Button>
) : (
<Button variant="contained" color="secondary" onClick={connectToMetamask}>
Connect Wallet
</Button>
);
};

export default Connect;