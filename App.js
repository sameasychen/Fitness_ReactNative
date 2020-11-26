import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry';


export default class App extends React.Component {

  state ={
    value : 0
  }

  handlePress=()=>{
    alert('Hello!')
  }

  render(){
  return (
    <View>
      <AddEntry />
      {/* <TouchableHighlight onPress={this.handlePress} underlayColor='#d4271b'>
        <Text>Touchable Highlight</Text>
      </TouchableHighlight> */}

      {/* <Slider
        minimumValue = {-10}
        maximumValue ={10}
        step = {1}
        value ={this.state.value}
        onValueChange={(value)=>this.setState(()=>({value}))}
      /> */}

      <Text>
        Value: {this.state.value}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
  }
}
