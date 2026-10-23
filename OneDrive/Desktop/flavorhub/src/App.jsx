import { CartProvider } from './context/CartContext'
import Layout from './Layout/Layout'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import ReservationSection from './components/ReservationSection'
import GallerySection from './components/GallerySection'

function App() {
  return (
    <CartProvider>
      <Layout>
        <Hero />
        <Features />
        <MenuSection />
        <AboutSection />
        <ReservationSection />
        <GallerySection />
      </Layout>
    </CartProvider>
  )
}

export default App
