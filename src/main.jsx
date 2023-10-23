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
import BMW from './Components/AllBrands/BMW.jsx';
import Audi from './Components/AllBrands/Audi.jsx';
import Toyota from './Components/AllBrands/Toyota.jsx';
import Ford from './Components/AllBrands/Ford.jsx';
import Honda from './Components/AllBrands/Honda.jsx';
import Tesla from './Components/AllBrands/Tesla.jsx';
import BmwDetails from './Components/Alldetails/BmwDetails.jsx';
import ToyotaDetails from './Components/Alldetails/ToyotaDetails.jsx';
import AudiDetails from './Components/Alldetails/AudiDetails.jsx';
import FordDetails from './Components/Alldetails/FordDetails.jsx';
import HondaDetails from './Components/Alldetails/HondaDetails.jsx';
import PrivateRout from './PrivateRout/PrivateRout.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('brand.json')
      },
      {
        path: '/addProduct',
        element: <PrivateRout><AddProduct ></AddProduct></PrivateRout>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRout><UpdateProduct></UpdateProduct></PrivateRout>,
        loader: ({ params }) => fetch(`https://brand-management-server.vercel.app/products/${params.id}`)
      },
      {
        path: ('/myCart'),
        element: <PrivateRout><MyCart></MyCart></PrivateRout>,
        loader: () => fetch('https://brand-management-server.vercel.app/products/cart')
      },
      {
        path: ('/login'),
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      },

      {
        path: '/BMW',
        element: <BMW></BMW>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },

      {
        path: '/Audi',
        element: <Audi></Audi>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/Toyota',
        element: <Toyota></Toyota>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/Ford',
        element: <Ford></Ford>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/Honda',
        element: <Honda></Honda>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/Tesla',
        element: <Tesla></Tesla>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },

      {
        path: '/bmwDetails/:name',
        element: <PrivateRout><BmwDetails></BmwDetails></PrivateRout>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/toyotaDetails/:name',
        element: <PrivateRout><ToyotaDetails></ToyotaDetails></PrivateRout>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/audiDetails/:name',
        element: <PrivateRout><AudiDetails></AudiDetails></PrivateRout>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/fordDetails/:name',
        element: <PrivateRout><FordDetails></FordDetails></PrivateRout>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },
      {
        path: '/hondaDetails/:name',
        element: <PrivateRout><HondaDetails></HondaDetails></PrivateRout>,
        loader: () => fetch('https://brand-management-server.vercel.app/products')
      },

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
