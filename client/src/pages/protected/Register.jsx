import { Stack, Typography, TextField, Button, useMediaQuery } from "@mui/material"
import { useState } from "react"
const Register = () => {
  const _700 = useMediaQuery("(min-width:700px)"); // use for page responsiveness

  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLogin = () => {
    setLogin((pre) => !pre);
  }
  // handleLogin:handleRegister
  const handleLogin = () => {
    const data = {
      email,
      password
    };
    console.log(data);
  }
  const handleRegister = () => {
    const data = {
      username,
      email,
      password
    };
    console.log(data);

  }




  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={_700
          ? {
            backgroundImage: 'url("register-bg.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 600px"
          } : null
        }
      >
        <Stack
          flexDirection={"column"}
          width={_700 ? "40%" : "90%"}
          mt={_700 ? 20 : 0}
          gap={2}
        >
          <Typography
            variant="h5"
            fontSize={_700?"1.5rem":"1rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            {login ? "Login with email" : "Register with email"}
          </Typography>
          {
            login ? null : (
              <TextField
                variant="outlined"
                placeholder="Enter your Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            )
          }
          <TextField variant="outlined" placeholder="Enter your Email..."
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField variant="outlined" placeholder="Enter your Password..."
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            size="large"
            className="cursor-pointe rounded group relative overflow-hidden"
            sx={{
              width: "100%",
              height: 52,
              bgcolor: "green",
              color: "White",
              fontSize: "1rem",
            }}
            onClick={login ? handleLogin : handleRegister}
          >
            <span className="absolute inset-0 flex items-center justify-center  text-white">
              {login ? "Login" : "Signup"}
            </span>
            {/* <span className="group-hover:opacity-0 transition-opacity"></span> */}
          </Button>
          <Typography
            variant="subtitle2"
            fontSize={_700 ? "1.3rem" : '1'}
            alignSelf={"center"}

          >
            {login ? "Don't have an account" : "Already have an account"} <span className="underline cursor-pointer text-blue-500" onClick={toggleLogin}>{
              login ? "Sign up" : "Login"}</span>
          </Typography>
        </Stack>
      </Stack >
    </>
  )
}

export default Register
