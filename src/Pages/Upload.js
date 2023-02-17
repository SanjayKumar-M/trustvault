import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { NotaryServiceABI, NotaryServiceAddress } from "../Utils/Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4),
    color: "black",
  },
  input: {
    display: "none",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
`;

const Upload = () => {
  const { library, account } = useWeb3React();
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [hash, setHash] = useState("");
  const [uploading, setUploading] = useState(false);
  const [notarized, setNotarized] = useState(false);
  const [confirmationStatus, setConfirmationStatus] = useState("");
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    if (account) {
      provider.getNetwork().then((network) => {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          NotaryServiceAddress,
          NotaryServiceABI,
          signer
        );
        contract.connect(signer).setNetwork(network.chainId);
      });
    }
  }, [account, provider]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.readAsArrayBuffer(selectedFile);
    reader.onload = async () => {
      if (library && library.utils) {
        const data = new Uint8Array(await reader.result);
        const hash = await library.utils.keccak256(data);
        setHash(hash);
      }
    };
  };

  const isUploadButtonDisabled = !file || uploading || !hash;

  const handleUpload = async () => {
    try {
      setUploading(true);
      if (library) {
        const signer = library.getSigner();
        const contract = new ethers.Contract(
          NotaryServiceAddress,
          NotaryServiceABI,
          signer
        );
        await contract.notarizeDocument(hash);
        setNotarized(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  const handlePayFee = async () => {
    try {
      const signer = library.getSigner();
      const contract = new ethers.Contract(
        NotaryServiceAddress,
        NotaryServiceABI,
        signer
      );
      const tx = await contract.payFee();
      setConfirmationStatus(
        "Transaction confirmed. Transaction hash: " + tx.hash
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Select a file to upload"
        type="file"
        onChange={handleFileChange}
      />
      {file && (
        <div>
          <p>File hash: {hash}</p>
          <Button
            variant="contained"
            color="primary"
            disabled={isUploadButtonDisabled}
            onClick={handleUpload}
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>
          {notarized && (
            <div>
              <p>File notarized successfully.</p>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handlePayFee}
              >
                Pay Notary Fee
              </Button>
              {confirmationStatus && <p>{confirmationStatus}</p>}
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default Upload;
