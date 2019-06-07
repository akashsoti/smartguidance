import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

const Accordian = (props) => {
  return (
    <View style={styles.a}>
      <Text style={styles.accordianLabelColor}>{props.accordianLabel}</Text>
      <Image source={require(props.rightIcon)} style={styles.iconImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  a: {
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 1
  },
  accordianLabelColor: {
    color: "black",
    fontWeight: "bold"
  },
  iconImage:{
    width: 100,
    height: 100
  }
});

export default Accordian;