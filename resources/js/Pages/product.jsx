import ProductItems from '../components/productItems'
function Product() {
  return (
    <section className='mx-3 md:mx-9 m-auto py-12'>
      <h3 className='text-md font-bold text-gray-800'>Produk Unggulan</h3>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-6'>
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
      </div>
    </section>
  )
}

export default Product
