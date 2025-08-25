import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/home';
import Policies from './pages/Policies';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL path on component mount
    const path = window.location.pathname;
    if (path === '/policies') {
      setCurrentPage('policies');
    }
  }, []);

  // Listen for popstate events (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path === '/policies' ? 'policies' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate programmatically
  const navigateTo = (page) => {
    const path = page === 'policies' ? '/policies' : '/';
    window.history.pushState({}, '', path);
    setCurrentPage(page);
  };

  // Make navigation function available globally
  window.navigateTo = navigateTo;

  return (
    <div className="App">
      {currentPage === 'home' && <Home />}
      {currentPage === 'policies' && <Policies />}
    </div>
  );
}

export default App;

