import styles from "../stylesheets/Options.module.scss";
import { Option } from "../components/Option";
import { useEffect, useState } from "react";

export function Options(props) {
    const items = [{ element: "scissors", listen: true, beats: ['papper', 'lizard'], win: '' },
    { element: "spock", listen: true, beats: ['scissors', 'rock'], win: '' },
    { element: "papper", listen: true, beats: ['rock', 'spock'], win: '' },
    { element: "lizard", listen: true, beats: ['spock', 'papper'], win: '' },
    { element: "rock", listen: true, beats: ['lizard', 'scissors'], win: '' }]
    const [result, setResult] = useState('');
    const [options, setOptions] = useState(items);
    const [background, setBackground] = useState(true);
    const [active2, setActive2] = useState(false);

    function handleClick(e) {
        let beats = [];


        items.forEach(item => {
            if (item.element === e.currentTarget.id) {
                beats = item.beats;
            }
        })


        setOptions([{ element: e.currentTarget.id, listen: false, beats, win: '' }]);
        setBackground(false);

        setTimeout(() => {
            const number = Math.floor(Math.random() * (4 + 1));
            setOptions(current => current.concat({ element: items[number].element, listen: false, beats: items[number].beats, win: '' }));
        }, 1000)
    }

    function restart() {
        setResult('');
        setOptions(items);
        setBackground(true);
    }

    function calc(el1, el2) {
        let result = 'YOU LOSE';

        if (el1.element === el2.element) {
            result = 'TIE';
            return result;
        }

        el1.beats.forEach(el => {
            if (el === el2.element) {
                result = 'YOU WIN';
            }
        })

        props.handleScore(result);

        return result;
    }

    useEffect(() => {
        if (options.length === 2 && options[0].win === '') {
            setTimeout(() => {
                let option1 = options[0]
                let result = calc(options[0], options[1]);
                if (result === 'YOU WIN') {
                    option1.win = true;
                } else if (result === 'YOU LOSE') {
                    option1.win = false;
                } else {
                    option1.win = 'TIE';
                }
                setOptions([option1, options[1]])
                setResult(result);

                setTimeout(() => {
                    setActive2(true)
                }, 1000)
            }, 500)
        }
    })


    if (result === '') {
        return (

            <section className={background ? styles.options : `${styles.options} ${styles.noBackground}`}>
                {
                    options.map((option, index) => <Option key={index} index={index} clase={'option--' + (index + 1)} option={option} handleClick={handleClick} background={background} />)
                }
            </section>

        )
    } else {
        return (

            <section className={background ? styles.options :
                active2 ? `${styles.options} ${styles.noBackground} ${styles.active1} ${styles.active2}` :
            `${styles.options} ${styles.noBackground} ${styles.active1}`}>
                {
                    options.map((option, index) => <Option key={index} option={option} index={index} handleClick={handleClick} 
                    background={background} />)
                }
                <div className={styles["result-group"]}>
                    <span className={styles["result-group__text"]}>{result}</span>
                    <button className={styles["result-group__button"]} onClick={restart}>Play Again</button>
                </div>
            </section>

        )
    };
}