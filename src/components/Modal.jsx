import styles from "../stylesheets/Modal.module.scss";
import { useRef, useState } from "react";

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

        if(e.target.classList.value.includes('modalGroup__icon') || e.target.classList.value.includes('modalGroup__icon_path') ||
        (e.target.classList.value.includes('showModal') && isVisible === true)){
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
                <svg className={styles.modalGroup__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path className={styles.modalGroup__icon_path} d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
            </div>
        </>
    );
}