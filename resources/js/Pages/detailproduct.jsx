import { useState } from 'react'
import { FaStar, FaMapMarkerAlt, FaEye } from 'react-icons/fa'
import CardBelanja from '../components/CardBelanja'
import Comment from '../components/comment'

export default function DetailProduct() {
  const Information = useState('detail')
  const detail = (
    <>
      <div className='text-sm'>
        <p>
          <span className='opacity-75'>Kondisi :</span> Baru
        </p>
        <p>
          <span className='opacity-75'>Tanggal Panen : </span> 24 Maret 2035
        </p>
        <p>
          <span className='opacity-75'>Etalase :</span> Semua Etalase
        </p>
        <p>
          <span className='opacity-75'>Ketahanan produk :</span> 5 hari{' '}
        </p>
        <p>
          <span className='opacity-75'>stock:</span> 100 kg
        </p>
      </div>
    </>
  )

  const Deskripsi = <></>
  return (
    <>
      <div className='lg:max-w-screen-lg m-auto md:p-4 bg-[#F1F1F1]'>
        <div className='grid md:grid-cols-3'>
          <div className='md:col-span-2 grid md:grid-cols-2'>
            <div className='p-4 md:p-0'>
              <img className='w-full h-96 object-cover' src='./image/foto padi.jpg' alt='' />
              <div className='mt-3 flex items-center gap-3 p-2 rounded-lg border-2 relative'>
                <div className='w-14 h-14 rounded-full bg-slate-600'></div>
                <div className='ms-2'>
                  <h3 className='font-semibold'>Hermato</h3>
                  <button className='border-green-700 text-md border px-2 py-1 rounded-md absolute top-1/2 right-0 -translate-y-1/2 me-4'>
                    {' '}
                    <FaEye className='inline align-middle' /> View
                  </button>
                  <button className='text-sm opacity-50 block'> Terjual+60 rb</button>
                </div>
              </div>
            </div>

            <div className='p-4 ms-4 '>
              <div className='w-full border-black p-4'>
                <h3 className='text-xl font-bold font-kanit tracking-tight mb-4'>
                  Pulu mandoti asli enrekang
                </h3>
                <div className='flex items-center gap-2'>
                  <FaMapMarkerAlt />
                  <p>Enrekang, Sulawesi selatan</p>
                </div>
                <p className='text-sm ms-6'>20 terjual</p>
                <h2 className='font-bold text-lg border-green-800 p-2'>
                  Rp. 500.000 <span>/Kg</span>{' '}
                </h2>
                <div className={`p-2 start-0 top-0 flex items-center gap-1  rounded-br-md`}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='flex gap-4 mt-2'>
                  <p className='font-semibold border-b-2 text-primary scale-115'>Detail</p>
                  <p className='opacity-75'>Deskripsi</p>
                </div>

                <div>{detail}</div>
              </div>
            </div>
          </div>

          <div className='lg:h-screen flex items-center justify-center lg:fixed lg:right-40'>
            <CardBelanja />
          </div>
        </div>
        <div className='grid lg:grid-cols-3 mt-4 p-4'>
          <div className='col-span-2'>
            <Comment/>
          </div>
         </div>
      </div>

    </>
  )
}
