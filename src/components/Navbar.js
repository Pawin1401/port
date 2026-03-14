import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={{ color: '#61dafb' }}>Pawin's Port</h2>
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
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#20232a', alignItems: 'center' },
  links: { display: 'flex', gap: '20px' },
  link: { color: 'white', textDecoration: 'none', fontWeight: 'bold' }
};

export default Navbar;