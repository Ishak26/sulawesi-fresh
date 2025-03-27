import { FaFacebook, FaGoogle } from 'react-icons/fa'
import AuthForm from '../components/authform'
import { Link } from '@inertiajs/react'
function Register() {
  return (
    <>
      <form action='' className='flex flex-col gap-2 w-full m-auto p-4 '>
        <h3 className='font-semibold mt-4 text-lg mb-2 antialiased'>Registrasi,</h3>

        <input
          className='border block rounded-xl px-4 py-2 mt-2 w-full'
          name='name'
          type='text'
          placeholder='Name/Username'
        />

        <input
          className='border block rounded-xl px-4 py-2 mt-2 w-full '
          type='email'
          placeholder='Email'
        />

        <input
          className='border block rounded-xl px-4 py-2 mt-2 w-full '
          type='password'
          placeholder='password'
        />

        <input
          className='border block rounded-xl px-4 py-2 mt-2 w-full'
          name='pasword_confirmation'
          type='pssword'
          placeholder='Confirmed password'
        />

        <button className='border p-2 mt-4 w-full rounded-xl bg-primary m-auto' type='submit'>
          Simpan
        </button>
      </form>
      <p className='text-center text-slate-400'>atau</p>
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
        sudah punya akun ?{' '}
        <Link className='text-blue-600' href='login'>
          Login
        </Link>
      </p>
    </>
  )
}
Register.layout = (page) => <AuthForm children={page} />

export default Register
