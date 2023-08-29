import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    borderRadius: SIZES.xxLarge,
    width: '100%',
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#D9D9D9",
    // shadowColor: "black",
    // shadowRadius: 1,
    // shadowOffset: SIZES.small,
    // shadowOpacity: 1,
    marginBottom: 20,
  },
  logoContainer:{
    marginTop: 30,
  },
  container2: {
    // display: "flex",
    flexDirection: 'column',
    borderRadius: SIZES.xLarge,
    width: '100%',
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#D9D9D9",
    // shadowColor: "black",
    // shadowRadius: 1,
    // shadowOffset: SIZES.small,
    // shadowOpacity: 1,
    // marginBottom: 20,
  },
  signInBtn: {
    marginVertical: 10,
    marginRight: 1,
    flexDirection: 'row',
    // color: 'black',
    width: "80%",
    height: "15%",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  signInBtn2: {
    marginVertical: 10,
    marginRight: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    width: "80%",
    height: "15%",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
 
  },
  textContainer: {
    // paddingTop: 20,
    flexDirection: "row",
  },
  header: {
    fontFamily: FONT.bold,
  },
  subHeader: {
    fontFamily: FONT.medium,
  },
  textWhite: {
    color: 'white',
    fontFamily: FONT.regular,
  },
  textBlack: {
    color: 'black',
    fontFamily: FONT.regular,
  },
});

export default styles;
