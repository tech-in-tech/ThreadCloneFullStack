import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { FiArrowLeft } from "react-icons/fi";

import { Stack, useMediaQuery } from '@mui/material'
const Navbar = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <FiArrowLeft size={_300?32:24} className="image-icon" color="black"/>
        <Link to={"/"} className="link">
          <GoHome size={_300?32:24} />
        </Link>

        <Link to={"/search"} className="link">
          <IoIosSearch size={_300?32:24} />
        </Link>

        <TbEdit size={_300?32:24} className="image-icon" color="black"/>
        <CiHeart size={_300?32:24} color="black"/>
        <Link to={"/profile/threads/1"} className="link">
          <RxAvatar size={_300?32:24} color="black"/>
        </Link>
      </Stack>
    </>
  )
}

export default Navbar
