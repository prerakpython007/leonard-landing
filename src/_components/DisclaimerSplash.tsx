'use client';

import React, { useState, useEffect } from 'react';

const DisclaimerSplash = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Lock body scroll when disclaimer is shown
  useEffect(() => {
    if (showDisclaimer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDisclaimer]);

  const handleAgree = () => {
    setIsAnimating(true);
    // Remove disclaimer after animation completes
    setTimeout(() => {
      setShowDisclaimer(false);
    }, 1000);
  };

  if (!showDisclaimer) {
    return null;
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999
      }}
    >
      {/* Left half - Disclaimer content */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '50%',
          background: '#f8f9fa', // Darker background
          transition: 'transform 1s ease-in-out',
          zIndex: 100000,
          transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          overflowY: 'auto'
        }}
      >
        <div style={{
          color: '#222',
          textAlign: 'left',
          maxWidth: '90%', // Increased width
          width: '100%',
          height: 'fit-content'
        }}>
          <h1 style={{ 
            fontSize: '1.6rem',
            fontWeight: '700',
            marginBottom: '1.2rem',
            color: '#000',
            textAlign: 'center',
            borderBottom: '3px solid #00D4FF', // Website blue
            paddingBottom: '0.8rem'
          }}>
            DISCLAIMER & CONFIRMATION
          </h1>
          
          <div style={{ 
            fontSize: '0.85rem',
            lineHeight: '1.5'
          }}>
            <p style={{ marginBottom: '1.2rem', textAlign: 'justify' }}>
              As per the rules of the <strong>Bar Council of India</strong>, we are <strong>not permitted to solicit work and advertise</strong> through website except as permitted under the aforesaid rules. The information provided under this website is <strong>solely available for informational purposes only</strong> and should not be interpreted as <strong>soliciting or advertisement</strong>.
            </p>
            
            <p style={{ marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem' }}>
              By accessing the website, you hereby acknowledge the following:
            </p>
            
            <ul style={{ 
              fontSize: '0.75rem',
              lineHeight: '1.4',
              paddingLeft: '1rem',
              marginBottom: '1.2rem',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                That you have <strong>requested for the access</strong> to the website to gain more information about us for your information and use;
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                There has been <strong>no advertisement, personal communication, solicitation, invitation or inducement</strong> of any sort whatsoever from us or any of our members to solicit any work through this website;
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                The information about us is provided to the user only on request and any information obtained or materials downloaded from this website and any transmission, receipt or use of this site would <strong>not create any lawyer-client relationship</strong>. Neither this website nor the web pages and the information contained herein constitute a contract, or will form the basis of a contract;
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                <strong>No liability can arise</strong> for any action taken by the user relying on the material/information provided under this website;
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                In cases where the user has any legal issues, he/she in all cases must <strong>seek independent legal advice</strong>, as the materials contained in this website do not constitute/substitute professional advice that may be required before acting on any matter;
              </li>
              <li style={{ marginBottom: '0.6rem', textAlign: 'justify' }}>
                You hereby <strong>agree to the Privacy Policy</strong> of the firm.
              </li>
            </ul>
            
            <div style={{ 
              fontSize: '0.9rem',
              fontStyle: 'italic',
              textAlign: 'center',
              color: '#444',
              fontWeight: '600',
              padding: '0.8rem',
              background: '#e9ecef',
              borderRadius: '6px',
              border: '2px solid #00D4FF' // Website blue
            }}>
              If you understand and agree to the above, please press <strong>AGREE</strong> else click on <strong>Disagree</strong>.
            </div>
          </div>
        </div>
      </div>
      
      {/* Right half - Buttons with background image */}
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '2rem', 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button 
              onClick={() => window.history.back()}
              style={{
                padding: '15px 40px',
                border: '2px solid white',
                borderRadius: '8px',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                minWidth: '160px',
                transition: 'all 0.3s ease'
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
            
            <button 
              onClick={handleAgree}
              style={{
                padding: '15px 40px',
                border: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00D4FF, #0056b3)', // Website blue
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                minWidth: '160px',
                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.4)', // Website blue shadow
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.5)'; // Website blue shadow
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.4)'; // Website blue shadow
              }}
            >
              AGREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerSplash;