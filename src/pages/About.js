import React from 'react';
import ProfilePic from '../pic/2.jpg';
// นำเข้า Icons ที่เกี่ยวข้อง
import { 
    FaGraduationCap, 
    FaBriefcase, 
    FaLightbulb, 
    FaBullseye 
} from 'react-icons/fa';

const About = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>ABOUT ME</h2>

            {/* --- Profile Header --- */}
            <div style={styles.profileSection}>
                <div style={styles.imageContainer}>
                    <img
                        src={ProfilePic}
                        alt="Profile"
                        style={styles.profileImg}
                    />
                </div>

                <div style={styles.profileInfo}>
                    <h1 style={styles.nameLabel}>Pawin Saetan</h1>
                    <h3 style={styles.nicknameLabel}>Pat</h3>

                    <div style={styles.contactList}>
                        <div style={styles.contactItem}>
                            <span style={styles.icon}>📍</span>
                            <p style={styles.contactText}>
                                280/2 Thanaphat Rungrueang Building,<br />
                                Wongsawang Road, Bang Sue, Bangkok 10800
                            </p>
                        </div>

                        <div style={styles.contactItem}>
                            <span style={styles.icon}>📧</span>
                            <p style={styles.contactText}>Pawin1401@gmail.com</p>
                        </div>

                        <div style={styles.contactItem}>
                            <span style={styles.icon}>📞</span>
                            <p style={styles.contactText}>093-2750170</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Education Section --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}><FaGraduationCap style={styles.titleIcon} /> EDUCATION</h3>
                <div style={{ marginBottom: '25px' }}>
                    <p style={styles.textHighlight}>
                        มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)
                    </p>
                    <p style={styles.textSub}>เทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์ (Electronics Computer Technology)</p>
                    <p style={styles.textDetail}>
                        เน้นการศึกษาด้านระบบสมองกลฝังตัว, สถาปัตยกรรมคอมพิวเตอร์ และการพัฒนาซอฟต์แวร์ระดับประยุกต์
                    </p>
                </div>

                <div>
                    <p style={styles.textHighlight}>วิทยาลัยเทคนิคราชบุรี (RTC)</p>
                    <p style={styles.textSub}>คอมพิวเตอร์ฮาร์ดแวร์ (Computer Hardware)</p>
                    <p style={styles.textDetail}>
                        เชี่ยวชาญการวิเคราะห์และซ่อมบำรุงอุปกรณ์คอมพิวเตอร์ รวมถึงการจัดการระบบโครงสร้างพื้นฐานด้านไอที
                    </p>
                </div>
            </div>

            {/* --- Internship Experience Section --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}><FaBriefcase style={styles.titleIcon} /> INTERNSHIP EXPERIENCE</h3>
                <div style={{ marginBottom: '15px' }}>
                    <p style={styles.textHighlight}>แอดไวซ์ โพธาราม <span style={styles.dateText}>| 27 ก.พ. 2566 - 6 พ.ค. 2566</span></p>
                    <p style={styles.textSub}>IT Support & Hardware Technician Intern</p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>ดำเนินการซ่อมบำรุงและวิเคราะห์ปัญหา Hardware คอมพิวเตอร์ระดับ Component</li>
                        <li style={styles.listItem}>ดูแลและจัดการระบบโครงสร้างพื้นฐานเครือข่าย (Network Infrastructure) ภายในองค์กร</li>
                    </ul>
                </div>
            </div>

            {/* --- Passion Section --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}><FaLightbulb style={styles.titleIcon} /> MY PASSION</h3>
                <p style={styles.textDetail}>
                    ผมหลงใหลในการเชื่อมต่อ <span style={styles.keyword}>Hardware</span> เข้ากับ <span style={styles.keyword}>Software</span> ไปจนถึงการเขียนโปรแกรมบน <span style={styles.keyword}>Cloud</span> เป้าหมายของผมคือการเป็น Full-stack Developer ที่เข้าใจระบบคอมพิวเตอร์อย่างครบวงจร
                </p>
            </div>

            {/* --- Career Goals Section --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}><FaBullseye style={styles.titleIcon} /> CAREER GOALS</h3>
                <p style={styles.textDetail}>
                    มุ่งสู่การเป็น <span style={styles.keyword}>Embedded Software Engineer</span> ที่มีความเชี่ยวชาญในด้านการพัฒนา <span style={styles.keyword}>IoT Ecosystems</span> 
                    โดยใช้ความรู้จากสายอิเล็กทรอนิกส์และคอมพิวเตอร์ในการสร้างนวัตกรรมที่สามารถแก้ปัญหาได้จริงในระดับอุตสาหกรรม 
                    และพัฒนาตนเองสู่บทบาท <span style={styles.keyword}>System Architect</span> ในอนาคต
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '80px 20px',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#0a0a0a',
        minHeight: '100vh',
        color: 'white',
        fontFamily: "'Inter', 'Sarabun', sans-serif",
        lineHeight: '1.6'
    },
    title: {
        fontSize: '2.8rem',
        color: '#3b82f6',
        borderBottom: '2px solid #1e40af',
        paddingBottom: '15px',
        marginBottom: '50px',
        textAlign: 'center',
        fontWeight: '900',
        letterSpacing: '2px',
        textShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
    },
    profileSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '45px',
        marginBottom: '50px',
        background: 'linear-gradient(145deg, #141414, #1a1a1a)',
        padding: '40px',
        borderRadius: '20px',
        border: '1px solid #333',
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    },
    imageContainer: {
        width: '190px',
        height: '190px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #3b82f6',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
    },
    profileImg: { width: '100%', height: '100%', objectFit: 'cover' },
    profileInfo: { textAlign: 'left' },
    nameLabel: { fontSize: '2.2rem', color: '#fff', margin: '0', fontWeight: '800', letterSpacing: '0.5px' },
    nicknameLabel: { fontSize: '1.3rem', color: '#3b82f6', margin: '5px 0 20px 0', fontWeight: '600' },
    contactList: { display: 'flex', flexDirection: 'column', gap: '12px' },
    contactItem: { display: 'flex', alignItems: 'flex-start', gap: '12px' },
    icon: { fontSize: '1.1rem' },
    contactText: { margin: '0', color: '#bbb', fontSize: '0.95rem', fontWeight: '400' },
    section: {
        marginBottom: '35px',
        background: '#111',
        padding: '35px',
        borderRadius: '18px',
        border: '1px solid #222',
        transition: 'transform 0.3s ease'
    },
    subTitle: { 
        color: '#3b82f6', 
        fontSize: '1.4rem', 
        marginBottom: '20px', 
        fontWeight: '800', 
        letterSpacing: '1px',
        borderLeft: '4px solid #3b82f6',
        paddingLeft: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    },
    titleIcon: {
        fontSize: '1.2rem',
        color: '#3b82f6'
    },
    textHighlight: { fontSize: '1.15rem', color: '#fff', fontWeight: '700', marginBottom: '5px' },
    textSub: { fontSize: '1rem', color: '#3b82f6', fontWeight: '500', marginBottom: '8px' },
    textDetail: { fontSize: '1.05rem', color: '#ccc', fontWeight: '300', lineHeight: '1.8' },
    dateText: { fontSize: '0.9rem', color: '#666', fontWeight: '400' },
    keyword: { color: '#60a5fa', fontWeight: '600' },
    list: { paddingLeft: '20px', marginTop: '15px' },
    listItem: { color: '#aaa', marginBottom: '10px', fontSize: '1rem', fontWeight: '300' },
};

export default About;