import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App.jsx';
import { CategoryPage } from './Pages/CategoryPage/index.jsx';
import './styles/global.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "category/:categoryId",
        element: <CategoryPage/>
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
