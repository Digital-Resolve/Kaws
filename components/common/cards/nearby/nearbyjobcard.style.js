import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  item: {
    // backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 280,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    // borderColor: "#FDFDFD",
    
  },
  itemRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  itemImage:{
    // backgroundColor:  "green",
    width: "100%",
    height: "70%",
    // marginTop: 5,
  },
  productImage: {
    paddingBottom: 100,
    width: "100%",
    height: "100%",
    justifyContent:"flex-end",
  },
  itemName: {
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
    width: "100%",
    marginTop: 5,
  },
  itemPrice: {
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "15%",
    // marginTop: 5,
  },
  itemDescription: {
    fontFamily: FONT.regular,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default styles;
