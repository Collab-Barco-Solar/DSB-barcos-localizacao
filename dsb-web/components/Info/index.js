import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styles from '../../styles/components/Info.module.css'

export function Info(){

    const {
        positions
    } = useContext(GlobalContext)

    return(
        <div className={styles.container}>
            <h1>Dados dos barcos</h1>
            <div className={styles.info}>
                {
                    positions.length > 0 &&
                    positions?.map((b, i) => {
                        return (
                            <h2 className={styles.infoItem} key={i}>
                                {i + 1}º {b.name} | {(b.speed).toFixed(3)} | {b.time}
                            </h2>
                        )
                    })
                }
            </div>
        </div>
    )
}