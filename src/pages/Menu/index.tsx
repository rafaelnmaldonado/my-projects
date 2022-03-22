import styles from './Menu.module.scss';
// import {ReactComponent as Logo} from 'assets/logo.svg';
import Logo from 'assets/logo.png';
import Search from './Search';
import {useState} from "react";

export default function Menu() {
    const [search, setSearch] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <img src={Logo} alt="logo" width="50px"/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>My Projects</div>
            </header>
            <section className={styles.options}>
                <h3 className={styles.options__title}>Cardápio</h3>
                <Search search={search} setSearch={setSearch} />
            </section>
        </main>
    )
}