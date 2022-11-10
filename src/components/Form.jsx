import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 ld:w-2/5'>
      <h2 className='font-black text-3xl text-center'> Seguimiento Pacientes </h2>

      <p className="text-lg mt-5 text-center">
        Añade pacientes y {" "}
          <span className='text-indigo-600 font-bold'> Administralos </span>
      </p>
    </div>
  )
}

export default Form;