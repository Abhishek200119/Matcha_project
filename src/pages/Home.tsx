import MainLayout from '../layouts/MainLayout'
import Hero from '../home/Hero'
import Benefits from '../home/Benefits'
import FeaturedProducts from '../home/FeaturedProducts'
import Testimonials from '../home/Testimonials'
import MatchaRitual from '../home/MatchaRitual'
import Newsletter from '../home/Newsletter'
import InstagramGrid from '../home/InstagramGrid'

function Home() {
  return (
    <MainLayout>

      <Hero />
       <Benefits />
       <FeaturedProducts />
       <Testimonials />
       <MatchaRitual />
       <Newsletter />
       <InstagramGrid />

    </MainLayout>
  )
}

export default Home