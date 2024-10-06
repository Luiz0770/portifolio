import { Outlet } from 'react-router-dom'
import PreLoader from './components/UI/PreLoader'
import Header from './components/Header'

function App() {

  return (
    <>
      <PreLoader />
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
