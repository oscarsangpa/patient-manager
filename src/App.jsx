import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  
  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 m:flex">
        <Form/>
        <PatientList/>
      </div>

    </div>
      
  )
}

export default App