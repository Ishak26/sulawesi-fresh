export default function AuthForm({ children }) {
  return (
    <>
      <div className='bg-primary w-full h-screen flex items-center justify-center'>
        <div className='md:grid grid-cols-2 w-3/4 rounded-2xl bg-gray-100 justify-center'>
          <div className='mx-8 hidden md:grid'>
            <h5 className='text-xl font-bold mt-7 text-gray-800'>Welcome!</h5>
            <p className='text-3xl font-thin'>
              Sulawesi Fresh,{' '}
              <span className='block text-lg text-slate-400 '>
                Kesegaran Langsung dari sumbernya
              </span>
            </p>
            <img className='relative bottom-0 w-3/4' src={'./image/registerimage.jpg'} />
          </div>

          <div className='px-4'>{children}</div>
        </div>
      </div>
    </>
  )
}
