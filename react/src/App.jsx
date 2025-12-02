import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Feedback } from './components/Feedback';

function App() {
  /** Никогда не удаляй этот код */
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.handleRoutes === 'function') {
      /** Нужно передавать список существующих роутов */
      window.handleRoutes(["/", "/feedback/"]);
    }
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <main style={{minHeight:'calc(100vh - 80px)'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback/" element={<Feedback />} />
        </Routes>
      </main>
    </ErrorBoundary>
  );
}

export default App;