import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#162f21] to-[#d4a574] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.2)] transition-shadow duration-300 flex items-center justify-center cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white" strokeWidth={2.5} />
    </button>
  );
}
