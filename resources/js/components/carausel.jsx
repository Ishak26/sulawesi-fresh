export default function carausel() {
  return (
    /* <!-- Hero Section --> */
    <section className='text-white text-center py-20 relative mx-4 rounded-lg overflow-hidden'>
      <img
        src='/image/foto padi.jpg'
        className='absolute inset-0 w-full h-full object-cover rounded-lg z-0'
        alt='Padi'
      />

      <div className='absolute inset-0 bg-black bg-opacity-50 rounded-lg z-10'></div>

      <div className='relative z-20'>
        <h2 className='text-2xl md:text-3xl font-bold p-4'>
          Kesegaran Alami dari <span className='text-green-400 block md:inline'>Sulawesi</span>
        </h2>
        <p className='mt-2 text-xs md:text-sm max-w-64 mx-auto'>
          Dapatkan bahan pangan segar langsung dari petani dan nelayan lokal.
        </p>
        <a
          href='#'
          className='mt-4 inline-block text-green-800 bg-white px-6 py-2 rounded-full font-bold transition duration-300'
        >
          Jelajahi Produk
        </a>
      </div>
    </section>
  )
}
