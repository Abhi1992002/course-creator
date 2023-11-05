import { useState } from 'react';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Button from '@mui/material/Button';
import { Card, Typography } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

//Setting Theme for dark button
const darkButton = createTheme({
  palette: {
    primary:{
        main: `#068FFF`,
    }

  },
});

export default function Signin() {

    //Passord Visiblilty Functionality
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    //GettingDetails
    const [email , setEmail] = useState('') 
    const [password , setPassword] = useState('')


    const emailHandler = (e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e)=>{
          setPassword(e.target.value)
    }
    console.log(email  , password)
  
  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",height:"87vh"}}>

    <Typography variant='h3' style={{marginBottom:"50px"}}>Log in to your Account!!</Typography>

    <Card variant='outlined' style={{maxWidth:'700px',width:"100vw",padding:"30px"}}>
      {/* Email */}
      <TextField required id="outlined-basic" type="email" label="Email" fullWidth variant="outlined" style={{marginBottom:'30px'}} onChange={emailHandler}/>
     
      {/*Password  */}
      <FormControl fullWidth variant="outlined" style={{marginBottom:'30px'}} onChange={passwordHandler}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* Button */}
        <ThemeProvider theme={darkButton}>
        <Button variant="contained" color='primary' sx={{background:"black"}} fullWidth >
             <Typography variant='h6'>Sign in</Typography>
        </Button>
        </ThemeProvider>

    </Card>
    </div>
  )
}
