import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Button } from "@material-ui/core";

const Connect = () => {
  const [connectedWallet, setConnectedWallet] = useState(null);

  useEffect(() => {
    async function connectToMetamask() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
          await window.ethereum.enable();
          const wallet = provider.getSigner();
          const address = await wallet.getAddress();
          setConnectedWallet(address);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("Metamask is not installed");
      }
    }

    if (window.ethereum) {
      connectToMetamask();
    }
  }, []);

  return connectedWallet ? (
    <Button variant="contained" color="primary">
      {connectedWallet}
    </Button>
  ) : (
    <Button variant="contained" color="secondary" onClick={() => window.ethereum.enable()}>
      Connect Wallet
    </Button>
  );
};

export default Connect;
