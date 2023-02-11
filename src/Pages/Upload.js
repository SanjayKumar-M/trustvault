import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: theme.spacing(2, 0),
  },
}));

const UploadForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center" style={{ height: '100%' }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <form className={classes.form}>
              <TextField
                className={classes.input}
                label="Username"
                variant="outlined"
                fullWidth
              />
              <TextField
                className={classes.input}
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary">
                Upload
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UploadForm;
