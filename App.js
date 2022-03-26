import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react'

import Next from './assets/layar/next';
import Pesan from './assets/layar/pesan';
import Batal from './assets/layar/batal';
import Lainnya from './assets/layar/lainnya';

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      <NavigationContainer>

        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={Next} 
            options={{
            headerShown: false,
            tabBarLabel :'Beranda',
            tabBarIcon:()=>(
            <Icon name={'home'}  size={28}/>
              )
            }}
          /> 
          <Tab.Screen name="Pesan" component={Pesan}
            options={{
            headerShown: false,
            tabBarLabel :'Pemesanan',
            tabBarIcon:()=>(
            <Icon name={'bookmarks'}  size={28}/>
                )
            }}
          />
          <Tab.Screen name="Batal" component={Batal}
            options={{
            headerShown: false,
            tabBarLabel :'Pembatalan',
            tabBarIcon:()=>(
            <Icon name={'close-circle'} size={28}/>
                )
            }}
          />
          <Tab.Screen name="Lainnya" component={Lainnya}
            options={{
            headerShown: false,
            tabBarLabel :'Lainnya',
            tabBarIcon:()=>(
            <Icon name={'podium'}  size={28}/>
                )
            }}
          />
        </Tab.Navigator>

      </NavigationContainer>
    )
  }
}
export default App;