import React from "react"
import { View, StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

export function SuccessMessage(props) {
  if (props) {
    return (
      <View style={styles.successMessage}>
        <View>
          <Text style={{ color: "white" }}>{props.title}</Text>
          <Icon name="md-happy" size={22} />
        </View>
      </View>
    )
  } else {
    return <></>
  }
}

export function WarningMessage(props) {
  if (props) {
    return (
      <View style={styles.warningMessage}>
        <View>
          <Text style={{ color: "black" }}>{props.title}</Text>
        </View>
      </View>
    )
  } else {
    return <></>
  }
}

const styles = StyleSheet.create({
  successMessage: {
    backgroundColor: "#c3e6cb",
    margin: 10,
    padding: 7,
    borderRadius: 5,
    alignItems: "flex-end"
  },
  warningMessage: {
    backgroundColor: "#b8daff",
    margin: 10,
    padding: 7,
    borderRadius: 5,
    alignItems: "flex-end"
  }
})
