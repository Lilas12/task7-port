import { useColor } from '../context/ColorContext'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  z-index: 100;

  /* Responsiv justering för telefoner */
  @media (max-width: 576px) {
    padding: 15px;
    flex-direction: column;
    gap: 12px;
  }
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  margin-right: 20px;

  /* Centrera loggan på mobilen */
  @media (max-width: 576px) {
    margin-right: 0;
  }
`

const ColorGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: auto;

  /* Centrera knapparna och ta bort margin-left på mobilen */
  @media (max-width: 576px) {
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }
`

const ColorButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3);
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  &:hover {
    transform: scale(1.15);
    border-color: white;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  }

  &:active {
    transform: scale(0.9);
  }

  /* Gör knapparna aningen lättare att klicka på på pekskärmar */
  @media (max-width: 576px) {
    width: 38px;
    height: 38px;
  }
`

const Navbar = () => {
  const { changeColor } = useColor()

  const colorOptions = [
    { value: '#FF6B6B' },
    { value: '#51CF66' },
    { value: '#4DABF7' },
    { value: '#9775FA' },
    { value: '#F8F9FA' },
  ]

  return (
    <NavbarContainer>
      <Brand>🎯 MyApp</Brand>

      <ColorGroup>
        {colorOptions.map((color, index) => (
          <ColorButton
            key={index}
            onClick={() => changeColor(color.value)}
            style={{
              background: color.value,
              border: color.value === '#F8F9FA' ? '2px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </ColorGroup>
    </NavbarContainer>
  )
}

export default Navbar
