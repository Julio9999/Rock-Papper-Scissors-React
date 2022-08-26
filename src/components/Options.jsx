import styles from "../stylesheets/Options.module.scss";
import { Option } from "../components/Option";
import { useEffect, useState } from "react";

export function Options(){
    const items = [{element:"scissors", listen: true}, {element:"spock", listen:true}, {element:"papper", listen:true}, {element:"lizard", listen:true}, {element:"rock", listen:true}]
    const [options, setOptions] = useState(items);
    const [background, setBackground] = useState(true);
    const [result, setResult] = useState(false);

    function handleClick(e){
        setOptions([{element:e.currentTarget.id, listen:false}]);
        setBackground(false);

        setTimeout(()=>{
            const number = Math.floor(Math.random()*(4+1));
            setOptions(current => current.concat({element: items[number].element, listen: false}));
            setTimeout(()=>{
                setResult(true);
            }, 300)
        },1000)
    }

    function restart (){
        setOptions(items);
        setBackground(true);
    }

    function calc (el1,el2){
        console.log(el1, el2);
    }

    useEffect(()=>{
        if(options.length === 2){
            calc(options[0].element, options[1].element);
        }
    }, [options])


    return(
        <>
            <section className={background ? styles.options: `${styles.options} ${styles.noBackground}`}>
                {
                    options.map((option,index) => <Option key={index} option={option} handleClick={handleClick} />)
                }

            </section>
            <div className={result ? styles.result: ''}>
                You Lose
                <button onClick={restart}>Play Again</button>
            </div>
        </>
    );
}