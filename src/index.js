//1)Importar las librerias React y ReactDOM

//La libreria react definir que es un componente y como funcionan juntos los mismos
import React from "react";

//La libreria que sabe hacer que un componente aparezca en pantalla
import ReactDOM from "react-dom/client";

import App from "./App";


//2)Obtener una referencia al div con id root
const el = document.getElementById("root");

//3)Le decimos a React que tome control del elemento
const root = ReactDOM.createRoot(el);

//4)Creamos un componente 
/*
function App() {
    //Utilizamos {} para mostrar una variable
    //String y numeros OK
    //Arreglos
    //Booleanos no se muestra
    //Null no se muestra
    //Objetos no se puede
    // let Nombre = "Pedro";
    // let Apellido = "Rojas";
    // let Estado = "Aceptado";
    // let msj = "Un mensaje al usuario"

    // return (
    //     <div>
    //         <div>
    //             <h1>Hola: {Nombre} {Apellido}</h1>
    //             <p>Su estado es: {Estado}</p>
    //             <input type="number" min={5} max={10} style={{ color: "red", fontSize: "30px" }} alt={msj} />
    //         </div>
    //         <footer>
    //             <p>Powered by Agustin</p>
    //         </footer>
    //     </div>
    // )

    return <input style={{ color: "red", fontSize: "30px", border:"2px solid blue" }}/>
}
*/

//5) Mostrar el componente en pantalla

root.render(<App />);
