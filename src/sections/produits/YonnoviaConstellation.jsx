import React, { useState, useEffect, useRef } from 'react';

const CONSTELLATION_ITEMS = [
  {
    id: 'bbot',
    title: 'B-Bot',
    subtitle: 'Assistant Business 8-en-1',
    description: 'PME, Auto-entrepreneurs, Artisanat',
    icon: '🤖',
    color: '#00D4FF',
    position: { x: 25, y: 20 },
    size: 'medium',
    path: '/bbot',
  },
  {
    id: 'mindzkid',
    title: "Mind'z'Kid",
    subtitle: 'EdTech gamifiée',
    description: 'Éducation, apprentissage par la gamification',
    icon: '📚',
    color: '#FF8A50',
    position: { x: 70, y: 15 },
    size: 'medium',
    path: '/mindzkid',
  },
  {
    id: 'ocr',
    title: 'OCR Intelligence',
    subtitle: 'Traitement documentaire',
    description: 'Automatisation documentaire',
    icon: '📄',
    color: '#00D4FF',
    position: { x: 15, y: 45 },
    size: 'small',
    path: '/ocr',
  },
  {
    id: 'predictive',
    title: 'Optimisation Prédictive',
    subtitle: 'Stocks & Trésorerie',
    description: 'Data prédictive en action',
    icon: '📈',
    color: '#FFFFFF',
    position: { x: 85, y: 40 },
    size: 'small',
    path: '/predictive',
  },
  {
    id: 'rh',
    title: 'Assistant RH IA',
    subtitle: 'Gestion des talents',
    description: 'Suivi des collaborateurs & prévision RH',
    icon: '👥',
    color: '#00D4FF',
    position: { x: 20, y: 70 },
    size: 'small',
    path: '/rh',
  },
  {
    id: 'bi',
    title: 'Smart BI',
    subtitle: 'Tableau de bord IA',
    description: 'Prise de décision stratégique',
    icon: '📊',
    color: '#FF8A50',
    position: { x: 75, y: 65 },
    size: 'medium',
    path: '/bi',
  },
  {
    id: 'odoo',
    title: 'Solutions Odoo',
    subtitle: 'ERP Plugin IA',
    description: "ERP augmenté par l'IA",
    icon: '⚙️',
    color: '#00D4FF',
    position: { x: 10, y: 25 },
    size: 'small',
    path: '/odoo',
  },
  {
    id: 'audit',
    title: 'Audit & GRC',
    subtitle: 'Gouvernance intelligente',
    description: 'Gouvernance intelligente',
    icon: '🛡️',
    color: '#FFFFFF',
    position: { x: 90, y: 25 },
    size: 'small',
    path: '/audit',
  },
  {
    id: 'formevo',
    title: 'Formevo.fr',
    subtitle: 'LMS Yonnovia',
    description: 'Formation continue assistée par IA',
    icon: '🎓',
    color: '#FF8A50',
    position: { x: 30, y: 85 },
    size: 'medium',
    path: '/formevo',
  },
  {
    id: 'kyc',
    title: 'e-KYC Digital',
    subtitle: 'Solutions KYC',
    description: 'Identité, sécurité, conformité RGPD',
    icon: '🔐',
    color: '#00D4FF',
    position: { x: 65, y: 80 },
    size: 'small',
    path: '/kyc',
  },
];

const FLOATING_KEYWORDS = [
  { text: 'Intelligence Artificielle', x: 5, y: 5 },
  { text: 'Accessibilité', x: 85, y: 8 },
  { text: 'Conformité', x: 95, y: 55 },
  { text: 'Innovation', x: 8, y: 90 },
  { text: 'Automatisation', x: 50, y: 5 },
];

