import Navbar from './components/Navbar';
import HeroSection from './components/Hero-Section';
import AboutSection from './components/About-Section';
import SpeakersSection from './components/Speakers-Section';
import ScheduleSection from './components/Schedule-Section';
import RegisterSection from './components/Register-Section';
import Footer from './components/Footer';
import PeopleSection from './components/PeopleSection';

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
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
