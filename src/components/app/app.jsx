import { Routes, Route } from 'react-router-dom'
import { FormSearch, Home, Navbar, ToogleBar } from '../'

const App = () => {
  return (
    <>
      <Navbar />
      <FormSearch />
      <ToogleBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App