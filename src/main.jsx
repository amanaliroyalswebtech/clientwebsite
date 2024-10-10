import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Childpage from '/src/pages/Childpage.jsx'
import Content from './pages/Content.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element = {<App />}>
   <Route path="/" element={<Content/>}/>
   <Route path="account" element={<Childpage/>}/>
  </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
