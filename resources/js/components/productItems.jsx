import { useEffect, useRef, useState } from 'react'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { SiTruenas } from 'react-icons/si'
export default function productItems() {
  const product = useRef(null)
  const [showRate, setShowRate] = useState(false)

  useEffect(() => {
    const handleHover = () => {
      setShowRate(true)
    }
    const handleHoverout = () => {
      setShowRate(false)
    }

    if (product.current) {
      product.current.addEventListener('mouseover', handleHover)
      product.current.addEventListener('mouseout', handleHoverout)
    }

    return () => {
      if (product.current) {
        removeEventListener('mouseover', handleHover)
        removeEventListener('mouseout', handleHoverout)
      }
    }
  }, [])

  const Rate = () => {
    return (
      <div
        className={`absolute p-2 bg-green-500 start-0 top-0 flex items-center gap-1 ${showRate ? `animate-slide-down` : `-translate-y-full`} rounded-br-md`}
      >
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    )
  }

  return (
    <div
      ref={product}
      className='relative bg-white p-4 rounded-lg shadow-md text-xs md:text-sm overflow-hidden'
    >
      <Rate />
      <img
        src='https://via.placeholder.com/300'
        alt='Produk 1'
        className='w-full h-20 md:h-28 object-cover rounded'
      />
      <h4 className='font-bold mt-2'>Ikan Segar</h4>
      <div className='text-gray-600  flex items-center gap-2'>
        <FaMapMarkerAlt />
        <p className='text-[10px] md:text-sm lh-'>Rante Limbong, Enrekang</p>
      </div>
      <div className='flex justify-between items-end mt-2'>
        <p className='text-gray-600'>Rp.100.000 /Kg</p>
      </div>
    </div>
  )
}
