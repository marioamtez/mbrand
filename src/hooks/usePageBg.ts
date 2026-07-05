import { useEffect } from 'react';

export function usePageBg() {
  useEffect(() => {
    const headerHeight = 80;
    const update = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-light-bg]');
      let isLight = false;
      let bgColor = '#ffffff';
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
          isLight = true;
          bgColor = el.dataset.bg || '#ffffff';
        }
      });
      document.body.style.backgroundColor = isLight ? bgColor : '#222D33';
      document.body.classList.toggle('is-light-bg', isLight);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
}
