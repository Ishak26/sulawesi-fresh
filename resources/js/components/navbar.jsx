import { Link } from '@inertiajs/react'
import { FaPaypal, FaPencilAlt, FaShoppingBag, FaUser,FaUserPlus } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

export default function navbar() {
  const [navProfilActive, setNavProfilActive] = useState(false)
  const [handleToggle, sethandleToggle] = useState(false)
  const Login = true
  const handleNavProfil = () => {
    setNavProfilActive(!navProfilActive)
    sethandleToggle(true)
   } 
  
  return (
    <nav className=''>
      <ul className='flex space-x-4 items-center text-sm'>
        <li>
          <Link href='about' className='hover:underline'>
            Layanan Kami
          </Link>
        </li>
       {
          (Login != true) ?
             <li className='inline-flex'>
              <Link
                href='login'
                className='hover:underline ml-4 font-bold bg-primary px-3 py-2 rounded-md text-green-800'
              >
                Login
              </Link>
              <p className='mx-4 border border-slate-600 h-7 self-center'></p>
              <Link
                href='login'
                className='hover:underline font-bold border bg-gray-100 px-3 py-2 rounded-md text-green-800 border-green-800'
              >
                Daftar
              </Link>
            </li>
          
            :
            
          <li className='flex items-center gap-2 cursor-pointer' onClick={handleNavProfil }>
              <img src="./image/no-profil.jpg" className='w-8 h-8 rounded-full object-cover' alt='profil'/>
              <FaGear />
              <NavProfil navProfilActive={navProfilActive} handleToggle={ handleToggle} />
          </li>
       }
      </ul>
      
    </nav>
  )
}

function NavProfil({ handleToggle,navProfilActive }) {
  return  <>
    <div className={`${!handleToggle && `hidden`} w-52 bg-gray-900 m-4 fixed top-12 right-0 rounded-lg text-white p-4 text-xs ${navProfilActive?`animate-fade-in`:`animate-fade-out`} `} >
      <img src="./image/no-profil.jpg" className='w-16 h-16 rounded-full m-auto mt-4 mb-1' alt="profil" />
      <p className='text-center mb-4 text-sm'>profil</p>
      <div className='flex flex-col gap-3'>
        <Link >
          <div className="flex items-center gap-3">
            <FaPencilAlt/>
            <p>Sesuaikan Profil</p>
          </div>
        </Link>
        <Link >
          <div className="flex items-center gap-3">
            <FaUser/>
            <p>Kelola Account</p>
          </div>
        </Link>
        <Link >
          <div className="flex items-center gap-3">
            <FaShoppingBag/>
            <p>Pesanan</p>
          </div>
        </Link>
        <Link >
          <div className="flex items-center gap-3">
            <FaPaypal/>
            <p>Pembayaran</p>
          </div>
        </Link>
      </div>

      {/* nav toko penjualan */}
      <div className='mt-4 border-t-2 py-4'>
        <p className='mb-2'>toko Penjualan</p>
         <Link >
          <div className="flex items-center gap-3">
            <FaUserPlus/>
            <p>Buat akun Penjualan</p>
          </div>
        </Link>
      </div>

      {/* nav mitra transportasi */}
      <div className='mt-4 border-t-2 py-4'>
        <p className='mb-2'>Mitra transportasi</p>
         <Link >
          <div className="flex items-center gap-3">
            <FaUserPlus/>
            <p>Buat akun Mitra</p>
          </div>
        </Link>
      </div>

    </div>
  </>
}
