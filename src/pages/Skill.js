import React from 'react';

const Skill = () => {
  const skills = [
    { name: 'Flutter', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Dart', level: 'Intermediate' },
    { name: 'Image Processing', level: 'Basic' }
  ];

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2 style={{ color: '#61dafb', marginBottom: '30px' }}>Technical Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {skills.map((s, i) => (
          <div key={i} style={{ background: '#252525', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fff' }}>{s.name}</h3>
            <p style={{ color: '#888' }}>{s.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;