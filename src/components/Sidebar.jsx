import { useColor } from '../context/ColorContext'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'
import { personalInfo, profileImage } from '../data/personalData'
import { Link } from 'react-router-dom'

// styled components
const SidebarWrapper = styled.div`
  width: 260px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  padding: 25px 15px;
  min-height: 100vh;
  box-shadow: 4px 0 30px rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  /* --- RESPONSIV DESIGN FÖR MOBIL (Staplar om till en topp-panel) --- */
  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 15px;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  margin-bottom: 30px;
  background: rgba(102, 126, 234, 0.08);
  border-radius: 16px;

  &:hover {
    background: rgba(102, 126, 234, 0.15);
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    padding: 12px;
  }
`

const ProfileAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #667eea;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProfileDetails = styled.div`
  flex: 1;

  h4 {
    font-size: 14px;
    color: #1a1a2e;
    margin: 0;
  }

  p {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 16px;
  margin: 4px 0;
  border-radius: 12px;
  transition: all 0.3s;
  cursor: pointer;
  color: #666;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    transform: translateX(4px);
  }

  &.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 166px rgba(102, 126, 234, 0.3);
  }

  svg {
    font-size: 18px;
    min-width: 20px;
  }

  @media (max-width: 768px) {
    margin: 2px 0;
    padding: 10px 14px;
    &:hover {
      transform: none;
    }
  }
`

const ThemeSection = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    margin-top: 10px;
    padding-top: 10px;
  }
`

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ThemeOption = styled.button`
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  font-weight: 600;
  font-size: 12px;
  color: white;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }
`

const Sidebar = () => {
  const { changeColor } = useColor()

  // colour options for theme switching
  const themeColours = [
    { label: 'Red', code: '#FF6B6B' },
    { label: 'Green', code: '#51CF66' },
    { label: 'Blue', code: '#4DABF7' },
    { label: 'Purple', code: '#9775FA' },
    { label: 'Pink', code: '#F783AC' },
    { label: 'White', code: '#F8F9FA' },
  ]

  // main navigation items
  const navItems = [
    { icon: faHome, text: 'Dashboard', route: '/admin' },
    { icon: faHeart, text: 'GitAlphaBit', route: '/getalphabit' }
  ]

  return (
    <SidebarWrapper>
      <ProfileCard>
        <ProfileAvatar>
          <img src={profileImage} alt={personalInfo.name} />
        </ProfileAvatar>
        <ProfileDetails>
          <h4>{personalInfo.name}</h4>
          <p>{personalInfo.title}</p>
        </ProfileDetails>
      </ProfileCard>

      {navItems.map((item, idx) => (
        <Link
          key={idx}
          to={item.route}
          style={{ textDecoration: 'none' }}
        >
          <NavItem className={idx === 0 ? 'active' : ''}>
            <FontAwesomeIcon icon={item.icon} />
            {item.text}
          </NavItem>
        </Link>
      ))}

      <ThemeSection>
        <p style={{ fontSize: '12px', color: '#999', marginBottom: '12px', fontWeight: '600' }}>
          🎨 Pick a colour
        </p>
        <ThemeGrid>
          {themeColours.map((colour) => (
            <ThemeOption
              key={colour.label}
              onClick={() => changeColor(colour.code)}
              style={{
                background: colour.code,
                color: ['White', 'Pink'].includes(colour.label) ? '#333' : 'white',
                borderColor: colour.code === '#F8F9FA' ? '#ddd' : 'transparent'
              }}
            >
              {colour.label}
            </ThemeOption>
          ))}
        </ThemeGrid>
      </ThemeSection>
    </SidebarWrapper>
  )
}

export default Sidebar
