import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css'; 

const Home = () => {
  // เปลี่ยนหัวข้อเป็นด้าน Electronics & Computer Technology
  const scrollingItems = [
    { title: "EMBEDDED SYSTEMS", desc: "ออกแบบและพัฒนาซอฟต์แวร์ควบคุมไมโครคอนโทรลเลอร์" },
    { title: "IOT SOLUTIONS", desc: "เชื่อมต่ออุปกรณ์ Hardware เข้ากับระบบ Cloud และ Application" },
    { title: "CIRCUIT DESIGN", desc: "ออกแบบและวิเคราะห์วงจรอิเล็กทรอนิกส์พื้นฐาน" },
    { title: "COMPUTER ARCHITECTURE", desc: "เข้าใจโครงสร้างและการทำงานของระบบคอมพิวเตอร์" },
    { title: "PCB DESIGN", desc: "ออกแบบแผ่นวงจรพิมพ์สำหรับการใช้งานเฉพาะทาง" },
  ];

  // เบิ้ลรายการเพื่อให้วิ่งวนได้เนียนตา
  const doubledItems = [...scrollingItems, ...scrollingItems, ...scrollingItems];

  return (
    <div style={styles.container}>
      <div style={styles.backgroundGlow}></div>

      <div style={styles.heroSection}>
        <span style={styles.preTitle}>WELCOME TO MY PORTFOLIO</span>
        
        <h1 style={styles.title}>
          Hello, I'm <span style={styles.highlightText}>
            <Typewriter
              options={{
                strings: ["Computer Tech Student", "Electronics Dev"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h1>

        <p style={styles.subtitle}>
        นักศึกษาเทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์ @KMUTNB<br/>
        "ออกแบบวงจร พัฒนาสมองกล เชื่อมโยง Software สู่โลกความเป็นจริง"
        </p>

        {/* --- ส่วนกล่องวนๆ --- */}
        <div className="marquee-container">
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
    position: 'relative'
  },
  backgroundGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
    zIndex: 0
  },
  heroSection: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px',
    zIndex: 1
  },
  preTitle: { letterSpacing: '3px', color: '#555', fontSize: '0.8rem', fontWeight: 'bold' },
  title: { 
    fontSize: '3.5rem', 
    margin: '20px 0', 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '15px',
    fontWeight: '800'
  },
  highlightText: { color: '#3b82f6' },
  subtitle: { 
    color: '#999', 
    lineHeight: '1.8', 
    marginBottom: '40px',
    fontSize: '1.1rem' 
  },
  buttonGroup: { display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '60px' },
  primaryBtn: { 
    padding: '14px 30px', 
    backgroundColor: '#2563eb', 
    border: 'none', 
    borderRadius: '10px', 
    color: 'white', 
    fontWeight: 'bold', 
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
  },
  secondaryBtn: { 
    padding: '14px 30px', 
    backgroundColor: 'rgba(255,255,255,0.05)', 
    border: '1px solid #333', 
    borderRadius: '10px', 
    color: 'white', 
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  card: {
    minWidth: '320px',
    background: '#141414',
    padding: '25px',
    borderRadius: '16px',
    border: '1px solid #222',
    textAlign: 'left',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
  },
  cardTitle: { color: '#3b82f6', fontSize: '0.9rem', marginBottom: '10px', fontWeight: '700' },
  cardDesc: { color: '#777', fontSize: '0.8rem', lineHeight: '1.5' }
};

export default Home;