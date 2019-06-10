import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, Alert, StyleSheet} from 'react-native';

class ModalTalk extends Component {

  render() {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={this.props.isModalVisible} onRequestClose={() => {alert('Modal has been closed.');}}>
          <View style={styles.modalOverlay}>
            <TouchableOpacity onPress={this.props.isItClosed}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 400, backgroundColor: "red"}}>
            <View>
              <Text style={styles.modalHeader}>Our Executive will call you back</Text>
            </View>
          </View>
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
    fontWeight: "bold"
	}
});

export default ModalTalk;