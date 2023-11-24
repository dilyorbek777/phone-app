import { Routes, Route } from 'react-router-dom'
import { Home, Navbar } from '../'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App