import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { StyledForm, useForm } from '../Form/Form';
import * as authService from '../../services/authService'
import { logIn } from '../../store/actions/authActions';

import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';

const initialFValues = {
    userName: '',
    password: '',
}

export const SignIn = () => {
    const dispatch = useDispatch()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('userName' in fieldValues)
            temp.userName = fieldValues.userName ? "" : "This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password.length ? "" : "This field is required."
        temp.creds = (authService.checkCreds(fieldValues)) ? "" : "Login failed. Wrong user credentials!"
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, false, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            setErrors({
                ...errors,
            })
            dispatch(logIn(values.userName))
            resetForm()
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Typography
                sx={{ fontFamily: "Montserrat", mb: 3, fontWeight: 600 }}
                align="center"
                component="h1"
                variant="h5">
                Sign in
            </Typography>
            <Container component="main" maxWidth="xs">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="userName"
                            label="User name"
                            value={values.userName}
                            onChange={handleInputChange}
                            error={!!errors.userName}
                            helperText={errors.userName}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleInputChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            fullWidth
                        />
                    </Grid>
                    {errors.creds &&
                        <Grid item xs={12}>
                            <Alert variant="filled" severity="error">{errors.creds}</Alert>
                        </Grid>
                    }
                    <Grid item xs={12} sx={{ justifyContent: "flex-end" }}>
                        <Button
                            type="submit"
                            onSubmit={handleSubmit}
                            fullWidth
                            variant="contained"
                            sx={{ fontWeight: 700 }}
                        >
                            Sign In
                        </Button>
                    </Grid>
                    <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                        <Grid item sx={{ fontSize: '0.8rem' }}>
                            <Link to="/signup">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledForm >
    )
}