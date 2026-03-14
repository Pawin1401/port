import React from 'react';
import ProfilePic from '../pic/2.jpg';

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
                    <h1 style={styles.nameLabel}>Pawin [ใส่นามสกุลจริง]</h1>
                    <h3 style={styles.nicknameLabel}>(Pawin)</h3>

                    <div style={styles.contactList}>
                        <div style={styles.contactItem}>
                            <span>📍</span>
                            <p style={styles.contactText}>
                                280/2 Thanaphat Rungrueang Building,<br />
                                Wongsawang Road, Bang Sue, Bangkok 10800
                            </p>
                        </div>

                        <div style={styles.contactItem}>
                            <span>📧</span>
                            <p style={styles.contactText}>Pawin1401@gmail.com</p>
                        </div>

                        <div style={styles.contactItem}>
                            <span>📞</span>
                            <p style={styles.contactText}>093-2750170</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Education Section --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}>EDUCATION</h3>

                {/* มหาวิทยาลัยปัจจุบัน */}
                <div style={{ marginBottom: '25px' }}>
                    <p style={styles.text}>
                        <strong>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)</strong><br />
                        เทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์ (Electronics Computer Technology)<br />
                        <em>เน้นการศึกษาด้านระบบสมองกลฝังตัว, สถาปัตยกรรมคอมพิวเตอร์ และการพัฒนาซอฟต์แวร์ระดับประยุกต์</em>
                    </p>
                </div>

                {/* ประวัติจากวิทยาลัยเทคนิค */}
                <div>
                    <p style={styles.text}>
                        <strong>วิทยาลัยเทคนิคราชบุรี (RTC)</strong><br />
                        คอมพิวเตอร์ฮาร์ดแวร์ (Computer Hardware)<br />
                        <em>เชี่ยวชาญการวิเคราะห์และซ่อมบำรุงอุปกรณ์คอมพิวเตอร์ รวมถึงการจัดการระบบโครงสร้างพื้นฐานด้านไอที</em>
                    </p>
                </div>
            </div>

            {/* --- Why Me Section (จุดแข็งลูกผสม Hardware + Software) --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}>WHY ME?</h3>
                <p style={styles.text}>
                    ด้วยพื้นฐานจากสาย **คอมพิวเตอร์ฮาร์ดแวร์ (ปวช./ปวส.)** ผสานกับ **เทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์ (มจพ.)** ทำให้ผมมีความเข้าใจระบบคอมพิวเตอร์อย่างลึกซึ้ง ตั้งแต่เลเยอร์ของแรงดันไฟฟ้าและลายวงจร (Hardware),
                    การควบคุมไมโครคอนโทรลเลอร์ (Embedded Systems), ไปจนถึงการพัฒนาแอปพลิเคชันสมัยใหม่ (Software)
                    ผมจึงสามารถออกแบบระบบที่ทำงานร่วมกันได้อย่างมีประสิทธิภาพสูงสุด
                </p>
            </div>


            {/* --- Why Me Section (จุดแข็งลูกผสม Hardware + Software) --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}>WHY ME?</h3>
                <p style={styles.text}>
                    ด้วยพื้นฐานจากสาย **คอมพิวเตอร์ฮาร์ดแวร์ (ปวช./ปวส.)** ผสานกับ **เทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์ (มจพ.)** ทำให้ผมมีความเข้าใจระบบคอมพิวเตอร์อย่างลึกซึ้ง ตั้งแต่เลเยอร์ของแรงดันไฟฟ้าและลายวงจร (Hardware),
                    การควบคุมไมโครคอนโทรลเลอร์ (Embedded Systems), ไปจนถึงการพัฒนาแอปพลิเคชันสมัยใหม่ (Software)
                    ผมจึงสามารถออกแบบระบบที่ทำงานร่วมกันได้อย่างมีประสิทธิภาพสูงสุด
                </p>
            </div>



            {/* --- Notable Projects Section --- */}
            <div style={styles.section}>
                <h3 style={styles.subTitle}>NOTABLE PROJECTS</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Smart IoT Integration:</strong> พัฒนาระบบควบคุมอุปกรณ์ไฟฟ้าผ่าน Mobile App โดยใช้ Flutter เชื่อมต่อกับ ESP32
                    </li>
                    <li style={styles.listItem}>
                        <strong>Hardware Diagnostics:</strong> มีประสบการณ์วิเคราะห์อาการเสียและซ่อมบำรุงเมนบอร์ดคอมพิวเตอร์ในระดับ Hardware
                    </li>
                    <li style={styles.listItem}>
                        <strong>Embedded System Design:</strong> ออกแบบและเขียนโปรแกรมควบคุมระบบอัตโนมัติด้วยภาษา C/C++ บน Arduino และ STM32
                    </li>
                </ul>
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
        fontFamily: "'Inter', sans-serif"
    },
    title: {
        fontSize: '2.5rem',
        color: '#3b82f6',
        borderBottom: '2px solid #333',
        paddingBottom: '20px',
        marginBottom: '40px',
        textAlign: 'center',
        fontWeight: '800'
    },
    profileSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        marginBottom: '40px',
        background: '#141414',
        padding: '40px',
        borderRadius: '15px',
        border: '1px solid #222',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    imageContainer: {
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #3b82f6',
    },
    profileImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    profileInfo: {
        textAlign: 'left'
    },
    nameLabel: { fontSize: '1.8rem', color: '#fff', margin: '0' },
    nicknameLabel: { fontSize: '1.2rem', color: '#3b82f6', margin: '5px 0 15px 0' },
    contactText: { margin: '5px 0', color: '#aaa', fontSize: '1rem' },
    section: {
        marginBottom: '30px',
        background: '#141414',
        padding: '30px',
        borderRadius: '15px',
        border: '1px solid #222'
    },
    subTitle: { color: '#3b82f6', fontSize: '1.2rem', marginBottom: '15px', fontWeight: 'bold' },
    text: { lineHeight: '1.8', color: '#ccc', fontSize: '1.05rem' },
    list: { paddingLeft: '20px', marginTop: '10px' },
    listItem: { color: '#ccc', marginBottom: '12px', lineHeight: '1.6' },
    skillGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '15px' },
    skillCategory: { background: '#1a1a1a', padding: '20px', borderRadius: '10px', border: '1px solid #333' },
    skillHeader: { color: '#3b82f6', marginBottom: '10px', fontSize: '1rem', fontWeight: 'bold' },
    skillList: { color: '#bbb', fontSize: '0.9rem', lineHeight: '1.6' },
    actionContainer: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', marginBottom: '50px' },
    downloadBtn: {
        padding: '15px 30px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: '0.3s'
    },
    githubBtn: {
        padding: '15px 30px',
        backgroundColor: 'transparent',
        color: '#3b82f6',
        border: '1px solid #3b82f6',
        borderRadius: '50px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: '0.3s'
    }
};

export default About;