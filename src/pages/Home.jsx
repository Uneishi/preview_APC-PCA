import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Donation from '../components/Donation'
import Service from '../components/Service'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div style={{ backgroundColor: '#4b84da' }}>
      <About />
      <Service />
      </div>
      <div className="container my-5"  >
          <Gallery />
      </div>
      <Contact />
      <Donation />
      <Footer />
    </>
  )
}