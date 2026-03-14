import React from 'react';
// ใช้ชุด Font Awesome (fa) ทั้งหมดเพื่อความเสถียร
import { 
  FaGithub, 
  // ลบ FaLinkedin ออกจากบรรทัดนี้หากไม่ได้ใช้ใน Code ด้านล่าง
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaFacebook 
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email / Google',
      value: 'Pawin1401@gmail.com',
      link: 'https://mail.google.com/mail/u/2/#inbox',
      color: '#EA4335' // สีแดง Google
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      value: '@px_winn', // ใส่ชื่อ IG ของคุณ
      link: 'https://www.instagram.com/px_winn/',
      color: '#E4405F' // สีชมพู IG
    },
    {
      icon: <FaFacebook />,
      label: 'Facebook',
      value: 'Pawin Saetan',
      link: 'https://www.facebook.com/PawinSaetan',
      color: '#1877F2' // สีน้ำเงิน Facebook
    },
    {
      icon: <FaPhoneAlt />,
      label: 'Phone',
      value: '093-2750170',
      color: '#34A853'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/Pawin1401',
      color: '#ffffff'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Bang Sue, Bangkok',
      link: 'https://maps.app.goo.gl/wYLo4VLFBj9gJ8JN6',
      color: '#FBBC05'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>CONTACT INFORMATION</h2>
        <p style={styles.subtitle}>ติดต่อสอบถามข้อมูล หรือดูผลงานเพิ่มเติมได้ทางช่องทางด้านล่างครับ</p>
      </div>

      <div style={styles.grid}>
        {contactInfo.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.card}
            // เพิ่มลูกเล่น Hover ด้วย Inline Style
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = item.color;
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#222';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ ...styles.iconBox, color: item.color, border: `1px solid ${item.color}33` }}>
              {item.icon}
            </div>
            <div style={styles.infoBox}>
              <span style={styles.label}>{item.label}</span>
              <p style={styles.value}>{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div style={styles.footer}>
        <p>© 2026 PAWIN.DEV - Electronics Computer Technology Student</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '100px 20px',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Inter', sans-serif",
  },
  header: { textAlign: 'center', marginBottom: '60px' },
  title: { fontSize: '2.5rem', color: '#3b82f6', fontWeight: '800', marginBottom: '15px', letterSpacing: '2px' },
  subtitle: { color: '#888', fontSize: '1.1rem' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1000px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '22px',
    background: '#141414',
    borderRadius: '16px',
    border: '1px solid #222',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  iconBox: {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    marginRight: '15px',
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  infoBox: { textAlign: 'left' },
  label: { display: 'block', fontSize: '0.75rem', color: '#555', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '3px' },
  value: { fontSize: '0.9rem', color: '#ccc', margin: 0, fontWeight: '500' },
  footer: { marginTop: 'auto', paddingTop: '60px', color: '#444', fontSize: '0.8rem' }
};

export default Contact;