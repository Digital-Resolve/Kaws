import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: 'row',
    borderRadius: SIZES.xxLarge,
    width: '100%',
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray,
    
  },
  textMain: {
    backgroundColor: 'red',
    flexDirection: 'column',
    width: '40%',
    justifyContent: "center",
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
    marginLeft: 10
  },
  kawsDoll: {
    // flex: 1,
    // display: "flex",
    flexDirection: "column",
    width: "60%",
    height: '100%',
    // paddingBottom: 15,
    // backgroundColor: COLORS.gray2,
    borderRadius: SIZES.medium,
    justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
  kawsDollImg: {
    left: "-15%",
    // flexDirection: "row",
    // backgroundColor: "blue",
    // bottom: "7%",
    width: "100%",
    height: "120%",
    justifyContent: "flex-end",
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
});

export default styles;
