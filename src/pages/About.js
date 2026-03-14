import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Me</h1>
      
      <div style={styles.content}>
        <div style={styles.section}>
          <h3>Who am I?</h3>
          <p>
            สวัสดีครับผมชื่อ **Pawin** เป็นนักพัฒนาที่มีความหลงใหลในการสร้างสรรค์ซอฟต์แวร์ 
            โดยเฉพาะการพัฒนา Mobile Application ด้วย **Flutter** และ Web Application ด้วย **React**
          </p>
        </div>

        <div style={styles.section}>
          <h3>My Interests</h3>
          <p>
            นอกจากเขียนโค้ดแล้ว ผมยังสนใจเรื่อง **Digital Image Processing** (การจัดการภาพแบบ CMYK, Convolution, Fourier Transform) 
            รวมถึงชอบศึกษาเรื่องการปรับแต่งประสิทธิภาพคอมพิวเตอร์ (PC Optimization) อีกด้วยครับ
          </p>
        </div>

        <div style={styles.section}>
          <h3>My Goal</h3>
          <p>
            เป้าหมายของผมคือการสร้างเทคโนโลยีที่ช่วยให้ชีวิตของผู้คนง่ายขึ้น 
            และพัฒนาทักษะด้าน Full-stack Development ให้ดียิ่งขึ้นไปในทุกๆ วัน
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    color: '#333'
  },
  title: {
    borderBottom: '2px solid #61dafb',
    paddingBottom: '10px',
    color: '#20232a'
  },
  content: {
    marginTop: '20px'
  },
  section: {
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px'
  }
};

export default About;