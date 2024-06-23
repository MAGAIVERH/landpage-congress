import Navbar from './components/Navbar';
import HeroSection from './components/Hero-Section';
import AboutSection from './components/About-Section';
import SpeakersSection from './components/Speakers-Section';
import ScheduleSection from './components/Schedule-Section';
import Footer from './components/Footer';
import PeopleSection from './components/PeopleSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/Contact-Section';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <SpeakersSection />
        <AboutSection />
        <ScheduleSection />
        <PeopleSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
