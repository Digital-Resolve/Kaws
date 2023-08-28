import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
