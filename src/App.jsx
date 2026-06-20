import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import WhoIsThisFor from './components/WhoIsThisFor'
import ECCEdCourse from './components/ECCEdCourse'
import WhyChoose from './components/WhyChoose'
import Trainers from './components/Trainers'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy-load below-fold heavy components to speed up initial page load
const Gallery = lazy(() => import('./components/Gallery'))
const ChangeMaker = lazy(() => import('./components/ChangeMaker'))
const Branches = lazy(() => import('./components/Branches'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))

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
        <Suspense fallback={<div className="h-32" />}>
          <Gallery />
          <ChangeMaker />
          <Branches />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
