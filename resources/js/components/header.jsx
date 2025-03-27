import { FaSearch } from 'react-icons/fa'
import Navbar from './navbar'
export default function header() {
  return (
    <header className='bg-white  p-4 shadow-md sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-md text-green-800 md:text-2xl font-bold'>
          Sulawesi Fresh <span className=' text-sm text-black block text-center'>FoodStufFs</span>
        </h1>
        <div className='border rounded-lg flex border-primary items-center px-3 gap-2 w-2/4'>
          <FaSearch className='text-black text-md' />
          <input type='text' className='border-none p-1 focus:outline-none text-slate-600' />
        </div>
        <Navbar />
      </div>
    </header>
  )
}
