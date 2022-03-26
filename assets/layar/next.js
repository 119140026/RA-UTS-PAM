import { StyleSheet, Text, View } from 'react-native';
import React,{Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home  from './home';
import Tiket from './inside/tiket';
import Submit from './inside/submit';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Tiket" component={Tiket}/>
          <Stack.Screen name="Submit" component={Submit}/>
        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;