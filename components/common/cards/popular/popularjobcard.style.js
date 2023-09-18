import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

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
  textContainer: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    width: '40%',
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
    marginBottom: SIZES.small / 1.5,
    marginLeft: 20,
    borderRadius: SIZES.medium,
  },
  kawsDollContainer: {
    flexDirection: "column",
    width: "65%",
    height: '100%',
    borderRadius: SIZES.medium,
    justifyContent: "flex-end",
    borderRadius: SIZES.xxLarge,
  },
  kawsDollImg: {
    width: "80%",
    height: "115%",
    // justifyContent: "flex-start",
    // alignItems: "flex-end",
    // backgroundColor: "red",
    // top: "-9%",
  },
  headerText: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "20%", // 80% left
    paddingTop: 5,
  },
  mainText: {
    fontFamily: FONT.bold,
    width: "100%",
    height: "50%", // 30% left
    fontSize: 18,
  },
  subText: {
    fontFamily: FONT.light,
    width: "100%",
    height: "30%", // 0% left
    fontSize: SIZES.small,
  },
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    backgroundColor: activeJobType == item ? COLORS.white : COLORS.black,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.black : COLORS.black,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.black : COLORS.white,
  }),
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    paddingBottom: SIZES.medium,
  },
});

export default styles;
