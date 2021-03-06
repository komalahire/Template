import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8%',
    boxShadow: "rgba(0, 0, 0, 0.12) 0 0 25px",

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container  style={{marginTop:'10%'}} component="main" maxWidth="md" >
      <CssBaseline />
      <div className={classes.paper}>
       <form className={classes.form} noValidate>
        <Grid container spacing={4}>
              
            <Grid item xs={12} md={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="EmailAddress"
                label="Email Address"
                name="EmailAddress"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                pattern="^\d{4}-\d{3}-\d{4}$" required
                name="Phone"
                label="Phone Number"
                type="phone"
                autoComplete="phoneNumber"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                autoComplete="fname"
                name="Address"
                variant="outlined"
                required
                fullWidth
                id="Address"
                label="Address"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                autoComplete="fname"
                name="PanNumber"
                variant="outlined"
                required
                fullWidth
                id="PanNumber"
                label="Pan Number"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                autoComplete="fname"
                name="Amount"
                variant="outlined"
                required
                fullWidth
                id="Amount"
                label="Amount"
                autoFocus
              />
            </Grid>
          
          
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            DONATE
          </Button>
         
        </form>
      </div>
      
    </Container>
  );
}