import { Stack, Typography,Button } from "@mui/material";

const Error = () => {
  return (
    <Stack
      width="100%"
      height="100vh"
      flexDirection="row"
      justifyContent="center"
      alignItems={"center"}
      sx={{
        background: 'url("error-bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        p={5}
        border="2px solid black"
        bgcolor="wheat"
        borderRadius="10px"
        flexDirection="column"
        alignItems="center"
        justifyContent={"center"}
        height={"40vh"}
        gap={2}
        boxShadow="7px 7px 7px white"
      >
        <Typography variant="h3">OOPs</Typography>
        <Typography variant="h6">You Entered the Wrong Page!</Typography>
        <Button 
        size="large"
        sx={{
          bgcolor:"blue",
          color:"white",
          borderRadius:"10px",
          ":hover":{
            bgcolor:"green",
            cursor:"pointer"
          },
          p:1
        }}
        >
          Go Back
        </Button>
      </Stack>
    </Stack>
  );
};

export default Error;
