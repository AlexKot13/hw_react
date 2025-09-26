import { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage} className="button">
      {language === 'en' ? 'Сменить язык на русский' : 'Switch to English'}
    </button>
  );
};

export default LanguageSwitcher;