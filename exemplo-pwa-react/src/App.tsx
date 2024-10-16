import img01 from "./assets/img/img01.jpg";
import img02 from "./assets/img/img02.jpg";
import videoSample from "./assets/video/video.mp4";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Montanhas</h1>

      <img src={img01} alt="Uma bela montanha" />
      <p className={styles.label}>Uma bela montanha</p>

      <img src={img02} alt="Outra bela montanha" />
      <p className={styles.label}>Outra bela montanha</p>

      <video autoPlay={true} loop={true} controls={true}>
        <source src={videoSample} type="video/mp4" />
      </video>
      <p className={styles.label}>Um video de uma montanha</p>

    </div>
  );
};

export default App;