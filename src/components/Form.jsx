import React, { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSympton] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSympton(patient.symptom)
    }

  }, [patient])

  const idGenerator = () => {
    const fecha = Date.now()
    const random = Math.random(fecha).toString(36).substring(2)
    return random
  }

  const handleSubmit = (e) => {
      e.preventDefault()

      if( [name, owner, email, date, symptom].includes('')) {
        setError(true)
        return;
      } 
      setError(false)

      const patientObj = {
        name, 
        owner,
        email,
        date, 
        symptom,
        id: idGenerator()
      }

      if(patient.id) {
        patientObj.id = patient.id

        const updatePatients = patients.map( patientState => patientState.id === patient.id ? patientObj : patientState )
        setPatients(updatePatients)
        setPatient({})

      } else {
        patientObj.id = idGenerator()
        setPatients([...patients, patientObj]);
      }


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
                className="block text-gray-700 uppercase font-bold">Mascota</label>
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
                className="block text-gray-700 uppercase font-bold">propietario/a</label>

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
                className="block text-gray-700 uppercase font-bold">Correo</label>

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
                htmlFor="symptom" 
                className="block text-gray-700 uppercase font-bold">Síntomas</label>
           <textarea
              id="symptom"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los síntomas"
              value={symptom}
              onChange={ (e) => setSympton(e.target.value) }
           />

            </div>

            <input
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
              cursor-pointer transition-colors rounded-md"
              value={ patient.id ? 'Editar paciente' : 'Agregar paciente '}
            />
              
      </form>
    </div>
  );
};

export default Form;
