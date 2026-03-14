import React, { useState } from 'react';

const Transcript = () => {
  const academicHistory = [
    {
      semester: "ภาคเรียนที่ 1/2567",
      gpa: "2.52",
      courses: [
        { code: "030521101", name: "COMPUTER PROGRAMMING", grade: "D" },
        { code: "030521106", name: "ELECTRONICS TECHNOLOGY", grade: "A" },
        { code: "030523205", name: "COMPUTER PROGRAMMING LAB", grade: "D+" },
        { code: "030523206", name: "ELECTRONICS TECHNOLOGY LAB", grade: "A" },
        { code: "030523500", name: "DATABASE & DATA TECHNOLOGY", grade: "B" },
        { code: "030523501", name: "COMP NETW SYS & DATA COMMU", grade: "C" },
        { code: "030523600", name: "DATABASE & DATA TECH LAB", grade: "B" },
        { code: "030523601", name: "COMP NETW SYS & DATA LAB", grade: "C" },
        { code: "030933152", name: "COMMU ENG & REPORT WRITING", grade: "C+" },
        { code: "030943111", name: "DIFFERENTIAL EQUATIONS", grade: "C" },
        { code: "030953103", name: "ENTREPRENEURSHIP", grade: "B" },
      ]
    },
    {
      semester: "ภาคเรียนที่ 2/2567",
      gpa: "1.72",
      courses: [
        { code: "030523107", name: "MICROCONTROLLER SYSTEM", grade: "Fe" },
        { code: "030523118", name: "OBJECT ORIENTED PROGRAMMING", grade: "D+" },
        { code: "030523124", name: "WEB APPLICATION DEVELOPMENT", grade: "F" },
        { code: "030522126", name: "LINUX OPERATING SYS & ADMIN", grade: "C+" },
        { code: "030523207", name: "MICROCONTROLLER SYSTEM LAB", grade: "D" },
        { code: "030523218", name: "OBJECT ORIENTED PROGRAM LAB", grade: "D+" },
        { code: "030523224", name: "WEB APPL DEVELOPMENT LAB", grade: "F" },
        { code: "030523226", name: "LINUX OPG SYS & ADMIN LAB", grade: "C+" },
        { code: "030943112", name: "MATRICES & VECTOR ANALYSIS", grade: "C" },
        { code: "080303701", name: "DESIGN THINKING", grade: "A" },
      ]
    },
    {
      semester: "ภาคเรียนที่ 1/2568",
      gpa: "2.57",
      courses: [
        { code: "030523503", name: "MOBILE APPL DEVELOPMENT", grade: "B+" },
        { code: "030523504", name: "ARTIFICIAL INTELLIGENCE", grade: "C+" },
        { code: "030523505", name: "CYBERSECURITY", grade: "D" },
        { code: "030523603", name: "MOBILE APPL DEVELOPMENT LAB", grade: "B+" },
        { code: "030523604", name: "ARTIFICIAL INTELLIGENCE LAB", grade: "C+" },
        { code: "030523605", name: "CYBERSECURITY LABORATORY", grade: "D" },
        { code: "030523701", name: "CLOUD COMPUTING", grade: "D+" },
        { code: "030523801", name: "CLOUD COMPUTING LABORATORY", grade: "D+" },
        { code: "030923102", name: "SCIENCES IN DAILY LIFE", grade: "A" },
        { code: "030923103", name: "SCI & TECH FOR QUA OF LIFE & SOC", grade: "B" },
        { code: "030933155", name: "ENGL CONVERS FOR DAILY LIFE", grade: "C+" },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return '#34A853';
    if (grade.startsWith('B')) return '#3b82f6';
    if (grade.startsWith('C')) return '#FBBC05';
    if (grade.startsWith('D')) return '#f97316';
    if (grade.startsWith('F') || grade === 'Fe') return '#ef4444';
    return '#888';
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.preTitle}>ACADEMIC RECORDS</span>
        <h2 style={styles.title}>TRANSCRIPT</h2>
        <p style={styles.subtitle}>ระบบแสดงผลการศึกษาอย่างเป็นทางการ @KMUTNB</p>
      </div>

      <div style={styles.contentWrapper}>
        {/* GPAX Summary Card */}
        <div style={styles.summaryCard}>
          <div style={styles.summaryItem}>
            <span style={styles.sumLabel}>CUMULATIVE GPAX</span>
            <span style={styles.sumValue}>2.30</span>
          </div>
          
        </div>

        {/* Tab Navigation */}
        <div style={styles.tabContainer}>
          {academicHistory.map((term, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                ...styles.tabButton,
                backgroundColor: activeTab === index ? '#3b82f6' : 'rgba(255,255,255,0.03)',
                color: activeTab === index ? '#fff' : '#666',
                borderColor: activeTab === index ? '#3b82f6' : '#222',
              }}
            >
              {term.semester}
            </button>
          ))}
        </div>

        {/* Table Content */}
        <div style={styles.termSection}>
          <div style={styles.termHeader}>
            <div style={styles.headerTitleGroup}>
                <h3 style={styles.termTitle}>{academicHistory[activeTab].semester}</h3>
                <span style={styles.termSub}>Term Performance Record</span>
            </div>
            <div style={styles.termGpaBadge}>
              <span style={styles.termGpaLabel}>TERM GPA</span>
              <span style={styles.termGpaValue}>{academicHistory[activeTab].gpa}</span>
            </div>
          </div>

          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.th}>COURSE CODE</th>
                <th style={styles.th}>COURSE NAME</th>
                <th style={{...styles.th, textAlign: 'right'}}>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {academicHistory[activeTab].courses.map((course, cIndex) => (
                <tr key={cIndex} style={styles.tableRow}>
                  <td style={styles.tdCode}>{course.code}</td>
                  <td style={styles.tdName}>{course.name}</td>
                  <td style={{
                    ...styles.tdGrade, 
                    color: getGradeColor(course.grade),
                  }}>
                    <span style={{...styles.gradeIndicator, backgroundColor: getGradeColor(course.grade)}}></span>
                    {course.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '100px 20px',
    backgroundColor: '#050505',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
  },
  header: { textAlign: 'center', marginBottom: '60px' },
  preTitle: { letterSpacing: '5px', color: '#3b82f6', fontSize: '0.75rem', fontWeight: '800', display: 'block', marginBottom: '10px' },
  title: { fontSize: '3rem', color: '#fff', fontWeight: '900', letterSpacing: '-1px', margin: 0 },
  subtitle: { color: '#555', marginTop: '10px', fontSize: '1rem' },
  
  contentWrapper: { maxWidth: '900px', margin: '0 auto' },
  
  summaryCard: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'linear-gradient(145deg, #0f0f0f, #141414)',
    padding: '30px',
    borderRadius: '24px',
    marginBottom: '40px',
    border: '1px solid #222',
  },
  summaryItem: { textAlign: 'center' },
  sumLabel: { fontSize: '0.65rem', color: '#444', fontWeight: '800', letterSpacing: '2px', display: 'block', marginBottom: '8px' },
  sumValue: { fontSize: '2.5rem', fontWeight: '900', color: '#fff' },
  divider: { width: '1px', height: '50px', backgroundColor: '#222' },

  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  },
  tabButton: {
    padding: '12px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '700',
    transition: '0.3s',
    border: '1px solid transparent',
    outline: 'none'
  },

  termSection: {
    background: '#0d0d0d',
    borderRadius: '24px',
    padding: '40px',
    border: '1px solid #1a1a1a',
    textAlign: 'left',
  },
  termHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  termTitle: { fontSize: '1.4rem', color: '#fff', margin: 0, fontWeight: '800' },
  termSub: { fontSize: '0.75rem', color: '#444', textTransform: 'uppercase', letterSpacing: '1px' },
  termGpaBadge: {
    textAlign: 'right',
    background: 'rgba(59, 130, 246, 0.1)',
    padding: '10px 20px',
    borderRadius: '14px',
    border: '1px solid rgba(59, 130, 246, 0.2)'
  },
  termGpaLabel: { fontSize: '0.6rem', color: '#3b82f6', fontWeight: '800', display: 'block' },
  termGpaValue: { fontSize: '1.5rem', fontWeight: '900', color: '#fff' },

  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeader: { textAlign: 'left', borderBottom: '1px solid #222' },
  th: { padding: '15px 0', color: '#444', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '1.5px' },
  tableRow: { borderBottom: '1px solid #141414', transition: '0.2s' },
  tdCode: { padding: '20px 0', color: '#555', fontSize: '0.85rem', fontWeight: '600' },
  tdName: { padding: '20px 0', color: '#ccc', fontSize: '0.95rem', fontWeight: '500' },
  tdGrade: { 
    padding: '20px 0', 
    textAlign: 'right', 
    fontWeight: '800', 
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '10px'
  },
  gradeIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    display: 'inline-block'
  }
};

export default Transcript;