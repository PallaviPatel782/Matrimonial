import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
import { SH, SW, SF } from "../../utils/Dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingTop: SH(25),
    paddingHorizontal:SW(6)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SW(10),
    paddingVertical:SH(10),
    backgroundColor: Colors.light,
    paddingLeft:0
  },
 
  headerText: {
    color: Colors.theme_color,
    fontSize: SF(15),
    fontFamily: "Poppins-Regular",
    marginHorizontal: SW(10)
  },

  profileSection: {
    alignItems: 'center',
    marginBottom:SH(20),
    flexDirection: "row",
    marginHorizontal: SW(10),
    marginVertical:SH(5)
  },
  profileImage: {
    width: SW(120),
    height: SH(120),
    resizeMode: "contain",
    marginRight: SW(10)
  },
  name: {
    fontSize: SF(15),
    fontFamily: "Poppins-Bold"
  },
  surname: {
    fontSize: SF(12),
    fontFamily: "Poppins-regular"
  },
  city: {
    fontSize: SF(12),
    fontFamily: "Poppins-regular",
    marginRight: SW(5)
  },
  rating: {
    fontSize: SF(13),
    marginVertical:SH(10),
  },
  FlexContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginBottom: SH(15),
  },
  sectionTitle: {
    fontSize: SF(15),
    fontFamily: 'Poppins-Bold',
    marginBottom:SH(8),
  },
  text: {
    fontSize: SF(13),
    fontFamily: 'Poppins-Regular',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: SH(2),
  },

  serviceContainer: {
    backgroundColor: Colors.light,
    borderRadius: 50,
    elevation: 5,
    paddingHorizontal: SW(5),
    paddingVertical:SH(3),
    marginHorizontal: SW(5),
    marginVertical:SH(5),
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  serviceText: {
    fontSize: SF(11),
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: Colors.dark,
  },
  ratingCount: {
    marginRight: SW(260),
    marginVertical: SH(5)
  },
  reviewRating: {
    marginLeft: SW(210)
  },
  reviewContainer: {
    marginBottom: SH(15),
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: SW(6),
    marginVertical:0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '98%',
    paddingHorizontal: SW(10),
    paddingVertical:SH(2)
  },
  reviewName: {
    fontSize: SF(16),
    fontFamily: 'Poppins-Medium',
  },
  reviewStatus: {
    fontSize: SF(13),
    color: 'green',
    fontFamily: "Poppins-Regular",
  },
  reviewDate: {
    fontSize: SF(13),
    color: 'gray',
    marginLeft: SW(75)
  },
  reviewText: {
    fontSize: SF(13),
    marginVertical: SH(5),
    fontFamily: "Poppins-Regular",
  },
  helpfulText: {
    fontSize: SF(13),
    color: 'gray',
    fontFamily: "Poppins-Regular",
  },
  images: {
    width: SW(100),
    height: SH(100),
    marginHorizontal: SW(5),
    marginVertical:SH(5),
    resizeMode: "contain"
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SW(10),
    marginVertical: SH(15)
  },
  sharecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginVertical: SH(10)
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: "row"
  },
  Button: {
    backgroundColor: Colors.theme_color,
    paddingHorizontal: SW(20),
    paddingVertical: SH(3),
    borderRadius: 8,
    alignItems: "center",
    width:SW(90)
  },
  buttonText: {
    color: Colors.light,
    fontFamily: "Poppins-Regular",
    fontSize: SF(10),
    marginLeft: SW(2)
  },
  iconText: {
    marginHorizontal: SW(5),
    fontFamily: "Poppins-Regular",
  },
  contentContainer:{
    marginHorizontal:SW(10),
    marginVertical:SH(10)
  },
  websiteIcon:{
    width:SW(30),
    height:SH(30)
  },
  Bottomimage:{
    width:"100%",
    height:SH(180),
    resizeMode:"cover",
    marginBottom:SH(10)
  },
  ReviewPost:{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center"
  },
  postReviewButton:{
    paddingHorizontal:SW(10),
    backgroundColor:Colors.theme_color,
    borderRadius:5,
    paddingVertical:SH(4)
  },
  postReviewText:{
    fontSize:SF(13),
    color:Colors.light,
    fontFamily:"poppins-Regular"

  },
  viewMoreButton:{
    paddingHorizontal:SW(4),
    backgroundColor:Colors.theme_color,
    borderRadius:5,
    marginHorizontal:SW(100),
    paddingVertical:SW(3),
  },
  viewMoreText:{
    fontSize:SF(13),
    color:Colors.light,
    fontFamily:"poppins-Regular",
    textAlign:"center"
  },
  imageContainer: {
    flexDirection: 'column',
    marginTop:SH(10),
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:SH(2),
  },
  image: {
    width:'50%',
    height:SH(100),
    marginBottom:SH(1),
    marginRight:SW(2),
    borderRadius:3
  },
  
});
export default styles;