import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
      <h2 style={{ color: '#61dafb', borderBottom: '2px solid #333', paddingBottom: '10px' }}>About Me</h2>
      <div style={{ marginTop: '30px', background: '#252525', padding: '30px', borderRadius: '15px' }}>
        <p style={{ color: '#ccc', lineHeight: '1.8' }}>
          สวัสดีครับ! ผมชื่อ **Pawin** เป็นนักพัฒนาที่มีความสนใจในเทคโนโลยีใหม่ๆ 
          โดยเฉพาะการพัฒนา App ด้วย Flutter และ Web ด้วย React 
          นอกจากนี้ผมยังมีทักษะในการทำ Digital Image Processing อีกด้วยครับ
        </p>
      </div>
    </div>
  );
};

export default About;