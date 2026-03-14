import React from 'react';
// ลบ FaLinkedin ออกแล้วเพื่อป้องกัน Build Error ใน Vercel
import { 
  FaGithub, 
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
      link: 'mailto:Pawin1401@gmail.com', // ใช้ mailto: เพื่อให้กดแล้วเปิดแอปเมลได้ทันที
      color: '#EA4335'
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      value: '@px_winn',
      link: 'https://www.instagram.com/px_winn/',
      color: '#E4405F'
    },
    {
      icon: <FaFacebook />,
      label: 'Facebook',
      value: 'Pawin Saetan',
      link: 'https://www.facebook.com/PawinSaetan',
      color: '#1877F2'
    },
    {
      icon: <FaPhoneAlt />,
      label: 'Phone',
      value: '093-2750170',
      link: 'tel:0932750170', // ใช้ tel: เพื่อให้กดโทรออกได้ทันที
      color: '#34A853'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/Pawin1401',
      link: 'https://github.com/Pawin1401',
      color: '#ffffff'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Bang Sue, Bangkok',
      link: 'https://goo.gl/maps/your-actual-link', // แนะนำให้ใส่ลิงก์ Google Maps จริง
      color: '#FBBC05'
    }
  ];

  return (
    <div style={styles.container}>
      {/* เอฟเฟกต์แสงตกแต่งพื้นหลัง */}
      <div style={styles.bgGlow}></div>

      <div style={styles.header}>
        <span style={styles.preTitle}>GET IN TOUCH</span>
        <h2 style={styles.title}>CONNECT WITH ME</h2>
        <p style={styles.subtitle}>
          หากคุณสนใจในงานด้าน <span style={styles.highlight}>Embedded Systems</span> หรือ <span style={styles.highlight}>IoT</span><br/>
          สามารถติดต่อสอบถามข้อมูล หรือดูผลงานเพิ่มเติมได้ทุกช่องทางครับ
        </p>
      </div>

      <div style={styles.grid}>
        {contactInfo.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.card}
            className="contact-card"
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = item.color;
              e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}22`;
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#222';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ ...styles.iconBox, color: item.color, backgroundColor: `${item.color}11` }}>
              {item.icon}
            </div>
            <div style={styles.infoBox}>
              <span style={styles.label}>{item.label}</span>
              <p style={styles.value}>{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      <footer style={styles.footer}>
        <p>© 2026 <span style={styles.footerName}>PAWIN</span></p>
        <p style={styles.footerSub}>Electronics Computer Technology Student @KMUTNB</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '120px 20px',
    backgroundColor: '#050505',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden'
  },
  bgGlow: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
    zIndex: 0
  },
  header: { textAlign: 'center', marginBottom: '80px', zIndex: 1 },
  preTitle: { 
    letterSpacing: '5px', 
    color: '#3b82f6', 
    fontSize: '0.75rem', 
    fontWeight: '700',
    display: 'block',
    marginBottom: '15px'
  },
  title: { 
    fontSize: '3.5rem', 
    color: '#fff', 
    fontWeight: '900', 
    letterSpacing: '-1px',
    marginBottom: '20px'
  },
  subtitle: { 
    color: '#888', 
    fontSize: '1.1rem', 
    lineHeight: '1.8',
    maxWidth: '600px'
  },
  highlight: { color: '#fff', fontWeight: '600' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    width: '100%',
    maxWidth: '1100px',
    zIndex: 1
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    background: 'linear-gradient(145deg, #0f0f0f, #151515)',
    borderRadius: '24px',
    border: '1px solid #222',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  iconBox: {
    width: '55px',
    height: '55px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    marginRight: '20px',
  },
  infoBox: { textAlign: 'left' },
  label: { 
    display: 'block', 
    fontSize: '0.7rem', 
    color: '#555', 
    fontWeight: '800', 
    textTransform: 'uppercase', 
    letterSpacing: '1.5px',
    marginBottom: '6px' 
  },
  value: { 
    fontSize: '1.05rem', 
    color: '#eee', 
    margin: 0, 
    fontWeight: '500',
    letterSpacing: '0.2px'
  },
  footer: { 
    marginTop: 'auto', 
    paddingTop: '100px', 
    color: '#333', 
    fontSize: '0.9rem',
    textAlign: 'center',
    zIndex: 1
  },
  footerName: { color: '#3b82f6', fontWeight: 'bold' },
  footerSub: { marginTop: '5px', fontSize: '0.8rem' }
};

export default Contact;