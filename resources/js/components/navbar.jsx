import { Link } from '@inertiajs/react'

export default function navbar() {
  return (
    <nav className=''>
      <ul className='hidden md:flex space-x-4 items-center text-sm'>
        <li>
          <Link href='about' className='hover:underline'>
            Layanan Kami
          </Link>
        </li>
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
      </ul>
    </nav>
  )
}
