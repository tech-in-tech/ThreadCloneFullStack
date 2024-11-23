import Loading from './components/common/Loading'
import { BrowserRouter, Routes, Route } from 
"react-router-dom"
import Header from './components/common/Header'
import Home from './pages/protected/Home'
import Search from './pages/protected/Search'
import Register from './pages/protected/Register'
import Error from './pages/protected/Error'
const App = () => {
  return (
    <>
      <Register/>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/search' element={<Search/>} />
          <Route exact path='*' element={<Error/>} />
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
