import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Sidebar = () => {

    const {auth} = useAuth()

  return (
    <aside className="md:w-70 lg:w-80 px-5 py-10"> {/*80 -> 96*/}
        <p className="text-xl font-bold">Hola {auth.nombre}!</p>
        <Link
            to="crear-proyecto"
            className="bg-black w-full p-3 text-gray-200 font-bold block mt-5 text-center rounded-lg"
        >Nuevo proyecto
        </Link>
    </aside>
  )
}

export default Sidebar