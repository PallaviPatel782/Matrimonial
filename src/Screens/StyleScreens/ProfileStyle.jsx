import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
import { SH, SW, SF } from "../../utils/Dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        paddingTop: SW(20)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SW(10),
        paddingLeft: 0
    },

    headerText: {
        color: Colors.theme_color,
        fontSize: SF(15),
        fontFamily: "Poppins-Regular",
        margin: SW(5)
    },
    righticons: {
        flexDirection: 'row',
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    menuIcon: {
        width: SW(30),
        height: SH(30)
    },
    RepostText: {
        backgroundColor: Colors.theme_color,
        color: Colors.light,
        padding: SW(5),
        borderRadius: 10,
        paddingHorizontal: SW(15),
        fontFamily: "Poppins-Regular",
        fontSize: SF(13)
    },
    image: {
        width: "100%",
        height: SH(250)
    },
    smallimage: {
        width: SW(100),
        height: SH(100),
        borderRadius: 50,
    },
    smallHeader: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginTop: SH(200)
    },
    name: {
        textAlign: "center",
        color: Colors.dark,
        fontFamily: "Poppins-Bold",
        fontSize: SF(15)
    },
    userDeatil: {
        marginTop: SH(60),
        borderColor: Colors.gray,
        borderWidth: 1,
        padding: SW(10),
        borderRadius: 10
    },
    userData: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SH(10)
    },
    IconFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SH(10),
    },
    IconsButton: {
        alignItems: "center",
        marginVertical: SH(5),
        marginHorizontal: SW(15)

    },
    logotext: {
        color: Colors.theme_color,
        fontSize: SF(12),
        fontFamily: "Poppins-Regular",
    },
    icon: {
        borderColor: Colors.theme_color,
        borderWidth: 1,
        padding: SW(7),
        borderRadius: 50
    },
    Selectedicon: {
        backgroundColor: Colors.theme_color,
        padding: SW(7),
        borderRadius: 50,
    },
    text: {
        fontFamily: "Poppins-Regular",
        fontSize: SF(15)
    },
    detail: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: SH(20)
    },
    detailText: {
        fontFamily: "Poppins-Bold",
        fontSize: SF(15)
    },
    input: {
        height: SH(40),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: SH(10),
        paddingLeft: SW(10),
        borderRadius: 5,
        backgroundColor: 'white',
        color: Colors.dark
    },
    topinput: {
        height: SH(30),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: SH(10),
        left: SW(60),
        borderRadius: 5,
        backgroundColor: 'white',
        color: Colors.dark,
        width: SW(130),
        top: SH(40),
        position: "absolute",
        zIndex: 999,
        padding: SW(5)
    },
    headText: {
        fontFamily: "Poppins-Bold",
        fontSize: SF(15),
        marginVertical: SH(1)
    },
    button: {
        backgroundColor: Colors.theme_color,
        marginHorizontal: SW(90),
        margin: SW(20),
        padding: SW(10),
        borderRadius: 10
    },
    buttonText: {
        fontSize: SF(15),
        color: Colors.light,
        textAlign: "center"
    },
    inputHeading: {
        fontSize: SF(15),
        fontFamily: "Poppins-Medium",
        paddingVertical: SH(7)
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SW(7)
    },
    aboutInput: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: SH(10),
        paddingLeft: SW(10),
        paddingTop: 0,
        paddingBottom: SW(60),
        borderRadius: 5,
        backgroundColor: 'white',
        color: Colors.dark,
    },
    heightinput: {
        height: SH(40),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: SH(10),
        paddingLeft: SW(10),
        borderRadius: 5,
        backgroundColor: 'white',
        color: Colors.dark,
        paddingTop: SH(5)
    },
    contentContainer: {
        margin: SW(10)
    },

})
export default styles