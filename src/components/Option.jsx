import styles from "../stylesheets/Option.module.scss";

export function Option(props){
    return(
        <div className={`${styles.option} ${styles[props.option]}`}>
            <div className={`${styles.wrapper}`}>
                <span className={`${styles.wrapper__item} `}></span>
            </div>
            <span className={styles.picked}></span>
        </div>
    );
}