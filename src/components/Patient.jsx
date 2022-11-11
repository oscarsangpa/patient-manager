import React from "react";

const Patient = () => {
  return (
    <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
      </p>
    </div>
  );
};

export default Patient;
