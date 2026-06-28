import { useColor } from '../context/ColorContext'
import { companyInfo } from '../data/personalData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faLaptopCode,
  faCode,
  faServer,
  faCloud,
  faDatabase,
  faMicrochip,
  faNetworkWired,
  faGear,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ParticlesNetwork from './ParticlesNetwork'
import confetti from 'canvas-confetti'

const GetAlphaBit = () => {
  // eslint-disable-next-line no-unused-vars
  const { bgColor } = useColor()
  const [isLoading, setIsLoading] = useState(true)
  const [typed, setTyped] = useState('')
  const [loadProgress, setLoadProgress] = useState(0)
  const [celebrate, setCelebrate] = useState(false)
  const fullMsg = 'شكراً من القلب'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setTyped(fullMsg.slice(0, i + 1))
      i++
      if (i === fullMsg.length) {
        clearInterval(timer)
        setCelebrate(true)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (celebrate) {
      const end = Date.now() + 5000
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      const interval = setInterval(() => {
        const left = end - Date.now()
        if (left <= 0) {
          clearInterval(interval)
          return
        }
        const count = 50 * (left / 5000)
        confetti({ ...defaults, particleCount: count, origin: { x: Math.random() * 0.2 + 0.1, y: Math.random() - 0.2 } })
        confetti({ ...defaults, particleCount: count, origin: { x: Math.random() * 0.2 + 0.7, y: Math.random() - 0.2 } })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [celebrate])

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsLoading(false)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(timer)
  }, [])

  const msgLines = companyInfo.message ? companyInfo.message.split('\n') : ['شكراً لكم']

  const palette = {
    deep: '#07284A',
    mid: '#174265',
    dark: '#031627',
    blue: '#12629B',
    light: '#468493',
    white: '#EAF7FF',
    gray: '#93B3D6'
  }

  const icons = [
    { icon: faLaptopCode, size: 45, top: '8%', left: '5%', delay: '0s', duration: '7s' },
    { icon: faCode, size: 35, top: '15%', right: '8%', delay: '1s', duration: '9s' },
    { icon: faServer, size: 40, bottom: '20%', left: '3%', delay: '2s', duration: '8s' },
    { icon: faCloud, size: 50, bottom: '10%', right: '5%', delay: '0.5s', duration: '10s' },
    { icon: faDatabase, size: 35, top: '45%', left: '2%', delay: '1.5s', duration: '7s' },
    { icon: faMicrochip, size: 40, top: '40%', right: '3%', delay: '2.5s', duration: '8s' },
    { icon: faNetworkWired, size: 30, top: '75%', left: '8%', delay: '0.8s', duration: '6s' },
    { icon: faGear, size: 38, top: '60%', right: '6%', delay: '1.8s', duration: '9s' },
    { icon: faHtml5, size: 40, top: '12%', left: '50%', delay: '0.3s', duration: '8s' },
    { icon: faCss3Alt, size: 38, top: '30%', right: '15%', delay: '1.2s', duration: '7.5s' },
    { icon: faJs, size: 42, bottom: '25%', left: '15%', delay: '0.7s', duration: '9s' },
    { icon: faReact, size: 48, bottom: '15%', right: '12%', delay: '1.5s', duration: '8.5s' },
  ]

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${palette.deep} 0%, ${palette.mid} 50%, ${palette.dark} 100%)`,
        color: palette.white,
        fontFamily: "'Cairo', 'Tajawal', 'Almarai', sans-serif",
        position: 'relative',
        overflow: 'hidden'
      }}>
        <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '60px', marginBottom: '20px', color: palette.light }} />
        <h2 style={{ fontSize: '24px', fontWeight: '300', marginBottom: '20px' }}>جاري التحميل...</h2>
        <div style={{
          width: '300px',
          height: '4px',
          background: 'rgba(247, 237, 237, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${loadProgress}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${palette.blue}, ${palette.light})`,
            borderRadius: '10px',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <p style={{ fontSize: '14px', color: palette.gray, marginTop: '10px' }}>{loadProgress}%</p>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: `linear-gradient(135deg, ${palette.deep} 0%, ${palette.mid} 25%, ${palette.dark} 50%, ${palette.blue} 75%, ${palette.light} 100%)`,
      transition: 'all 0.5s ease',
      overflow: 'hidden'
    }}>
      <ParticlesNetwork />

      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-150px',
        width: '400px',
        height: '400px',
        background: `radial-gradient(circle, ${palette.light}33, transparent)`,
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        filter: 'blur(60px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '350px',
        height: '350px',
        background: `radial-gradient(circle, ${palette.blue}22, transparent)`,
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite reverse',
        filter: 'blur(50px)',
        zIndex: 0
      }} />

      {icons.map((item, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            color: palette.white,
            fontSize: `${item.size}px`,
            animation: `floatIcon ${item.duration} ease-in-out ${item.delay} infinite`,
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.08
          }}
        >
          <FontAwesomeIcon icon={item.icon} />
        </div>
      ))}

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '800px',
        padding: '40px 20px',
        textAlign: 'center'
      }}>

        <div style={{
          margin: '0 auto 30px',
          width: '220px',
          height: '220px',
          borderRadius: '30px',
          padding: '8px',
          background: `linear-gradient(135deg, ${palette.white}66, ${palette.light}44)`,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 30px 80px ${palette.deep}66, inset 0 2px 4px ${palette.white}33`,
          animation: 'float 4s ease-in-out infinite',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${palette.white}33`,
          transition: 'transform 0.5s ease, box-shadow 0.5s ease',
          transform: 'perspective(1000px) rotateY(0deg)',
          cursor: 'pointer'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width - 0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5
          e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.02)`
          e.currentTarget.style.boxShadow = `0 40px 100px ${palette.deep}99`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)'
          e.currentTarget.style.boxShadow = `0 30px 80px ${palette.deep}66`
        }}>
          <img
            src="./GetAlphaBit.jpg"
            alt="GetAlphaBit Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '22px',
              transition: 'all 0.5s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.filter = 'brightness(1) contrast(1)'
            }}
          />
        </div>

        <div style={{
          margin: '0 auto 15px',
          fontSize: '40px',
          animation: 'pulse 2s infinite',
          color: palette.light,
          textShadow: `0 4px 30px ${palette.blue}66`
        }}>
          💖
        </div>

        <h1 style={{
          fontSize: '38px',
          fontWeight: '700',
          color: palette.white,
          marginBottom: '5px',
          fontFamily: "'Cairo', 'Tajawal', 'Almarai', sans-serif",
          textShadow: `0 4px 30px ${palette.deep}44`,
          minHeight: '60px'
        }}>
          {typed}
          <span style={{
            display: 'inline-block',
            width: '4px',
            height: '38px',
            background: palette.light,
            marginLeft: '4px',
            animation: 'blink 0.8s step-end infinite',
            verticalAlign: 'middle'
          }} />
        </h1>

        <p style={{
          color: palette.gray,
          fontSize: '18px',
          marginBottom: '35px',
          fontFamily: "'Cairo', 'Tajawal', 'Almarai', sans-serif",
          textShadow: `0 2px 20px ${palette.deep}33`
        }}>
          {companyInfo.name || 'GetAlphaBit'}
        </p>

        <div style={{
          maxWidth: '650px',
          margin: '0 auto'
        }}>
          {msgLines.map((line, idx) => (
            <p key={idx} style={{
              color: palette.white,
              lineHeight: 2.2,
              fontSize: '20px',
              margin: '8px 0',
              fontFamily: "'Cairo', 'Tajawal', 'Almarai', sans-serif",
              fontWeight: '300',
              animation: `slideInRight 0.8s ease-out ${idx * 0.15}s both`,
              letterSpacing: '0.5px',
              textShadow: `0 2px 20px ${palette.deep}44`
            }}>
              {line}
            </p>
          ))}
        </div>

        <Link to="/admin">
          <button style={{
            marginTop: '45px',
            padding: '14px 50px',
            borderRadius: '50px',
            border: `2px solid ${palette.light}44`,
            background: `${palette.white}11`,
            backdropFilter: 'blur(10px)',
            color: palette.white,
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: "'Cairo', 'Tajawal', 'Almarai', sans-serif",
            animation: 'zoomIn 0.6s ease-out 0.8s both',
            boxShadow: `0 4px 30px ${palette.deep}33`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${palette.light}22`
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
            e.currentTarget.style.borderColor = `${palette.light}88`
            e.currentTarget.style.boxShadow = `0 8px 40px ${palette.blue}44`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${palette.white}11`
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.borderColor = `${palette.light}44`
            e.currentTarget.style.boxShadow = `0 4px 30px ${palette.deep}33`
          }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            العودة للرئيسية
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GetAlphaBit
