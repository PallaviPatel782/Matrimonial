import { StyleSheet } from "react-native";
import { SH, SW, SF } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingTop:SW(20)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SW(10),
    paddingLeft:0
  },
  righticons: {
    flexDirection: 'row',
  },
  headerText: {
    color: Colors.theme_color,
    fontSize: SF(15),
    fontFamily: "Poppins-Regular"
  },
  topContainer: {
    marginBottom: SH(20)
  },

  sliderCotainer: {
    height: SH(600),
    width: "100%",
    marginVertical: -SH(130)
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover'
  },
  dot: {
    backgroundColor: Colors.light,
  },
  activeDot: {
    backgroundColor: Colors.light,
  },
  flexContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SW(10),
    borderColor: Colors.gray,
    borderWidth: 1,
    marginTop: SH(10),
    borderRadius:10
  },
  flexContainer: {
    padding: SW(10),
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius:10
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  text: {
    fontSize: SF(13),
    fontFamily: "Poppins-Regular"
  },
  toptext: {
    fontSize: SF(10),
    fontFamily: "Poppins-Regular"
  },
  Idtext: {
    fontSize: SF(12),
    fontFamily: "Poppins-Bold"
  },
  flexContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sharecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: SW(3),
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: SF(12),
    color: Colors.dark,
    marginTop: SH(5),
  },
  interestedButton: {
    backgroundColor: Colors.theme_color,
    paddingHorizontal: SH(20),
    paddingVertical: SH(8),
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.light,
    fontFamily: "Poppins-Medium",
    fontSize: SF(13),
  },
  HeadingText: {
    fontFamily: "Poppins-Bold",
    fontSize: SF(15)
  },
  ButtonText: {
    color: Colors.light,
    fontFamily: "Poppins-Bold",
    fontSize: SF(12),
    textAlign: "center",
    backgroundColor: Colors.theme_color,
    paddingVertical: SH(4),
    margin: SH(10),
    borderRadius: 10,
    marginHorizontal: SW(90)
  },
  smallImage: {
    width: SW(80),
    height: SH(85),
    resizeMode: "contain",
    borderRadius: 50
  },
  flexContainer3: {
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius:10,
    marginVertical: SH(15),
    padding: SW(10)
  },
  flexContainer4: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    flex: 1,
  },
  icon: {
    fontSize: SF(20),
  },
  checkIcon: {
    color: 'green',
  },
  crossIcon: {
    color: 'red',
  },
  flexContainer5: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SW(10)
  },
  bottomImage: {
    width: "100%",
    height: SH(200)
  }
});

export default styles;
