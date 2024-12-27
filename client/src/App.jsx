// import Loading from './components/common/Loading'
import { BrowserRouter, Routes, Route } from
  "react-router-dom"
// import Header from './components/common/Header'
import Home from './pages/protected/Home'
import Search from './pages/protected/Search'
import Register from './pages/protected/Register'
import Error from './pages/protected/Error'
import { Box } from '@mui/material'
// import { TbH1 } from 'react-icons/tb'
import ProtectedLayout from './pages/protected/ProtectedLayout'
import ProfileLayout from './pages/protected/profile/ProfileLayout'
import Threads from './pages/protected/profile/Threads'
import Repost from './pages/protected/profile/Repost'
import SinglePost from "./pages/protected/SinglePost"
import Replies from './pages/protected/profile/Replies'
const App = () => {
  const data = true;
  return (
    <>
      {/* <Register /> */}
      <Box minWidth={'100vh'}>
        <BrowserRouter>
          <Routes>
            {
              data ? <Route exact path='/' element={<ProtectedLayout />}>
                <Route exact path='' element={<Home />} />
                <Route exact path='post/:id' element={<SinglePost />} />
                <Route exact path='search' element={<Search />} />
                <Route exact path='profile' element={<ProfileLayout />} >
                  <Route exact path="threads/:id" element={<Threads />} />
                  <Route exact path="replies/:id" element={<Replies />} />
                  <Route exact path="reposts/:id" element={<Repost />} />
                </Route>
              </Route> :
                <Route exact path="/" element={<Register />} />
            }
            <Route exact path="*" element={<Error />} />

          </Routes>
        </BrowserRouter>
      </Box>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='*' element={<Error />} />

        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
