import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header data-easytag="id1-src/components/Header/index.jsx" data-testid="header">
    <nav style={{padding:'20px', background:'#f8f9fa', textAlign:'center'}}>
      <Link to="/" data-testid="nav-home" style={{margin:'0 30px', textDecoration:'none', color:'#333', fontSize:'18px'}}>Главная</Link>
      <Link to="/feedback/" data-testid="nav-feedback" style={{margin:'0 30px', textDecoration:'none', color:'#333', fontSize:'18px'}}>Обратная связь</Link>
    </nav>
  </header>
);