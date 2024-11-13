import ptBR from '../../assets/img/ptBR.png'
import en from '../../assets/img/en.png'
import es from '../../assets/img/es.png'
import fr from '../../assets/img/fr.png'


import styles from './styles.module.css'
import { useTransition } from 'react'

 const Header = () => {
    const { i18n } = useTransition();

    <header className={styles.header}>
        <button className={styles.flag} onClick={() => i18n.changLanguage("ptBR")}>
            <img src={ptBR} alt="Português Brasileiro" />
        </button>

         <button className={styles.flag} onClick={() => i18n.changLanguage("en")}>
            <img src={en} alt="Inglês" />
        </button>

         <button className={styles.flag} onClick={() => i18n.changLanguage("es")}>
            <img src={es} alt="Espanhol" />
        </button>

         <button className={styles.flag} onClick={() => i18n.changLanguage("fr")}>
            <img src={fr} alt="Francês" />
        </button>
    </header>
 };


 export default Header;