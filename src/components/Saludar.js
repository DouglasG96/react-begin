import React from "react";

export default function Saludar(props) {
  // Destructuring props, extrae y asigna las props en variables
  // const { userInfo, saludarFn } = props;
  // Valores por defecto en caso de que no exista
  const { nombre="Anonimo", apellidos } = props;
  return (
      <div>
        <p>
          Hola {nombre} {apellidos}.
        </p>
      </div>
    );
}