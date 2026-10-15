import React, { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section id="contact" className="space-y-8">
      <div className="border-b-4 border-[#24242a] pb-4">
        <h2 className="font-pixel text-xl sm:text-2xl text-[#d9a046] flex items-center gap-3">
          <Mail className="w-6 h-6" /> INITIATE CONTACT
        </h2>
        <p className="text-xs text-[#8a8a98] mt-1">Send a direct message or copy contact details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Direct Badges */}
        <div className="lg:col-span-5 space-y-4">
          <div className="pixel-box p-5 space-y-3">
            <div className="text-xs font-pixel text-[#d9a046]">EMAIL ADDRESS</div>
            <div className="flex items-center justify-between text-xs text-[#f0f0f5]">
              <span>nainadugar.official@gmail.com</span>
              <button 
                onClick={() => copyToClipboard('nainadugar.official@gmail.com', 'email')}
                className={`pixel-btn px-2 py-1 text-[10px] ${copiedEmail ? 'bg-[#d9a046] text-black' : ''}`}
              >
                {copiedEmail ? 'COPIED!' : 'COPY'}
              </button>
            </div>
          </div>

          <div className="pixel-box p-5 space-y-3">
            <div className="text-xs font-pixel text-[#d9a046]">PHONE CONTACT</div>
            <div className="flex items-center justify-between text-xs text-[#f0f0f5]">
              <span>+91 9079171274</span>
              <button 
                onClick={() => copyToClipboard('+919079171274', 'phone')}
                className={`pixel-btn px-2 py-1 text-[10px] ${copiedPhone ? 'bg-[#d9a046] text-black' : ''}`}
              >
                {copiedPhone ? 'COPIED!' : 'COPY'}
              </button>
            </div>
          </div>

          <div className="pixel-box p-5 space-y-3">
            <div className="text-xs font-pixel text-[#d9a046]">SOCIAL NETWORKS</div>
            <div className="flex gap-3 pt-1">
              <a 
                href="https://linkedin.com/in/nainadugar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pixel-btn px-3 py-2 text-xs flex-1 text-center"
              >
                LINKEDIN
              </a>
              <a 
                href="https://github.com/sodiumcodes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pixel-btn px-3 py-2 text-xs flex-1 text-center"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="pixel-box p-6 space-y-4">
            <div className="text-xs font-pixel text-[#f0f0f5]">TRANSMIT TRANSMISSION MESSAGE</div>
            <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-pixel text-[10px] text-[#8a8a98] mb-2">YOUR NAME</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name" 
                  className="w-full p-3 bg-[#0a0a0c] border-2 border-[#3a3a42] text-[#f0f0f5] focus:border-[#d9a046] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block font-pixel text-[10px] text-[#8a8a98] mb-2">YOUR EMAIL</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email" 
                  className="w-full p-3 bg-[#0a0a0c] border-2 border-[#3a3a42] text-[#f0f0f5] focus:border-[#d9a046] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block font-pixel text-[10px] text-[#8a8a98] mb-2">TRANSMISSION CONTENT</label>
                <textarea 
                  rows="4" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Enter your message" 
                  className="w-full p-3 bg-[#0a0a0c] border-2 border-[#3a3a42] text-[#f0f0f5] focus:border-[#d9a046] focus:outline-none resize-none"
                ></textarea>
              </div>
              <button type="submit" className="pixel-btn-gold w-full py-3 text-xs font-pixel">SEND TRANSMISSION</button>
              {statusMessage && (
                <p id="contact-status" className="text-xs font-pixel text-[#d9a046] text-center pt-2">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
