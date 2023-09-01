import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  model: {
    backgroundColor: "#F6F6F6",
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  imageRow: {
    // paddingBottom: 20,
    padding: 10,
    margin: 5,
    flexDirection: "row",
    // backgroundColor: "red",
    height: "15%", //30% Left
    // width: "100%"
  },
  prodRowImage: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    borderWidth: 1,
    width: "20%",
    marginHorizontal: 10,
    height: "100%" 
  },
  productImage: {
    // paddingBottom: 100,
    width: "80%",
    height: "80%",
    top: "12%",
    justifyContent:"center",
    alignSelf: "center",
  },
  namePrice: {
    marginHorizontal: 10,
  },
  desc: {
    marginHorizontal: 10,
  }
});

export default styles;
