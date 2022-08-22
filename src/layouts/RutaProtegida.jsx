import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const RutaProtegida = () => {

    const {auth, cargando} = useAuth();
    if (cargando) return 'Cargando...'

  return (
    <>
        {/* <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'> 
            <div className='md:w-2/3 lg:w-2/5'>
                <Outlet />
            </div>
        </main> */}
        {auth._id ? (
          <div className='bg-gray-100'>
            <Header />

            <div className='md:flex md:min-h-screen'>
              <Sidebar />
              <main className='flex-auto'>
                <Outlet className='flex-1 p-10' />
              </main>
            </div> 
          </div>
        ): <Navigate to="/" />}
    </>
  )
}

export default RutaProtegida