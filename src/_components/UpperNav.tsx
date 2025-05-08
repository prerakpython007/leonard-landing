import React from 'react';
import styles from '../styles/Ticker.module.css';

const UpperNav: React.FC = () => {
  const items = [
    "#TrademarkLaw", "#IntellectualProperty", "#IPLaw", "#BrandProtection",
    "#SmallBusinessIP", "#IPStrategy", "#BrandValue", "#TrademarkSuccess"
  ];

  return (
    <div className="bg-[#00ADB5] text-white py-3">
      <div className="relative max-w-7xl mx-auto">
        <div className={styles.ticker}>
          <div className={`${styles.gradientOverlay} ${styles.leftGradient} flex items-center`}>
            <span className="text-2xl ml-4 opacity-50">✦</span>
          </div>
          <div className={`${styles.gradientOverlay} ${styles.rightGradient} flex items-center justify-end`}>
            <span className="text-2xl mr-4 opacity-50">✦</span>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="px-4 text-sm hover:text-[#222831] transition-colors">
                    {item}
                  </span>
                  <span className="text-sm opacity-30">✦</span>
                </React.Fragment>
              ))}
            </div>
            <div className={styles.content}>
              {items.map((item, index) => (
                <React.Fragment key={`dup-${index}`}>
                  <span className="px-4 text-sm hover:text-[#222831] transition-colors">
                    {item}
                  </span>
                  <span className="text-sm opacity-30">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;