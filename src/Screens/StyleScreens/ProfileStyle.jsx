import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
import { SH, SW, SF } from "../../utils/Dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: SH(10)
    },
    righticons: {
        flexDirection: 'row',
        alignItems: "center"
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
        paddingVertical: SH(5),
        paddingHorizontal: SW(10),
        borderRadius: 5,
        fontFamily: "Poppins-Regular",
        fontSize: SF(13),
        marginLeft: SW(280),
        marginBottom: SH(5),
        textAlign: "center",
        marginHorizontal: SW(20),
    },
    image: {
        width:SW(140),
        height:SH(150),
        resizeMode: 'cover',
        borderRadius: 100
    },
    cameraIcon: {
        position: "absolute",
        top: SH(250)
    },
    smallHeader: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    buttoncontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: SW(10),
        marginVertical: SH(5),
        alignItems: "center"
    },
    name: {
        textAlign: "center",
        color: Colors.dark,
        fontFamily: "Poppins-Bold",
        fontSize: SF(15)
    },
    userDeatil: {
        paddingHorizontal: SW(10),
        borderRadius: 10,
    },
    topContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: SH(10),
        paddingHorizontal: SW(10),
        marginVertical: SH(15),
        marginHorizontal: SW(7),
        borderRadius: 10,
        elevation: 10,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
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
    contentContainer: {
        marginHorizontal: SW(10),
        marginVertical: SH(10)
    },
    logotext: {
        color: Colors.theme_color,
        fontSize: SF(12),
        fontFamily: "Poppins-Regular",
    },
    activeTab: {
        backgroundColor: Colors.theme_color,
        borderRadius: 5,
    },
    activeTabText: {
        color: "white",
    },
    IconsButton: {
        flexDirection: "column",
        alignItems: "center",
        paddingVertical: SH(5),
        paddingHorizontal: SW(10),
        borderWidth: 1,
        borderColor: Colors.theme_color,
        borderRadius: 10,
        marginHorizontal: SW(5),
        backgroundColor: "transparent",
    },
    logotext: {
        fontSize: SF(12),
        color: Colors.theme_color,
    },
    IconFlex: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: SH(10),
    },

    text: {
        fontFamily: "Poppins-Regular",
        fontSize: SF(15),
    },
    Gallerytext: {
        fontFamily: "Poppins-Regular",
        fontSize: SF(10),
        color: Colors.theme_color
    },
    detail: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailText: {
        fontFamily: "Poppins-Bold",
        fontSize: SF(15),
        color: Colors.theme_color
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: SW(15),
        paddingVertical: SW(15),
        // alignItems: 'center',
    },
    modalTitle: {
        fontSize: SF(18),
        fontFamily: "Poppins-Medium",
        marginBottom: SH(20),
        color: Colors.theme_color,
    },

    gallery: {
        borderColor: Colors.theme_color,
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: SH(7),
        marginRight: SW(217),
        alignItems: "center"
    },
    input: {
        height: SH(40),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: SH(10),
        paddingLeft: SW(10),
        borderRadius: 5,
        backgroundColor: 'white',
        color: Colors.dark,
    },
    DobInput: {
        height: SH(40),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: SH(10),
        paddingLeft: SW(10),
        borderRadius: 5,
        backgroundColor: 'white',
        color: Colors.dark,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: SW(10)
    },
    imagePlaceholder: {
        color: Colors.gray
    },

    headText: {
        color: Colors.theme_color,
        fontSize: SF(15),
        fontFamily: "Poppins-Bold",
        marginHorizontal: SW(10),
        marginLeft: 0,
        marginVertical: SH(10)
    },
    button: {
        backgroundColor: Colors.theme_color,
        marginHorizontal: SW(90),
        marginHorizontal: SW(20),
        marginVertical: SH(20),
        paddingHorizontal: SW(10),
        paddingVertical: SH(5),
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
        paddingHorizontal: SW(7),
        paddingVertical: SH(7)
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between", alignItems: "center"
    },
    dropdownContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    dropdown: {
        height: SH(25),
        width: SW(130),
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: SW(10),
        borderRadius: 5,
        backgroundColor: 'white',
        color: Colors.dark,
        marginHorizontal: SW(5)
    },
    loading: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: SH(300)
    }

})
export default styles