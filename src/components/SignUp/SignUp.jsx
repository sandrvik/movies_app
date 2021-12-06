import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { StyledForm, useForm } from '../Form/Form';
import * as authService from '../../services/authService'

import { Button, Container, Typography, Grid, TextField } from '@mui/material';

const initialFValues = {
    userName: '',
    password: '',
    repPassword: '',
}

export const SignUp = () => {
    const history = useHistory()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('userName' in fieldValues)
            temp.userName = fieldValues.userName ? "" : "This field is required."
        if ('userName' in fieldValues && fieldValues.userName !== "")
            temp.userName = authService.isUserExists(fieldValues.userName) ? "That login is occupied" : ""
        if ('password' in fieldValues)
            temp.password = fieldValues.password.length > 5 ? "" : "Minimum 6 numbers required."
        if ('repPassword' in fieldValues)
            temp.repPassword = fieldValues.password === fieldValues.repPassword ? "" : "Passwords are not equal"
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
            authService.insertUser(values)
            resetForm()
            history.push("/signin")
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Typography
                sx={{ fontFamily: "Montserrat", mb: 3, fontWeight: 600 }}
                align="center"
                component="h1"
                variant="h5">
                Sign up
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
                    <Grid item xs={12}>
                        <TextField
                            label="Repeat password"
                            name="repPassword"
                            type="password"
                            value={values.repPassword}
                            onChange={handleInputChange}
                            error={!!errors.repPassword}
                            helperText={errors.repPassword}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            onSubmit={handleSubmit}
                            fullWidth
                            variant="contained"
                            sx={{ fontWeight: 700 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                            <Grid item sx={{ fontSize: '0.8rem' }}>
                                <Link to="/signin">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledForm >
    )
}