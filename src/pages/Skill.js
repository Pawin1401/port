import React from 'react';
import { SiFlutter, SiReact, SiJavascript, SiDart, SiPython, SiArduino, SiCplusplus } from 'react-icons/si';
import { GiCircuitry } from 'react-icons/gi';

const Skill = () => {
  const softwareSkills = [
    { name: 'Flutter', level: 75, icon: <SiFlutter color="#02569B" /> },
    { name: 'React', level: 70, icon: <SiReact color="#61DAFB" /> },
    { name: 'JavaScript', level: 80, icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'Dart', level: 70, icon: <SiDart color="#0175C2" /> },
    { name: 'Python', level: 70, icon: <SiPython color="#3776AB" /> },
  ];

  const hardwareSkills = [
    { name: 'Embedded Systems (C++)', level: 70, icon: <SiCplusplus color="#00599C" /> },
    { name: 'Arduino / ESP32', level: 80, icon: <SiArduino color="#00979D" /> },
    { name: 'PCB Design & Circuits', level: 70, icon: <GiCircuitry color="#FFD700" /> },
    { name: 'Image Processing', level: 70, icon: <SiPython color="#3776AB" /> },
  ];

  const SkillCard = ({ skill }) => (
    <div style={styles.card} className="skill-card">
      <div style={styles.cardHeader}>
        <span style={styles.icon}>{skill.icon}</span>
        <h3 style={styles.skillName}>{skill.name}</h3>
      </div>
      <div style={styles.progressBg}>
        <div style={{ ...styles.progressFill, width: `${skill.level}%` }}></div>
      </div>
      <span style={styles.levelPercent}>{skill.level}%</span>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.mainTitle}>TECHNICAL SKILLS</h2>
      
      <h3 style={styles.subTitle}>Software Development</h3>
      <div style={styles.grid}>
        {softwareSkills.map((s, i) => <SkillCard key={i} skill={s} />)}
      </div>

      <h3 style={{ ...styles.subTitle, marginTop: '60px' }}>Hardware & Electronics</h3>
      <div style={styles.grid}>
        {hardwareSkills.map((s, i) => <SkillCard key={i} skill={s} />)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '80px 20px',
    backgroundColor: '#0a0a0a', // สีเทาเข้มเข้าธีมหน้า Home/About
    minHeight: '100vh',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
  },
  mainTitle: {
    fontSize: '2.5rem',
    color: '#3b82f6',
    textAlign: 'center',
    fontWeight: '800',
    marginBottom: '50px',
    letterSpacing: '2px',
  },
  subTitle: {
    fontSize: '1.5rem',
    color: '#fff',
    borderLeft: '4px solid #3b82f6',
    paddingLeft: '15px',
    marginBottom: '30px',
    maxWidth: '1000px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: '#141414',
    padding: '25px',
    borderRadius: '16px',
    border: '1px solid #222',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    cursor: 'default',
    textAlign: 'left',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '1.8rem',
    display: 'flex',
    alignItems: 'center',
  },
  skillName: {
    fontSize: '1.1rem',
    margin: 0,
    color: '#fff',
  },
  progressBg: {
    height: '8px',
    background: '#333',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #3b82f6 0%, #61dafb 100%)',
    borderRadius: '10px',
    transition: 'width 1s ease-in-out',
  },
  levelPercent: {
    fontSize: '0.85rem',
    color: '#888',
    display: 'block',
    textAlign: 'right',
  }
};

export default Skill;