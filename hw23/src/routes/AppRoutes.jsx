import { Home } from '../pages/Home/Home'
import { Register } from '../pages/Register/Register'
import { Profile } from '../pages/Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/Login'

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      component: <Home />,
    },
    {
      path: '/login',
      component: <Login />,
    },
    {
      path: '/register',
      component: <Register />,
    },
    {
      path: '/profile',
      component: <Profile />
    }  
  ]

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  )
}
