'use client';

import React, { useState, useEffect } from 'react';

const DisclaimerSplash = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (showDisclaimer) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [showDisclaimer]);

  const handleAgree = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowDisclaimer(false);
    }, 1000);
  };

  if (!showDisclaimer) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '50%',
          background: '#f8f9fa',
          transition: 'transform 1s ease-in-out',
          zIndex: 100000,
          transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          overflowY: 'auto',
        }}
      >
        <div style={{ color: '#222', maxWidth: '90%', width: '100%' }}>
          <h1
            style={{
              fontSize: '1.6rem',
              fontWeight: '700',
              marginBottom: '1.2rem',
              color: '#000',
              textAlign: 'center',
              borderBottom: '3px solid #00D4FF',
              paddingBottom: '0.8rem',
            }}
          >
            DISCLAIMER & CONFIRMATION
          </h1>
          <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
            <p style={{ marginBottom: '1.2rem', textAlign: 'justify' }}>
              As per the rules of the <strong>Bar Council of India</strong>, we are <strong>not permitted to solicit work and advertise</strong> through website except as permitted under the aforesaid rules...
            </p>
            <p style={{ marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem' }}>
              By accessing the website, you hereby acknowledge the following:
            </p>
            <ul style={{ fontSize: '0.75rem', paddingLeft: '1rem', marginBottom: '1.2rem' }}>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                That you have <strong>requested for the access</strong> to the website...
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                There has been <strong>no advertisement...</strong>
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                The information about us is provided...
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                <strong>No liability can arise...</strong>
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                In cases where the user has any legal issues...
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                You hereby <strong>agree to the Privacy Policy</strong> of the firm.
              </li>
            </ul>

            <div
              style={{
                fontSize: '0.9rem',
                fontStyle: 'italic',
                textAlign: 'center',
                color: '#444',
                fontWeight: '600',
                padding: '0.8rem',
                background: '#e9ecef',
                borderRadius: '6px',
                border: '2px solid #00D4FF',
              }}
            >
              If you understand and agree to the above, please press <strong>AGREE</strong> else click on <strong>Disagree</strong>.
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '50%',
          background: 'linear-gradient(135deg, #16213e, #0f3460)',
          transition: 'transform 1s ease-in-out',
          zIndex: 100000,
          transform: isAnimating ? 'translateX(100%)' : 'translateX(0)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          backgroundImage:
            'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* DISAGREE Button */}
            <button
              onClick={() => window.history.back()}
              style={{
                padding: '18px 48px',
                border: '2px solid white',
                background: 'transparent',
                color: 'white',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                letterSpacing: '2px',
                cursor: 'pointer',
                minWidth: '180px',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'white';
                target.style.color = '#333';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'transparent';
                target.style.color = 'white';
              }}
            >
              DISAGREE
            </button>

            {/* AGREE Button with Hover Effect */}
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Hover BG */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(100deg, #00fff7 60%, #00bfff 100%)',
                  zIndex: 0,
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered
                    ? 'skewX(-18deg) translate(0, 0)'
                    : 'skewX(-18deg) translate(8px, 8px)',
                  transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
                  // Remove blur for sharp effect
                  filter: 'none',
                }}
              />

              {/* AGREE Button */}
              <button
                onClick={handleAgree}
                style={{
                  padding: '18px 48px',
                  border: '2px solid white',
                  background: 'transparent',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  textShadow: '0 0 6px #00fff7, 0 0 2px #fff',
                  position: 'relative',
                  zIndex: 1,
                  cursor: 'pointer',
                  minWidth: '180px',
                  transform: isHovered
                    ? 'skewX(-18deg) translateY(-2px)'
                    : 'skewX(0deg) translateY(0)',
                  transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                }}
              >
                I AGREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerSplash;
