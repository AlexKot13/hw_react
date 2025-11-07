import styles from "./Contacts.module.css"
import snap from '../../assets/snap.svg'
import facebook from '../../assets/fb.svg'
import x from '../../assets/x.svg'

export const Contacts = () => {
  return (
    <section className={styles.sectionContacts}>
    <div className={styles.container}>
      <h2>Контакты</h2>
      <ul className={styles.list}>
        <li className={styles.infoContacts}>8 800 000 00 00</li>
        <li className={styles.infoContacts}>emailexample@email.com</li>
      </ul>

      <form className={styles.formWrapper}>
        <input type="email" className={styles.formInput} placeholder="Ваш email"/>
        <input type="name" className={styles.formInput} placeholder="Ваше имя"/>
      </form>

      <textarea className={styles.message}>Введите сообщение</textarea>
      <div className={styles.btnWrapper}>
      <button className={styles.btnForm}>Отправить</button>
      </div>
    </div>

    <div className={styles.containerSocial}>
      <h4 className={styles.titleSocial}>Найдите нас:</h4>
      <div className={styles.socialWrapper}>
       <a href=''>
         <img src={snap} alt='snap'/>
       </a>
       <a href=''>
         <img src={facebook} alt='facebook'/>
       </a>
       <a href=''>
         <img src={x} alt='x'/>
       </a>
       </div>
    </div>
    </section>
  )
}
