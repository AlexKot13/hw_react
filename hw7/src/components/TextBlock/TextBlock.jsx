import { useContext } from "react"
import { LanguageContext } from "../LanguageContext/LanguageContext"

const TextBlock = () => {
  const { language } = useContext(LanguageContext)

  const text = {
    en: "Welcome to our website!",
    ru: "Добро пожаловать на наш сайт"
  }

  return <p>{text[language]}</p>
}

export default TextBlock;