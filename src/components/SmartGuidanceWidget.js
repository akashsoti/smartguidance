import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableHighlight } from 'react-native';

const userQueries = [
  {
    "title": "What are the best product offers?"
  },
  {
    "title": "What are the new product features?"
  },
  {
    "title": "Does this product come with warranty?"
  },
  {
    "title": "Product details?"
  }
]

class SmartGuidance extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: false, text: '', display: "none", borderWidth: 0};
    this.arrayholder = userQueries;
  }
 
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
        display: "none",
        borderWidth: 0,
      });
    }

  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '100%',
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
              <TouchableHighlight>
                <Text style={styles.textStyle}>{item.title}</Text>
              </TouchableHighlight>
            )}
            enableEmptySections={true}
            style={{ display: listDisplay, height: 200, borderColor: "black" }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchListResults: {
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E59D52",
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
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0.5,
    paddingLeft: 10,
    borderColor: "#e59D52",
    backgroundColor: '#FFFFFF',
    borderRadius: 4
  },
});

export default SmartGuidance;