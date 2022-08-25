import styles from "../stylesheets/Options.module.scss";
import { Option } from "../components/Option";

export function Options(){
    return(
        <section className={styles.options}>
            <Option option="scissors" />
            <Option option="spock" />
            <Option option="papper" />
            <Option option="lizard" />
            <Option option="rock" />
        </section>
    );
}