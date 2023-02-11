import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Container } from '@material-ui/core';
import Connect from '../Components/Connect';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'blue',
    flexGrow: 1,
    height: '100vh',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  main: {
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hello
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Upload</Button>
          <Button color="inherit">Verify</Button>
          <Button color="inherit">About</Button>
          <button> COnnect</button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={3} className={classes.main}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" gutterBottom>
              The Future of Notarization is Here
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              Your Digital Footprint, Verified and Secured
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
