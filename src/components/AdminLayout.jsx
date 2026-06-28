import { useColor } from '../context/ColorContext'
import Sidebar from './Sidebar'
import { personalInfo, projects, skills, achievements } from '../data/personalData'

const AdminLayout = () => {
  const { bgColor } = useColor()

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: bgColor,
      transition: 'all 0.5s ease'
    }}>
      <style>
        {`
          @keyframes borderPulse {
            0% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.03);
            }
            100% {
              opacity: 0.6;
              transform: scale(1);
            }
          }

          @keyframes ripple1 {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.15);
              opacity: 0;
            }
          }

          @keyframes ripple2 {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            100% {
              transform: scale(1.25);
              opacity: 0;
            }
          }

          @keyframes ripple3 {
            0% {
              transform: scale(1);
              opacity: 0.4;
            }
            100% {
              transform: scale(1.35);
              opacity: 0;
            }
          }

          .card-wrap {
            position: relative;
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
            overflow: visible;
            cursor: pointer;
          }

          .card-wrap:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
          }

          .border-line {
            position: absolute;
            inset: -4px;
            border-radius: 20px;
            padding: 4px;
            background: linear-gradient(135deg, #667eea, #764ba2, #667eea, #764ba2);
            background-size: 300% 300%;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            animation: borderPulse 2.5s ease-in-out infinite;
          }

          .wave-1 {
            position: absolute;
            inset: -8px;
            border-radius: 24px;
            border: 3px solid rgba(102, 126, 234, 0.6);
            pointer-events: none;
            animation: ripple1 2.5s ease-out infinite;
          }

          .wave-2 {
            position: absolute;
            inset: -8px;
            border-radius: 24px;
            border: 3px solid rgba(118, 75, 162, 0.4);
            pointer-events: none;
            animation: ripple2 2.5s ease-out 0.8s infinite;
          }

          .wave-3 {
            position: absolute;
            inset: -8px;
            border-radius: 24px;
            border: 3px solid rgba(102, 126, 234, 0.3);
            pointer-events: none;
            animation: ripple3 2.5s ease-out 1.6s infinite;
          }

          .inner-box {
            position: relative;
            z-index: 1;
            background: rgba(255,255,255,0.95);
            border-radius: 14px;
            padding: 16px;
          }

          .big-icon {
            font-size: 32px;
            margin-bottom: 6px;
          }

          .num {
            font-size: 28px;
            color: #1a1a2e;
            margin: 0;
            font-weight: 700;
          }

          .label-text {
            font-size: 13px;
            color: #888;
            margin: 4px 0 0 0;
          }

          @keyframes numPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .num-animated {
            animation: numPulse 2.5s ease-in-out infinite;
            display: inline-block;
          }
        `}
      </style>

      <Sidebar />

      <div style={{
        flex: 1,
        padding: '30px',
        transition: 'all 0.5s ease',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ fontSize: '28px', color: '#1a1a2e', marginBottom: '20px' }}>
          👋 Welcome, {personalInfo.name}
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {achievements.map((item, index) => (
            <div key={index} className="card-wrap">
              <div className="wave-1" />
              <div className="wave-2" />
              <div className="wave-3" />
              <div className="border-line" />

              <div className="inner-box">
                <div className="big-icon">{item.icon}</div>
                <h3 className="num">
                  <span className="num-animated">{item.value}</span>
                </h3>
                <p className="label-text">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.3)',
          marginBottom: '30px'
        }}>
          <h3 style={{ marginBottom: '20px', color: '#1a1a2e' }}>💪 Skills</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {skills.map((skill, index) => (
              <div key={index} style={{
                background: 'rgba(102, 126, 234, 0.08)',
                padding: '12px 16px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '20px' }}>{skill.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', color: '#1a1a2e' }}>{skill.name}</span>
                    <span style={{ fontSize: '12px', color: '#888' }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                    marginTop: '4px'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, #667eea, #764ba2)`,
                      borderRadius: '10px'
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{ marginBottom: '20px', color: '#1a1a2e' }}>🚀 My Projects</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {projects.map((project) => (
              <div key={project.id} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
                border: '1px solid rgba(0,0,0,0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.shadow = '0 8px 30px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.shadow = '0 4px 16px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ fontSize: '16px', color: '#1a1a2e', marginBottom: '6px' }}>
                  {project.title}
                </h4>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{
                      fontSize: '10px',
                      padding: '3px 10px',
                      borderRadius: '10px',
                      background: '#f0f0f0',
                      color: '#666'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', fontSize: '13px', textDecoration: 'none' }}>
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#FF6584', fontSize: '13px', textDecoration: 'none' }}>
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
