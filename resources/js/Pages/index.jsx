import Header from '../components/header'
import Carausel from '../components/carausel'
import CategoryBar from '../components/categorybar'
import Product from './product'

export default function Index({ children }) {
  return (
    <div className='bg-gray-100 font-sans'>
      <Header />
      <Carausel />
      {/* Category */}
      <CategoryBar />

      {/* <!-- Produk --> */}
      <Product />
      {/* <!-- Footer --> */}
      <footer className='bg-gray-800 text-white text-center py-4 mt-6'>
        <p>&copy; 2025 Sulawesi Fresh. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  )
}
