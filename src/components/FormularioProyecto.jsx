
import { useState } from "react"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta";

const FormularioProyecto = () => {

    const {mostrarAlerta, alerta, submitProyecto} = useProyectos();

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [cliente, setCliente] = useState('')

    const handleSumbit = async(e) =>{
        e.preventDefault();
        if([nombre, descripcion, fechaEntrega, cliente].includes('')){
            mostrarAlerta({
                msg: 'Todos los Campos son Obligatorios',
                error: true
            })
            return
        }

        //Pasar los datos al provider
        await submitProyecto({nombre, descripcion, fechaEntrega, cliente})
        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')

    }

    const { msg } = alerta

  return (
    <form 
        className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
        onSubmit={handleSumbit}
    >
        {msg && <Alerta alerta={alerta} />}

      <div className="mb-5">
        <label
            className="text-gray-700 uppercasefont-bold text-sm"
            htmlFor="nombre"
        > Nombre Proyecto </label>
        <input
            id="nombre" 
            type="text"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Proyecto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
            className="text-gray-700 uppercasefont-bold text-sm"
            htmlFor="descripcion"
        > Descripción </label>
        <textarea
            id="descripcion" 
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripción del Proyecto"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
            className="text-gray-700 uppercasefont-bold text-sm"
            htmlFor="fechaEntrega"
        > Fecha de Entrega</label>
        <input
            id="fechaEntrega" 
            type="date"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaEntrega}
            onChange={e => setFechaEntrega(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
            className="text-gray-700 uppercasefont-bold text-sm"
            htmlFor="cliente"
        > Cliente del Proyecto </label>
        <input
            id="cliente" 
            type="text"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Cliente del Proyecto"
            value={cliente}
            onChange={e => setCliente(e.target.value)}
        />
      </div>

      <input 
        type="submit"
        value="Crear proyecto"
        className="bg-black w-full text-gray-200 p-3 font-bold block mt-5 text-center rounded cursor-pointer hover:bg-gray-800 transition-colors"
      />
    </form>
  )
}

export default FormularioProyecto
