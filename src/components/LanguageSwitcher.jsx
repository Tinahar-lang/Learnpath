import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';

const LanguageSwitcher = ({ className = '' }) => {
  const { language, changeLanguage, getAvailableLanguages, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const availableLanguages = getAvailableLanguages();
  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  return (
    <div className={`relative ${className}`}>
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300"
        title={t('language')}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage?.flag} {language.toUpperCase()}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 border border-gray-200 dark:border-gray-700">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              {t('language')}
            </p>
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                  language === lang.code
                    ? 'bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600'
                    : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{lang.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{lang.code}</p>
                </div>
                {language === lang.code && (
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                )}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {availableLanguages.length} languages available
            </p>
          </div>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
