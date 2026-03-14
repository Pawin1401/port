import React, { useState } from 'react';

const Transcript = () => {
  // ข้อมูลรายวิชา (ใช้ข้อมูลชุดเดิมของคุณ)
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

  // State สำหรับเก็บเทอมที่กำลังถูกเลือก
  const [activeTab, setActiveTab] = useState(0);

  // ฟังก์ชันกำหนดสีของเกรด
  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return '#34A853'; // สีเขียว
    if (grade.startsWith('B')) return '#4285F4'; // สีน้ำเงิน
    if (grade.startsWith('C')) return '#FBBC05'; // สีเหลือง
    if (grade.startsWith('D')) return '#FF8C00'; // สีส้ม
    if (grade.startsWith('F') || grade.startsWith('W')) return '#EA4335'; // สีแดง
    return '#fff';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ACADEMIC TRANSCRIPT</h2>
      <p style={styles.subtitle}>บันทึกผลการศึกษาทั้งหมดจากระบบ มจพ. (KMUTNB)</p>

      <div style={styles.contentWrapper}>
        {/* สรุปภาพรวมล่าสุด */}
        <div style={styles.summaryBox}>
          <div style={styles.summaryItem}>
            <span style={styles.summaryLabel}>GPAX สะสม</span>
            <span style={styles.summaryValue}>2.30</span>
          </div>
        </div>

        {/* ปุ่มเลือกเทอม (Tabs) */}
        <div style={styles.tabContainer}>
          {academicHistory.map((term, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                ...styles.tabButton,
                backgroundColor: activeTab === index ? '#3b82f6' : '#141414',
                color: activeTab === index ? '#fff' : '#888',
                border: activeTab === index ? '1px solid #3b82f6' : '1px solid #222',
              }}
            >
              {term.semester}
            </button>
          ))}
        </div>

        {/* แสดงผลเทอมที่เลือก */}
        <div style={styles.termSection}>
          <div style={styles.termHeader}>
            <h3 style={styles.termTitle}>{academicHistory[activeTab].semester}</h3>
            <div style={styles.termGpaBox}>
              <span>Term GPA: <strong style={{color: '#fff'}}>{academicHistory[activeTab].gpa}</strong></span>
              
            </div>
          </div>

          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.th}>Code</th>
                <th style={styles.th}>Course Name</th>
                <th style={styles.th}>Grade</th>
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
                    textShadow: `0 0 10px ${getGradeColor(course.grade)}44`
                  }}>
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
    padding: '80px 20px',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
    textAlign: 'center'
  },
  title: { fontSize: '2.5rem', color: '#3b82f6', fontWeight: '800', marginBottom: '10px' },
  subtitle: { color: '#888', marginBottom: '50px' },
  contentWrapper: { maxWidth: '1000px', margin: '0 auto' },
  summaryBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    background: '#141414',
    padding: '30px',
    borderRadius: '15px',
    marginBottom: '30px',
    border: '1px solid #222'
  },
  summaryLabel: { display: 'block', color: '#555', fontSize: '0.9rem', marginBottom: '5px' },
  summaryValue: { fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' },
  
  // Tab Styles
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '30px'
  },
  tabButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    outline: 'none'
  },

  termSection: {
    background: '#141414',
    borderRadius: '15px',
    padding: '30px',
    border: '1px solid #222',
    textAlign: 'left',
    animation: 'fadeIn 0.5s ease'
  },
  termHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #333',
    paddingBottom: '15px',
    marginBottom: '20px'
  },
  termTitle: { fontSize: '1.2rem', color: '#3b82f6', margin: 0 },
  termGpaBox: { fontSize: '0.85rem', color: '#666' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeader: { textAlign: 'left', color: '#555', fontSize: '0.8rem', textTransform: 'uppercase' },
  th: { padding: '10px 0' },
  tableRow: { borderBottom: '1px solid #1a1a1a' },
  tdCode: { padding: '12px 0', color: '#666', fontSize: '0.85rem', width: '120px' },
  tdName: { padding: '12px 0', color: '#ccc', fontSize: '0.9rem' },
  tdGrade: { padding: '12px 0', textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem' },
};

export default Transcript;