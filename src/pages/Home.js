import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css'; 

const Home = () => {
  const scrollingItems = [
    { title: "EMBEDDED SYSTEMS", desc: "ออกแบบและพัฒนาซอฟต์แวร์ควบคุมไมโครคอนโทรลเลอร์" },
    { title: "IOT SOLUTIONS", desc: "เชื่อมต่ออุปกรณ์ Hardware เข้ากับระบบ Cloud และ Application" },
    { title: "CIRCUIT DESIGN", desc: "ออกแบบและวิเคราะห์วงจรอิเล็กทรอนิกส์พื้นฐาน" },
    { title: "COMPUTER ARCHITECTURE", desc: "เข้าใจโครงสร้างและการทำงานของระบบคอมพิวเตอร์" },
    { title: "PCB DESIGN", desc: "ออกแบบแผ่นวงจรพิมพ์สำหรับการใช้งานเฉพาะทาง" },
  ];

  const doubledItems = [...scrollingItems, ...scrollingItems, ...scrollingItems];

  return (
    <div style={styles.container}>
      {/* เอฟเฟกต์แสงฟุ้งด้านหลังเพิ่มมิติ */}
      <div style={styles.backgroundGlow}></div>
      <div style={styles.backgroundGlowSecondary}></div>

      <div style={styles.heroSection}>
        <div style={styles.contentBox}>
          <span style={styles.preTitle}>WELCOME TO MY DIGITAL SPACE</span>
          
          <h1 style={styles.title}>
            Hello, I'm <br/>
            <span style={styles.highlightText}>
              <Typewriter
                options={{
                  strings: ["Pawin Saetan", "Computer Tech Student", "Electronics Dev"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </h1>

          <p style={styles.subtitle}>
            นักศึกษา <span style={styles.accentText}>เทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์</span> @KMUTNB<br/>
            <span style={styles.description}>"ออกแบบวงจร พัฒนาสมองกล เชื่อมโยง Software สู่โลกความเป็นจริง"</span>
          </p>

          <div style={styles.buttonGroup}>
             <button style={styles.primaryBtn}>Explore Projects</button>
             <button style={styles.secondaryBtn}>Contact Me</button>
          </div>
        </div>

        {/* --- Marquee Section --- */}
        <div className="marquee-container" style={styles.marqueeWrapper}>
          <div className="marquee-content">
            {doubledItems.map((item, index) => (
              <div key={index} style={styles.card}>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: "'Inter', sans-serif"
  },
  backgroundGlow: {
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '50%',
    height: '60%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
    zIndex: 0
  },
  backgroundGlowSecondary: {
    position: 'absolute',
    bottom: '-10%',
    left: '-5%',
    width: '50%',
    height: '60%',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
    zIndex: 0
  },
  heroSection: {
    textAlign: 'center',
    width: '100%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  contentBox: {
    maxWidth: '800px',
    padding: '0 20px',
    marginBottom: '50px'
  },
  preTitle: { 
    letterSpacing: '5px', 
    color: '#3b82f6', 
    fontSize: '0.75rem', 
    fontWeight: '700',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px'
  },
  title: { 
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
    margin: '10px 0', 
    lineHeight: '1.1',
    fontWeight: '900',
    letterSpacing: '-1px'
  },
  highlightText: { 
    color: '#3b82f6',
    display: 'inline-block',
    minHeight: '1.2em'
  },
  subtitle: { 
    color: '#aaa', 
    lineHeight: '1.8', 
    fontSize: '1.15rem',
    fontWeight: '300',
    marginTop: '25px'
  },
  accentText: { color: '#fff', fontWeight: '600' },
  description: { display: 'block', marginTop: '10px', fontStyle: 'italic', color: '#666' },
  buttonGroup: { display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '40px' },
  primaryBtn: { 
    padding: '12px 28px', 
    backgroundColor: '#3b82f6', 
    border: 'none', 
    borderRadius: '50px', 
    color: 'white', 
    fontWeight: '700', 
    cursor: 'pointer',
    transition: '0.3s',
    fontSize: '0.95rem'
  },
  secondaryBtn: { 
    padding: '12px 28px', 
    backgroundColor: 'transparent', 
    border: '1px solid #333', 
    borderRadius: '50px', 
    color: '#fff', 
    cursor: 'pointer',
    transition: '0.3s',
    fontSize: '0.95rem'
  },
  marqueeWrapper: {
    width: '100vw',
    padding: '20px 0'
  },
  card: {
    minWidth: '300px',
    background: 'rgba(20, 20, 20, 0.8)',
    padding: '30px',
    borderRadius: '20px',
    border: '1px solid #222',
    textAlign: 'left',
    backdropFilter: 'blur(10px)',
    margin: '0 10px'
  },
  cardTitle: { color: '#3b82f6', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '800', letterSpacing: '1px' },
  cardDesc: { color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6', fontWeight: '300' }
};

export default Home;