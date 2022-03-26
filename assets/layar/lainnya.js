import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const Pesan = ({})=> {
    return(
        <SafeAreaView style={edit.bg}>
            <View style={edit.box}>
                <Text style={edit.Text}>
                Informasi Developer
                </Text>
                
                <View >
                  <Text style={edit.a}>
                  <Icon name={'logo-whatsapp'} size={20} color='#00579c'/> 085267228032
                  </Text>
                </View>
                <View >
                  <Text style={edit.a}>
                  <Icon name={'logo-instagram'} size={20} color='#00579c'/> @asyrofulnurmaulana
                  </Text>
                </View>
                <View >
                  <Text style={edit.a}>
                  <Icon name={'logo-facebook'} size={20} color='#00579c'/> Asyroful Nur Maulana
                  </Text>
                </View>
                <View >
                  <Text style={edit.a}>
                  <Icon name={'logo-linkedin'} size={20} color='#00579c'/> Muhammad Asyroful Nur Maulana Yusuf
                  </Text>
                </View>
                <View >
                  <Text style={edit.a}>
                  <Icon name={'logo-google'} size={20} color='#00579c'/> muhammad.119140026@student.itera.ac.id
                  </Text>
                </View>
                <View >
                  <Text style={edit.k}>
                  Muhammad Asyroful Nur Maulana Yusuf - 119140026
                  </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const edit = StyleSheet.create({
    bg:{
      backgroundColor: "#00579c",
      flex : 1,
      alignItems:"center"
    },
    Text :{
      color : "#00579c",
      fontWeight : 'bold',
      fontSize : 25,
      marginBottom :20,
    },
    box:{
      marginTop :180,
      width : 300,
      backgroundColor :'white',
      alignItems : 'center',
      paddingVertical :10,
      paddingHorizontal :18,
      borderRadius : 5,
      shadowRadius :10,
    },
    a :{
      alignSelf :'flex-start',
      marginBottom : 10,
      fontWeight :'bold',
      fontSize :11,
      alignSelf:'center',
    },
    k:{
      color : "#00579c",
      fontWeight : 'bold',
      fontSize : 10,
      
    }
    
}) 

export default Pesan;