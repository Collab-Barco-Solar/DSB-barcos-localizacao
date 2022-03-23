import React from "react"
import { View, Image, Text} from "react-native"
import styles from "./styles"

import logo from "../../assets/logo.png"

export function Header(){
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.title}>DSB 2022</Text>
        </View>
    )
}