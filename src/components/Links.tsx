import styles from '../styles/components/Links.module.css';
import { Github, Linkedin, Gmail } from '@icons-pack/react-simple-icons';

export default function Links() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/trezub">
                <Github color='#fff' size={22} className={styles.icon} />
                GitHub
            </a>
            <a href="https://linkedin.com/in/adriano-dea">
                <Linkedin color='#fff' size={22} className={styles.icon} />
                LinkedIn
            </a>
            <a href="mailto:adriano.trezub@gmail.com">
                <Gmail color='#fff' size={22} className={styles.icon} />
                Email
            </a>
        </div>
    );
}