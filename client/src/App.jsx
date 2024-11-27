import Loading from './components/common/Loading'
import { BrowserRouter, Routes, Route } from
  "react-router-dom"
import Header from './components/common/Header'
import Home from './pages/protected/Home'
import Search from './pages/protected/Search'
import Register from './pages/protected/Register'
import Error from './pages/protected/Error'
import { Box } from '@mui/material'
import { TbH1 } from 'react-icons/tb'
import ProtectedLayout from './pages/protected/ProtectedLayout'
const App = () => {
  return (
    <>
      {/* <Register /> */}
      <Box minWidth={'100vh'}>
        <BrowserRouter>
          <Routes>
          <Route exact path='/' element={<ProtectedLayout/>}>
          <Route exact path='' element={<Home/>}/>
          <Route exact path='post/:id' element = {<h1>Single Post</h1>}/>
          <Route exact path='/search' element={<Search/>}/>
          <Route exact path='' element/>
          <Route exact path='' element/>

          



          </Route>
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
