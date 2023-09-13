import { StyleSheet } from "react-native";

import { FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // marginHorizontal: 10,
  },
  model: {
    backgroundColor: "#F6F6F6",
    flex: 1,
    height: "50%", //50% Left
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  imageRow: {
    padding: 8,
    justifyContent: "space-evenly",
    flexDirection: "row",
    height: "15%", //30% Left
    width: "100%"
  },
  prodRowImage: {
    backgroundColor: "#F6F6F6",
    borderRadius: 7,
    borderWidth: 1,
    width: "20%",
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
    width: "80%",
    marginLeft: 20,
  },
  desc: {
    width: "88%",
    marginLeft: 20,
    fontSize: 15,
    fontFamily: FONT.regular,
  },
  productName: {
    fontFamily: FONT.bold,
    fontSize: 18,
  },
  productPrice: {
    fontFamily: FONT.medium,
    fontSize: 18,
  },
  buyBtn: {
    flexDirection: 'column',
    marginTop: 15,
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    height: 50,
    backgroundColor: "black",
    borderRadius: 5,
    marginBottom: 20,
  },
  buyText: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default styles;
