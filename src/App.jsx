import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TechCampPage from './pages/TechCampPage';
import MainPage from './pages/MainPage';
import TechClubPage from './pages/TechClubPage';
import OurPoliciesPage from './pages/OurPolicies';
import FAQpage from './pages/FAQPage';
import AfterSchoolClubPage from './pages/AfterSchoolClubPage';
import BreakfastClubPage from './pages/BreakfastClubPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import ScrollToTop from './hooks/ScrollToTopHook';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<MainPage />} />
        <Route path="/tech-camp" element={<TechCampPage />} />
        <Route path="/tech-club" element={<TechClubPage />} />
        <Route path="/after-school-club" element={<AfterSchoolClubPage />} />
        <Route path="/breakfast-club" element={<BreakfastClubPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-polices" element={<OurPoliciesPage />} />
        <Route path="/faqs" element={<FAQpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
