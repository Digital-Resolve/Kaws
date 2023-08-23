import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.light,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.black,
    marginTop: 5,
  },
  searchContainer: {
    justifyContent: "Center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.medium,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.gray2,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xLarge,
    height: "70%",
    marginBottom: 20,
    marginTop: 5,
  },
  searchInput: {
    fontFamily: FONT.light,
    justifyContent: "flex-start",
    width: "91%",
    height: "100%",
    // paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "9%",
    height: "50%",
    color: COLORS.black,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
