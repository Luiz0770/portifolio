import { Outlet } from 'react-router-dom'
import PreLoader from './components/UI/PreLoader'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <PreLoader /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
