import { Stack, Typography, TextField, Button } from "@mui/material"
import { Cursor } from "mongoose"
import { TbH1 } from "react-icons/tb"
const Register = () => {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: 'url("/register-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 600px"
        }}
      >
        <Stack
          flexDirection={"column"}
          width={"40%"}
          mt={20}
          gap={2}
        >
          <Typography
            variant="h5"
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            Login With Email
          </Typography>
          <TextField variant="outlined" placeholder="Enter your Username..." />

          <TextField variant="outlined" placeholder="Enter your Email..." />

          <TextField variant="outlined" placeholder="Enter your Password..." />

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
          >
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
              Sign Up
            </span>
            <span className="group-hover:opacity-0 transition-opacity"></span>
          </Button>
          <Typography
            variant="subtitle2"
            fontSize={'1.3rem'}
            alignSelf={"center"}

          >
            Already have an account ? <span className="underline cursor-pointer text-blue-500">Login</span>
          </Typography>
        </Stack>
      </Stack >
    </>
  )
}

export default Register
