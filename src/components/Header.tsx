import styles from  './Header.module.css'

import ignitelogo from '../assets/ignite-logo2.png';

export function Header() {
    return (
        <header className={styles.header}>
     <img src={ignitelogo} alt ="logotipo do ignite"/>
        </header>

    );
}
