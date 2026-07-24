'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GameFunnel() {
  const [level, setLevel] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [leadData, setLeadData] = useState({ name: '', phone: '' });

  // Sound effects could go here
  const playSelectSound = () => { /* Play retro blip */ };

  const nextLevel = () => {
    playSelectSound();
    setLevel(prev => prev + 1);
  };

  const prevLevel = () => {
    playSelectSound();
    setLevel(prev => prev - 1);
  };

  // ----- LEVEL 0: LOBBY -----
  const renderLevel0 = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="text-center max-w-2xl mx-auto mt-20"
    >
      <h1 className="text-4xl md:text-6xl mb-8 text-retro-shadow animate-pulse">M4Y MARKETING</h1>
      <p className="text-xl mb-12 text-retro-green">PRESS START TO DOMINATE YOUR INDUSTRY</p>
      
      <div className="game-card game-card-orange mb-12 text-left">
        <h2 className="text-2xl mb-4 text-[#FF5500]">HOW TO PLAY:</h2>
        <ul className="space-y-4 text-sm md:text-base leading-loose">
          <li>1. CHOOSE YOUR INDUSTRY</li>
          <li>2. EQUIP YOUR SERVICES</li>
          <li>3. SELECT YOUR LOADOUT (PACKAGE)</li>
          <li>4. SAVE YOUR GAME (CONTACT)</li>
          <li>5. CLAIM YOUR REWARD (10% OFF CODE!)</li>
        </ul>
      </div>

      <button onClick={nextLevel} className="game-btn game-btn-green text-2xl px-12 py-6 animate-bounce">
        INSERT COIN & START
      </button>
    </motion.div>
  );

  // ----- LEVEL 1: INDUSTRY -----
  const industries = ['REAL ESTATE', 'E-COMMERCE', 'SAAS / TECH', 'HEALTHCARE', 'RESTAURANT', 'CUSTOM'];
  const renderLevel1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-4xl mx-auto mt-10"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-retro-shadow">LEVEL 1: CHOOSE CLASS</h2>
        <span className="text-xl text-[#FF5500]">SCORE: 0</span>
      </div>
      <p className="text-xl mb-8">SELECT YOUR INDUSTRY BASE:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind) => (
          <button 
            key={ind}
            onClick={() => {
              setSelectedIndustry(ind);
              nextLevel();
            }}
            className="game-card hover:bg-[#FF5500] hover:text-black text-left cursor-pointer transition-colors"
          >
            <h3 className="text-xl font-bold">{ind}</h3>
          </button>
        ))}
      </div>
      <button onClick={prevLevel} className="game-btn mt-12 text-sm">BACK</button>
    </motion.div>
  );

  // ----- LEVEL 2: SERVICES -----
  const services = [
    { id: 'smm', name: 'SOCIAL MEDIA', cost: 'MP: 50' },
    { id: 'web', name: 'WEB DEV', cost: 'MP: 100' },
    { id: 'ads', name: 'PAID ADS', cost: 'MP: 75' },
    { id: 'seo', name: 'SEO', cost: 'MP: 60' },
    { id: 'ai', name: 'AI BOTS', cost: 'MP: 120' },
  ];
  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };
  const renderLevel2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-4xl mx-auto mt-10"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-retro-shadow">LEVEL 2: EQUIP SKILLS</h2>
        <span className="text-xl text-[#00FF00]">INDUSTRY: {selectedIndustry}</span>
      </div>
      <p className="text-xl mb-8">WHAT SERVICES DO YOU NEED?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {services.map((srv) => (
          <div 
            key={srv.id}
            onClick={() => toggleService(srv.id)}
            className={`game-card cursor-pointer flex justify-between items-center ${selectedServices.includes(srv.id) ? 'bg-[#00FF00] text-black border-[#00FF00] shadow-[8px_8px_0px_#FFF]' : ''}`}
          >
            <span className="text-lg">{srv.name}</span>
            <span className="text-sm">{srv.cost}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={prevLevel} className="game-btn text-sm">BACK</button>
        <button 
          onClick={nextLevel} 
          disabled={selectedServices.length === 0}
          className={`game-btn game-btn-green text-sm flex-1 ${selectedServices.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          CONFIRM LOADOUT
        </button>
      </div>
    </motion.div>
  );

  // ----- LEVEL 3: PACKAGES -----
  const renderLevel3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-5xl mx-auto mt-10"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-retro-shadow">LEVEL 3: SELECT BUNDLE</h2>
        <span className="text-xl text-[#FF0000]">ITEMS: {selectedServices.length}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="game-card game-card-green flex flex-col">
          <h3 className="text-2xl text-[#00FF00] mb-2">STARTER</h3>
          <p className="mb-4">SMM + Basic Web</p>
          <p className="text-3xl mb-6">$999<span className="text-sm">/mo</span></p>
          <button onClick={() => { setSelectedPackage('STARTER'); nextLevel(); }} className="game-btn mt-auto text-sm w-full">SELECT</button>
        </div>
        <div className="game-card game-card-orange flex flex-col scale-105 z-10 border-[#FF5500]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5500] text-black px-2 py-1 text-xs">BEST VALUE</div>
          <h3 className="text-2xl text-[#FF5500] mb-2">PRO GROWTH</h3>
          <p className="mb-4">SMM + Web + Ads + SEO</p>
          <p className="text-3xl mb-6">$2,499<span className="text-sm">/mo</span></p>
          <button onClick={() => { setSelectedPackage('PRO'); nextLevel(); }} className="game-btn game-btn-green mt-auto text-sm w-full">SELECT</button>
        </div>
        <div className="game-card game-card-red flex flex-col">
          <h3 className="text-2xl text-[#FF0000] mb-2">CUSTOM</h3>
          <p className="mb-4">Build your own stack</p>
          <p className="text-xl mb-6">PRICE ON CALL</p>
          <button onClick={() => { setSelectedPackage('CUSTOM'); nextLevel(); }} className="game-btn mt-auto text-sm w-full">SELECT</button>
        </div>
      </div>
      <button onClick={prevLevel} className="game-btn text-sm">BACK</button>
    </motion.div>
  );

  // ----- LEVEL 4: SAVE GAME (LEAD GEN) -----
  const renderLevel4 = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="max-w-2xl mx-auto mt-10 text-center"
    >
      <h2 className="text-4xl text-retro-shadow mb-6">SAVE YOUR GAME</h2>
      <p className="text-xl mb-8">ENTER YOUR DETAILS TO PROCEED</p>
      
      <div className="game-card mb-8 text-left">
        <div className="mb-6">
          <label className="block text-[#FF5500] mb-2">PLAYER NAME:</label>
          <input 
            type="text" 
            className="w-full bg-[#000] border-2 border-[#FFF] p-4 text-white font-pixel focus:outline-none focus:border-[#FF5500]"
            value={leadData.name}
            onChange={e => setLeadData({...leadData, name: e.target.value})}
            placeholder="_"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#FF5500] mb-2">COMMLINK (PHONE):</label>
          <input 
            type="tel" 
            className="w-full bg-[#000] border-2 border-[#FFF] p-4 text-white font-pixel focus:outline-none focus:border-[#FF5500]"
            value={leadData.phone}
            onChange={e => setLeadData({...leadData, phone: e.target.value})}
            placeholder="_"
          />
        </div>
      </div>
      
      <div className="flex gap-4 justify-center">
        <button onClick={prevLevel} className="game-btn text-sm">BACK</button>
        <button 
          onClick={nextLevel} 
          disabled={!leadData.name || !leadData.phone}
          className={`game-btn game-btn-green text-lg px-8 ${(!leadData.name || !leadData.phone) ? 'opacity-50' : ''}`}
        >
          SAVE & CONTINUE
        </button>
      </div>
    </motion.div>
  );

  // ----- LEVEL 5: VICTORY & VIRAL LOOP -----
  const renderLevel5 = () => {
    const shareText = "Welcome to M4Y. Are you a business who is struggling? We are an anti-depressant. Call us and get market therapy.";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto mt-10 text-center"
      >
        <h2 className="text-5xl text-retro-green mb-4 animate-blink">LEVEL COMPLETE!</h2>
        <p className="text-xl mb-8">OUR SQUAD WILL CONTACT YOU SOON.</p>
        
        <div className="game-card game-card-orange mb-8">
          <h3 className="text-2xl text-black bg-[#FF5500] p-2 inline-block mb-4">REWARD UNLOCKED</h3>
          <p className="mb-4">Give this code on the call for 10% OFF!</p>
          <div className="text-4xl text-[#00FF00] border-2 border-[#00FF00] p-4 border-dashed inline-block">M4Y-WIN-10</div>
        </div>
        
        <div className="game-card game-card-red border-[#FF0000]">
          <h3 className="text-xl text-[#FF0000] mb-4">BONUS MISSION: +5% EXTRA OFF</h3>
          <p className="text-sm mb-6 leading-loose text-left">
            Share this message on your story or status to claim an extra 5% discount: <br/><br/>
            <span className="text-[#FF5500]">"Welcome to M4Y. Are you a business who is struggling? We are an anti-depressant. Call us and get a market therapy."</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="game-btn game-btn-green text-sm flex-1">SHARE W/A</a>
            <a href={twitterUrl} target="_blank" rel="noreferrer" className="game-btn game-btn-red text-sm flex-1 border-[#FF0000] text-[#FF0000]">SHARE X/IG</a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen relative p-6 pt-24 pb-20">
      <div className="crt-overlay"></div>
      
      {/* Top HUD */}
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-start z-50 pointer-events-none">
        <div>
          <div className="text-[#FF5500] text-xl">1UP</div>
          <div className="text-2xl">{leadData.name ? leadData.name.toUpperCase() : 'GUEST'}</div>
        </div>
        <div className="text-right">
          <div className="text-[#00FF00] text-xl">HIGH SCORE</div>
          <div className="text-2xl">999990</div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {level === 0 && <motion.div key="l0">{renderLevel0()}</motion.div>}
        {level === 1 && <motion.div key="l1">{renderLevel1()}</motion.div>}
        {level === 2 && <motion.div key="l2">{renderLevel2()}</motion.div>}
        {level === 3 && <motion.div key="l3">{renderLevel3()}</motion.div>}
        {level === 4 && <motion.div key="l4">{renderLevel4()}</motion.div>}
        {level === 5 && <motion.div key="l5">{renderLevel5()}</motion.div>}
      </AnimatePresence>
    </div>
  );
}
