import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    status: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 30,
    },
    buttonActive: {
        backgroundColor: "#228B22",
        width: 300,
        height: 300,
        borderRadius: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDisabled: {
        backgroundColor: "#B22222",
        width: 300,
        height: 300,
        borderRadius: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#fff",
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        marginTop: 15,
    },
    separator: {
        marginVertical: 8,
    },
    input: {
        marginTop: 15,
        width: 300,
        height: 50,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 25,
        fontSize: 20,
        alignItems: "center",
    },
    dropdownStyle: {
        width: 300,
        height: 420,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        alignSelf: "center",
        flex: 1,
    },
    dropdown_2: {
        alignSelf: 'center',
        width: 300,
        marginTop: 30,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
      },
      dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        textAlignVertical: 'center',
      },
      dropdown_2_dropdown: {
        width: 300,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
      },
})

export default styles;