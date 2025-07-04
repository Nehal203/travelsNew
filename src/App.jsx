import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import StatsSection from './components/StatsSection';
import TourCards from './components/ToursCards';
import TopDeals from './components/TopDeals';
import RelatedTours from './components/RelatedTours';
import GallerySection from './components/GallerySection';
import BlogSection from './components/BlogSection';
import ClientTestimonials from './components/ClientTestimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="service">
        <ServicesSection />
      </div>
      <WhyChooseUs/>
      <StatsSection/>
      <div id="package">
        <TourCards />
      </div>
      <div id="top-deals">
        <TopDeals />
      </div>
      <div id="offer">
        <RelatedTours />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="clienttestmonials">
        <ClientTestimonials />
      </div>

      <div id="shop">
        <Clients />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ScrollToTopButton />
    </div>
  );
}


export default App;

