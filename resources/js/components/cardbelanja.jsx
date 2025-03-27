import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'


export default function CardBelanja() {
  return (
    <>
      <div className='border p-6 rounded-lg shadow-sm w-full lg:w-fit m-4'>
        <h3 className='text-lg font-bold mb-4'> Atur Belanjaan Anda</h3>
        <p className='opacity-50 mb-1'>Jumlah</p>
        <div className='flex items-center'>
          <div className='flex border rounded-lg border-primary px-5 py-1 text-lg'>
            <button>
              <FaMinus />
            </button>
            <p className='mx-6'>3</p>
            <button>
              <FaPlus />
            </button>
          </div>
          <p className='opacity-50 ms-2'>
            stock total : <span className='text-black'>3 Kg</span>
          </p>
        </div>

        <button className='align-middle w-full border bg-primary my-2 p-2 rounded-lg mt-4'>
          <FaShoppingCart className='inline align-middle' /> Keranjang
        </button>
        <button className='align-middle w-full border  my-2 p-2 rounded-lg'> Beli</button>
      </div>
    </>
  )
}
