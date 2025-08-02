import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {

  return (
    <div className={styles.centersScreen}>
      <div className={styles.container}>
        <h1 className={styles.title}>Quiz - ENEM</h1>
        <h3 className={styles.subtitle}>A prática leva a perfeição</h3>
        <Link className={styles.linkStyles} title="Escolher a área de estudos" to={"/select-subject"}>➔</Link>
      </div>
      
    </div>
  );
}

export default Home;
