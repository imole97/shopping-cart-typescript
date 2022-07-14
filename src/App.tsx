import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/home.component'
import { About } from './pages/about.component'
import { Store } from './pages/store.component'
import { Navbar } from './components/navbar.component'


const App = () => {

  return (
    <>
    <Navbar/>
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='store' element={<Store/>}></Route>
      </Routes>
    </Container>
    </>
   )
}

export default App
