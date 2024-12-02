import { Avatar, Stack,Typography,Button } from '@mui/material'

const ProfileBar = () => {
  return (
    <>
      <Stack
      flexDirection={'row'}
      justifyContent={'space-between'}
      px={1}
      py={2}
      mx={'auto'}
      boxShadow={"5px 5px 5px gray"}
      width={"100%"}
      borderRadius={"15px"}
      sx={{
        ":hover":{cursor:"pointer"}
      }}
      >
        <Stack
        flexDirection={'row'}
        gap={2}
        >
          <Avatar src='' alt=''/>
          <Stack flexDirection={'column'}>
            <Typography variant='h6' fontWeight={"bold"} fontSize={"1rem"}>
              Karan_2313@
            </Typography>
            <Typography variant='caption' fontSize={"1.1rem"} color='gray'>
              this is my bio.
            </Typography>
            <Typography variant='caption' fontSize={"1rem"}>
              3 folowers
            </Typography>
          
          </Stack>
        </Stack>
        <Button size='medium' sx={{
          border:'1px solid gray',
          color:"black",
          borderRadius:"10px",
          p:2,
          height:40,
        }}>Follow</Button>
      </Stack>
    </>
  )
}

export default ProfileBar
