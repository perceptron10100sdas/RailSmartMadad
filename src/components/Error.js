import React from 'react'
import error from "../assets/images/error.png"

const Error = () => {
  return (

<div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <img src={error} alt='' className="mx-auto h-56 w-auto text-black sm:h-64"></img>

    <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

    <p className="mt-4 text-gray-500">We can't find that page.</p>
  </div>
</div>
  )
}

export default Error;