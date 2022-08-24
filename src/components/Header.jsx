import { Link } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import useAuth from "../hooks/useAuth"
//import Busqueda from "./Busqueda"

const Header = () => {

  const { cerrarSesionProyectos } = useProyectos();
  const { cerrarSesionAuth } = useAuth()

  const handleCerrarSesion = () => {
    cerrarSesionAuth()
    cerrarSesionProyectos()
    localStorage.removeItem('token')
  }

  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className='md:flex md:justify-between'>
            <h2 className='text-4xl text-black font-black text-left'>Nbucle</h2>
            <input 
                type="search" 
                placeholder='Buscar Proyecto'
                className='rounded-lg lg:w-96 block p-2 border'           
            />
            <div className="flex items-center gap-4">
                <Link
                    to="/proyectos"
                    className="font-bold uppercase"
                >Proyectos</Link>
                <button
                    type="button"
                    className="text-white text-sm bg-black p-3 rounded-md uppercase font-bold"
                    onClick={handleCerrarSesion}
                >
                    Cerrar sesión
                </button>
            </div>
      </div>
    </header>
  )
}

export default Header
