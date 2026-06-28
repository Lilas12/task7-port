import { useColor } from '../context/ColorContext'
import Navbar from './Navbar'
import { personalInfo, education } from '../data/personalData'

const UserLayout = () => {
  const { bgColor } = useColor()

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: bgColor,
      transition: 'all 0.5s ease'
    }}>
      <Navbar /> 
      
      <div style={{ 
        padding: '30px', 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h1 style={{ fontSize: '28px', color: '#1a1a2e', marginBottom: '20px' }}>
            👤 User Profile
          </h1>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#1a1a2e' }}>About Me</h3>
            <p style={{ color: '#666', lineHeight: 1.6, marginTop: '8px' }}>
              {personalInfo.bio}
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#1a1a2e' }}>🎓 Education</h3>
            {education.map((edu, index) => (
              <div key={index} style={{ marginTop: '8px' }}>
                <h4 style={{ fontSize: '16px', color: '#1a1a2e' }}>{edu.degree}</h4>
                <p style={{ color: '#667eea' }}>{edu.institution}</p>
                <p style={{ color: '#999', fontSize: '14px' }}>{edu.year}</p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>{edu.description}</p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            paddingTop: '20px',
            borderTop: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div>
              <p style={{ color: '#888', fontSize: '13px' }}>📧 Email</p>
              <p style={{ color: '#1a1a2e' }}>{personalInfo.email}</p>
            </div>
            <div>
              <p style={{ color: '#888', fontSize: '13px' }}>📱 Phone</p>
              <p style={{ color: '#1a1a2e' }}>{personalInfo.phone}</p>
            </div>
            <div>
              <p style={{ color: '#888', fontSize: '13px' }}>📍 Location</p>
              <p style={{ color: '#1a1a2e' }}>{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayout