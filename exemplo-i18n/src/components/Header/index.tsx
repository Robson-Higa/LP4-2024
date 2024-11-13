import { useTranslation } from "react-i18next";

import styles from "./styles.module.css";
import ptBR from "../../assets/img/ptBR.png";
import en from "../../assets/img/en.png";
import es from "../../assets/img/es.png";
import fr from "../../assets/img/fr.png";

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <header className={styles.header}>
      <button
        className={styles.flag}
        onClick={() => i18n.changeLanguage("ptBR")}
      >
        <img src={ptBR} alt="Português brasileiro" />
      </button>

      <button className={styles.flag} onClick={() => i18n.changeLanguage("en")}>
        <img src={en} alt="Inglês" />
      </button>

      <button className={styles.flag} onClick={() => i18n.changeLanguage("es")}>
        <img src={es} alt="Espanhol" />
      </button>

      <button className={styles.flag} onClick={() => i18n.changeLanguage("fr")}>
        <img src={fr} alt="Francês" />
      </button>
    </header>
  );
};

export default Header;
