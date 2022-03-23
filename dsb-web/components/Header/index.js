import styles from '../../styles/components/Header.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';

export function Header(){
    const {
        voltaAtual,
        voltasTotais,
        tempo,
        formatNumber,
    } = useContext(GlobalContext);

    return(
        <div className={styles.container}>
            <div className={styles.logoArea}>
                <p>Criado por: </p>
                <img 
                    src="logo.png"
                    alt="Logo Solares"
                    height="60%"
                    className={styles.logo}
                />    
            </div>
            
            <h2>DSB 2022</h2>
        </div>
    )
}