import { Stack, Avatar ,Typography, Button, useMediaQuery} from "@mui/material"
const Input = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      {
        _700?(
          <Stack 
      flexDirection={'row'} 
      alignItems={'center'} 
      width={"70%"}
      height={28}
      justifyContent={'space-between'}
      p={3}
      borderBottom={'2px solid gray'}
      my={5}
      mx={"auto"}
      >
        <Stack flexDirection={"row"} alignItems={'center'} gap={2}>
          <Avatar/>
          <Typography color="GrayText">Start a Thread...</Typography>
        </Stack>
        <Button size="medium" sx={{
          bgcolor:"gray",
          color:'aliceblue',
          ":hover":{
            bgcolor:"black",
            cursor:'pointer'
          }
        }}>POST</Button>
      </Stack>
        ) : null
      }
    </>
  )
}

export default Input
