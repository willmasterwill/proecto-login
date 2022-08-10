
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {pink } from '@mui/material/colors';
// import { maxWidth } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';


const Login = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };
       
     
    return (
        <Container  maxWidth="xs">

                <Card sx={{  marginTop: 10,   maxWidth : "xs", height: 450}} > 
                    <Box
                            
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                            <Avatar sx={{  bgcolor: pink[500] }}>  
                            </Avatar> 
                        <Typography component="h1" variant="h5">
                            Inicia Sesion ...
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo Electronico"
                                name="email"
                                autoComplete="email"
                                autoFocus />
                            <TextField                              
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password" />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: pink[500] }}
                            >
                                Registrarse
                            </Button>
                            <Grid container>
                                <Grid item >
                                    <Link href="#" variant="body2"  >
                                        {"No tienes una cuenta? Registrate..."}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

        
                 </Card>

        </Container>
        
       
           
       
    );
        
  
        
};

export default Login;
