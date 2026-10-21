import React, { useState } from 'react';
import { Mail, Phone, Share2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact({ onCharacterTalk }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const copyToClipboard = (text, type) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }

    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }

    onCharacterTalk("Contact details copied to clipboard!");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("TRANSMISSION RECEIVED! THANK YOU.");
    setFormData({ name: '', email: '', message: '' });
    onCharacterTalk("Transmission successfully sent!");
  };

  return (
    <section id="contact" className="pt-6 relative space-y-10">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="flex justify-center gap-2 mb-1" aria-hidden="true">
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
        </div>

        <h2 className="pixel-title-3d text-2xl sm:text-3xl md:text-4xl">
          Initiate Contact
        </h2>

        <p className="text-xs sm:text-sm text-[#8a8a98] font-sans">
          Send a direct transmission or copy player coordinates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Badges / Direct Links */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Email Box */}
          <div className="pixel-frame-dark pixel-notch">
            <div className="pixel-frame-dark-inner pixel-notch p-5 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-pixel text-[#d9a046] tracking-wider">
                <Mail className="w-3.5 h-3.5" /> EMAIL ADDRESS
              </div>
              <div className="flex items-center justify-between gap-2 text-xs sm:text-sm text-[#f0f0f5] font-sans">
                <span className="truncate">nainadugar.official@gmail.com</span>
                <button 
                  onClick={() => copyToClipboard('nainadugar.official@gmail.com', 'email')}
                  className={`px-2.5 py-1 text-[9px] font-pixel pixel-notch-sm transition-colors cursor-pointer shrink-0 ${
                    copiedEmail ? 'bg-[#d9a046] text-black font-bold' : 'bg-[#181822] text-[#f0f0f5] border border-[#3a3a48] hover:border-[#d9a046]'
                  }`}
                >
                  {copiedEmail ? 'COPIED!' : 'COPY'}
                </button>
              </div>
            </div>
          </div>

          {/* Phone Box */}
          <div className="pixel-frame-dark pixel-notch">
            <div className="pixel-frame-dark-inner pixel-notch p-5 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-pixel text-[#d9a046] tracking-wider">
                <Phone className="w-3.5 h-3.5" /> PHONE CONTACT
              </div>
              <div className="flex items-center justify-between gap-2 text-xs sm:text-sm text-[#f0f0f5] font-sans">
                <span>+91 9079171274</span>
                <button 
                  onClick={() => copyToClipboard('+919079171274', 'phone')}
                  className={`px-2.5 py-1 text-[9px] font-pixel pixel-notch-sm transition-colors cursor-pointer shrink-0 ${
                    copiedPhone ? 'bg-[#d9a046] text-black font-bold' : 'bg-[#181822] text-[#f0f0f5] border border-[#3a3a48] hover:border-[#d9a046]'
                  }`}
                >
                  {copiedPhone ? 'COPIED!' : 'COPY'}
                </button>
              </div>
            </div>
          </div>

          {/* Socials Box */}
          <div className="pixel-frame-dark pixel-notch">
            <div className="pixel-frame-dark-inner pixel-notch p-5 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-pixel text-[#d9a046] tracking-wider">
                <Share2 className="w-3.5 h-3.5" /> NETWORKS
              </div>
              <div className="flex gap-3 pt-1">
                <a 
                  href="https://linkedin.com/in/nainadugar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pixel-btn-ghost flex-1 pixel-notch-sm text-center"
                >
                  <span className="pixel-btn-ghost-inner pixel-notch-sm justify-center py-2 text-[10px]">
                    <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
                  </span>
                </a>
                <a 
                  href="https://github.com/sodiumcodes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pixel-btn-ghost flex-1 pixel-notch-sm text-center"
                >
                  <span className="pixel-btn-ghost-inner pixel-notch-sm justify-center py-2 text-[10px]">
                    <Github className="w-3.5 h-3.5" /> GITHUB
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Transmission Form */}
        <div className="lg:col-span-7">
          <div className="pixel-frame-dark pixel-notch">
            <div className="pixel-frame-dark-inner pixel-notch p-6 sm:p-8 space-y-5">
              <div className="text-xs font-pixel text-[#f0f0f5] tracking-wider">
                TRANSMIT MESSAGE
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block font-pixel text-[10px] text-[#8a8a98] mb-1.5 tracking-wider">
                    PLAYER / RECRUITER NAME
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name" 
                    className="w-full p-3 bg-[#09090c] border border-[#2a2a38] text-sm text-[#f0f0f5] font-sans focus:border-[#d9a046] focus:outline-none pixel-notch-sm placeholder:text-[#505060]" 
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[10px] text-[#8a8a98] mb-1.5 tracking-wider">
                    RETURN TRANSMISSION EMAIL
                  </label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email" 
                    className="w-full p-3 bg-[#09090c] border border-[#2a2a38] text-sm text-[#f0f0f5] font-sans focus:border-[#d9a046] focus:outline-none pixel-notch-sm placeholder:text-[#505060]" 
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[10px] text-[#8a8a98] mb-1.5 tracking-wider">
                    TRANSMISSION CONTENT
                  </label>
                  <textarea 
                    rows="4" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Enter your message details..." 
                    className="w-full p-3 bg-[#09090c] border border-[#2a2a38] text-sm text-[#f0f0f5] font-sans focus:border-[#d9a046] focus:outline-none resize-none pixel-notch-sm placeholder:text-[#505060]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="pixel-btn-gold w-full py-3.5 text-xs font-pixel pixel-notch-sm"
                >
                  SEND TRANSMISSION
                </button>

                {statusMessage && (
                  <p id="contact-status" className="text-xs font-pixel text-[#d9a046] text-center pt-2">
                    {statusMessage}
                  </p>
                )}
              </form>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
