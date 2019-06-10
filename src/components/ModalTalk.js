import React, {Component} from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import {Modal, Text, TouchableOpacity, View, Alert, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';

class ModalTalk extends Component {

  render() {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={this.props.isModalVisible} onRequestClose={() => {alert('Modal has been closed.');}}>
          <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
            <View style={styles.modalOverlay}>
              <TouchableOpacity onPress={this.props.isItClosed}>
                <Icon name={"close"} size={30} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalStyle}>
              <Text style={styles.modalHeader}>Our Executive will call you back</Text>
              <TextInput keyboardType='numeric' style={styles.textInputStyle} placeholder={"999-xxx-6754"}></TextInput>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalOverlay: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex:1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20
  },
	modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20
  },
  modalStyle: {
    height: 248,
    backgroundColor: "white"
  },
  textInputStyle: {
    height: 47,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#949494",
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: "88%",
    alignItems: "center",
    marginLeft: 20
  },
});

export default ModalTalk;