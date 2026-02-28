import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LenisRoot from './components/LenisRoot';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ContactModalProvider, useContactModal } from './context/ContactModalContext';
import ContactFormModal from './components/ContactFormModal';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Destinations = lazy(() => import('./pages/Destinations'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Booking = lazy(() => import('./pages/Booking'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin" />
    </div>
  );
}

function AppContent() {
  const { isOpen, closeContactModal } = useContactModal();
  return (
    <>
      <ScrollToTop />
      <Preloader />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </main>
      <ContactFormModal isOpen={isOpen} onClose={closeContactModal} />
    </>
  );
}

function App() {
  return (
    <LenisRoot>
      <Router>
        <ContactModalProvider>
          <div className="min-h-screen bg-[#0a0a0a]">
            <AppContent />
          </div>
        </ContactModalProvider>
      </Router>
    </LenisRoot>
  );
}

export default App;
