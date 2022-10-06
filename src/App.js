import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from './components/Select';
import Image from './components/Image';
import {useForm } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Tomasz Klepacki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function SignUp() {
  const{
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit=(data) =>console.log(data)

  


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Panel Kontrahenta
          </Typography>
         
          {/* Validate  */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  variant='outlined'
                  fullWidth
                  id="firstName"
                  label="Imię"
                  autoFocus
                  {...register("firstName", {required: "Required"})}
                  error={!!errors?.firstName}
                  helperText={errors?.firstName ? errors.firstName.message : null}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  required
                  fullWidth
                  id="lastName"
                  label="Nazwisko"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}  >
            <Select/>
              </Grid>
              <Grid item xs={12} >
                <TextField
                 
                  name="numberId"
                  required="name"
                  fullWidth
                  id="numberId"
                  label="Numer identyfikacyjny"
                  autoFocus
                
                />
                  <FormHelperText
                  requierd
                  display 
                  > Czy wprowadzono poprawny PESEL/ NIP? </FormHelperText>
              </Grid>

              <Image/>
              <Grid item xs={12} mt={3}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Zaakceptuj polityke prywatności naszego serwisu"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Dodaj
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                 Jesteś już zarejestrowany? Zaloguj się
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
       
      </Container>
    </ThemeProvider>
  );
}