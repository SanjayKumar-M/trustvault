import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '50%',
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  fileInput: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function UploadForm() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g. upload the file)
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        required
        className={classes.textField}
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        required
        className={classes.textField}
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        accept="image/*"
        className={classes.fileInput}
        id="file-input"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <Button
          className={classes.button}
          variant="contained"
          component="span"
          color="primary"
        >
          Upload File
        </Button>
      </label>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
