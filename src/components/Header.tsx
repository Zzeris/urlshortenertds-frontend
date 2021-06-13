import styles from '../styles/components/Header.module.css';

export function Headder() {
    return(
        <header className={styles.header}>
            <h1>Url Shortener</h1>             
        </header>
    )
}