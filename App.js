//This is an example code to Add Search Bar Filter on Listview//
//import react in our code.
import React, { Component } from "react";
import SmartGuidance from "./src/components/SmartGuidanceWidget"; 
import {Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Alert} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SmartGuidance />
    )
  }
}

const styles = StyleSheet.create({
});