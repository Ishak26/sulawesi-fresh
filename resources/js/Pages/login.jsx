import { FaFacebook, FaGoogle } from 'react-icons/fa'
import AuthForm from '../components/authform'
import { Link } from '@inertiajs/react'
function Login() {
  return (
    <div className=' p-4 md:p-10'>
      <form action='' className='flex flex-col gap-2 w-full'>
        <h3 className='font-semibold mt-4 text-lg mb-2 antialiased'>Login,</h3>
        <div className=''>
          <label htmlFor='' className='font-medium text-slate-700'>
            Username/Email
          </label>
          <input
            className='border-b-2 px-4 py-2 mt-2 w-full'
            name='name'
            type='text'
            placeholder='Email'
          />
        </div>
        <div className=''>
          <label htmlFor='' className='font-medium text-slate-700'>
            Password
          </label>
          <input
            className='border-b-2 px-4 py-2 mt-2 w-full '
            type='password'
            placeholder='Password'
          />
        </div>
        <button className='border py-1 mt-4 w-full rounded-lg bg-primary m-auto' type='submit'>
          Simpan
        </button>
      </form>

      <p className='my-2 text-center text-slate-400'>atau</p>
      <div className='grid grid-cols-2 gap-2'>
        <div className='rounded-sm flex justify-center items-center gap-2 p-2 border my-4'>
          <FaGoogle className='text-ms' />
          <p>Google</p>
        </div>
        <div className='rounded-sm flex justify-center items-center gap-2 p-2 border my-4'>
          <FaFacebook className='text-ms' />
          <p>Facebook</p>
        </div>
      </div>

      <p className='text-sm mb-10 mt-2 text-slate-600'>
        Belum punya akun ?{' '}
        <Link className='text-blue-600' href='registrasi'>
          daftar
        </Link>
      </p>
    </div>
  )
}
Login.layout = (page) => <AuthForm children={page} />

export default Login
