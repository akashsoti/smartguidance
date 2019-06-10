//This is an example code to Add Search Bar Filter on Listview//
//import react in our code.
import React, { Component } from "react";
import SmartGuidance from "./src/components/SmartGuidanceWidget";
import SmartGuidanceWidgetHeader from "./src/components/SmartGuidanceWidgetHeader";
import Accordian from "./src/components/Accordian";
import ModalTalk from "./src/components/ModalTalk"; 
import {Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Alert, Image, TouchableHighlight} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      menu :[
        { 
          title: 'Is this a smart TV?', 
          id: 1,
          data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
        },
        { 
          title: 'What are the offers available?',
          id: 2,
          data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
        { 
          title: 'Does this have LED display?',
          id: 3,
          data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
        },
      ]
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalClosed=()=>{
    this.setState({modalVisible: false});
  }

  render() {
    return (
			<View style={styles.container}>
      	<SmartGuidance />
				<SmartGuidanceWidgetHeader label="Top Questions" />
        <View style={{position: "relative"}}>
          { this.renderAccordians() }
        </View>
        <TouchableHighlight onPress={() => {this.setModalVisible(true);}}>
          <View style={{alignItems: "center", marginTop: 20}}>
            <Image source={require("./assets/talkButton.png")}/>
          </View>
        </TouchableHighlight>
        <ModalTalk isModalVisible={this.state.modalVisible} isItClosed={this.setModalClosed}></ModalTalk>
			</View>
    );
  }
  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
      items.push(
        <Accordian 
            title = {item.title}
            data = {item.data}
            key={item.id.toString()}
        />
      );
    }
    return items;
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: "column"
	}
});