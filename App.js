//This is an example code to Add Search Bar Filter on Listview//
//import react in our code.
import React, { Component } from "react";
import SmartGuidance from "./src/components/SmartGuidanceWidget";
import SmartGuidanceWidgetHeader from "./src/components/SmartGuidanceWidgetHeader";
import Accordian from "./src/components/Accordian"; 
import {Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Alert} from 'react-native';

export default class App extends Component {
  render() {
    return (
			<View style={styles.container}>
      	<SmartGuidance />
				<SmartGuidanceWidgetHeader label="Top Questions" />
				<Accordian rightIcon={"./assets/chevron-down.png"} accordianLabel = "Is this a smart TV"/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});