import { Stack, Typography, useMediaQuery } from '@mui/material'
import { IoIosMore } from 'react-icons/io'
import PostOne from './Post/PostOne'
import PostTwo from './Post/PostTwo'

const Post = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _300 = useMediaQuery("(min-width:300px)");

  return (
    <>
      <Stack
        flexDirection={'row'}
        justifyContent={"space-between"}
        borderBottom={"3px solid gray"}
        p={_700 ? 2 : _400 ? 1 : "5px"}
        mx={"auto"}
        width={_700?"70%":_300?"90%":"100%"}
        sx={{
          ":hover": {
            cursor: "pointer",
            boxShadow: _700?"2px 2px 10px gray":"",
          },
          transition: "all ease-in-out 0.3s",
        }}
      >
        <Stack
          flexDirection={"row"}
          gap={_700?2:1}>
          <PostOne />
          <PostTwo />
        </Stack>

        <Stack
          flexDirection={'row'}
          justifyContent={'center'}
          gap={1}
          fontSize={"1rem"}
          alignItems={"top"}
        >
          <Typography
            variant='caption'
            color={'gray'}
            fontSize={'1rem'}
            position={"relative"}
            top={0}
          >24h</Typography>
          <IoIosMore className='pt-0' size={_700?28:20} />
        </Stack>
      </Stack>
    </>
  )
}

export default Post
