//This is an example code to Add Search Bar Filter on Listview//
//import react in our code.
import React, { Component } from "react";
import SmartGuidance from "./src/components/SmartGuidanceWidget";
import PlaceDetail from "./src/components/PlaceDetail";
 
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
//import all the components we are going to use.



export default class App extends Component {
  state = {
		places: [],
		selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({key: Math.random(), name: placeName, image: {uri: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_397624165.jpg'}})
      };
    });
  };

	placeDeletedHandler = () => {
		this.setState(prevState => {
			return {
				places: prevState.places.filter(place => {
					return place.key !== prevState.selectedPlace.key;
				}),
				selectedPlace: null
			};
		});
	}

	modalClosedHandler = () => {
		this.setState({
			selectedPlace: null
		});
	}

	placeSeletedHandler = (key) => {
		this.setState(prevState =>{
			return {
				selectedPlace: prevState.places.find(place => {
					return place.key === key;
				})
			};
		});
	}

  render() {
    return (
      <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
      <SmartGuidance />
    );
  }
}

const styles = StyleSheet.create({
});