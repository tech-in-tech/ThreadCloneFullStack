import React from 'react'
import { Stack,Typography } from '@mui/material'
import { IoIosMore } from 'react-icons/io' 
import PostOne from './post/PostOne'
import PostTwo from './post/PostTwo'

const Post = () => {
  return (
    <>
      <Stack
        flexDirection={'row'}
        justifyContent={"space-between"}
        borderBottom={"3px solid gray"}
        p={2}
        mx={"auto"}
        width={"70%"}
        sx={{
          ":hover": {
            cursor: "pointer",
            boxShadow: "2px 2px 10px gray",
          },
          transition: "all ease-in-out 0.3s",
        }}
      >
        <Stack  
        flexDirection={"row"} 
        gap={2}>
          <PostOne/>
          <PostTwo/>
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
          <IoIosMore className='pt-0' />
        </Stack>
      </Stack>
    </>
  )
}

export default Post
