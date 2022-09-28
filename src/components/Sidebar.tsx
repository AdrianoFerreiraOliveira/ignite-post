 import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
 
 
 import styles from './Sidebar.module.css';
 
 export function Sidebar () {
    return(
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
    <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/105682437?v=4"/>


        <strong>Adriano Ferreira de Oliveira</strong>
        <span>Business Analyst</span>
    </div>

    <footer>
        <a href='#'>
            <PencilLine size={20}/>
            Editar seu perfil
        </a>
    </footer>
    </aside>
    );
 }