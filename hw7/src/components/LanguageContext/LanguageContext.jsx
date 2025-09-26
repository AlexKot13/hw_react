import { createContext, useState } from "react"

export const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ru' : 'en'))
  }

  return (
    <LanguageContext.Provider value ={{language, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider;