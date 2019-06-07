import React, { Component } from 'react';
import { StyleSheet, View, Text,} from 'react-native';

const SmartGuidanceWidgetHeader = (props) => {
  return (
    <View style={styles.sgheader}>
      <Text style={styles.labelColor}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sgheader: {
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    backgroundColor: "#008296",
    height: 40,
    justifyContent: 'center'
  },
  labelColor: {
    color: "white",
    fontWeight: "bold"
  }
});

export default SmartGuidanceWidgetHeader;