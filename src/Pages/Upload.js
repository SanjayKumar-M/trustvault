// 0x5FbDB2315678afecb367f032d93F642f64180aa3
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { Filecoin } from 'filecoin.js';
import ipfsClient from 'ipfs-mini';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const NotaryServiceContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const FilecoinTokenAddress = '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153';

const ipfs = new ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const App = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileCID, setFileCID] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (selectedFile) {
      const fileData = await selectedFile.arrayBuffer();
      const cid = await ipfs.add(fileData);
      setFileCID(cid);
    }
  };

  const notarizeDocument = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('No Ethereum provider found');
      }

      const provider = window.ethereum;
      await provider.enable();

      const filecoin = new Filecoin(provider);

      const contract = await filecoin.contractAt(NotaryServiceContractAddress, null);
      const accounts = await filecoin.getAccounts();
      const senderAddress = accounts[0];

      const notarizeTx = await contract.notarizeDocument(fileCID).send({
        from: senderAddress,
        gasPrice: '1000000000',
        gasLimit: 100000,
      });

      console.log('Notarization transaction:', notarizeTx);

      const payFeeTx = await contract.payFee().send({
        from: senderAddress,
        gasPrice: '1000000000',
        gasLimit: 100000,
        value: '1000000000000000000', // 1 FIL fee
        method: 'send',
        params: [FilecoinTokenAddress],
      });

      console.log('Fee payment transaction:', payFeeTx);
    } catch (error) {
      console.error('Error notarizing document:', error);
    }
  };

  return (
    <div className="App">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="file-upload" label="Upload a file" type="file" onChange={handleFileChange} />
        <Button variant="contained" color="primary" onClick={uploadFile}>Upload to IPFS</Button>
        <TextField id="file-cid" label="File CID" value={fileCID} disabled />
        <Button variant="contained" color="primary" onClick={notarizeDocument}>Notarize</Button>
      </form>
    </div>
  );
};

export default App;
