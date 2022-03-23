import dynamic from "next/dynamic";
import { Header } from '../../components/Header';
import styles from '../../styles/pages/Home.module.css';

const Map = dynamic(() => import("../../components/Map"), {
    ssr: false
})

export default function Home() {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.mapa}>
                    <Map containerHeight={500} mapHeight="100%" />
                </div>
            </div>
        </>
    )
}