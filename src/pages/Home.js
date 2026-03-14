import React from 'react';
import Typewriter from 'typewriter-effect';
import { SiFlutter, SiReact, SiJavascript, SiDart, SiPython } from 'react-icons/si';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>
          <Typewriter
            options={{
              strings: [
                'สวัสดีครับ ผมชื่อ Pawin',
                'ยินดีต้อนรับสู่ Portfolio ของผม',
                'I am a Developer'
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        
        <p style={styles.subtitle}>
          นักพัฒนาที่มีความสนใจใน <b>Flutter</b>, <b>React</b> และ <b>Image Processing</b>
        </p>

        {/* ส่วนโชว์ Icons เทคโนโลยี */}
        <div style={styles.iconGroup}>
          <div title="Flutter"><SiFlutter color="#02569B" size={40} /></div>
          <div title="React"><SiReact color="#61DAFB" size={40} /></div>
          <div title="JavaScript"><SiJavascript color="#F7DF1E" size={40} style={{backgroundColor: 'black'}} /></div>
          <div title="Dart"><SiDart color="#0175C2" size={40} /></div>
          <div title="Image Processing"><SiPython color="#3776AB" size={40} /></div>
        </div>

        <button 
          onClick={() => window.location.href='/about'} 
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = '#40b3d6'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#61dafb'}
        >
          ทำความรู้จักกันเพิ่ม
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heroSection: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#20232a',
    marginBottom: '20px',
    height: '80px', // จองพื้นที่ไว้กันตัวหนังสือขยับขึ้นลง
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
  },
  iconGroup: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '1rem',
    backgroundColor: '#61dafb',
    color: '#20232a',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  }
};

export default Home;