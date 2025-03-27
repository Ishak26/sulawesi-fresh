import { FaFish, FaGripHorizontal } from 'react-icons/fa'
import { FaBoxesStacked } from 'react-icons/fa6'
import { GiCabbage } from 'react-icons/gi'

export default function CategoryBar() {
  return (
    <div className='m-auto flex justify-center'>
      <div className='flex flex-col justify-center items-center border border-primary w-14 p-2 rounded-lg m-2 hover:bg-primary'>
        <FaGripHorizontal className='text-xl' />
        <span className='text-xs'>Semua</span>
      </div>
      <div className='flex flex-col justify-center items-center border border-primary w-14 p-2 rounded-lg m-2 hover:bg-primary'>
        <FaFish className='text-xl' />
        <span className='text-xs'>SeaFood</span>
      </div>
      <div className='flex flex-col justify-center items-center border border-primary w-14 p-2 rounded-lg m-2 hover:bg-primary'>
        <GiCabbage className='text-xl' />
        <span className='text-xs'>Sayuran</span>
      </div>
      <div className='flex flex-col justify-center items-center border border-primary w-14 p-2 rounded-lg m-2 hover:bg-primary'>
        <FaBoxesStacked className='text-xl' />
        <span className='text-xs text-center'>Pre-Order</span>
      </div>
    </div>
  )
}
