import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: props.data,
      expanded : false,
    }
	}

	render() {

		return (
			<View>
				<TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
						<Text style={[styles.title, styles.font]}>{this.props.title}</Text>
						<Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={"black"} />
				</TouchableOpacity>
				<View style={styles.parentHr}/>
				{
					this.state.expanded &&
					<View style={styles.child}>
						<Text>{this.props.data}</Text>    
					</View>
				}
				<View style={styles.separator}></View>
			</View>
		)
	}

	toggleExpand=()=>{
		this.setState({expanded : !this.state.expanded})
	}
}

const styles = StyleSheet.create({
	title:{
		fontSize: 14,
		color: "black",
	},
	separator:{
		borderWidth: 0.4,
		borderColor: "#d3d3d3",
		width: "100%"
	},
	row:{
		flexDirection: 'row',
		justifyContent:'space-between',
		height:44,
		paddingLeft:25,
		paddingRight:18,
		alignItems:'center',
	},
	parentHr:{
		height:1,
		color: "black",
		width:'100%'
	},
	child:{
		backgroundColor: "white",
		padding:25,
	}
});

export default Accordian;