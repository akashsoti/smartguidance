import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

class ModalTalk extends Component {

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal animationType="slide" transparent={false} visible={this.props.isModalVisible} onRequestClose={() => {Alert.alert('Modal has been closed.');}}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ModalTalk;