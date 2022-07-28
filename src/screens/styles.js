import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("screen");


const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: "#102027",
        height: height,
        marginTop: 25,
    },
    container: {
        flexDirection: "row"
    },
    title: {
        color: "#DB9005",
        fontSize: 30
    },
    titleTask: {
        color: "#DB9005",
        fontSize: 30,

    },
    item: {
        backgroundColor: "#102027",
        paddingVertical: 5,


    },
    yapilacakSeyler: {
        color: "white",
        backgroundColor: "#7DA453",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
    },

    searchInput: {
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        margin: 10,
        color: 'white',
    },
    buttonContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#808080',
        marginHorizontal: 20,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    inputContainer: {
        backgroundColor: '#37474F',
        paddingBottom: 10,
        borderRadius: 10,
        position: "absolute",
        marginTop: 500,
        width: "100%"

    },
});

export default styles;