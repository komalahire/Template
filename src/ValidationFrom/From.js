import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { useForm } from "react-hook-form";
import useForm from "./UseForm";
import validate from './Vaildation';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '13%',
        boxShadow: "rgba(0, 0, 0, 0.12) 0 0 25px",

    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Form() {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);
    const classes = useStyles();
    function login() {
        console.log('No errors, submit callback called!');
    }




    console.log(values, "rrrrrrrrrrrr")
    return (
        <Container style={{ marginTop: '5%' }} component="main" maxWidth="md" >
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="Name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={values.name || ""}
                        autoFocus
                        onChange={handleChange}
                    />

                    {errors.name && (
                        <p className="help is-danger" style={{color:"red"}}>{errors.name}</p>
                    )}


                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={values.email || ''}
                        onChange={handleChange}

                    />

                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                    )}

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
                    // defaultValue={userDetail.Phone}
                    // onChange={handleChange}


                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="aadress"
                        label=" Address"
                        name="aadress"
                        autoComplete="aadress"
                        // defaultValue={userDetail.aadress}
                        autoFocus
                    // onChange={handleChange}

                    />

                    <Autocomplete
                        required
                        fullWidth
                        id="combo-box-demo"

                        options={top100Films}
                        getOptionLabel={(option) => option.title}

                        renderInput={(params) => <TextField {...params} label="Choose your Nationality*" variant="outlined" />}
                    />


                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        pattern="^\d{4}-\d{3}-\d{4}$" required
                        name="PanNO"
                        label="Pan NO"
                        type="phone"
                        // defaultValue={userDetail.PanNO}
                        autoComplete="phoneNumber"
                    // onChange={handleChange}


                    />

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

const top100Films = [

    { title: 'Afghanistan' },
    { title: 'Angola' },

    { title: 'Belize' },
    { title: 'India' },
    { title: 'Uganda' },
    { title: 'Lesotho' },
    { title: 'Oman' },
    { title: 'Australia' },
    { title: 'Azerbaijan' },
    { title: 'Moldova' },
    { title: 'Nepal' },


];