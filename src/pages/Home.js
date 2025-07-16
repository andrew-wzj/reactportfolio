import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        color: '#333', 
        marginBottom: '20px',
        fontSize: '2.5em'
      }}>
        Welcome to My Portfolio
      </h1>
      <p style={{ 
        fontSize: '1.2em', 
        color: '#666', 
        marginBottom: '30px',
        lineHeight: '1.6'
      }}>
        I'm a passionate software developer with experience in full-stack web development.
        Check out my resume to learn more about my background and skills.
      </p>
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '30px'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '15px' }}>Featured Sections</h2>
        <p style={{ color: '#6c757d' }}>
          Navigate to the <strong>Resume</strong> tab to see my detailed professional background,
          including experience, education, skills, and projects.
        </p>
      </div>
    </div>
  );
};

export default Home;