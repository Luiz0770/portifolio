import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import Pages
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Projects from './pages/Projects.jsx'

// Import Swiper
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects/> },
      { path: "*", element: <PageNotFound /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
