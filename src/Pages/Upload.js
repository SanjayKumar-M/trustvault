//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQzMkI3QTI3NzIzM0QwMDYxMjdCNkFhNzIxNTk1MTg4NDMxNmE0NjMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY4MjAyNDkzNjUsIm5hbWUiOiJUcnVzdHZhdWx0In0.JjdF0q2YKIABv0YcT6sa5MPs1KmVIb8fsUkbyBzz2Cs
import React, { useState, useRef } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Web3Storage } from 'web3.storage';
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import NotaryService from '../Utils/NotaryService.json';
import { ethers } from 'ethers';

const web3Storage = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQzMkI3QTI3NzIzM0QwMDYxMjdCNkFhNzIxNTk1MTg4NDMxNmE0NjMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY4MjAyNDkzNjUsIm5hbWUiOiJUcnVzdHZhdWx0In0.JjdF0q2YKIABv0YcT6sa5MPs1KmVIb8fsUkbyBzz2Cs" });
const contractAddress = '0xa2Def0a9B19F79143ceAf5215396d2741C0cBC7f';
const notaryServiceABI = NotaryService.abi;


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    display: 'none',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Upload = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState(null);
  const [notarized, setNotarized] = useState(false);
  const fileInput = useRef();

  const handleChange = () => {
    setFile(fileInput.current.files[0]);
  };

  const uploadToWeb3Storage = async () => {
    if (file) {
      const stream = file.stream();
      const cid = await web3Storage.put(stream);
      setCid(cid);
    }
  };
  

  const notarizeDocument = async () => {
    if (cid) {
      try {
        const ethereum = window.ethereum;
        await ethereum.enable();
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, notaryServiceABI, signer);
        const transaction = await contract.notarizeDocument(cid);
        await transaction.wait();
        setNotarized(true);
      } catch (error) {
        console.error('Error notarizing document:', error);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <input
          className={classes.input}
          id="contained-button-file"
          type="file"
          ref={fileInput}
          onChange={handleChange}
        />

        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload file
          </Button>
        </label>

        {cid && (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="cid"
            label="IPFS CID"
            value={cid}
            disabled
          />
        )}

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={uploadToWeb3Storage}
          disabled={!file || cid}
        >
          Upload to Web3 Storage
        </Button>

        {cid && !notarized && (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={notarizeDocument}
            disabled={notarized}
          >
            Notarize document
          </Button>
        )}

        {notarized && (
          <p>Document notarized!</p>
        )}
      </div>
    </Container>

  );
}

export default Upload;