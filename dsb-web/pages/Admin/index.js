import { Header } from "../../components/Header";
import dynamic from "next/dynamic";
import {
    FiPlay,
    FiPause,
    FiSquare,
    FiPlus,
    FiMinus,
    FiDownload,
    FiSettings,
    FiLogOut,
    FiAlertTriangle,
    FiPower
} from "react-icons/fi";
import styles from '../../styles/pages/Admin.module.css';
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Swal from 'sweetalert2'
import { useSession, signIn, signOut } from "next-auth/client"
import socket from "../../services/socketio";
import { Info } from "../../components/Info";

const Map = dynamic(() => import("../../components/Map"), {
    ssr: false
})


export default function Admin() {
    const {
        gps,
    } = useContext(GlobalContext)

    const [session] = useSession();
    const [gpsVector, setGpsVector] = useState([]);

    useEffect(() => {
        socket.on('info', (data) => {
            vectorData.push(data);
            //pega as ultimas 60 posições do vectorData e salva no vectorDataMini
            if (vectorData.length > 60) {
                vectorDataMini = vectorData.slice(vectorData.length - 60, vectorData.length)
            }
            else {
                vectorDataMini = vectorData
            }
            // console.log(vectorDataMini);
            setInfo(data);
        });

        socket.on('allinfo', (data) => {
            vectorData = data;
        });

        socket.on('startSend', (status) => {
            setStartSend(status);
        })
    }, [])

    useEffect(() => {
        setGpsVector(gpsVector.concat(gps));
    }, [gps])

    function getSpeed(speed) {
        let speed_ = 0
        isNaN(speed) ? speed_ = 0 : speed_ = speed
        return parseFloat(speed_) * 1.94384
    }

    if (session) {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.mapa}>
                    <Map containerHeight={500} mapHeight="100%" />
                    <Info />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.containerButton}>
                <div className={styles.buttonLogin} onClick={() => signIn('google')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                        alt="Google Logo"
                        height="30px"
                    />
                    Entrar com o Google
                </div>
            </div>
        )
    }
}