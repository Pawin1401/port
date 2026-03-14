import React from 'react';

const Transcript = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Transcript & Education</h2>
      <p>แสดงรายละเอียดเกรดเฉลี่ย หรือวิชาที่เกี่ยวข้องที่นี่</p>
      {/* ถ้ามีรูปภาพ ให้ใส่ <img src="link-to-your-image.jpg" alt="Transcript" /> */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        [ใส่รูปภาพใบ Transcript ของคุณที่นี่]
      </div>
    </div>
  );
};

export default Transcript;