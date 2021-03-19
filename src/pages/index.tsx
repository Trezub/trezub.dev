import Header from "../components/Header";
import Links from "../components/Links";
import styles from '../styles/pages/Index.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.codeImg}>
                <div className={styles.codeGradient} />
            </div>
            <div className={styles.me}>
                <img className={styles.profilePic} src="https://github.com/trezub.png" alt="" />
                <h3>Adriano Déa</h3>
                <p>22 years | Fullstack developer</p>
            </div>
            <Links />
        </div>
    )
}
