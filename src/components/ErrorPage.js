import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header'

const ErrorPage = () => {

  const error = useRouteError();
 console.log(error)

  return (
    <>
   
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>  <br />

        {
          error && (
            <div>
              <p className="xl text-red-500"> {error.status} || {error.statusText} </p>
            </div>
          )
        }
       
      </div>
    </>
  )
}

export default ErrorPage
