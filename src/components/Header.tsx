import React, { useEffect, useState } from 'react';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [lightBg, setLightBg] = useState('#ffffff');
  const [onTransparent, setOnTransparent] = useState(false);
  useEffect(() => {
    const headerHeight = 68;
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const lightSections = document.querySelectorAll('[data-light-bg]');
      let foundLight = false;
      let bg = '#ffffff';
      lightSections.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
          foundLight = true;
          bg = (el as HTMLElement).dataset.bg || '#ffffff';
        }
      });
      setOnLight(foundLight);
      setLightBg(bg);
      const transparentSections = document.querySelectorAll('[data-transparent-header]');
      let foundTransparent = false;
      transparentSections.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
          foundTransparent = true;
        }
      });
      setOnTransparent(foundTransparent);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const textColorClass = onLight ? 'text-[#222D33]' : 'text-white';
  const logoFilter = onLight ? 'invert' : '';
  const headerStyle: React.CSSProperties = onTransparent
    ? { backgroundColor: 'transparent' }
    : scrolled
      ? onLight
        ? { backgroundColor: lightBg }
        : { backgroundColor: '#222D33' }
      : { backgroundColor: 'transparent' };

  const navLink = 'cursor-pointer hover:opacity-70 transition-opacity';

  return (
    <header
      style={headerStyle}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 h-[68px] flex justify-between items-center transition-colors duration-300 ${textColorClass}`}>
      <button
        type="button"
        onClick={() => scrollToId('slide-1')}
        className="cursor-pointer hover:opacity-70 transition-opacity inline-flex items-center">
        <img src="/header.svg" alt="Mbrand" className={`h-5 md:h-6 w-auto ${logoFilter}`} />
      </button>

      <div className="font-mozillaText font-normal text-[0.96rem] md:text-[1.06rem] hidden md:flex items-center gap-6 tracking-tight leading-none">
        <button type="button" onClick={() => scrollToId('slide-create')} className={navLink}>
          Create<sup className="text-[0.6em] ml-0.5">(1)</sup>
        </button>
        <button type="button" onClick={() => scrollToId('slide-2')} className={navLink}>
          Grow<sup className="text-[0.6em] ml-0.5">(2)</sup>
        </button>
        <button type="button" onClick={() => scrollToId('slide-do')} className={navLink}>
          Do<sup className="text-[0.6em] ml-0.5">(3)</sup>
        </button>
      </div>

      <button
        type="button"
        onClick={() => scrollToId('slide-mario-brand')}
        className={`font-mozillaText font-normal text-[0.96rem] md:text-[1.06rem] leading-none ${navLink}`}>
        @soymariobrand
      </button>
    </header>);
}
