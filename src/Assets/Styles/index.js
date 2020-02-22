import { StyleSheet } from "react-native"
import Fonts from "../../utils/Fonts"
export const RegesterStyles = StyleSheet.create({
  container: {
    // backgroundColor: 'gray',
    flex: 1,
    padding: 10
  },
  formContainer: {
    padding: 10,
    flex: 1
  },
  header: {
    padding: 10,
    flex: 0.8,
    alignItems: "center"
  },
  about: {
    padding: 5,
    flex: 1
    // backgroundColor: "gray"
  },
  headerTitle: {
    fontSize: 18,
    color: "#666",
    fontFamily: Fonts.Cairo,
    alignSelf: "flex-end"
  },
  headerDesc: {
    fontSize: 16
  },
  form: {
    // backgroundColor: "gray",
    flex: 1
    // padding: 5
  },
  formBody: {
    flex: 1
  },
  inputHandler: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderBottomColor: "skyblue",
    borderBottomWidth: 2,
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    margin: 0,
    borderRadius: 10,
    // backgroundColor: "green",
    flex: 1
  },
  button: {
    margin: 10,
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 100
  },
  options: {
    fontSize: 14,
    color: "gray"
  },
  log: {
    color: "blue"
  },
  menu: {
    // backgroundColor: 'green',
    padding: 15
  }
})

export const LoginStyle = StyleSheet.create({
  containerLogin: {
    padding: 50,
    flex: 1,
    marginTop: 100
  },
  loginForm: {
    flex: 1,
    padding: 10
  },
  inputlogin: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    borderRadius: 10
  },
  buttonlogin: {
    margin: 10,
    marginTop: 15,
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 100
  },
  login: {
    padding: 5,
    fontSize: 17,
    color: "#DDD"
  }
})

export const RegistStyle = StyleSheet.create({
  registContiner: {
    padding: 50,
    flex: 1
  },
  form: {
    flex: 1,
    padding: 5,
    margin: 5,
    backgroundColor: "#f1fcfc"
  },
  formRegist: {},
  inputRegist: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    borderRadius: 10
  },
  buttonRegist: {
    margin: 10,
    marginTop: 15,
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 100
  },
  login: {
    // padding: ,
    fontSize: 17,
    color: "#DDD"
  },
  inputRegist: {
    borderWidth: 1,
    borderColor: "skyblue",
    margin: 5,
    borderRadius: 10
  },
  buttonRegist: {
    margin: 10,
    marginTop: 15,
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 100
  }
})

export const TeacherStyle = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  form: {
    flex: 1,
    justifyContent: "center"
  },
  buttonGo: {
    margin: 10,
    marginTop: 15,
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 100
  },
  login: {
    fontSize: 17,
    color: "#DDD"
  }
})

export const AddstudentStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  formContainer: {
    padding: 10,
    flex: 1
  }
})

export const KindergartenFile = StyleSheet.create({
  DataKindergartenFile: {
    fontSize: 16
  },
  container: {
    padding: 10,
    backgroundColor: "#79bac1",
    borderRadius: 10
  }
})

export const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  profileInfo: {
    padding: 2,
    borderBottomColor: "#a9a9a9",
    borderBottomWidth: 1,
    paddingBottom: 20,
    margin: 10,
    flexDirection: "row"
  },
  profileImage: {
    // flex: 1,
    padding: 5,
    width: 100,
    height: 100
  },
  image: {
    flex: 1,
    backgroundColor: "skyblue",
    borderRadius: 50,
    overflow: "hidden"
  },
  profileName: {
    // backgroundColor: 'green',
    flex: 1,
    padding: 10,
    justifyContent: "center"
  },
  profileSetting: {
    margin: 10
  },
  profileInfoItem: {
    backgroundColor: "white",
    zIndex: -10,
    padding: 5,
    marginBottom: 5,
    elevation: 1,
    flexDirection: "row"
  },
  title: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: 'gray',
    padding: 10,
    alignItems: "center"
  },
  tools: {
    // backgroundColor: 'green',
    padding: 10,
    alignItems: "center"
  },
  modal: {
    backgroundColor: "white",
    padding: 10
  },
  updateFields: {
    // backgroundColor: 'blue',
    alignItems: "center",
    padding: 10
  },
  modalTools: {
    backgroundColor: "white",
    flexDirection: "row",
    // alignItems: 'center',
    padding: 10
  }
})

export const ProfileStudentStyle = StyleSheet.create({
  container: {
    padding: 1,
    flexDirection: "row",
    margin: 10
  },
  buttonRate: {
    flex: 1,
    backgroundColor: "green",
    margin: 10,
    marginTop: 15,
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 100
  },
  rate: {
    backgroundColor: "#efefef55",
    padding: 15,
    elevation: 1
  },
  Circle: {
    position: "absolute",
    bottom: 40,
    right: 25,
    height: 55,
    width: 55,
    borderRadius: 27.5,
    backgroundColor: "white",
    elevation: 2,
    alignItems: "center",
    justifyContent: "center"
  }
})
export const EvaluationOfPeriodsStyle = StyleSheet.create({
  borderTextarea: {
    borderRadius: 10
  }
})

export const TeacherHomeStyle = StyleSheet.create({
  container: {
    // backgroundColor: 'gray',
    flex: 1,
    padding: 10
  },
  heder: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 18,
    color: "#5b5656"
  },
  Students: {
    backgroundColor: "white",
    height: 50,
    padding: 10,
    marginTop: 10,
    elevation: 1
  },
  buttonDur: {
    backgroundColor: "#f0efef",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    margin: 3
  },
  button1: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#79bac1",
    color: "white"
  },
  button2: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#2a7886"
  },
  textButtonColor: {
    color: "white"
  }
})
