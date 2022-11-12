import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const obteinLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      patientsLS.length > 0 && setPatients(patientsLS)
    }

    obteinLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ))

  }, [patients])



  const deletePatient = (id) => {
    const updatePatients = patients.filter( patient => patient.id !== id)
    setPatients(updatePatients)
  }
  

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>

    </div>
      
  )
}

export default App
