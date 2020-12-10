import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'



export default class App extends React.Component {


  render() {
    return (
      <Provider store={createStore(reducer)}>

        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          <AddEntry />
          {/* <History /> */}


          {/* <StatusBar style="auto" /> */}
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {

    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})