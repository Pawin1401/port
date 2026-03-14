import React from 'react';

const Skill = () => {
  const skills = ['React', 'JavaScript', 'Flutter', 'Dart', 'Image Processing (OpenCV)'];
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Skills</h2>
      <ul>
        {skills.map((s, index) => <li key={index}>{s}</li>)}
      </ul>
    </div>
  );
};

export default Skill;