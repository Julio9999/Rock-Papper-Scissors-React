import styles from "../stylesheets/Option.module.scss";

export function Option(props) {

    if (props.option.listen) {
        return (
            <div className={`${styles.option} ${styles[props.option.element]}`} id={props.option.element} onClick={props.handleClick} >
                <div className={`${styles.wrapper}`}>
                    <span className={`${styles.wrapper__item}`}></span>
                </div>
                <span className={styles.picked}></span>
            </div>
        );
    } else {
        return(
            <div className={`${styles.option} ${styles[props.option.element]}`} id={props.option.element} beats={props.option.beats}>
                <div className={`${styles.wrapper}`}>
                    <span className={`${styles.wrapper__item} `}></span>
                </div>
                <span className={styles.picked}></span>
            </div>
        );
    }
}
