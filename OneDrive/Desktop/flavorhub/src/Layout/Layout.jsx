import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import CartDrawer from '../components/CartDrawer'
import Toast from '../components/ui/Toast'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-ink text-white">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-5 focus:top-5"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  )
}

export default Layout

