import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput( (prevState) => ({
    ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  }

  const resetState = () => {
     setIsSignup(!isSignup)
     setInput({
      name: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      <form onSubmit={handleEventSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography>{isSignup ? "Signup" :"Login"}</Typography>

         {isSignup && ( <TextField
         onChange={handleChange}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
            name="name"
            value={input.name}
          />)}
         <TextField
           onChange={handleChange}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
            name="email"
            value={input.email}
          />
          <TextField
            onChange={handleChange}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            name="password"
            value={input.password}
          />
          <Button
          endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/>}
          type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "Signup" :"Login"}
          </Button>
          <Button
            endIcon={isSignup ? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>}
            sx={{ marginTop: 3, borderRadius: 3 }}
            onClick={resetState}
          >
            Change to {isSignup ? "Login" :"Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
