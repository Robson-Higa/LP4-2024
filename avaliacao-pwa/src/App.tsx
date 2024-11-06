
import styles from './App.module.css'

function App() {
  return (
      <div className={styles.container}>
      <h1 className={styles.title}>Cinema</h1>

      <img src={img01} alt="Uma bela montanha" />
      <p className={styles.label}>Uma bela montanha</p>
    </div>
  );
}

export default App;
