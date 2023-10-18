/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import Login from './Components/Login/Login.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';
import ErrorPage from './ErrorPage.jsx';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct.jsx';
import SignUP from './Components/SignUp/SignUP.jsx';
import AuthProvider from './providers/AuthProvider.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/addProduct',
        element: <AddProduct ></AddProduct>
      },
      {
        path: '/updateProduct',
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path: ('/myCart'),
        element: <MyCart></MyCart>
      },
      {
        path: ('/login'),
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
