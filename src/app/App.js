import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/app.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import Home from '../pages/Home';
import About from '../pages/About';
import ProjectPage from '../pages/ProjectPage';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <ScrollToTop />
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
