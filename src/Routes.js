import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import ErrorPage from './components/ErrorPage'
import About from './components/About'
import Root from './components/Root'
import Book from './components/Book'
import BookDetails from './components/BookDetails'

 const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          index: true,
          path: '/home',
          element: <Home></Home>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: '/books',
          element: <Books></Books>,
          loader: () => {
            return fetch ('https://api.itbook.store/1.0/new')
          }
        },
        {
          path: '/book/:isbn13',
          element: <BookDetails></BookDetails>,
          loader: ({params}) => {
            return fetch (`https://api.itbook.store/1.0/books/${params.isbn13}`)
          }
        },
        {
          path: '/about',
          element: <About></About>,
        }
      
      ]
    }
    
])
export default router;