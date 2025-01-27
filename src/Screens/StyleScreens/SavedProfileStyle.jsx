import { StyleSheet } from "react-native";
import { SH, SW, SF } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

const styles = StyleSheet.create({
 
  righticons: {
    flexDirection: 'row',
    alignItems:"center"
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: SW(10),
    paddingVertical:SH(10)
  },
  tabButton: {
    paddingVertical:SH(10),
    paddingHorizontal:SW(10),
    borderRadius: 5,
    backgroundColor: Colors.light,
    width: SW(100),
    height: SH(40),
    borderWidth: 1,
    borderColor: Colors.theme_color,
    marginRight: SW(10)
  },
  activeTab: {
    backgroundColor: Colors.theme_color,
  },
  tabText: {
    fontSize: SF(14),
    fontFamily: 'Poppins-Regular',
    textAlign: "center",
    color:Colors.theme_color
  },
  activeTabText: {
    color:Colors.light,
    fontSize: SF(14),
    fontFamily: 'Poppins-Regular',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: SW(3),
    paddingVertical:SH(6),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '48%',
    marginTop:SH(15)
  },
  image: {
    width: '100%',
    height: SH(150),
  },
  detailsContainer: {
    paddingHorizontal: SW(10),
    paddingVertical:SH(10)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:SH(5),
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:SH(5),
  },
  name: {
    fontSize: SF(14),
    fontFamily: 'Poppins-Bold',
    color:Colors.dark,
  },
  city: {
    fontSize: SF(14),
    fontFamily: 'Poppins-Regular',
   color:Colors.dark,
  },
  text: {
    fontSize: SF(13),
    fontFamily: 'Poppins-Regular',
    color:Colors.dark,
  },
  subcaste: {
    fontSize: SF(13),
    fontFamily: 'Poppins-Regular',
   color:Colors.dark,
    marginTop:SH(5),
  },
  ButtonContainer:{
    marginBottom:SH(10)
  }

});

export default styles;
