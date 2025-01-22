import { StyleSheet } from "react-native";
import { SH, SW, SF } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

const styles = StyleSheet.create({

  ButtonContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: SW(25)
  },
  button: {
    width: SW(150),
    height: SH(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: SH(10),
    borderRadius: 8,
    marginHorizontal: SW(6)
  },
  activeButton: {
    backgroundColor: Colors.theme_color,
  },
  inactiveButton: {
    backgroundColor: 'white',
  },
  activeText: {
    color: 'white',
    fontFamily: "Poppins-Regular",
    fontSize: SF(15)
  },
  inactiveText: {
    color: 'black',
    fontFamily: "Poppins-Regular",
    fontSize: SF(15)
  },
  card: {
    paddingVertical: SH(10),
    paddingHorizontal: SW(10),
    marginVertical: SH(10),
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  dpImage: {
    width:SW(50), 
    height:SH(50),
    borderRadius: 25,
    marginRight:SW(10),
  },
  cardContent: {
    flexDirection: "column", 
  },
  userId: {
    fontWeight: "bold",
    fontSize:SF(14),
  },
  name: {
    fontSize:SF(16),
    color: "black",
  },
  status: {
    fontSize:SF(14),
    color: "gray",
    marginTop:SH(5),
  },
  Statusbutton: {
    backgroundColor: Colors.light_theme,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor:Colors.theme_color,
    borderWidth:1
  },
  StatusbuttonText: {
    color:Colors.dark,
    fontFamily:"Poppins-Medium"
  },
  
});

export default styles;
