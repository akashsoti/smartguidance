import React from 'react';
import { StyleSheet, View, Text, Modal, Image, Button } from 'react-native';

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace){
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeText}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return(
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType={"slide"}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
          <Button title="Close" onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
	modalContainer: {
    width: "100%",
    paddingTop: 100
  },
  placeImage: {
    width: "100%",
    height: 400
  },
  placeText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28
  }
});

export default placeDetail;