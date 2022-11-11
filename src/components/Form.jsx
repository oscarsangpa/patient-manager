import React, { useState } from "react";
import Error from "./Error";

const Form = ({ patient, setPatient }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [sympton, setSympton] = useState('');
  const [error, setError] = useState(false);

  

  const handleSubmit = (e) => {
      e.preventDefault()

      if( [name, owner, email, date, sympton].includes('')) {
        setError(true)
        return;
      } 
      setError(false)

      const patientObj = {
        name, 
        owner,
        email,
        date, 
        sympton
      }

      setPatient([...patient, patientObj]);

      setName('')
      setOwner('')
      setEmail('')
      setDate('')
      setSympton('')
    

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento Pacientes
      </h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos </span>
      </p>

      <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        { error && <Error><p>Todos los campos son obligatorios</p></Error> }

          <div className="mb-5">
              <label
                htmlFor="name" 
                className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
              <input
                id="name"
                type="text"
                placeholder="Nombre de la mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={name}
                onChange={ (e) => setName(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="owner" 
                className="block text-gray-700 uppercase font-bold">Nombre propietario</label>

              <input
                id="owner"
                type="text"
                placeholder="Nombre del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={owner}
                onChange={ (e) => setOwner(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email" 
                className="block text-gray-700 uppercase font-bold">Nombre propietario</label>

              <input
                id="email"
                type="email"
                placeholder="Email contacto propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="date" 
                className="block text-gray-700 uppercase font-bold">Fecha de alta</label>

              <input
                id="date"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={date}
                onChange={ (e) => setDate(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="sympton" 
                className="block text-gray-700 uppercase font-bold">Síntomas</label>
           <textarea
              id="sympton"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los síntomas"
              value={sympton}
              onChange={ (e) => setSympton(e.target.value) }
           />

            </div>

            <input
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
              cursor-pointer transition-colors"
              value="Agregar paciente"
            />
              
      </form>
    </div>
  );
};

export default Form;
