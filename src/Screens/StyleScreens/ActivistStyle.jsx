import { StyleSheet } from "react-native";
import { SH, SW, SF } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

const styles = StyleSheet.create({

  righticons: {
    flexDirection: 'row',
    alignItems:"center"
  },
  image: {
    width: SW(70),
    height: SH(73),
    resizeMode: "contain",
    borderRadius: 50
  },
  searchbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray,
    marginHorizontal: SW(10),
    borderRadius: 50,
    paddingHorizontal: SW(10),
    width: SW(350),
    justifyContent:"space-between"
  },
  card: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: SW(6),
    marginVertical:SH(6),
    shadowColor: Colors.dark,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '95%',
    marginHorizontal: SW(10),
    paddingHorizontal: SW(10),
    paddingVertical:SH(10),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardData: {
    flexDirection: "row"
  },
  text: {
    fontFamily: "Poppins-Bold",
    fontSize: SF(16)
  },
  smalltext: {
    fontFamily: "Poppins-Regular",
    fontSize: SF(12)
  },

  ButtonContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: SW(100),
    height: SH(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: SH(20),
    borderRadius: 8,
    marginHorizontal: SW(6),
    backgroundColor: Colors.theme_color
  },

  Button: {
    backgroundColor: Colors.theme_color,
    paddingHorizontal: SW(20),
    paddingVertical: SH(5),
    borderRadius: 50,
  },
  buttonText: {
    color: Colors.light,
    fontFamily: "Poppins-Regular",
    fontSize: SF(13),
  },
  mainContainer: {
    marginTop: SH(70),
    flex: 1
  },
  searchIcon: {
    marginHorizontal: SW(10)
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: SW(470)
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: SW(10),
    paddingVertical:SH(10),
    width: '80%',
    borderRadius: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  applyButton: {
    backgroundColor: Colors.theme_color,
    paddingHorizontal: SW(10),
    paddingVertical: SH(5),
    borderRadius: 5,
    marginHorizontal: SW(20),
    marginVertical: SH(20),
    borderRadius: 50
  },
  applyButtonText: {
    fontFamily: "Poppins-Medium",
    color: Colors.light,
    textAlign: "center",
    fontSize: SF(17)
  },
  circle: {
    width: SW(50),
    height: SH(50),
    borderRadius: 25,
    backgroundColor: Colors.theme_color,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: SH(300),
    left: SW(150)
  },
  label:{
    fontSize: SF(13),
    marginBottom: SH(5),
    fontFamily: "Poppins-Medium"
  }
 
});

export default styles;
