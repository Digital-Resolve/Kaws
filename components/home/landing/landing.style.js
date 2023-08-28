import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    borderRadius: SIZES.xxLarge,
    width: '100%',
    height: 180,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: SIZES.small,
    shadowOpacity: 1,
    marginBottom: 20,
  },
});

export default styles;
