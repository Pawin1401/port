import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>PORTFOLIO PAWIN</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/skill" style={styles.link}>Skills</Link>
        <Link to="/transcript" style={styles.link}>Transcript</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '20px 50px', 
    background: '#121212', 
    alignItems: 'center', 
    borderBottom: '1px solid #333' 
  },
  logo: { color: '#61dafb', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' },
  links: { display: 'flex', gap: '30px' },
  link: { color: '#bbb', textDecoration: 'none', fontSize: '1rem', transition: '0.3s' }
};

export default Navbar;