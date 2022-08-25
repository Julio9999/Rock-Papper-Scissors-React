import styles from "../stylesheets/Modal.module.scss";
import { useRef, useState } from "react";
import close from "../assets/icon-close.svg";

export function Modal(){
    const d = document,
    w = window,
    target = useRef(null),
    [isVisible, setIsVisible] = useState(false);


    document.addEventListener('click', (e)=>{
        if(e.target.classList.value.includes('showModal')){
            setIsVisible(true);
            if(d.documentElement.clientWidth < 1000){
                w.scrollTo(0,0);
                w.addEventListener('scroll', scrolloff);
            }
        }

        if(e.target.classList.value.includes('modalGroup__icon')){
            setIsVisible(false);
            if(d.documentElement.clientWidth < 1000){
                w.removeEventListener('scroll', scrolloff);
            }
        }
    })


    function scrolloff(){
        w.scrollTo(0,0);
    }

    return(
        <>
            <button className={styles.showModal} ref={target}>RULES</button>
            <div className={isVisible ? `${styles.modalGroup} ${styles.active}`: `${styles.modalGroup}`}>
                <span className={styles.modalGroup__heading}>RULES</span>
                <img className={styles.modalGroup__img} alt="modal-rules" src="https://raw.githubusercontent.com/Julio9999/rock-papper-scissors-master/main/images/image-rules-bonus.svg" />
                <img className={styles.modalGroup__icon} src={close} alt='close' />
            </div>
        </>
    );
}