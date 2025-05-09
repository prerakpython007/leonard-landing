import React from 'react';
import styles from '../styles/Ticker.module.css';

const UpperNav: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/leonardsolutionspvt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  
  const items = [
    "#TrademarkLaw", "#IntellectualProperty", "#IPLaw", "#BrandProtection",
    "#SmallBusinessIP", "#EntrepreneurIP", "#IPBusinessTips", "#StartupIPAdvice",
    "#BusinessGrowth", "#MarketingStrategy", "#BrandBuilding", "#AskTheAttorney",
    "#TrademarkMistakes", "#IPAdvice", "#TrademarkTips", "#CopyrightsTips",
    "#PatentAdvice", "#IndustrialDesign", "#AskTheLawyer", "#ClientSpotlight",
    "#SmallBusinessSupport", "#ProtectedBrand", "#LocalBusiness", "#TrademarkSuccess",
    "#TrademarkStrength", "#BusinessTips", "#IPStrategy", "#BrandValue",
    "#TrademarkInvestment", "#TrademarkNews", "#IPUpdates", "#BusinessIntelligence",
    "#CounterfeitPrevention", "#TrademarkProtection", "#BusinessPhilosophy",
    "#TrademarkValue", "#GlobalTrademarks", "#InternationalBusiness",
    "#FreeIPAdvice", "#TrademarkSearch", "#BrandStrategy", "#IPPlanning",
    "#TrademarkVictory", "#IPLitigation", "#BrandDefense", "#IPRights",
    "#InternationalTrademarks", "#CounterfeitProtection", "#MadridProtocol",
    "#GlobalIPProtection", "#TrademarkTimeline", "#TrademarkRegistration"
  ];

  return (
    <div className="bg-[#00ADB5] text-white py-3">
      <div className="relative max-w-7xl mx-auto">
        <div className={`${styles.ticker} overflow-hidden`}>
          <div className={`${styles.gradientOverlay} ${styles.leftGradient} flex items-center`}>
            <span className="text-2xl ml-4 opacity-50">✦</span>
          </div>
          <div className={`${styles.gradientOverlay} ${styles.rightGradient} flex items-center justify-end`}>
            <span className="text-2xl mr-4 opacity-50">✦</span>
          </div>
          <div className={styles.wrapper}>
            <div className={`${styles.content} whitespace-nowrap`}>
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <a 
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 text-sm hover:text-[#222831] font-bold transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </a>
                  <span className="text-sm opacity-30 mx-1">✦</span>
                </React.Fragment>
              ))}
            </div>
            <div className={`${styles.content} whitespace-nowrap`}>
              {items.map((item, index) => (
                <React.Fragment key={`dup-${index}`}>
                  <a 
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 text-sm hover:text-[#222831] font-bold transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </a>
                  <span className="text-sm opacity-30 mx-1">✦</span>
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