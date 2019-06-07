//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
//import react in our code.
 
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

const ab = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: false, text: '', display: "none"};
    this.arrayholder = ab;
  }
 
  // componentDidMount() {
  //   return fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: responseJson
  //         },
  //         function() 
  //           this.arrayholder = responseJson;
  //         }
  //       );
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
      display: "block",
    });

    if (text === "") {
      this.setState({
        display: "none"
      })
    }

  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    const listDisplay = this.state.display;

    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <Text style={styles.searchWidgetTitle}>Amazon Assistance</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Get answers related to this product"
        />
        <View style={styles.searchListResults}>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({ item }) => (
              <Text style={styles.textStyle}>{item.title}</Text>
            )}
            enableEmptySections={true}
            style={{ display: listDisplay, height : 500, borderColor: "black" }}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchListResults: {
    borderWidth: 1,
    borderColor: "red",
  },
  searchWidgetTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#e59D52",
  },
  viewStyle: {
    justifyContent: 'center',
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});