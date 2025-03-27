import { FaStar } from "react-icons/fa";

export default function Comment() {


  return <>
    <div className="grid lg:grid-cols-3 gap-y-4">
        <div>
          <h3 className="text-1xl font-bold">Ulasan Pengunjung</h3>
          <h1 className='text-3xl font-bold'>63 <span className="text-lg">Comment</span></h1>
        </div>
        <div className='lg:col-span-2  grid grid-cols-3 gap-4 justify-center'>
          <div className="text-center items-center">
            <div className='flex gap-1 items-center justify-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm opacity-50 mt-2" >10</p>
          </div>
          <div className="text-center">
            <div className='flex gap-1 items-center justify-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm opacity-50 mt-2" >10</p>
          </div>
          <div className="text-center">
            <div className='flex gap-1 items-center justify-center'>
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm opacity-50 mt-2" >10</p>
          </div>
          <div className="text-center">
            <div className='flex gap-1 items-center justify-center'>
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm opacity-50 mt-2" >10</p>
          </div>
          <div className="text-center">
            <div className='flex gap-1 items-center justify-center'>
              <FaStar />
            </div>
            <p className="text-sm opacity-50 mt-2" >10</p>
          </div>

        </div>
    </div>

    <div className="lg:grid lg:grid-cols-3 mt-4">
      <div>
        <h1>Filter</h1>
      </div>
      <div className="md:col-span-2 p-2 w-full">
        <p className="font-bold text-lg my-2">Komentar</p>
        <Comments />
        <Comments />
        <Comments />
        <form action="" method="post">
          <input type="text" className="text-sm border rounded-3xl mt-4 py-2 px-4 w-full" placeholder="Tulis komentar.." />
        </form>
      </div>
    </div>
  </>
}

function Comments() {
  return <>
    <div className="flex items-start gap-2 border-t-2 pt-4 mt-4">
      <img className="w-9 h-9 flex-none rounded-full object-cover" src="./image/foto padi.jpg" alt="" />
      <div className="p-2 rounded-lg">
        <h3 className="font-semibold text-md">Suprianto <span className="text-xs font-normal opacity-50"> 1m ago</span></h3>
        <p className="text-sm text-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ex accusamus odio incidunt. Sit molestias quaerat in. Voluptates, illo perferendis?</p>
        <a className="text-sm text-blue-500" href="http://">Balas</a>
        </div>
    </div>
  </>
}