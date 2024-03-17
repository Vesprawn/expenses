import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UsersPage from './pages/UsersPage.tsx'
import UserPage from './pages/UserPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersPage />
  },
  {
    path: '/user/:id',
    element: <UserPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
