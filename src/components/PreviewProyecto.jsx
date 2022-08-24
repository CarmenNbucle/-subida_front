import { useState, useEffect } from 'react' 
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useProyectos from "../hooks/useProyectos"

const PreviewProyecto = ({proyecto}) => {
    const {nombre, _id, cliente} = proyecto
    const {auth} = useAuth()


    const [datos, setDatos] = useState([])
    var reservados = 0
	var libres = 0
	var total = 0
	var porreservados = 0
	var porlibres = 0

    const init = async () => {
        //const {nombre, _id, cliente} = proyecto

		/* Para las línea */
		// reservados = data.resevados
		// total = data.total
		// libres = total - reservados
		// porreservados = Math.trunc(reservados* 100 /total)
	 	// porlibres = 100 - porreservados

		//setDatos({total, reservados, libres, porreservados, porlibres})	
	}

	//useEffect(init, [])
    const miimagen = {
         backgroundImage:'url(../src/assets/'+ nombre +'.jpg)',
         backgroundSize: 'cover'
    }




    return ( 
     <>
        <Link
            to={`${_id}`}
        >
            <div className="bg-[url('./assets/fondo.jpg')] w-550">
                <div className='finaltarjeta'>
                    <div><p className='nombre_tarjeta'>{nombre}</p></div>
                    <div className='medidaporcentaje'>
                        {/* <label for="file">{datos.reservados}/{datos.total} vendidos</label>
                        <progress id="file" value={datos.porreservados} max="100"> {datos.porreservados}% </progress> */}
                    </div>
                </div>
            </div>
        </Link>



        {/*<div className="border-b p-5 flex">
            <p className="flex-1">
                {nombre}
                <span className="text-sm text-gray-500 uppercase">
                    {''} {cliente}
                </span> 
            </p>
            <Link
                to={`${_id}`}
                className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"
            >ver proyecto</Link>
        </div>*/}




    </>                

    )
}

export default PreviewProyecto
