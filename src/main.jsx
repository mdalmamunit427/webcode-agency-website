import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  'sweetalert2/dist/sweetalert2.js'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Pricing from './pages/home/Pricing.jsx'
import Services from './pages/home/Services.jsx'
import Blogs from './pages/blogs/Blogs.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './context/AuthContext.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* main layout */}
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blogs' element={<Blogs />} />

          {/* error page */}
          <Route path='*' element={<ErrorPage />} />
        </Route>

        {/* authentication */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* dashboard  */}
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
)
