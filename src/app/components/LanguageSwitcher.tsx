import { useState } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export function LanguageSwitcher({ variant = 'light', size = 'md' }: LanguageSwitcherProps) {
  const [currentLanguage, setCurrentLanguage] = useState<'EN' | 'TR'>('EN');

  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'EN' ? 'TR' : 'EN'));
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  const variantClasses = {
    light: {
      container: 'bg-white border border-border text-foreground',
      button: 'hover:bg-muted',
      active: 'bg-primary text-primary-foreground',
    },
    dark: {
      container: 'bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground',
      button: 'hover:bg-primary-foreground/20',
      active: 'bg-accent text-white',
    },
  };

  const styles = variantClasses[variant];

  return (
    <div className={`inline-flex items-center rounded-md overflow-hidden ${styles.container}`}>
      <button
        onClick={() => setCurrentLanguage('EN')}
        className={`${sizeClasses[size]} ${styles.button} transition-colors font-medium ${
          currentLanguage === 'EN' ? styles.active : ''
        }`}
      >
        EN
      </button>
      <div className="w-px h-4 bg-border opacity-30" />
      <button
        onClick={() => setCurrentLanguage('TR')}
        className={`${sizeClasses[size]} ${styles.button} transition-colors font-medium ${
          currentLanguage === 'TR' ? styles.active : ''
        }`}
      >
        TR
      </button>
    </div>
  );
}
