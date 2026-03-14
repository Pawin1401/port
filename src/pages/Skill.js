import React from 'react';
import { SiFlutter, SiReact, SiJavascript, SiDart, SiPython, SiArduino, SiCplusplus } from 'react-icons/si';
import { GiCircuitry } from 'react-icons/gi';

const Skill = () => {
  // ข้อมูลทักษะ Software
  const softwareSkills = [
    { name: 'Flutter', level: 75, icon: <SiFlutter color="#02569B" />, color: "#02569B" },
    { name: 'React', level: 70, icon: <SiReact color="#61DAFB" />, color: "#61DAFB" },
    { name: 'JavaScript', level: 80, icon: <SiJavascript color="#F7DF1E" />, color: "#F7DF1E" },
    { name: 'Dart', level: 70, icon: <SiDart color="#0175C2" />, color: "#0175C2" },
    { name: 'Python', level: 70, icon: <SiPython color="#3776AB" />, color: "#3776AB" },
  ];

  // ข้อมูลทักษะ Hardware จากพื้นฐาน RTC และ KMUTNB
  const hardwareSkills = [
    { name: 'Embedded Systems (C++)', level: 70, icon: <SiCplusplus color="#00599C" />, color: "#00599C" },
    { name: 'Arduino / ESP32', level: 80, icon: <SiArduino color="#00979D" />, color: "#00979D" },
    { name: 'PCB Design & Circuits', level: 70, icon: <GiCircuitry color="#FFD700" />, color: "#FFD700" },
    { name: 'Image Processing', level: 70, icon: <SiPython color="#3776AB" />, color: "#3776AB" },
  ];

  const SkillCard = ({ skill }) => (
    <div 
      style={styles.card} 
      className="skill-card"
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = skill.color;
        e.currentTarget.style.boxShadow = `0 8px 24px ${skill.color}15`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = '#222';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={styles.cardHeader}>
        <div style={{...styles.iconWrapper, backgroundColor: `${skill.color}10`}}>
          {skill.icon}
        </div>
        <h3 style={styles.skillName}>{skill.name}</h3>
      </div>
      <div style={styles.progressLabel}>
        <span style={styles.proficiency}>Proficiency</span>
        <span style={styles.levelPercent}>{skill.level}%</span>
      </div>
      <div style={styles.progressBg}>
        <div style={{ 
          ...styles.progressFill, 
          width: `${skill.level}%`,
          background: `linear-gradient(90deg, ${skill.color}aa 0%, ${skill.color} 100%)`
        }}></div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* เอฟเฟกต์แสงตกแต่ง */}
      <div style={styles.bgGlow}></div>

      <header style={styles.header}>
        <span style={styles.preTitle}>SPECIALIZED EXPERTISE</span>
        <h2 style={styles.mainTitle}>TECHNICAL SKILLS</h2>
        <p style={styles.headerDesc}>
          การผสมผสานทักษะจากสาย <strong>Computer Hardware</strong> สู่ <strong>Electronics Technology</strong> อย่างครบวงจร
        </p>
      </header>
      
      <section style={styles.section}>
        <h3 style={styles.subTitle}>Software Development</h3>
        <div style={styles.grid}>
          {softwareSkills.map((s, i) => <SkillCard key={i} skill={s} />)}
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={{ ...styles.subTitle, marginTop: '80px' }}>Hardware & Electronics</h3>
        <div style={styles.grid}>
          {hardwareSkills.map((s, i) => <SkillCard key={i} skill={s} />)}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '120px 20px',
    backgroundColor: '#050505',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden'
  },
  bgGlow: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
    zIndex: 0
  },
  header: { textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 },
  preTitle: { 
    letterSpacing: '5px', 
    color: '#3b82f6', 
    fontSize: '0.75rem', 
    fontWeight: '800',
    display: 'block',
    marginBottom: '15px'
  },
  mainTitle: {
    fontSize: '3.5rem',
    color: '#fff',
    fontWeight: '900',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  headerDesc: { color: '#888', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' },
  section: { position: 'relative', zIndex: 1 },
  subTitle: {
    fontSize: '1.25rem',
    color: '#fff',
    marginBottom: '40px',
    maxWidth: '1000px',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: 'linear-gradient(145deg, #111, #0a0a0a)',
    padding: '30px',
    borderRadius: '24px',
    border: '1px solid #222',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    textAlign: 'left',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '25px',
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem'
  },
  skillName: {
    fontSize: '1.2rem',
    margin: 0,
    color: '#fff',
    fontWeight: '600'
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    alignItems: 'center'
  },
  proficiency: { color: '#555', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '1px' },
  levelPercent: { fontSize: '1rem', color: '#fff', fontWeight: '800' },
  progressBg: {
    height: '6px',
    background: '#1a1a1a',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '10px',
    transition: 'width 1.5s cubic-bezier(0.65, 0, 0.35, 1)',
  }
};

export default Skill;