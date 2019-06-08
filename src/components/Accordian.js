import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default class Accordian extends Component {
  const Accordian = (props) => {
    state = { 
      expanded: false,
    };

    accordianHandler = () => {
      this.setState({expanded : !this.state.expanded});
    };

    return (
      <View style={styles.accordianCell}>
        <TouchableOpacity onPress={() => this.accordianHandler()}>
          <Text style={styles.accordianLabelText}>{props.accordianLabel}</Text>
          <Image source={require("../../assets/chevron-down.png")} style={styles.iconImage}/>
        </TouchableOpacity>
      
      </View>
    );
  }

  const styles = StyleSheet.create({
    accordianCell: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 20,
      paddingLeft: 10,
      height: 40,
      borderBottomWidth: 1,
      borderColor: "#979797",
      height: 30
    },
    accordianLabelText: {
      color: "black"
    },
    iconImage:{
      marginRight: 10,
      marginTop: -10,
      marginLeft: "auto"
    }
  });
}

export default Accordian;