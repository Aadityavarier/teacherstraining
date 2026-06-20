import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import WhoIsThisFor from './components/WhoIsThisFor'
import ECCEdCourse from './components/ECCEdCourse'
import WhyChoose from './components/WhyChoose'
import Trainers from './components/Trainers'
import SuccessStories from './components/SuccessStories'
import Gallery from './components/Gallery'
import ChangeMaker from './components/ChangeMaker'
import Branches from './components/Branches'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <WhoIsThisFor />
        <ECCEdCourse />
        <WhyChoose />
        <Trainers />
        <SuccessStories />
        <Gallery />
        <ChangeMaker />
        <Branches />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
