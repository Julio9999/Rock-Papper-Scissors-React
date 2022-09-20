import styles from "../stylesheets/Header.module.scss";
import logo from "../assets/logo-bonus.svg";

export function Header(props){

    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo}  src={logo} alt="logo" />
            </div>
            <div className={styles.scoreGroup}>
                <span className={styles.scoreGroup__text}>SCORE</span>
                <span className={styles.scoreGroup__score}>{props.score}</span>
            </div>
        </header>
    )
}