const YonnoviaConstellation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getSizeStyles = (size) => {
    switch (size) {
      case 'large':
        return { width: '112px', height: '112px', fontSize: '2.5rem' };
      case 'medium':
        return { width: '96px', height: '96px', fontSize: '2rem' };
      case 'small':
        return { width: '80px', height: '80px', fontSize: '1.5rem' };
      default:
        return { width: '96px', height: '96px', fontSize: '2rem' };
    }
  };

  const renderConnectionLines = () => {
    const centerX = 50;
    const centerY = 50;

    return CONSTELLATION_ITEMS.map((item) => (
      <g key={`line-${item.id}`}>
        <line
          x1={`${centerX}%`}
          y1={`${centerY}%`}
          x2={`${item.position.x}%`}
          y2={`${item.position.y}%`}
          stroke={item.color}
          strokeOpacity={hoveredItem === item.id ? 0.8 : 0.3}
          strokeWidth={hoveredItem === item.id ? 2 : 1}
          strokeDasharray="5,5"
          style={{
            filter: `drop-shadow(0 0 ${hoveredItem === item.id ? '8px' : '4px'} ${item.color}40)`,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-10"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
        <circle
          cx={`${centerX + (item.position.x - centerX) * 0.3}%`}
          cy={`${centerY + (item.position.y - centerY) * 0.3}%`}
          r="3"
          fill={item.color}
          opacity={hoveredItem === item.id ? 1 : 0.6}
          style={{
            filter: `drop-shadow(0 0 6px ${item.color})`,
            transition: 'all 0.3s ease-in-out',
          }}
        />
      </g>
    ));
  };

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 30%, #0F1419 70%, #000510 100%)',
    },
    mouseGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      transition: 'background 0.3s ease-out',
    },
    floatingParticle: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      backgroundColor: '#00D4FF',
      borderRadius: '50%',
      opacity: 0.3,
      animation: 'floatUp 15s linear infinite',
    },
    innerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 10,
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: '24px',
      textShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
      color: '#00D4FF',
      fontWeight: '300',
      maxWidth: '600px',
      margin: '0 auto',
    },
    constellationContainer: {
      position: 'relative',
      height: '70vh',
      minHeight: '500px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    svg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1,
    },
    centralHub: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 20,
    },
    centralHubOuter: {
      position: 'absolute',
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      background:
        'conic-gradient(from 0deg, transparent, #00D4FF, transparent, #FF8A50, transparent)',
      animation: 'spin 10s linear infinite',
      filter: 'blur(1px)',
    },
    centralHubInner: {
      position: 'relative',
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out',
      background: 'linear-gradient(135deg, #00D4FF 0%, #FF8A50 100%)',
      boxShadow: '0 0 60px rgba(0, 212, 255, 0.6)',
    },
    centralHubText: {
      textAlign: 'center',
      color: '#FFFFFF',
    },
    centralHubTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '4px',
    },
    centralHubSubtitle: {
      fontSize: '0.75rem',
      opacity: 0.8,
    },
    constellationItem: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      zIndex: 10,
      transition: 'transform 0.3s ease-in-out',
    },
    constellationItemInner: {
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      border: '2px solid',
      transition: 'all 0.3s ease-in-out',
      position: 'relative',
    },
    tooltip: {
      position: 'absolute',
      top: '-80px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      padding: '12px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      minWidth: '200px',
      textAlign: 'center',
      transition: 'all 0.3s ease-in-out',
      zIndex: 1000,
    },
    tooltipTitle: {
      fontWeight: 'bold',
      fontSize: '0.875rem',
      marginBottom: '4px',
    },
    tooltipSubtitle: {
      fontSize: '0.75rem',
      opacity: 0.8,
      marginBottom: '4px',
    },
    tooltipDescription: {
      fontSize: '0.7rem',
      opacity: 0.7,
    },
    tooltipArrow: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid #1a1a1a',
    },
    floatingKeyword: {
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0.6,
      fontSize: '0.75rem',
      color: '#00D4FF',
      fontWeight: '300',
      textShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
    },
    bottomDescription: {
      textAlign: 'center',
      marginTop: '80px',
      maxWidth: '800px',
      margin: '80px auto 0',
    },
    descriptionText: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '1.125rem',
      lineHeight: '1.6',
      marginBottom: '32px',
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      gap: '32px',
      fontSize: '0.875rem',
      color: 'rgba(0, 212, 255, 0.6)',
      flexWrap: 'wrap',
    },
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }
    
    @keyframes floatUp {
      0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.3;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section ref={containerRef} style={styles.container}>
        {/* Dynamic background glow */}
        <div
          style={{
            ...styles.mouseGlow,
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)`,
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.floatingParticle,
              left: `${Math.random() * 100}%`,
              top: '100%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}

        <div style={styles.innerContainer}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>L'Univers Yonnovia</h1>
            <p style={styles.subtitle}>L'IA au service de votre quotidien professionnel</p>
          </div>

          {/* Constellation Container */}
          <div style={styles.constellationContainer}>
            {/* Connection Lines SVG */}
            <svg style={styles.svg}>{renderConnectionLines()}</svg>

            {/* Central Hub - Yonnovia */}
            <div style={styles.centralHub}>
              <div style={styles.centralHubOuter} />
              <div
                style={styles.centralHubInner}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                <div style={styles.centralHubText}>
                  <div style={styles.centralHubTitle}>YONNOVIA</div>
                  <div style={styles.centralHubSubtitle}>AI CORE</div>
                </div>
              </div>
            </div>

            {/* Constellation Items */}
            {CONSTELLATION_ITEMS.map((item) => {
              const sizeStyles = getSizeStyles(item.size);
              const isHovered = hoveredItem === item.id;

              return (
                <div
                  key={item.id}
                  style={{
                    ...styles.constellationItem,
                    left: `${item.position.x}%`,
                    top: `${item.position.y}%`,
                    transform: isHovered
                      ? 'translate(-50%, -50%) scale(1.15)'
                      : 'translate(-50%, -50%) scale(1)',
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => (window.location.href = item.path)}
                >
                  <div
                    style={{
                      ...styles.constellationItemInner,
                      ...sizeStyles,
                      background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}50 100%)`,
                      borderColor: isHovered ? item.color : `${item.color}80`,
                      boxShadow: `0 0 ${isHovered ? '40px' : '20px'} ${item.color}40`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: sizeStyles.fontSize,
                        filter: `drop-shadow(0 0 8px ${item.color}80)`,
                        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Tooltip */}
                    <div
                      style={{
                        ...styles.tooltip,
                        opacity: isHovered ? 1 : 0,
                        visibility: isHovered ? 'visible' : 'hidden',
                      }}
                    >
                      <div style={styles.tooltipTitle}>{item.title}</div>
                      <div style={styles.tooltipSubtitle}>{item.subtitle}</div>
                      <div style={styles.tooltipDescription}>{item.description}</div>
                      <div style={styles.tooltipArrow} />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Floating Keywords */}
            {FLOATING_KEYWORDS.map((keyword, index) => (
              <div
                key={index}
                style={{
                  ...styles.floatingKeyword,
                  left: `${keyword.x}%`,
                  top: `${keyword.y}%`,
                  animation: `pulse ${4 + index}s ease-in-out infinite`,
                }}
              >
                {keyword.text}
              </div>
            ))}
          </div>

          {/* Bottom Description */}
          <div style={styles.bottomDescription}>
            <p style={styles.descriptionText}>
              Explorez notre constellation de solutions IA interconnectées, conçues pour transformer
              votre écosystème professionnel à travers l'intelligence artificielle, l'automatisation
              et l'innovation technologique.
            </p>

            <div style={styles.features}>
              <span>🌟 Innovation</span>
              <span>🔗 Interconnexion</span>
              <span>🚀 Transformation</span>
              <span>🎯 Performance</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YonnoviaConstellation;
