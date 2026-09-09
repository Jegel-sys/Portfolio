import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const iconKey = name.toLowerCase().replace(/[\s\.]/g, '');

  switch (iconKey) {
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#E44D26"/>
          <path d="M12 3.8V20.2L16.7 18.8L18.2 3.8H12Z" fill="#F16529"/>
          <path d="M8.2 7.3H15.8L15.5 10H8.4L8.7 12.8H15.2L14.7 16.5L12 17.3L9.3 16.5L9.1 14.5H7.3L7.7 18.2L12 19.4L16.3 18.2L17.1 9.2L17.3 5.5H6.5" fill="white"/>
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#264DE4"/>
          <path d="M12 3.8V20.2L16.7 18.8L18.2 3.8H12Z" fill="#2965F1"/>
          <path d="M8.2 7.3H15.8L15.5 10H8.4L8.7 12.8H15.2L14.7 16.5L12 17.3L9.3 16.5L9.1 14.5H7.3L7.7 18.2L12 19.4L16.3 18.2L17.1 9.2L17.3 5.5H6.5" fill="white"/>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M7 17.2C7 18.6 7.9 19.5 9.3 19.5C10.5 19.5 11.2 18.9 11.5 18L10.3 17.3C10.1 17.7 9.8 18 9.3 18C8.8 18 8.4 17.6 8.4 16.9V11.5H7V17.2ZM14.1 17.8C14.7 18.3 15.5 18.6 16.3 18.6C17.4 18.6 18.1 18.1 18.1 17.3C18.1 16.5 17.6 16.1 16.6 15.7L15.9 15.4C14.5 14.8 13.8 14.1 13.8 12.9C13.8 11.5 14.9 10.5 16.5 10.5C17.4 10.5 18.2 10.8 18.8 11.3L18.1 12.4C17.6 12 17.1 11.8 16.5 11.8C15.8 11.8 15.2 12.2 15.2 12.8C15.2 13.5 15.7 13.8 16.7 14.2L17.4 14.5C19 15.1 19.6 15.9 19.6 17.2C19.6 18.7 18.4 19.7 16.4 19.7C15.2 19.7 14.2 19.3 13.4 18.7L14.1 17.8Z" fill="#000000"/>
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="3" fill="#3178C6"/>
          <text x="12" y="16.5" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">TS</text>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
        </svg>
      );
    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2L3 7.2V17.5L12 22.7L21 17.5V7.2L12 2Z" fill="#339933"/>
          <path d="M12 4.1L5 8.1V16.3L12 20.3L19 16.3V8.1L12 4.1Z" fill="#43853D"/>
          <path d="M12 11C11.4 11 11 11.4 11 12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12C13 11.4 12.6 11 12 11Z" fill="white"/>
        </svg>
      );
    case 'express':
    case 'expressjs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="6" fill="#303030"/>
          <text x="12" y="16.5" fill="#FFFFFF" fontSize="12" fontFamily="Georgia, serif" fontWeight="bold" fontStyle="italic" textAnchor="middle">ex</text>
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/>
          <text x="12" y="14" fill="#FFFFFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PHP</text>
        </svg>
      );
    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8.5 4.5L14 2L18.5 4L22 9L18 14L15.5 13L18 8.5L14.5 5L10.5 6.5L8.5 4.5Z" fill="#FF2D20"/>
          <path d="M16 11.5L9.5 8L4 11L2 16.5L5.5 21L12 22L16 18L13 17.5L10.5 19.5L6.5 19L4.5 15.5L6 12.5L10.5 10.5L13.5 12L16 11.5Z" fill="#FF2D20"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#00618A" fillOpacity="0.15"/>
          <path d="M4 14C5.5 11 9 10 12 11C15 12 18 10 20 8C19 12 15 16 12 16C9 16 5 15 4 14Z" fill="#00618A"/>
          <path d="M14 13C15.5 12.5 17 11 18 9.5C18 10.5 17.5 11.8 16.5 12.8L14 13Z" fill="#E48E00"/>
          <circle cx="8.5" cy="12" r="1" fill="#FFFFFF"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M21.6 10.8L13.2 2.4C12.4 1.6 11.1 1.6 10.3 2.4L8.7 4L11.3 6.6C12.1 6.3 13.1 6.5 13.8 7.2C14.5 7.9 14.7 8.9 14.4 9.8L17 12.4C17.9 12.1 18.9 12.3 19.6 13C20.5 13.9 20.5 15.4 19.6 16.3C18.7 17.2 17.2 17.2 16.3 16.3C15.6 15.6 15.4 14.6 15.7 13.7L13.3 11.3V16.9C13.5 17.2 13.6 17.6 13.6 18C13.6 19.3 12.5 20.4 11.2 20.4C9.9 20.4 8.8 19.3 8.8 18C8.8 17.2 9.2 16.5 9.8 16.1V10.4C9.2 10 8.8 9.3 8.8 8.5C8.8 8.1 8.9 7.7 9.1 7.4L6.6 4.9L2.4 9.1C1.6 9.9 1.6 11.2 2.4 12L10.8 20.4C11.6 21.2 12.9 21.2 13.7 20.4L21.6 12.5C22.4 11.7 22.4 10.4 21.6 9.6V10.8Z" fill="#F05032"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M2.5 13C2.5 17 6 19.5 11.5 19.5C17.5 19.5 21.5 16 21.8 11.5C21.8 11.5 20 12 18.5 11.5C18.5 9 16.5 7.5 16.5 7.5C16.5 7.5 15.5 9 14.5 9.5H1.5C1.8 11 2 12 2.5 13Z" fill="#2496ED"/>
          <rect x="6" y="7" width="2" height="2" fill="#2496ED"/>
          <rect x="9" y="7" width="2" height="2" fill="#2496ED"/>
          <rect x="12" y="7" width="2" height="2" fill="#2496ED"/>
          <rect x="9" y="4.5" width="2" height="2" fill="#2496ED"/>
          <rect x="6" y="9.5" width="2" height="2" fill="#2496ED"/>
          <rect x="9" y="9.5" width="2" height="2" fill="#2496ED"/>
          <rect x="12" y="9.5" width="2" height="2" fill="#2496ED"/>
          <circle cx="18" cy="14" r="0.8" fill="white"/>
        </svg>
      );
    case 'restapis':
    case 'restapi':
    case 'apis':
    case 'api':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#0EA5E9" fillOpacity="0.15"/>
          <path d="M7 9L4 12L7 15" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 9L20 12L17 15" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 7L10 17" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#7952B3"/>
          <text x="12" y="16.5" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">B</text>
        </svg>
      );
    case 'sql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#0EA5E9" fillOpacity="0.15"/>
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.3" fill="#38BDF8"/>
          <path d="M5.5 6.5V17.5C5.5 18.7 8.4 19.7 12 19.7C15.6 19.7 18.5 18.7 18.5 17.5V6.5" stroke="#38BDF8" strokeWidth="1.6" fill="none"/>
          <path d="M5.5 11.8C5.5 13 8.4 14 12 14C15.6 14 18.5 13 18.5 11.8" stroke="#38BDF8" strokeWidth="1.6" fill="none"/>
        </svg>
      );
    case 'phpmyadmin':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#6C78AF"/>
          <text x="12" y="15.5" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">pMA</text>
        </svg>
      );
    case 'joins':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#6366F1" fillOpacity="0.15"/>
          <circle cx="9.5" cy="12" r="5.5" fill="#6366F1" fillOpacity="0.55"/>
          <circle cx="14.5" cy="12" r="5.5" fill="#818CF8" fillOpacity="0.55"/>
        </svg>
      );
    case 'query':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#10B981" fillOpacity="0.15"/>
          <path d="M5 5H19L14.5 11.5V17.5L9.5 15.5V11.5L5 5Z" fill="#34D399" stroke="#34D399" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
      );
    case 'ejs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#B4CA65"/>
          <text x="12" y="16" fill="#2D2D2D" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">EJS</text>
        </svg>
      );
    case 'mvc':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#8B5CF6" fillOpacity="0.15"/>
          <rect x="4" y="4.5" width="16" height="4" rx="1.2" fill="#A78BFA"/>
          <rect x="4" y="10" width="16" height="4" rx="1.2" fill="#8B5CF6"/>
          <rect x="4" y="15.5" width="16" height="4" rx="1.2" fill="#6D28D9"/>
        </svg>
      );
    case 'cursorai':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="6" fill="#111111"/>
          <path d="M6.5 5.2a.6.6 0 0 1 .78-.78l11.2 4.55a.6.6 0 0 1-.076 1.137l-4.29 1.107a2.4 2.4 0 0 0-1.726 1.723l-1.108 4.29a.6.6 0 0 1-1.137.076z" fill="#FFFFFF"/>
        </svg>
      );
    case 'troubleshooting':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#F59E0B" fillOpacity="0.15"/>
          <path d="M14.5 4.5L9 10L11 12L5.5 17.5" stroke="#FBBF24" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 9L18 5C19 6 19.5 7.5 19 9L15.5 12.5" stroke="#FBBF24" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="17" cy="17" r="2.6" stroke="#FBBF24" strokeWidth="1.6" fill="none"/>
        </svg>
      );
    case 'msoffice':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3" y="3" width="8" height="8" rx="1.4" fill="#EB3C00"/>
          <rect x="13" y="3" width="8" height="8" rx="1.4" fill="#84CC16"/>
          <rect x="3" y="13" width="8" height="8" rx="1.4" fill="#0364B8"/>
          <rect x="13" y="13" width="8" height="8" rx="1.4" fill="#FFB900"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      );
  }
};
